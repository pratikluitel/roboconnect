import axios from "axios";

const url = "http://dbms-projekt.herokuapp.com/login";

const getToken = async (email, password) => {
  const reply = await axios.post(url, {
    email,
    password,
  });
  return reply.data;
};

export default getToken;
