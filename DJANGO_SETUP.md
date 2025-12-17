# Django Backend Setup Guide

This guide will help you set up the Django backend for the Somkart website, test it locally, and then integrate it with your existing online backend.

## Quick Start (Local Testing)

### Step 1: Navigate to Backend Directory

```bash
cd backend
```

### Step 2: Create and Activate Virtual Environment

**Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

**macOS/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

### Step 3: Install Dependencies

```bash
pip install -r requirements.txt
```

### Step 4: Set Up Environment Variables

**Windows:**
```bash
copy .env.example .env
```

**macOS/Linux:**
```bash
cp .env.example .env
```

Then edit `.env` file:
- Set `SECRET_KEY` (generate a random string)
- Configure email settings (see Gmail App Password setup below)

### Step 5: Run Migrations

```bash
python manage.py migrate
```

### Step 6: Create Admin User (Optional)

```bash
python manage.py createsuperuser
```

### Step 7: Start Development Server

```bash
python manage.py runserver
```

Backend will run at: `http://localhost:8000`

### Step 8: Configure Frontend

In your React project root, create/update `.env`:

```env
VITE_BACKEND_API_URL=http://localhost:8000/api
```

### Step 9: Test the Integration

1. Start your React dev server: `npm run dev`
2. Go to the Contact page
3. Submit the form
4. Check:
   - Django admin panel: `http://localhost:8000/admin` (view submissions)
   - Your email inbox (should receive notification)

---

## Gmail App Password Setup

Since we're using Gmail to send emails, you need to set up an App Password:

1. Go to your Google Account: https://myaccount.google.com/
2. Enable **2-Step Verification** (if not already enabled)
3. Go to **App Passwords**: https://myaccount.google.com/apppasswords
4. Select "Mail" and "Other (Custom name)"
5. Enter "Somkart Backend" as the name
6. Click "Generate"
7. Copy the 16-character password
8. Paste it in your `.env` file as `EMAIL_HOST_PASSWORD`

---

## Integration with Existing Online Backend

### Option 1: Add Contact App to Existing Backend

1. **Copy the contact app** from this project to your existing Django project:
   ```bash
   # From your existing Django project root
   cp -r path/to/somkart-website/backend/contact ./contact
   ```

2. **Add to INSTALLED_APPS** in your `settings.py`:
   ```python
   INSTALLED_APPS = [
       # ... your existing apps
       'contact',
   ]
   ```

3. **Add CORS settings** (if not already configured):
   ```python
   INSTALLED_APPS = [
       # ... other apps
       'corsheaders',
   ]
   
   MIDDLEWARE = [
       'corsheaders.middleware.CorsMiddleware',
       # ... other middleware
   ]
   
   CORS_ALLOWED_ORIGINS = [
       "https://your-website-domain.com",
       "http://localhost:5173",  # For local testing
   ]
   ```

4. **Include URLs** in your main `urls.py`:
   ```python
   from django.urls import path, include
   
   urlpatterns = [
       # ... your existing URLs
       path('api/', include('contact.urls')),
   ]
   ```

5. **Run migrations**:
   ```bash
   python manage.py makemigrations contact
   python manage.py migrate
   ```

6. **Update frontend `.env`**:
   ```env
   VITE_BACKEND_API_URL=https://your-online-backend.com/api
   ```

### Option 2: Deploy This Backend Separately

If you prefer to keep this backend separate:

1. **Update production settings** in `settings.py`:
   ```python
   DEBUG = False
   ALLOWED_HOSTS = ['your-backend-domain.com']
   CORS_ALLOWED_ORIGINS = [
       "https://your-website-domain.com",
   ]
   ```

2. **Deploy to your server** (using your preferred method: Docker, Heroku, AWS, etc.)

3. **Set environment variables** on your server

4. **Update frontend `.env`** with production URL

---

## Testing Checklist

- [ ] Backend server starts without errors
- [ ] Can access admin panel at `/admin`
- [ ] Can submit contact form from frontend
- [ ] Submission appears in admin panel
- [ ] Email notification is received
- [ ] Form validation works (empty fields, invalid email, short message)
- [ ] CORS is configured correctly (no CORS errors in browser console)

---

## Troubleshooting

### "ModuleNotFoundError: No module named 'django'"
- Make sure virtual environment is activated
- Run `pip install -r requirements.txt`

### CORS Errors in Browser
- Check `CORS_ALLOWED_ORIGINS` includes your frontend URL
- Verify `CorsMiddleware` is in `MIDDLEWARE` list
- Restart Django server after changes

### Email Not Sending
- Verify Gmail App Password is correct
- Check `.env` file has correct email settings
- Check Django console for error messages
- Test email settings: `python manage.py shell` then:
  ```python
  from django.core.mail import send_mail
  send_mail('Test', 'Test message', 'somkartapp@gmail.com', ['your-email@example.com'])
  ```

### Database Errors
- Run `python manage.py migrate`
- Check file permissions on `db.sqlite3`

### Frontend Can't Connect to Backend
- Verify backend is running: `http://localhost:8000`
- Check `VITE_BACKEND_API_URL` in frontend `.env`
- Restart frontend dev server after changing `.env`

---

## Next Steps

1. Test locally with both frontend and backend running
2. Once working, integrate with your existing online backend
3. Update frontend production environment variables
4. Test in production environment

For more details, see `backend/README.md`

