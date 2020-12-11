import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const MemberForm = ({ member, handleEdit, handleExpandClick }) => {
  const [name, setName] = useState(member.name);
  const [photo, setPhoto] = useState(member.photo);

  const handleSubmit = (event) => {
    handleEdit(
      {
        id: member.id,
        name,
        photo,
      },
      event
    );
    setName("");
    setPhoto("");
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
