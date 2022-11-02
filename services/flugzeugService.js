import { getDb } from '../db.js'

export const getAllFlugzeug = async () => {

    const db = await getDb()
    const result = await db.collection('flugzeuge').find().toArray()
    return result

}

export const savePlain = async (flugzeug) => {
    const db = await getDb()
    const result = await db.collection('flugzeuge').insertOne(flugzeug)
    return result
}