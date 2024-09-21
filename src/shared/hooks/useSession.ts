import { useContext } from 'react';

import { UserContext } from '../../app/providers/context/provider';

export const useSession = () => {
	return useContext(UserContext);
};
