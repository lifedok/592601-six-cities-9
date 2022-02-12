import { LocationItemInterface } from './location-item.interface';


export default function LocationItem(item: LocationItemInterface): JSX.Element {

  const iaActiveClass = item.isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item';
  return (
    <li className="locations__item">
      <a className={iaActiveClass} href="#">
        <span>{item.city}</span>
      </a>
    </li>
  );
}
