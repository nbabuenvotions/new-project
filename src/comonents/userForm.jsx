import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { registerUsers } from "../API/AuthAPI";

const fields = [
  { label: "Name", name: "name", type: "text" },
  { label: "Phone", name: "phone", type: "tel" },
  { label: "Email", name: "email", type: "email" },
];

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUsers(formData);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        p: 3,
        boxShadow: 2,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" gutterBottom>
        User Form
      </Typography>

      {fields.map((field) => (
        <TextField
          key={field.name}
          fullWidth
          margin="normal"
          label={field.label}
          name={field.name}
          type={field.type}
          value={formData[field.name]}
          onChange={handleChange}
          required
        />
      ))}

      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default UserForm;
