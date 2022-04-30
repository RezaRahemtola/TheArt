import { Link as RouteLink } from 'react-router-dom';

import { Button, Link } from '@chakra-ui/react';

const HomeView = (): JSX.Element => (
	<>
		<Link as={RouteLink} to="/signup" w="100%">
			<Button variant="inline" w="100%" id="homeView-create-account-button">
				Create an account
			</Button>
		</Link>
	</>
);

export default HomeView;
