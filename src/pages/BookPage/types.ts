export interface IBookPageData {
  levelsData: ILevel[];
  activeLevel: number;
  words: IWord[];
}

export interface ILevel {
  title: string;
  level: string;
  color: string;
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
}
