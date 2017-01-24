/**
 * Created by antoine on 25/12/2016.
 */
export interface Book{
    id: string
    title: string
    author: string
    publish_date: string
    price: number
}

export interface Document {
    title: string,
    reference: string,
    object: string,
    nature: number
}