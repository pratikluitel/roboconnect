import axios from "axios";

const url = "http://dbms-projekt.herokuapp.com/tournament";

const getMembers = async () => {
  const reply = await axios.get(url);
  const actualMembers = reply.data.map((member) => ({
    id: member.id,
    name: member.name,
    location: member.location,
    theme: member.theme,
    date: member.date,
    achievement: member.achievement,
  }));

  return actualMembers;
};

const putMember = async ({ id, name, location, theme, date, achievement }) => {
  await axios.put(url + `/${id}`, {
    name,
    location,
    theme,
    date,
    achievement,
  });
};

const deleteMember = async (id) => {
  await axios.delete(url + `/${id}`);
};

const postMember = async ({ name, location, theme, date, achievement }) => {
  await axios.post(url, {
    name,
    location,
    theme,
    date,
    achievement,
  });
};

export { getMembers, putMember, deleteMember, postMember };
