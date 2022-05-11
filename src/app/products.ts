export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Espresso',
    price: 14.99,
    description: 'Four-bean-blend of pure caffeinated magic. Great for espresso machine, pour-over or a drip coffee maker. ',
    src: './assets/espresso.jpeg',
    category: 'coffee',
    company: {
      name: 'Pale Horse Coffee',
      src: './assets/palehorse-logo.png',
      url: 'https://www.palehorsecoffee.com/',
    }
  },
  {
    id: 2,
    name: 'Midnight Driver',
    price: 14.99,
    description: 'For our caffeine loving, all-night pulling, haven\'t slept in three day\'s types; this roast is for you! Whether you\'re looking for a little extra fuel for your workout or long drive, Midnight Driver will keep your gears from jamming.',
    src: './assets/midnight-driver.jpeg',
    category: 'coffee',
    company: {
      name: 'Pale Horse Coffee',
      src: './assets/palehorse-logo.png',
      url: 'https://www.palehorsecoffee.com/',
    }
  },
  {
    id: 3,
    name: 'Patriot Blend',
    price: 14.99,
    description: 'This powerful blend is guaranteed to help any Patriot kick start their day. Tastes like \'Merica ya\'ll.',
    src: './assets/patriot-blend.jpeg',
    category: 'coffee',
    company: {
      name: 'Pale Horse Coffee',
      src: './assets/palehorse-logo.png',
      url: 'https://www.palehorsecoffee.com/',
    }
  },
  {
    id: 4,
    name: 'Morning Colors',
    price: 14.99,
    description: 'Start your day off right with our take on Morning Colors. Air roasted in small batches, right here in the USA.',
    src: './assets/morning-colors.jpeg',
    category: 'coffee',
    company: {
      name: 'Pale Horse Coffee',
      src: './assets/palehorse-logo.png',
      url: 'https://www.palehorsecoffee.com/',
    }
  },
  {
    id: 5,
    name: 'MED PLATE® 3.0',
    price: 449.99,
    description: 'The Medical Equipment Deployment Plate (MED Plate® 3.0) is an individual first aid kit designed to fit within a plate carrier vest, in behind the ballistic plates, the back panel of your cars seat, or within the back panel of a backpack. It is built in a low-profile design to ensure that it is not cumbersome to the user, as well as allowing it to be concealed, minimizing its silhouette and overall bulk.',
    src: './assets/med-plate.png',
    category: 'medical',
    company: {
      name: 'Aussie Peelback Inc',
      src: './assets/APB-logo.png',
      url: 'https://www.aussiepeelback.com/',
    }
  },
  {
    id: 6,
    name: 'HRT H Harness',
    price: 69.99,
    description: 'HARNESS ONLY. 500 Denier Cordura with Duraflex Buckle attachment system to attach to GEN II HRT placards with side loops. Modular design attaches to most placards on the market.',
    src: './assets/HRT-H-Harness.jpg',
    category: 'gear',
    company: {
      name: 'HRT Tactical Gear',
      src: './assets/HRT-Logo-White.png',
      url: 'https://hrttacticalgear.com/',
    }
  },
  {
    id: 7,
    name: 'HRT Response Placard',
    price: 110.99,
    description: '500 Denier Cordura with Duraflex Buckle attachment system attach to HRT HRAC and RAC Carriers. Modular design attaches to most placards on the market. Placard features 2 AR15 and 2 handgun magazine pouches.',
    src: './assets/HRT_Response_Placard.jpg',
    category: 'gear',
    company: {
      name: 'HRT Tactical Gear',
      src: './assets/HRT-Logo-White.png',
      url: 'https://hrttacticalgear.com/',
    }
  },
  {
    id: 8,
    name: 'Tactical K9 Harness',
    price: 699.99,
    description: 'Tactical harness made specifically for canines in the 75-85 pound range. Made from Heavy Duty Mesh, 1000D cordura spine, and lycra side to accommodate proper fit. Harness clicks in/adjusts through (3) Cobra buckles and #10 YKK zipper',
    src: './assets/k9-vest.jpg',
    category: 'gear',
    company: {
      name: 'London Bridge Trading Inc',
      src: './assets/lbt-logo.png',
      url: 'https://lbtinc.com/',
    }
  },
  {
    id: 9,
    name: 'G3 Plate Carrier v2.0',
    price: 449.99,
    description: 'V2 Update of the G3 Carrier featuring front modular panel system that includes 3/4" Fast-Clips, lightweight rigid cummerbund, removable shoulder pads with routing slots for comms & hydration. Body side is constructed of 4 way stretch with mesh channel center for easy fitting and increased breathability.',
    src: './assets/LBT-vest.jpg',
    category: 'gear',
    company: {
      name: 'London Bridge Trading Inc',
      src: './assets/lbt-logo.png',
      url: 'https://lbtinc.com/',
    }
  },
  {
    id: 10,
    name: 'WPS Rifle Sling',
    price: 99.99,
    description: 'The point of a tactical rifle sling is to hold your gun so you don\'t have to. Many shooters have a loose sling that causes the gun to hit them in the legs during movement unless they have hands on the gun. The better solution is to tighten your rifle sling so the gun is higher and tighter to the body. Tightening the rifle sling too much though can cause difficulty in quickly presenting your gun. Ideally, the sling holds the gun close when you don\'t need to shoot, but also allows you enough free-play to present the gun when you do need it. Two key improvements help the WPS tactical rifle sling accomplish this ideal.',
    src: './assets/wps-rifle-sling.jpg',
    category: 'gear',
    company: {
      name: 'Warrior Poet Supply Co',
      src: './assets/wps-logo.png',
      url: 'https://warriorpoetsupply.com/',
    }
  },
  {
    id: 10,
    name: 'GBRS GROUP ASSAULTER BELT SYSTEM V2.0',
    price: 299.99,
    description: 'The GBRS GROUP Assaulter Belt System V2, was designed and developed by Tier One Operators and made in USA by LBT INC, to fulfill the needs and requirements of Special Operators, Military, Law Enforcement and those that demand the most from their equipment.',
    src: './assets/gbrs-belt.png',
    category: 'gear',
    company: {
      name: 'GBRS Group Gear',
      src: './assets/gbrs-logo.png',
      url: 'https://www.gbrsgroup.com/'
    }
  },
  {
    id: 11,
    name: 'MOBILITY DUFFEL BAG',
    price: 179.99,
    description: 'You have gear. You need to move your gear around. These duffels are up to the task. Made from heavy-duty PVC Tarpaulin, they can take all of the use and abuse that you\'re going to put them through. Sitting at 20, 40, and 80 liters, these bags will be sure to get your gear set up and organized so you\'re ready for everything.',
    src: './assets/fieldcraft-duffel.jpg',
    category: 'gear',
    company: {
      name: 'Fieldcraft Survival',
      src: './assets/fieldcraft-logo.png',
      url: 'https://fieldcraftsurvival.com/',
    }
  },
  {
    id: 12,
    name: 'OWB TOURNIQUET HOLDER',
    price: 59.99,
    description: 'Fieldcraft has developed this SOF tourniquet holder to increase accessibility to the tourniquet and reduce failures in the field through functional design to meet utilitarian needs. Fits Combat Application Tourniquet. ',
    src: './assets/tq-holder.jpg',
    category: 'gear',
    company: {
      name: 'Fieldcraft Survival',
      src: './assets/fieldcraft-logo.png',
      url: 'https://fieldcraftsurvival.com/',
    }
  },
  {
    id: 13,
    name: 'LEO Duty Glove',
    price: 45.99,
    description: 'First off, Thank You. Thank you to the Law Enforcement Officers, First Responders, Security Personnel, and all those who put their own selves second so that the rest of us can enjoy a civil society. The LEO™ DUTY GLOVES were designed for those of you on the front lines of patrol and unrest. The minimalist tactical chassis features a polyester mesh backhand mated to a durable synthetic leather palm.',
    src: './assets/Leo-Duty-Glove.jpg',
    category: 'gear',
    company: {
      name: 'VIKTOS',
      src: './assets/viktos-logo.png',
      url: 'https://viktos.com/',
    },
  },
  {
    id: 14,
    name: 'Overbeach Low MC',
    price: 139.99,
    description: 'LOW, DOWN, & SHIFTY. If slow is fast and silent is deadly, the Overbeach Low Shoes are the most fastest killers to ever grace the feet of the modern operator. They are built from genuine black MultiCam Nyco for blending into the night\'ish time. The bottom unit features a high-rebound EVA foam for bounding over life\'s obstacles with an ultra-grippy rubber outsole for childhood insult-like sticking powers. So whether your operations require feline\'esque stalking prowess or a boot scoot shuffle & shoot, the Overbeach Low will see you through. ',
    src: './assets/Overbeach-Low-Shoe.jpg',
    category: 'apparel',
    company: {
       name: 'VIKTOS',
       src: './assets/viktos-logo.png',
       url: 'https://viktos.com/',
    },
  },
  {
    id: 15,
    name: 'Operatus XP Jean',
    price: 129.99,
    description: 'EDC - EVERYDAY DENIM CHOICE Lo-vis enough to be your best daily jean, tactical enough to carry a full EDC load-out. Stretch denim chassis with a gusseted crotch and slightly oversized thighs designed with a fit to move with the operator through the myriad of combat postures and evolutions with comfort. The dual-pull zipper ensures you can conduct men\'s drainage operations without having to de-militarize your waistline. ',
    src: './assets/viktos-jean.jpg',
    category: 'apparel',
    company: {
       name: 'VIKTOS',
       src: './assets/viktos-logo.png',
       url: 'https://viktos.com/',
    },
  },
  {
    id: 16,
    name: 'WARTORN MC Pant',
    price: 219.99,
    description: 'COMBAT GRADE, DEPLOYMENT READY he Wartorn pants are the flagship of the Viktos combat-ready collection. Built from MultiCam® nIR nylon/cotton, they offer the ideal balance between durability and comfort. Large thigh cargos provide plenty of capacity and provide quick-access storage for extra pistol and rifle mags. The padded waistband, double-zip fly, double-layer knees with internal armor pockets, and multitude of EDC pocketing speak to the tactical acumen of these pants.  ',
    src: './assets/viktos-wartorn-pant.jpg',
    category: 'apparel',
    company: {
       name: 'VIKTOS',
       src: './assets/viktos-logo.png',
       url: 'https://viktos.com/',
    },
  },
  {
    id: 16,
    name: 'Hooktown Hat',
    price: 34.99,
    description: 'Mid-profile fit with woven label graphic. US Veteran designed and developed.  ',
    src: './assets/viktos-hat.jpg',
    category: 'apparel',
    company: {
       name: 'VIKTOS',
       src: './assets/viktos-logo.png',
       url: 'https://viktos.com/',
    },
  },
];

