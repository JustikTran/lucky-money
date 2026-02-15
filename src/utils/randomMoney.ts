export type MoneyOption = {
    amount: number,
    weight: number
}

export function getWeightedRandom(data: MoneyOption[]): number {
  const totalWeight = data.reduce((sum, o) => sum + o.weight, 0);
  const random = Math.random() * totalWeight;

  let cumulative = 0;
  for (const item of data) {
    cumulative += item.weight;
    if (random < cumulative) {
      return item.amount; 
    }
  }

  return data[0].amount;
}
