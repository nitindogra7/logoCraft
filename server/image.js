import fetch from "node-fetch";

const response = await fetch("https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2", {
  method: "POST",
  headers: { "Authorization": "Bearer HF_YOUR_TOKEN" },
  body: JSON.stringify({ inputs: "A futuristic city at sunset" }),
});
const result = await response.json();
console.log(result);
