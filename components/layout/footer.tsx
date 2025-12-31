import Link from "next/link";
import { Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { ORGANIZATION, ADDRESSES, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center">
                <Heart className="w-5 h-5 text-secondary-400 fill-secondary-400" />
              </div>
              <div>
                <span className="font-heading font-bold text-white text-lg leading-tight block">
                  Winners Widows
                </span>
                <span className="text-xs text-neutral-500 leading-tight block -mt-0.5">
                  & Widowers International
                </span>
              </div>
            </Link>
            <p className="text-sm text-neutral-400 mb-4">
              {ORGANIZATION.tagline}
            </p>
            <p className="text-sm text-neutral-400">
              Empowering widows and widowers in rural Kenya through sustainable
              livelihood programs since {ORGANIZATION.founded}.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href={ORGANIZATION.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:bg-primary-900 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={ORGANIZATION.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:bg-primary-900 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={ORGANIZATION.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:bg-primary-900 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-neutral-400 hover:text-secondary-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/donate"
                className="block text-sm text-secondary-400 hover:text-secondary-300 font-medium transition-colors"
              >
                Donate Now
              </Link>
            </nav>
          </div>

          {/* US Office */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-4">
              {ADDRESSES.us.label}
            </h4>
            <address className="not-italic space-y-3">
              <div className="flex gap-3 text-sm">
                <MapPin className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                <span className="text-neutral-400">
                  {ADDRESSES.us.street}
                  <br />
                  {ADDRESSES.us.city}, {ADDRESSES.us.state} {ADDRESSES.us.zip}
                  <br />
                  {ADDRESSES.us.country}
                </span>
              </div>
              <div className="flex gap-3 text-sm">
                <Phone className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                <a
                  href={`tel:${ADDRESSES.us.phone}`}
                  className="text-neutral-400 hover:text-secondary-400 transition-colors"
                >
                  {ADDRESSES.us.phone}
                </a>
              </div>
              <div className="flex gap-3 text-sm">
                <Mail className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                <a
                  href={`mailto:${ADDRESSES.us.email}`}
                  className="text-neutral-400 hover:text-secondary-400 transition-colors"
                >
                  {ADDRESSES.us.email}
                </a>
              </div>
            </address>
          </div>

          {/* Kenya Office */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-4">
              {ADDRESSES.kenya.label}
            </h4>
            <address className="not-italic space-y-3">
              <div className="flex gap-3 text-sm">
                <MapPin className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                <span className="text-neutral-400">
                  {ADDRESSES.kenya.building}
                  <br />
                  {ADDRESSES.kenya.city}
                  <br />
                  {ADDRESSES.kenya.country}
                </span>
              </div>
              <div className="flex gap-3 text-sm">
                <Phone className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                <a
                  href={`tel:${ADDRESSES.kenya.phone}`}
                  className="text-neutral-400 hover:text-secondary-400 transition-colors"
                >
                  {ADDRESSES.kenya.phone}
                </a>
              </div>
              <div className="flex gap-3 text-sm">
                <Mail className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                <a
                  href={`mailto:${ADDRESSES.kenya.email}`}
                  className="text-neutral-400 hover:text-secondary-400 transition-colors"
                >
                  {ADDRESSES.kenya.email}
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
            <p>
              &copy;{" "}
              <Link
                href="/admin-login"
                className="hover:text-neutral-400 transition-colors"
              >
                {currentYear}
              </Link>{" "}
              {ORGANIZATION.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-900/30 text-yellow-500 text-xs font-medium">
                501(c)(3) Status Pending
              </span>
              <Link
                href="/transparency"
                className="hover:text-secondary-400 transition-colors"
              >
                Transparency
              </Link>
              <Link
                href="/contact"
                className="hover:text-secondary-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
