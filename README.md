#Tree Flex component

This is simple component which renders data as a tree using svg.

[Example](https://andrey-bogdanov.github.io/treeflex-ed/example/build)

## Installing

npm install tree-graph-flex --save

## Usage

``` js
import  { Tree } from 'tree-graph-flex';

ReactDOM.render(
 <React.StrictMode>
   <Tree data={data}
     nodeContent={ node => <div> {node.subject} </div> }
     yOffset={15}
     xOffset={ level => 30 + level * 10 }
     nodeWidth={150}
     nodeHeight={50}
     pathShape={"bezier"}
   />
 </React.StrictMode>,
 document.getElementById('root')
);

```

## Example data object

``` js
const data = {
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

| Property      | Type               | Mandatory | Default  | Description                               |
| :------------ | :----------------- | :-------- | :------- | :---------------------------------------- |
| `data`        | object             | yes       | no       | The data to be rendered as a tree         |
| `nodeWidth`   | number             | no        | 100      | in px                                     |
| `nodeHeight`  | number             | no        | 50       | in px                                     |
| `xOffset`     | number or function | no        | 50       | in px                                     |
| `yOffset`     | number             | no        | 50       | in px                                     |
| `pathShape`   | enum or function   | no        | “bezier” | Defines curve shape, which connects nodes |
| `nodeContent` | function           | yes       | no       | Should return html element                |

[TypeDoc documentation](https://andrey-bogdanov.github.io/treeflex-ed/docs/index.html)


