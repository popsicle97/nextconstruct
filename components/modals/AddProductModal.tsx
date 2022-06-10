import { ActionIcon, Button, Group, Modal, Select, Stack, TextInput, Title } from "@mantine/core";
import { ReactElement, useState } from "react";
import { Plus } from "tabler-icons-react";


export default function AddProductModal() {

    const [opened, setOpened] = useState(false);

    const modalTitle = (<Title order={3} className="text-slate-700">Add a Product</Title>);

    const InputLabel = ({ label }: { label: string }): ReactElement => {
        return <Title className="text-slate-700" order={5}>{label}</Title>
    }

    return (
        <>
            <Modal opened={opened} title={modalTitle} onClose={() => { setOpened(false) }}>
                <form>
                    <Stack spacing={"sm"}>
                        <TextInput placeholder="Enter product name" id="product-input-name" label={<InputLabel label="Name" />}></TextInput>
                        <Select data={[]} placeholder="Pick a product brand" id="product-input-brand" label={<InputLabel label="Brand" />}></Select>
                        <Select data={[]} placeholder="Pick a product category" id="product-input-category" label={<InputLabel label="Category" />}></Select>
                        <TextInput placeholder="Enter product price" id="product-input-price" label={<InputLabel label="Price" />}></TextInput>
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

