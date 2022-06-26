import { useQuery } from "react-query";
import useCommentsContract, {UseCommentsContractResults} from "./useCommentsContract";

interface UseCommentsQuery {
    topic: string;
    contract: UseCommentsContractResults;
}

const useComments = ({topic, contract}: UseCommentsQuery) => {
    console.count('useComments');
    return useQuery(["comments"], () => {
        console.log('fetching contract comments')
        return contract.getComments(topic);
    });
}

export default useComments;