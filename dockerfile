# offical php image
FROM php:7.4-apache

# install mysqli
RUN docker-php-ext-install mysqli pdo_mysql

# make all file same layer of dockerfile to path
COPY ./* /var/www/html/

# # copy dir to path
COPY ./style/ /var/www/html/style/
# COPY ./mysql/ /var/www/html/mysql/
# COPY ./avatar/ /var/www/html/avatar/ # TODO:import to `avatar` volume

# expose
EXPOSE 80
# 添加 Apache 配置
RUN echo "\
    <Directory /var/www/html/>\n\
        Options Indexes FollowSymLinks\n\
        AllowOverride None\n\
        Require all granted\n\
    </Directory>\n\
    DirectoryIndex in.html" > /etc/apache2/sites-available/000-default.conf
# start Apache
CMD ["apache2-foreground"]
