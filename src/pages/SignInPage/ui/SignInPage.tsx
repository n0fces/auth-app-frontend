import { SignCard } from '@/entities/SignCard';
import { Oauth2 } from '@/features/Oauth2/ui/Oauth2';
import { SignInForm } from '@/features/SignInForm';

export const SignInPage = () => {
	return (
		<div>
			<SignCard
				sign="Sign In"
				formComp={<SignInForm />}
				oauthComp={<Oauth2 />}
			/>
		</div>
	);
};
