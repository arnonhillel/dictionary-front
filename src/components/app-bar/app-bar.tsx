import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import linkedin from "../../assets/linkedin.png";
import { Grid } from '@mui/material';

export default function SearchAppBar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Grid container>
                            <Grid item xs={6} sm={8} md={11}>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="span"
                                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                                    Dictionary
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={4} md={1} position={'relative'}>
                                <a href="https://www.linkedin.com/in/arnon-hillel-96478910a/">
                                    <Grid container style={{ position: 'relative' }}>
                                        <Grid item md={2} style={{ position: 'relative',top: '3px' }}>
                                            <img src={linkedin} alt="" width="15" height="15" />
                                        </Grid>
                                        <Grid item md={10}>
                                            <small>
                                                <b>Arnon Hillel </b>
                                            </small>
                                        </Grid>
                                    </Grid>
                                </a>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}