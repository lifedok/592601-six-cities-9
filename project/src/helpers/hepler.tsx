import { offersByLocationCityMockData } from "../mocks/offers-by-location-city-mock.data";

export const getCityList = offersByLocationCityMockData.map(item => item.city);
