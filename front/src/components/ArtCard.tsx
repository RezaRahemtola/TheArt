import { VStack, Text, Box, Image, HStack, Spacer, Icon } from '@chakra-ui/react';
import { AiFillHeart } from 'react-icons/ai';
import { Art } from 'types/types';

type ArtCardProps = {
	art: Art;
};

const ArtCard = ({ art }: ArtCardProps): JSX.Element => (
	<Box w="100%" bg="#D1EFEA" pb="16px" borderRadius="0px 0px 24px 24px" mb="16px">
		<VStack>
			<Image
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
				w="100%"
				h="auto"
				border="2px #A525CC solid"
			/>
			<HStack w="100%">
				<Box w="16px" mt="8px" ml="16px">
					<Icon as={AiFillHeart} w="40px" h="40px" color="#585858" _hover={{ color: 'black' }} />
				</Box>
				<Spacer />
				<VStack w="100%">
					<Text textColor="#14000A">{art.name}</Text>
					<Text textColor="#14000A">By, {art.ownerName}</Text>
				</VStack>
			</HStack>
		</VStack>
	</Box>
);

export default ArtCard;
