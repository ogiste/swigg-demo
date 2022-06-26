import * as wagmi from "wagmi";
import {useProvider, useSigner} from "wagmi";
import type {BigNumber} from "ethers";

import NftsContract from "../../artifacts/contracts/Nfts.sol/SwiggNFTMinterERC721Tester.json";
const testMumbaiNFTContractAddress = '0x139e7Cbe6Fb49BD9edB0d741a900dE616D027FD0';


const useNftsContract  = () => {
  // An ethers.Signer instance associated with the signed-in wallet.
  // https://docs.ethers.io/v5/api/signer/
  const { data: signer, isError, isLoading } = useSigner();
  // An ethers.Provider instance. This will be the same provider that is
  // passed as a prop to the WagmiProvider.
  const provider = useProvider();
  const contract = wagmi.useContract({
    addressOrName: testMumbaiNFTContractAddress,
    contractInterface: NftsContract.abi,
    signerOrProvider: signer || provider,
  });

  // Wrapper to add types to our addComment function.
  const mintNft = async (tokenURI: string): Promise<void> => {
    // Create a new transaction
    const tx = await contract.mint(tokenURI);
    // Wait for transaction to be mined
    await tx.wait();
  };

  return {
    contract,
    chainId: contract.provider.network?.chainId,
    mintNft
  };
};


