import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ModalForm = ({ handleLogin, handleModalclose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
    handleModalclose();
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
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
        placeholder="Password"
        id="password"
        type="password"
        value={password}
        name="password"
        onChange={({ target }) => setPassword(target.value)}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default ModalForm;
