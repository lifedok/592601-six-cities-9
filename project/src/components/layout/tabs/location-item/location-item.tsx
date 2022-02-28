import { LocationItemInterface } from './location-item.interface';
import { Link, useParams } from 'react-router-dom';
import { ERoute } from '../../../../types/enums/route.enum';


export default function LocationItem(item: LocationItemInterface): JSX.Element {

  const param = useParams();
  const iaActiveClass = item.city.toLowerCase() === param.city && 'tabs__item--active';
  return (
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${iaActiveClass}`} to={`${ERoute.LOCATION}/${item.city.toLowerCase()}`}>
        <span>{item.city}</span>
      </Link>
    </li>
  );
}
