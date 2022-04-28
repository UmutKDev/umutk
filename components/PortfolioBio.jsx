import React from 'react'

class PortfolioBio extends React.Component {
    render() {
        const { description } = this.props
        return (
            <div className="w-full">
                <p className="text-sm font-medium text-gray-light">{description}</p>
            </div>
        )
    }
}

export default PortfolioBio;