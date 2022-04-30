import React from 'react';
import fileDownload from 'js-file-download';
import { accounts, post, store } from 'aleph-sdk-ts';

import { DEFAULT_API_V2 } from 'aleph-sdk-ts/global';
import { ItemType } from 'aleph-sdk-ts/messages/message';

import { Button, Input } from '@chakra-ui/react';

function App() {
	function upload() {
		const reader = new FileReader();
		reader.onloadend = async function () {
			// @ts-ignore
			const buf = reader.result; // Convert data into buffer
			// @ts-ignore
			console.log(buf);
			// document.getElementById('output').src = url;

			if (buf) {
				// const blob = new Blob([buf], { type: 'image/*' });
				// @ts-ignore

				const { account } = accounts.ethereum.NewAccount();

					const newStoreFile = new File([buf], 'test.png', {
					type: 'image/*',
				});

				const fileHashPublishStore = await store.Publish({
					channel: 'TEST',
					account,
					fileObject: newStoreFile,
					storageEngine: ItemType.ipfs,
					APIServer: DEFAULT_API_V2,
				});

				const storeFile = await store.Get({
					APIServer: DEFAULT_API_V2,
					fileHash: fileHashPublishStore.content.item_hash,
				});

				fileDownload(storeFile, 'name.png');
			}
		};
		const photo = document.getElementById('photo');
		// @ts-ignore
		reader.readAsArrayBuffer(photo.files[0]); // Read Provided File
	}

	return (
		<>
			<Input type="file" name="photo" id="photo" />
			{/* eslint-disable-next-line react/jsx-no-bind */}
			<Button onClick={upload}>upload</Button>
		</>
	);
}

export default App;
