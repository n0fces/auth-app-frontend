import { Page } from '@/widgets/Page';

import { Oauth2 } from '@/features/Oauth2/ui/Oauth2';
import { SignUpForm } from '@/features/SignUpForm';

import { SignCard } from '@/entities/SignCard';

export const SignUpPage = () => {
	return (
		<Page isCenter>
			<SignCard
				sign="Sign Up"
				formComp={<SignUpForm />}
				oauthComp={<Oauth2 />}
			/>
		</Page>
	);
};
