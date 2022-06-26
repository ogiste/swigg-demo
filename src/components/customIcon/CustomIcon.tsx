import React from 'react';
import Image from "next/image";


const CustomIcon = (props) => {
  return (
    <div className={props.className? props.className : ''}>
      <Image src={props.imgSrc}  />
    </div>

  );
}

export default CustomIcon;
