import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Text,
} from '@chakra-ui/react';

type CreateNftProps = {
	isOpen: boolean;
	onClose: () => void;
};

const CreateNft = ({ isOpen, onClose }: CreateNftProps): JSX.Element => (
	<>
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Modal Title</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Text>nft modal</Text>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={onClose}>
						Close
					</Button>
					<Button variant="inline">Upload</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	</>
);

export default CreateNft;
