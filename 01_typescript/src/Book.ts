/**
 * Created by antoine on 17/01/2017.
 */
interface Book {
    title: string
    author: string
    genre: string
    publish_date: string
    price: number
    [key: string]: string | number
}

export default Bookk