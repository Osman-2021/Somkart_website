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
- **Backend**: Django REST Framework (for contact form submissions)
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Python 3.8+ (for Django backend)
- pip (Python package manager)

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

```env
# Backend API URL (Django)
# For local development:
VITE_BACKEND_API_URL=http://localhost:8000/api

# For production (use your online backend URL):
# VITE_BACKEND_API_URL=https://your-online-backend.com/api
```

## Backend Setup (Django)

The contact form now uses a Django backend to store submissions and send email notifications.

### Quick Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv venv
   # Windows:
   venv\Scripts\activate
   # macOS/Linux:
   source venv/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment:**
   ```bash
   # Windows:
   copy .env.example .env
   # macOS/Linux:
   cp .env.example .env
   ```
   Then edit `.env` with your settings (see `backend/.env.example`)

5. **Run migrations:**
   ```bash
   python manage.py migrate
   ```

6. **Start Django server:**
   ```bash
   python manage.py runserver
   ```

**Detailed instructions:** See `DJANGO_SETUP.md` for complete setup guide and integration with your existing online backend.

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
├── backend/                    # Django backend
│   ├── contact/               # Contact form app
│   ├── somkart_backend/       # Django project settings
│   ├── manage.py
│   ├── requirements.txt
│   └── README.md
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
├── DJANGO_SETUP.md           # Django backend setup guide
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

