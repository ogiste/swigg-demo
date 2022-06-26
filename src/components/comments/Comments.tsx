import * as React from "react";
import {Box, Center, Spinner, Stack} from "@chakra-ui/react";
import useComments from "../../hooks/comments/useComments";
import SingleComment from "./SingleComment";
import CommentEditor from "./CommentEditor";
import useEvents from "../../hooks/useEvents";
import useCommentsContract, {UseCommentsContractResults} from "../../hooks/comments/useCommentsContract";
import {Toaster} from "react-hot-toast";
import MainLayout from "../layout/MainLayout";
import {useEffect, useState} from "react";

interface CommentsProps {
  topic: string;
}

const Comments: React.FunctionComponent<CommentsProps> = ({topic}) => {
  console.count('comments-component');
  const contract = useCommentsContract();
  // const [query, setQuery] = useState({...useComments({topic, contract})});
  const query = useComments({topic, contract});
  // const query = { isLoading: true, isFetched: false};
  // @ts-ignore
  useEvents({topic, contract});
  return (
    <MainLayout>
      <Box>
        {(query.isLoading && (<Center p={8}><Spinner/></Center>))}
        <Stack>
          {query?.data?.map((comment) => (
            <SingleComment key={comment.id} comment={comment}/>))}
          {query.isFetched && <CommentEditor contract={contract} topic={topic}/>}
        </Stack>
      </Box>
    </MainLayout>
  );
};

export default Comments;