export interface ServiceDetail {
  slug: string;
  /** core = original gutter services; specialist = specialist services; customer = customer-type services */
  category?: "core" | "specialist" | "customer";
  /** One-line summary used on hub cards and link lists. */
  shortDescription?: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whatIncluded: string[];
  process: {
    title: string;
    steps: string[];
  };
  benefits: string[];
  faqs: Array<{ question: string; answer: string }>;
}

import { additionalServicesData } from "./additionalServicesData";

const coreServicesData: ServiceDetail[] = [
  {
    slug: "gutter-cleaning-near-me",
    title: "Professional Gutter Cleaning Near Me",
    metaTitle: "Gutter Cleaning Service | Gutter Vacuum Clearance | Sussex & Surrey",
    metaDescription: "What our gutter cleaning service includes: ground-level gutter vacuum clearance, downpipe flushing and before/after photos. From £80. Brighton, Sussex & Surrey.",
    h1: "Professional Gutter Cleaning Service in Brighton, Sussex & Surrey",
    intro: "Blocked or overflowing gutters can cause serious damage to your property. Water overflow leads to damp walls, damaged fascias, cracked foundations and costly repairs. Our professional gutter cleaning service uses industry-leading gutter vacuum systems to safely and thoroughly clear your gutters, downpipes and gullies—protecting your home from water damage all year round.",
    whatIncluded: [
      "Full gutter clearance using professional SkyVac gutter vacuum equipment",
      "Downpipe unblocking and flushing to ensure proper drainage",
      "Removal of leaves, moss, silt and debris",
      "Ground-level cleaning with minimal disruption",
      "Before and after photos sent on request",
      "Minor gutter repairs identified during cleaning",
      "Fully insured service with trained operatives"
    ],
    process: {
      title: "Our Gutter Cleaning Process",
      steps: [
        "We inspect your gutters and downpipes to assess the level of blockage and identify any damage",
        "Using our professional gutter vacuum system, we clear all debris from your gutters without the need for ladders",
        "We flush downpipes to ensure water flows freely and check for any blockages",
        "We clean up any mess and provide before/after photos if requested",
        "We advise on any minor repairs needed and provide a no-obligation quote"
      ]
    },
    benefits: [
      "Prevent damp and water damage to walls, ceilings and foundations",
      "Protect your roof structure, fascias and soffits from rot and decay",
      "Avoid expensive structural repairs caused by blocked gutters",
      "Reduce the risk of pest infestations nesting in debris-filled gutters",
      "Maintain your property's kerb appeal and value",
      "Fully insured service for your peace of mind"
    ],
    faqs: [
      {
        question: "How often should I get my gutters cleaned?",
        answer: "We recommend having your gutters cleaned at least twice a year—typically in late autumn after leaves have fallen, and again in spring. Properties surrounded by trees may need more frequent cleaning every 3-4 months to prevent blockages."
      },
      {
        question: "Do you use ladders to clean gutters?",
        answer: "We primarily use professional SkyVac gutter vacuum systems that allow us to clean gutters safely from ground level. This is safer, faster, and causes less disruption to your property. For particularly stubborn blockages or repairs, we may use ladders where necessary."
      },
      {
        question: "Can you clean gutters above conservatories?",
        answer: "Yes, our gutter vacuum equipment is ideal for cleaning gutters above conservatories, extensions and other hard-to-reach areas without the risk of damaging fragile roofs."
      },
      {
        question: "Do I need to be home during the gutter cleaning?",
        answer: "No, you don't need to be home as long as we have access to the outside of your property. We can send you before and after photos once the work is complete."
      },
      {
        question: "Are you insured?",
        answer: "Yes, we are fully insured with £5 million public liability insurance. All our operatives are trained and experienced in safe gutter cleaning practices."
      },
      {
        question: "What are the signs that my gutters need cleaning?",
        answer: "Common signs include: water overflowing from gutters during rain, sagging gutters, visible plant growth, water stains on exterior walls, damp patches inside your home, or birds nesting in your gutters."
      }
    ]
  },
  {
    slug: "blocked-gutters-gutter-unblocking",
    title: "Blocked Gutters & Gutter Unblocking Service",
    metaTitle: "Blocked Gutters Cleared Fast | Gutter Unblocking | Sussex & Surrey",
    metaDescription: "Blocked gutter clearance across Brighton, Hove, Sussex & Surrey. Fast response to overflowing gutters causing damp and leaks. Call 01273 569347 today.",
    h1: "Blocked Gutters & Emergency Gutter Unblocking Service",
    intro: "Blocked gutters don't just overflow—they cause serious damage. When gutters are clogged with leaves, moss and debris, rainwater has nowhere to go. It overflows onto walls, seeps into foundations, damages fascias and can even cause internal damp and structural problems. Our emergency gutter unblocking service provides fast response times across Brighton, Hove, Sussex and Surrey to clear blocked gutters before they cause expensive damage.",
    whatIncluded: [
      "Fast-response emergency gutter unblocking service",
      "Complete removal of blockages caused by leaves, moss, silt and debris",
      "High-pressure downpipe flushing to restore full drainage",
      "Professional gutter vacuum equipment for thorough clearance",
      "Same-day or next-day service available",
      "Before and after photographic evidence",
      "Free assessment of any gutter damage caused by blockages"
    ],
    process: {
      title: "How We Unblock Your Gutters",
      steps: [
        "We respond quickly to your call and arrange a convenient visit",
        "We inspect your gutters to locate the blockage and assess any overflow damage",
        "Using professional vacuum and flushing equipment, we clear all blockages from gutters and downpipes",
        "We test water flow to ensure complete drainage",
        "We identify any damage caused by the blockage and advise on repairs if needed"
      ]
    },
    benefits: [
      "Stop water damage to walls, ceilings and foundations immediately",
      "Prevent costly structural repairs from prolonged water overflow",
      "Protect fascias, soffits and brickwork from rot and deterioration",
      "Eliminate damp patches and mould growth inside your property",
      "Restore proper drainage to prevent future flooding",
      "Fast response times for emergency situations"
    ],
    faqs: [
      {
        question: "How quickly can you attend for blocked gutters?",
        answer: "For emergency situations, we aim to attend the same day or within 24 hours depending on your location across Brighton, Hove, Sussex and Surrey. Call us on 01273 569347 and we'll prioritise your job."
      },
      {
        question: "What causes gutters to become blocked?",
        answer: "The most common causes are fallen leaves (especially in autumn), moss and lichen growth, bird nests, silt buildup, and debris blown by wind. Properties near trees are particularly prone to blockages."
      },
      {
        question: "Can blocked gutters cause damp inside my home?",
        answer: "Yes, absolutely. When gutters overflow, water runs down external walls and can penetrate through brickwork, causing damp patches, mould growth and even structural damage if left untreated."
      },
      {
        question: "Do you provide emergency gutter unblocking on weekends?",
        answer: "Yes, we offer emergency call-outs seven days a week including weekends and bank holidays. Contact us and we'll do our best to attend promptly."
      }
    ]
  },
  {
    slug: "downpipe-unblocking",
    title: "Downpipe Unblocking Service",
    metaTitle: "Downpipe Unblocking | Drain Clearance | Brighton & Sussex",
    metaDescription: "Professional downpipe unblocking and drain clearance. Fix overflowing gutters and restore drainage. Fast service across Brighton, Hove, Sussex and Surrey.",
    h1: "Professional Downpipe Unblocking Service",
    intro: "A blocked downpipe can cause your entire gutter system to overflow, even if the gutters themselves are clear. Leaves, moss, tennis balls and even bird nests can lodge in downpipes, preventing rainwater from draining away properly. This leads to overflowing gutters, water damage to walls and fascias, and potential flooding. Our downpipe unblocking service uses high-pressure flushing equipment to clear even the most stubborn blockages and restore full drainage.",
    whatIncluded: [
      "High-pressure downpipe flushing to remove blockages",
      "Inspection of all downpipes and gullies",
      "Removal of debris including leaves, moss, roots and foreign objects",
      "Testing to ensure full water flow is restored",
      "Gutter vacuum clearance if needed",
      "Advice on preventing future downpipe blockages",
      "Fully insured service"
    ],
    process: {
      title: "Our Downpipe Unblocking Process",
      steps: [
        "We inspect your downpipes to locate the blockage",
        "Using specialist equipment, we flush the downpipe with high pressure to dislodge debris",
        "We clear any blockages in underground drains and gullies connected to the downpipe",
        "We test water flow by pouring water into the gutter system",
        "We provide advice on maintenance to prevent future blockages"
      ]
    },
    benefits: [
      "Restore proper drainage and stop gutter overflow immediately",
      "Prevent water damage to walls, foundations and landscaping",
      "Eliminate standing water that attracts mosquitoes and pests",
      "Protect your driveway and patio from water pooling and staining",
      "Avoid the need for expensive gutter or drainage repairs",
      "Fast, effective service with minimal disruption"
    ],
    faqs: [
      {
        question: "How do I know if my downpipe is blocked?",
        answer: "Signs include: gutters overflowing even when they appear clean, water not draining during rainfall, gurgling sounds from the downpipe, or water pooling at the base of the downpipe."
      },
      {
        question: "Can you unblock underground drains connected to downpipes?",
        answer: "Yes, we can clear blockages in the underground drainage that connects to your downpipes, including gullies and soakaways, using specialist drainage equipment."
      },
      {
        question: "What causes downpipes to block?",
        answer: "Common causes include compacted leaves and moss, bird nests, tennis balls or toys, root ingress in older systems, and buildup of silt and debris over time."
      },
      {
        question: "Do you use CCTV to inspect downpipes?",
        answer: "For complex or persistent blockages, we can arrange CCTV drain surveys to identify the exact location and cause of the blockage in underground sections."
      }
    ]
  },
  {
    slug: "gutter-repairs",
    title: "Gutter Repairs Service",
    metaTitle: "Gutter Repairs | Fix Leaking Gutters | Brighton, Sussex & Surrey",
    metaDescription: "Professional gutter repairs for leaking, sagging and damaged gutters. Fast, reliable service across Brighton, Hove, Sussex and Surrey. Free quotes.",
    h1: "Professional Gutter Repairs Service",
    intro: "Damaged, leaking or sagging gutters can cause serious water damage to your property. Cracks, loose joints, corroded sections and sagging gutters allow water to escape, leading to damp walls, rotten fascias, and foundation problems. Our gutter repair service fixes common issues quickly and cost-effectively, restoring your gutter system to full working order and protecting your home from water damage.",
    whatIncluded: [
      "Repair of leaking gutter joints and seams",
      "Replacement of cracked or corroded gutter sections",
      "Re-securing sagging or loose gutters",
      "Realignment of gutters to correct drainage falls",
      "Replacement of damaged brackets and fixings",
      "Minor fascia repairs where gutters have caused damage",
      "Gutter cleaning included with all repair work"
    ],
    process: {
      title: "Our Gutter Repair Process",
      steps: [
        "We inspect your gutters to identify all issues and assess the extent of damage",
        "We provide a clear, no-obligation quote for all necessary repairs",
        "Once approved, we carry out repairs using quality materials and correct techniques",
        "We test the gutter system to ensure proper water flow and no leaks",
        "We clean your gutters as part of the repair service"
      ]
    },
    benefits: [
      "Stop water damage to walls, fascias and foundations",
      "Avoid the high cost of complete gutter replacement",
      "Extend the lifespan of your existing gutter system",
      "Prevent further deterioration and more expensive repairs",
      "Improve the appearance and function of your gutters",
      "Fixed-price quotes with no hidden costs"
    ],
    faqs: [
      {
        question: "What are the most common gutter repairs needed?",
        answer: "The most common repairs include fixing leaking joints, replacing cracked sections, re-securing sagging gutters, replacing corroded brackets, and realigning gutters that have incorrect falls."
      },
      {
        question: "Should I repair or replace my gutters?",
        answer: "If the damage is isolated to a few sections and the rest of the system is sound, repairs are usually the most cost-effective option. We'll advise honestly if replacement would be better value in the long term."
      },
      {
        question: "Do you repair all types of gutters?",
        answer: "Yes, we repair uPVC, cast iron, aluminium and steel gutters. We can source matching materials for older or unusual gutter systems."
      },
      {
        question: "How long do gutter repairs last?",
        answer: "When carried out properly with quality materials, most gutter repairs should last many years. We also recommend regular gutter cleaning to prevent future damage."
      },
      {
        question: "Do you provide a guarantee on repairs?",
        answer: "Yes, we guarantee all our workmanship and materials. The specific guarantee period depends on the type of repair—we'll confirm this when providing your quote."
      }
    ]
  },
  {
    slug: "fascia-soffit-cleaning",
    title: "Fascia & Soffit Cleaning Service",
    metaTitle: "Fascia & Soffit Cleaning | UPVC Cleaning | Brighton & Sussex",
    metaDescription: "Professional fascia and soffit cleaning to restore your roofline. Remove dirt, algae and stains. Fully insured service across Brighton, Hove, Sussex and Surrey.",
    h1: "Professional Fascia & Soffit Cleaning Service",
    intro: "Over time, fascias and soffits become discoloured, stained and covered in algae, moss and grime. This not only looks unsightly but can also hide underlying damage and reduce your property's kerb appeal. Our fascia and soffit cleaning service uses specialist equipment and cleaning solutions to safely restore your roofline to its original condition, making your property look well-maintained and cared for.",
    whatIncluded: [
      "Soft washing of fascias and soffits using gentle, effective cleaning solutions",
      "Removal of algae, moss, lichen and organic growth",
      "Cleaning of gutters, downpipes and bargeboard edges",
      "Rinse with purified water for a streak-free finish",
      "Inspection for any damage or repairs needed",
      "Ground-level cleaning using professional equipment",
      "Fully insured service with experienced operatives"
    ],
    process: {
      title: "Our Fascia & Soffit Cleaning Process",
      steps: [
        "We inspect your fascias and soffits to assess the level of soiling and identify any damage",
        "We apply specialist cleaning solution to break down dirt, algae and stains",
        "Using soft washing techniques, we gently clean all surfaces without damaging uPVC or paintwork",
        "We rinse thoroughly with purified water for a spotless, streak-free finish",
        "We inspect for any repairs needed and provide advice or quotes if requested"
      ]
    },
    benefits: [
      "Restore your property's kerb appeal and appearance",
      "Remove harmful algae and moss that can damage fascias over time",
      "Increase the lifespan of uPVC fascias and soffits",
      "Improve the overall presentation of your property",
      "Spot potential problems like rot or damage early",
      "Safe, effective cleaning without harsh pressure washing"
    ],
    faqs: [
      {
        question: "Will pressure washing damage my fascias and soffits?",
        answer: "We don't use high-pressure washing on fascias and soffits as it can damage uPVC, strip paint, and force water into gaps. We use specialist soft washing techniques that are gentle yet highly effective."
      },
      {
        question: "How often should fascias and soffits be cleaned?",
        answer: "We recommend cleaning every 1-2 years depending on your property's exposure to trees, weather and pollution. Regular cleaning prevents stubborn staining and keeps your roofline looking its best."
      },
      {
        question: "Can you clean painted fascias?",
        answer: "Yes, our soft washing method is safe for painted wood fascias as well as uPVC. We adjust our techniques and solutions to suit the surface type."
      },
      {
        question: "Do you clean the gutters at the same time?",
        answer: "Yes, we can clean your gutters as part of the fascia and soffit cleaning service. This is often the most cost-effective time to have both done together."
      }
    ]
  },
  {
    slug: "gutter-maintenance-plans",
    title: "Annual Gutter Maintenance Plans",
    metaTitle: "Gutter Maintenance Plans | Twice-Yearly Gutter Cleaning | Sussex & Surrey",
    metaDescription: "Annual gutter maintenance plans across Brighton, Hove, Sussex and Surrey. Regular cleaning, priority service, and peace of mind. Book your plan today.",
    h1: "Annual Gutter Maintenance Plans",
    intro: "Prevention is better than cure. Regular gutter maintenance prevents blockages, protects your property from water damage, and catches small problems before they become expensive repairs. Our annual gutter maintenance plans provide scheduled cleaning visits, priority service, and the peace of mind that your gutters are always in good working order. Perfect for homeowners and landlords who want to protect their investment without the hassle of remembering to book.",
    whatIncluded: [
      "Scheduled gutter cleaning visits (twice a year or custom frequency)",
      "Full gutter clearance using professional vacuum equipment",
      "Downpipe flushing and testing",
      "Before and after photos with each visit",
      "Priority booking and emergency call-out service",
      "Free minor repairs up to agreed value per year",
      "Inspection report highlighting any issues or recommended repairs",
      "Reminder service before each scheduled visit",
      "Discounted rates compared to one-off cleans"
    ],
    process: {
      title: "How Our Maintenance Plans Work",
      steps: [
        "Choose your plan frequency (standard twice-yearly or custom schedule)",
        "We schedule your visits at convenient times (typically spring and autumn)",
        "We send you a reminder before each visit",
        "We attend as scheduled, clean your gutters thoroughly, and provide a report",
        "You receive before/after photos and we advise on any issues found",
        "You enjoy peace of mind knowing your gutters are maintained year-round"
      ]
    },
    benefits: [
      "Never forget to book gutter cleaning—we remind you and schedule automatically",
      "Save money with discounted maintenance plan rates",
      "Prevent expensive water damage and structural repairs",
      "Priority service for emergency call-outs if problems occur between visits",
      "Catch minor issues early before they become major problems",
      "Maintain your property value and kerb appeal",
      "Ideal for landlords managing multiple properties"
    ],
    faqs: [
      {
        question: "How often should gutters be cleaned as part of a maintenance plan?",
        answer: "Most properties benefit from twice-yearly cleaning (spring and autumn). Properties surrounded by trees may need quarterly visits. We can tailor a plan to suit your specific needs."
      },
      {
        question: "Can I cancel my maintenance plan?",
        answer: "Yes, maintenance plans are flexible. You can pause or cancel with reasonable notice, though we recommend maintaining regular cleaning to prevent costly problems."
      },
      {
        question: "Do maintenance plans cover repairs?",
        answer: "Minor repairs up to an agreed value are included free each year. Larger repairs are quoted separately but you'll receive priority service and discounted rates as a plan customer."
      },
      {
        question: "Is a maintenance plan suitable for commercial properties?",
        answer: "Absolutely. We provide maintenance plans for residential properties, commercial buildings, rental portfolios and property management companies. Contact us to discuss your requirements."
      },
      {
        question: "Do I get a discount compared to one-off cleaning?",
        answer: "Yes, maintenance plan customers receive discounted rates per visit compared to standard one-off cleans, plus the added benefits of priority service and included minor repairs."
      }
    ]
  }
];

export const servicesData: ServiceDetail[] = [
  ...coreServicesData.map((s) => ({ ...s, category: "core" as const })),
  ...additionalServicesData,
];

export default servicesData;
