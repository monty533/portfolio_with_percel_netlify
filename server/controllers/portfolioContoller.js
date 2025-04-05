const nodemailer = require("nodemailer");
// const sendGridTransport = require("nodemailer-sendgrid-transport");

//transport
// const transporter = nodemailer.createTransport(
//     sendGridTransport({
//         auth: {
//             api_key: process.env.API_SENDGRID,
//         },
//     })
// );

const sendEmailController = (req, res) => {
    try {
        const { name, email, msg } = req.body;

        //validation
        if (!name || !email || !msg) {
            return res.status(500).send({
                success: false,
                message: "Please Provide All Fields",
            });
        }
        //     //email matter
        // r
        return res.status(200).send({
            success: true,
            message: "Your Message Send Successfully",
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Send Email API Error",
            error,
        });
    }
};

module.exports = { sendEmailController };