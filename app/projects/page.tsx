import React from 'react';
import {FaGithub} from "react-icons/fa";
import ProjectArticle from "@/app/projects/projectArticle";

export interface Project {
    title: string;
    image: string;
    description: string;
    demoLink?: string;
    githubLink?: string;
}
const ProjectsPage = () => {
    const projects: Project[] = [
            {
                title: 'SneekMarket',
                image: '/image/projects/sneekmarket.png',
                description: 'Site de configuration de bot Discord pour SneekMarket.',
                demoLink: 'https://sneekmarket.com/',
            },
            {
                title: 'SneekFinder',
                image: '/image/projects/sneekmarket.png',
                description: 'Monitor discord pour scrape un maximum de marketplace discord. Keyword intégré.',
            },
            {
                title: 'SneekTools',
                image: '/image/projects/sneekmarket.png',
                description: 'Bot discord pour envoyer automatiquement des messages sur des serveurs discord.',
            },
            {
                title: 'SneekWTN',
                image: '/image/projects/wtn.png',
                description: 'Bot pour accepter automatiquement les offres sur le seller space de Wethenew.',
            },
            {
                title: 'Imposteur',
                image: '/image/projects/imposteur.png',
                description: "Jeu de l'imposteur en ligne fait en React",
                githubLink:'https://github.com/hugo-potpot/Imposteur',
                demoLink: 'https://yoannjly.com/',
            },
            {
                title: 'Génération Fractal',
                image: '/image/projects/fractals.png',
                description: 'Génération de Fractal en Java ',
                githubLink:'https://gitlab.univ-artois.fr/sae-joly-potier-riquart/fractales-base',
            }

    ];

    return (
        <div className="max-w-6xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Projets</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md">
                        <ProjectArticle project={project}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
