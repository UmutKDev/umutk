import React from "react";
import Header from "../components/Header";

class Layout extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="lg:flex lg:items-center lg:justify-center lg:h-screen lg:mx-auto">
                    <div className="p-5">
                        {this.props.children}
                    </div>
                </div>
            </>
        )
    }
}

export default Layout;