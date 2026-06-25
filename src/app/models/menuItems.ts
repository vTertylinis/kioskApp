  export interface MenuItem {
  id?: number;
  name: string;
  price?: number;
  category?: string;
  image?: string;
  description?: string;
  desc?: string;
}

export const menuItems: MenuItem[] = [
  { id: 101, name: 'OMELETTE', price: 7.5, category: 'BREAKFAST', image: 'images/omeletee.webp',  description: 'OMELETTE_DESC' },
  { id: 204, name: 'TRADITIONAL_KAYANAS', price: 8, category: 'BREAKFAST', description: 'TRADITIONAL_KAYANAS_DESC', image: 'images/kayanas.webp' },
  { id: 109, name: 'FRIED_EGGS_BACON', price: 7, category: 'BREAKFAST', image: 'images/augaa.webp',  description: 'FRIED_EGGS_BACON_DESC' },
  { id: 102, name: 'SCRAMBLED_EGGS', price: 7, category: 'BREAKFAST', description: 'SCRAMBLED_EGGS_DESC', image: 'images/scrabll.webp' },
  { id: 103, name: 'SCRAMBLED_EGGS_SALMON', price: 8, category: 'BREAKFAST', description: 'SCRAMBLED_EGGS_SALMON_DESC', image: 'images/salmonbr.webp' },
  { id: 106, name: 'PANCAKE_PRALINE', price: 7.5, category: 'BREAKFAST', image: 'images/pancakee.webp',  description: 'PANCAKE_PRALINE_DESC' },
  { id: 107, name: 'PANCAKE_HONEY_CINNAMON', price: 7.5, category: 'BREAKFAST', image: 'images/panmelikanela.webp'},
  { id: 108, name: 'PANCAKE_PRALINE_BANANA_HAZELNUT', price: 9, category: 'BREAKFAST' , image: 'images/panfountoukia.webp'},
  { id: 203, name: 'PANCAKE_SAVORY', price: 9, category: 'BREAKFAST', description: 'PANCAKE_SAVORY_DESC', image: 'images/pancakeAlmiro.webp' },
  { id: 104, name: 'FRENCH_TOAST_SIMPLE', price: 7, image: 'images/frenchtoast.webp',  category: 'BREAKFAST', description: 'FRENCH_TOAST_SIMPLE_DESC' },
  { id: 105, name: 'FRENCH_TOAST_HONEY_CINNAMON', price: 7, category: 'BREAKFAST', image: 'images/french toast meli.webp',  description: 'FRENCH_TOAST_HONEY_CINNAMON_DESC' },
  { id: 111, name: 'YOGURT_HONEY_WALNUTS_FRUITS', price: 7, category: 'BREAKFAST', image: 'images/giaourtii.webp',  description: 'YOGURT_HONEY_WALNUTS_FRUITS_DESC' },
  { id: 205, name: 'YOGURT_MUESLI_HONEY', price: 7, category: 'BREAKFAST', description: 'YOGURT_MUESLI_HONEY_DESC' , image: 'images/musli.webp'},
  { id: 206, name: 'BREAKFAST_FOR_2', price: 25, category: 'BREAKFAST', description: 'BREAKFAST_FOR_2_DESC', image: 'images/plato.webp' },

  { id: 112, name: 'CLUB_SANDWICH', price: 10.5, category: 'CLUB_SANDWICH', description: 'CLUB_SANDWICH_DESC', image: 'images/club.webp' },
  { id: 113, name: 'CLUB_SANDWICH_CAESAR_CHICKEN', price: 12.5, category: 'CLUB_SANDWICH', description: 'CLUB_SANDWICH_CAESAR_CHICKEN_DESC', image: 'images/clubCeasars.webp' },
  { id: 115, name: 'CLUB_SANDWICH_PANSETSA', price: 13, category: 'CLUB_SANDWICH', image: 'images/clubpanseta.webp',  description: 'CLUB_SANDWICH_PANSETSA_DESC' },
  { id: 118, name: 'CLUB_CALAMARI', price: 12, category: 'CLUB_SANDWICH', description: 'CLUB_CALAMARI_DESC', image: 'images/kalamariclub.webp' },
  { id: 114, name: 'CLUB_SANDWICH_GYRO', price: 12.5, category: 'CLUB_SANDWICH', description: 'CLUB_SANDWICH_GYRO_DESC', image: 'images/gyrosclub.webp' },


  { id: 116, name: 'JUNIOR_1', price: 7.5, category: 'JUNIOR_MENU', description: 'JUNIOR_1_DESC' , image: 'images/juniorburger.webp'},
  { id: 117, name: 'JUNIOR_2', price: 7.5, category: 'JUNIOR_MENU', description: 'JUNIOR_2_DESC' , image: 'images/juniornuggets.webp'},

  { id: 125, name: 'PINSA_21', price: 14, category: 'PINSA', image: 'images/pinsa21.webp',  description: 'PINSA_21_DESC' },
  { id: 124, name: 'PINSA_SPECIAL', price: 13, category: 'PINSA', description: 'PINSA_SPECIAL_DESC', image: 'images/special.webp' },
  { id: 233, name: 'PINSA_PEPPERONI', price: 12.5, category: 'PINSA', description: 'PINSA_PEPPERONI_DESC', image: 'images/peperoni.webp' },
  { id: 123, name: 'PINSA_MARGARITA', price: 12, category: 'PINSA', description: 'PINSA_MARGARITA_DESC', image: 'images/margarita.webp' },

  { id: 130, name: 'rigatoniCheeses', price: 11, category: 'PASTA', description: 'rigatoniCheesesDesc', image: 'images/penes4tiria.webp' },
  { id: 132, name: 'SHRIMP_PASTA', price: 19, category: 'PASTA', image: 'images/garidomakaronada.webp',  description: 'SHRIMP_PASTA_DESC' },
  { id: 131, name: 'PASTA_21', price: 11, category: 'PASTA', description: 'PASTA_21_DESC', image: 'images/pasta21new.webp' },
  { id: 129, name: 'penesMeKotopoulo', price: 12, category: 'PASTA', description: 'penesMeKotopouloDesc', image: 'images/peneskoto.webp' },
  { id: 127, name: 'BOLOGNESE', price: 11, category: 'PASTA', description: 'BOLOGNESE_DESC', image: 'images/bolognese.webp' },
  { id: 128, name: 'CARBONARA', price: 11, category: 'PASTA', description: 'CARBONARA_DESC', image: 'images/carbonara.webp' },
  { id: 230, name: 'SEAFOOD_PASTA', price: 19, category: 'PASTA', description: 'SEAFOOD_PASTA_DESC' , image: 'images/thalasinon.webp'},

  { id: 136, name: 'HOT_DOG', price: 7, category: 'HOTDOG_BURGERS', description: 'HOT_DOG_DESC' , image: 'images/hot-dog.webp'},
  { id: 137, name: 'BURGER_BBQ', price: 11.5, category: 'HOTDOG_BURGERS', description: 'BURGER_BBQ_DESC', image: 'images/bbqBurger.webp' },
  { id: 138, name: 'BURGER_CAESAR', price: 11.5, category: 'HOTDOG_BURGERS', description: 'BURGER_CAESAR_DESC', image: 'images/ceasarsBurger.webp' },
  { id: 139, name: 'BURGER_21', price: 12.5, category: 'HOTDOG_BURGERS', image: 'images/burger.webp',  description: 'BURGER_21_DESC' },
  { id: 140, name: 'DOUBLE_CHEESE_BURGER', price: 11.5, category: 'HOTDOG_BURGERS', description: 'DOUBLE_CHEESE_BURGER_DESC', image: 'images/burgerCheese.webp' },
  { id: 141, name: 'CHICKEN_CRISPY_BURGER', price: 11.5, category: 'HOTDOG_BURGERS', description: 'CHICKEN_CRISPY_BURGER_DESC', image: 'images/crispyChicken.webp' },
  { id: 142, name: 'burgerChilicrispychicken', price: 12.5, category: 'HOTDOG_BURGERS', description: 'burgerChilicrispychickenDesc', image: 'images/crispyBurger2.webp' },
  { id: 143, name: 'doubleSmash', price: 12.5, category: 'HOTDOG_BURGERS', description: 'doubleSmashdesc', image: 'images/smash.webp' },

  { id: 145, name: 'SHRIMP_CHILI_BAO', price: 9, category: 'BAO_BUNS', image: 'images/baogarida.webp',  description: 'SHRIMP_CHILI_BAO_DESC' },
  { id: 146, name: 'NUGGETS_BAO', price: 8, category: 'BAO_BUNS', image: 'images/baokota.webp',  description: 'NUGGETS_BAO_DESC' },
  { id: 147, name: 'PULLED_PORK_BAO', price: 8, category: 'BAO_BUNS', image: 'images/baopull.webp',  description: 'PULLED_PORK_BAO_DESC' },

  { id: 148, name: 'SALAD_CAESAR', price: 10.5, category: 'SALADS', description: 'SALAD_CAESAR_DESC' , image: 'images/saladcaesar.webp'},
  { id: 149, name: 'SALAD_21', price: 11, category: 'SALADS', image: 'images/saladd 21.webp',  description: 'SALAD_21_DESC' },
  { id: 232, name: 'SALAD_21_SHRIMP', price: 11, category: 'SALADS', description: 'SALAD_21_SHRIMP_DESC' , image: 'images/salad21garides.webp'},
  { id: 151, name: 'SALAD_KOUKOUVAGIA', price: 9, category: 'SALADS', description: 'SALAD_KOUKOUVAGIA_DESC', image: 'images/koukouvagia.webp' },
  { id: 152, name: 'SALAD_GREEK', price: 9, category: 'SALADS', description: 'SALAD_GREEK_DESC' , image: 'images/xwriatiki.webp'},
  { id: 150, name: 'SALAD_CAPRESE', price: 9, category: 'SALADS', description: 'SALAD_CAPRESE_DESC', image: 'images/caprese.webp' },
  { id: 231, name: 'SALAD_CHEF', price: 11, category: 'SALADS', description: 'SALAD_CHEF_DESC', image: 'images/chef.webp' },

  { id: 154, name: 'PORK_PANSETTO', price: 18, category: 'MAIN_COURSES', description: 'PORK_PANSETTO_DESC', image: 'images/pansetomprizolaa.webp' },
  { id: 156, name: 'CHICKEN_NUGGETS', price: 12, category: 'MAIN_COURSES', image: 'images/nuggets.webp',  description: 'CHICKEN_NUGGETS_DESC' },
  { id: 158, name: 'FRIED_CALAMARI', price: 12, category: 'MAIN_COURSES', image: 'images/kalamari.webp',  description: 'FRIED_CALAMARI_DESC' },
  { id: 159, name: 'SALMON_TERIYAKI', price: 18, category: 'MAIN_COURSES', image: 'images/solomos.webp',  description: 'SALMON_TERIYAKI_DESC' },
  { id: 160, name: 'CHICKEN_THIGH', price: 13, category: 'MAIN_COURSES', description: 'CHICKEN_THIGH_DESC', image: 'images/fileto mpouti.webp' },
  { id: 161, name: 'BEEF_PATTY', price: 12.5, category: 'MAIN_COURSES', description: 'BEEF_PATTY_DESC', image: 'images/mpiftekiaa.webp' },
  { id: 162, name: 'PORK_GYRO', price: 12, category: 'MAIN_COURSES', description: 'PORK_GYRO_DESC', image: 'images/gyros.webp' },
  { id: 163, name: 'MIX_GRILL', price: 18, category: 'MAIN_COURSES', description: 'MIX_GRILL_DESC', image: 'images/grill.webp' },
  { id: 157, name: 'CHICKEN_NUGGETS_A_LA_CREME', price: 13, category: 'MAIN_COURSES', image: 'images/alacreme.webp',  description: 'CHICKEN_NUGGETS_A_LA_CREME_DESC' },

]