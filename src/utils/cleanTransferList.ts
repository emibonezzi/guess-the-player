import { Transfer } from "../entities/TransferMarkt/Transfer";

export function cleanTransferList(arr: Transfer[]): Transfer[] {
  /*   // under team
  const underRegex = /U\d/gi;

  // b teams
  const bRegex = /\sB$/gi; */

  // end of loan
  const endOfLoan = "war";

  return arr.filter(
    (transfer) => transfer.loan !== endOfLoan && transfer.newClubID !== "515"
  );
}
