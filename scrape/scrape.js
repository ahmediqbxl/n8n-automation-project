const { LinkedinScraper, events } = require("linkedin-jobs-scraper");
const fs = require('fs').promises;
const path = require('path');

(async () => {
    // Prepare output directory
    const outputDir = path.join(__dirname, '..', 'output');
    const outputFile = path.join(outputDir, 'jobs_log.json');
    
    // Create output directory if it doesn't exist
    try {
        await fs.mkdir(outputDir, { recursive: true });
    } catch (error) {
        if (error.code !== 'EEXIST') {
            console.error('Error creating output directory:', error);
            process.exit(1);
        }
    }

    // Collected jobs array
    const jobs = [];

    // Create custom scraper instance
    const scraper = new LinkedinScraper({
        headless: true,
        slowMo: 100,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage",
            "--disable-accelerated-2d-canvas",
            "--disable-gpu"
        ],
    });

    // Add event listeners
    scraper.on(events.scraper.data, (data) => {
        jobs.push({
            title: data.title,
            company: data.company,
            place: data.place,
            date: data.date,
            link: data.link,
            description: data.description,
            senorityLevel: data.senorityLevel,
            jobFunction: data.jobFunction,
            employmentType: data.employmentType,
            industries: data.industries
        });
        console.log(
            `${jobs.length}. ${data.title} | ${data.company} | ${data.place}`
        );
    });

    scraper.on(events.scraper.error, (err) => {
        console.error('Error:', err);
    });

    scraper.on(events.scraper.end, async () => {
        console.log('Scraping finished.');
        try {
            await fs.writeFile(outputFile, JSON.stringify(jobs, null, 2));
            console.log(`Jobs data saved to ${outputFile}`);
        } catch (error) {
            console.error('Error saving jobs data:', error);
        }
    });

    // Run scraper
    await scraper.run([
        {
            query: "Software Engineer",
            options: {
                location: "United States",
                limit: 100,
                filters: {
                    time: {
                        timePosted: "past-24h",
                    }
                }
            },
        },
    ]).catch(err => {
        console.error('Error during scraping:', err);
    });

    // Close browser
    await scraper.close();
})(); 