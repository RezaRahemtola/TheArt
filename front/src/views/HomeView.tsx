import { Link as RouteLink } from 'react-router-dom';
import Web3 from 'web3';

import { Button, Link } from '@chakra-ui/react';

import OutlineButton from 'components/OutlineButton';

const HomeView = (): JSX.Element => {
	const initWeb3 = async () => {
		let web3Provider;
		// Modern dapp browsers...
		if (window.ethereum) {
			web3Provider = window.ethereum;
			try {
				// Request account access
				await window.ethereum.request({ method: 'eth_requestAccounts' });
			} catch (error) {
				// User denied account access...
				console.error('User denied account access');
			}
		}
		// Legacy dapp browsers...
		else if (window.web3) {
			web3Provider = window.web3.currentProvider;
		}
		// If no injected web3 instance is detected, fall back to Ganache
		else {
			web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
		}
		setWeb3(new Web3(web3Provider));
	};

	return (
		<>
			<Link as={RouteLink} to="/signup" w="100%">
				<Button variant="inline" w="100%" id="ipc-homeView-create-account-button">
					Create an account
				</Button>
			</Link>
		</>
	);
}

export default HomeView;
