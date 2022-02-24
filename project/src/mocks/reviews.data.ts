import { IReview } from '../types/interfaces/reviews.interface';

const reviewList: IReview[] = [
  {
    id: 3,
    userName: 'Max',
    userAvatar: 'img/avatar-max.jpg',
    rating: 80,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'April 2019',
  },
];

export function getReviewList(): IReview[] {
  return reviewList;
}
