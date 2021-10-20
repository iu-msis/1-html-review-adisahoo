FROM php:7.4-apache

LABEL maintainer="Aditi Sahoo"

RUN docker-php-ext-install pdo_mysql

# PHP configuration
COPY docker/php/php.ini /usr/local/etc/php/php.ini

COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf

COPY app /srv/app

#Set the working directory in the image
WORKDIR /srv/app
