const LOGIN_USER_NAME_KEY = 'login-user-name';

export type LoginUserName = string;

export const getLoginUserName = (): LoginUserName => {
  const token = localStorage.getItem(LOGIN_USER_NAME_KEY);
  return token ?? '';
};

export const saveLoginUserName = (token: LoginUserName): void => {
  localStorage.setItem(LOGIN_USER_NAME_KEY, token);
};

export const removeLoginUserName = (): void => {
  localStorage.removeItem(LOGIN_USER_NAME_KEY);
};
