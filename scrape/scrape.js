const { LinkedinScraper, events } = require('linkedin-jobs-scraper');

(async () => {
  const scraper = new LinkedinScraper({
    headless: true,
    slowMo: 50,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const results = [];

  scraper.on(events.data, (data) => {
    results.push({
      title: data.title,
      company: data.company,
      location: data.place,
      description: data.description,
      jobUrl: data.link,
    });
  });

  scraper.on(events.end, () => {
    console.log(JSON.stringify(results, null, 2));
  });

  await scraper.run([
    {
      query: 'Software Engineer',
      options: {
        locations: ['Canada'],
        filters: {
          time: 'r86400',  // ✅ Past 24 hours (string)
          type: ['F']      // ✅ Full-time
        },
        limit: 10
      }
    }
  ]);
})();
