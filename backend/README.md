# Somkart Website Backend

Django REST API backend for the Somkart website contact form.

## Setup Instructions

### 1. Create Virtual Environment

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Configure Environment Variables

Copy the example environment file and update it:

```bash
# On Windows:
copy .env.example .env
# On macOS/Linux:
cp .env.example .env
```

Edit `.env` file with your settings:

```env
# Django Settings
SECRET_KEY=your-secret-key-here-change-in-production
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Email Configuration (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=somkartapp@gmail.com
EMAIL_HOST_PASSWORD=your-app-password-here
DEFAULT_FROM_EMAIL=somkartapp@gmail.com
```

**Important**: For Gmail, you need to:
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the App Password (not your regular password) in `EMAIL_HOST_PASSWORD`

### 4. Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Create Superuser (Optional - for admin access)

```bash
python manage.py createsuperuser
```

### 6. Run Development Server

```bash
python manage.py runserver
```

The backend will be available at `http://localhost:8000`

## API Endpoints

### Contact Form Submission

**POST** `/api/contact/`

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

Response (Success):
```json
{
  "success": true,
  "message": "Your message has been sent successfully. We will get back to you soon."
}
```

Response (Error):
```json
{
  "success": false,
  "errors": {
    "email": ["Enter a valid email address."],
    "message": ["Message must be at least 10 characters long."]
  }
}
```

## Frontend Configuration

In your React frontend `.env` file, add:

```env
VITE_BACKEND_API_URL=http://localhost:8000/api
```

For production, update to your online backend URL:
```env
VITE_BACKEND_API_URL=https://your-online-backend.com/api
```

## Admin Panel

Access the Django admin panel at: `http://localhost:8000/admin`

You can view and manage all contact form submissions here.

## Production Deployment

### Using Your Existing Online Backend

1. **Update CORS Settings**: In `settings.py`, add your frontend domain to `CORS_ALLOWED_ORIGINS`:
   ```python
   CORS_ALLOWED_ORIGINS = [
       "https://your-website-domain.com",
       # ... other origins
   ]
   ```

2. **Update Environment Variables**:
   - Set `DEBUG=False`
   - Update `ALLOWED_HOSTS` with your domain
   - Use production database settings
   - Configure production email settings

3. **Deploy to Your Server**:
   - Copy the backend code to your server
   - Install dependencies
   - Run migrations
   - Configure your web server (nginx, Apache, etc.)
   - Set up SSL certificates

### Integration with Existing Somkart Backend

If you want to integrate this contact form into your existing Somkart Django backend:

1. Copy the `contact` app to your existing Django project
2. Add `'contact'` to `INSTALLED_APPS` in your settings
3. Include the contact URLs in your main `urls.py`:
   ```python
   path('api/', include('contact.urls')),
   ```
4. Run migrations: `python manage.py migrate`
5. Update CORS settings if needed

## Testing

Test the API endpoint using curl:

```bash
curl -X POST http://localhost:8000/api/contact/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

Or use the Django admin panel to view submissions.

## Troubleshooting

### CORS Errors
- Make sure `django-cors-headers` is installed
- Check `CORS_ALLOWED_ORIGINS` includes your frontend URL
- Verify `CorsMiddleware` is in `MIDDLEWARE` (should be near the top)

### Email Not Sending
- Verify Gmail App Password is correct
- Check email settings in `.env`
- Check Django logs for email errors

### Database Errors
- Run migrations: `python manage.py migrate`
- Check database file permissions

