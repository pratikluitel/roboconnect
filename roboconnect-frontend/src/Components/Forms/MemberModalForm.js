import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ModalForm = ({ handleAdd, handleModalclose }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [projects, setProjects] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = (event) => {
    handleAdd(
      {
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
    handleModalclose();
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
      <Button type="submit">Add</Button>
    </form>
  );
};

export default ModalForm;
