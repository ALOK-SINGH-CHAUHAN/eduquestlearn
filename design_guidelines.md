# Design Guidelines for ReEarth - Gamified Environmental Education Platform

## Design Approach
**System-Based Approach**: Material Design adapted for educational gaming
- Prioritizes usability and learning efficiency for students
- Incorporates gamification elements within clean, structured interface
- Emphasizes accessibility and consistent interaction patterns

## Core Design Principles
- **Educational Focus**: Clear information hierarchy supporting learning objectives
- **Gamification Balance**: Motivating without overwhelming academic content
- **Environmental Theme**: Green-centric design reflecting sustainability mission
- **Student-Friendly**: Age-appropriate interface for school and college students

## Color Palette

### Primary Colors
- **Forest Green**: 142 69% 45% - Primary brand color for headers, buttons, and key elements
- **Sage Green**: 142 25% 65% - Secondary backgrounds and subtle accents
- **Dark Green**: 142 80% 25% - Text and high-contrast elements

### Supporting Colors
- **Light Green**: 142 35% 85% - Card backgrounds and light sections
- **Success Green**: 120 60% 50% - Achievement indicators and positive feedback
- **Cream White**: 45 15% 95% - Primary background color
- **Charcoal**: 210 10% 20% - Primary text color

### Accent Colors (Minimal Use)
- **Earth Brown**: 25 40% 40% - Mission badges and natural elements
- **Sky Blue**: 200 70% 60% - Progress indicators and water-related content

## Typography
- **Primary Font**: "Inter" via Google Fonts - clean, readable for educational content
- **Display Font**: "Poppins" via Google Fonts - friendly headings and gamification elements
- **Font Hierarchy**: 
  - H1: 2.5rem, bold weight for page titles
  - H2: 2rem, medium weight for section headers
  - H3: 1.5rem, medium weight for card titles
  - Body: 1rem, regular weight for content
  - Small: 0.875rem for secondary information

## Layout System
**Spacing Units**: Use consistent 8px grid system
- **Base unit**: 8px
- **Common spacing**: 8px, 16px, 24px, 32px, 48px
- **Container max-width**: 1200px with 24px side padding
- **Card spacing**: 16px internal padding, 24px between cards

## Component Library

### Navigation
- **Header**: Fixed green header with logo, navigation links, and eco-points display
- **Navigation**: Horizontal menu with clear active states and hover effects
- **Mobile**: Hamburger menu with slide-out navigation

### Cards and Containers
- **Quiz Cards**: White background with subtle green border, rounded corners (8px)
- **Mission Cards**: Slightly larger cards with progress indicators and difficulty badges
- **Dashboard Widgets**: Compact cards showing stats, progress, and quick actions

### Interactive Elements
- **Primary Buttons**: Forest green background, white text, rounded corners
- **Secondary Buttons**: Outlined green border, green text
- **Progress Bars**: Green gradient fill with percentage indicators
- **Badges**: Circular or shield-shaped achievement indicators

### Gamification Elements
- **Eco-Points Display**: Prominent counter with leaf icon
- **Leaderboards**: Table format with ranking indicators and profile pictures
- **Progress Tracking**: Visual progress wheels and bar charts
- **Achievement Badges**: Colorful icons representing different environmental accomplishments

### Forms
- **Input Fields**: Clean white backgrounds with green focus states
- **Login Forms**: Centered design with environmental background imagery
- **Quiz Interface**: Question cards with multiple choice buttons and timer

## Page-Specific Guidelines

### Homepage
- **Hero Section**: Large banner with environmental imagery, platform overview, and clear call-to-action
- **Features Grid**: 3-column layout showcasing quiz, missions, and leaderboard features
- **Statistics Section**: Highlight platform engagement and environmental impact

### Dashboard
- **Overview Cards**: Eco-points, current level, weekly progress in prominent top row
- **Quick Access**: Grid of feature shortcuts (Quiz, Missions, Leaderboard)
- **Recent Activity**: Timeline of completed quizzes and missions

### Quiz Interface
- **Question Display**: Large, clear text with supporting images when relevant
- **Answer Options**: Button-style choices with immediate visual feedback
- **Progress Indicator**: Linear progress bar showing quiz completion

## Images Section
- **Hero Image**: Large environmental photograph (forest, renewable energy, or students in nature) spanning full viewport width
- **Feature Icons**: Simple line icons representing quiz, missions, leaderboard, and chatbot
- **Achievement Badges**: Custom illustrated badges for different environmental accomplishments
- **Mission Images**: Supporting photographs for real-world environmental challenges
- **Avatar Placeholders**: Generic student profile images for leaderboards

## Accessibility Considerations
- **Color Contrast**: Ensure all text meets WCAG AA standards against green backgrounds
- **Focus States**: Clear keyboard navigation indicators
- **Screen Reader**: Proper heading structure and alt text for images
- **Font Sizing**: Scalable text for different reading abilities

## Animations (Minimal)
- **Subtle Transitions**: 0.3s ease for button states and card hover effects
- **Progress Animations**: Smooth filling of progress bars and point counters
- **Achievement Celebration**: Brief confetti or badge zoom effect for completed tasks