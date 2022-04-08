import { music, system, datatype, internet, address, lorem, helpers, name } from 'faker';
import { HotelsData } from "../types/state";
import { IHotel } from "../types/interfaces/hotel.interface";
import { gerRandomNumber } from "../helpers/hepler";

export const makeFakeHotelArray = (array: number = 15) => new Array(array).fill(null).map(() => (hotelInitial));
const hotelInitial: IHotel = {
  id: datatype.number(),
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: 10,
  },
  city: {
    name: address.cityName(),
    location: {
      latitude: Number(address.latitude()),
      longitude: Number(address.longitude()),
      zoom: 10,
    },
  },
  bedrooms: gerRandomNumber(8),
  description: lorem.text(),
  goods: helpers.shuffle(),
  previewImage: system.filePath(),
  price: gerRandomNumber(),
  rating: gerRandomNumber(5),
  title: name.title(),
  type: 'Apartment'
};

export const makeFakeHotelsMockData = (): HotelsData => ({
  city: {
    name: address.cityName(),
    location: {
      latitude: Number(address.latitude()),
      longitude: Number(address.longitude()),
      zoom: 10,
    },
  },
  hotels: makeFakeHotelArray(),
  selectedTabHotels: [],
  selectedOfferHotel: null,
  favoriteHotels: [],
  nearbyHotels: [],
  comments: [],
  isDataLoaded: false,
});

// export const makeFakeGenreQuestion = (): QuestionGenre => ({
//   // type: IHotel,
//   genre: music.genre(),
//   answers: new Array(4).fill(null).map(() => (
//     {src: system.filePath(), genre: music.genre()}),
//   ),
// });
