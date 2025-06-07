# LinkedIn Job Scraper

A Node.js script that uses the `linkedin-jobs-scraper` package to fetch job postings from LinkedIn.

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

```bash
npm install
```

## Usage

Run the scraper:

```bash
node scrape.js
```

The script will:
1. Search for "Software Engineer" positions in the United States
2. Collect jobs posted in the last 24 hours
3. Save results to `../output/jobs_log.json`

## Output Format

The script saves job data in JSON format with the following structure:

```json
[
  {
    "title": "Job Title",
    "company": "Company Name",
    "place": "Location",
    "date": "Post Date",
    "link": "Job URL",
    "description": "Full job description",
    "senorityLevel": "Experience level",
    "jobFunction": "Job category",
    "employmentType": "Full-time/Part-time/etc",
    "industries": ["Industry1", "Industry2"]
  }
]
```

## Customization

To modify the search parameters, edit the `scrape.js` file and update the query options in the `scraper.run()` call.

## Notes

- The script runs in headless mode
- Includes error handling and logging
- Creates the output directory if it doesn't exist 