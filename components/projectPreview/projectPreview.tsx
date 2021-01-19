import {useState} from "react";

export type ProjectPreviewProps = {
    title: string;
    description: string;
    imageSrc: string;
}

export default function ProjectPreview(props: ProjectPreviewProps){
    return <div className="w-full md:w-6/12 xl:w-3/12  flex flex-col bg-gray-200 rounded-xl p-3 text-black">
        <div className="h-28">
            {props.imageSrc}
        </div>
        <div>
            <h3 className="text-xl font-semibold">{props.title}</h3>
        </div>
        <div>
            {props.description}
        </div>
    </div>;
}