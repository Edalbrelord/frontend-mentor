import Link from "next/dist/client/link";
import styles from "./projectPreview.module.css"

export type ProjectPreviewProps = {
    title: string;
    description: string;
    imageSrc: string;
    link: string;
    imageRight: boolean;
}

export default function ProjectPreview(props: ProjectPreviewProps){
    return <Link href={props.link}>
        <a className={styles.greyscale}>
            <div className="flex flex-row justify-evenly rounded-xl border border-gray-400 shadow-lg bg-gray-200 bg-opacity-30 text-white hover:text-blue-200 overflow-hidden">
                <div className={`flex-none w-1/2 ${props.imageRight ? "order-last": ""}`}>
                    <div className="m-h-28">
                        <img src={props.imageSrc} alt={props.title} className=""/>
                    </div>

                </div>
                <div className="flex-none w-1/2 p-5">
                    <h3 className="text-xl font-semibold">{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </a>
    </Link>;
}