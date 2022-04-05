import { IHost } from '../../../types/interfaces/host.interface';

type MeetHostInfoProps = {
  host: IHost,
  description?: string
}

export function MeetHostInfo({host, description}: MeetHostInfoProps) {

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img
            className="property__avatar user__avatar"
            src={host.avatarUrl}
            width="74"
            height="74"
            alt={host.avatarUrl}
          />
        </div>
        <span className="property__user-name">{host.name}</span>
        <span className="property__user-status">{host.isPro}</span>
      </div>

      {
        !!description &&
        <div className="property__description">
          <p className="property__text">{description}</p>
        </div>
      }

    </div>
  );
}
