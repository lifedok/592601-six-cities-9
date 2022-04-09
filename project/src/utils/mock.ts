import { system, address, lorem, helpers, name } from 'faker';
import { HotelsData } from '../types/state';
import { IHotel } from '../types/interfaces/hotel.interface';
import { gerRandomNumber } from '../helpers/hepler';
import { initialState } from '../store/reducer/hotels-data';


export const makeFakeInitialState: HotelsData = initialState;

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

export const makeFakeHotelArray = (array = 15) => new Array(array).fill(null).map(() => (hotelInitial));

export const hotelInitial: IHotel = {
  id: gerRandomNumber(),
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
  type: 'Apartment',
};

