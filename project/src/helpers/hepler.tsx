import { offersByLocationCityMockData } from "../mocks/offers-by-location-city-mock.data";

export const getCityList = offersByLocationCityMockData.map(item => item.city);

export const getRating = (rating: number) => (rating / 100 * 5).toFixed(1);
