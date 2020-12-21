import axios from "axios";

const url = "http://dbms-projekt.herokuapp.com/login";

const getToken = async () => {
  const reply = await axios.post(url, {
    email: "email@example.com",
    password: "i-am-admin",
  });
  return reply.data;
};

export default getToken;
