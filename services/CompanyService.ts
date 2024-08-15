import $api from '~/http';
import type { AxiosResponse } from 'axios';
import type { ICompanyApi } from '~/types';

export const getCompanyInfo = async (): Promise<AxiosResponse<ICompanyApi>> => {
  return $api.get<ICompanyApi>('/company-info');
};
