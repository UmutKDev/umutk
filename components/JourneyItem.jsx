import React from 'react'

import { MdOutlineDeveloperBoard, MdWhatshot } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'

class JourneyItem extends React.Component {
    render() {
        const { item } = this.props
        return (
            <div className="flex items-center sm:py-0 py-3 space-x-3 mr-2 sm:mr-0 sm:space-x-6 rounded-md md:py-0 md:w-full md:pb-6">
                <div className="flex items-center md:w-1/6">
                    <span className="flex items-center justify-center sm:w-10 w-8 sm:h-10 h-8 p-2 text-blue-400 bg-blue-400 bg-opacity-25 rounded-md material-icons">
                        {item.icon === 'grade' ? (
                            <FaStar size={25} />
                        ) : item.icon === 'developer_board' ? (
                            <MdOutlineDeveloperBoard size={25} />
                        ) : item.icon === 'whatshot' ? (
                            <MdWhatshot size={25} />
                        ) : null}
                    </span>
                </div>
                <div className="w-full">
                    <h1 className="text-xs sm:text-sm font-medium text-gray-light ">{item.name}</h1>
                </div>
            </div>
        )
    }
}

export default JourneyItem;