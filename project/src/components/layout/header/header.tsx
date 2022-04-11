import React from 'react';
import { Link } from 'react-router-dom';
import { AuthorizationStatus, ERoute } from '../../../types/enums/route.enum';
import { getLoginUserName } from '../../../services/login-user-name';
import { useAppDispatch } from '../../../hooks';
import { logoutAction } from '../../../store/api-actions';
import { useAuthStatus } from '../../../store/selector';

export default function Header(): JSX.Element {
  const authorizationStatus = useAuthStatus();


  const isLogged = authorizationStatus === AuthorizationStatus.AUTH;
  const dispatch = useAppDispatch();
  const loginUserName = getLoginUserName();

  const signOutHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <header className="header" data-testid="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={ERoute.MAIN}>
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                isLogged ?
                  (
                    <>
                      <li className="header__nav-item user">
                        <a className="header__nav-link header__nav-link--profile" href='profile'>
                          <div className="header__avatar-wrapper user__avatar-wrapper"/>
                          <span className="header__user-name user__name">{loginUserName}</span>
                        </a>
                      </li>
                      <li className="header__nav-item">
                        <div className="header__nav-link" onClick={(ev) => signOutHandler(ev)}>
                          <span className="header__signout">Sign out</span>
                        </div>
                      </li>
                    </>
                  )
                  :
                  (
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={ERoute.LOGIN}>
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__login">Sign in</span>
                      </Link>
                    </li>
                  )
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
