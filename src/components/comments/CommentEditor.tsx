import * as React from "react";
import {Button, HStack, Stack, Textarea} from "@chakra-ui/react";
import {constants} from "ethers";
import Avatar from "@davatar/react";
import {useAccount} from "wagmi";

import useAddComment from "../../hooks/comments/useAddComment";
import AuthButton from "../AuthButton";
import {EventType, UseCommentsContractResults} from "../../hooks/comments/useCommentsContract";
import {useQueryClient} from "react-query";

interface CommentEditorProps {
  topic: string;
  contract: UseCommentsContractResults;
}

const CommentEditor: React.FunctionComponent<CommentEditorProps> = ({topic, contract}) => {
  const [message, setMessage] = React.useState("");
  const mutation = useAddComment({contract});
  const onSuccessCallback = () => {
      setMessage("");
      queryClient.invalidateQueries([
        "comments"
      ]);
  };
  const handleSubmit = () => {
    return mutation
      .mutateAsync({
        message,
        topic,
      })
      .then(onSuccessCallback).catch((err) => console.table( mutation.error));
  }

  // const mutation = () => console.log('mutation');
  const queryClient = useQueryClient();
  // console.log(mutation.status);

  return (
    <Stack spacing={3}>
      <HStack spacing={3} alignItems="start">
        {/*<Avatar*/}
        {/*  size={48}*/}
        {/*  address={data?.address || constants.AddressZero}*/}
        {/*/>*/}
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write a message.."
          p={3}
          flex={1}
          bg="whiteAlpha.100"
          rounded="2xl"
          fontSize="lg"
        />
      </HStack>
      <AuthButton
        size="sm"
        colorScheme="pink"
        alignSelf="flex-end"
        onClick={async () => {
          await handleSubmit();
        }}
      isLoading={mutation.isLoading}
      >
      Submit
    </AuthButton>
</Stack>
)
  ;
};

export default CommentEditor;