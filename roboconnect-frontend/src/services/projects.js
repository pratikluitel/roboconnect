import axios from "axios";

const url = "http://dbms-projekt.herokuapp.com/project";

const getMembers = async () => {
  const reply = await axios.get(url);
  const actualMembers = reply.data.map((member) => ({
    id: member.id,
    name: member.title,
    image: member.photo_uri,
  }));

  return actualMembers;
};

const putMember = async ({ id, name, image }) => {
  await axios.put(url + `/${id}`, {
    title: name,
    photo_uri: image,
  });
};

const deleteMember = async (id) => {
  await axios.delete(url + `/${id}`);
};

const postMember = async ({ name, image }) => {
  await axios.post(url, {
    title: name,
    photo_uri: image,
  });
};

export { getMembers, putMember, deleteMember, postMember };
