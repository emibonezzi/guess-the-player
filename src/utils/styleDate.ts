import { TOO_MANY_TRANSFERS_PLACEHOLDER } from "../components/PlayerTransfers";
import { Transfer } from "../entities/TransferMarkt/Transfer";

export function styleDate(item: any, index: number, arr: Transfer[]) {
  // if index is less than length of array get date of the next transfer
  if (index >= arr.length - 1) return `${item.date.slice(7, item.date.length)}`;

  if (item.newClubName === TOO_MANY_TRANSFERS_PLACEHOLDER)
    return `${item.date.slice(7)} - ${arr[index + 1].date.slice(7)}`;

  return `${item.date.slice(7)} - ${arr[index + 1].date.slice(7)}`;
}
