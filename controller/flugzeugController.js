import { getAllFlugzeug, savePlain } from "../services/flugzeugService.js"


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

export const addFlugzeug = async (req,res) => {
    try{
        const flugzeug ={
            hersteller: req.body.hersteller,
            Baujahr: req.body.baujahr
        }
        const result = await savePlain(flugzeug)
        res.status(200).json(result)
    }
    catch(err) {
        res.status(500).json({error:err})
    }
}