import { Box, Button, Flex, Link, useColorModeValue } from '@chakra-ui/react';

import { Link as RouteLink } from 'react-router-dom';

import OutlineButton from 'components/OutlineButton';

function TopBar() {
	return (
        <Box bg={useColorModeValue('gray.300', 'gray.1000')} px={4}>
			<Flex h={16} alignItems="center" justifyContent="space-between">
				<Link as={RouteLink} to="/signup" w="100%">
					<Button variant="inline" id="homeView-create-account-button">
						Create an account
					</Button>
				</Link>
				<Link as={RouteLink} to="/login" w="100%" id="homeView-login-button">
					<OutlineButton w="25%" text="Login" />
				</Link>
			</Flex>
		</Box>
    );
}

export default TopBar;
