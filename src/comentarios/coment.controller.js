import Coment from "./coment.model.js"

export const getComents = async (req, res) => {
    try {
        const coments = await Coment.find({ status: true })
        return res.status(200).json({
            success: true,
            coments
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const createComent = async (req, res) => {
    try {
    const data = req.body

    const comentData = await Coment.create(data)

    return res.status(201).json({
        success: true,
        comentData
    })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const eliminateComent = async (req, res) => {
    try{
        const { uid } = req.params
        const comentData = await Coment.findByIdAndUpdate(uid, { status: false }, { new: true })

        return res.status(200).json({
            success: true,
            comentData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}