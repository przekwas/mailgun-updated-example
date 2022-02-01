import express from 'express';
import Mailgun from 'mailgun.js';
import FormData from 'form-data';
import config from '../config';

const mailgun = new Mailgun(FormData).client({
	username: 'api',
	key: config.mailgun.key
});

const router = express.Router();

router.post('/', async (req, res) => {
	try {
		const newEmail = req.body;
		const result = await mailgun.messages.create(config.mailgun.domain, {
			to: 'your_mailgun_registered_account_email_here_plz',
			subject: newEmail.subject,
			from: newEmail.from,
			text: newEmail.message
		});
		res.json(result);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

export default router;
