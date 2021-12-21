import to from 'await-to-js';
import axios from 'axios';
import { TranslateModel } from '../models/translate.model';


const baseUrl = 'http://localhost:5000'

export const getWord = async (wordRequest: TranslateModel): Promise<any[]> => {

    const [error, response] = await to(
        axios.get<Error, { data: any[] }>(`${baseUrl}/words?source=${wordRequest.source}&word=${wordRequest.word}&target=${wordRequest.target}`)
    );

    if (error) {
        return [];
    }

    return response?.data as any[];
};

export const createWord = async (body: any): Promise<any> => {
    const [error, response] = await to(
        axios.post<Error, { data: any[] }>(`http://localhost:5000/words`, body)
    );

    if (error) {
        return error;
    }

    return response?.data;
};