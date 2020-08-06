const ZuriIntern = require('../models/ZuriInternModel');
const {
    responseHandler
} = require('../utils/responseHandler');

module.exports = {
    getAllInterns: async (req, res) => {
        let searchValue;
        if (req.query.firstName) {
            searchValue = {
                firstName: req.query.firstName
            }
        } else {
            searchValue = {}
        }
        try {
            const zuriInterns = await ZuriIntern.find(searchValue);
            return responseHandler(res, 'Success', 200, true, zuriInterns);

        } catch (err) {
            return responseHandler(res, 'An Error occured', 500, false, err);
        }
    }

};