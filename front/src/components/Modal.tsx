import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react';

type PopupProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	body: JSX.Element;
	footer: JSX.Element;
};

const Popup = ({ isOpen, onClose, title, body, footer }: PopupProps): JSX.Element => (
	<>
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader textAlign="center">{title}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>{body}</ModalBody>

				<ModalFooter flexDirection="column" alignItems="center">
					{footer}
				</ModalFooter>
			</ModalContent>
		</Modal>
	</>
);

export default Popup;
