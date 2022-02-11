declare const data: {
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
export default data;
