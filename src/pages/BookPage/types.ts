export interface IBookPageData {
  levelsData: ILevel[];
  activeLevel: number;
  words: IWord[];
  activeWord: number;
  page: number;
  wordsLoading: boolean;
}

export interface ILevel {
  title: string;
  level: string;
}

export interface IWord {
  id: string;
  group: number;
  page: number;
  audio: string;
  audioExample: string;
  audioMeaning: string;
  image: string;
  word: string;
  wordTranslate: string;
  transcription: string;
  textExample: string;
  textExampleTranslate: string;
  textMeaning: string;
  textMeaningTranslate: string;
}
