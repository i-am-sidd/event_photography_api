let { removeFile } = require("../../utils/remove_file");
const { errorRes } = require("../../utils/response_functions");

const validateRequest = (schema) => {
    return async (req, res, next) => {
        try {
            const option = {
                abortEarly: false,
                errors: {
                    wrap: {
                        label: "",
                    },
                },
            };

            const { error } = await schema.validate(req.body, option);

            if (error) {
                throw error;
            }
            next();
        } catch (error) {
            const { body, files } = req;

            if (files?.length > 0) {
                files.map((fieldname) => {
                    if (body[fieldname]) {
                        removeFile(body[fieldname]);
                    }
                });
            }

            let errorMsg = error.details[0].message;

            return errorRes(res, errorMsg);
        }
    };
};

module.exports = validateRequest;