import { SignCard } from '@/entities/SignCard';
import { Oauth2 } from '@/features/Oauth2/ui/Oauth2';
import { SignInForm } from '@/features/SignInForm';
import { Page } from '@/widgets/Page';

export const SignInPage = () => {
	return (
		<Page isCenter>
			<SignCard
				sign="Sign In"
				formComp={<SignInForm />}
				oauthComp={<Oauth2 />}
			/>
		</Page>
	);
};
