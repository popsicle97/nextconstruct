import {

  Stack,
  Button,
  TextInput,
} from "@mantine/core";
import { ReactNode } from "react";

export default function LoginForm({ children }: { children: ReactNode }) {
  return (
    <form encType="">
      <Stack>
        <TextInput
          label="Username"
          placeholder="Enter username"
          id="signin-username-input"
          required
        ></TextInput>
        <TextInput
          label="Password"
          placeholder="Enter password"
          id="signin-password-input"
          type="password"
          required
        ></TextInput>
        <div>{children}</div>
        <button className="bg-violet-500 hover:bg-violet-400 text-sm font-normal p-2 rounded-2xl text-gray-50" type="submit">
          Sign in
        </button>
      </Stack>
    </form>
  );
}
