import { IMeetHostInfo } from '../../../types/interfaces/meet-host-info.interface';

export function MeetHostInfo(props: IMeetHostInfo) {

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img
            className="property__avatar user__avatar"
            src={props.userAvatar}
            width="74"
            height="74"
            alt={props.userAvatar}
          />
        </div>
        <span className="property__user-name">{props.userName}</span>
        <span className="property__user-status">{props.userStatus}</span>
      </div>

      {
        !!props.descriptions &&
        <div className="property__description">
          {
            props.descriptions.map((description) => (<p className="property__text" key={description}>{description}</p>))
          }
        </div>
      }

    </div>
  );
}

