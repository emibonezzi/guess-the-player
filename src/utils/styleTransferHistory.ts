import { TOO_MANY_TRANSFERS_PLACEHOLDER } from "../components/PlayerTransfers";
import { Transfer } from "../entities/TransferMarkt/Transfer";
import more from "../assets/more.png";
import { cleanTransferList } from "./cleanTransferList";

export function styleTransferHistory(arr: Transfer[] | any) {
  // if less than 8 transfers just reverse arr
  if (arr.length <= 8) return cleanTransferList(arr.slice().reverse());

  // if more show first 2 and last 5

  return [
    ...arr.slice().reverse().slice(0, 1),
    {
      newClubName: TOO_MANY_TRANSFERS_PLACEHOLDER,
      newClubImage: more,
      date: "",
    },
    ...arr.slice().reverse().slice(-5),
  ];
}
