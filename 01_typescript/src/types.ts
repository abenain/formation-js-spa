/**
 * Created by antoine on 17/01/2017.
 */
export interface Book {
    title: string
    author: string
    genre: string
    publish_date: string
    price: number
    [key: string]: string | number
}

export interface Column {
    key:string,
    text:string
}

export interface Filter {
    key: string,
    value: string,
    include: boolean
}

export interface TableConfig {
    columns:Column[]
    sort?:{
        field:string
        direction:'asc' | 'desc'
    },
    filters?: Filter[]
}
