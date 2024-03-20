import getRandomItem from "./getRandomItem";

function getNextRandomItem<T>(arr: T[], currentItem: T): T {
  const arrWithoutCurrentItem = arr.filter((item) => item !== currentItem);
  const nextRandomItem = getRandomItem(arrWithoutCurrentItem);

  return nextRandomItem;
}

export default getNextRandomItem;
