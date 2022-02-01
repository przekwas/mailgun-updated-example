import dotenv from 'dotenv';

dotenv.config();

export default {
    mailgun: {
        key: process.env.MAILGUN_KEY,
        domain: process.env.MAILGUN_DOMAIN
    }
}

