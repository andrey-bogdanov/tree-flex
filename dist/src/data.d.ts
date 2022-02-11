declare const data: {
    id: number;
    children: ({
        id: number;
        name: string;
        children: ({
            id: number;
            name: string;
            children: {
                id: number;
                name: string;
                children: any[];
            }[];
        } | {
            id: number;
            name: string;
            children: {
                id: number;
                children: any[];
            }[];
        })[];
    } | {
        id: number;
        children: {
            id: number;
            children: {
                id: number;
                children: any[];
            }[];
        }[];
        name?: undefined;
    })[];
};
export default data;
