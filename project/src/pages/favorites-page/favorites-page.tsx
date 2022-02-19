import Header from "../../components/layout/header/header";
import Footer from "../../components/layout/footer/footer";
import { FavoritesList } from "./favorites-list/favorites-list";
import { FavoritesEmpty } from "./favorites-empty";

export default function FavoritesPage(): JSX.Element {

  const isListFavorites = true;
  return (
    <div className={`page ${!isListFavorites && 'page--favorites-empty'}`}>
      <Header isLogged={true}/>

      <main className={`page__main page__main--favorites ${!isListFavorites && 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">

          {
            isListFavorites ? <FavoritesList/> : <FavoritesEmpty/>
          }

        </div>
      </main>

      <Footer/>
    </div>
  );
}
