import { PlayerFromTopScorers } from "./PlayerFromTopScorers";

export interface FetchResponsePlayerProfile {
  parameters: {
    id: number;
    season: number;
  };
  results: number;
  response: PlayerFromTopScorers[];
}
