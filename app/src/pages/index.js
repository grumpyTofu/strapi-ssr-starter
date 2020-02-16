import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default props => {
    return (
        <>
            <Typography variant="h4">Welcome to a new <em>Modern Experience</em></Typography>
            <Typography variant="body1">This app uses Next.js, powered by Express.js, connected using Apollo and styled with Material-UI</Typography>
        </>
    );
}
