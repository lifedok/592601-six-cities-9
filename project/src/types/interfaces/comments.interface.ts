import { IHost } from './host.interface';

export interface IComment {
  comment: string
  date: string
  id: number
  rating: number
  user: IHost;
}
