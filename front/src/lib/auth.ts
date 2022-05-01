import Web3 from 'web3';

class Auth {
	public account: Web3 | undefined;

	public accountName: string | undefined;

	public async logout(): Promise<void> {
		localStorage.clear();
	}

	public async login(web3: Web3): Promise<void> {
		this.account = web3;
		this.accountName = 'TEMP';
		// TODO fetch to API the name of the account
	}

	public async getAccount(): Promise<Web3 | undefined> {
		return this.account;
	}
}

export default Auth;
