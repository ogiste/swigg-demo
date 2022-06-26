import * as React from "react";
import {Text, Heading, HStack, Stack, Avatar} from "@chakra-ui/react";
import TimeAgo from "react-timeago";
import {Comment} from "../../hooks/comments/useCommentsContract";
import Username from "../Username";

interface CommentProps {
  comment: Comment;
}

const SingleComment: React.FunctionComponent<CommentProps> = ({comment}: CommentProps) => {
  return (
    <HStack>
      <Avatar
        size={'md'}
        src={'https://avatars.dicebear.com/api/male/username.svg'}
      />
      <Stack>
        <Heading color="whiteAlpha.100.800" fontSize="lg">
          <Username address={comment.creator_address}/>
        </Heading>
        <Text>
          {comment.message}
        </Text>
        <Text>
          <TimeAgo date={comment.created_at.toNumber() * 1000}/>
        </Text>
      </Stack>
    </HStack>
  );
};

export default SingleComment;
