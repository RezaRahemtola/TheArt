import { Route, RouteProps } from 'react-router-dom';

import { Divider, HStack, Spacer, Text, VStack } from '@chakra-ui/react';

type AuthRouteProps = { children: JSX.Element } & RouteProps;

const AuthRoute = ({ children, ...rest }: AuthRouteProps): JSX.Element => (
	<Route {...rest}>
		<HStack h="100vh">
			<VStack spacing="56px" w="50%">
				<VStack spacing="16px">
					<Text
						fontSize={{ base: '32px', md: '56px', lg: '64px' }}
						fontWeight="extrabold"
						color="#FFEBEB"
						id="title"
						textAlign="center"
					>
						The Art
					</Text>
					<Text
						fontSize={{ base: '6px', '3xs': '10px', '2xs': '12px', xs: '14px', '2sm': '16px' }}
						id="sub-title"
						textAlign="center"
						color="#FFEBEB"
					>
						NFT Platform for the Paris P2P Festival
					</Text>
				</VStack>
			</VStack>
			<VStack w={{ base: '90%', md: '496px' }}>{children}</VStack>
		</HStack>
	</Route>
);

export default AuthRoute;
