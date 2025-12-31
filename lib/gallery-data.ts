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
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  // ============ KASOIYO CAMP ============
  {
    id: "kasoiyo-1",
    src: "/images/camps/kasoiyo/IMG_5459.jpeg",
    alt: "Kasoiyo camp community gathering",
    camp: "kasoiyo",
    caption: "Community members at Kasoiyo camp",
  },
  {
    id: "kasoiyo-2",
    src: "/images/camps/kasoiyo/IMG_5463.jpeg",
    alt: "Livestock program at Kasoiyo",
    camp: "kasoiyo",
    caption: "Our livestock empowerment program",
  },
  {
    id: "kasoiyo-3",
    src: "/images/camps/kasoiyo/IMG_5469.jpeg",
    alt: "Kasoiyo camp activities",
    camp: "kasoiyo",
  },
  {
    id: "kasoiyo-4",
    src: "/images/camps/kasoiyo/IMG_5490.jpeg",
    alt: "Kasoiyo camp members",
    camp: "kasoiyo",
  },
  {
    id: "kasoiyo-5",
    src: "/images/camps/kasoiyo/photo-5783_singular_display_fullPicture.jpeg",
    alt: "Kasoiyo community event",
    camp: "kasoiyo",
  },
  {
    id: "kasoiyo-6",
    src: "/images/camps/kasoiyo/photo-5159_singular_display_fullPicture.jpeg",
    alt: "Kasoiyo camp gathering",
    camp: "kasoiyo",
  },
  {
    id: "kasoiyo-7",
    src: "/images/camps/kasoiyo/photo-5799_singular_display_fullPicture.jpeg",
    alt: "Kasoiyo community members",
    camp: "kasoiyo",
  },

  // ============ CHEBURBUR CAMP ============
  {
    id: "cheburbur-1",
    src: "/images/camps/cheburur/IMG_5891.jpeg",
    alt: "Cheburbur camp community",
    camp: "cheburbur",
    caption: "Cheburbur community members",
  },
  {
    id: "cheburbur-2",
    src: "/images/camps/cheburur/IMG_5892.jpeg",
    alt: "Skills training at Cheburbur",
    camp: "cheburbur",
    caption: "Skills training session",
  },
  {
    id: "cheburbur-3",
    src: "/images/camps/cheburur/IMG_5899.jpeg",
    alt: "Cheburbur camp activities",
    camp: "cheburbur",
  },
  {
    id: "cheburbur-4",
    src: "/images/camps/cheburur/IMG_5900.jpeg",
    alt: "Cheburbur community gathering",
    camp: "cheburbur",
  },
  {
    id: "cheburbur-5",
    src: "/images/camps/cheburur/photo-6960_singular_display_fullPicture.jpeg",
    alt: "Cheburbur camp event",
    camp: "cheburbur",
  },
  {
    id: "cheburbur-6",
    src: "/images/camps/cheburur/photo-6973_singular_display_fullPicture.jpeg",
    alt: "Cheburbur members",
    camp: "cheburbur",
  },
  {
    id: "cheburbur-7",
    src: "/images/camps/cheburur/photo-6980_singular_display_fullPicture.jpeg",
    alt: "Cheburbur community",
    camp: "cheburbur",
  },

  // ============ TALAI CAMP ============
  {
    id: "talai-1",
    src: "/images/camps/talai/IMG_5543.jpeg",
    alt: "Talai camp community gathering",
    camp: "talai",
    caption: "Talai community celebration",
  },
  {
    id: "talai-2",
    src: "/images/camps/talai/IMG_5545.jpeg",
    alt: "Education program at Talai",
    camp: "talai",
    caption: "Supporting education",
  },
  {
    id: "talai-3",
    src: "/images/camps/talai/IMG_5550.jpeg",
    alt: "Talai camp activities",
    camp: "talai",
  },
  {
    id: "talai-4",
    src: "/images/camps/talai/IMG_5563.jpeg",
    alt: "Talai community members",
    camp: "talai",
  },
  {
    id: "talai-5",
    src: "/images/camps/talai/IMG_5578.jpeg",
    alt: "Talai camp event",
    camp: "talai",
  },
  {
    id: "talai-6",
    src: "/images/camps/talai/IMG_5518.jpeg",
    alt: "Talai gathering",
    camp: "talai",
  },
  {
    id: "talai-7",
    src: "/images/camps/talai/IMG_5521.jpeg",
    alt: "Talai camp members",
    camp: "talai",
  },
  {
    id: "talai-8",
    src: "/images/camps/talai/photo-6014_singular_display_fullPicture.jpeg",
    alt: "Talai community",
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
