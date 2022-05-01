export type Art = {
	artId: number;
	name: string;
	owner: string;
	ownerName: string;
	createdAt: number;
	imageHash: string;
};

export type ResponseMessage = {
	success: boolean;
	message: string;
};
