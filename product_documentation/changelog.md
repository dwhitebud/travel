# Changelog

## [Unreleased]

### Added
- Created the project structure for the tour booking system.
- Configured essential files:
  - `package.json`
  - `tsconfig.json`
  - `tailwind.config.js`
  - `.env.example`
- Developed core components:
  - `Header`
  - `HeroSection`
  - `FeaturedTours`
  - `Testimonials`
  - `FAQ`
  - `Footer`

### Changed
- Added `'use client'` directive to the following components to resolve rendering issues:
  - `FAQ`
  - `HeroSection`
  - `FeaturedTours`
  - `Footer`
  - `Header`
- Removed debugging CSS and console logs from `HeroSection` component.
- Fixed image display and text legibility issues in `FeaturedTours` component by:
  - Removing the `rounded-2xl` class.
  - Adding a gradient overlay for better text visibility.
  - Updating image to a new URL for better quality.
- Adjusted the aspect ratio settings to eliminate the oval shape over images in `FeaturedTours`.
- Removed the tour type display from the top right of the image card for a cleaner look.

### Other
- Restarted the development server to apply changes.
