import axios from "axios";

const url = "http://dbms-projekt.herokuapp.com/member";

const getMembers = async () => {
  const reply = await axios.get(url);
  const actualMembers = reply.data.map((member) => ({
    id: member.id,
    name: member.first_name + " " + member.last_name,
    email: member.email,
    department: member.department,
    projects: member.project_ids,
    photo: member.photo_uri,
  }));
  console.log(actualMembers);

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
  const reply = await axios.put(url + `/${id}`, {
    first_name: firstname,
    last_name: lastname,
    email: email,
    dept: department,
    project_ids: projects,
    photo_uri: photo,
  });
  console.log(reply);
};

const deleteMember = async (id) => {
  await axios.delete(url + `/${id}`);
};

export { getMembers, putMember, deleteMember };
