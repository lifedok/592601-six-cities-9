import {render, screen} from '@testing-library/react';
import PlacesEmpty from "./places-empty";

describe('Component: PlacesEmpty', () => {
  it('should render correctly', () => {
    render(<PlacesEmpty />);

    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
  });
});
