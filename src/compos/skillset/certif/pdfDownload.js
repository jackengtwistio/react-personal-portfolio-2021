import { PDFDocument, rgb } from "pdf-lib";
import download from "downloadjs";
import certifTemplate from "./certifTemplate.pdf";

export default async function pdfDownload(userName = "humanBean") {
  const existingPdfBytes = await fetch(certifTemplate)
    .then((res) => res.arrayBuffer())
    .catch((err) => console.error(err));

  const pdfDoc = await PDFDocument.load(existingPdfBytes).catch((err) =>
    console.error(err)
  );

  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const d = new Date();
  const date = d.toDateString();
  firstPage.drawText(userName, {
    x: 100,
    y: 400,
    size: 30,
    color: rgb(1, 215 / 255, 0),
  });
  firstPage.drawText(date, {
    x: 578,
    y: 570,
    size: 10,
    color: rgb(1, 215 / 255, 0),
  });
  const pdfBytes = await pdfDoc.save();
  download(pdfBytes, `${userName}' certification`, "application/pdf");
}
