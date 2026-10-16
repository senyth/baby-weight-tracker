# Baby Weight Tracker

A simple, free web app for tracking a baby's weight and comparing it against WHO growth percentile curves.

I built this because I wanted a simple, free way to follow my little one’s growth, since many apps put percentile charts behind a subscription. This project keeps the core feature simple, free and private: all data stays in your browser.

> **Disclaimer:** This app is for personal tracking only and is not medical advice. Please talk to your child's pediatrician about any concerns about growth.

---

## MVP Features

- **Child details:** enter birth date and sex so the app picks the right WHO curves
- **Add measurements:** record date and weight (kg) with basic validation
- **Growth chart:** your child's measurements plotted over the WHO weight-for-age percentile curves (3rd, 15th, 50th, 85th, 97th)
- **Latest summary:** most recent weight, estimated percentile and change since the last entry
- **History table:** all entries with age at measurement and percentile, with the option to delete an entry
- **Saved in your browser:** data persists after refresh using `localStorage`, with no account or backend needed
- **Responsive layout:** works on desktop and mobile
  
## Data Source

Percentile curves are based on the [WHO Child Growth Standards](https://www.who.int/tools/child-growth-standards) weight-for-age tables.

## Future Enhancements

**Features**
- Edit existing entries
- Support for multiple children
- Pounds / ounces unit option
- Height and head circumference charts
- Import / backup so data isn't lost if browser storage is cleared
- Installable as a PWA with offline support

**Code quality**
- Unit and component tests (Jest + React Testing Library)
- CI with GitHub Actions (lint, test, build)

**Possible later**
- Add back-end
- Optional account and cloud sync
- Export data (CSV) and print-friendly view
- Dark mode