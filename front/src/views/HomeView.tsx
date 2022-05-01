import Web3 from 'web3';

import { Button } from '@chakra-ui/react';

import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../contexts/auth';

const HomeView = (): JSX.Element => {
	const auth = useAuthContext();
	const history = useHistory();

	const initWeb3 = async () => {
		let web3Provider;
		if ((window as any).ethereum) {
			web3Provider = (window as any).ethereum;
			try {
				// Request account access
				await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
			} catch (error) {
				// User denied account access...
				console.error('User denied account access');
				web3Provider = undefined;
			}
		}
		// Legacy dapp browsers...
		else if ((window as any).web3) {
			web3Provider = (window as any).web3.currentProvider;
		}
		// If no injected web3 instance is detected, fall back to Ganache
		else {
			web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
		}
		if (web3Provider !== undefined) {
			await auth.login(new Web3(web3Provider));
			if (web3Provider) {
				history.push('/feed');
			}
		}
	};

	return (
		<>
			<Button variant="inline" w="100%" onClick={initWeb3} cursor="pointer">
				Log in with MetaMask
			</Button>
		</>
	);
};

export default HomeView;
