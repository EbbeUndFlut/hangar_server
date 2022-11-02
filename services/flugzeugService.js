import {getDb} from '../db.js'

export const getAllFlugzeug = async () => {

    const db = await getDb()
    const result = await db.collection('flugzeuge').find().toArray()
    return result

}