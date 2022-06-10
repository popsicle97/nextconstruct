import {

  Stack,
  Button,
  TextInput,
} from "@mantine/core";
import { ReactNode } from "react";

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
        <button className="bg-violet-500 hover:bg-violet-400 text-sm font-normal p-2 rounded-2xl text-gray-50 active:translate-y-0.5">
          Sign in
        </button>
      </Stack>
    </form>
  );
}
