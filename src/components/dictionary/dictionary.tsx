import * as React from 'react';
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import "./dictionary.css"
import Translator from './translator';
import ManageWords from './dictionaryManager';
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Grid
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box >
                    <Typography variant="h6"
                        noWrap
                        component="span"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>{children}</Typography>
                </Box>
            )}
        </Grid>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Dictionary() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <Grid>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="translate" {...a11yProps(0)} />
                    <Tab label="manage" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Grid container spacing={2} style={{ padding: '35px', width: '100%' }}>
                    <Translator></Translator>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Grid container spacing={2} style={{ padding: '35px', width: '100%' }}>
                    <ManageWords></ManageWords>
                </Grid>
            </TabPanel>
        </Grid>
    );
}