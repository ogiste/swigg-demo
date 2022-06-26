import * as React from "react";
import { Text, TextProps } from "@chakra-ui/react";

import { useEnsName } from "wagmi";
import truncateMiddle from "truncate-middle";

interface UsernameProps extends TextProps {
    address: string;
  }

  const Username: React.FunctionComponent<UsernameProps> = ({address,...otherProps}) => {
    const { data, isError, isLoading }  = useEnsName({address});

      return (<Text display="inline" textTransform={data ? "none": "uppercase"} {...otherProps}>
          {data || truncateMiddle(address || "", 5, 4, "...")}
      </Text>);
  };

  export default Username;