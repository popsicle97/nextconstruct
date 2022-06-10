import { ActionIcon, Title, Text, TextInput, Tooltip, Table } from "@mantine/core"
import { ReactElement } from "react"
import { ClipboardText, Filter, Plus, } from "tabler-icons-react"
import AdminLayout from "../../../components/AdminLayout"
import AddCategoryModal from "../../../components/modals/AddCategoryModal"

export default function AdminCategoryListing() {

    return (
        <div className="h-93PercHeight ">
            <div className="shadow-sm p-4 bg-white rounded-sm flex justify-between place-items-center">
                <div>
                    <Title order={2} className="text-slate-700">Add New Category</Title>
                    <Text size="sm" className="text-slate-400">Add a new category for a product</Text>
                </div>
                <div>
                    {/* <ActionIcon size={60} radius="xl" className="bg-green-500 text-white hover:bg-green-300 border-8 border-slate-50">
                    <Plus size={"100%"} />
                </ActionIcon> */}
                    <AddCategoryModal></AddCategoryModal>
                </div>
            </div>
            <div className="shadow-sm bg-white mt-2 rounded-sm p-2 h-93PercHeight">
                <div className="flex justify-between flex-nowrap place-items-center">
                    <div className="flex place-items-center space-x-2">
                        <ClipboardText className="text-slate-700" />
                        <Title order={2} className="text-slate-700">Categories</Title>
                    </div>
                    <div className="flex place-items-center space-x-2">
                        <Tooltip label="Filter by" withArrow>
                            <ActionIcon size="md">
                                <Filter size={"100%"} />
                            </ActionIcon>
                        </Tooltip>
                        <TextInput radius={"xl"} placeholder="Search category" type="text"></TextInput>
                    </div>
                </div>
                <div className="overflow-y-scroll mt-4 w-full h-93PercHeight">
                    <Table fontSize="xs" horizontalSpacing={"xs"} verticalSpacing={1}>
                        <thead className="sticky top-0 bg-white z-10 shadow-sm">
                            <tr>
                                <th>Name</th>
                                <th>Date Added</th>
                                <th>Units</th>
                                <th>
                                    {/* Action button header */}
                                </th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

AdminCategoryListing.getLayout = function getLayout(page: ReactElement) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}