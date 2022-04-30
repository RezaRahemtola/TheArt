import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

import HomeView from 'views/HomeView';

import AuthRoute from 'app/AuthRoute';

const Routes = (): JSX.Element => (
	<BrowserRouter>
		<Switch>
			<AuthRoute exact path="/" view={<HomeView />} />
			<Redirect push to="/" />
		</Switch>
	</BrowserRouter>
);

export default Routes;
