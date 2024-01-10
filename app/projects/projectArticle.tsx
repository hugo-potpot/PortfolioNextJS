import {Project} from "@/app/projects/page";
import {FaGithub} from "react-icons/fa";
import React from "react";


interface ProjectArticleProps {
    project: Project;
}
const ProjectArticle = (props: ProjectArticleProps) => {
    const { project } = props;
    return (
        <>
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-contain rounded-t-lg"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between">
                    {project?.githubLink && (
                        <a
                            href={project.githubLink}
                            className="text-blue-500 hover:text-blue-700"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                        </a>
                    )}
                    {project.demoLink && (
                        <a
                            href={project.demoLink}
                            className="text-blue-500 hover:text-blue-700"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Démo
                        </a>
                    )}
                </div>
            </div>
        </>
    );
};


export default ProjectArticle;