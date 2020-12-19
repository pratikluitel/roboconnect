import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const MemberForm = ({ member, handleEdit, handleExpandClick }) => {
  const [name, setName] = useState(member.name);
  const [image, setimage] = useState(member.image);

  const handleSubmit = (event) => {
    handleEdit(
      {
        id: member.id,
        name,
        image,
      },
      event
    );
    setName("");
    setimage("");
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
        placeholder="image URI"
        id="image"
        type="text"
        value={image}
        name="image"
        onChange={({ target }) => setimage(target.value)}
      />
      <br />
      <Button type="submit">Edit</Button>
    </form>
  );
};

export default MemberForm;
