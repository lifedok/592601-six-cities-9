import { AuthorizationStatus, ERoute } from "../../types/enums/route.enum";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus,
  children: JSX.Element
}

export default function PrivateRoute(props: PrivateRouteProps) {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.AUTH
      ? children
      : <Navigate to={ERoute.LOGIN} />
  );
}
