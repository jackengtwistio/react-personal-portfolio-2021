import { ProgressStyled } from "../css/progress.js";
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

export default function Progress({ max, value }) {
  return (
    <ProgressStyled>
      <label htmlFor="file">Your progress:</label>
      <progress id="file" max={max} value={value}></progress>
    </ProgressStyled>
  );
}

const formData = new FormData();
formData.append(
  "instructions",
  JSON.stringify({
    parts: [
      {
        html: "index.html",
      },
    ],
  })
);
formData.append("index.html", fs.createReadStream("index.html"));
(async () => {
  try {
    const response = await axios.post(
      "https://api.pspdfkit.com/build",
      formData,
      {
        headers: formData.getHeaders({
          Authorization: "Bearer your_api_key_here",
        }),
        responseType: "stream",
      }
    );

    response.data.pipe(fs.createWriteStream("result.pdf"));
  } catch (e) {
    const errorString = await streamToString(e.response.data);
    console.log(errorString);
  }
})();

function streamToString(stream) {
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on("error", (err) => reject(err));
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });
}
