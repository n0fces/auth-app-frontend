import { Page } from '@/widgets/Page';

import { Oauth2 } from '@/features/Oauth2/ui/Oauth2';
import { SignInForm } from '@/features/SignInForm';

import { FormCard } from '@/entities/FormCard';

export const SignInPage = () => {
	return (
		<Page isCenter>
			<FormCard
				sign="Sign In"
				formComp={<SignInForm />}
				oauthComp={<Oauth2 />}
			/>
		</Page>
	);
};
