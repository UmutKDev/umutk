import React from 'react'

import { FaLinkedinIn, FaGithub, FaDiscord, FaInstagram } from 'react-icons/fa'

class SocialMediaLink extends React.Component {
    render() {
        const { link } = this.props
        return (
            <a
                href={link.to}
                className={`flex items-center justify-center w-10 h-10 mr-2 bg-opacity-25
                ${link.color == "blue" ? "text-blue-300" : link.color == "pink" ? "text-pink-300" : link.color == "gray" ? "text-gray-300" : link.color == "indigo" ? "text-indigo-300" : "" } 
                ${link.color == "blue" ? "bg-blue-400" : link.color == "pink" ? "bg-pink-400" : link.color == "gray" ? "bg-gray-400" : link.color == "indigo" ? "bg-indigo-400" : "" } transitionduration-150 hover:bg-opacity-50 bg-opacity-25 rounded-lg md:mr-0`}>
                {link.icon === 'linkedin' ? (
                    <FaLinkedinIn className='text-blue-300' size={20} />
                ) : link.icon === 'github' ? (
                    <FaGithub className='text-gray-300' size={20} />
                ) : link.icon === 'discord' ? (
                    <FaDiscord className='text-indigo-300' size={20} />
                ) : link.icon === 'instagram' ? (
                    <FaInstagram className='text-pink-300' size={20} />
                ) : null}

            </a>
        )
    }
}

export default SocialMediaLink;