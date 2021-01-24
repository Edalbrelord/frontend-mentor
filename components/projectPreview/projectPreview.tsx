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
            <div className="flex flex-col md:flex-row justify-evenly rounded-xl border border-gray-400 shadow-lg bg-white bg-opacity-100 text-black hover:text-blue-900 overflow-hidden">
                <div className={`flex-none md:w-1/2 ${props.imageRight ? "md:order-last": ""}`}>
                    <div className="m-h-28">
                        <img src={props.imageSrc} alt={props.title} className=""/>
                    </div>

                </div>
                <div className="flex-none md:w-1/2 p-5">
                    <h3 className="text-xl font-bold">{props.title}</h3>
                    <p className="text-black">{props.description}</p>
                </div>
            </div>
        </a>
    </Link>;
}