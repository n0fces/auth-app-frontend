import { useContext } from 'react';

import { UserContext } from '../../app/providers/context/provider';

/**
 * Кастомный хук для потребления данных из общего контекста
 * @returns Возвращает значения общего контекста
 */
export const useSession = () => {
	return useContext(UserContext);
};
