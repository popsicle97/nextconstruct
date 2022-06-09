import { ReactElement } from "react"
import AdminLayout from "../../components/AdminLayout"


export default function AdminUsers() {

    return (
        <div>
            Users
        </div>       
    )
}

AdminUsers.getLayout = function getLayout(page: ReactElement) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}