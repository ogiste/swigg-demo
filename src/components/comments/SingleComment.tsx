import * as React from "react";
import { Text, Heading, HStack, Stack } from "@chakra-ui/react";
import TimeAgo from "react-timeago";
import Avatar from "@davatar/react";
import Username from "../Username";

interface CommentProps {
    comment: Comment;
}

const Comment: React.FunctionComponent<CommentProps> = ({ comment }) => {
    return (
        <HStack>
            <Avatar size={48} address={comment.creator_address} />'<Stack>
                <Heading color="whiteAlpha.100.800" fontSize="lg">
                    <Username address={comment.creator_address} />
                </Heading>
                <Text>
                    {comment.message}
                </Text>
                <Text>
                    <TimeAgo date={comment.created_at.toNumber() * 1000} />
                </Text>
            </Stack>'
        </HStack>
    );
};

export default Comment;