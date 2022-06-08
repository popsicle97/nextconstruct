import Link from "next/link";
import React from "react";
import { Image } from "@mantine/core";


export default function LogoButton() {

    return (
        <div>
            <Link href="/">
                <div className="hover:cursor-pointer">
                    <Image
                        width={100}
                        src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.png"
                    ></Image>
                </div>
            </Link>
        </div>
    )
}