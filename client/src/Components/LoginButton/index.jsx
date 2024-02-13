import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LoginButton = () => {
    const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("submit");
    const username = event.target.elements.username.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
    navigate('/preview');
};


  return (
    <>
      <Button onClick={handleOpen}>Login</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <label>
              User name:
              <input type="text" name="username" />
            </label>
            <br/>
            <label>
              Email:
              <input type="text" name="email" />
            </label>
            <br/>
            <label>
              Password:
              <input type="text" name="password" />
            </label>
            <button type="submit">Submit</button>
        </form>
        </Box>
      </Modal>
    </>
  );
};

export default LoginButton;
