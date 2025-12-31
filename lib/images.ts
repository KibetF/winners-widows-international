/**
 * Centralized Image Configuration
 *
 * HOW TO USE:
 * 1. Place your images in the appropriate folder under /public/images/
 * 2. Update the paths below to match your file names
 * 3. Images will automatically update across the entire site
 *
 * SUPPORTED FORMATS: .jpg, .jpeg, .png, .webp
 * RECOMMENDED: Use .webp for best performance, or .jpg for photos
 */

// =============================================================================
// HERO BACKGROUNDS
// Place images in: /public/images/hero/
// Recommended size: 1920x1080 or larger
// =============================================================================
export const HERO_IMAGES = {
  home: "/images/hero/home-hero.jpg",
  about: "/images/hero/about-hero.jpg",
  programs: "/images/hero/programs-hero.jpg",
  impact: "/images/hero/impact-hero.jpg",
  team: "/images/hero/team-hero.jpg",
  getInvolved: "/images/hero/get-involved-hero.jpg",
  donate: "/images/hero/donate-hero.jpg",
  news: "/images/hero/news-hero.jpg",
  contact: "/images/hero/contact-hero.jpg",
  transparency: "/images/hero/transparency-hero.jpg",
};

// =============================================================================
// TEAM MEMBER PHOTOS
// Place images in: /public/images/team/
// Recommended size: 400x400 (square)
// =============================================================================
export const TEAM_IMAGES = {
  // Board Members
  founder: "/images/team/founder.jpg",
  chairman: "/images/team/chairman.jpg",
  secretary: "/images/team/secretary.jpg",
  treasurer: "/images/team/treasurer.jpg",

  // Add more team members as needed:
  // memberName: "/images/team/member-name.jpg",
};

// =============================================================================
// PROGRAM IMAGES
// Place images in: /public/images/programs/
// Recommended size: 800x600
// =============================================================================
export const PROGRAM_IMAGES = {
  livestock: "/images/programs/livestock.jpg",
  education: "/images/programs/education.jpg",
  healthcare: "/images/programs/healthcare.jpg",
  skillsTraining: "/images/programs/skills-training.jpg",
  seasonalSupport: "/images/programs/seasonal-support.jpg",
};

// =============================================================================
// ABOUT PAGE IMAGES
// Place images in: /public/images/about/
// =============================================================================
export const ABOUT_IMAGES = {
  story: "/images/about/our-story.jpg",
  mission: "/images/about/mission.jpg",
  vision: "/images/about/vision.jpg",
  community: "/images/about/community.jpg",
  founder: "/images/about/founder.jpg",
};

// =============================================================================
// IMPACT PAGE IMAGES
// Place images in: /public/images/impact/
// =============================================================================
export const IMPACT_IMAGES = {
  // Camp feature images
  kasoiyoCamp: "/images/impact/kasoiyo-camp.jpg",
  talaiCamp: "/images/impact/talai-camp.jpg",
  cheburburCamp: "/images/impact/cheburbur-camp.jpg",

  // Story images
  impactStory1: "/images/impact/story-1.jpg",
  impactStory2: "/images/impact/story-2.jpg",
  impactStory3: "/images/impact/story-3.jpg",
};

// =============================================================================
// NEWS/EVENTS IMAGES
// Place images in: /public/images/news/
// Recommended size: 800x500
// =============================================================================
export const NEWS_IMAGES = {
  christmas2024: "/images/news/christmas-2024.jpg",
  livestockExpansion: "/images/news/livestock-expansion.jpg",
  backToSchool: "/images/news/back-to-school.jpg",
  // Add more news images as needed
};

// =============================================================================
// GENERAL/MISC IMAGES
// Place images in: /public/images/general/
// =============================================================================
export const GENERAL_IMAGES = {
  logo: "/images/general/logo.png",
  logoWhite: "/images/general/logo-white.png",
  placeholder: "/images/general/placeholder.jpg",
  ogImage: "/images/general/og-image.jpg", // For social sharing (1200x630)
};

// =============================================================================
// HOME PAGE SPECIFIC IMAGES
// =============================================================================
export const HOME_IMAGES = {
  featuredStory: "/images/home/featured-story.jpg",
  featuredStorySecondary: "/images/home/featured-story-2.jpg",
  ctaBackground: "/images/home/cta-background.jpg",
};

// =============================================================================
// FALLBACK - Use Unsplash as fallback while you add your images
// Set to true to use placeholder images, false to use your images
// =============================================================================
export const USE_PLACEHOLDER_IMAGES = true;

// Placeholder URLs (will be used if USE_PLACEHOLDER_IMAGES is true)
export const PLACEHOLDER_URLS = {
  hero: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80",
  team: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  program: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
  impact: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80",
  news: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&q=80",
};

/**
 * Helper function to get image with fallback
 * Once you've added all your images, set USE_PLACEHOLDER_IMAGES to false
 */
export function getImage(path: string, fallbackCategory: keyof typeof PLACEHOLDER_URLS = "hero"): string {
  if (USE_PLACEHOLDER_IMAGES) {
    return PLACEHOLDER_URLS[fallbackCategory];
  }
  return path;
}
