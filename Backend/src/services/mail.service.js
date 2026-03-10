import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAILUSER,
        pass:process.env.MAILPASS
    }
})

export const SendMail = async (to,subject,html) => {
    let options = {
        to,
        subject,
        html
    }
    transporter.sendMail(options)
}