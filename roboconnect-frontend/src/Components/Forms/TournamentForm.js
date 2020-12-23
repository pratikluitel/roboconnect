import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const MemberForm = ({ member, handleEdit, handleExpandClick }) => {
  const [name, setName] = useState(member.name);
  const [location, setLocation] = useState(member.location);
  const [theme, setTheme] = useState(member.theme);
  const [date, setDate] = useState(member.date);
  const [achievement, setAchievement] = useState(member.achievement);
  const [project_id, setProjectId] = useState(member.project_id);

  const handleSubmit = (event) => {
    handleEdit(
      {
        id: member.id,
        name,
        location,
        theme,
        date,
        achievement,
        project_id,
      },
      event
    );
    setName("");
    setLocation("");
    setTheme("");
    setDate("");
    setAchievement("");
    setProjectId("");
    handleExpandClick();
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
        id="achievements"
        type="text"
        value={achievement}
        name="achievements"
        onChange={({ target }) => setAchievement(target.value)}
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
      <Button type="submit">Edit</Button>
    </form>
  );
};

export default MemberForm;
