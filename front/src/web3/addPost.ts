import axios from "axios";

const addPost = (address: string, metadataHash: unknown): void => {
  const http = axios.create({
    baseURL: "https://api.starton.io/v2",
    headers: {
        "x-api-key": "Pi1O1fJ7K7aNVISDUugF4F6oHVFBEXW9",
    },
  });

  http.post(`/smart-contract/polygon-mumbai/0x7E78Cb872B733CfcfABE9BA6b548B31d8424Cce1/call`,
  {
      "functionName": 'addPost',
      "signerWallet": 'SIGNER_WALLET',
      "speed": "low",
      "params": [
          address,
          metadataHash
      ],

  }).catch((err: any) => { console.error(err) })
    .then((response: any) => { console.log(response.data) });
};



addPost("0x7E78Cb872B733CfcfABE9BA6b548B31d8424Cce1", "0x7E78Cb872B733CfcfABE9BA6b548B31d8424Cce1");

export default addPost;
