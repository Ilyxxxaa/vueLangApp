import { ILevel } from "../BookPage/types";

export interface IGameLevelData {
  game: string;
  levelsData: ILevel[];
  selectedLevel: number | null;
}
