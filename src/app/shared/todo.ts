import { Category } from './category';
export interface Todo {
  category: number;
  id: number;
  task: string;
  done: boolean;
}
