import { dataApi } from '../api/dataApi';
import { DogDTO } from '../types/dogDTO';

export const getDogs = async (limit: number) => {
	return dataApi.get<DogDTO[]>(`/images/search?limit=${String(limit)}`);
};
