namespace App {
  export interface LocalStorage {
    getItem(): void;
    setItem(): void;
    removeItem(): void;
    clear(): void;
    getAll(): void;
  }
  export class DataStorage implements LocalStorage {
    getItem() {}
    setItem(): void {}
    removeItem(): void {}
    clear(): void {}
    getAll(): void {}
  }
}
