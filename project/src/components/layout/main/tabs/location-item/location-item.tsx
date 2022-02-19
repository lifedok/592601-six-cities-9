import { LocationItemInterface } from './location-item.interface';
import { Link } from "react-router-dom";
import { ERoute } from "../../../../../types/enums/route.enum";


export default function LocationItem(item: LocationItemInterface): JSX.Element {

  const iaActiveClass = item.isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item';
  return (
    <li className="locations__item">
      <Link className={iaActiveClass} to={ERoute.MAIN}>
        <span>{item.city}</span>
      </Link>
    </li>
  );
}
