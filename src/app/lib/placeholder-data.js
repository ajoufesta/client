// /v1/pubs?day?section
// day: "1" | "2" | "3"
// section: "A" | "B" | "C" | "D"

// example data

const pubs = [
  {
    id: 1,
    pubName: "The Rusty Mug",
    phoneNum: "555-123-4567",
    description:
      "Cozy pub with a rustic atmosphere, serving hearty meals and a variety of drinks.",
    pubLocation: 1,
    teamName: "Mug's Crew",
    menuImageSrc: "https://example.com/menu_image.jpg",
    link: "https://www.instagram.com/therustymug/",
    linkIconId: "instagram",
  },
  {
    id: 2,
    pubName: "The Tipsy Tavern",
    phoneNum: "555-987-6543",
    description:
      "Lively pub known for its signature cocktails and live music performances.",
    pubLocation: 2,
    teamName: "Tipsy Squad",
    menuImageSrc: "https://example.com/menu_image.jpg",
    link: "https://www.example.com/tipsytavern",
    linkIconId: "default",
  },
  {
    id: 3,
    pubName: "The Ale House",
    phoneNum: "555-555-5555",
    description:
      "Traditional English pub offering a wide selection of ales and pub grub.",
    pubLocation: 3,
    teamName: "Ale Enthusiasts",
    menuImageSrc: "https://example.com/menu_image.jpg",
    link: "https://www.example.com/alehouse",
    linkIconId: "default",
  },
  {
    id: 4,
    pubName: "The Barrel Room",
    phoneNum: "555-222-3333",
    description:
      "Hip pub featuring craft beers on tap and artisanal small plates.",
    pubLocation: 4,
    teamName: "Barrel Rollers",
    menuImageSrc: "https://example.com/menu_image.jpg",
    link: "https://www.example.com/barrelroom",
    linkIconId: "default",
  },
];

module.exports = { pubs };
