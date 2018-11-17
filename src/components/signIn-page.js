import React from 'react';

import SignInForm from './signIn-form';
import HandleLogin from './handle-login';

export default function SignInPage(props) {
	return (
		<div>
			<SignInForm />
			<HandleLogin />
		</div>
		);
}