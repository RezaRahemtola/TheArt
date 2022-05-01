import { Link } from 'react-router-dom';

import { BsFillPersonFill } from 'react-icons/bs';
import { HiHome } from 'react-icons/hi';

import { Box, HStack, VStack, Icon, useDisclosure, Button, Input } from '@chakra-ui/react';
import colors from 'theme/foundations/colors';
import { AddIcon } from '@chakra-ui/icons';
import Modal from 'components/Modal';
import { ChangeEvent, useState } from 'react';

const TopBar = (): JSX.Element => {
	const { isOpen: isOpenAddPicture, onOpen: onOpenAddPicture, onClose: onCloseAddPicture } = useDisclosure();
	const [isUploadLoading, setIsUploadLoading] = useState(false);
	const [fileEvent, setFileEvent] = useState<ChangeEvent<HTMLInputElement> | undefined>(undefined);
	const [fileTitle, setFileTitle] = useState<ChangeEvent<HTMLInputElement> | undefined>(undefined);

	const addPicture = async () => {
		setIsUploadLoading(true);
		// TODO read file
		// TODO send fileTitle + file (read) to API
		setIsUploadLoading(false);
	};

	return (
		<Box zIndex={100} height="50px !important" minH="50px !important">
			<Box as="nav" position="fixed" right="0" top="0">
				<VStack>
					<Box
						w="64px"
						h="50px"
						bgGradient={`linear-gradient(90deg, ${colors.blue[700]} 0%, ${colors.red[700]} 100%)`}
						borderRadius="24px"
						mt="16px"
						mx="16px"
					>
						<Link to="/feed">
							<HStack w="100%" h="100%">
								<VStack w="100%">
									<Icon as={HiHome} color="white" />
								</VStack>
							</HStack>
						</Link>
					</Box>
					<Box
						w="64px"
						h="50px"
						bgGradient={`linear-gradient(90deg, ${colors.blue[700]} 0%, ${colors.red[700]} 100%)`}
						borderRadius="24px"
						mt="16px"
						mx="16px"
					>
						<Link to="/account">
							<HStack w="100%" h="100%">
								<VStack w="100%">
									<Icon as={BsFillPersonFill} color="white" />
								</VStack>
							</HStack>
						</Link>
					</Box>
					<Box
						w="64px"
						h="50px"
						bgGradient={`linear-gradient(90deg, ${colors.blue[700]} 0%, ${colors.red[700]} 100%)`}
						borderRadius="24px"
						mx="16px"
						onClick={onOpenAddPicture}
						cursor="pointer"
					>
						<HStack w="100%" h="100%">
							<VStack w="100%">
								<AddIcon color="white" />
							</VStack>
						</HStack>
					</Box>
				</VStack>
			</Box>
			<Modal
				isOpen={isOpenAddPicture}
				onClose={onCloseAddPicture}
				title="Select your picture"
				CTA={
					<Button variant="inline" w="100%" mb="16px" onClick={addPicture} isLoading={isUploadLoading}>
						Add your picture
					</Button>
				}
			>
				<>
					<Input
						type="text"
						h="100%"
						w="100%"
						p="10px"
						placeholder="Add the title of your picture"
						onChange={(e: ChangeEvent<HTMLInputElement>) => setFileTitle(e)}
						mb="16px"
					/>
					<Input
						type="file"
						h="100%"
						w="100%"
						p="10px"
						onChange={(e: ChangeEvent<HTMLInputElement>) => setFileEvent(e)}
					/>
				</>
			</Modal>
		</Box>
	);
};

export default TopBar;
