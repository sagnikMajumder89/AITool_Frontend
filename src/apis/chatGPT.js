import axios from "axios";
const url = process.env.REACT_APP_SERVER_URL;
export const generateContent = async ({ prompt }) => {
  const response = await axios.post(
    `${url}/api/v1/openai/generate`,
    { prompt },
    {
      withCredentials: true,
    }
  );
  return response.data;
};
