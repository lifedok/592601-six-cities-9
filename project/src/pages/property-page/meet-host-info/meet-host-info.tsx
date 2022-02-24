import { IMeetHostInfo } from '../../../types/interfaces/meet-host-info.interface';

export function MeetHostInfo(props: IMeetHostInfo) {

  const {userName, userAvatar, userStatus, descriptions} = props;
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img
            className="property__avatar user__avatar"
            src={userAvatar}
            width="74"
            height="74"
            alt={userAvatar}
          />
        </div>
        <span className="property__user-name">{userName}</span>
        <span className="property__user-status">{userStatus}</span>
      </div>

      {
        !!descriptions &&
        <div className="property__description">
          {
            descriptions.map((description) => (<p className="property__text" key={description}>{description}</p>))
          }
        </div>
      }

    </div>
  );
}

