import { SignCard } from '@/entities/SignCard';
import { Oauth2 } from '@/features/Oauth2/ui/Oauth2';
import { SignUpForm } from '@/features/SignUpForm';
import { Page } from '@/widgets/Page';

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
