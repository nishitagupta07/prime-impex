# Prime Impex Stones Website

## Overview
Build a polished four-page website for Prime Impex Stones, using the supplied catalogue screenshots as visual reference for the brand and stone presentation. The experience will use restrained ivory, stone, charcoal, and muted bronze tones; refined serif headings; clean sans-serif body typography; generous spacing; and large-format natural-stone imagery.

## Pages
- **Home:** immersive stone hero, company introduction, Marble/Granite/Quartzite offerings, featured-product gallery, animated business statistics, and closing enquiry banner.
- **Products:** filterable responsive catalogue with editable product records and an accessible product-detail modal.
- **About Us:** editorial story, heritage, global reach, commitment, philosophy statement, imagery, and the requested milestone timeline.
- **Contact Us:** complete contact details, validated enquiry form prepared for future delivery integration, editable Google feedback link, and a location section.

## Shared Experience
- Sticky responsive navigation with mobile menu and working page links.
- Premium dark footer with navigation and supplied contact information.
- Reusable buttons, page intros, product cards/grid, statistics, imagery, and enquiry controls.
- Subtle reveal, counter, image-zoom, and menu transitions with reduced-motion support.
- Consistent image proportions, lazy loading below the fold, accessible labels, and clear keyboard focus states.

## Content and Data
- Keep all product content in a separate typed data file with `name`, `category`, `image`, `description`, `specifications`, and `origin` fields.
- Use temporary descriptive catalogue labels only in the placeholder data so every item can be replaced without changing the page components.
- Keep `GOOGLE_FEEDBACK_FORM_URL` in a dedicated configuration file. Until replaced, the feedback control will clearly indicate that the link is not yet available.
- The enquiry form will validate entries in the browser and explicitly state that email delivery is not connected rather than claiming submission success.

## Visual Assets
- Create a cohesive set of original premium stone and architectural images for the hero, category panels, product placeholders, About page, and closing banner.
- Use the uploaded catalogue screenshots only as visual reference, not as embedded website imagery.
- Use a typographic brand mark based on “PRIME IMPEX STONES” rather than tracing the catalogue logo.

## Technical Details
- Build with the existing React, TypeScript, Tailwind CSS, and TanStack routing setup.
- Add `/products`, `/about`, and `/contact` routes, retaining `/` for Home.
- Define all palette, typography, shadows, and motion in the shared design system; load selected web fonts from the document head.
- Add unique page titles, descriptions, Open Graph fields, Twitter card metadata, canonical links, semantic headings, and descriptive image text on every page.
- Use a simple map link/location presentation that requires no API key, avoiding fake credentials.
- Verify compilation plus desktop and mobile rendering and interactions.
