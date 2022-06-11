import {
  ActionIcon,
  Anchor,
  Button,
  Group,

  Modal,
  Tabs,
  Title,
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
              activeTab == 0 ? (<><Login spacing={"xs"} /> <Title order={4}>Sign In</Title></>)
                : activeTab == 1 ? (<><ClipboardList spacing={"xs"} /> <Title order={4}>Register</Title></>)
                  : (<><QuestionMark spacing={"xs"} /> <Title order={4}>Forgot Password</Title></>)
            }
          </div>
        }
      >
        <Tabs active={activeTab} onTabChange={setActiveTab} color="violet" >
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

        <button className="mt-2 bg-slate-200 w-full p-2 rounded-2xl text-sm text-normal hover:bg-slate-100" onClick={() => setOpened(false)} type="submit">
          Close
        </button>
      </Modal>

      <Group position="center" className="border-l pl-2">
        <ActionIcon onClick={() => setOpened(true)}>
          <UserCircle />
        </ActionIcon>
      </Group>
    </>
  );
}
