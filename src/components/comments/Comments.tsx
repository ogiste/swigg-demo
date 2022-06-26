import * as React from "react";
import { Box, Center, Spinner, Stack } from "@chakra-ui/react";
import useComments from "../../hooks/comments/useComments";
import Comment from "./Comment";
import CommentEditor from "./CommentEditor";
import useEvents from "../../hooks/useEvents";

interface CommentsProps {
    topic: string;
}

const Comments: React.FunctionComponent<CommentsProps> = ({ topic }) => {
    const query = useComments({ topic });
    useEvents({topic});
    return (<Box >
        {(query.isLoading && (<Center p={8}><Spinner/></Center>))}
        <Stack>
            {query.data?.map((comment) => (
            <Comment key={comment.id} comment={comment}/>))}
            {query.isFetched && <CommentEditor topic={topic}/>}
        </Stack>
    </Box>);
};

export default Comments;