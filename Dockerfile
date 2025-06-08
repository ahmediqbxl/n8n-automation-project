FROM n8nio/n8n

USER root

# Install additional npm packages
RUN npm install -g linkedin-jobs-scraper puppeteer

# Switch back to node user
USER node 