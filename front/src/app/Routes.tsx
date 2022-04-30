import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

import HomeView from 'views/HomeView';
import SignupView from 'views/SignupView';
import LoginView from 'views/LoginView';
import FeedView from 'views/FeedView';
import ArtFocus from 'views/ArtFocus';

import AuthRoute from 'app/AuthRoute';
import PrivateRoute from 'app/PrivateRoute';

const Routes = (): JSX.Element => (
	<BrowserRouter>
		<Switch>
			<AuthRoute exact path="/" children={<HomeView />} />
			<AuthRoute path="/signup" children={<SignupView />} />
			<AuthRoute path="/login" children={<LoginView />} />
			<PrivateRoute path="/feed" children={<FeedView />} />
			<PrivateRoute path="/art/:id" children={<ArtFocus />} />
			<Redirect push to="/" />
		</Switch>
	</BrowserRouter>
);

export default Routes;
