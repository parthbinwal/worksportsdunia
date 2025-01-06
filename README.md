#Introduction
A responsive dashboard built with React.js and Next.js. Features include user authentication, news fetching, filtering, analytics, and export options. Designed for mobile and desktop using Tailwind CSS
Features
Authentication: Secure Google OAuth via NextAuth.
News Integration: Fetch articles from APIs.
Filtering/Search: Filter by author, type, date; global search bar.
Responsive Design: Mobile-first UI with Tailwind CSS.
Payout Calculator: Calculates payouts with configurable rates.
Export: Export data to PDF/CSV.
Analytics: Bar charts using Chart.js.
folder structure is
-src
- /pages
  - index.js      # Dashboard UI
  - api/
    - auth.js  # Authentication API
- /components
  - Filters.js    # Filtering UI
  - NewsList.js   # News list
  - Analytics.js  # Charts and analytics
- /utils
  - api.js        # API integrations
  - export.js     # Export functionalities

