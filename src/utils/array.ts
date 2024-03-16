export const randomItem = <T>(items: Array<T>): T => items[Math.floor(Math.random()*items.length)];
