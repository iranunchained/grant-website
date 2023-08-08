import { IGrantConfig } from "types";

export const GRANT_CONFIGS: Record<string, IGrantConfig> = {
  bafkreiadbnc2srypktdfzq2nsut36agij4trq6rdtgwqfd4r76eda47eku: {
    isOfficial: false,
    historicalRounds: [],
  },

  // ACTIVE If there’s a currentRound it’s active otherwise no

  bafkreigee7suoclu2z3tx7brebnc7b65sxszxrgtdkovqisapasyr62iga: {
    // Goerli - One More Time
    isOfficial: true,
    historicalRounds: [
      {
        tags: ["Devconnect", "Round 1"],
        note: "Raised 5.1 ETH to support Iranian devs attend Devconnect",
        link: "https://forum.iranunchained.org/t/round-1-devconnect/27", // => pretty link
        raised: {
          value: "5.1",
          formatted: "5.1 ETH",
        },
      },
    ],
    // => totalRaised = sum(rounds.raised.value) + current safe balance
  },
  bafkreihyqf55rq4pkhll2yv6thyr3bdckc64pco6akme3sjgckv2eg7jmy: {
    // Goerli - Meta Grant - Tezt
    isOfficial: true,
    historicalRounds: [],
  },
  bafkreigsbk35dn7fucn2dhx24cxa6vmeyjkchm3nmo34nml6z5qxof4jjm: {
    // Goerli - Testing Resizing
    isOfficial: true,
    historicalRounds: [],
  },
  bafkreie446gs74trj4b33fozzm4kdds6vx26vrvv6i2eua5yv7law4wrcu: {
    // Goerli - Internet Freedom For Iran
    isOfficial: true,
    historicalRounds: [],
  },
  bafkreifb53343h3nf6hdmngxrmlgtm7fyuxbwlhcsjsqln5mu544reku3q: {
    // Goerli - False - Shahid Beheshti Squad
    isOfficial: false,
    historicalRounds: [],
  },
  bafkreig4ly3dhe42yilvkb33fp62r7clyhplcy27aa7wi2lwbvglouq4o4: {
    // Supporting Iranian NFT Artists
    isOfficial: true,
    currentRound: {
      tags: ["Round 2"],
    },
    historicalRounds: [
      {
        tags: ["Round 1"],
        note: "Purchased 30 NFTs from Iranian artists (400 Applicants)",
        link: "https://twitter.com/UnchainIran/status/1664038669026484226",
        raised: {
          value: "6.6",
          formatted: "6.6 ETH",
        },
      },
    ],
  },
  bafkreiaayldpo7f3whoxspezqdzh6iotvkuqvzcmucnycfkkphfocfg5qy: {
    // Humanitarian Aid For Iran
    isOfficial: true,
    historicalRounds: [],
    currentRound: {
      tags: [],
    },
  },
  bafkreifkzpfybx4jwupsuw4ek2h7w34om6bnsqfpgoxm7hlsmj6b4gg27y: {
    // Internet Freedom For Iran
    isOfficial: true,
    currentRound: {
      tags: ["Round 4"],
    },
    historicalRounds: [
      {
        tags: ["Round 1", "Internet4I"],
        note: "Funding Internet4I for fighting the internet censorship in Iran",
        link: "https://twitter.com/UnchainIran/status/1655970794575634432",
        raised: {
          value: "5.1",
          formatted: "5.1 ETH",
        },
      },
      {
        tags: ["Round 2", "Game of Trust"],
        note: "Funding Game of Trust to develop secure anonymous communication tools for Iranians",
        link: "https://forum.iranunchained.com/t/internet-freedom-for-iran/16/9",
        raised: {
          value: "5.0",
          formatted: "5.0 ETH",
        },
      },
      {
        tags: ["Round 3", "Internet4I"],
        note: "Funding Internet4I for fighting the internet censorship in Iran",
        link: "https://forum.iranunchained.com/t/free-internet-for-iran-achievements-implementation-objectives-future/63",
        raised: {
          value: "5.1",
          formatted: "5.1 ETH",
        },
      },
    ],
  },
  bafkreigale6eluhex3rc6c7ig2eulkazvoz5evwadpjh4fgkqo4uwfuxwu: {
    // ETH Conferences Scholarship
    isOfficial: true,
    currentRound: {
      tags: ["Round 1", "Istanbul"],
      note: "Funding support for Iranian devs to attend Devconnect and ETHIstanbul",
      link: "https://forum.iranunchained.com/t/eth-conferences-scholarship/13",
    },
  },
  bafkreicoyfx63pjn3lrdndmqxxhhke64sfoxaa774t2bmigqm3nj7bja2y: {
    // Zan Zendegi Azadi Newsletter
    isOfficial: true,
    historicalRounds: [
      {
        tags: ["Round 1"],
        note: "",
        link: "https://forum.iranunchained.com/t/zan-zendegi-azadi-newsletter/12/4",
        raised: {
          value: "5.1",
          formatted: "5.1 ETH",
        },
      },
    ],
  },
  bafybeicuxaazfwjxiglcao3bj6gnwu4c4x2hhe3sksmkpebch5d3px6tza: {
    // unofficial: Mrs. Iran
    isOfficial: false,
    historicalRounds: [],
    currentRound: {
      tags: [],
    },
  },
  bafkreiay66n6yxo2rdacyyct74grjqny7d6ndnpvgkfpg6ncbxsuavulce: {
    // Free Education
    isOfficial: true,
    currentRound: {
      tags: ["Round 1", "Solidity Cohort"],
      note: "Funding support for Women in Blockchain Farsi Free Solidity course over Summer 2023",
      link: "https://forum.iranunchained.com/t/free-education-in-farsi-grant/52/2",
    },
    historicalRounds: [],
  },
};
