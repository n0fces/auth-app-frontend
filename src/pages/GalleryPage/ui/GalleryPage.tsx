import { DataService } from '@/shared/services/dataService';
import { DogDTO } from '@/shared/types/dogDTO';
import { Button } from '@/shared/ui/Button';
import { useState } from 'react';
import styles from './styles.module.scss';

export const GalleryPage = () => {
	const [dogs, setDogs] = useState<DogDTO[]>();
	const fetchRandomPicture = async () => {
		const { data } = await DataService.getDogs(10);
		setDogs(data);
	};

	return (
		<div>
			<div>
				<Button onClick={fetchRandomPicture}>
					Получить случайную подборку собак
				</Button>
			</div>
			<div className={styles.grid}>
				{dogs?.map((dog) => (
					<figure>
						<img
							width={300}
							height={300}
							src={dog.url}
							alt={dog.breeds?.[0]?.name || 'Dog'}
						/>
						<figcaption>{dog.breeds?.[0]?.name || 'Dog'}</figcaption>
					</figure>
				))}
			</div>
		</div>
	);
};
