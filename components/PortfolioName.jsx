import React from 'react'

class PortfolioName extends React.Component {
    render() {
        const { name } = this.props
        return (
            <div className="w-full">
                <h1 className="text-2xl font-semibold text-white">
                    {name}
                </h1>
            </div>
        )
    }
}

export default PortfolioName;