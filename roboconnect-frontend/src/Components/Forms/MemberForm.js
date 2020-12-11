import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const MemberForm = ({ member, handleEdit, handleExpandClick }) => {
  const [firstname, setFirstname] = useState(member.name.split(" ")[0]);
  const [lastname, setLastname] = useState(
    member.name.split(" ")[member.name.split(" ").length - 1]
  );
  const [email, setEmail] = useState(member.email);
  const [department, setDepartment] = useState(member.department);
  const [projects, setProjects] = useState(member.projects);
  const [photo, setPhoto] = useState(member.photo);

  const handleSubmit = (event) => {
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
  };
  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        margin="dense"
        placeholder="First Name"
        id="firstname"
        type="text"
        value={firstname}
        name="firstname"
        onChange={({ target }) => setFirstname(target.value)}
      />
      <TextField
        margin="dense"
        placeholder="Last Name"
        id="lastname"
        type="text"
        value={lastname}
        name="lastname"
        onChange={({ target }) => setLastname(target.value)}
      />
      <TextField
        margin="dense"
        placeholder="Email"
        id="email"
        type="text"
        value={email}
        name="email"
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextField
        margin="dense"
        placeholder="Department"
        id="department"
        type="text"
        value={department}
        name="department"
        onChange={({ target }) => setDepartment(target.value)}
      />
      <TextField
        margin="dense"
        placeholder="Projects"
        id="projects"
        type="text"
        value={projects}
        name="projects"
        onChange={({ target }) => setProjects(target.value)}
      />
      <TextField
        margin="dense"
        placeholder="Photo URI"
        id="photo"
        type="text"
        value={photo}
        name="photo"
        onChange={({ target }) => setPhoto(target.value)}
      />
      <br />
      <Button type="submit">Edit</Button>
    </form>
  );
};

export default MemberForm;
