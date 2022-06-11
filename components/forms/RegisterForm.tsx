import { Button, Stack, TextInput } from "@mantine/core";
import React from "react";

export default function RegisterForm() {
  return (
    <form>
      <Stack>
        <TextInput
          label="Username"
          placeholder="Enter username"
          id="register-username-input"
          required
        ></TextInput>
        <TextInput
          label="Password"
          placeholder="Enter password"
          id="register-password-input"
          type="password"
          required
        ></TextInput>
        <TextInput
          label="E-mail"
          placeholder="Enter email"
          type="email"
          id="register-email-input"
          required
        ></TextInput>
        <TextInput
          label="Phone No"
          placeholder="Enter Phone"
          type="text"
          id="register-phoneno-input"
          required
        ></TextInput>
        <button className="bg-violet-500 hover:bg-violet-300 p-2 text-white rounded-2xl font-normal text-sm" type="submit">
          Register
        </button>
      </Stack>
    </form>
  );
}
