const { nodemailer } = require("./modules");

module.exports = {
    sendOtpForgotPasswordAdmin: async (data) => {
        var transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_FROM_ADDRESS,
                pass: process.env.MAIL_PASSWORD,
            },
        });

        var sendOtp = {
            from: process.env.MAIL_FROM_ADDRESS,
            to: data.emailAddress,
            subject: "PetPaleTe - Reset Password",
            html: `<!DOCTYPE html>
                    <html lang="en">

                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Admin Panel - Password Reset Request</title>
                        <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link
                            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                            rel="stylesheet">
                    </head>

                    <body style="background-color: #fff; font-family: Poppins, sans-serif; display: flex ; justify-content: center;">
                        <div style=" max-width: 640px; width: 100%; background: #ffffff; border-radius: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                            <div style="background-color: #53473B;height: 115px;border-top-left-radius: 20px; border-top-right-radius: 20px;display: flex ; align-items: center; padding: 0px 48px; justify-content: center;">
                                <a href="#"><img src="${process.env.APP_LOGO}"></a>
                            </div>
                            <div style="padding: 30px 48px;font-weight: 400; font-size: 15px; line-height: 150%; letter-spacing: 0.2px; color: #898B94;">
                                <p>Dear Admin,</p>
                                <p>We received a request to reset your password for the Admin Panel. Please use the following OTP code to proceed:</p>
                                <div style="font-weight: 700; font-size: 30px; line-height: 150%; letter-spacing: 20px; text-align: center; color: #53473B; padding: 24px 0px;">${data.otp}</div>
                                <p>If you did not request a password change, please ignore this email or contact support.</p>
                                <p>If you need any assistance, feel free to reach out to us at
                                    <a href="mailto:support@pet.com" style="color: #53473B; font-weight: 500;">${process.env.SUPPORT_MAIL}</a>.
                                </p>
                                <p>Best regards,<span style="font-weight:600;color: #1A1B22;"><br>PetPaleTe Team</span></p>
                            </div>
                        </div>
                    </body>

                    </html>`,
        };

        return await transporter.sendMail(sendOtp);
    },

    sendOtpForgotPassword: async (data) => {
        var transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_FROM_ADDRESS,
                pass: process.env.MAIL_PASSWORD,
            },
        });

        var sendOtp = {
            from: process.env.MAIL_FROM_ADDRESS,
            to: data.emailAddress,
            subject: "PetPaleTe - Reset Password",
            html: `<!DOCTYPE html>
                    <html lang="en">

                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Forgot Password Code</title>
                        <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link
                            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                            rel="stylesheet">
                    </head>

                    <body style="background-color: #fff; font-family: Poppins, sans-serif; display: flex ; justify-content: center;">
                        <div style=" max-width: 640px; width: 100%; background: #ffffff; border-radius: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                            <div style="background-color: #53473B;height: 115px;border-top-left-radius: 20px; border-top-right-radius: 20px;display: flex ; align-items: center; padding: 0px 48px; justify-content: center;">
                                <a href="#"><img src="${process.env.APP_LOGO}"></a>
                            </div>
                            <div style="padding: 30px 48px;font-weight: 400; font-size: 15px; line-height: 150%; letter-spacing: 0.2px; color: #898B94;">
                                <p>Hello ${data.full_name},</p>
                                <p>You have requested to reset your password. Please use the following code to proceed with the password reset:</p>
                                <div style="font-weight: 700; font-size: 30px; line-height: 150%; letter-spacing: 20px; text-align: center; color: #53473B; padding: 24px 0px;">${data.otp}</div>
                                <p>If you did not request a password reset, please ignore this email or contact support.</p>
                                <p>If you need any assistance, feel free to reach out to us at
                                    <a href="mailto:support@pet.com" style="color: #53473B; font-weight: 500;">${process.env.SUPPORT_MAIL}</a>.
                                </p>
                                <p>Best regards,<span style="font-weight:600;color: #1A1B22;"><br>PetPaleTe Team</span></p>
                            </div>
                        </div>
                    </body>

                    </html>`,
        };

        return await transporter.sendMail(sendOtp);
    },
};
