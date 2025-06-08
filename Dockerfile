FROM n8nio/n8n

USER root

# Install Chromium and necessary dependencies for Puppeteer
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    freetype-dev \
    harfbuzz \
    ttf-freefont \
    nodejs \
    npm

# Install puppeteer and linkedin-jobs-scraper globally
RUN npm install -g puppeteer linkedin-jobs-scraper

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

USER node
