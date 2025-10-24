# Currency Converter CLI

A command-line currency converter that uses the Exchange Rates API to convert between different currencies.

## Features

- Real-time currency conversion using up-to-date exchange rates
- Support for major world currencies (USD, EUR, GBP, JPY, etc.)
- Input validation for currency codes and amounts
- Clear error messages and user feedback
- Simple command-line interface

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install the dependencies:

```bash
npm install
```

## Usage

Run the converter using:

```bash
node converter.js
```

Follow the prompts:
1. Enter the base currency (e.g., USD)
2. Enter the target currency (e.g., EUR)
3. Enter the amount to convert

### Example

```
Enter the base currency (ex. USD): USD
Enter the target currency (ex. EUR): EUR
Enter the amount to convert: 100
100 USD is equal to 86.15 EUR
```

## Supported Currencies

The converter supports the following currencies:
- USD (US Dollar)
- EUR (Euro)
- GBP (British Pound)
- JPY (Japanese Yen)
- AUD (Australian Dollar)
- CAD (Canadian Dollar)
- CHF (Swiss Franc)
- CNY (Chinese Yuan)
- INR (Indian Rupee)
- NZD (New Zealand Dollar)
- SEK (Swedish Krona)
- KRW (South Korean Won)
- SGD (Singapore Dollar)
- NOK (Norwegian Krone)
- MXN (Mexican Peso)
- HKD (Hong Kong Dollar)
- TRY (Turkish Lira)
- RUB (Russian Ruble)
- ZAR (South African Rand)
- BRL (Brazilian Real)

## Error Handling

The application includes comprehensive error handling for:
- Invalid currency codes
- Invalid amounts (zero or negative numbers)
- Network errors
- API authentication issues
- Server errors

## API

This project uses the Exchange Rates API from APILayer for currency conversion data. An API key is required and should be properly configured in the application.

## License

This project is open-source and available under the MIT License.

### I love you all!! Happy coding!!