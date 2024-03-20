function getRandomItem<T>(arr: T[]): T {
  console.log("Generating new player...");
  const randomItem = arr[Math.floor(Math.random() * arr.length)];
  return randomItem;
}

export default getRandomItem;
