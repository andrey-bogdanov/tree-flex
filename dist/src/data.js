"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data = {
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
                        { id: 21, name: "node 1_1 level 2", children: [] },
                        { id: 22, name: "node 1_2 level 2", children: [] },
                        { id: 23, name: "node 1_3 level 2", children: [] },
                    ],
                },
                {
                    id: 3,
                    name: "node 2 level 1",
                    children: [
                        { id: 31, children: [] },
                        { id: 32, children: [] },
                        { id: 33, children: [] },
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
                        { id: 121, children: [] },
                        { id: 122, children: [] },
                        { id: 123, children: [] },
                    ],
                },
                {
                    id: 13,
                    children: [
                        { id: 131, children: [] },
                        { id: 132, children: [] },
                        { id: 133, children: [] },
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
                        { id: 221, children: [] },
                        { id: 222, children: [] },
                    ],
                },
                {
                    id: 23,
                    children: [{ id: 231, children: [] }],
                },
            ],
        },
    ],
};
exports.default = data;
