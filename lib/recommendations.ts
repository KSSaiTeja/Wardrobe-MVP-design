import type { ClothingItem, UserPreferences } from "./types";

// Import the product data from the JSON file
const allClothingItems: ClothingItem[] = [
  {
    id: "ITEM-001",
    name: "Rangita Women Embroidered Thread Work Kurta",
    brand: "Rangita",
    price: 719,
    color: "Green",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/2024/NOVEMBER/27/puBav4y1_125f7c3e441740a6a612ce0f283d2cc1.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-002",
    name: "Rangita Geometric Printed A Line Kurta",
    brand: "Rangita",
    price: 699,
    color: "Off White",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/31978039/2024/12/16/fb6b4503-415f-44b9-8404-2179eab21d991734336129479RangitaWomenPrintedKurta1.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-003",
    name: "Rangita Bandhani Printed Mandarin Collar Roll Up Sleeves A-Line Cotton Kurta",
    brand: "Rangita",
    price: 629,
    color: "Yellow",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/31978060/2024/12/16/629ebc81-11da-4077-b9e2-3e9c8d66e24c1734324330589RangitaWomenBandhaniPrintedKurta1.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-004",
    name: "House of Pataudi Jashn Ethnic Motifs Embroidered Zari Work Angrakha Style Kurta",
    brand: "House of Pataudi",
    price: 923,
    color: "Maroon",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/31184662/2024/12/18/74a654b7-e82c-46dc-93cf-6c45dd97cdfd1734524719705-House-of-Pataudi-Jashn-Ethnic-Motifs-Embroidered-Zari-Work-A-1.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-005",
    name: "Rangita Embroidered Notch Neck Anarkali Kurta",
    brand: "Rangita",
    price: 799,
    color: "Beige",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/2025/MAY/21/N2pdTy0C_bb6b53b304dc4b67ac8da1efe003ba9d.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-006",
    name: "Rangita Floral Embroidered Anarkali Kurta",
    brand: "Rangita",
    price: 857,
    color: "Black",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/31978038/2024/12/16/1fbedcd9-4612-42e1-b6ef-9aef5aa78fe51734327057178RangitaWomenEmbroideredThreadWorkAnarkaliKurta1.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-007",
    name: "Rangita Floral Embroidered Yoke Design Thread Work A-Line Kurta",
    brand: "Rangita",
    price: 719,
    color: "Purple",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/31978054/2024/12/16/09aaec6b-dc63-4c86-ab8e-d64488144d741734335334038RangitaWomenEmbroideredThreadWorkKurta1.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-008",
    name: "Anouk Woven Design Chikankari Straight Kurta",
    brand: "Anouk",
    price: 2515,
    color: "Navy Blue",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/28393498/2024/3/20/d507e762-c181-4163-9332-6a8d38bd7a601710926318913AnoukMenThreadWorkKurta6.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [1500, 4000],
  },
  {
    id: "ITEM-009",
    name: "Rangita Women Embroidered Thread Work Anarkali Kurta",
    brand: "Rangita",
    price: 899,
    color: "Maroon",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/2024/NOVEMBER/27/ODTndkgh_292160263d7d4a2394c8f6d1322fac73.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-010",
    name: "Rangita Women Embroidered Thread Work Anarkali Kurta",
    brand: "Rangita",
    price: 999,
    color: "Off White",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/2024/NOVEMBER/27/1S4KKgPY_5cb00f287fc84b5d87cd853035906ef6.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-011",
    name: "Rangita Women Embroidered Thread Work Kurta",
    brand: "Rangita",
    price: 899,
    color: "Maroon",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/31770528/2025/1/8/a149b124-6eef-4e27-a2cb-c8811296c0f01736320509317-Rangita-Women-Embroidered-Thread-Work-Kurta-6111736320508779-1.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-012",
    name: "Anouk White Striped Embroidered Sequinned Mandarin Collar Straight Kurta",
    brand: "Anouk",
    price: 869,
    color: "White",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/2024/DECEMBER/30/ri9ZU2zp_ed900007035c41318918668f152c561f.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-013",
    name: "Rangita Ethnic Motifs Printed Beads & Stones Anarkali Kurta",
    brand: "Rangita",
    price: 799,
    color: "Coral",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/24375510/2023/8/7/394536fd-2224-4869-bb21-0098ce7623861691401546591RangitaWomenCoralPaisleyEmbroideredThreadWorkChanderiSilkAna1.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-014",
    name: "Rangita Women Floral Printed Kurta",
    brand: "Rangita",
    price: 399,
    color: "Teal",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/33283877/2025/4/30/531a112a-4186-434c-bf20-142d2ade23c51746025476248-Rangita-Women-Floral-Printed-Kurta-591746025475954-1.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-015",
    name: "Rangita Women Embroidered Anarkali Kurta",
    brand: "Rangita",
    price: 799,
    color: "Turquoise Blue",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/2025/MARCH/21/eI547bbq_88c4f34e9e954ac7895bade5fa691061.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-016",
    name: "Anouk Green Ethnic Motifs Woven Design Thread Work Chikankari Kurta",
    brand: "Anouk",
    price: 2589,
    color: "Green",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/29428714/2024/5/9/29ed28d6-ff85-48f9-aefd-0029b6d7cfdf1715244395710AnoukMenMirrorWorkPathaniKurta7.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [1500, 4000],
  },
  {
    id: "ITEM-017",
    name: "Rangita Ethnic Motifs Printed Thread Work Chanderi Silk A Line Kurta",
    brand: "Rangita",
    price: 699,
    color: "Maroon",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/27324274/2024/3/19/dd6e5504-42e2-4791-b5ce-65af178bf4211710845396205RangitaEthnicMotifsPrintedThreadWorkChanderiSilkAnarkaliKurt1.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-018",
    name: "Rangita Women Floral Printed Kurta",
    brand: "Rangita",
    price: 399,
    color: "Blue",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/33283887/2025/4/30/895d3cd8-f9ab-4745-afca-1f19edcde88e1746023862621-Rangita-Women-Floral-Printed-Kurta-621746023862210-1.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-019",
    name: "Rangita Floral Embroidered Zari Work Anarkali Kurta",
    brand: "Rangita",
    price: 799,
    color: "Blue",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/2025/MAY/21/vZMj9bVA_17116d5c54f54ec7843dfc86d4668926.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-020",
    name: "Anouk Purple Ethnic Embroidered Mandarin Collar Sequinned Lucknowi Cotton Straight Kurta",
    brand: "Anouk",
    price: 1517,
    color: "Purple",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/27079616/2024/1/19/e1b5a36b-0c30-4381-90a1-1b7ac5b8acec1705677476478AnoukMenEthnicMotifsYokeDesignKurta5.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [1500, 4000],
  },
  {
    id: "ITEM-021",
    name: "Sangria Black Floral Printed V-Neck Thread Work Pure Cotton Straight Kurta",
    brand: "Sangria",
    price: 599,
    color: "Green",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/2025/JANUARY/17/ACbUJVPD_b895f8bb46fa45e8b3cc1ac28cb8eea9.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-022",
    name: "Sangria Boys Blue & White Floral Printed Mandarin Collar Straight Cotton Kurta",
    brand: "Sangria",
    price: 699,
    color: "Blue",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/30266850/2024/7/18/2a06cb1a-a8ac-4d01-840d-7b0c183f703c1721276523469Kurtas1.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-023",
    name: "FILORI STUDIO Men Woven Design Mini Checks Pure Cotton Kurta",
    brand: "FILORI STUDIO",
    price: 944,
    color: "Blue",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/29785306/2024/5/25/7f71f168-c316-4cb5-b7a9-6885c47f8d031716630828621FILORIMenThreadWorkKurta1.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-024",
    name: "Sangria Floral Print Pure Cotton Kurta",
    brand: "Sangria",
    price: 674,
    color: "Beige",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/32166853/2025/5/15/0e7311d5-5f9b-449e-8096-f6365dd73d201747307656558-Sangria-Men-Kurtas-9291747307655943-1.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-025",
    name: "HERE&NOW Men Solid Cotton Short Kurta",
    brand: "HERE&NOW",
    price: 721,
    color: "Navy Blue",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/24454594/2023/9/1/a8d3662a-f798-4b46-9868-6b61178482d11693561125286-HERENOW-Men-Shirts-7401693561124830-1.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["casual"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-026",
    name: "FILORI STUDIO Ethnic Motifs Printed Band Collar Pure Cotton Kurta",
    brand: "FILORI STUDIO",
    price: 1286,
    color: "Green",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/31035715/2025/1/16/02b56b9b-b5ad-42f7-aee4-81764983bcd01737026045085-FILORI-Ethnic-Motifs-Printed-Band-Collar-Pure-Cotton-Kurta-8-1.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-027",
    name: "Superminis Boys Floral Printed Cotton Kurta",
    brand: "Superminis",
    price: 549,
    color: "Green",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/28277818/2024/3/14/a0bf916f-82db-463f-8f3d-2c8e6d68e3e41710429273384SuperminisBoysFloralPrintedPastelsHandloomKurta1.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-028",
    name: "Jompers Ethnic Motifs Embroidered Mandarin Collar Straight Kurta",
    brand: "Jompers",
    price: 831,
    color: "Beige",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/28932986/2024/4/15/de378498-9247-45b8-81a5-c309cc0fc5721713166779195JompersMenEthnicMotifsPathaniKurta1.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-029",
    name: "House of Pataudi Jashn Ethnic Motifs Embroidered Zari Work Angrakha Style Kurta",
    brand: "House of Pataudi",
    price: 923,
    color: "Maroon",
    occasion: "festive",
    image:
      "http://assets.myntassets.com/assets/images/31184662/2024/12/18/74a654b7-e82c-46dc-93cf-6c45dd97cdfd1734524719705-House-of-Pataudi-Jashn-Ethnic-Motifs-Embroidered-Zari-Work-A-1.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-030",
    name: "VASTRADO Ethnic Motifs Printed Mandarin Collar Straight Short Kurta",
    brand: "VASTRADO",
    price: 799,
    color: "Black",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/2024/OCTOBER/29/fSlZE1pl_fccd6147c03c4c9f9554a0d33fffd291.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-031",
    name: "CORSICA Women Tie and Dye Dyed Kaftan Kurta",
    brand: "CORSICA",
    price: 649,
    color: "Red",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/2025/MAY/16/6DDnEExP_049c6cf2ab7049eea8626130f8d3b398.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-032",
    name: "Anouk Woven Design Chikankari Straight Kurta",
    brand: "Anouk",
    price: 2515,
    color: "Navy Blue",
    occasion: "festive",
    image:
      "http://assets.myntassets.com/assets/images/28393498/2024/3/20/d507e762-c181-4163-9332-6a8d38bd7a601710926318913AnoukMenThreadWorkKurta6.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [1500, 4000],
  },
  {
    id: "ITEM-033",
    name: "HERE&NOW Band Collar Cuffed Sleeves Straight Short Kurta",
    brand: "HERE&NOW",
    price: 695,
    color: "Navy Blue",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/29849357/2024/5/29/4037ba82-eb22-48fb-ba63-0d1267f36fa01717003617327HERENOWMenOpaqueCasualShirt1.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["casual"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-034",
    name: "Anouk Men Geometric Printed Cotton Indigo Short Kurta",
    brand: "Anouk",
    price: 659,
    color: "Navy Blue",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/23119268/2023/5/19/402af633-1ed8-43a1-b9fd-60adb3488bf21684474558714-Men-Indigo-Printed-short-Kurta-6511684474558337-1.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["casual", "indo-western"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-035",
    name: "Anouk White Striped Embroidered Sequinned Mandarin Collar Straight Kurta",
    brand: "Anouk",
    price: 869,
    color: "White",
    occasion: "festive",
    image:
      "http://assets.myntassets.com/assets/images/2024/DECEMBER/30/ri9ZU2zp_ed900007035c41318918668f152c561f.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-036",
    name: "FILORI STUDIO Men Pure Cotton Ethnic Motifs Printed Kurta",
    brand: "FILORI STUDIO",
    price: 961,
    color: "Red",
    occasion: "festive",
    image:
      "http://assets.myntassets.com/assets/images/2024/NOVEMBER/12/ablzATCR_a196037c70c74994a1438ca406eef476.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-037",
    name: "anayna Ethnic Motifs Printed Kurta",
    brand: "anayna",
    price: 399,
    color: "Pink",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/22143838/2023/10/4/fc5eab91-6911-4dff-aac3-bd8771cf03371696411495676-anayna-Ethnic-Motifs-Printed-Kurta-9951696411495609-6.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-038",
    name: "Anouk Green Ethnic Motifs Woven Design Thread Work Chikankari Kurta",
    brand: "Anouk",
    price: 2589,
    color: "Green",
    occasion: "festive",
    image:
      "http://assets.myntassets.com/assets/images/29428714/2024/5/9/29ed28d6-ff85-48f9-aefd-0029b6d7cfdf1715244395710AnoukMenMirrorWorkPathaniKurta7.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [1500, 4000],
  },
  {
    id: "ITEM-039",
    name: "Rimeline Floral Printed Notch-Neck Straight Kurta",
    brand: "Rimeline",
    price: 599,
    color: "Blue",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/32166736/2025/1/28/44132bb8-25c1-4353-a0c6-45f8ccc7d00e1738049910799-Rimeline-Floral-Printed-Notch-Neck-Straight-Kurta-1001738049-1.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-040",
    name: "Sangria Boys Yellow Woven Design Mandarin Collar Straight Kurta",
    brand: "Sangria",
    price: 599,
    color: "Yellow",
    occasion: "festive",
    image:
      "http://assets.myntassets.com/assets/images/2025/FEBRUARY/1/H4lDxFzB_a581919cadc8436e8bb021436d52fc0a.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["ethnic"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-041",
    name: "Powerlook Men Checked Polo Collar T-shirt",
    brand: "Powerlook",
    price: 1187,
    color: "Black",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/2025/FEBRUARY/27/HWn4LhsE_47095a6309e0426f85aad10925534dce.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["casual"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-042",
    name: "U.S. Polo Assn. Checked Polo Collar Pure Cotton Slim Fit T-shirt",
    brand: "U.S. Polo Assn.",
    price: 1374,
    color: "Maroon",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/27566444/2024/2/27/a310a4db-10cb-41a8-8bf5-0a7330c1acba1709032886608-US-Polo-Assn-Men-Tshirts-8141709032886203-1.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["casual"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-043",
    name: "HRX By Hrithik Roshan Running Women Wet Weather Rapid-Dry Typography Tshirts",
    brand: "HRX by Hrithik Roshan",
    price: 263,
    color: "Grey",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/16938306/2022/3/10/5e37f23d-17ef-4639-9715-8896e97443931646892282574-HRX-by-Hrithik-Roshan-Women-Grey-Typography-Printed-Rapid-Dr-5.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["casual"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-044",
    name: "Dreamz by Pantaloons Women Pure Cotton Lounge Tshirts",
    brand: "Dreamz by Pantaloons",
    price: 399,
    color: "Cream",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/2024/SEPTEMBER/3/VA4vudk1_5a529dab1da6430f80e2efdb22982980.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["casual"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-045",
    name: "Louis Philippe Geometric Printed Polo Collar T-shirt",
    brand: "Louis Philippe",
    price: 965,
    color: "Purple",
    occasion: "work",
    image:
      "http://assets.myntassets.com/assets/images/33085371/2025/4/7/7f6bb9b8-5460-41f1-b94f-e21fb90088ed1744014837367-Louis-Philippe-Men-Tshirts-1401744014836862-1.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["formal"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-046",
    name: "Lux Cozi Polo Collar Lounge Tshirts",
    brand: "Lux Cozi",
    price: 367,
    color: "Blue",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/28138226/2024/8/14/1b68a9d0-a65a-4509-96ec-ba6ede9aa9081723609135338-Lux-Cozi-Polo-Collar-Lounge-Tshirts-9641723609134836-2.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["casual"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-047",
    name: "Lux Cozi Polo Collar Lounge Tshirts",
    brand: "Lux Cozi",
    price: 357,
    color: "Navy Blue",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/28138202/2024/8/14/7c3c7097-f05a-4fa4-a1fb-655a0d252b691723609081476-Lux-Cozi-Polo-Collar-Lounge-Tshirts-8561723609080865-2.jpg",
    dateAdded: "2025-06-12",
    gender: "male",
    stylePreferences: ["casual"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-048",
    name: "U.S. Polo Assn. Women Polo Collar Applique T-shirt",
    brand: "U.S. Polo Assn. Women",
    price: 1346,
    color: "Yellow",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/29960124/2024/6/22/187f3b99-a022-4f28-9aad-0847e6cc98821719074925063USPoloAssnWomenEmbroideredPoloCollarT-shirt1.jpg",
    dateAdded: "2025-06-12",
    gender: "female",
    stylePreferences: ["casual"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-049",
    name: "Ed-a-Mamma Baby Kids Unisex Typography Printed Round Neck T-shirt",
    brand: "Ed-a-Mamma Baby",
    price: 384,
    color: "Blue",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/30039896/2024/6/26/31a0cba5-e4e4-4064-a55c-e0641cb416e91719381140712Ed-a-MammaBabyKidsSportsPrintedBioFinishT-shirt1.jpg",
    dateAdded: "2025-06-12",
    gender: "unisex",
    stylePreferences: ["casual"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
  {
    id: "ITEM-050",
    name: "Baba & Baby Kids Monochrome Raw Edge T-shirt",
    brand: "Baba & Baby",
    price: 349,
    color: "White",
    occasion: "everyday",
    image:
      "http://assets.myntassets.com/assets/images/2024/NOVEMBER/29/FBNhB08F_cad4e5a5b61a4fbd97915bfdc90d1494.jpg",
    dateAdded: "2025-06-12",
    gender: "unisex",
    stylePreferences: ["casual"],
    ageGroups: ["18-24", "25-34"],
    budgetRange: [500, 1500],
  },
];

// Helper function to check if any selected preference matches item's preferences
const matchesPreferenceArray = (
  selectedPreferences: string[],
  itemPreferences: string[],
): boolean => {
  if (selectedPreferences.length === 0) return true;
  return selectedPreferences.some((pref) => itemPreferences.includes(pref));
};

const applyStrictFilters = (
  items: ClothingItem[],
  preferences: UserPreferences,
): ClothingItem[] => {
  const { gender, stylePreference, budget, age, occasion, colorPreferences } =
    preferences;
  const userSelectedBudget = budget[0];

  return items.filter((item) => {
    // Gender: Must match, or item is unisex, or user selected 'unisex'
    if (
      gender &&
      gender !== "unisex" &&
      item.gender !== gender &&
      item.gender !== "unisex"
    )
      return false;
    if (
      gender === "unisex" &&
      !["male", "female", "unisex"].includes(item.gender)
    )
      return false;

    // Style: Must match at least one selected style
    if (!matchesPreferenceArray(stylePreference, item.stylePreferences))
      return false;

    // Age Group: Must match
    if (age && !item.ageGroups.includes(age)) return false;

    // Budget: Strict adherence - item price should be <= user budget and >= 70% of budget
    if (
      !(
        item.price <= userSelectedBudget &&
        item.price >= userSelectedBudget * 0.7
      )
    )
      return false;

    // Occasion: Must match at least one, or 'everyday' is selected (which is broad)
    if (occasion.length > 0) {
      if (
        !matchesPreferenceArray(occasion, [item.occasion.toLowerCase()]) &&
        !occasion.includes("everyday")
      ) {
        return false;
      }
    }

    // Color: Must match at least one
    if (colorPreferences.length > 0) {
      if (!colorPreferences.includes(item.color)) return false;
    }

    return true;
  });
};

const applyRelaxedFilters = (
  items: ClothingItem[],
  preferences: UserPreferences,
): ClothingItem[] => {
  const { gender, stylePreference, budget, age } = preferences;
  const userSelectedBudget = budget[0];

  return items.filter((item) => {
    // Gender: Must match (essential)
    if (
      gender &&
      gender !== "unisex" &&
      item.gender !== gender &&
      item.gender !== "unisex"
    )
      return false;
    if (
      gender === "unisex" &&
      !["male", "female", "unisex"].includes(item.gender)
    )
      return false;

    // Style: Must match at least one selected style (essential)
    if (!matchesPreferenceArray(stylePreference, item.stylePreferences))
      return false;

    // Age Group: Must match (essential)
    if (age && !item.ageGroups.includes(age)) return false;

    // Budget: Relaxed - allow up to 180% of user budget and down to 40%
    if (
      !(
        item.price <= userSelectedBudget * 1.8 &&
        item.price >= userSelectedBudget * 0.4
      )
    )
      return false;

    // Colors and Occasions are ignored in relaxed filtering

    return true;
  });
};

export async function getStrictRecommendations(
  preferences: UserPreferences,
): Promise<ClothingItem[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const strictResults = applyStrictFilters(allClothingItems, preferences);
  return strictResults.slice(0, 8); // Max 8 strict results
}

export async function getRelaxedRecommendations(
  preferences: UserPreferences,
): Promise<ClothingItem[]> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const strictResults = applyStrictFilters(allClothingItems, preferences);
  const strictIds = new Set(strictResults.map((item) => item.id));

  // Get relaxed results excluding strict matches
  const relaxedResults = applyRelaxedFilters(
    allClothingItems,
    preferences,
  ).filter((item) => !strictIds.has(item.id));

  return relaxedResults.slice(0, 8); // Max 8 relaxed results
}

// Legacy function for backward compatibility
export async function getRecommendations(
  preferences: UserPreferences,
): Promise<ClothingItem[]> {
  const [strict, relaxed] = await Promise.all([
    getStrictRecommendations(preferences),
    getRelaxedRecommendations(preferences),
  ]);
  return [...strict, ...relaxed];
}
