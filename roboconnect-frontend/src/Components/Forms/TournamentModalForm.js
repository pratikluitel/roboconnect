import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ModalForm = ({ handleAdd, handleModalclose }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [theme, setTheme] = useState("");
  const [date, setDate] = useState("");
  const [achievement, setAchievement] = useState("");
  const [photo, setPhoto] = useState("");
  const [project_id, setProjectId] = useState("");

  const handleSubmit = (event) => {
    handleAdd(
      {
        name,
        location,
        theme,
        date,
        achievement,
        photo,
        project_id,
      },
      event
    );
    setName("");
    setLocation("");
    setTheme("");
    setDate("");
    setAchievement("");
    setPhoto("");
    setProjectId("");
    handleModalclose();
  };
  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        margin="dense"
        placeholder="Name"
        id="name"
        type="text"
        value={name}
        name="name"
        onChange={({ target }) => setName(target.value)}
      />
      <TextField
        margin="dense"
        placeholder="Location"
        id="location"
        type="text"
        value={location}
        name="location"
        onChange={({ target }) => setLocation(target.value)}
      />
      <TextField
        margin="dense"
        placeholder="Theme"
        id="theme"
        type="text"
        value={theme}
        name="theme"
        onChange={({ target }) => setTheme(target.value)}
      />
      <TextField
        margin="dense"
        placeholder="Date"
        id="date"
        type="text"
        value={date}
        name="date"
        onChange={({ target }) => setDate(target.value)}
      />
      <TextField
        margin="dense"
        placeholder="Achievements"
        id="achievement"
        type="text"
        value={achievement}
        name="achievement"
        onChange={({ target }) => setAchievement(target.value)}
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
      <TextField
        margin="dense"
        placeholder="Project ID"
        id="project_id"
        type="text"
        value={project_id}
        name="project_id"
        onChange={({ target }) => setProjectId(target.value)}
      />
      <br />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default ModalForm;
