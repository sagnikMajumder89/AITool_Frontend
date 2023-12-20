import axios from "axios";
const url = process.env.REACT_APP_SERVER_URL;
//*-------------Registration-------------
export const registerAPI = async (user) => {
  const response = await axios.post(`${url}/api/v1/users/register`, user, {
    withCredentials: true,
  });
  return response.data;
};
//*-------------Login-------------
export const loginAPI = async (user) => {
  const response = await axios.post(`${url}/api/v1/users/login`, user, {
    withCredentials: true,
  });
  return response.data;
};
//*-------------Check Auth-------------
export const checkAuth = async (user) => {
  const response = await axios.get(`${url}/api/v1/users/checkAuth`, {
    withCredentials: true,
  });
  return response.data;
};
//*-------------Logout-------------
export const logoutAPI = async (user) => {
  const response = await axios.post(
    `${url}/api/v1/users/logout`,
    {},
    {
      withCredentials: true,
    }
  );
  return response.data;
};
//*-------------User Profile-------------
export const userProfileAPI = async () => {
  const response = await axios.get(`${url}/api/v1/users/profile`, {
    withCredentials: true,
  });
  return response.data;
};
