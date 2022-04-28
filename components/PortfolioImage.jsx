import React from 'react'
import Image from 'next/image'

class PortfolioImage extends React.Component {
    render() {
        const { image } = this.props
        return (
            <div className="flex w-full md:w-1/5">
                <div className="flex justify-center w-full md:justify-start">
                    <Image className="rounded-lg" src={image} width={192} height={192} alt="Portfolio" draggable={false} />
                </div>
            </div>
        )
    }
}

export default PortfolioImage;