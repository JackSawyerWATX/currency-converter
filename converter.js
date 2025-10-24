const readline = require('readline');
const axios = require('axios');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const apiKey = 'YmFSS5dn7GdLM4shNu85LXTOkECkTWjs'
const apiUrl = 'https://api.apilayer.com/exchangerates_data'

// Common currency codes
const commonCurrencies = new Set([
  'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'INR', 'NZD',
  'SEK', 'KRW', 'SGD', 'NOK', 'MXN', 'HKD', 'TRY', 'RUB', 'ZAR', 'BRL'
]);

rl.question('Enter the base currency (ex. USD): ', (base) => {
  const baseCurrency = base.toUpperCase();
  if (!commonCurrencies.has(baseCurrency)) {
    console.log('Invalid base currency code. Please use a valid 3-letter currency code (e.g., USD, EUR, GBP).');
    rl.close();
    return;
  }

  rl.question('Enter the target currency (ex. EUR): ', (target) => {
    const targetCurrency = target.toUpperCase();
    if (!commonCurrencies.has(targetCurrency)) {
      console.log('Invalid target currency code. Please use a valid 3-letter currency code (e.g., USD, EUR, GBP).');
      rl.close();
      return;
    }

    rl.question('Enter the amount to convert: ', async (amount) => {
      if (isNaN(amount) || amount <= 0) {
        console.log('Please enter a valid positive number for the amount.');
        rl.close();
        return;
      }

      const url = `${apiUrl}/convert?to=${targetCurrency}&from=${baseCurrency}&amount=${amount}`

      axios.get(url, {
        headers: {
          'apikey': apiKey
        }
      })
        .then(response => {
          const result = response.data.result;
          if (result) {
            console.log(`${amount} ${baseCurrency} is equal to ${result.toFixed(2)} ${targetCurrency}`);
          } else {
            console.log('Could not get conversion rate.');
          }
          rl.close();
        })
        .catch(error => {
          if (error.response) {
            const status = error.response.status;
            if (status === 400) {
              console.error('Invalid request. Please check your currency codes and amount.');
            } else if (status === 401) {
              console.error('API key is invalid or expired.');
            } else {
              console.error('Error fetching exchange rates:', error.response.data.message || error.message);
            }
          } else if (error.request) {
            console.error('Network error. Please check your internet connection.');
          } else {
            console.error('Error:', error.message);
          }
          rl.close();
        });
    });
  });
});