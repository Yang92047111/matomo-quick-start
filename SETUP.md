# Matomo Setup Guide

This guide will help you set up Matomo after starting the Docker containers.

## 🚀 Quick Setup

### 1. Start the Services
```bash
docker-compose up --build
```

### 2. Access Matomo Installation
1. Open your browser and go to: http://localhost:8081
2. You'll see the Matomo installation wizard

### 3. Database Configuration
When prompted for database settings, use these values:

- **Database Server**: `db`
- **Login**: `matomo`
- **Password**: `matomo`
- **Database Name**: `matomo`
- **Table Prefix**: `matomo_`

### 4. Super User Setup
Create your admin account:
- **Super User Login**: Choose your username (e.g., `admin`)
- **Password**: Choose a strong password
- **Email**: Your email address

### 5. Website Setup
Configure your first website:
- **Website Name**: `Matomo Vue3 Demo`
- **Website URL**: `http://localhost:8080`
- **Website Time Zone**: Choose your timezone

### 6. Tracking Code
After setup, Matomo will provide a tracking code. The Vue3 app is already configured to use:
- **Site ID**: `1` (first website)
- **Matomo URL**: `http://localhost:8081/`

## 🔧 Troubleshooting

### Database Connection Issues
If you see database connection errors:

1. **Wait for MySQL to start**: The database takes a few moments to initialize
2. **Check container logs**:
   ```bash
   docker-compose logs db
   docker-compose logs matomo
   ```
3. **Restart services**:
   ```bash
   docker-compose down
   docker-compose up --build
   ```

### Permission Issues
If you encounter file permission errors:

1. **Check volume permissions**:
   ```bash
   docker-compose exec matomo ls -la /var/www/html/config
   ```

2. **Fix permissions if needed**:
   ```bash
   docker-compose exec matomo chown -R www-data:www-data /var/www/html/config
   ```

### Frontend Not Tracking
If the Vue3 app isn't sending tracking data:

1. **Check browser console** for JavaScript errors
2. **Verify Matomo is accessible** at http://localhost:8081
3. **Check network tab** for tracking requests to `matomo.php`

## 📊 Verification

### Test Tracking
1. Visit http://localhost:8080
2. Click the demo buttons
3. Check Matomo dashboard for real-time visitors
4. Navigate between pages to test route tracking

### View Analytics
1. Go to http://localhost:8081
2. Login with your admin credentials
3. Check the dashboard for tracked events and page views

## 🔒 Security Notes

### For Production Use
- Change all default passwords
- Use environment variables for sensitive data
- Enable HTTPS
- Configure proper firewall rules
- Regular backups of the database and Matomo files

### Development Only
The current setup is configured for development with:
- Default database credentials
- HTTP (not HTTPS)
- Exposed database port (3306)

## 📝 Configuration Files

After installation, Matomo will create its configuration in the Docker volume. The main config file will be located at:
- Container path: `/var/www/html/config/config.ini.php`
- Docker volume: `matomo_data`

## 🆘 Getting Help

If you encounter issues:

1. Check the [Matomo documentation](https://matomo.org/docs/)
2. Review container logs: `docker-compose logs`
3. Verify all services are running: `docker-compose ps`
4. Check the project's GitHub issues

## 🎉 Success!

Once setup is complete, you should have:
- ✅ Matomo dashboard accessible at http://localhost:8081
- ✅ Vue3 frontend at http://localhost:8080
- ✅ Automatic page view tracking
- ✅ Custom event tracking working
- ✅ Real-time analytics data