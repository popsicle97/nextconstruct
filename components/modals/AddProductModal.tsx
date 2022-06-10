import { ActionIcon, Button, Group, MantineTheme, Modal, Select, Stack, TextInput, Title, Text, useMantineTheme } from "@mantine/core";
import { Dropzone, DropzoneStatus, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { ReactElement, useState } from "react";
import { Plus, X, Icon as TablerIcon, Upload, Photo } from "tabler-icons-react";
import CustomDropzone from "../CustomDropZone";


function getIconColor(status: DropzoneStatus, theme: MantineTheme) {
    return status.accepted
        ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
        : status.rejected
            ? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
            : theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.gray[7];
}


function ImageUploadIcon({
    status,
    ...props
}: React.ComponentProps<TablerIcon> & { status: DropzoneStatus }) {
    if (status.accepted) {
        return <Upload {...props} />;
    }

    if (status.rejected) {
        console.log(status)
        return <X {...props} />;
    }

    return <Photo {...props} />;
}

export const dropzoneChildren = (status: DropzoneStatus, theme: MantineTheme) => (
    <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
        <ImageUploadIcon status={status} style={{ color: getIconColor(status, theme) }} size={80} />

        <div>
            <Text size="xl" inline>
                Drag images here or click to select files
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed 5mb
            </Text>
        </div>
    </Group>
);

export default function AddProductModal() {

    const theme = useMantineTheme();

    const [opened, setOpened] = useState(false);

    const modalTitle = (<Title order={3} className="text-slate-700">Add a Product</Title>);

    const InputLabel = ({ label }: { label: string }): ReactElement => {
        return <Text className="text-slate-700" weight={550}>{label}</Text>
    }



    return (
        <>
            <Modal opened={opened} title={modalTitle} onClose={() => { setOpened(false) }} overlayOpacity={0.55} overlayBlur={1} overlayColor={'lightgray'}>
                <form encType="multipart/form-data" method="POST" action="/product/add">
                    <Stack spacing={"md"}>
                        <TextInput placeholder="Enter product name" id="product-input-name" label={<InputLabel label="Name" />} type="text"></TextInput>
                        <Select data={[]} placeholder="Pick a product brand" id="product-input-brand" label={<InputLabel label="Brand" />}></Select>
                        <Select data={[]} placeholder="Pick a product category" id="product-input-category" label={<InputLabel label="Category" />}></Select>
                        <TextInput placeholder="Enter product price" id="product-input-price" label={<InputLabel label="Price" />}></TextInput>
                        <CustomDropzone></CustomDropzone>
                        <div className="flex flex-col space-y-2">
                            <Button className="bg-violet-500 hover:bg-violet-400" variant="filled">
                                Submit
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

