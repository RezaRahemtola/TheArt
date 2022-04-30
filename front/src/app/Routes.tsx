import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

import HomeView from 'views/HomeView';
import SignupView from 'views/SignupView';
import LoginView from 'views/LoginView';

import AuthRoute from 'app/AuthRoute';


const Routes = (): JSX.Element => (
	<BrowserRouter>
		<Switch>
			<AuthRoute exact path="/" children={<HomeView />} />
			<AuthRoute path="/signup" children={<SignupView />} />
			<AuthRoute path="/login" children={<LoginView />} />
			<Redirect push to="/" />
		</Switch>
	</BrowserRouter>
);

export default Routes;
