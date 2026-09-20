"use client";

import Link from "next/link";
import { Clock, ArrowRight, ArrowLeft } from "lucide-react";

const BLOG_POSTS = [
  {
    id: "long-lasting-perfumes-indian-summer",
    title: "Best Long-Lasting Perfumes for Indian Climate & High Heat",
    category: "Summer Guide",
    readTime: "4 min read",
    excerpt: "Why fresh citrus and aquatic fragrances perform best in Pune and Indian humidity, and how concentrated perfume oils prevent rapid evaporation in summer heat.",
    content: [
      "In India's warm tropical and subtropical climate, high ambient heat causes top fragrance notes like bergamot, lemon, and neroli to vaporize rapidly within 30 to 45 minutes.",
      "To ensure your fragrance projects for 8 to 12+ hours throughout an active day, look for perfume compositions with robust base fixatives — such as Haitian vetiver, ambroxan, cedarwood, and white musk.",
      "At RK Perfume, our artisanal impressions (such as our interpretations of Creed Aventus and Roja Elysium) use concentrated fragrance formulations compounded specifically to endure high humidity without disappearing.",
    ],
    tag: "Trending Advice"
  },
  {
    id: "perfume-vs-attar-differences",
    title: "Perfume vs Attar: Understanding the Key Differences Before You Buy",
    category: "Fragrance Knowledge",
    readTime: "5 min read",
    excerpt: "Unpack the crucial differences between alcohol-based Eau de Parfums and traditional non-alcoholic concentrated perfume oils (Ittar/Attar).",
    content: [
      "The primary distinction between Western-style perfumes and traditional Arabian attars lies in the carrier base. Spray perfumes use cosmetic-grade perfumer's alcohol to give high initial sillage and aerial projection.",
      "Attars (or Ittars), by contrast, are 100% pure concentrated fragrance oils suspended in natural sandalwood or carrier oils, completely free from alcohol. They sit closer to the skin, reacting with your body warmth to create a deeply intimate, lingering trail that can last up to 24 hours on cotton garments.",
      "At our Tulshibaug boutique in Pune, many fragrance connoisseurs prefer applying an attar base onto pulse points followed by a complementary Eau de Parfum spray for unmatched longevity and sillage.",
    ],
    tag: "Must Read"
  },
  {
    id: "best-perfumes-under-999-pune",
    title: "Top 7 Best-Selling Luxury Perfumes Under ₹999 in Pune",
    category: "Budget Picks",
    readTime: "3 min read",
    excerpt: "You don't need to spend ₹15,000 to smell phenomenal. Discover our most acclaimed artisanal impressions and attars under ₹999.",
    content: [
      "Luxury fragrance does not have to come with inflated designer markups. By compounding directly in high concentrations and offering minimalistic packaging, RK Perfume provides world-class scents starting from just ₹299 to ₹999.",
      "Top contenders under ₹999 include our Lattafa Khamrah Qahwa impression (rich coffee, praline and dates), Royal Arabian Oud Attar, and our popular Gourmet Discovery Box (4 x 20ml bottles for ₹999).",
      "Visit our Tulshibaug shop to test any fragrance on sample strips or skin before making your choice.",
    ],
    tag: "Budget Guide"
  },
  {
    id: "how-to-choose-signature-scent",
    title: "How to Choose Your Signature Scent: A Beginner's 4-Step Guide",
    category: "Buying Advice",
    readTime: "6 min read",
    excerpt: "From discovering your fragrance family (Woody, Fresh, Oriental, Gourmand) to testing on skin and matching occasions.",
    content: [
      "Step 1: Identify your dominant olfactory family. If you prefer crisp clean linens, go for Aquatic/Citrus. If you love cozy warmth, look into Amber & Sweet Vanilla. For power and authority, Woody Oud is unmatched.",
      "Step 2: Never judge a perfume solely from the first spray on paper. Allow 15 minutes for the alcohol flash-off so the heart and base notes reveal themselves.",
      "Step 3: Test on your own skin. Skin pH, natural moisture, and body temperature dramatically alter how notes evolve over 6 hours.",
      "Step 4: Use our interactive online Perfume Finder tool or try our 4-piece Discovery Box to test multiple profiles without risk.",
    ],
    tag: "Masterclass"
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F3] pt-32 pb-24 text-[#1A2024]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#5A646B] hover:text-[#1A2024] mb-8 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        {/* Page Header */}
        <div className="border-b border-black/[0.08] pb-8 mb-12 text-center sm:text-left">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium block mb-2">
            The Olfactory Journal
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#1A2024] uppercase tracking-[0.1em] font-normal mb-4">
            Fragrance Buying Guides
          </h1>
          <p className="text-[#5A646B] text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            Insights, wearing tips, and scent education curated by master perfumers at RK Perfume, Tulshibaug, Pune.
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white p-8 sm:p-10 border border-black/[0.06] shadow-[0_2px_20px_rgba(0,0,0,0.02)] hover:border-black/20 transition-all"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#8E98A0] mb-3">
                <span className="px-2.5 py-1 bg-amber-50 text-amber-900 uppercase tracking-widest text-[10px] font-medium">
                  {post.category}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {post.readTime}
                </span>
                <span>·</span>
                <span className="text-emerald-700 font-medium">
                  {post.tag}
                </span>
              </div>

              <h2 className="font-heading text-xl sm:text-2xl uppercase tracking-wide text-[#1A2024] font-normal mb-4">
                {post.title}
              </h2>

              <p className="text-sm text-[#5A646B] leading-relaxed mb-6 font-light">
                {post.excerpt}
              </p>

              <div className="space-y-3 border-t border-black/[0.05] pt-6 mb-6 text-xs sm:text-sm text-[#3E454B] leading-relaxed font-light">
                {post.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <Link
                  href="/collections"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[#1A2024] hover:text-[#C5A059] transition-colors"
                >
                  <span>Explore Matching Fragrances</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Discovery Set Banner */}
        <div className="mt-16 p-8 sm:p-10 bg-[#1A2024] text-white text-center sm:text-left sm:flex items-center justify-between gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block mb-2">
              Try Before You Buy
            </span>
            <h3 className="font-heading text-2xl uppercase tracking-wider mb-2 font-normal">
              Not Sure Where To Begin?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl font-light">
              Get our 4 x 20ml Luxury Discovery Box for just ₹999. Pick 4 fragrances to test in your daily routine before ordering full 100ml bottles.
            </p>
          </div>
          <Link
            href="/collections"
            className="mt-6 sm:mt-0 shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-[#C5A059] text-[#1A2024] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#b08c45] transition-colors"
          >
            <span>Explore Discovery Set</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
