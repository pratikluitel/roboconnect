import axios from "axios";

const url = "http://dbms-projekt.herokuapp.com/event";

const getMembers = async () => {
  const reply = await axios.get(url);
  const actualMembers = reply.data.map((member) => ({
    id: member.id,
    name: member.name,
    location: member.location,
    date: member.date,
    image: member.photo_uri,
  }));

  return actualMembers;
};

const putMember = async ({ id, name, location, date, image }) => {
  await axios.put(url + `/${id}`, {
    name: name,
    location: location,
    date: date,
    photo_uri: image,
  });
};

const deleteMember = async (id) => {
  await axios.delete(url + `/${id}`);
};

const postMember = async ({ name, location, date, image }) => {
  await axios.post(url, {
    name: name,
    location: location,
    date: date,
    photo_uri: image,
  });
};

export { getMembers, putMember, deleteMember, postMember };
