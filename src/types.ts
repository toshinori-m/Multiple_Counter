export interface CounterType {
  id: number;
  title: string;
  count: number;
}

export interface CounterEvents {
  updateCount: { id: number; newCount: number };
  remove: { id: number };
}
