# Business Finance Dashboard

A modern web application for tracking small business income and expenses, analyzing monthly trends, and estimating taxes — built with **React**, **Recharts**, and **React Bootstrap**.

## Features

- User Dashboard – Stat cards with pie, line, and bar charts for visual trends
- Portfolio Manager – Add, view, and delete income or expenses
- Tax Estimator – Quick net profit tax calculations
- Persistent Storage – All data saved in the browser (localStorage)
- Responsive Design – Works well on both desktop and mobile devices

## Components (12 Meaningfully Used)

1. Home – Landing page that introduces the app and encourages user engagement.  
2. About – Provides background on the team, mission, and contact information.  
3. Dashboard – Displays financial summaries through pie, line, and bar charts.  
4. Portfolio – Central interface to add, view, and manage financial entries.  
5. EstimatedTaxes – Simple tool to calculate and display estimated tax obligations.  
6. Login – Form interface for user authentication with input validation.  
7. Register – Account creation form that logs users in after successful signup.  
8. Header – Accessible navigation bar present across all pages.  
9. StatCard – Reusable component for showing financial metrics on the dashboard.  
10. FeatureCard – Component used to highlight app features on the homepage.  
11. PortfolioForm – Controlled form for adding revenue or expense entries.  
12. PortfolioTable – Dynamically displays transaction data with delete functionality.


## Accessibility Compliance

This app was designed with accessibility in mind:

- No skipped heading levels
- Alt text will be included for any future images (none currently used)
- Color contrast meets WCAG AA standards (e.g., no light gray on white, Normal body text, Labels and buttons, Forms and placeholders, Headings and layout sections)
- All inputs have properly associated labels
- Forms are fully keyboard-accessible
- ARIA attributes are used where appropriate

## Quick Start

### Prerequisites

- Node.js v14 or higher
- npm or yarn

### Installation

```bash
git clone <your-repo-url>
cd <project-folder>
npm install
