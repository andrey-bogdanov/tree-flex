"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data = {
    id: "node0",
    name: "root node",
    children: [
        {
            id: "node1",
            name: "node 1 level 0",
            children: [
                {
                    id: "node2",
                    name: "node 1 level 1",
                    children: [
                        { id: "node2_1", name: "node 1_1 level 2", children: [] },
                        { id: "node2_2", name: "node 1_2 level 2", children: [] },
                        { id: "node2_3", name: "node 1_3 level 2", children: [] },
                    ],
                },
                {
                    id: "node3",
                    name: "node 2 level 1",
                    children: [
                        { id: "node3_1", children: [] },
                        { id: "node3_2", children: [] },
                        { id: "node3_3", children: [] },
                    ],
                },
            ],
        },
        {
            id: "node11",
            children: [
                {
                    id: "node12",
                    children: [
                        { id: "node12_1", children: [] },
                        { id: "node12_2", children: [] },
                        { id: "node12_3", children: [] },
                    ],
                },
                {
                    id: "node13",
                    children: [
                        { id: "node13_1", children: [] },
                        { id: "node13_2", children: [] },
                        { id: "node13_3", children: [] },
                    ],
                },
            ],
        },
        {
            id: "node21",
            children: [
                {
                    id: "node22",
                    children: [
                        { id: "node22_1", children: [] },
                        { id: "node22_2", children: [] },
                    ],
                },
                {
                    id: "node23",
                    children: [{ id: "node23_1", children: [] }],
                },
            ],
        },
    ],
};
exports.default = data;
