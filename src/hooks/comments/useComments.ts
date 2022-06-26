import { useQuery } from "react-query";
import useCommentsContract, {UseCommentsContractResults} from "./useCommentsContract";

interface UseCommentsQuery {
    topic: string;
    contract: UseCommentsContractResults;
}

const fetchComments = ({topic, contract}: UseCommentsQuery) => {
    return useQuery(["comments", topic], () => {
        console.log('fetching contract comments')
        return contract.getComments(topic);
    }, {retry: false});
}

export default fetchComments;