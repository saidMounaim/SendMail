import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/send', async (req, res) => {
	const { name, email, message } = req.body;

	try {
		if (name && email && message) {
			// create reusable transporter object using the default SMTP transport
			let transporter = nodemailer.createTransport({
				host: 'smtp.gmail.com',
				port: 465,
				secure: true, // true for 465, false for other ports
				auth: {
					user: 'GMAIL', // generated ethereal user
					pass: 'PASSWORD GMAIL', // generated ethereal password
				},
			});

			// send mail with defined transport object
			const info = await transporter.sendMail({
				from: `${name} 👻 <${email}>`, // sender address
				to: 'saidmounaim00@gmail.com', // list of receivers
				subject: 'Send Mail ✔', // Subject line
				text: message, // plain text body
			});
			res.status(201).json({ success: true, message: 'Mail Send Successfully' });
		} else {
			res.status(401).json({ success: false, message: 'Name, Email Or Message not found' });
		}
	} catch (error) {
		res.status(401).json({ success: false, message: error.message });
	}
});

export default router;
