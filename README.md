This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## How to Update Content

### 1. Updating Customer Reviews

Customer testimonials are located in `app/page.tsx` in the `REVIEWS` array (around line 21).

**To add a new review:**

```typescript
const REVIEWS = [
  {
    text: "Your review text here...",
    author: "Parent of 5th grade student",
  },
  // Add your new review here
  {
    text: "New review text goes here...",
    author: "Description of reviewer",
  },
];
```

**To edit an existing review:**

Simply find the review in the array and modify the `text` or `author` fields.

**To remove a review:**

Delete the entire review object (including the curly braces and comma).

**Tips:**
- Keep reviews concise (1-3 sentences works best)
- The slider works best with 4-8 reviews
- Reviews automatically loop on the homepage

---

### 2. Updating the Headshot Photo

The profile photo appears in two places: the navigation bar and the "Meet Your Tutor" section.

**Step 1: Add the new photo**

1. Place your new headshot image in the `/public/images/` folder
2. Name it something clear like `sandra_profile.png` or `sandra_headshot.jpg`

**Step 2: Update the import in `app/page.tsx`**

Find this line near the top of the file (around line 7):

```typescript
import imgPortraitImg from "../public/images/sandra_mastromarino.png"
```

Change it to your new filename:

```typescript
import imgPortraitImg from "../public/images/YOUR_NEW_FILENAME.png"
```

**Step 3: Update the import in `app/components/Navigation.tsx`**

Find this line near the top (around line 5):

```typescript
import imgPortraitImg from "../../public/images/sandra_mastromarino.png";
```

Change it to:

```typescript
import imgPortraitImg from "../../public/images/YOUR_NEW_FILENAME.png";
```

**Note:** Both files need to be updated for the photo to change everywhere.

---

### 3. Updating the Booking Link

The booking link is managed in one central location: `app/components/Button.tsx`

**To change the email or booking URL:**

Open `app/components/Button.tsx` and find this line:

```typescript
href="mailto:sandrasuzz00@gmail.com"
```

**To change the email:**

```typescript
href="mailto:YOUR_NEW_EMAIL@gmail.com"
```

**To use a Google Calendar booking link instead:**

```typescript
href="https://calendly.com/your-link-here"
// or
href="https://calendar.google.com/your-booking-link"
```

**To change the button text:**

Find this line and edit the text:

```typescript
Book a free intro call
```

This change will update all "Book a free intro call" buttons across the entire site.

---

### 4. Updating the Favicon (Browser Tab Icon)

The favicon is the small icon that appears in browser tabs and bookmarks.

**Steps:**

1. Create or export your new favicon image as `favicon.ico` (square, ideally 32x32 or 64x64 pixels)
2. Navigate to the `app` folder in your project
3. Delete the old `favicon.ico` file
4. Add your new `favicon.ico` file (must have this exact name)
5. Clear your browser cache or hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows) to see the change

**Important:** The filename must be exactly `favicon.ico` for it to work automatically.

---

## Project Structure

```
/app
  /components       # Reusable components (Navigation, Button, etc.)
  /styles          # CSS files including slider styles
  /utils           # Helper functions (navigation, etc.)
  page.tsx         # Main homepage content
  layout.tsx       # Site-wide layout and fonts

/public
  /images          # All images used on the site
```

---

## Common Tasks

### Adding a new section

Edit `app/page.tsx` and add a new `<section>` component. Follow the existing pattern for consistency.

### Changing colors or fonts

- Colors are defined in `tailwind.config.ts`
- Fonts are imported in `app/layout.tsx`

### Deploying changes

After making changes:

1. Test locally with `npm run dev`
2. Commit your changes to git
3. Push to GitHub
4. Vercel will automatically deploy

---

## Tech Stack

- **Framework:** Next.js 15 (React)
- **Styling:** Tailwind CSS
- **Slider:** Embla Carousel
- **Icons:** Phosphor Icons
- **Hosting:** Vercel

---

## Deploy on Vercel

This site is deployed via Vercel. Any changes pushed to the `main` branch will automatically deploy to production.

- **Production URL:** [Your production URL]
- **Staging URL:** Push to `staging` branch for preview deployments