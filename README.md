# Somkart Website

Modern, animated, production-ready website for the Somkart mobile application. Somkart is an Internet Data Seller app where users can buy mobile internet data, pay for data bundles, and recharge internet plans securely. This website complies with Google Play Store requirements and includes all necessary pages for app listing, privacy policy, account deletion, and user support.

## Features

- ✅ **Modern Fintech UI** - Clean, professional design with soft gradients and rounded cards
- ✅ **Smooth Animations** - Framer Motion powered page transitions and scroll animations
- ✅ **Animated Illustrations** - Custom flat vector illustrations with subtle motion effects
- ✅ **Home page** - Hero section with animated illustration and call-to-action buttons
- ✅ **Privacy Policy page** - Google Play compliant with detailed data collection policies
- ✅ **Account & Data Deletion page** - Google Play compliant with step-by-step instructions
- ✅ **Contact Us page** - Animated contact form with validation and success feedback
- ✅ **Responsive design** - Mobile-first, fully responsive across all devices
- ✅ **SEO-friendly** - Dynamic page titles and meta descriptions
- ✅ **Form validation** - Comprehensive client-side validation with error handling
- ✅ **Environment variables** - Configurable API URLs and settings

## Tech Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (optional, for custom API URLs):
```bash
cp .env.example .env
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_API_BASE_URL=https://api.somkart.com
VITE_CONTACT_API_URL=https://api.somkart.com/contact
VITE_SUPPORT_EMAIL=support@somkart.com

# EmailJS Configuration (Required for Contact Form)
# Get these from https://www.emailjs.com/
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

### EmailJS Setup

The contact form uses EmailJS to send emails directly to **somkartapp@gmail.com** without a backend.

**Quick Setup:**
1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/) (free plan: 200 emails/month)
2. Add Gmail service and connect **somkartapp@gmail.com**
3. Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{reply_to}}`
4. Copy your Public Key, Service ID, and Template ID
5. Add them to your `.env` file

**Detailed instructions:** See `EMAILJS_SETUP.md` for step-by-step guide.

## Deployment

This website is ready to be deployed on:

- **Netlify**: Connect your repository and deploy automatically
- **Vercel**: Import your repository and deploy
- **Any static hosting service**: Build the project and deploy the `dist` folder

### Netlify Deployment

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### Vercel Deployment

1. Import your repository to Vercel
2. Framework preset: Vite
3. Deploy!

## Project Structure

```
somkart-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── AnimatedIllustration.jsx
│   │   ├── PageTransition.jsx
│   │   └── ScrollReveal.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── DeleteAccount.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── netlify.toml
├── vercel.json
└── README.md
```

## Pages

- **/** - Home page with animated hero section, features, and download CTAs
- **/privacy-policy** - Privacy policy compliant with Google Play requirements (data collection, security, user rights)
- **/delete-account** - Account deletion page with form and step-by-step instructions
- **/contact** - Animated contact form with validation and success feedback

## Animation Features

- **Page Transitions** - Smooth fade and slide transitions between pages
- **Scroll Animations** - Elements reveal on scroll with fade and slide effects
- **Hover Effects** - Interactive button and card hover animations
- **Illustration Motion** - Subtle floating and pulsing animations on illustrations
- **Micro-interactions** - Button press effects and form field focus animations

## Google Play Compliance

This website includes all required pages for Google Play Store listing:

- ✅ Privacy Policy URL
- ✅ Account Deletion URL
- ✅ Contact information
- ✅ Clear data collection and usage policies
- ✅ User rights and data protection information

## License

Copyright © 2024 Somkart. All rights reserved.

