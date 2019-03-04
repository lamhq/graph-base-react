FROM nginx:1.15.2-alpine

# copy build from host to docker image
COPY dist/ /usr/share/nginx/html/

# use nginx server to serve file index.html
# we don't copy assets like css, js, images to Docker image
# because they will be uploaded to cdn
# COPY build/index.html /usr/share/nginx/html

# update configuration for HTML5 push state
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
