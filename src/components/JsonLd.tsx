import { BUSINESS_INFO, SEO } from "@/lib/constants";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${SEO.url}/#store`,
    name: BUSINESS_INFO.name,
    description: SEO.description,
    url: SEO.url,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Credit Card, Debit Card, Net Banking",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.5170",
      longitude: "73.8560",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "21:00",
      },
    ],
    priceRange: "₹299 - ₹4999",
    image: `${SEO.url}/images/luxury_perfume_hero.png`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "350",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      BUSINESS_INFO.social.googleMaps,
      BUSINESS_INFO.social.whatsapp,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
