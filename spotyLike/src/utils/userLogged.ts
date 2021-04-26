export function isLoggedIn(): boolean {
  let user = sessionStorage.getItem('user_access');
  let isLoggedUser: boolean;

  user !== null ? (isLoggedUser = true) : (isLoggedUser = false);

  return isLoggedUser;
}
