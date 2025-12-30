export type CampId = "kasoiyo" | "cheburbur" | "talai";

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  camp: CampId;
  caption?: string;
}

export const CAMP_LABELS: Record<CampId, string> = {
  kasoiyo: "Kasoiyo Camp",
  cheburbur: "Cheburbur Camp",
  talai: "Talai Camp",
};

// Gallery photos organized by camp
// Add your photos here - place image files in /public/images/gallery/{camp}/
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  // ============ KASOIYO CAMP ============
  {
    id: "kasoiyo-1",
    src: "/images/gallery/kasoiyo/photo-1.jpg",
    alt: "Kasoiyo camp community gathering",
    camp: "kasoiyo",
    caption: "Community members at Kasoiyo camp",
  },
  {
    id: "kasoiyo-2",
    src: "/images/gallery/kasoiyo/photo-2.jpg",
    alt: "Livestock program at Kasoiyo",
    camp: "kasoiyo",
    caption: "Our livestock empowerment program",
  },
  {
    id: "kasoiyo-3",
    src: "/images/gallery/kasoiyo/photo-3.jpg",
    alt: "Kasoiyo camp activities",
    camp: "kasoiyo",
  },

  // ============ CHEBURBUR CAMP ============
  {
    id: "cheburbur-1",
    src: "/images/gallery/cheburbur/photo-1.jpg",
    alt: "Cheburbur camp community",
    camp: "cheburbur",
    caption: "Cheburbur community members",
  },
  {
    id: "cheburbur-2",
    src: "/images/gallery/cheburbur/photo-2.jpg",
    alt: "Skills training at Cheburbur",
    camp: "cheburbur",
    caption: "Skills training session",
  },
  {
    id: "cheburbur-3",
    src: "/images/gallery/cheburbur/photo-3.jpg",
    alt: "Cheburbur camp activities",
    camp: "cheburbur",
  },

  // ============ TALAI CAMP ============
  {
    id: "talai-1",
    src: "/images/gallery/talai/photo-1.jpg",
    alt: "Talai camp community gathering",
    camp: "talai",
    caption: "Talai community celebration",
  },
  {
    id: "talai-2",
    src: "/images/gallery/talai/photo-2.jpg",
    alt: "Education program at Talai",
    camp: "talai",
    caption: "Supporting education",
  },
  {
    id: "talai-3",
    src: "/images/gallery/talai/photo-3.jpg",
    alt: "Talai camp activities",
    camp: "talai",
  },
];

// Helper function to get photos by camp
export function getPhotosByCamp(camp: CampId | "all"): GalleryPhoto[] {
  if (camp === "all") {
    return GALLERY_PHOTOS;
  }
  return GALLERY_PHOTOS.filter((photo) => photo.camp === camp);
}
