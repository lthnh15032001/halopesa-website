/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it


import React from 'react';
import { Layout } from './src/components/common/layout/layout';
import { StylesProvider } from '@material-ui/core/styles';

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => {
    console.log("first start")
    return <>
        <StylesProvider >
            <Layout {...props}>{element}</Layout>
        </StylesProvider>
    </>
};

export default wrapPageElement;