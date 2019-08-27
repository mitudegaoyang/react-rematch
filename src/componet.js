import React, { Component } from 'react';

let name = 'zhangsan';
let msg = {
  name: 'zhangsan',
  age: 1212
};
export const Componet = (props) => {
  // console.log(props);
  if (props['v-if']) {
    let isShow = props['v-show'] ? 'block' : 'none';
    return (
      // <ul onClick={props.onClick.bind(this, msg, name)} style={{display: isShow}} >
      <ul onClick={()=>props.onClick(msg, name)} style={{display: isShow}} >
        <li>${name}</li>
        <li>${props.title}</li>
        <li>${props.msg}</li>
        <li>zhangsan</li>
      </ul>
    );
  } else {
    return (<div></div>);
  }
};