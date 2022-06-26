import React from 'react';
import {Image} from '@chakra-ui/react';

const CustomIcon = (props) => {
  return (
    <div className={props.className? props.className : ''}>
      <Image src={props.imgSrc}  />
    </div>

  );
}

export default CustomIcon;
