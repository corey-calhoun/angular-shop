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
    src: './assets/espresso.jpeg'
  },
  {
    id: 2,
    name: 'Midnight Driver',
    price: 14.99,
    description: 'For our caffeine loving, all-night pulling, haven\'t slept in three day\'s types; this roast is for you! Whether you\'re looking for a little extra fuel for your workout or long drive, Midnight Driver will keep your gears from jamming.',
    src: './assets/midnight-driver.jpeg'
  },
  {
    id: 3,
    name: 'Patriot Blend',
    price: 14.99,
    description: 'This powerful blend is guaranteed to help any Patriot kick start their day. Tastes like \'Merica ya\'ll.',
    src: './assets/patriot-blend.jpeg'
  },
  {
    id: 4,
    name: 'Morning Colors',
    price: 14.99,
    description: 'Start your day off right with our take on Morning Colors. Air roasted in small batches, right here in the USA.',
    src: './assets/morning-colors.jpeg'
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
