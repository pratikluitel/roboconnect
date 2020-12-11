import axios from "axios";

const url = "http://dbms-projekt.herokuapp.com/project";

const getMembers = async () => {
  const reply = await axios.get(url);
  const actualMembers = reply.data.map((member) => ({
    id: member.id,
    name: member.name,
    image: member.image,
  }));

  return actualMembers;
};

const putMember = async ({ id, name, image }) => {
  await axios.put(url + `/${id}`, {
    name,
    image,
  });
};

const deleteMember = async (id) => {
  await axios.delete(url + `/${id}`);
};

const postMember = async ({ name, image }) => {
  await axios.post(url, {
    name,
    image,
  });
};

export { getMembers, putMember, deleteMember, postMember };
