import { Grid, GridItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Art } from 'types/types';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import ArtCard from '../components/ArtCard';

const FeedView = (): JSX.Element => {
	const [arts, setArts] = useState<Art[]>([]);

	useEffect(() => {
		getArts();
	}, []);

	const getArts = async () => {
		// TOOD GET to API and fill setArts
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
		]);
	};

	return (
		<>
			<TopBar />
			<Grid
				templateColumns={{
					base: 'repeat(1, 1fr)',
					xl: 'repeat(2, 1fr)',
					'2xl': 'repeat(1, 1fr)',
					'4xl': 'repeat(4, 1fr)',
					'5xl': 'repeat(5, 1fr)',
				}}
				mt="64px"
				gap="32px"
				px="30%"
			>
				{arts.map((art) => (
					<GridItem key={art.artId}>
						<ArtCard art={art} />
					</GridItem>
				))}
			</Grid>
		</>
	);
};

export default FeedView;
