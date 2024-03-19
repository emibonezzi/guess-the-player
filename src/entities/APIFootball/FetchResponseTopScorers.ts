import { PlayerFromTopScorers } from "./PlayerFromTopScorers";

export interface FetchResponseTopScorers {
  results: number;
  response: PlayerFromTopScorers[];
}
