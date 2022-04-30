import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Input,
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
				<ModalHeader textAlign="center">Upload an image</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Input type="text" placeholder="Name" />
					<Input type="file" />
				</ModalBody>

				<ModalFooter flexDirection="column" alignItems="center">
					<Button variant="inline">Upload</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	</>
);

export default CreateNft;
