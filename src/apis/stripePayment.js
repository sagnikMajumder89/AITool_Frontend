import axios from "axios";
const url = process.env.REACT_APP_SERVER_URL;
export const handleFreeSubscription = async () => {
  const response = await axios.post(
    `${url}/api/v1/stripe/free-plan`,
    {},
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const paymentIntent = async (data) => {
  const response = await axios.post(
    `${url}/api/v1/stripe/checkout`,
    { amount: Number(data.amount), subscriptionPlan: data.plan },
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const paymentVerify = async (paymentId) => {
  console.log("paymentId");
  console.log(paymentId);
  const response = await axios.post(
    `${url}/api/v1/stripe/verify-payment/${paymentId}`,
    {},
    {
      withCredentials: true,
    }
  );
  return response.data;
};
