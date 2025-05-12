import Public from "./public.model.js"

export const getPublics = async (req, res) => {
    try {
        const publics = await Public.find({ status: true })
        return res.status(200).json({
            success: true,
            publics
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getPublic = async (req, res) => {
    const { uid } = req.params
    try {
        const publicData = await Public.findById(uid)
        if (!publicData) {
            return res.status(404).json({
                success: false,
                message: "Public not found"
            })
        }
        return res.status(200).json({
            success: true,
            publicData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const createPublic = async (req, res) => {
    try {
    const data = req.body

    const publicData = await Public.create(data)

    return res.status(201).json({
        success: true,
        publicData
    })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}