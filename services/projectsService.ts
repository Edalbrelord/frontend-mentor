import fs from "fs";
import { join } from "path";
import {Project} from "../models/project";
import matter from 'gray-matter';

export class ProjectsService {

    static getProjectFiles(): Project[] {
        const projectFiles: Project[] = [];

        const projectsDirectory = "content/projects";
        const files = fs.readdirSync(projectsDirectory);

        files.map((file) => {
            const fullPath = join(projectsDirectory, `${file}`);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            const project = {
                date: JSON.stringify(data.date),
                description: content,
                imageSrc: data.imageSrc,
                link: data.link,
                title: data.title,
            };

            projectFiles.push(project);
        })

        return projectFiles;
    }
}