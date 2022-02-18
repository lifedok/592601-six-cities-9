import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/header/header';
import Footer from '../../components/layout/footer/footer';

export function NotFound() {

  const NotFoundContent = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: '58px',
    paddingRight: '58px',
    flexDirection: 'column',
  } as CSSProperties;

  const BlockWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '1144px',
  } as CSSProperties;

  const LinkStyle = {
    fontSize: '14px',
    color: 'white',
    backgroundColor: '#4e92ce',
    borderRadius: '15px',
    padding: '6px 32px',
    marginTop: '24px',
    display: 'inline-block',
  };

  return (
    <>
      <Header isLogged={false}/>

      <div style={NotFoundContent}>
        <div style={BlockWrapperStyle}>
          <div style={{width: '34%'}}>
            <h2>Страница не найдена</h2>
            <p style={{lineHeight: '1.7'}}>
              Возможна она была удалена или перенесена на другой адрес
            </p>
            <Link style={LinkStyle} to="/">На главную</Link>
          </div>

          <img width='50%' height='50%' src='img/404.png' alt='404'/>
        </div>
      </div>

      <Footer/>
    </>
  );
}
