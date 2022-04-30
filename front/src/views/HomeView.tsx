import { Text, VStack } from '@chakra-ui/react';

import TopBar from 'components/TopBar';

import colors from 'theme/foundations/colors';

const HomeView = (): JSX.Element => (
	<>
		<TopBar />
		<VStack spacing="56px" mt={{ base: '96px', md: '132px' }}>
			<VStack spacing="16px">
				<Text
					fontSize={{ base: '32px', md: '56px', lg: '64px' }}
					fontWeight="extrabold"
					bgGradient={`linear-gradient(90deg, ${colors.blue[700]} 0%, ${colors.red[700]} 100%)`}
					bgClip="text"
					id="title"
					textAlign="center"
				>
					The Art
				</Text>
				<Text
					fontSize={{ base: '6px', '3xs': '10px', '2xs': '12px', xs: '14px', '2sm': '16px' }}
					id="sub-title"
					textAlign="center"
				>
					NFT Platform for the Paris P2P Festival
				</Text>
			</VStack>
		</VStack>
	</>
);

export default HomeView;
