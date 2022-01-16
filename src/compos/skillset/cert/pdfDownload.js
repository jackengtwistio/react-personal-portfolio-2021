import { PDFDocument, rgb } from "pdf-lib";
import download from "downloadjs";
import certifTemplate from "./certifTemplate.pdf";

export default async function PdfDownload() {
  const existingPdfBytes = await fetch(certifTemplate).then((res) =>
    res.arrayBuffer()
  );
  const userName = prompt("Enter your name please");
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const { width, height } = firstPage.getSize();
  console.log(`width:${width} height:${height}`);
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
  download(pdfBytes, "pdf-lib_creation_example.pdf", "application/pdf");
}
