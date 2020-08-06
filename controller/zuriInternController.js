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
    },

    filterInterns: async (req, res) => {
        let filterValue
        if (req.query.track) {
            filterValue = {
                track: req.query.firstName
            }
        } else {
            filterValue = {
                track: ""
            }
        }
        try {
            const zuriInterns = await ZuriIntern.find(filterValue);
            return responseHandler(res, 'Success', 200, true, zuriInterns);

        } catch (err) {
            return responseHandler(res, 'An Error occured', 500, false, err);
        }
    }

};