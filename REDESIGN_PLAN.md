# Sewing For Jesus Website Redesign Plan
## Inspired by Passion Creek Church Design

---

## 🎨 **Design Analysis: Passion Creek Church**

### Key Design Elements Identified:
1. **Large Hero Section** - Full-width, bold typography, clear value proposition
2. **Card-Based CTAs** - "3 Invitations" pattern with icons/videos, clear actions
3. **Clean Navigation** - Minimal, modern header with hamburger menu
4. **Section-Based Layout** - Clear visual separation between content areas
5. **Modern Typography** - Clean, readable fonts with good hierarchy
6. **Spacious Design** - Generous whitespace, breathing room
7. **Video Integration** - Optional video embeds for engagement
8. **Clear CTAs** - Prominent buttons with clear action words
9. **Footer Navigation** - Organized links and contact info

---

## 🎯 **Redesign Plan for Sewing For Jesus**

### **Color Scheme (Purple Hero Theme)**
- **Primary Purple (Hero)**: `#6f2b5a` (deep plum) - main brand color
- **Purple Light**: `#8f3d6a` - gradients and accents
- **Purple Dark**: `#4f1a3d` - hover states, depth
- **Purple Pink**: `#e7a9cc` - soft accents, highlights
- **Background**: `#ffffff` / `#faf8fb` - clean whites
- **Text**: `#222222` - dark gray for readability
- **Muted Text**: `#5f5f5f` - secondary text

---

## 📐 **Homepage Structure (index.html)**

### **1. Hero Section** (Full-width, Purple Background)
```
┌─────────────────────────────────────────┐
│  [Large Purple Hero Section]            │
│  "Making Dresses for Girls"              │
│  "Sharing Love Through Sewing"          │
│  [Primary CTA Button]                    │
│  Meeting: Mondays 10:30 AM - 2:30 PM    │
└─────────────────────────────────────────┘
```

**Content:**
- Large headline: "Making Dresses for Girls — Sharing Love Through Sewing"
- Subheadline: Brief mission statement
- Primary CTA: "Join Us" or "Learn More"
- Meeting time prominently displayed

---

### **2. "Three Ways to Get Involved" Section** (Card Grid)
```
┌──────────┐  ┌──────────┐  ┌──────────┐
│   Card   │  │   Card   │  │   Card   │
│  #1      │  │  #2      │  │  #3      │
│          │  │          │  │          │
│  [Icon]  │  │  [Icon]  │  │  [Icon]  │
│  Title   │  │  Title   │  │  Title   │
│  Text    │  │  Text    │  │  Text    │
│  [Btn]   │  │  [Btn]   │  │  [Btn]   │
└──────────┘  └──────────┘  └──────────┘
```

**Three Cards:**
1. **"Join Our Weekly Meetings"**
   - Icon: Sewing machine or hands
   - Text: "Mondays 10:30 AM - 2:30 PM at Evangel Baptist Church"
   - CTA: "Plan Your Visit"

2. **"Donate Supplies or Funds"**
   - Icon: Heart or gift
   - Text: "Help us buy fabric, notions, and shipping supplies"
   - CTA: "Donate Now"

3. **"See Our Work"**
   - Icon: Photo gallery
   - Text: "View photos of dresses we've made and shipped"
   - CTA: "View Gallery"

---

### **3. "Our Mission" Section** (Full-width, Light Background)
- Large quote from Matthew 25:35-36
- Mission statement
- Visual: Photo of volunteers or finished dresses

---

### **4. "What We Make" Section** (Two-column)
```
┌─────────────────┐  ┌─────────────────┐
│  [Photo/Image]   │  │  Description     │
│                  │  │  - Dresses      │
│                  │  │  - Skirts       │
│                  │  │  - Age ranges   │
│                  │  │  - Distribution │
└─────────────────┘  └─────────────────┘
```

---

### **5. "Where We Meet" Section** (Map + Info)
- Google Maps embed (full-width or large card)
- Address and meeting times
- "Get Directions" button

---

### **6. "Stories & Testimonials" Section** (Optional)
- Testimonials from volunteers
- Impact stories
- Photo carousel

---

## 🎨 **Design Specifications**

### **Typography**
- **Headings**: Modern sans-serif (Inter, 700 weight)
- **Body**: Inter, 400 weight, 1.7 line-height
- **Hero Text**: Large, bold (3rem+ on desktop)
- **Section Headings**: 2rem, purple color

### **Spacing**
- **Section Padding**: 4-6rem vertical
- **Card Padding**: 2rem
- **Card Gap**: 2rem
- **Max Width**: 1200px (wider than current 1100px)

### **Components**

#### **Hero Section**
- Full viewport height (or 80vh minimum)
- Purple gradient background
- White text
- Large, bold typography
- Centered content
- Smooth scroll indicator

#### **Cards**
- White background
- Subtle shadow (elevated feel)
- Rounded corners (12-16px)
- Hover effect (lift + shadow increase)
- Icon at top (optional)
- Clear CTA button at bottom

#### **Buttons**
- Primary: Purple gradient, white text, rounded
- Secondary: White background, purple border, purple text
- Hover: Transform + shadow increase
- Size: Comfortable padding (1rem vertical, 2rem horizontal)

#### **Navigation**
- Clean, minimal header
- Logo on left
- Nav items on right (desktop)
- Hamburger menu (mobile)
- Sticky header with backdrop blur

---

## 📱 **Responsive Design**

### **Breakpoints**
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### **Mobile Adaptations**
- Stack cards vertically
- Full-width hero
- Simplified navigation
- Larger touch targets
- Reduced padding

---

## 🔄 **Page Updates Needed**

### **index.html** (Complete Redesign)
- New hero section
- Three-card CTA section
- Restructured content sections
- Better visual hierarchy

### **about.html** (Enhanced)
- Hero section with page title
- Two-column layout for content
- Better image integration
- Clearer contact information

### **donations.html** (Enhanced)
- Hero section
- Multiple donation options in cards
- Clear Venmo integration
- Supply donation info

### **photos.html** (Enhanced)
- Hero section
- Improved gallery grid
- Better lightbox experience

### **contact.html** (Enhanced)
- Hero section
- Form in card layout
- Contact info in sidebar

---

## 🎯 **Implementation Phases**

### **Phase 1: Foundation**
1. Update CSS variables for purple theme
2. Create hero section component
3. Create card component styles
4. Update typography system

### **Phase 2: Homepage**
1. Build new hero section
2. Create three-card CTA section
3. Restructure existing content
4. Add new sections (mission, what we make)

### **Phase 3: Other Pages**
1. Add hero sections to all pages
2. Update layouts for consistency
3. Enhance forms and components

### **Phase 4: Polish**
1. Add animations and transitions
2. Optimize images
3. Test responsive design
4. Final tweaks and refinements

---

## ✨ **Key Features to Implement**

1. **Smooth Scrolling** - Already implemented ✓
2. **Fade-in Animations** - For sections on scroll
3. **Card Hover Effects** - Lift and shadow
4. **Button Animations** - Shine effect, transform
5. **Modern Shadows** - Layered depth system
6. **Gradient Backgrounds** - Purple gradients
7. **Backdrop Blur** - Modern glass effect
8. **Icon Integration** - Optional SVG icons for cards

---

## 📋 **Content Mapping**

### **Current Content → New Structure**

**Hero Section:**
- Current: "Making dresses for girls..."
- New: Large, bold hero with CTA

**Three Cards:**
- Card 1: Meeting info (from current hero)
- Card 2: Donations (from donations page)
- Card 3: Gallery (from photos page)

**Mission Section:**
- Current mission widget content
- Enhanced with better typography

**What We Make:**
- New section with photos and descriptions

**Where We Meet:**
- Current map widget
- Enhanced presentation

---

## 🚀 **Ready to Implement?**

This plan maintains your current content while dramatically improving the visual design and user experience, following the modern, clean aesthetic of Passion Creek Church but with your purple color scheme.

**Next Steps:**
1. Review and approve this plan
2. I'll implement Phase 1 (Foundation)
3. Then Phase 2 (Homepage)
4. Continue through all phases

Would you like me to proceed with implementation, or would you like to modify any part of this plan first?

