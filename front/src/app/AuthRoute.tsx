import { Route, RouteProps, useHistory } from 'react-router-dom';

type AuthRouteProps = { view: JSX.Element } & RouteProps;

const AuthRoute = ({ view, ...rest }: AuthRouteProps): JSX.Element => {
	const history = useHistory();

	return (
        <Route {...rest}>
			{view}
		</Route>
	);
};

export default AuthRoute;
