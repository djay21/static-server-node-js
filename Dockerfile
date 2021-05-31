FROM python:3.6-slim
RUN  apt update && apt install nginx apache2-utils unzip wget curl git fastjar p7zip-full -y
WORKDIR /etc/apache2
RUN htpasswd -b -c /etc/apache2/.htpasswd admin admin123
RUN htpasswd -b  /etc/apache2/.htpasswd user user123
RUN cat /etc/apache2/.htpasswd
RUN chmod 777 -R  /etc/apache2/.htpasswd /var/run /var/log/nginx /var/lib/nginx
EXPOSE 8001
COPY prod.conf /etc/nginx/conf.d/default.conf
COPY ngx.conf /etc/nginx/nginx.conf
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
WORKDIR /app
RUN mkdir -m 777 -p /app/softwares && touch demo.txt 
CMD echo "starting server " && python -m http.server 8000 & /usr/sbin/nginx
