import React from "react";
import Head from "next/head";

import config from "../config";

class Layout extends React.Component {
    render() {
        return (
            <Head>
                <title>{config.about.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <link rel="favicon" href="/favicon.ico" />

                <meta name="theme-color" content="#000000" />
                <meta name="description" content={config.about.description} />

                <meta property="og:title" content={config.about.title} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://umutk.dev" />
                <meta property="og:image" content="/img/DarkModeUK.jpg" />
                <meta property="og:description" content={config.about.description} />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@umutk" />
                <meta name="twitter:creator" content="@umutk" />
                <meta name="twitter:title" content={config.about.title} />
                <meta name="twitter:description" content={config.about.description} />
                <meta name="twitter:image" content="/img/DarkModeUK.jpg" />

            </Head>
        )
    }
}

export default Layout;