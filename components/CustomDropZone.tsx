import { ActionIcon, Anchor, Image, Title } from "@mantine/core";
import { IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { ChangeEvent, SetStateAction, useState } from "react";
import { ClearAll, Upload, X } from "tabler-icons-react";

let imagesArray: (string)[] = []; //Stores string of uploaded images

export default function CustomDropzone() {

    const [images, setImages] = useState(imagesArray);

    const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const fileList: FileList = event.target.files!; //Needed to avoid Object maybe null error
            for (const file of fileList as any) {
                setImages(oriArray => [...oriArray, URL.createObjectURL(file)]);
            }
        }
        event.target.value = "";
        return false;
    }

    const imageLimit = () => {
        if (images.length >= 2) {
            return true
        }
        return false;
    }

    const clearAllImages = () => {
        return images.length && setImages([]);
    }


    return (
        <div className="w-full" >
            <div>
                <input type="file" className="hidden" id="imageUpload" accept="image/*" onChange={(event) => onImageChange(event)} disabled={imageLimit()} multiple></input>
                <label
                    className="border border-dashed w-full flex  flex-col place-items-center font-semibold text-slate-700 p-16 hover:cursor-pointer hover:bg-slate-50"
                    htmlFor="imageUpload">
                    <Upload size={35} className="mb-2" />
                    {imageLimit() ? "Image limit reached" : "Click to upload images"}
                </label>
            </div>
            <div>
                <div className="flex flex-row place-items-center items-center pt-1 justify-between">
                    <Title order={4} className="text-slate-700">
                        Uploaded Images
                    </Title>
                    <Anchor color="red" onClick={() => clearAllImages()} >Clear images</Anchor>
                </div>
                <div className="border">
                    <div className="flex flex-row flex-wrap space-x-2 p-2 place-items-center bg-slate-100 ">
                        {
                            images.length ?
                                images.map((image, index) => (
                                    <Image fit="contain" radius={"md"}
                                        className="max-h-32 max-w-xs w-32 rounded-lg m-0 hover:border-2 hover:scale-150 hover:z-50" id="output" src={image} key={index} onClick={() => { }} />
                                ))
                                : <div className="flex justify-center w-full">
                                    <p>
                                        No images uploaded
                                    </p>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}