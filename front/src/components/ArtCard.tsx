import { VStack, Text, Box, Image, HStack, Spacer } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import { Art } from '../types/types';

type ArtCardProps = {
	art: Art;
};

const ArtCard = ({ art }: ArtCardProps): JSX.Element => (
	<Box w="100%" bg="#D1EFEA" pb="16px" borderRadius="0px 0px 24px 24px" border="2px #A525CC solid">
		<VStack>
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
	</Box>
);

export default ArtCard;
