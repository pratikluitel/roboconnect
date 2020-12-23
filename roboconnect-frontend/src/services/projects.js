import axios from "axios";

const url = "http://dbms-projekt.herokuapp.com/project";

const getMembers = async () => {
  const reply = await axios.get(url);
  const actualMembers =
    reply.data === null
      ? null
      : reply.data.map((member) => ({
          id: member.id,
          name: member.title,
          image: member.photo_uri,
        }));

  return actualMembers;
};

const getMember = async (id) => {
  const reply = await axios.get(url + `/${id}`);
  const actualMembers =
    reply.data === null
      ? null
      : {
          id: reply.data.id,
          name: reply.data.title,
          image: reply.data.photo_uri,
        };

  return actualMembers;
};

const putMember = async ({ id, name, image }, user) => {
  await axios.put(
    url + `/${id}`,
    {
      title: name,
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

const postMember = async ({ name, image }, user) => {
  await axios.post(
    url,
    {
      title: name,
      photo_uri: image,
    },
    {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }
  );
};

export { getMembers, putMember, deleteMember, postMember, getMember };
