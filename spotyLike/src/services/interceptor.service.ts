import axios from 'axios';
import { AuthenticationService } from 'src/services/authentication.service';

const axiosInterceptor = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

axiosInterceptor.interceptors.request.use((request) => {
  const user_access = sessionStorage.getItem('user_access');

  let token: string;

  user_access != undefined
    ? (token = JSON.parse(user_access).access_token)
    : (token = '');

  request.headers['Content-Type'] = 'application/json';
  request.headers['Authorization'] = 'Bearer ' + token;

  return request;
});

axiosInterceptor.interceptors.request.use(
  (response) => {
    return response;
  },
  async function (error) {
    const authenticationService: AuthenticationService = new AuthenticationService();

    console.log(error);

    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      console.log('refresh_token');
      const user_access = sessionStorage.getItem('user_access');
      let refresh_token: string;
      user_access != undefined
        ? (refresh_token = JSON.parse(user_access).refresh_token)
        : (refresh_token = '');

      originalRequest._retry = true;

      let refresh_token_data = await authenticationService.refreshToken(
        refresh_token
      );

      refresh_token_data['refresh_token'] = refresh_token;
      sessionStorage.setItem('user_access', JSON.stringify(refresh_token_data));

      axiosInterceptor.defaults.headers['Authorization'] =
        'Bearer ' + refresh_token_data.access_token;

      return axiosInterceptor(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosInterceptor;
