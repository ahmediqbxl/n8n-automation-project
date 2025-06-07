# LinkedIn Job Scraping Automation with n8n

This project contains an automated workflow for scraping LinkedIn job postings using n8n and the `linkedin-jobs-scraper` package.

## Project Structure

- `scrape/` - Contains the LinkedIn scraper script using linkedin-jobs-scraper package
- `workflows/` - Contains the n8n workflow file for job fetching automation
- `output/` - Storage for scraped job data and debugging logs

## Getting Started

1. Install Dependencies
   - Node.js and npm for the scraper
   - n8n installed and running locally or on a server

2. Setup Scraper
   ```bash
   cd scrape
   npm install
   ```

3. Import n8n Workflow
   - Open your n8n instance
   - Import the workflow from `workflows/linkedin-job-fetch.json`
   - Configure the Execute Command node path if needed

## Usage

1. Run the scraper independently:
   ```bash
   cd scrape
   node scrape.js
   ```

2. Or use the n8n workflow:
   - Activate the workflow in your n8n instance
   - The workflow will execute the scraper and store results in the output directory

## Output

The scraper will save job data to `output/jobs_log.json` in a structured JSON format.

## License

MIT

## Contributing

Feel free to submit issues and pull requests. 