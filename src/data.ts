const data = {
  id: 0,
  children: [
    {
      id: 1,
      name: "root node",
      children: [
        {
          id: 2,
          name: "node 1 level 1",
          children: [
            { id: 2_1, name: "node 1_1 level 2", children: [] },
            { id: 2_2, name: "node 1_2 level 2", children: [] },
            { id: 2_3, name: "node 1_3 level 2", children: [] },
          ],
        },
        {
          id: 3,
          name: "node 2 level 1",
          children: [
            { id: 3_1, children: [] },
            { id: 3_2, children: [] },
            { id: 3_3, children: [] },
          ],
        },
      ],
    },
    {
      id: 11,
      children: [
        {
          id: 12,
          children: [
            { id: 12_1, children: [] },
            { id: 12_2, children: [] },
            { id: 12_3, children: [] },
          ],
        },
        {
          id: 13,
          children: [
            { id: 13_1, children: [] },
            { id: 13_2, children: [] },
            { id: 13_3, children: [] },
          ],
        },
      ],
    },
    {
      id: 21,
      children: [
        {
          id: 22,
          children: [
            { id: 22_1, children: [] },
            { id: 22_2, children: [] },
          ],
        },
        {
          id: 23,
          children: [{ id: 23_1, children: [] }],
        },
      ],
    },
  ],
};

export default data;
