## Tree Graph Flex 

This is simple component which renders data as a tree using svg.

### [Example](https://andrey-bogdanov.github.io/tree-graph-flex-docs/example/build)

### Installing

npm install tree-graph-flex --save

### Usage

``` js
import  { TreeGraphFlex } from 'tree-graph-flex';

ReactDOM.render(
 <React.StrictMode>
   <TreeGraphFlex 
     data={data}
     nodeContent={ node => <div> {node.subject} </div> }
     yOffset={15}
     xOffset={ level => 30 + level * 10 }
     nodeWidth={150}
     nodeHeight={50}
     pathShape={"bezier"}
     lineClassName={"connectingLines"}
     nodeBoxClassName={"nodeBox"}
     direction={"forward"}
   />
 </React.StrictMode>,
 document.getElementById('root')
);
```

### Example data object

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

### Component props

| Property           | Type               | Mandatory | Default          | Description                                                                                     |
| :----------------- | :----------------- | :-------- | :--------------- | :---------------------------------------------------------------------------------------------- |
| `data`             | object             | yes       | no               | The data to be rendered as a tree                                                               |
| `nodeWidth`        | number             | no        | 100              | Width node container                                                                            |
| `nodeHeight`       | number             | no        | 50               | Height node container                                                                           |
| `xOffset`          | number or function | no        | 50               | Distance between adjacent nodes by x                                                            |
| `yOffset`          | number             | no        | 50               | Distance between adjacent nodes by y                                                            |
| `pathShape`        | enum or function   | no        | “bezier”         | Defines curve shape, which connects nodes                                                       |
| `nodeContent`      | function           | yes       | no               | Node box content. Html element                                                                  |
| `lineClassName`    | string             | no        | "connectingLine" | ClassName, defines style of curve shape, which connects nodes                                   |
| `nodeBoxClassName` | string             | no        | "nodeBox"        | ClassName, defines style of node view                                                           |
| `direction`        | enum               | no        | "forward"        | defines building diagram order. If "forward" - root element at left side, "reverse" - at right. |

props description:

`nodeWidth`,  `nodeHeight` - size of node box in pixels, defined by HTML element size, that return by nodeContent function;

`xOffset`, `yOffset` - distance between adjacent nodes. xOffset may be a function with `level` argument, where level - tree branches level;

`pathShape` - there are three preset functions: `bezier`, `straight` and `roundedAngles`. Functions return d attribute for tag `path` as string. Instead, you can pass your function, which accepts following parameters: start x, start y, end x, end y. Corner rounding in `roundedAngles` function calculates automatically, and it depends on distance between adjacent nodes. As bonus, there is another one preset function - `staticRadiusRoundedAngles`, which accepts five arguments. Fifth argument - corner rounding radius.

`nodeContent` - any HTML element or react component.

`direction` - diagram order. If "forward" - root element at left side, "reverse" - at right. 

---

[TypeDoc documentation](https://andrey-bogdanov.github.io/tree-graph-flex-docs/docs/index.html)
