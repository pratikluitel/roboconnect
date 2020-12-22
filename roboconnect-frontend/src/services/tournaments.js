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

const putMember = async (
  { id, name, location, theme, date, achievement },
  user
) => {
  await axios.put(
    url + `/${id}`,
    {
      name,
      location,
      theme,
      date,
      achievement,
    },
    {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }
  );
};

const deleteMember = async (id, user) => {
  await axios.delete(url + `/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
};

const postMember = async (
  { name, location, theme, date, achievement },
  user
) => {
  await axios.post(
    url,
    {
      name,
      location,
      theme,
      date,
      achievement,
    },
    {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }
  );
};

export { getMembers, putMember, deleteMember, postMember };
