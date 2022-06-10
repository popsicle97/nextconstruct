import {
  ActionIcon,
  Anchor,
  Button,
  Group,

  Modal,
  Tabs,
} from "@mantine/core";
import React, { useState } from "react";
import {
  ClipboardList,
  Login,
  QuestionMark,
  UserCircle,
} from "tabler-icons-react";
import ForgotPassForm from "../forms/ForgotPassForm";
import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";

export default function LoginModal() {
  const [opened, setOpened] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <Modal
        transition="slide-left"
        transitionDuration={300}
        opened={opened}
        id="LoginModal"
        onClose={() => setOpened(false)}
        title={
          <div className="flex flex-row gap-2">
            {
            activeTab == 0 ? (<><Login spacing={"xs"} /> <h2>Sign In</h2></>) 
            : activeTab == 1 ? (<><ClipboardList spacing={"xs"} /> <h2>Register</h2></> )
            : (<><QuestionMark spacing={"xs"} /> <h2>Forgot Password</h2></>)
            }
          </div>
        }
      >
        <Tabs active={activeTab} onTabChange={setActiveTab} color="violet">
          <Tabs.Tab label="Sign in" icon={<Login spacing={"xs"} />}>
            <LoginForm>
              <Anchor className="text-sm" onClick={() => setActiveTab(3)}>
                Forgot password?
              </Anchor>
            </LoginForm>
          </Tabs.Tab>
          <Tabs.Tab 
            label="Register"
            icon={<ClipboardList spacing={"xs"} />}
          >
             <RegisterForm></RegisterForm>
          </Tabs.Tab>
          <Tabs.Tab label="Forgot password" hidden>
            <ForgotPassForm></ForgotPassForm>
          </Tabs.Tab>
        </Tabs>

        <Button
          variant="outline"
          className="mt-2"
          onClick={() => setOpened(false)}
          fullWidth
          color="dark"
        >
          Close
        </Button>
      </Modal>

      <Group position="center" className="border-l pl-2">
        <ActionIcon onClick={() => setOpened(true)}>
          <UserCircle />
        </ActionIcon>
      </Group>
    </>
  );
}
