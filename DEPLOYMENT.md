# Deployment Guide

This guide covers different deployment scenarios for the Matomo Vue3 Integration project.

## 🐳 Docker Deployment (Recommended)

### Local Development
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/matomo-vue3-integration.git
cd matomo-vue3-integration

# Start all services
docker-compose up --build

# Access the application
# Frontend: http://localhost:8080
# Matomo: http://localhost:8081
```

### Production Deployment
```bash
# Create production docker-compose file
cp docker-compose.yml docker-compose.prod.yml

# Update environment variables for production
# - Change database passwords
# - Set proper domain names
# - Enable SSL/HTTPS
# - Configure backup strategies

# Deploy
docker-compose -f docker-compose.prod.yml up -d
```

## ☁️ Cloud Deployment

### AWS ECS
1. Build and push Docker images to ECR
2. Create ECS task definitions
3. Set up Application Load Balancer
4. Configure RDS for MySQL database
5. Use EFS for persistent Matomo data

### Google Cloud Run
1. Build container images
2. Deploy to Cloud Run
3. Set up Cloud SQL for MySQL
4. Configure persistent storage

### Azure Container Instances
1. Create container registry
2. Deploy container groups
3. Set up Azure Database for MySQL
4. Configure file shares for persistence

## 🖥️ Traditional Server Deployment

### Prerequisites
- Node.js 18+
- MySQL 8.0+
- Nginx (recommended)
- SSL certificate

### Frontend Deployment
```bash
# Build the frontend
cd frontend
npm install
npm run build

# Serve with nginx
sudo cp -r dist/* /var/www/html/
```

### Matomo Installation
```bash
# Download Matomo
wget https://builds.matomo.org/matomo.zip
unzip matomo.zip
sudo mv matomo /var/www/matomo

# Set permissions
sudo chown -R www-data:www-data /var/www/matomo
sudo chmod -R 755 /var/www/matomo
```

## 🔧 Configuration

### Environment Variables
```bash
# Database
MYSQL_ROOT_PASSWORD=your_secure_password
MYSQL_DATABASE=matomo
MYSQL_USER=matomo
MYSQL_PASSWORD=your_matomo_password

# Matomo
MATOMO_DATABASE_HOST=db
MATOMO_DATABASE_ADAPTER=mysql
MATOMO_DATABASE_TABLES_PREFIX=matomo_
MATOMO_DATABASE_USERNAME=matomo
MATOMO_DATABASE_PASSWORD=your_matomo_password
MATOMO_DATABASE_DBNAME=matomo
```

### SSL/HTTPS Setup
```nginx
server {
    listen 443 ssl http2;
    server_name your-domain.com;
    
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
    
    location /matomo/ {
        proxy_pass http://localhost:8081/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 📊 Monitoring & Maintenance

### Health Checks
```bash
# Check frontend
curl -f http://localhost:8080 || exit 1

# Check Matomo
curl -f http://localhost:8081/matomo.php || exit 1

# Check database
docker exec matomo-db mysql -u matomo -p -e "SELECT 1"
```

### Backup Strategy
```bash
# Database backup
docker exec matomo-db mysqldump -u root -p matomo > backup_$(date +%Y%m%d).sql

# Matomo files backup
docker cp matomo-container:/var/www/html ./matomo-backup-$(date +%Y%m%d)
```

### Log Management
```bash
# View application logs
docker-compose logs -f frontend
docker-compose logs -f matomo

# Rotate logs
docker-compose logs --tail=1000 > logs/app-$(date +%Y%m%d).log
```

## 🔒 Security Considerations

### Production Checklist
- [ ] Change all default passwords
- [ ] Enable HTTPS/SSL
- [ ] Configure firewall rules
- [ ] Set up regular backups
- [ ] Enable Matomo security features
- [ ] Update dependencies regularly
- [ ] Monitor for security vulnerabilities
- [ ] Configure proper CORS settings
- [ ] Set up rate limiting
- [ ] Enable audit logging

### Matomo Security
```php
// In matomo/config/config.ini.php
[General]
force_ssl = 1
assume_secure_protocol = 1
trusted_hosts[] = "your-domain.com"
salt = "your-unique-salt-here"

[Security]
login_whitelist_ip[] = "your.office.ip.address"
```

## 🚀 Performance Optimization

### Frontend Optimization
- Enable gzip compression
- Use CDN for static assets
- Implement caching headers
- Optimize images and assets
- Use HTTP/2

### Database Optimization
- Configure MySQL for performance
- Set up proper indexing
- Regular database maintenance
- Monitor query performance

### Matomo Optimization
- Enable Matomo caching
- Configure archive processing
- Set up proper cron jobs
- Optimize tracking code

## 📈 Scaling

### Horizontal Scaling
- Load balance multiple frontend instances
- Use read replicas for database
- Implement Redis for session storage
- Use container orchestration (Kubernetes)

### Vertical Scaling
- Increase server resources
- Optimize database configuration
- Use faster storage (SSD)
- Increase memory allocation

## 🆘 Troubleshooting

### Common Issues
1. **Database connection errors**: Check credentials and network connectivity
2. **Matomo installation issues**: Verify file permissions and database setup
3. **Frontend build failures**: Check Node.js version and dependencies
4. **Docker issues**: Verify Docker daemon and compose version

### Debug Commands
```bash
# Check container status
docker-compose ps

# View container logs
docker-compose logs [service-name]

# Execute commands in container
docker-compose exec frontend sh
docker-compose exec matomo bash

# Check network connectivity
docker-compose exec frontend ping matomo
```