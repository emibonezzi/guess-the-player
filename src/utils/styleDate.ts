import { Transfer } from "../entities/TransferMarkt/Transfer";

export function styleDate(item: any, index: number, arr: Transfer[]) {
  // if index is less than length of array get date of the next transfer
  if (index >= arr.length - 1) return `${item.date.slice(7, item.date.length)}`;

  if (index === 0 && arr.length > 10)
    return `${item.date.slice(7, item.date.length)}`;

  return `${item.date.slice(7)} - ${arr[index + 1].date.slice(7)}`;
}
