import React from "react";

interface WorkArticleProps {
    experience: {
        title: string,
        company: string,
        date: string,
        description: string,
    };
}
const WorkArticle = (props: WorkArticleProps) => {
    return (
        <>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{props.experience.title}</h2>
            <p className="text-gray-600 mb-2">{props.experience.company}</p>
            <p className="text-gray-500 mb-2">{props.experience.date}</p>
            <p className="text-gray-700">{props.experience.description}</p>
        </>
    );
}

export default WorkArticle;