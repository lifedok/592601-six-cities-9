import {render, screen} from '@testing-library/react';
import Tabs from './tabs';
import { IPlace } from '../../../types/interfaces/hotel.interface';
import { address } from 'faker';

const makeFakePlaceList: IPlace[] = [
  {
    name: 'BabaDusya',
    location: {
      latitude: Number(address.latitude()),
      longitude: Number(address.longitude()),
      zoom: 10,
    },
  },
  {
    name: 'Geneva',
    location: {
      latitude: Number(address.latitude()),
      longitude: Number(address.longitude()),
      zoom: 10,
    },
  },
  {
    name: 'Berlin',
    location: {
      latitude: Number(address.latitude()),
      longitude: Number(address.longitude()),
      zoom: 10,
    },
  },
];

describe('Component: Tabs', () => {
  it('should render correctly', () => {
    render(<Tabs placeList={makeFakePlaceList}/>);

    expect(screen.getByText('BabaDusya')).toBeInTheDocument();
    expect(screen.getByText('Geneva')).toBeInTheDocument();
    expect(screen.getByText('Berlin')).toBeInTheDocument();
  });
});
