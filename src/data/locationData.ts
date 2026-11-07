export interface LocationData {
  name: string;
  metaTitle: string;
  metaDescription: string;
  localInfo: {
    landmarks: string[];
    roads: string[];
  };
  nearby: Array<{ name: string; slug: string }>;
}

export const locationData: Record<string, LocationData> = {
  // Core Service Areas - RH10 Radius
  "crawley": {
    name: "Crawley",
    metaTitle: "Gutter Cleaning Crawley | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Crawley. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["County Mall", "Tilgate Park", "Crawley Station", "The Hawth Theatre", "Broadfield Park", "Three Bridges"],
      roads: ["High Street", "The Boulevard", "London Road", "Ifield Road", "Brighton Road", "Station Way", "Haslett Avenue"]
    },
    nearby: [
      { name: "Horsham", slug: "horsham" },
      { name: "East Grinstead", slug: "east-grinstead" },
      { name: "Horley", slug: "horley" },
    ],
  },
  "horsham": {
    name: "Horsham",
    metaTitle: "Gutter Cleaning Horsham | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Horsham. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Horsham Town Centre", "Horsham Park", "The Capitol Theatre", "Horsham Museum", "Carfax"],
      roads: ["North Street", "West Street", "East Street", "South Street", "Albion Way", "Denne Road", "Park Way"]
    },
    nearby: [
      { name: "Crawley", slug: "crawley" },
      { name: "Henfield", slug: "henfield" },
      { name: "Billingshurst", slug: "billingshurst" },
    ],
  },
  "east-grinstead": {
    name: "East Grinstead",
    metaTitle: "Gutter Cleaning East Grinstead | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in East Grinstead. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["East Grinstead High Street", "Sackville College", "East Court", "Bluebell Railway"],
      roads: ["London Road", "High Street", "Ship Street", "West Street", "Railway Approach", "Moat Road"]
    },
    nearby: [
      { name: "Crawley", slug: "crawley" },
      { name: "Lingfield", slug: "lingfield" },
      { name: "Copthorne", slug: "copthorne" },
    ],
  },
  "haywards-heath": {
    name: "Haywards Heath",
    metaTitle: "Gutter Cleaning Haywards Heath | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Haywards Heath. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Haywards Heath Station", "Victoria Park", "Muster Green", "Ouse Valley Viaduct", "Borde Hill Garden"],
      roads: ["South Road", "The Broadway", "Perrymount Road", "Colwell Road", "Franklynn Road", "Butlers Green Road"]
    },
    nearby: [
      { name: "Burgess Hill", slug: "burgess-hill" },
      { name: "Uckfield", slug: "uckfield" },
      { name: "Hassocks", slug: "hassocks" },
    ],
  },
  "burgess-hill": {
    name: "Burgess Hill",
    metaTitle: "Gutter Cleaning Burgess Hill | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Burgess Hill. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Burgess Hill Station", "St John's Park", "The Martlets Shopping Centre", "Queens Hall"],
      roads: ["Church Road", "Station Road", "Junction Road", "London Road", "Keymer Road", "Folders Lane"]
    },
    nearby: [
      { name: "Hassocks", slug: "hassocks" },
      { name: "Haywards Heath", slug: "haywards-heath" },
      { name: "Ditchling", slug: "ditchling" },
    ],
  },
  "reigate": {
    name: "Reigate",
    metaTitle: "Gutter Cleaning Reigate | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Reigate. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Reigate Castle", "Priory Park", "Reigate Caves", "Reigate High Street"],
      roads: ["High Street", "Bell Street", "Church Street", "West Street", "London Road", "Gatton Road"]
    },
    nearby: [
      { name: "Redhill", slug: "redhill" },
      { name: "Dorking", slug: "dorking" },
      { name: "Horley", slug: "horley" },
    ],
  },
  "redhill": {
    name: "Redhill",
    metaTitle: "Gutter Cleaning Redhill | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Redhill. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Redhill Station", "Memorial Park", "Redhill Town Centre", "Earlswood Common"],
      roads: ["Station Road", "London Road", "High Street", "Brighton Road", "Philanthropic Road", "Pendleton Road"]
    },
    nearby: [
      { name: "Reigate", slug: "reigate" },
      { name: "Horley", slug: "horley" },
      { name: "Merstham", slug: "merstham" },
    ],
  },
  "dorking": {
    name: "Dorking",
    metaTitle: "Gutter Cleaning Dorking | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Dorking. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Dorking High Street", "Box Hill", "Deepdene", "Pippbrook", "St Martin's Church"],
      roads: ["High Street", "West Street", "South Street", "Station Road", "London Road", "Reigate Road"]
    },
    nearby: [
      { name: "Leatherhead", slug: "leatherhead" },
      { name: "Reigate", slug: "reigate" },
      { name: "Horsham", slug: "horsham" },
    ],
  },
  "horley": {
    name: "Horley",
    metaTitle: "Gutter Cleaning Horley | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Horley. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Horley Town Centre", "Horley Recreation Ground", "Gatwick Airport nearby"],
      roads: ["High Street", "Victoria Road", "Balcombe Road", "Church Road", "Station Road", "Massetts Road"]
    },
    nearby: [
      { name: "Gatwick", slug: "gatwick" },
      { name: "Crawley", slug: "crawley" },
      { name: "Reigate", slug: "reigate" },
    ],
  },
  "copthorne": {
    name: "Copthorne",
    metaTitle: "Gutter Cleaning Copthorne | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Copthorne. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Copthorne Village", "Worth Way", "Copthorne Hotel"],
      roads: ["Copthorne Road", "Copthorne Common Road", "Borers Arms Road", "Snow Hill"]
    },
    nearby: [
      { name: "Crawley", slug: "crawley" },
      { name: "East Grinstead", slug: "east-grinstead" },
      { name: "Horley", slug: "horley" },
    ],
  },
  "three-bridges": {
    name: "Three Bridges",
    metaTitle: "Gutter Cleaning Three Bridges | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Three Bridges. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Three Bridges Station", "Worth Park", "Pound Hill"],
      roads: ["Three Bridges Road", "Gales Drive", "Hazelwick Road", "Crawley Avenue"]
    },
    nearby: [
      { name: "Crawley", slug: "crawley" },
      { name: "Copthorne", slug: "copthorne" },
      { name: "Horley", slug: "horley" },
    ],
  },
  "gatwick": {
    name: "Gatwick",
    metaTitle: "Gutter Cleaning Gatwick | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Gatwick. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Gatwick Airport", "Gatwick Village", "Manor Royal Business District"],
      roads: ["Lowfield Heath", "Balcombe Road", "Povey Cross Road", "Fleming Way"]
    },
    nearby: [
      { name: "Horley", slug: "horley" },
      { name: "Crawley", slug: "crawley" },
      { name: "Three Bridges", slug: "three-bridges" },
    ],
  },
  "charlwood": {
    name: "Charlwood",
    metaTitle: "Gutter Cleaning Charlwood | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Charlwood. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Charlwood Village", "St Nicholas Church", "Gatwick Airport nearby"],
      roads: ["The Street", "Charlwood Road", "Norwood Hill Road", "Chapel Road"]
    },
    nearby: [
      { name: "Horley", slug: "horley" },
      { name: "Gatwick", slug: "gatwick" },
      { name: "Crawley", slug: "crawley" },
    ],
  },
  "lingfield": {
    name: "Lingfield",
    metaTitle: "Gutter Cleaning Lingfield | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Lingfield. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Lingfield Racecourse", "Lingfield Village", "Old Town"],
      roads: ["High Street", "Plaistow Street", "Newchapel Road", "Godstone Road"]
    },
    nearby: [
      { name: "East Grinstead", slug: "east-grinstead" },
      { name: "Oxted", slug: "oxted" },
      { name: "Crawley", slug: "crawley" },
    ],
  },
  
  // Mid-Surrey Towns
  "epsom": {
    name: "Epsom",
    metaTitle: "Gutter Cleaning Epsom | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Epsom. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Epsom Downs", "Epsom Town Centre", "Epsom Racecourse", "Rosebery Park"],
      roads: ["High Street", "South Street", "Church Street", "East Street", "Ashley Road"]
    },
    nearby: [
      { name: "Ewell", slug: "ewell" },
      { name: "Leatherhead", slug: "leatherhead" },
      { name: "Banstead", slug: "banstead" },
    ],
  },
  "ewell": {
    name: "Ewell",
    metaTitle: "Gutter Cleaning Ewell | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Ewell. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Bourne Hall", "Ewell Village", "Nonsuch Park"],
      roads: ["High Street", "Kingston Road", "Chessington Road", "Reigate Road"]
    },
    nearby: [
      { name: "Epsom", slug: "epsom" },
      { name: "Banstead", slug: "banstead" },
      { name: "Leatherhead", slug: "leatherhead" },
    ],
  },
  "leatherhead": {
    name: "Leatherhead",
    metaTitle: "Gutter Cleaning Leatherhead | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Leatherhead. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Leatherhead Town Centre", "Thorncroft Manor", "Mole Valley"],
      roads: ["High Street", "North Street", "Bridge Street", "Station Road", "Kingston Road"]
    },
    nearby: [
      { name: "Epsom", slug: "epsom" },
      { name: "Dorking", slug: "dorking" },
      { name: "Guildford", slug: "guildford" },
    ],
  },
  "bookham": {
    name: "Bookham",
    metaTitle: "Gutter Cleaning Bookham | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Bookham. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Bookham Station", "St Nicolas Church", "Bookham Common"],
      roads: ["High Street", "Lower Road", "Church Road", "Eastwick Road"]
    },
    nearby: [
      { name: "Leatherhead", slug: "leatherhead" },
      { name: "Dorking", slug: "dorking" },
      { name: "Epsom", slug: "epsom" },
    ],
  },
  "ashtead": {
    name: "Ashtead",
    metaTitle: "Gutter Cleaning Ashtead | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Ashtead. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Ashtead Common", "Ashtead Village", "The Street"],
      roads: ["The Street", "Barnett Wood Lane", "Skinners Lane", "Craddocks Avenue"]
    },
    nearby: [
      { name: "Leatherhead", slug: "leatherhead" },
      { name: "Epsom", slug: "epsom" },
      { name: "Bookham", slug: "bookham" },
    ],
  },
  "guildford": {
    name: "Guildford",
    metaTitle: "Gutter Cleaning Guildford | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Guildford. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Guildford Castle", "Guildford Cathedral", "High Street", "University of Surrey"],
      roads: ["High Street", "North Street", "Bridge Street", "Onslow Street", "Woodbridge Road"]
    },
    nearby: [
      { name: "Woking", slug: "woking" },
      { name: "Godalming", slug: "godalming" },
      { name: "Leatherhead", slug: "leatherhead" },
    ],
  },
  "godalming": {
    name: "Godalming",
    metaTitle: "Gutter Cleaning Godalming | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Godalming. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Godalming High Street", "Charterhouse School", "River Wey"],
      roads: ["High Street", "Bridge Street", "Church Street", "Farncombe Street", "Meadrow"]
    },
    nearby: [
      { name: "Guildford", slug: "guildford" },
      { name: "Haslemere", slug: "haslemere" },
      { name: "Cranleigh", slug: "cranleigh" },
    ],
  },
  "woking": {
    name: "Woking",
    metaTitle: "Gutter Cleaning Woking | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Woking. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Woking Town Centre", "The Lightbox Gallery", "Shah Jahan Mosque"],
      roads: ["High Street", "Chertsey Road", "Maybury Road", "Oriental Road", "Goldsworth Road"]
    },
    nearby: [
      { name: "Guildford", slug: "guildford" },
      { name: "Godalming", slug: "godalming" },
      { name: "Leatherhead", slug: "leatherhead" },
    ],
  },
  "farnham": {
    name: "Farnham",
    metaTitle: "Gutter Cleaning Farnham | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Farnham. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Farnham Castle", "Farnham Town Centre", "The Maltings"],
      roads: ["The Borough", "West Street", "East Street", "South Street", "Castle Street"]
    },
    nearby: [
      { name: "Haslemere", slug: "haslemere" },
      { name: "Godalming", slug: "godalming" },
      { name: "Guildford", slug: "guildford" },
    ],
  },
  "cranleigh": {
    name: "Cranleigh",
    metaTitle: "Gutter Cleaning Cranleigh | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Cranleigh. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Cranleigh Village", "Cranleigh Arts Centre", "Vachery Pond"],
      roads: ["High Street", "Knowle Lane", "Horsham Road", "Ewhurst Road"]
    },
    nearby: [
      { name: "Godalming", slug: "godalming" },
      { name: "Guildford", slug: "guildford" },
      { name: "Horsham", slug: "horsham" },
    ],
  },
  "haslemere": {
    name: "Haslemere",
    metaTitle: "Gutter Cleaning Haslemere | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Haslemere. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Haslemere Town Centre", "Haslemere Museum", "Hindhead"],
      roads: ["High Street", "Wey Hill", "West Street", "Lower Street", "Shepherds Hill"]
    },
    nearby: [
      { name: "Godalming", slug: "godalming" },
      { name: "Guildford", slug: "guildford" },
      { name: "Cranleigh", slug: "cranleigh" },
    ],
  },
  
  // West Sussex Coastal Belt
  "worthing": {
    name: "Worthing",
    metaTitle: "Gutter Cleaning Worthing | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Worthing. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Worthing Pier", "Goring", "Durrington", "Broadwater", "Worthing Pavilion Theatre"],
      roads: ["Chapel Road", "Broadwater Road", "South Street", "Tarring Road", "The Boulevard", "Marine Parade"]
    },
    nearby: [
      { name: "Lancing", slug: "lancing" },
      { name: "Littlehampton", slug: "littlehampton" },
      { name: "Steyning", slug: "steyning" },
    ],
  },
  "lancing": {
    name: "Lancing",
    metaTitle: "Gutter Cleaning Lancing | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Lancing. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Lancing College", "Lancing Beach", "North Lancing", "South Lancing"],
      roads: ["South Street", "North Road", "Crabtree Lane", "Grinstead Lane", "Brighton Road"]
    },
    nearby: [
      { name: "Worthing", slug: "worthing" },
      { name: "Shoreham-by-Sea", slug: "shoreham-by-sea" },
      { name: "Southwick", slug: "southwick" },
    ],
  },
  "shoreham-by-sea": {
    name: "Shoreham-by-Sea",
    metaTitle: "Gutter Cleaning Shoreham-by-Sea | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Shoreham-by-Sea. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Shoreham Beach", "Shoreham Harbour", "Shoreham Airport", "Adur Ferry Bridge"],
      roads: ["High Street", "Brighton Road", "Old Shoreham Road", "Beach Road", "Mill Lane"]
    },
    nearby: [
      { name: "Lancing", slug: "lancing" },
      { name: "Hove", slug: "hove" },
      { name: "Southwick", slug: "southwick" },
    ],
  },
  "southwick": {
    name: "Southwick",
    metaTitle: "Gutter Cleaning Southwick | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Southwick. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Southwick Green", "The Manor Hall", "Southwick Recreation Ground"],
      roads: ["Southwick Street", "Manor Hall Road", "Beach Road", "Old Shoreham Road"]
    },
    nearby: [
      { name: "Shoreham-by-Sea", slug: "shoreham-by-sea" },
      { name: "Lancing", slug: "lancing" },
      { name: "Hove", slug: "hove" },
    ],
  },
  "steyning": {
    name: "Steyning",
    metaTitle: "Gutter Cleaning Steyning | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Steyning. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Steyning High Street", "Steyning Museum", "St Andrew's Church", "Chanctonbury Ring"],
      roads: ["High Street", "Church Street", "Jarvis Lane", "Mouse Lane", "King's Stone Avenue"]
    },
    nearby: [
      { name: "Worthing", slug: "worthing" },
      { name: "Henfield", slug: "henfield" },
      { name: "Shoreham-by-Sea", slug: "shoreham-by-sea" },
    ],
  },
  "henfield": {
    name: "Henfield",
    metaTitle: "Gutter Cleaning Henfield | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Henfield. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Henfield Common", "The Henfield Museum", "St Peter's Church", "Woods Mill"],
      roads: ["High Street", "Church Lane", "Nep Town Road", "Furners Lane", "Wheatsheaf Road"]
    },
    nearby: [
      { name: "Steyning", slug: "steyning" },
      { name: "Burgess Hill", slug: "burgess-hill" },
      { name: "Horsham", slug: "horsham" },
    ],
  },
  "storrington": {
    name: "Storrington",
    metaTitle: "Gutter Cleaning Storrington | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Storrington. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Storrington Village", "The Downs", "Parham House nearby"],
      roads: ["High Street", "West Street", "School Hill", "Church Street"]
    },
    nearby: [
      { name: "Pulborough", slug: "pulborough" },
      { name: "Worthing", slug: "worthing" },
      { name: "Horsham", slug: "horsham" },
    ],
  },
  "pulborough": {
    name: "Pulborough",
    metaTitle: "Gutter Cleaning Pulborough | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Pulborough. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Pulborough Village", "Pulborough Brooks", "St Mary's Church"],
      roads: ["Lower Street", "Church Hill", "London Road", "Rectory Lane"]
    },
    nearby: [
      { name: "Storrington", slug: "storrington" },
      { name: "Billingshurst", slug: "billingshurst" },
      { name: "Horsham", slug: "horsham" },
    ],
  },
  "littlehampton": {
    name: "Littlehampton",
    metaTitle: "Gutter Cleaning Littlehampton | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Littlehampton. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Littlehampton Harbour", "East Beach", "Look & Sea Centre", "Mewsbrook Park"],
      roads: ["High Street", "Beach Road", "River Road", "Wick Street", "Terminus Road"]
    },
    nearby: [
      { name: "Worthing", slug: "worthing" },
      { name: "Arundel", slug: "arundel" },
      { name: "Bognor Regis", slug: "bognor-regis" },
    ],
  },
  "arundel": {
    name: "Arundel",
    metaTitle: "Gutter Cleaning Arundel | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Arundel. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Arundel Castle", "Arundel Cathedral", "River Arun", "Wildfowl Trust"],
      roads: ["High Street", "Maltravers Street", "Tarrant Street", "Queen Street"]
    },
    nearby: [
      { name: "Littlehampton", slug: "littlehampton" },
      { name: "Worthing", slug: "worthing" },
      { name: "Chichester", slug: "chichester" },
    ],
  },
  "billingshurst": {
    name: "Billingshurst",
    metaTitle: "Gutter Cleaning Billingshurst | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Billingshurst. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Billingshurst Village", "St Mary's Church", "Billingshurst Station"],
      roads: ["High Street", "West Street", "Station Road", "Roman Way"]
    },
    nearby: [
      { name: "Horsham", slug: "horsham" },
      { name: "Pulborough", slug: "pulborough" },
      { name: "Crawley", slug: "crawley" },
    ],
  },
  
  // East Sussex Corridor
  "lewes": {
    name: "Lewes",
    metaTitle: "Gutter Cleaning Lewes | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Lewes. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Lewes Castle", "Anne of Cleves House", "Lewes Priory", "Harvey's Brewery"],
      roads: ["High Street", "Cliffe High Street", "Western Road", "Southover High Street"]
    },
    nearby: [
      { name: "Brighton", slug: "brighton" },
      { name: "Peacehaven", slug: "peacehaven" },
      { name: "Newhaven", slug: "newhaven" },
    ],
  },
  "uckfield": {
    name: "Uckfield",
    metaTitle: "Gutter Cleaning Uckfield | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Uckfield. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Uckfield Town Centre", "Luxford Field", "Bridge Cottage Heritage Centre"],
      roads: ["High Street", "Bell Lane", "New Town", "Church Street", "Manor Road"]
    },
    nearby: [
      { name: "Haywards Heath", slug: "haywards-heath" },
      { name: "Lewes", slug: "lewes" },
      { name: "Crowborough", slug: "crowborough" },
    ],
  },
  "peacehaven": {
    name: "Peacehaven",
    metaTitle: "Gutter Cleaning Peacehaven | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Peacehaven. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Peacehaven Heights", "Meridian Centre", "Centenary Park", "Peacehaven Cliffs"],
      roads: ["South Coast Road", "Meridian Way", "Roderick Avenue", "Dorothy Avenue"]
    },
    nearby: [
      { name: "Newhaven", slug: "newhaven" },
      { name: "Seaford", slug: "seaford" },
      { name: "Lewes", slug: "lewes" },
    ],
  },
  "newhaven": {
    name: "Newhaven",
    metaTitle: "Gutter Cleaning Newhaven | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Newhaven. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Newhaven Fort", "Newhaven Harbour", "Paradise Park", "Newhaven Town Station"],
      roads: ["Bridge Street", "High Street", "Fort Road", "Beach Road", "South Way"]
    },
    nearby: [
      { name: "Peacehaven", slug: "peacehaven" },
      { name: "Seaford", slug: "seaford" },
      { name: "Lewes", slug: "lewes" },
    ],
  },
  "seaford": {
    name: "Seaford",
    metaTitle: "Gutter Cleaning Seaford | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Seaford. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Seaford Head", "Martello Tower", "Seaford Beach", "The Salts Recreation Ground"],
      roads: ["Broad Street", "Church Street", "Sutton Road", "Steyne Road", "Claremont Road"]
    },
    nearby: [
      { name: "Newhaven", slug: "newhaven" },
      { name: "Polegate", slug: "polegate" },
      { name: "Eastbourne", slug: "eastbourne" },
    ],
  },
  "rottingdean": {
    name: "Rottingdean",
    metaTitle: "Gutter Cleaning Rottingdean | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Rottingdean. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Rottingdean Windmill", "The Village Green", "St Margaret's Church"],
      roads: ["High Street", "Marine Drive", "Steyning Road", "Whiteway Lane"]
    },
    nearby: [
      { name: "Brighton", slug: "brighton" },
      { name: "Saltdean", slug: "saltdean" },
      { name: "Peacehaven", slug: "peacehaven" },
    ],
  },
  "saltdean": {
    name: "Saltdean",
    metaTitle: "Gutter Cleaning Saltdean | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Saltdean. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Saltdean Lido", "Saltdean Park", "Coombe Vale", "Longridge Avenue"],
      roads: ["Longridge Avenue", "Coombe Vale", "Arundel Drive West", "Southdown Avenue"]
    },
    nearby: [
      { name: "Rottingdean", slug: "rottingdean" },
      { name: "Peacehaven", slug: "peacehaven" },
      { name: "Brighton", slug: "brighton" },
    ],
  },
  "hove": {
    name: "Hove",
    metaTitle: "Gutter Cleaning Hove | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Hove. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Hove Lawns", "Goldstone Valley", "St Ann's Well Gardens", "Hove Museum", "Hove Lagoon"],
      roads: ["Church Road", "Portland Road", "Old Shoreham Road", "Sackville Road", "Kingsway"]
    },
    nearby: [
      { name: "Brighton", slug: "brighton" },
      { name: "Shoreham-by-Sea", slug: "shoreham-by-sea" },
      { name: "Southwick", slug: "southwick" },
    ],
  },
  "brighton": {
    name: "Brighton",
    metaTitle: "Gutter Cleaning Brighton | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Brighton. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Churchill Square", "Brighton Marina", "The Lanes", "Brighton Pier", "Preston Park"],
      roads: ["North Street", "Western Road", "London Road", "Lewes Road", "Marine Parade"]
    },
    nearby: [
      { name: "Hove", slug: "hove" },
      { name: "Lewes", slug: "lewes" },
      { name: "Rottingdean", slug: "rottingdean" },
    ],
  },
  "eastbourne": {
    name: "Eastbourne",
    metaTitle: "Gutter Cleaning Eastbourne | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Eastbourne. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Eastbourne Pier", "Beachy Head", "Sovereign Harbour", "Devonshire Park"],
      roads: ["Terminus Road", "Seaside Road", "King Edward's Parade", "Pevensey Bay Road"]
    },
    nearby: [
      { name: "Seaford", slug: "seaford" },
      { name: "Peacehaven", slug: "peacehaven" },
      { name: "Hailsham", slug: "hailsham" },
    ],
  },
  
  // North Surrey / Border Catchment
  "banstead": {
    name: "Banstead",
    metaTitle: "Gutter Cleaning Banstead | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Banstead. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Banstead Village", "Banstead Woods", "St Mary's Church"],
      roads: ["High Street", "Bolters Lane", "Park Road", "Winkworth Road"]
    },
    nearby: [
      { name: "Epsom", slug: "epsom" },
      { name: "Ewell", slug: "ewell" },
      { name: "Tadworth", slug: "tadworth" },
    ],
  },
  "chipstead": {
    name: "Chipstead",
    metaTitle: "Gutter Cleaning Chipstead | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Chipstead. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Chipstead Village", "St Margaret's Church", "Chipstead Downs"],
      roads: ["High Road", "Chipstead Valley Road", "Hazelwood Lane"]
    },
    nearby: [
      { name: "Banstead", slug: "banstead" },
      { name: "Coulsdon", slug: "coulsdon" },
      { name: "Tadworth", slug: "tadworth" },
    ],
  },
  "tadworth": {
    name: "Tadworth",
    metaTitle: "Gutter Cleaning Tadworth | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Tadworth. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Tadworth Village", "Epsom Downs", "Tadworth Station"],
      roads: ["Station Road", "Shelvers Way", "Tattenham Crescent", "The Avenue"]
    },
    nearby: [
      { name: "Banstead", slug: "banstead" },
      { name: "Chipstead", slug: "chipstead" },
      { name: "Epsom", slug: "epsom" },
    ],
  },
  "caterham": {
    name: "Caterham",
    metaTitle: "Gutter Cleaning Caterham | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Caterham. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Caterham Town Centre", "The Hill", "Caterham Station"],
      roads: ["High Street", "Croydon Road", "Godstone Road", "Church Road"]
    },
    nearby: [
      { name: "Warlingham", slug: "warlingham" },
      { name: "Oxted", slug: "oxted" },
      { name: "Redhill", slug: "redhill" },
    ],
  },
  "warlingham": {
    name: "Warlingham",
    metaTitle: "Gutter Cleaning Warlingham | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Warlingham. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Warlingham Village", "Warlingham Park School", "St Ambrose Church"],
      roads: ["Farleigh Road", "Limpsfield Road", "Chelsham Road", "Westhall Road"]
    },
    nearby: [
      { name: "Caterham", slug: "caterham" },
      { name: "Oxted", slug: "oxted" },
      { name: "Croydon", slug: "croydon" },
    ],
  },
  "oxted": {
    name: "Oxted",
    metaTitle: "Gutter Cleaning Oxted | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Oxted. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Oxted Town Centre", "Master Park", "St Mary's Church"],
      roads: ["Station Road East", "Station Road West", "High Street", "Bluehouse Lane"]
    },
    nearby: [
      { name: "Caterham", slug: "caterham" },
      { name: "Warlingham", slug: "warlingham" },
      { name: "Lingfield", slug: "lingfield" },
    ],
  },
  "edenbridge": {
    name: "Edenbridge",
    metaTitle: "Gutter Cleaning Edenbridge | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Edenbridge. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Edenbridge Town Centre", "Hever Castle nearby", "St Peter & St Paul Church"],
      roads: ["High Street", "Marlpit Hill", "Station Road", "Four Elms Road"]
    },
    nearby: [
      { name: "Oxted", slug: "oxted" },
      { name: "East Grinstead", slug: "east-grinstead" },
      { name: "Lingfield", slug: "lingfield" },
    ],
  },
  "hassocks": {
    name: "Hassocks",
    metaTitle: "Gutter Cleaning Hassocks | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Hassocks. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Hassocks Station", "Adastra Park", "Clayton Windmills", "St Francis Church"],
      roads: ["Keymer Road", "Lodge Lane", "Grand Avenue", "Stonepound Road"]
    },
    nearby: [
      { name: "Burgess Hill", slug: "burgess-hill" },
      { name: "Ditchling", slug: "ditchling" },
      { name: "Haywards Heath", slug: "haywards-heath" },
    ],
  },
  "ditchling": {
    name: "Ditchling",
    metaTitle: "Gutter Cleaning Ditchling | Local Gutter Cleaners Near You",
    metaDescription: "Trusted gutter cleaning in Ditchling. Clear blocked gutters, downpipes & rooflines. Local, insured & reliable service. Get a free quote today.",
    localInfo: {
      landmarks: ["Ditchling Beacon", "Ditchling Museum", "St Margaret's Church"],
      roads: ["High Street", "West Street", "South Street", "Lodge Hill Lane", "Beacon Road"]
    },
    nearby: [
      { name: "Hassocks", slug: "hassocks" },
      { name: "Burgess Hill", slug: "burgess-hill" },
      { name: "Brighton", slug: "brighton" },
    ],
  },
  "portslade": {
    name: "Portslade",
    metaTitle: "Gutter Cleaning Portslade | Local Gutter Cleaners Near You",
    metaDescription: "Gutter cleaning in Portslade & Mile Oak. Blocked gutters and downpipes cleared, fascias washed. Fully insured. Free photo quotes – call 01273 569347.",
    localInfo: {
      landmarks: ["Portslade Station", "Portslade Old Village", "Easthill Park", "Foredown Tower", "Mile Oak"],
      roads: ["Boundary Road", "Station Road", "Old Shoreham Road", "Mile Oak Road", "Trafalgar Road"]
    },
    nearby: [
      { name: "Hove", slug: "hove" },
      { name: "Southwick", slug: "southwick" },
      { name: "Shoreham-by-Sea", slug: "shoreham-by-sea" },
    ],
  },
  "croydon": {
    name: "Croydon",
    metaTitle: "Gutter Cleaning Croydon | Local Gutter Cleaners Near You",
    metaDescription: "Gutter cleaning in Croydon. Blocked gutters and downpipes cleared, fascias and soffits washed. Fully insured. Free photo quotes – call 01273 569347.",
    localInfo: {
      landmarks: ["East Croydon Station", "Croydon Minster", "Fairfield Halls", "Lloyd Park", "Wandle Park"],
      roads: ["George Street", "London Road", "Brighton Road", "Wellesley Road", "Addiscombe Road"]
    },
    nearby: [
      { name: "Caterham", slug: "caterham" },
      { name: "Warlingham", slug: "warlingham" },
      { name: "Purley", slug: "purley" },
    ],
  },
  "hailsham": {
    name: "Hailsham",
    metaTitle: "Gutter Cleaning Hailsham | Local Gutter Cleaners Near You",
    metaDescription: "Gutter cleaning in Hailsham and nearby villages. Blocked gutters and downpipes cleared, conservatory gutters and fascias cleaned. Fully insured. Free photo quotes.",
    localInfo: {
      landmarks: ["Hailsham High Street", "Hailsham Pavilion", "The Cuckoo Trail", "St Mary's Church"],
      roads: ["High Street", "George Street", "South Road", "Ersham Road", "London Road", "Battle Road"]
    },
    nearby: [
      { name: "Polegate", slug: "polegate" },
      { name: "Eastbourne", slug: "eastbourne" },
      { name: "Uckfield", slug: "uckfield" },
    ],
  },
  "polegate": {
    name: "Polegate",
    metaTitle: "Gutter Cleaning Polegate | Local Gutter Cleaners Near You",
    metaDescription: "Gutter cleaning in Polegate, Willingdon and Wannock. Blocked gutters cleared, downpipes flushed, fascias washed. Fully insured. Free photo quotes – call 01273 569347.",
    localInfo: {
      landmarks: ["Polegate Windmill", "Polegate Station", "The Cuckoo Trail", "Wannock Glen"],
      roads: ["High Street", "Station Road", "Eastbourne Road", "Wannock Road", "Dittons Road"]
    },
    nearby: [
      { name: "Eastbourne", slug: "eastbourne" },
      { name: "Hailsham", slug: "hailsham" },
      { name: "Seaford", slug: "seaford" },
    ],
  },
  "crowborough": {
    name: "Crowborough",
    metaTitle: "Gutter Cleaning Crowborough | Local Gutter Cleaners Near You",
    metaDescription: "Gutter cleaning in Crowborough. Leaf-blocked gutters near Ashdown Forest cleared, downpipes flushed, gutter guards fitted. Fully insured. Free photo quotes.",
    localInfo: {
      landmarks: ["Crowborough Cross", "Crowborough Beacon", "Ashdown Forest", "Goldsmiths Leisure Centre"],
      roads: ["High Street", "Beacon Road", "London Road", "Croft Road", "Church Road"]
    },
    nearby: [
      { name: "Uckfield", slug: "uckfield" },
      { name: "East Grinstead", slug: "east-grinstead" },
      { name: "Edenbridge", slug: "edenbridge" },
    ],
  },
  "merstham": {
    name: "Merstham",
    metaTitle: "Gutter Cleaning Merstham | Local Gutter Cleaners Near You",
    metaDescription: "Gutter cleaning in Merstham. Blocked gutters and downpipes cleared, fascias and soffits washed. Fully insured. Free photo quotes – call 01273 569347.",
    localInfo: {
      landmarks: ["Merstham Village", "Quality Street", "Merstham Station", "Merstham Recreation Ground"],
      roads: ["High Street", "Station Road North", "Nutfield Road", "London Road South", "Bletchingley Road"]
    },
    nearby: [
      { name: "Redhill", slug: "redhill" },
      { name: "Reigate", slug: "reigate" },
      { name: "Chipstead", slug: "chipstead" },
    ],
  },
  "purley": {
    name: "Purley",
    metaTitle: "Gutter Cleaning Purley | Local Gutter Cleaners Near You",
    metaDescription: "Gutter cleaning in Purley. Blocked gutters and downpipes cleared, conservatory gutters cleaned, high-level access for taller homes. Fully insured. Free photo quotes.",
    localInfo: {
      landmarks: ["Purley Cross", "Purley Station", "Purley Downs", "Foxley Wood"],
      roads: ["Brighton Road", "Godstone Road", "Russell Hill Road", "Downs Court Road", "Higher Drive"]
    },
    nearby: [
      { name: "Croydon", slug: "croydon" },
      { name: "Coulsdon", slug: "coulsdon" },
      { name: "Caterham", slug: "caterham" },
    ],
  },
  "coulsdon": {
    name: "Coulsdon",
    metaTitle: "Gutter Cleaning Coulsdon | Local Gutter Cleaners Near You",
    metaDescription: "Gutter cleaning in Coulsdon. Blocked gutters and downpipes cleared, fascias washed, gutter guards fitted. Fully insured. Free photo quotes – call 01273 569347.",
    localInfo: {
      landmarks: ["Farthing Downs", "Coulsdon Common", "Coulsdon Town Station", "Happy Valley"],
      roads: ["Brighton Road", "Chipstead Valley Road", "Coulsdon Road", "Lion Green Road", "Marlpit Lane"]
    },
    nearby: [
      { name: "Purley", slug: "purley" },
      { name: "Chipstead", slug: "chipstead" },
      { name: "Banstead", slug: "banstead" },
    ],
  },
  "chichester": {
    name: "Chichester",
    metaTitle: "Gutter Cleaning Chichester | Local Gutter Cleaners Near You",
    metaDescription: "Gutter cleaning in Chichester. Gutters on period and modern homes cleared, downpipes flushed, high-level access for taller buildings. Fully insured. Free photo quotes.",
    localInfo: {
      landmarks: ["Chichester Cathedral", "Chichester Market Cross", "Chichester Festival Theatre", "Priory Park", "Chichester Harbour"],
      roads: ["North Street", "South Street", "East Street", "West Street", "Broyle Road", "Westhampnett Road"]
    },
    nearby: [
      { name: "Bognor Regis", slug: "bognor-regis" },
      { name: "Arundel", slug: "arundel" },
      { name: "Littlehampton", slug: "littlehampton" },
    ],
  },
  "bognor-regis": {
    name: "Bognor Regis",
    metaTitle: "Gutter Cleaning Bognor Regis | Local Gutter Cleaners Near You",
    metaDescription: "Gutter cleaning in Bognor Regis and Aldwick. Blocked gutters cleared, downpipes flushed, fascias washed. Fully insured. Free photo quotes.",
    localInfo: {
      landmarks: ["Bognor Regis Pier", "Hotham Park", "Bognor Regis Station", "Aldwick"],
      roads: ["London Road", "High Street", "Aldwick Road", "Hawthorn Road", "Upper Bognor Road"]
    },
    nearby: [
      { name: "Chichester", slug: "chichester" },
      { name: "Littlehampton", slug: "littlehampton" },
      { name: "Arundel", slug: "arundel" },
    ],
  },
};
