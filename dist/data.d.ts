export declare const dataLong: {
    id: string;
    name: string;
    children: ({
        id: string;
        name: string;
        children: ({
            id: string;
            name: string;
            children: {
                id: string;
                name: string;
                children: any[];
            }[];
        } | {
            id: string;
            name: string;
            children: {
                id: string;
                children: any[];
            }[];
        })[];
    } | {
        id: string;
        children: {
            id: string;
            children: {
                id: string;
                children: any[];
            }[];
        }[];
        name?: undefined;
    })[];
};
export declare const dataOne: {
    id: string;
    children: any[];
};
export declare const dataStraight: {
    id: string;
    children: {
        id: string;
        children: {
            id: string;
            children: {
                id: string;
                children: any[];
            }[];
        }[];
    }[];
};
