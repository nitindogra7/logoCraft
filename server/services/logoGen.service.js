import axios from "axios";
import FormData from "form-data";

export const generateLogoImage = async (prompt) => {
  const form = new FormData();
  form.append("prompt", prompt);

  const response = await axios.post(
    'https://clipdrop-api.co/text-to-image/v1',
    form,
    {
      headers: {
        'x-api-key': process.env.API_KEY,
        ...form.getHeaders()
      },
      responseType: "arraybuffer"
    }
  );

  return response.data;
};
