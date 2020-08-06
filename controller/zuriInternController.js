const ZuriIntern = require('../models/ZuriInternModel');
const {
    responseHandler
} = require('../utils/responseHandler');

module.exports = {
    getAllInterns: async (req, res) => {
        try {
            const zuriInterns = await ZuriIntern.find();
            return responseHandler(res, 'Success', 200, true, zuriInterns);

        } catch (err) {
            res.status(500).json({
                error: err
            });

        }
    }

}