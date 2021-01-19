import {useState} from "react";
import Link from "next/dist/client/link";

export type ProjectPreviewProps = {
    title: string;
    description: string;
    imageSrc: string;
    link: string;
}

export default function ProjectPreview(props: ProjectPreviewProps){
    return <Link href={props.link}>
        <a>
            <div className="flex flex-col bg-gray-600 rounded-xl p-3 text-gray-200 hover:text-orange-600">
                <div className="h-28">
                    {props.imageSrc}
                </div>
                <div>
                    <h3 className="text-xl font-semibold">{props.title}</h3>
                </div>
                <div>
                    {props.description}
                </div>
            </div>
        </a>
    </Link>;
}