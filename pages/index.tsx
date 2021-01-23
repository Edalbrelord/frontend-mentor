import ProjectPreview from "../components/projectPreview/projectPreview";
import styles from "./index.module.css";
import {useEffect} from "react";
import {GetStaticProps} from "next";
import {ProjectsService} from "../services/projectsService";

export const getStaticProps: GetStaticProps = async (context) => {
    const projectFiles = ProjectsService.getProjectFiles();

    return {
        props: {
            projectFiles
        },
    }
}

export default function Index(props) {
    useEffect(() => {
        // document.querySelector("body").classList.add("bg-gray-200");
        // document.querySelector("body").classList.add("bg-blue-900");
    });

    const projectPreviews = props.projectFiles.map((projectFile, index) => {
        return <ProjectPreview
            title={projectFile.title}
            description={projectFile.description}
            imageSrc={projectFile.imageSrc}
            link={projectFile.link}
            imageRight={index % 2 == 0}/>
    });

    return <div className="text-gray-300">
        <div className={styles["hero-wrapper"]}>
            <div className="h-full align-middle flex flex-col items-center justify-around">
                <div className={`flex flex-col items-center justify-center p-5 rounded-xl border border-gray-400 shadow-lg bg-gray-600 bg-opacity-30 ${styles.blur}`}>
                    <div className="pb-3">
                        <h1 className="text-white text-3xl">Hey, I'm Stefan!</h1>
                    </div>
                    <div className="">
                        <h2 className="text-gray-300 text-xl">I make your designs come to life</h2>
                    </div>
                </div>

                <div className="">
                    <i className="fas fa-2x fa-angle-double-down"/>
                </div>

            </div>

        </div>

        <div className="bg-white text-black container mx-auto flex flex-col justify-center text-center">
            <h2 className="pt-20 pb-20 font-bold text-2xl">Skills</h2>
            <div className="pb-20 flex flex-row justify-evenly border-b">
                <div className="border border-gray-400 p-3 rounded-md flex flex-col items-center space-y-3 w-32 justify-between text-center">
                    <i className="fas fa-server fa-2x"/>
                    <h4 className="font-bold">Backend</h4>
                    <ul>
                        <li>Java</li>
                        <li>Typescript</li>
                    </ul>
                </div>
                <div className="border border-gray-400 p-3 rounded-md flex flex-col items-center space-y-3 w-32 justify-between text-center">
                    <i className="fas fa-laptop-code fa-2x"/>
                    <h4 className="font-bold">Frontend</h4>
                    <ul>
                        <li>Dart</li>
                        <li>Javascript</li>
                    </ul>
                </div>
                <div className="border border-gray-400 p-3 rounded-md flex flex-col items-center space-y-3 w-32 justify-between text-center">
                    <i className="fas fa-plane fa-2x"/>
                    <h4 className="font-bold">Pilot</h4>
                    <ul>
                        <li>Boeing 737</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="container mx-auto flex flex-col items-center px-20 pb-20 md:px-0 space-y-20">
            <h2 className="pt-20 font-bold text-2xl text-black">Projects</h2>
            <div className="w-full flex flex-col flex-wrap md:px-20 space-y-20">
                {projectPreviews}
            </div>
        </div>
    </div>;
}