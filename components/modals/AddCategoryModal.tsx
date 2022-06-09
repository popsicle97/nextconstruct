import { Title, Modal, TextInput, Button, ActionIcon, Stack } from "@mantine/core";
import { useState, ReactElement } from "react";
import { Plus } from "tabler-icons-react";


export default function AddCategoryModal() {

    const [opened, setOpened] = useState(false);

    const modalTitle = (<Title order={3} className="text-slate-700">Add a Category</Title>);

    const InputLabel = ({ label }: { label: string }): ReactElement => {
        return <Title className="text-slate-700" order={5}>{label}</Title>
    }

    return (
        <>
            <Modal opened={opened} title={modalTitle} onClose={() => { setOpened(false) }}>
                <form>
                    <Stack spacing={"sm"}>
                        <TextInput placeholder="Enter category" id="category-input-name" label={<InputLabel label="Category label" />}></TextInput>
                        <div className="flex flex-col space-y-2">
                            <Button className="bg-violet-500 hover:bg-violet-400" variant="filled">
                                Add
                            </Button>
                            <Button color="gray" variant="outline">
                                Cancel
                            </Button>
                        </div>
                    </Stack>
                </form>
            </Modal>
            <ActionIcon onClick={() => setOpened(true)} size={60} radius="xl" className="bg-green-500 text-white hover:bg-green-300 border-8 border-slate-50">
                <Plus size={"100%"} />
            </ActionIcon>
        </>
    )
}
