import { useState } from "react";

const MemberForm = ({ member, handleEdit, handleExpandClick }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [projects, setProjects] = useState("");
  const [photo, setPhoto] = useState("");
  return (
    <form
      onSubmit={(event) => {
        handleEdit(
          {
            id: member.id,
            firstname,
            lastname,
            email,
            department,
            projects,
            photo,
          },
          event
        );
        setFirstname("");
        setLastname("");
        setEmail("");
        setDepartment("");
        setProjects("");
        setPhoto("");
        handleExpandClick();
      }}
    >
      <div>
        {" "}
        firstname{" "}
        <input
          id="firstname"
          type="text"
          value={firstname}
          name="firstname"
          onChange={({ target }) => setFirstname(target.value)}
        />{" "}
      </div>{" "}
      <div>
        {" "}
        lastname{" "}
        <input
          id="lastname"
          type="text"
          value={lastname}
          name="lastname"
          onChange={({ target }) => setLastname(target.value)}
        />{" "}
      </div>{" "}
      <div>
        {" "}
        email{" "}
        <input
          id="email"
          type="text"
          value={email}
          name="email"
          onChange={({ target }) => setEmail(target.value)}
        />{" "}
      </div>
      <div>
        {" "}
        department{" "}
        <input
          id="department"
          type="text"
          value={department}
          name="department"
          onChange={({ target }) => setDepartment(target.value)}
        />{" "}
      </div>
      <div>
        {" "}
        projects{" "}
        <input
          id="projects"
          type="text"
          value={projects}
          name="projects"
          onChange={({ target }) => setProjects(target.value)}
        />{" "}
      </div>
      <div>
        {" "}
        photo{" "}
        <input
          id="photo"
          type="text"
          value={photo}
          name="photo"
          onChange={({ target }) => setPhoto(target.value)}
        />{" "}
      </div>
      <button type="submit">Edit</button>{" "}
    </form>
  );
};

export default MemberForm;
