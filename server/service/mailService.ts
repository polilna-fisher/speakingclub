import nodemailer, {Transporter} from 'nodemailer'

class MailService{
    private transporter: Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: String(process.env.SMTP_HOST),
            port: Number(process.env.SMTP_PORT),
            secure: false,
            auth:{
                user:process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }

        })
    }

    async sendActivationMail(to:string, link:string){
        await this.transporter.sendMail({
            from:process.env.SMTP_USER,
            to,
            subject: `Activate your account on ${process.env.API_URL}`,
            text: "",
            html:
                `
                    <div><h1>To activate your account click the link</h1> <a href="${link}">${link}</a></div>
                `
        })
    }

    async sendResetPasswordMail(to:string, link:string){
        await this.transporter.sendMail({
            from:process.env.SMTP_USER,
            to,
            subject: `Reset password on ${process.env.API_URL}`,
            text: "",
            html:
                `
                    <div>
                        <h1>To reset your password click the link</h1> 
                        <a href="${link}">${link}</a>
                        <div>If you didn't try to reset password - don't click the link</div>
                        
                    </div>
               
                `
        })
    }

}
export default  new MailService()