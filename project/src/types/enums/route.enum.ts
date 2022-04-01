export const ERoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer',
  LOCATION: '/location',
};

export enum ApiRoute {
  LOGIN = '/login', // проверить статус авторизации пользователя, aвторизоваться на сервере
  LOGOUT = '/logout', // завершить сеанс пользователя
  HOTELS = '/hotels', // получить список предложений
  FAVORITES = '/favorite',  // получить список избранных предложений
  COMMENTS = '/comments', // получить список комментариев
}

export enum AuthorizationStatus {
  AUTH = 'AUTH',
  NO_AUTH = 'NO_AUTH',
  UNKNOWN = 'UNKNOWN',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}
