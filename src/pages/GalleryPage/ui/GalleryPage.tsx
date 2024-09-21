import { useState } from 'react';

import { DataService } from '@/shared/services/dataService';
import { DogDTO } from '@/shared/types/dogDTO';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Image } from '@/shared/ui/Image';

import { Fallback } from './Fallback';
import styles from './styles.module.scss';

export const GalleryPage = () => {
	const [dogs, setDogs] = useState<DogDTO[]>();
	const [isLoading, setIsLoading] = useState(false);
	const fetchRandomPicture = async () => {
		setIsLoading(true);
		const { data } = await DataService.getDogs(10);
		setDogs(data);
		setIsLoading(false);
	};

	return (
		<div>
			<div>
				<Button onClick={fetchRandomPicture}>
					Получить случайную подборку собак
				</Button>
			</div>
			<div className={styles.grid}>
				{isLoading ? (
					<Fallback amount={10} />
				) : (
					dogs?.map((dog) => (
						<Card alignItems="center" justifyContent="center" key={dog.id}>
							<figure>
								<Image
									width={200}
									height={200}
									src={dog.url}
									alt={dog.breeds?.[0]?.name || 'Dog'}
								/>
								<figcaption className={styles.figcaption}>
									{dog.breeds?.[0]?.name || 'Dog'}
								</figcaption>
							</figure>
						</Card>
					))
				)}
			</div>
		</div>
	);
};
