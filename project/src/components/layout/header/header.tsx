import { Link } from "react-router-dom";
import { ERoute } from "../../../types/enums/route.enum";

type HeaderProps = {
  isLogged?: boolean;
}

export default function Header({isLogged = true}: HeaderProps): JSX.Element {
  return (
    <header className="header">
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
                          <span className="header__user-name user__name">Olivers.conner@gmail.com</span>
                        </a>
                      </li>
                      <li className="header__nav-item">
                        <Link className="header__nav-link" to={ERoute.LOGIN}>
                          <span className="header__signout">Sign out</span>
                        </Link>
                      </li>
                    </>
                  )
                  :
                  (
                    <li className="header__nav-item user">
                      <a className="header__nav-link header__nav-link--profile" href='profile'>
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__login">Sign in</span>
                      </a>
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
