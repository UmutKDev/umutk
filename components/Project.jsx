import React from "react";
import Ripples from 'react-ripples';

const STATUS_LIST = [
    {
        name: "NEW",
        text: "text-teal-200",
        bg: "bg-teal-600",
    },
    {
        name: "Coming Soon",
        text: "text-blue-200",
        bg: "bg-blue-600",
    },
    {
        name: "Active",
        text: "text-green-200",
        bg: "bg-green-600",
    },
    {
        name: "Maintenance",
        text: "text-orange-200",
        bg: "bg-orange-600",
    },
    {
        name: "It's over",
        text: "text-red-200",
        bg: "bg-red-600",
    },
    {
        name: "Closed",
        text: "text-yellow-400",
        bg: "bg-yellow-600"
    },
];

class Project extends React.Component {
    render() {
        const { project } = this.props;
        return (
            <Ripples className="transition duration-150 transform rounded-md shadow hover:-translate-y-1 block bg-neutral-800 border-gray-700 hover:bg-neutral-700" during={900}>
                <a href={project.to} className="flex flex-wrap w-screen max-h-max px-4 py-4 rounded-md">
                    <div className="flex w-full">
                        <div className="w-full">
                            <h5 className="mb-2 text-base font-bold tracking-tight text-white">{project.name}
                                {project.status && (
                                    <span className={`ml-2 text-xs font-semibold mr-2 px-2.5 py-0.5 bg-opacity-50 rounded ${STATUS_LIST[project.status - 1].bg} ${STATUS_LIST[project.status - 1].text}`}>{STATUS_LIST[project.status - 1].name}</span>
                                )}
                            </h5>
                        </div>
                    </div>
                    <div className="w-full max-h-56">
                        <p className="pt-1 pb-6 text-xs text-gray-light">
                            {project.description}
                        </p>
                    </div>
                </a>
            </Ripples>
        )
    }
}

export default Project;