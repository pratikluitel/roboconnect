import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ModalForm = ({ handleAdd, handleModalclose }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [image, setimage] = useState("");

  const handleSubmit = (event) => {
    handleAdd(
      {
        name,
        location,
        date,
        image,
      },
      event
    );
    setName("");
    setLocation("");
    setDate("");
    setimage("");
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
        placeholder="Date"
        id="date"
        type="text"
        value={date}
        name="date"
        onChange={({ target }) => setDate(target.value)}
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
      <Button type="submit">Add</Button>
    </form>
  );
};

export default ModalForm;
