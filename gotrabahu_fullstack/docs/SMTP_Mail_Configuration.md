# SMTP Mail Configuration for Laravel to Send Real Emails

To send real emails from your Laravel application (such as password reset codes), you need to configure SMTP settings properly.

## Step 1: Choose an SMTP Provider

Common SMTP providers:
- Gmail SMTP
- Mailgun
- SendGrid
- Amazon SES
- Your own SMTP server

## Step 2: Update .env File

Add or update the following variables in your `.env` file:

```
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your_email@gmail.com
MAIL_PASSWORD=your_email_app_password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=your_email@gmail.com
MAIL_FROM_NAME="Your App Name"
```

### Notes for Gmail SMTP:
- Use your Gmail email address for `MAIL_USERNAME` and `MAIL_FROM_ADDRESS`.
- Use an App Password for `MAIL_PASSWORD` if you have 2FA enabled on your Google account.
- Enable "Less secure app access" if not using 2FA (not recommended).
- `MAIL_ENCRYPTION` should be `tls`.
- `MAIL_PORT` is usually 587.

## Step 3: Clear Config Cache

After updating `.env`, run these commands in your Laravel project root:

```bash
php artisan config:clear
php artisan cache:clear
```

## Step 4: Test Email Sending

You can test email sending by triggering the forgot password flow or by creating a test route/controller to send a test email.

## Additional Tips

- Check your spam folder if emails do not appear in inbox.
- Review Laravel logs (`storage/logs/laravel.log`) for mail errors.
- For production, consider using dedicated email services like Mailgun or SendGrid for better deliverability.

---

If you want, I can help you set this up step-by-step or troubleshoot any issues you encounter.
