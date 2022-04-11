import { address } from "faker";
import { IPlace } from "../types/interfaces/hotel.interface";
import useMap from "./useMap";
import { renderHook } from "@testing-library/react-hooks";

const city = {
  city: {
    name: address.cityName(),
    location: {
      latitude: Number(address.latitude()),
      longitude: Number(address.longitude()),
      zoom: 10,
    },
  } as IPlace,
};

describe('Hook: useMap', () => {
  it('should not render useMap', () => {
    const {result} = renderHook(() =>
      useMap(null, city.city.location),
    );
    expect(null);
  });
});
