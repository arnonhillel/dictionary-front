import * as React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import "./dictionary.css"
import { createWord } from '../../services/dictionary.service';



export default function ManageWords() {
    const [body, setBody] = React.useState({
        he: "",
        en: ""
    });
    const [wordResult, setWordResult] = React.useState("");

    const handleChange = (event: any) => {
        body[event.target.name] = event.target.value as string
        setBody(body);
    }

    const create = async () => {
        if (!body.he || !body.en) return
        const result = await createWord(body)
        if (!!result._id) {
            setWordResult('Word Created!')
        } else {
            setWordResult('failed To create Word')
        }
    };

    const translationResult = wordResult ?
        (<Grid item xs={4} md={4} sm={4} style={{ border: 'inset' }}
            justifyContent="center"
            alignItems="center" textAlign={"center"} >
            <h4> {wordResult}</h4>
        </Grid>) : null


    return (
        <>
            <Grid container spacing={2} style={{ padding: '35px', width: '100%' }}>
                <Grid item xs={4} md={4} sm={4}
                    justifyContent="center"
                    alignItems="center">
                    <TextField style={{ width: '100%' }}
                        id="filled-search"
                        label="Hebrew"
                        type="search"
                        name="he"
                        variant="filled" onChange={handleChange} />
                </Grid>
                <Grid item xs={4} md={4} sm={4}
                    justifyContent="center"
                    alignItems="center">
                    <TextField style={{ width: '100%' }}
                        id="filled-search"
                        label="English"
                        type="search"
                        name="en"
                        variant="filled" onChange={handleChange} />
                </Grid>
                <Grid item xs={4} md={4} sm={4} >
                    <Button variant="contained" style={{ height: '100%' }}
                        onClick={create}>Create</Button>
                </Grid>
                <Grid container padding={15}>
                    <Grid item xs={4} md={4} sm={4}></Grid>
                    {translationResult}
                    <Grid item xs={4} md={4} sm={4}></Grid>
                </Grid>
            </Grid>
        </>
    );
}