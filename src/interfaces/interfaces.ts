export interface IPosts {
    id?: ()=> void,
    title?: string,
    body?: string,
}

export interface IPost {
    id?: string | number,
    title: string,
    body?: string,
}
