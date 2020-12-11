import axios from "axios";

const url = "http://dbms-projekt.herokuapp.com/member";

const getMembers = async () => {
  const reply = await axios.get(url);
  const actualMembers = reply.data.map((member) => ({
    id: member.id,
    name: member.first_name + " " + member.last_name,
    email: member.email,
    department: member.dept,
    projects: member.project_ids,
    photo: member.photo_uri,
  }));

  return actualMembers;
};

const putMember = async ({
  id,
  firstname,
  lastname,
  email,
  department,
  projects,
  photo,
}) => {
  await axios.put(url + `/${id}`, {
    first_name: firstname,
    last_name: lastname,
    email: email,
    dept: department,
    project_ids: projects,
    photo_uri: photo,
  });
};

const deleteMember = async (id) => {
  await axios.delete(url + `/${id}`);
};

const postMember = async ({
  firstname,
  lastname,
  email,
  department,
  projects,
  photo,
}) => {
  await axios.post(url, {
    first_name: firstname,
    last_name: lastname,
    email: email,
    dept: department,
    project_ids: projects,
    photo_uri: photo,
  });
};

export { getMembers, putMember, deleteMember, postMember };
