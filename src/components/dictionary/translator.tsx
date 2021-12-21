import * as React from 'react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import exchange from "../../assets/exchange.png";
import "./dictionary.css"
import { TranslateModel } from '../../models/translate.model';
import { getWord } from '../../services/dictionary.service';



export default function Translator() {
    const [source, setSource] = React.useState('en');
    const [word, setWord] = React.useState('');
    const [target, setTarget] = React.useState("he");
    const [wordResult, setWordResult] = React.useState("");

    const handleChange = (event: any) => {
        const name = event.target.name
        if (name === "source") {
            setSource(event.target.value);
        }
        if (name === "word") {
            setWord(event.target.value);
        }
        if (name === "target") {
            setTarget(event.target.value);
        }
    }

    const searchWord = async () => {
        const wordRequest = new TranslateModel(source, target, word)
        if (!wordRequest.word) return
        const result = await getWord(wordRequest)
        if (result.length > 0) {
            let wordResult = ''
            const target = wordRequest.target
            result.forEach(element => {
                wordResult += "\n" + element[target]
            });
            setWordResult(wordResult)
        } else {
            setWordResult('No result')
        }
    };

    const replace = () => {
        const tempSource = source
        setSource(target)
        setTarget(tempSource)
    }

    const translationResult = wordResult ?
        (<Grid item xs={4} md={4} sm={4} style={{ border: 'inset' }}
            justifyContent="center"
            alignItems="center" textAlign={"center"} >
            <h1> {wordResult}</h1>
        </Grid>) : null

    const selectItem = (value, name, label) =>
    (<FormControl style={{ width: '100%' }}>
        <InputLabel id={name}>{label}</InputLabel>
        <Select
            value={value}
            label={name} defaultValue={value}
            name={name}
            onChange={handleChange}>
            <MenuItem value='he'>hebrew</MenuItem>
            <MenuItem value='en'>english</MenuItem>
        </Select>
    </FormControl>
    )


    return (
        <>
            <Grid container spacing={2} style={{ padding: '35px', width: '100%' }}>
                <Grid item xs={4} md={4} sm={4}></Grid>
                <Grid item xs={4} md={4} sm={4} container
                    justifyContent="center"
                    alignItems="center">
                    <TextField style={{ width: '100%' }}
                        id="filled-search"
                        label="Search field"
                        type="search"
                        name="word"
                        variant="filled" onChange={handleChange} />
                </Grid>
                <Grid item xs={4} md={4} sm={4} >
                    <Button variant="contained" style={{ height: '100%' }}
                        onClick={searchWord}>Translate</Button>
                </Grid>
                <Grid item xs={4} md={4} sm={4}></Grid>
                <Grid item xs={4} md={4} sm={4}
                    justifyContent="center"
                    alignItems="center">
                    <Grid container>
                        <Grid item xs={5} md={5} sm={5}>
                            {selectItem(source, 'source', 'from')}
                        </Grid>
                        <Grid item xs={2} md={2} sm={2} style={{ position: 'relative' }}>
                            <Grid className='exchange-img'>
                                <img onClick={replace} src={exchange} alt="" width="15" height="15" />
                            </Grid>
                        </Grid>
                        <Grid item xs={5} md={5} sm={5}>
                            {selectItem(target, 'target', 'to')}
                        </Grid>
                    </Grid>
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