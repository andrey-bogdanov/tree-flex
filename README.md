# FlexTree component

This is simple component which renders data as a tree using svg.

## Installing

npm install treeflex --save

## Usage

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  { Tree } from 'treeflex';
import  { data } from './data.ts'

function node(node) {
 return (
   <div>
     {node.subject}
   </div>
 )
};

function xOffset(level) {
   const offset = 30 + level*10
 return offset
};

ReactDOM.render(
 <React.StrictMode>
   <Tree data={data}
     nodeContent={node}
     yOffset={15}
     xOffset={xOffset}
     nodeWidth={150}
     nodeHeight={50}
     pathShape={"bezier"}
   />
 </React.StrictMode>,
 document.getElementById('root')
);

```

## Example data object

```
export const data = {
  id: "0",
  subject: "animals",
  children: [
    {
      id: "1",
      subject: "dogs",
      children: [
        {
          id: "1.1",
          subject: "terriers",
          children: [],
        },
        {
          id: "1.2",
          subject: "mastiffs",
          children: [],
        },
      ],
    },
    {
      id: "2",
      subject: "birds",
      children: [
        {
          id: "2.1",
          subject: "parrots",
          children: [],
        },
        {
          id: "2.2",
          subject: "crows",
          children: [],
        },
      ],
    },
  ],
};

```

## Component props

| Property | Type   | Mandatory | Default | Description                       |
| -------- | ------ | --------- | ------- | --------------------------------- |
| data     | object | yes       | no      | The data to be rendered as a tree |

<mark-down>
  <render>
    <h1>h1</h1>
    <ul>
      <li>test</li>
    </ul>
  </render>
</mark-down>
