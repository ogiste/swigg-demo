import { useEffect } from "react";
import { useQueryClient } from "react-query";
import useCommentsContract, {EventType, UseCommentsContractResults} from "./comments/useCommentsContract";

interface UseEventsQuery {
    topic: string;
    contract: UseCommentsContractResults;
}

// Listen to events and refresh data
const useEvents = ({ topic, contract }: UseEventsQuery) => {
    console.count('useEvents({topic})');
    // Because we have the QueryClient provider in the App component we can use the various hooks in it such as useQueryClient
    const queryClient = useQueryClient();
    useEffect(() => {
        const handler = (comment) => {
            if (comment.topic !== topic) {
                return;
            }
            // Invalidates the query whose query key matches the passed array.
            // This will cause the useComments hook to re-render the Comments
            // component with fresh data.
            queryClient.invalidateQueries([
                "comments"
            ]);
        };

        contract.contract.on(EventType.CommentAdded, handler);

        return () => {
            contract.contract.off(EventType.CommentAdded, handler);
        };
    }, [queryClient, topic, contract.contract, contract.chainId]);
};

export default useEvents;