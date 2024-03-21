function getRandomItem<T>(arr: T[]): T {
  const randomItem = arr[Math.floor(Math.random() * arr.length)];
  return randomItem;
}

export default getRandomItem;
