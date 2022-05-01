import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

import HomeView from 'views/HomeView';
import FeedView from 'views/FeedView';
import AccountProfileView from 'views/AccountProfileView';
import ArtFocus from 'views/ArtFocus';

import AuthRoute from 'app/AuthRoute';
import PrivateRoute from 'app/PrivateRoute';

const Routes = (): JSX.Element => (
	<BrowserRouter>
		<Switch>
			<AuthRoute exact path="/" children={<HomeView />} />
			<PrivateRoute path="/feed" children={<FeedView />} />
			<PrivateRoute path="/account" children={<AccountProfileView />} />
			<PrivateRoute path="/art/:id" children={<ArtFocus />} />
			<Redirect push to="/" />
		</Switch>
	</BrowserRouter>
);

export default Routes;
