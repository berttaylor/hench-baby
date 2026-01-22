# Claude Code Build Spec: Hench Baby Co.
## Static Site Ready for GitHub Pages Deployment

---

## Project Overview

Build a static marketing website for "Hench Baby Co." - a premium baby food subscription service focused on optimal nutrition for maximum developmental gains.

**Tech Stack:**
- React + Vite (static build)
- Tailwind CSS for styling
- No backend required (static site)
- Deployable to GitHub Pages

**Brand Positioning:** "Optimal nutrition for growing legends" - targeting health-obsessed parents who want peak performance nutrition for their babies, not just convenience.

**Tone:** Playful gains/fitness culture meets premium baby food. Think "gym bro energy but for babies" with scientific credibility.

---

## Initial Setup Prompt for Claude Code

```
Create a new React + Vite project for a baby food subscription website called "Hench Baby Co."

Tech requirements:
- React 18 with Vite
- Tailwind CSS for styling
- React Router for navigation
- Static site (no backend)
- Ready for GitHub Pages deployment

Brand details:
- Name: Hench Baby Co.
- Tagline: "Fuel Their First Gains"
- Positioning: Premium, nutrition-optimised baby food for parents who want the best
- Tone: Playful fitness/gains culture + scientific credibility
- Colours: To be confirmed (suggest modern, clean, premium feel - not typical pastel baby colours)

Set up the project structure with:
- src/components/ (reusable components)
- src/pages/ (page components)
- src/assets/ (images, icons)
- src/data/ (product data JSON)
- Configured for static export

Include a basic routing structure for:
- Home page (/)
- Build a Box page (/build)
- About page (/about)
- How It Works page (/how-it-works)
```

---

## Page Specifications

### Page 1: Homepage (/)

**Priority: HIGH - This is the demo centrepiece**

```
Build the homepage for Hench Baby Co with these sections:

1. STICKY PROMO BANNER (top)
   - Text: "Subscribe & Save 20% on your first 2 boxes 💪"
   - Stays visible on scroll
   - Dismissible (X button)

2. NAVIGATION
   - Logo: "Hench Baby Co." (text or placeholder for now)
   - Links: Shop by Stage | Build a Box | How It Works | Our Story
   - CTA button: "Build Your Box"
   - Mobile hamburger menu

3. HERO SECTION
   - Large headline: "Fuel Their First Gains"
   - Subheadline: "Nutrition engineered for growing legends. Because 'fine' isn't good enough."
   - Primary CTA: "Build Your Box" (large button)
   - Secondary CTA: "See the Science"
   - Trust badge: "⭐ 4.9/5 from 500+ parents | Developed with Paediatric Nutritionists"
   - Hero image placeholder (happy strong baby / product shot)

4. BENEFITS BAR (horizontal scroll on mobile)
   - 🧬 Macro-Optimised Meals
   - 🥦 40+ Organic Ingredients
   - 📊 Dietitian-Designed
   - 💪 Supports Muscle & Brain Growth
   
5. SHOP BY STAGE SECTION
   - Headline: "Choose Their Level"
   - 4 cards in a grid:
     
   Card 1: "First Gains" (6-9 months)
   - Image placeholder
   - "Foundation phase. Introducing optimal nutrition from day one."
   - CTA: "Shop First Gains"
   
   Card 2: "Growth Mode" (9-12 months)
   - Image placeholder
   - "Building phase. Complex nutrients for rapid development."
   - CTA: "Shop Growth Mode"
   
   Card 3: "Toddler Titan" (1-3 years)
   - Image placeholder
   - "Peak performance. Fuelling their unstoppable energy."
   - CTA: "Shop Toddler Titan"
   
   Card 4: "Build Your Box"
   - Image placeholder
   - "Customise their nutrition stack. You know them best."
   - CTA: "Start Building"

6. SOCIAL PROOF BAR
   - "As featured in:" with placeholder logos (The Times, Tatler, Mother & Baby, etc.)

7. HOW IT WORKS SECTION
   - Headline: "3 Steps to Hench"
   - Step 1: "Pick Your Meals" - "Choose from 30+ macro-optimised recipes"
   - Step 2: "Set Your Schedule" - "Weekly, fortnightly, or monthly delivery"
   - Step 3: "Watch Them Thrive" - "Delivered frozen, ready in minutes"
   - CTA: "Get Started"

8. NUTRITION CREDENTIALS SECTION
   - Headline: "The Science of Hench"
   - Split layout:
     Left side: Key stats
     - "2.5g+ protein per serve"
     - "Iron-fortified for cognitive development"
     - "Omega-3s for brain growth"
     - "Zero added sugar or salt"
     
     Right side: 
     - "Every meal designed with paediatric dietitians"
     - "Organic, traceable ingredients"
     - "Macro ratios optimised for each developmental stage"
   - CTA: "See Full Nutrition Info"

9. TESTIMONIALS SECTION
   - Headline: "Results From Real Parents"
   - 3 testimonial cards:
   
   Card 1:
   - "He hit his gross motor milestones two weeks early. Coincidence? I think not. 💪"
   - "- Sarah, mum to Max (11 months)"
   
   Card 2:
   - "Finally, baby food that isn't just beige mush. She's eating salmon and quinoa at 8 months!"
   - "- James, dad to Olivia (8 months)"
   
   Card 3:
   - "The nutrition calculator sold me. I can actually see what she's getting each week."
   - "- Priya, mum to Aanya (14 months)"

10. FOUNDER STORY SECTION
    - Headline: "Why We Started Hench Baby"
    - Short paragraph: "As parents and nutrition obsessives, we were frustrated. Why was baby food either bland mush or full of hidden sugars? We teamed up with paediatric dietitians to create meals that actually optimise development. Because our babies deserve gains too."
    - CTA: "Read Our Story"
    - Founder image placeholder

11. INSTAGRAM SECTION
    - Headline: "Join the Hench Baby Community"
    - "@henchbaby"
    - 4 placeholder image squares (would show Instagram feed)
    - CTA: "Follow Us"

12. NEWSLETTER SECTION
    - Headline: "Get Feeding Tips & Early Access"
    - Email input field
    - Submit button: "Join the Crew"
    - Small text: "No spam. Just gains."

13. FOOTER
    - Logo
    - Columns:
      Shop: First Gains | Growth Mode | Toddler Titan | Build a Box | Gift Cards
      Learn: How It Works | Nutrition Info | FAQs | Blog
      Company: Our Story | Contact | Careers
      Legal: Privacy | Terms | Refund Policy
    - Social icons (Instagram, TikTok, Facebook)
    - "© 2025 Hench Baby Co. All rights reserved."
    - Payment icons (Visa, Mastercard, Amex, Apple Pay)
```

---

### Page 2: Build a Box (/build)

**Priority: HIGH - Core conversion page**

```
Build the "Build a Box" page with an interactive box builder.

1. PAGE HEADER
   - Headline: "Build Their Nutrition Stack"
   - Subheadline: "Choose meals, track macros, fuel their gains."

2. FILTER BAR
   - Filter by Stage: All | First Gains (6-9m) | Growth Mode (9-12m) | Toddler Titan (1-3yr)
   - Filter by Type: All | Purées | Finger Foods | Full Meals | Snacks
   - Filter by Focus: All | Protein-Rich | Iron-Packed | Brain-Boosting | Omega-3

3. PRODUCT GRID
   - Display products from data file (see product data below)
   - Each product card shows:
     - Image placeholder
     - Product name
     - Stage badge (e.g., "6-9m")
     - Key macro: "8g protein" or "High iron"
     - Price: "£3.50"
     - Add to box button with quantity selector

4. STICKY BOX SUMMARY (right sidebar on desktop, bottom drawer on mobile)
   - "Your Box" header
   - List of added items with quantities
   - Remove item buttons
   - 
   **NUTRITION CALCULATOR** (THE KEY FEATURE):
   - "Your Box Delivers:"
   - Protein: Xg (with progress bar to "optimal")
   - Iron: Xmg (with progress bar)
   - Omega-3: Xmg (with progress bar)
   - Calcium: Xmg (with progress bar)
   - Visual indicator: "Great balance! 💪" or "Add more protein-rich meals"
   
   - Subtotal: £XX.XX
   - Delivery frequency selector: Weekly | Fortnightly | Monthly
   - "Subscribe & Save 20%" toggle
   - Checkout button: "Complete Your Box"

5. EMPTY STATE
   - When no items added:
   - "Your box is empty"
   - "Start adding meals to see your nutrition breakdown"
```

**Product Data Structure (create in src/data/products.json):**

```json
{
  "products": [
    {
      "id": "1",
      "name": "Salmon & Sweet Potato Power Bowl",
      "stage": "9-12m",
      "type": "meal",
      "focus": ["protein", "omega3"],
      "price": 3.50,
      "image": "/placeholder-meal.jpg",
      "nutrition": {
        "protein": 8,
        "iron": 2.1,
        "omega3": 450,
        "calcium": 45
      },
      "description": "Wild salmon, sweet potato, spinach, and a hint of dill."
    },
    {
      "id": "2",
      "name": "Beef & Root Veg Gains Bowl",
      "stage": "9-12m",
      "type": "meal",
      "focus": ["protein", "iron"],
      "price": 3.75,
      "image": "/placeholder-meal.jpg",
      "nutrition": {
        "protein": 10,
        "iron": 3.2,
        "omega3": 50,
        "calcium": 30
      },
      "description": "Grass-fed beef with parsnip, carrot, and thyme."
    },
    {
      "id": "3",
      "name": "Chicken & Quinoa Builder",
      "stage": "6-9m",
      "type": "puree",
      "focus": ["protein"],
      "price": 3.25,
      "image": "/placeholder-meal.jpg",
      "nutrition": {
        "protein": 6,
        "iron": 1.8,
        "omega3": 30,
        "calcium": 25
      },
      "description": "Free-range chicken, quinoa, courgette, perfectly smooth."
    },
    {
      "id": "4",
      "name": "Iron-Boost Lentil Purée",
      "stage": "6-9m",
      "type": "puree",
      "focus": ["iron"],
      "price": 2.95,
      "image": "/placeholder-meal.jpg",
      "nutrition": {
        "protein": 5,
        "iron": 4.5,
        "omega3": 20,
        "calcium": 35
      },
      "description": "Red lentils, butternut squash, cumin. Iron powerhouse."
    },
    {
      "id": "5",
      "name": "Omega Bites (Finger Food)",
      "stage": "9-12m",
      "type": "finger",
      "focus": ["omega3", "brain"],
      "price": 4.25,
      "image": "/placeholder-meal.jpg",
      "nutrition": {
        "protein": 4,
        "iron": 1.2,
        "omega3": 600,
        "calcium": 40
      },
      "description": "Salmon and veggie bites. Perfect for self-feeding gains."
    },
    {
      "id": "6",
      "name": "Brain-Boost Blueberry Oats",
      "stage": "6-9m",
      "type": "puree",
      "focus": ["brain"],
      "price": 2.75,
      "image": "/placeholder-meal.jpg",
      "nutrition": {
        "protein": 3,
        "iron": 2.0,
        "omega3": 100,
        "calcium": 50
      },
      "description": "Organic oats, blueberries, banana. Antioxidant-rich start."
    },
    {
      "id": "7",
      "name": "Toddler Titan Bolognese",
      "stage": "1-3yr",
      "type": "meal",
      "focus": ["protein", "iron"],
      "price": 4.50,
      "image": "/placeholder-meal.jpg",
      "nutrition": {
        "protein": 12,
        "iron": 3.8,
        "omega3": 40,
        "calcium": 55
      },
      "description": "Grass-fed beef ragu, hidden veg, served with pasta."
    },
    {
      "id": "8",
      "name": "Mac & Cheese Muscle Mix",
      "stage": "1-3yr",
      "type": "meal",
      "focus": ["protein", "calcium"],
      "price": 4.25,
      "image": "/placeholder-meal.jpg",
      "nutrition": {
        "protein": 9,
        "iron": 1.5,
        "omega3": 30,
        "calcium": 180
      },
      "description": "Cauliflower mac & cheese. Hidden veg, maximum gains."
    }
  ]
}
```

---

### Page 3: How It Works (/how-it-works)

**Priority: MEDIUM**

```
Build a "How It Works" page explaining the subscription process.

1. HERO
   - Headline: "How Hench Baby Works"
   - Subheadline: "From box to belly in 3 simple steps"

2. STEP-BY-STEP SECTION (large, visual)
   
   Step 1: "Build Your Box"
   - Icon/illustration placeholder
   - "Choose from 30+ dietitian-designed meals. Filter by age, nutrition goals, or meal type. Our calculator shows exactly what they're getting."
   
   Step 2: "Set Your Schedule"  
   - Icon/illustration placeholder
   - "Deliver weekly, fortnightly, or monthly. Pause, skip, or cancel anytime. No contracts, no hassle."
   
   Step 3: "Heat & Serve"
   - Icon/illustration placeholder
   - "Meals arrive frozen to lock in freshness. Ready in 2 minutes. Restaurant quality, zero effort."

3. DELIVERY INFO SECTION
   - "Delivery: £4.99 (Free over £50)"
   - "We deliver Tuesday-Friday across mainland UK"
   - "Packed in insulated, recyclable packaging"

4. FAQ SECTION
   - "How do I manage my subscription?" 
   - "What if my baby doesn't like something?"
   - "Are meals suitable for babies with allergies?"
   - "How long do meals last in the freezer?"
   - "Can I buy one-off boxes without subscribing?"
   
5. CTA SECTION
   - "Ready to fuel their gains?"
   - Button: "Build Your First Box"
```

---

### Page 4: About / Our Story (/about)

**Priority: LOW**

```
Build an About page for the founders.

1. HERO
   - Headline: "Why We're Building Hench Babies"
   - Large founder image placeholder

2. STORY SECTION
   - "We're parents. We're nutrition nerds. And we were frustrated."
   - Paragraph about the gap in the market
   - Paragraph about teaming up with dietitians
   - Paragraph about the mission

3. VALUES SECTION
   - "What We Believe"
   - Organic Always
   - Science-Led
   - No Shortcuts
   - Gains for All

4. TEAM SECTION
   - Founder cards with placeholder images
   - Nutritionist/Dietitian advisor card

5. CTA
   - "Join the hench baby revolution"
   - Button: "Build Your Box"
```

---

## GitHub Pages Deployment Config

```
Add to vite.config.js:

export default defineConfig({
  base: '/hench-baby/', // Replace with your repo name
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})

Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

Install gh-pages:
npm install --save-dev gh-pages
```

---

## Component Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PromoBanner.jsx
│   │   └── Layout.jsx
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── BenefitsBar.jsx
│   │   ├── ShopByStage.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── NutritionCredentials.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FounderStory.jsx
│   │   └── Newsletter.jsx
│   ├── builder/
│   │   ├── ProductGrid.jsx
│   │   ├── ProductCard.jsx
│   │   ├── FilterBar.jsx
│   │   ├── BoxSummary.jsx
│   │   └── NutritionCalculator.jsx
│   └── shared/
│       ├── Button.jsx
│       ├── Card.jsx
│       └── Badge.jsx
├── pages/
│   ├── Home.jsx
│   ├── BuildBox.jsx
│   ├── HowItWorks.jsx
│   └── About.jsx
├── data/
│   └── products.json
├── App.jsx
└── main.jsx
```

---

## Quick Start Commands for Claude Code

```bash
# 1. Create project
npm create vite@latest hench-baby -- --template react
cd hench-baby

# 2. Install dependencies
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer gh-pages
npx tailwindcss init -p

# 3. Start dev server
npm run dev

# 4. Build for production
npm run build

# 5. Deploy to GitHub Pages
npm run deploy
```

---

## Priority Order for Building

1. **Project setup** (10 mins)
2. **Homepage** (30-40 mins) - Hero, benefits, shop by stage, how it works
3. **Build a Box with Nutrition Calculator** (30-40 mins) - THE DEMO STAR
4. **Navigation & Footer** (10 mins)
5. **Polish & deploy** (10 mins)

**If time is tight:** Focus on Homepage hero + Build a Box with working nutrition calculator. That's your demo.
