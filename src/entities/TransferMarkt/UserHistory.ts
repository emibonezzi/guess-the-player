import { PlayerFromSearch } from "./PlayerFromSearch";

export interface UserHistory {
  playersGuessed: PlayerFromSearch[];
  playersNotGuessed: PlayerFromSearch[];
  stringToShare: string;
}
