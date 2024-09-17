import { dataApi } from '../api/dataApi';
import { DogDTO } from '../types/dogDTO';

export class DataService {
	static async getDogs(limit: number) {
		return dataApi.get<DogDTO[]>(`/images/search?limit=${limit}`);
	}
}
