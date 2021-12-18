import * as React from 'react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import exchange from "../../assets/exchange.png";
import "./dictionary.css"
import { TranslateModel } from '../../models/translate.model';



export default function Dictionary() {
    const [wordRequest, setWordRequest] = React.useState(new TranslateModel());

    const changeFrom = (event: any) => {
        wordRequest.from = event.target.value
        setWordRequest(wordRequest);
    };
    const changeTo = (event: any) => {
        wordRequest.language = event.target.value
        setWordRequest(wordRequest);
    };
    const setWord = (event: any) => {
        wordRequest.word = event.target.value
        setWordRequest(wordRequest);
    };
    const searchWord = () => {
        console.log(wordRequest); 
    };


    
    return (
        <Grid container spacing={2} style={{ padding: '35px', width: '100%' }}>
            <Grid item xs={4} md={4} sm={4}></Grid>
            <Grid item xs={4} md={4} sm={4} container
                justifyContent="center"
                alignItems="center">
                <TextField style={{ width: '100%' }}
                    id="filled-search"
                    label="Search field"
                    type="search"
                    variant="filled" onChange={setWord} />
            </Grid>
            <Grid item xs={4} md={4} sm={4} >
                <Button variant="contained" style={{ height: '100%' }} onClick={searchWord} >Translate</Button>
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
                <Grid
                    justifyContent="center"
                    alignItems="center" textAlign={"center"} >
                    <span></span>
                </Grid>
            </Grid>
            <Grid item xs={4} md={4} sm={4}></Grid>
            <Grid item xs={4} md={4} sm={4}
                justifyContent="center"
                alignItems="center">
                <Grid container>
                    <Grid item xs={5} md={5} sm={5}>
                        <FormControl style={{ width: '100%' }}>
                            <InputLabel id="From">From</InputLabel>
                            <Select
                                value={wordRequest.from}
                                label="From" defaultValue = ""
                                onChange={changeFrom}
                            >
                                <MenuItem value={'en'}>english</MenuItem>
                                <MenuItem value={'he'}>hebrew</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
                    <Grid item xs={2} md={2} sm={2} style={{ position: 'relative' }}>
                        <Grid className='exchange-img'>
                            <img src={exchange} alt="" width="15" height="15" />
                        </Grid>
                    </Grid>
                    <Grid item xs={5} md={5} sm={5}>
                        <FormControl style={{ width: '100%' }}>
                            <InputLabel id="From">To</InputLabel>
                            <Select
                                value={wordRequest.language}
                                label="to" defaultValue = ""
                                onChange={changeTo}>
                                <MenuItem value={'en'}>english</MenuItem>
                                <MenuItem value={'he'}>hebrew</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4} md={4} sm={4}></Grid>
        </Grid>
    );
}