import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LoginButton = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    console.log('Modal open state before opening:', open)
    setOpen(true);
  };

  const handleClose = () => {
    console.log('Modal open state before closing:', open);
    setOpen(false);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');

    //ensure the modal is closed before navigating
    setOpen(false);

  //   const navigate = useNavigate();
  //   console.log("submit");
  //   const username = event.target.elements.username.value;
  //   const email = event.target.elements.email.value;
  //   const password = event.target.elements.password.value;
  //   console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
    console.log('navigating to preview')
      navigate('/preview');
      // console.log('navigate', navigate)
    
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
            <br />
            <button type="submit">Submit</button>
        </form>
        </Box>
      </Modal>
    </>
  );
};

export default LoginButton;
