/**
 * Created by antoine on 25/12/2016.
 */
export interface GlobalState{
    settings: {
        username: string
    }
}

export interface Book{
    id: string
    title: string
    author: string
    publish_date: string
    price: number
}