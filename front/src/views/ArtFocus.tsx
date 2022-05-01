import { useParams } from 'react-router-dom';
import { Box, VStack } from '@chakra-ui/react';
import TopBar from '../components/TopBar';
import ArtCard from '../components/ArtCard';

type ArtFocusParams = {
	id: string;
};

const ArtFocus = (): JSX.Element => {
	const { id } = useParams<ArtFocusParams>();

	// TODO get from the API the info of the art with the id
	const art = {
		artId: 6,
		name: 'Test name',
		owner: 'Test owner',
		ownerName: 'Test owner name',
		createdAt: 1000,
		imageHash: 'ghjkl',
	};

	return (
		<>
			<TopBar />
			<VStack mt="32px">
				<Box w="50%">
					<ArtCard art={art} />
				</Box>
			</VStack>
		</>
	);
};

export default ArtFocus;
