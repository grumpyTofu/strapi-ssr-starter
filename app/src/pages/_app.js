import React, { useEffect } from 'react';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../utils/apollo';

import { ThemeProvider, makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import theme from '../theme';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const App = ({ Component, pageProps, apollo }) => {

    const classes = useStyles();
    const theme = useTheme();

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <ApolloProvider client={apollo}>
            <Head>
                <title>SSR Starter Template</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            </Head>
            <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    <CssBaseline />    
                    <Navbar />               
                    <Layout>
                        <Container className="p-4">
                            <div className={classes.toolbar} />
                            <Component {...pageProps} />
                        </Container>
                    </Layout>
                </div>
            </ThemeProvider>
        </ApolloProvider>
    )
}

// Wraps all components in the tree with the data provider
export default withData(App);

