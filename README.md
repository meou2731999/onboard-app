# Hotel Search Application

This project is a hotel search application built with Next.js, TypeScript, and Tailwind CSS. It fetches hotel data and their prices from an external API, displays them in a user-friendly interface, and supports currency selection and price comparison with competitors.

## Features

- Fetch and display hotel data from an external API
- Show hotel prices in different currencies
- Compare hotel prices with competitors
- Display savings if our price is lower than competitors'
- Preserve last selected currency on page refresh
- Responsive design with Tailwind CSS

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS

## Installation

- Clone the repository:

```
git clone https://github.com/meou2731999/hotel-app.git
```
```
cd hotel-app
```

- Install dependencies:

```
npm install
```

- Run the development server:
```
npm run dev
```
- Open http://localhost:3000 in your browser to see the application.

- Run unit test:
```
npm test
```

## Usage

- Select a currency from the dropdown menu to see hotel prices in the selected currency.
- The last selected currency will be saved and used when you refresh the page.
- Competitor prices are displayed and compared with our price. Savings are shown if our price is lower.

## API Endpoints

- Hotels Data: https://interview-api.vercel.app/api/hotels/tokyo
- Prices Data: https://interview-api.vercel.app/api/hotels/tokyo/1/{currency}

## Project Structure

- The project structure follows standard practices for a Next.js application.
- The main components are located in the src/components directory, and the API fetching logic is in src/lib/api.ts.

## Contact
For any inquiries, please contact lebaquana1@gmail.com.

