import * as React from "react";
import {Box, Center, Heading, HStack, Link, Spinner, Stack, Text} from "@chakra-ui/react";
import {toast, Toaster} from "react-hot-toast";
import Hero from "../../components/hero/Hero";
import MainLayout from "../../components/layout/MainLayout";
import {useQuery} from "react-query";
import {useState} from "react";
import useNftContract from "../../hooks/nfts/useNftContract";

import Avatar from "@davatar/react";
import Username from "../../components/Username";
import TimeAgo from "react-timeago";
import MintForm from "./mintForm";
import useNftsContract from "../../hooks/nfts/useNftContract";
import useMintNfts from "../../hooks/nfts/useMintNfts";
import {validURL} from "../../utils/helpers";
import MetadataUpload from "./metadataUpload";
import axios from "axios";
import {useConnect} from "wagmi";

const MintPage = () => {
  const nftsContract = useNftsContract();
  const mutation = useMintNfts({contract: nftsContract});
  const [nftData, setNftData] = useState({name: '', description: '', image: ''});
  const [counter, setCounter] = useState(1);
  const [isGenerated, setIsGenerated] = useState(false);
  const [metaDataFile, setMetaDataFile] = useState(null);
  const [ipfsFileLink, setIpfsFileLink] = useState(null);

  const handleInputChange = (e, inputName) => {
    if (inputName == 'name') {
      setNftData((oldData) => ({...oldData, name: e.target.value}));
    }
    if (inputName == 'description') {
      setNftData((oldData) => ({...oldData, description: e.target.value}));
    }
    if (inputName == 'image') {
      setNftData((oldData) => ({...oldData, image: e.target.value}));
    }
  }
  const downloadObjectAsJson = (exportObj, exportName) => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    setIsGenerated(true);
    return true;
  }
  const isValidNFTMetadata = () => {
    const isValidImageURL = validURL(nftData.image);
    if (!isValidImageURL) {
      return false;
    }

    return !(nftData.name.length < 3 || nftData.description.length < 5);


  }
  const handleSubmitForm = (e) => {
    e.preventDefault();

    // create the metadata file and provide it to the user
    if (isValidNFTMetadata()) {
      console.log('creating new NFT metadata obj');
      console.table(nftData);
      setCounter((prevCount) => prevCount + 1);
      const downloadedMetadata = downloadObjectAsJson(nftData, `nft-metadata-${counter}`);
      return;
      // Use metadata to mint an NFT
      const metaDataURL = '';

    } else {
      return console.log('meta data required');
    }
  }

  const handleSubmitMetadata = async (e) => {
    e.preventDefault();
    if(metaDataFile){
      await handeSendFileToIPFS(e);
      console.log(ipfsFileLink);
      toast('minting NFT');
      await mutation
        .mutateAsync(
          ipfsFileLink
        );

    }
  }

  const handleFileChange = (e) => {
    setMetaDataFile(e.target.files[0])
  }

  const handeSendFileToIPFS = async (e) => {

    if (metaDataFile) {
      try {

        const formData = new FormData();
        formData.append("file", metaDataFile);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          // Keys will be revoked after demo for testing purposes only
          headers: {
            'pinata_api_key': `15dacc734851be0b4dbd`,
            'pinata_secret_api_key': `0cf0843c0177888afd772413d877592d29bfa4af21c4205188421c41bcf2a875`,
            "Content-Type": "multipart/form-data"
          },
        });

        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        console.log(ImgHash);
        setIpfsFileLink(ImgHash);
        toast.success('Uploaded metadata');
//Take a look at your Pinata Pinned section, you will see a new file added to you list.



      } catch (error) {
        console.log("Error sending File to IPFS: ")
        console.log(error)
      }
    }
  }
  return (
    <MainLayout>
      <MintForm formData={nftData} onInputChange={handleInputChange} onSubmitForm={handleSubmitForm}/>
      ({isGenerated && <MetadataUpload onFileChange={handleFileChange} onSubmitMetadata={handleSubmitMetadata}/>} )
      <Box p={8}
           maxW="600px"
           minW="320px"
           m="0 auto">
        <Toaster position="bottom-right"/>
      </Box>
    </MainLayout>);
};

export default MintPage;
