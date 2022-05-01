import {
	Box,
	HStack,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Spacer,
	Text,
	VStack,
} from '@chakra-ui/react';

import colors from 'theme/foundations/colors';

import { CloseIcon } from '@chakra-ui/icons';

type PopupProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: JSX.Element;
	CTA?: JSX.Element;
};

const Popup = ({ isOpen, onClose, title, children, CTA }: PopupProps): JSX.Element => (
	<Modal isOpen={isOpen} onClose={onClose} size="xl">
		<ModalOverlay />
		<ModalContent w="75%">
			<ModalHeader>
				<HStack w="100%">
					<VStack w="100%">
						<Text
							fontSize={{ base: '16px', '3xs': '16px', xs: '22px' }}
							fontWeight="600"
							textAlign="center"
							bgGradient={`linear-gradient(90deg, ${colors.blue[700]} 0%, ${colors.red[700]} 100%)`}
							bgClip="text"
						>
							{title}
						</Text>
					</VStack>
					<Spacer />
					<Box>
						<CloseIcon color={`${colors.red[700]}`} onClick={onClose} cursor="pointer" />
					</Box>
				</HStack>
			</ModalHeader>

			<ModalBody mt="16px" mb="32px">
				{children}
			</ModalBody>

			<ModalFooter flexDirection="column" alignItems="center">
				{CTA}
			</ModalFooter>
		</ModalContent>
	</Modal>
);

export default Popup;
