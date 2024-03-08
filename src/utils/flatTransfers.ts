import { RenderedTransfers } from "../entities/RenderedTeam";
import { Transfer } from "../entities/Transfer";

export default function flatTransfers(
  // create a new array of object RenderedTeam
  transfers: Transfer[] | undefined
): Transfer[] | null {
  if (!transfers) {
    return null;
  }

  // reverse transfers chronologically
  const reversedTransfers = transfers.reverse();

  // clean sparta ID
  const finalTransfers = reversedTransfers.filter(
    (t) => t.teams.in.id !== 20674 || t.teams.out.id !== 20674
  );

  return finalTransfers;
}
