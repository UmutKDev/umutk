import React from "react";

class ProgressBar extends React.Component {

    state = {
        loading: 1,
    }

    componentDidMount() {
        const { completed } = this.props;
        setTimeout(() => {
        this.setState({ loading: completed });
        });
    }

    render() {
        const { title, color, completed } = this.props;
        return (
            <>
                <div className="flex justify-between mb-1">
                    <span className={`text-base font-medium ${color == "orange" ? "text-orange-600" : color == "blue" ? "text-blue-600" : color == "yellow" ? "text-yellow-600" : color == "sky" ? "text-sky-600" : color == "green" ? "text-green-600" : color == "indigo" ? "text-indigo-600" : color == "teal" ? "text-teal-600" : ""}`}>{title}</span>
                </div>
                <div className="w-full rounded-full h-6 bg-gray-600">
                    <div className={`${color == "orange" ? "bg-orange-500" : color == "blue" ? "bg-blue-500" : color == "yellow" ? "bg-yellow-500" : color == "sky" ? "bg-sky-500" : color == "green" ? "bg-green-500" : color == "indigo" ? "bg-indigo-500" : color == "teal" ? "bg-teal-500" : ""}
                     h-6 flex items-center justify-center text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full transition-all duration-1000 ease-in-out`} style={{ width: `${this.state.loading}%` }}>{`${completed}%`}</div>
                </div>
            </>
        )
    }
}

export default ProgressBar;