import React from 'react'

import PortfolioName from './PortfolioName'
import PortfolioJob from './PortfolioJob'
import PortfolioBio from './PortfolioBio'

class Portfolio extends React.Component {
    render() {
        const { name, job, description } = this.props
        return (
            <div className="w-full md:w-1/2 lg:mr-3 sm:mr-0">
                <div className="flex flex-wrap items-center justify-center text-center md:text-left md:justify-start">
                    <PortfolioName name={name} />
                    <PortfolioJob job={job} />
                    <PortfolioBio description={description} />
                </div>
            </div>
        )
    }
}

export default Portfolio;