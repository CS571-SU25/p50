# Business Finance Dashboard

A web application for tracking business income and expenses, viewing monthly trends, and estimating taxes—built with **React** and featuring modern, interactive charts.

## Features

- **User-Friendly Dashboard:** Stat cards for key metrics, Income vs. Expenses pie chart, and monthly income charts (line and bar).
- **Portfolio Manager:** Add, view, and remove revenue/expense entries with date and category.
- **State-Based Tax Estimator:** Instantly estimates taxes based on your business net profit and selected U.S. state.
- **Persistent Data:** All information is saved in your browser’s localStorage.
- **Responsive Design:** Works on both desktop and mobile devices.

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

To install this project, run the following commands in your terminal:

git clone <your-repo-url>
cd <project-folder>
npm install

### Run Locally

npm start
# or
yarn start

Visit [http://localhost:3000/](http://localhost:3000/) in your browser.

## Key Technologies

- **React** - UI framework
- **Recharts** - Dynamic, interactive charts
- **localStorage** - Persistent storage in the browser

## Usage

1. **Portfolio Entries**
   - Add revenues or expenses with amount, date, and category.
   - Remove entries as needed.

2. **Dashboard**
   - View stat cards for total revenue, expenses, and net profit.
   - Pie chart: compares total income vs expenses.
   - Line & bar charts: visualize monthly income trends.

3. **Estimated Taxes**
   - Select your state to see a quick tax estimate based on business profit.

## Customization

- **Tax Rates:** Update in `EstimatedTaxes.jsx` as needed.
- **US State List:** Edit in `EstimatedTaxes.jsx` for your needs.
- **Styling:** UI is easily customizable with CSS or your favorite styling solution.

---
