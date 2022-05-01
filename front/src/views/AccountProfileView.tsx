import { VStack, Text, HStack, GridItem, Grid, Divider } from '@chakra-ui/react';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuthContext } from 'contexts/auth';

import { Art } from 'types/types';

import TopBar from 'components/TopBar';
import ArtCardProfile from 'components/ArtCardProfile';

const AccountProfileView = (): JSX.Element => {
	const [arts, setArts] = useState<Art[]>([]);
	const auth = useAuthContext();

	useEffect(() => {
		(async () => {
			await getArts();
		})();
	}, []);

	const getArts = async () => {
		// TODO GET to API and fill setArts
		setArts([
			{
				artId: 0,
				name: 'Test name',
				owner: 'Test owner',
				ownerName: 'Test owner name',
				createdAt: 1000,
				imageHash: 'ghjkl',
			},
			{
				artId: 1,
				name: 'Test name',
				owner: 'Test owner',
				ownerName: 'Test owner name',
				createdAt: 1000,
				imageHash: 'ghjkl',
			},
			{
				artId: 2,
				name: 'Test name',
				owner: 'Test owner',
				ownerName: 'Test owner name',
				createdAt: 1000,
				imageHash: 'ghjkl',
			},
			{
				artId: 3,
				name: 'Test name',
				owner: 'Test owner',
				ownerName: 'Test owner name',
				createdAt: 1000,
				imageHash: 'ghjkl',
			},

			{
				artId: 4,
				name: 'Test name',
				owner: 'Test owner',
				ownerName: 'Test owner name',
				createdAt: 1000,
				imageHash: 'ghjkl',
			},

			{
				artId: 5,
				name: 'Test name',
				owner: 'Test owner',
				ownerName: 'Test owner name',
				createdAt: 1000,
				imageHash: 'ghjkl',
			},

			{
				artId: 6,
				name: 'Test name',
				owner: 'Test owner',
				ownerName: 'Test owner name',
				createdAt: 1000,
				imageHash: 'ghjkl',
			},
		]);
	};

	return (
		<VStack>
			<TopBar />
			<HStack>
				<Text color="#FFEBEB" fontSize="32px">
					Welcome {auth.accountName} 👋
				</Text>
			</HStack>
			<Divider w="75%" pt="16px" />
			<Grid
				templateColumns={{
					base: 'repeat(1, 1fr)',
					xl: 'repeat(2, 1fr)',
					'2xl': 'repeat(5, 1fr)',
					'4xl': 'repeat(4, 1fr)',
					'5xl': 'repeat(5, 1fr)',
				}}
				pt="64px"
				gap="32px"
				px="7%"
			>
				{arts.map((art) => (
					<GridItem key={art.artId}>
						<Link to={`/art/${art.artId}`}>
							<ArtCardProfile art={art} />
						</Link>
					</GridItem>
				))}
			</Grid>
		</VStack>
	);
};

export default AccountProfileView;
