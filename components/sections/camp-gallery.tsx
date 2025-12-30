"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_PHOTOS, CAMP_LABELS, type CampId } from "@/lib/gallery-data";
import { X } from "lucide-react";

const FILTER_OPTIONS: { value: CampId | "all"; label: string }[] = [
  { value: "all", label: "All Photos" },
  { value: "kasoiyo", label: "Kasoiyo Camp" },
  { value: "cheburbur", label: "Cheburbur Camp" },
  { value: "talai", label: "Talai Camp" },
];

export function CampGallery() {
  const [activeFilter, setActiveFilter] = useState<CampId | "all">("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxCaption, setLightboxCaption] = useState<string>("");

  const filteredPhotos =
    activeFilter === "all"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.camp === activeFilter);

  const openLightbox = (src: string, caption?: string) => {
    setLightboxImage(src);
    setLightboxCaption(caption || "");
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxCaption("");
  };

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
            Our Impact in Action
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Every photo tells a story of transformation and hope
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => setActiveFilter(option.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === option.value
                  ? "bg-primary-900 text-white shadow-md"
                  : "bg-white text-neutral-700 border border-neutral-300 hover:border-primary-300 hover:bg-primary-50"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        {filteredPhotos.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                  index === 0 ? "col-span-2 row-span-2" : ""
                }`}
                onClick={() => openLightbox(photo.src, photo.caption)}
              >
                <div
                  className={`relative ${
                    index === 0 ? "aspect-square" : "aspect-square"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Camp Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium text-neutral-700 shadow-sm">
                      {CAMP_LABELS[photo.camp]}
                    </span>
                  </div>

                  {/* Caption on hover */}
                  {photo.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-medium">
                        {photo.caption}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-neutral-500">No photos available for this camp yet.</p>
          </div>
        )}

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>
            <div
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={lightboxImage}
                  alt="Gallery image"
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              {lightboxCaption && (
                <p className="text-white text-center mt-4 text-lg">
                  {lightboxCaption}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
