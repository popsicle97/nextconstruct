import {
  InputWrapper,
  Input,
  Stack,
  Button,
  Anchor,
  TextInput,
} from "@mantine/core";
import { useModals } from "@mantine/modals";
import React, { ReactNode } from "react";
import ForgotPassForm from "./ForgotPassForm";

export default function LoginForm({ children }: { children: ReactNode }) {
  return (
    <form>
      <Stack>
        <TextInput
          label="Username"
          placeholder="Enter username"
          id="username-input"
          required
        ></TextInput>
        <TextInput
          label="Password"
          placeholder="Enter password"
          id="password-input"
          type="password"
          required
        ></TextInput>
        <div>{children}</div>
        {/* <ForgotPassForm></ForgotPassForm> */}
        <Button fullWidth className="bg-violet-500 hover:bg-violet-300">
          Sign in
        </Button>
      </Stack>
    </form>
  );
}
