import { Transfer } from "./Transfer";

export interface PlayerComplete {
  id: string | undefined;
  name: string | undefined;
  nationality: string | undefined;
  position: string | undefined;
  wasCoachedBy: string | undefined;
  playedWith: string | undefined;
  transferHistory: Transfer[] | undefined;
}
