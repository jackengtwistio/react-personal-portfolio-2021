import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import download from "downloadjs";

export default async function PdfDownload() {
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const userName = prompt();
  console.log(userName);
  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();
  const fontSize = 30;
  page.drawText("Creating PDFs in JavaScript is awesome!", {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0.53, 0.71),
  });

  const pdfBytes = await pdfDoc.save();
  // download(pdfBytes, "pdf-lib_creation_example.pdf", "application/pdf");
}
