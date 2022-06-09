import { Container } from "@mantine/core";
import { NextPage } from "next";
import { ReactElement } from "react";
import AdminLayout from "../../components/AdminLayout";

export default function AdminHome() {

    return (
        <div>
            <div className="shadow-md">
                Home
            </div>
        </div>
    )

}


AdminHome.getLayout = function getLayout(page: ReactElement) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}