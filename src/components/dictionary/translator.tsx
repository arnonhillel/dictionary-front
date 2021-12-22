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
    (<Grid item xs={12} sm={8} md={4}>

        <FormControl style={{ width: '100%', minWidth: '100px' }}>
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
    </Grid>
    )


    return (
        <>
            <Grid container spacing={2} style={{
                padding: '35px', width: '100%', display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Grid item xs={12} sm={8} md={4}></Grid>
                <Grid item xs={12} sm={8} md={4} container
                    justifyContent="center"
                    alignItems="center">
                    <TextField style={{ width: '100%' }}
                        id="filled-search"
                        label="Enter text"
                        type="search"
                        name="word"
                        variant="filled" onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={8} md={4} >
                    <Button variant="contained" style={{ height: '100%' }}
                        onClick={searchWord}>Translate</Button>
                </Grid>
                <Grid item xs={12} sm={8} md={4}
                    justifyContent="center"
                    alignItems="center">
                    <Grid container>
                        {selectItem(source, 'source', 'from')}
                        <Grid item xs={12} sm={8} md={4} style={{ position: 'relative' }}>
                            <Grid className='exchange-img'>
                                <img onClick={replace} src={exchange} alt="" width="15" height="15" />
                            </Grid>
                        </Grid>
                        {selectItem(target, 'target', 'to')}
                    </Grid>
                </Grid>
                <Grid container padding={15}>
                    <Grid item xs={12} sm={8} md={4}></Grid>
                    {translationResult}
                    <Grid item xs={12} sm={8} md={4}></Grid>
                </Grid>
            </Grid>
        </>
    );
}