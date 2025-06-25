# Use a lightweight Nginx base image. Alpine is a minimal Linux distribution,
# which results in smaller, faster images.
FROM nginx:alpine

# Copy your custom Nginx configuration file into the Nginx configuration directory
# inside the container. This assumes nginx.conf is in the same directory as this Dockerfile.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy your static website files (index.html) into the default Nginx web root directory
# inside the container. This assumes index.html is in the same directory as this Dockerfile.
COPY index.html /usr/share/nginx/html

# Inform Docker that the container will listen on port 8080 at runtime.
# This is a convention for Cloud Run.
EXPOSE 8080

# Define the command that will run when the container starts.
# "nginx -g 'daemon off;'" keeps Nginx running in the foreground,
# which is necessary for containers.
CMD ["nginx", "-g", "daemon off;"]
