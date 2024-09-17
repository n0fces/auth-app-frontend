interface Breed {
	breed_group: string;
	height: { imperial: string; metric: string };
	id: number;
	life_span: string;
	name: string;
	reference_image_id: string;
	temperament: string;
	weight: { imperial: string; metric: string };
}

export interface DogDTO {
	breeds: Breed[];
	id: string;
	url: string;
	height: number;
	width: number;
}
