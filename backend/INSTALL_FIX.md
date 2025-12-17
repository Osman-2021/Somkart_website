# Fix for Django Installation Error

## The Error
```
ModuleNotFoundError: No module named 'django'
```

## The Problem
Django and other packages need to be installed **inside** the virtual environment, not globally.

## Solution

1. **Make sure virtual environment is activated:**
   ```powershell
   cd backend
   venv\Scripts\activate
   ```
   You should see `(venv)` at the start of your prompt.

2. **Install packages in the virtual environment:**
   ```powershell
   pip install -r requirements.txt
   ```

3. **If you get file lock errors:**
   - Close any running Django servers (`Ctrl+C`)
   - Close your IDE/editor temporarily
   - Try installing again:
     ```powershell
     pip install -r requirements.txt
     ```

4. **Verify installation:**
   ```powershell
   python -c "import django; print(django.get_version())"
   ```
   Should output: `4.2.7`

5. **Run migrations:**
   ```powershell
   python manage.py migrate
   ```

6. **Start the server:**
   ```powershell
   python manage.py runserver
   ```

## Alternative: Recreate Virtual Environment

If issues persist, recreate the virtual environment:

```powershell
# Delete old venv
Remove-Item -Recurse -Force venv

# Create new venv
python -m venv venv

# Activate it
venv\Scripts\activate

# Install packages
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start server
python manage.py runserver
```

