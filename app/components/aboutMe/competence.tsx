import React from 'react';
import CompetenceArticle from "@/app/components/aboutMe/competenceArticle";

const Competence = () => {
    const skills = [
        {
            name: 'Laravel',
            logo: '/image/logos/laravel.png', // Chemin vers le logo de Java
        }, {
            name: 'SQL',
            logo: '/image/logos/sql.png', // Chemin vers le logo de Java
        }, {
            name: 'Java',
            logo: '/image/logos/java.png', // Chemin vers le logo de Java
        }, {
            name: 'React',
            logo: '/image/logos/react.webp', // Chemin vers le logo de Java
        }, {
            name: 'NextJS',
            logo: '/image/logos/nextjs.png', // Chemin vers le logo de Java
        }, {
            name: 'TypeScript',
            logo: '/image/logos/typescript.png', // Chemin vers le logo de Java
        }, {
            name: 'PHP',
            logo: '/image/logos/php.png', // Chemin vers le logo de Java
        }, {
            name: 'TailwindCSS',
            logo: '/image/logos/tailwindcss.png', // Chemin vers le logo de Java
        }, {
            name: 'Git',
            logo: '/image/logos/git.png', // Chemin vers le logo de GitHub
        },
    ];

    return (
        <div className="max-w-6xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4 text-center">Compétences</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                        <CompetenceArticle skill={skill}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Competence;
