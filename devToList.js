let axios = require('axios');
let cheerio = require('cheerio');
let fs = require('fs');

axios.get('https://dev.to/aurelkurtula')
  .then((response) => {
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);
      console.log(response.data);
    }
  }, (error) => console.log(err));
