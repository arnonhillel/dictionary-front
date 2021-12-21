export class TranslateModel {
    source: string;
    word: string;
    target: string

    constructor(source, target, word) {
        this.source = source
        this.target = target
        this.word = word
    }
}