import { getAllFlugzeug } from "../services/flugzeugService.js"

export const getFlugzeug = async (req, res) => {
    try {
        const flugzeug = await getAllFlugzeug()
        console.log(flugzeug)
        res.status(200).json(flugzeug)
    }catch(error){
        console.log(error)
        res.status(500).json({error: error})
    }
}