import { Button, Input } from '@chakra-ui/react';

import Popup from 'components/Modal';

type CreateNftProps = {
	isOpen: boolean;
	onClose: () => void;
};

const CreateBody = (): JSX.Element => (
	<>
		<Input type="text" placeholder="Name" />
		<Input type="file" />
	</>
);

const CreateFooter = (): JSX.Element => (
	<>
		<Button variant="inline">Upload</Button>
	</>
);

const CreateNft = ({ isOpen, onClose }: CreateNftProps): JSX.Element => (
	<>
		<Popup isOpen={isOpen} onClose={onClose} title="Upload an image" body={<CreateBody />} footer={<CreateFooter />} />
	</>
);

export default CreateNft;
