import { Image, VStack } from '@chakra-ui/react';
import { Art } from '../types/types';

type ArtCardProfileProps = {
	art: Art;
};

const ArtCardProfile = ({ art }: ArtCardProfileProps): JSX.Element => (
	<VStack>
		<Image
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
			w="100%"
			h="auto"
			border="2px #A525CC solid"
			borderRadius="0px 0px 24px 24px"
			mb="16px"
		/>
	</VStack>
);

export default ArtCardProfile;
