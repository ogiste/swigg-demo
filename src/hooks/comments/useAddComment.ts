import { useMutation } from "react-query";
import useCommentsContract from "./useCommentsContract";

interface UseAddCommentPayload {
    topic: string;
    message: string;
}

const useAddComment = ({contract: contractFascade}) => {
    return useMutation(async({topic, message}: UseAddCommentPayload) => {
        await contractFascade.addComment(topic, message);
    });
}

export default useAddComment;