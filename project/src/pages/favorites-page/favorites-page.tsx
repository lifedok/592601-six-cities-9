import Header from '../../components/layout/header/header';
import Footer from '../../components/layout/footer/footer';
import { FavoritesList } from './favorites-list/favorites-list';
import { FavoritesEmpty } from './favorites-empty';
import { useGetHotels } from '../../store/selector';
import { IHotel } from '../../types/interfaces/hotel.interface';

export default function FavoritesPage(): JSX.Element {
  const hotels = useGetHotels();
  const favoriteList: IHotel[] = [];
  hotels.filter((item) => item.isFavorite && favoriteList.push(item));


  const isListFavorites = !!favoriteList.length;
  return (
    <div className={`page ${!isListFavorites && 'page--favorites-empty'}`}>
      <Header/>

      <main className={`page__main page__main--favorites ${!isListFavorites && 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">

          {
            isListFavorites ? <FavoritesList list={hotels}/> : <FavoritesEmpty/>
          }

        </div>
      </main>
т
      <Footer/>
    </div>
  );
}
