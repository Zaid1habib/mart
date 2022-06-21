import React, { useState } from 'react';
import { Input } from 'antd';
import { scrollbarStyle } from '../Constants';

const { TextArea } = Input;

const Textarea = (props) => {
  const { value , setValue }=props 

  return (
    <>
      <div
        style={scrollbarStyle}
      />
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Controlled autosize"
        sx={scrollbarStyle}
        autoSize={{
          minRows: 3,
          maxRows: 5,
        }}
      />
    </>
  );
};

export default Textarea;