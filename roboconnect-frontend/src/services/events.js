import axios from "axios";

const url = "http://dbms-projekt.herokuapp.com/event";

const getMembers = async () => {
  const reply = await axios.get(url);
  const actualMembers =
    reply.data === null
      ? null
      : reply.data.map((member) => ({
          id: member.id,
          name: member.name,
          location: member.location,
          date: member.date,
          image: member.photo_uri,
        }));

  return actualMembers;
};

const putMember = async ({ id, name, location, date, image }, user) => {
  await axios.put(
    url + `/${id}`,
    {
      name: name,
      location: location,
      date: date,
      photo_uri: image,
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

const postMember = async ({ name, location, date, image }, user) => {
  await axios.post(
    url,
    {
      name: name,
      location: location,
      date: date,
      photo_uri: image,
    },
    {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }
  );
};

export { getMembers, putMember, deleteMember, postMember };
