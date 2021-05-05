import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export const fetchMovies = (keyword: string) => {
  return apiClient.get(`${ApiConfig.MOVIES_SEARCH}?term=${keyword}`);
};
