import {useMutation} from "react-query";


const useMintNfts = ({contract: contractFascade}) => {
  return useMutation(async(metaDataURL: string) => {
    await contractFascade.mintNft(metaDataURL);
  });
}

export default useMintNfts;