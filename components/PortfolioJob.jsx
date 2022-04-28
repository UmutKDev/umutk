import React from 'react'

class PortfolioJob extends React.Component {
    render() {
        const { job } = this.props
        return (
            <div className="w-full py-1 -mt-1">
                <span className="text-sm font-medium text-gray-bright">
                    {job}
                </span>
            </div>
        )
    }
}

export default PortfolioJob;