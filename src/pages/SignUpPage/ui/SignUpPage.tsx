import { SignCard } from '@/entities/SignCard';
import { Oauth2 } from '@/features/Oauth2/ui/Oauth2';
import { SignUpForm } from '@/features/SignUpForm';

export const SignUpPage = () => {
	return (
		<div>
			<SignCard
				sign="Sign Up"
				formComp={<SignUpForm />}
				oauthComp={<Oauth2 />}
			/>
		</div>
	);
};
