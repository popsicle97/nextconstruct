import { Button, InputWrapper, Modal, Stack, TextInput } from "@mantine/core";
import React, { useState } from "react";

export default function ForgotPassForm() {
  const [opened, setOpened] = useState(false);

  return (
    <form>
      <Stack>
        <TextInput
          label="Enter email"
          description="A email with link will be sent to you"
          placeholder="Enter email"
          type="email"
          id="email-input"
          required
        ></TextInput>
        <button className="font-normal text-sm p-2 bg-violet-500 rounded-2xl text-white hover:bg-violet-400">Send email</button>
      </Stack>
    </form>
  );
}
