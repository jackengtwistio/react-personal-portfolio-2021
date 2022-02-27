import { StandardFonts, PDFDocument, rgb } from "pdf-lib";
import download from "downloadjs";

let geoAPI = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export default async function pdfDownload(
  userName = "humanBean",
  timeCounts = {},
  timeOfClick = new Date()
) {
  const pngUrl = "https://pdf-lib.js.org/assets/minions_banana_alpha.png";
  const pngImageBytes = await fetch(pngUrl).then((res) => res.arrayBuffer());
  const totalTime = timeCounts["JS"] + timeCounts["DM"] + timeCounts["N"];

  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const pngImage = await pdfDoc.embedPng(pngImageBytes);
  const page = pdfDoc.addPage();
  const maxHeight = page.getHeight();
  const maxWidth = page.getWidth();

  function draw({
    x,
    y,
    size = 10,
    font = timesRomanFont,
    color = rgb(0, 0, 0),
    lineHeight = size,
    opacity = 0.5,
    name = "drawText",
    text,
    ...other
  } = {}) {
    if (name === "drawText") {
      return page.drawText(text, {
        x,
        y,
        size,
        color,
        lineHeight,
        opacity,
        ...other,
      });
    }
    return page[name]({
      x,
      y,
      size,
      color,
      lineHeight,
      opacity,
      ...other,
    });
  }
  function rectWithTags(nameValue) {
    let count = 0;
    let barWidth = 10;
    for (let name in nameValue) {
      const width = (nameValue[name] * 100) / totalTime;
      count++;
      draw({
        x: 25,
        y: maxHeight - count * (barWidth * 1.3) - barWidth, //start after the bar width;
        width,
        height: barWidth,
        name: "drawRectangle",
        borderWidth: 0.5,
        color: rgb(0.75, 0.2, 0.2),
        borderOpacity: 0.75,
      });

      draw({
        x: 5,
        y: maxHeight - count * (barWidth * 1.3) - 10,
        text: name,
      });
      draw({
        x: 28 + width,
        y: maxHeight - count * (barWidth * 1.3) - 10,
        text: nameValue[name].toString(),
      });
    }
    draw({
      start: { x: 25, y: maxHeight - 8 },
      end: { x: 25, y: maxHeight - (count + 1) * barWidth * 1.3 },
      thickness: 1,
      name: "drawLine",
    });
    draw({
      start: { x: 25, y: maxHeight - (count + 1) * barWidth * 1.3 },
      end: { x: 125, y: maxHeight - (count + 1) * barWidth * 1.3 },
      thickness: 1,
      name: "drawLine",
    });

    draw({
      x: 25,
      y: maxHeight - (count + 1) * barWidth * 1.3 - 12,
      text: "time you spent in each section",
    });
  }
  rectWithTags(timeCounts);
  draw({
    x: maxWidth / 2 - (25 * userName.length) / 2,
    y: maxHeight - 210,
    opacity: 1,
    size: 50,
    text: `${userName}`,
  });
  let completedText = `completed Jack's resume successfully!`;
  draw({
    x: maxWidth / 2 - (15 * completedText.length) / 2,
    y: maxHeight - 245,
    opacity: 1,
    size: 30,
    color: rgb(241 / 255, 202 / 255, 8 / 255),
    text: completedText,
  });
  draw({
    x: 160,
    y: maxHeight - 150,
    size: 30,
    color: rgb(0.8, 0.7, 0),
    opacity: 0.8,
    text: "Congratulations!",
  });

  try {
    await fetch(geoAPI)
      .then((r) => r.json())
      .then(function (d) {
        draw({
          x: maxWidth - 125,
          y: maxHeight - 25,
          text: `completion time:\n${timeOfClick}\nlocation:\n${d.city}`,
        });
      });
  } catch (e) {
    draw({
      x: maxWidth - 125,
      y: maxHeight - 25,
      text: `completion time:\n${timeOfClick}\nlocation:\nEarth`,
    });
  }
  const pngDims = pngImage.scale(0.5);
  page.drawImage(pngImage, {
    x: maxWidth / 2 - pngDims.width / 2 + 75,
    y: 10,
    width: pngDims.width,
    height: pngDims.height,
  });

  const pdfBytes = await pdfDoc.save();
  download(pdfBytes, `${userName}' certification`, "application/pdf");
}
