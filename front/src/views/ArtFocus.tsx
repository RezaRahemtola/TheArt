import { useParams } from 'react-router-dom';
import { Box, HStack, Image, Spacer, Text, VStack } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';

type ArtFocusParams = {
	id: string;
};

const ArtFocus = (): JSX.Element => {
	const { id } = useParams<ArtFocusParams>();

	// TODO get from the API the info of the art
	const art = { name: 'test', ownerName: 'test' };

	return (
		<VStack w="50%">
			<Image
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
				w="100%"
				h="auto"
			/>
			<HStack>
				<Box w="16px">
					<ArrowUpIcon />
				</Box>
				<Spacer />
				<VStack>
					<Text textColor="#14000A">{art.name}</Text>
					<Text textColor="#14000A">By, {art.ownerName}</Text>
				</VStack>
			</HStack>
		</VStack>
	);
};

export default ArtFocus;
