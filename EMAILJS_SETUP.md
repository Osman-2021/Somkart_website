# EmailJS Setup Instructions

This website uses EmailJS to send contact form submissions directly to **somkartapp@gmail.com** without requiring a backend server.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select **Gmail** as your email service
4. Connect your Gmail account: **somkartapp@gmail.com**
5. Click **Create Service**
6. **Copy the Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template:

**Template Name:** Contact Form

**Subject:** New Contact Form Submission from Somkart Website

**Content:**
```
New contact form submission received:

Name: {{from_name}}
Email: {{from_email}}
Reply To: {{reply_to}}

Message:
{{message}}

---
This email was sent from the Somkart website contact form.
```

4. **Save the template**
5. **Copy the Template ID** (you'll need this)

## Step 4: Get Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. **Copy the Public Key**

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root directory (copy from `.env.example`)
2. Add your EmailJS credentials:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Replace the placeholder values with your actual:
- Public Key (from Account → General)
- Service ID (from Email Services)
- Template ID (from Email Templates)

## Step 6: Test the Form

1. Restart your development server: `npm run dev`
2. Fill out the contact form on the website
3. Submit the form
4. Check **somkartapp@gmail.com** inbox for the email

## Important Notes

- The free plan allows 200 emails per month
- All emails will be sent to: **somkartapp@gmail.com**
- The form includes the sender's email in the "Reply To" field for easy responses
- Make sure to keep your Public Key secure (it's safe to use in frontend code as it's public by design)

## Troubleshooting

If emails aren't being sent:
1. Check browser console for errors
2. Verify all environment variables are set correctly
3. Make sure the Gmail service is connected in EmailJS dashboard
4. Check EmailJS dashboard → Logs for delivery status
5. Verify the template variables match: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{reply_to}}`

