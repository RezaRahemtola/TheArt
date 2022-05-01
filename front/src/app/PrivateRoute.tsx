import { useEffect, useContext } from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';

import { Center, Spinner } from '@chakra-ui/react';
import AuthContext from '../contexts/auth';

type PrivateRouteProps = { children: JSX.Element } & RouteProps;

const PrivateRoute = ({ children, ...rest }: PrivateRouteProps): JSX.Element => {
	const auth = useContext(AuthContext);
	const history = useHistory();

	useEffect(() => {
		if (!auth || !auth.account) history.push('/');
	}, []);

	if (!auth || !auth.account)
		return (
			<Center mt="160px">
				<Spinner w="160px" />
			</Center>
		);

	return <Route {...rest}>{children}</Route>;
};

export default PrivateRoute;
