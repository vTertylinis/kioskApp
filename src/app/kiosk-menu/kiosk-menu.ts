import { Component, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { menuItems, MenuItem } from '../models/menuItems';

interface Category {
  key: string;
  label: string;
  icon: string;
  items: MenuItem[];
}

const TRANSLATIONS: Record<string, string> = {
  BREAKFAST: 'Breakfast',
  CLUB_SANDWICH: 'Club Sandwiches',
  JUNIOR_MENU: 'Junior Menu',
  PINSA: 'Pinsa',
  PASTA: 'Pasta',
  HOTDOG_BURGERS: 'Hot Dogs & Burgers',
  BAO_BUNS: 'Bao Buns',
  SALADS: 'Salads',
  MAIN_COURSES: 'Main Courses',
  OMELETTE: 'Omelette',
  TRADITIONAL_KAYANAS: 'Traditional Kayanas',
  FRIED_EGGS_BACON: '2 Fried Eggs with Bacon & Toast',
  SCRAMBLED_EGGS: 'Scrambled Eggs',
  SCRAMBLED_EGGS_SALMON: 'Scrambled Eggs with Salmon',
  PANCAKE_PRALINE: 'Pancake Praline',
  PANCAKE_HONEY_CINNAMON: 'Pancake Honey & Cinnamon',
  PANCAKE_PRALINE_BANANA_HAZELNUT: 'Pancake Praline Banana Hazelnut',
  PANCAKE_SAVORY: 'Savory Pancake',
  FRENCH_TOAST_SIMPLE: 'French Toast Simple',
  FRENCH_TOAST_HONEY_CINNAMON: 'French Toast Honey & Cinnamon',
  YOGURT_HONEY_WALNUTS_FRUITS: 'Yogurt Honey, Walnuts & Fruits',
  YOGURT_MUESLI_HONEY: 'Yogurt with Muesli and Honey',
  BREAKFAST_FOR_2: 'Breakfast for 2',
  CLUB_SANDWICH_VAL: 'Club Sandwich',
  CLUB_SANDWICH_CAESAR_CHICKEN: 'Club Caesar Chicken',
  CLUB_SANDWICH_GYRO: 'Club Sandwich Gyro',
  CLUB_SANDWICH_PANSETSA: 'Club Sandwich Pancetta',
  CLUB_CALAMARI: 'Calamari Club',
  JUNIOR_1: 'Junior 1',
  JUNIOR_2: 'Junior 2',
  PINSA_21: 'Pinsa 21',
  PINSA_SPECIAL: 'Pinsa Special',
  PINSA_PEPPERONI: 'Pinsa Pepperoni',
  PINSA_MARGARITA: 'Pinsa Margherita',
  BOLOGNESE: 'Bolognese',
  CARBONARA: 'Carbonara',
  PASTA_21: 'Pasta 21',
  penesMeKotopoulo: 'Penne with Chicken',
  rigatoniCheeses: 'Rigatoni 4 Cheeses',
  SHRIMP_PASTA: 'Shrimp Pasta',
  SEAFOOD_PASTA: 'Seafood Pasta',
  HOT_DOG: 'Hot Dog',
  BURGER_BBQ: 'Burger BBQ',
  BURGER_CAESAR: 'Burger Caesar',
  BURGER_21: 'Burger 21',
  DOUBLE_CHEESE_BURGER: 'Double Cheese Burger',
  CHICKEN_CRISPY_BURGER: 'Chicken Crispy Burger',
  burgerChilicrispychicken: 'Chili Crispy Chicken',
  doubleSmash: 'Double Smash Burger',
  SHRIMP_CHILI_BAO: 'Shrimp Chili Bao',
  NUGGETS_BAO: 'Nuggets Bao',
  PULLED_PORK_BAO: 'Pulled Pork Bao',
  SALAD_CAESAR: 'Caesar Salad',
  SALAD_21: 'Salad 21',
  SALAD_CAPRESE: 'Caprese Salad',
  SALAD_KOUKOUVAGIA: 'Koukouvagia Salad',
  SALAD_GREEK: 'Greek Salad',
  SALAD_CHEF: "Chef's Salad",
  SALAD_21_SHRIMP: '21 Salad with Shrimp',
  PORK_PANSETTO: 'Pork Panseto Steak',
  CHICKEN_NUGGETS: 'Chicken Nuggets',
  CHICKEN_NUGGETS_A_LA_CREME: 'Chicken Nuggets à la Crème',
  FRIED_CALAMARI: 'Fried Calamari',
  SALMON_TERIYAKI: 'Salmon Teriyaki',
  CHICKEN_THIGH: 'Chicken Thigh',
  BEEF_PATTY: 'Beef Patty',
  PORK_GYRO: 'Pork Gyro',
  MIX_GRILL: 'Mix Grill',
};

const DESC_TRANSLATIONS: Record<string, string> = {
  OMELETTE_DESC: '3 eggs, fresh salad, fresh bread. Add ingredients of your choice.',
  TRADITIONAL_KAYANAS_DESC: 'Served with fresh bread.',
  FRIED_EGGS_BACON_DESC: '2 fried eggs with crispy bacon and toasted bread.',
  SCRAMBLED_EGGS_DESC: 'On toasted baguette with parmesan.',
  SCRAMBLED_EGGS_SALMON_DESC: 'On toasted baguette with smoked salmon.',
  PANCAKE_PRALINE_DESC: 'With praline chocolate.',
  PANCAKE_SAVORY_DESC: 'With gouda, turkey, cheddar, mayo, egg.',
  FRENCH_TOAST_SIMPLE_DESC: 'Bread dipped in egg with grated feta.',
  FRENCH_TOAST_HONEY_CINNAMON_DESC: 'Bread dipped in egg with honey & cinnamon.',
  YOGURT_HONEY_WALNUTS_FRUITS_DESC: 'With walnuts and honey.',
  YOGURT_MUESLI_HONEY_DESC: 'Fresh strained yogurt with muesli.',
  BREAKFAST_FOR_2_DESC: 'Scrambled eggs, yogurt, mini pancake, fresh bread & more.',
  CLUB_SANDWICH_DESC: 'Gouda, turkey, tomato, iceberg, omelette, mayo. With fries.',
  CLUB_SANDWICH_CAESAR_CHICKEN_DESC: 'Chicken, gouda, bacon, tomato, Caesar sauce. With fries.',
  CLUB_SANDWICH_GYRO_DESC: 'Gouda, tomato, iceberg, mustard-mayo, pork gyro. With fries.',
  CLUB_SANDWICH_PANSETSA_DESC: 'Gouda, tomato, iceberg, mustard-mayo, pancetta. With fries.',
  CLUB_CALAMARI_DESC: 'Fried calamari, iceberg, tomato, tartar sauce. With fries.',
  JUNIOR_1_DESC: 'Burger bun, mixed patty, ketchup, mustard, fries, juice & gift.',
  JUNIOR_2_DESC: 'Nuggets, fries, juice & small gift.',
  PINSA_21_DESC: 'Cream, Philadelphia, mushrooms, bacon, chicken, mozzarella.',
  PINSA_SPECIAL_DESC: 'Tomato sauce, gouda, ham, bacon, salami, pepperoni, mushrooms.',
  PINSA_PEPPERONI_DESC: 'Tomato sauce, mozzarella, gouda and pepperoni.',
  PINSA_MARGARITA_DESC: 'Classic with tomato sauce, mozzarella, and fresh basil.',
  BOLOGNESE_DESC: 'Linguine with fresh ground beef, tomato sauce, parmesan.',
  CARBONARA_DESC: 'Linguine, crispy bacon, cream, egg yolk, parmesan.',
  PASTA_21_DESC: 'Casarecce with fresh vegetables, cream, Philadelphia, parmesan.',
  penesMeKotopouloDesc: 'Mushrooms and basil sauce.',
  rigatoniCheesesDesc: 'Parmigiano, Gouda, Mozzarella, and Gorgonzola.',
  SHRIMP_PASTA_DESC: 'Linguine, sautéed shrimp, fresh tomato sauce, basil.',
  SEAFOOD_PASTA_DESC: 'Calamarata with seafood, shrimp, tomato sauce, basil.',
  HOT_DOG_DESC: 'Frankfurter, fresh oregano, mustard, ketchup, fries.',
  BURGER_BBQ_DESC: 'Beef patty, BBQ sauce, cheddar, tomato, bacon. With fries.',
  BURGER_CAESAR_DESC: 'Chicken thigh, tomato, iceberg, mustard-mayo. With fries.',
  BURGER_21_DESC: 'Beef patty, goat cheese, truffle oil mayo, caramelized onions.',
  DOUBLE_CHEESE_BURGER_DESC: 'Burger patty with double cheddar, pickles, mayo. With fries.',
  CHICKEN_CRISPY_BURGER_DESC: 'Mustard-mayo, crispy chicken, tomato, salad. With fries.',
  burgerChilicrispychickenDesc: 'With sweet chilli sauce.',
  doubleSmashdesc: 'Sauce 21, cheddar, caramelized bacon, tomato, iceberg.',
  SHRIMP_CHILI_BAO_DESC: 'Sautéed shrimp, chili mayo, fresh spring onion.',
  NUGGETS_BAO_DESC: 'Breaded chicken, coleslaw, fresh spring onion.',
  PULLED_PORK_BAO_DESC: 'Pulled pork, BBQ sauce, fresh spring onion.',
  SALAD_CAESAR_DESC: 'Iceberg, grilled chicken, bacon, Caesar sauce, croutons.',
  SALAD_21_DESC: 'Green salad, bacon, parmesan, sun-dried tomato, nuts.',
  SALAD_CAPRESE_DESC: 'Tomato, mozzarella, dakos, basil pesto.',
  SALAD_KOUKOUVAGIA_DESC: 'Cherry tomatoes, cucumber, peppers, dakos, feta.',
  SALAD_GREEK_DESC: 'Tomato, cucumber, peppers, onion, olives, feta.',
  SALAD_CHEF_DESC: 'Green salad, premium ham, kaseri, egg, tomato, corn.',
  SALAD_21_SHRIMP_DESC: 'Green salad, tempura shrimp, chili mayo sauce.',
  PORK_PANSETTO_DESC: 'With fries, salad, yogurt sauce, grilled pita.',
  CHICKEN_NUGGETS_DESC: 'Panko breaded chicken, fresh salad, mustard-mayo, fries.',
  CHICKEN_NUGGETS_A_LA_CREME_DESC: 'Panko breaded chicken in cream sauce, salad, fries.',
  FRIED_CALAMARI_DESC: 'Served with fresh salad and cheese dip.',
  SALMON_TERIYAKI_DESC: 'Grilled salmon with teriyaki sauce and vegetables.',
  CHICKEN_THIGH_DESC: 'Chicken thigh fillet with fresh salad and fries.',
  BEEF_PATTY_DESC: 'Handmade beef patty with fresh salad and fries.',
  PORK_GYRO_DESC: 'Pork gyro with tzatziki, tomato, onion, salad, fries.',
  MIX_GRILL_DESC: 'Pork gyro, sausage, beef patty, chicken, salad, fries, pita.',
};

const CATEGORY_ICONS: Record<string, string> = {
  BREAKFAST: 'free_breakfast',
  CLUB_SANDWICH: 'lunch_dining',
  JUNIOR_MENU: 'child_care',
  PINSA: 'local_pizza',
  PASTA: 'dinner_dining',
  HOTDOG_BURGERS: 'fastfood',
  BAO_BUNS: 'ramen_dining',
  SALADS: 'eco',
  MAIN_COURSES: 'restaurant',
};

const SLIDE_DURATION_MS = 8000;

@Component({
  selector: 'app-kiosk-menu',
  standalone: true,
  imports: [CurrencyPipe, MatCardModule, MatIconModule, MatProgressBarModule],
  templateUrl: './kiosk-menu.html',
  styleUrl: './kiosk-menu.css',
})
export class KioskMenu implements OnInit, OnDestroy {
  categories: Category[] = [];
  currentIndex = signal(0);
  progress = signal(0);

  currentCategory = computed(() => this.categories[this.currentIndex()]);

  private intervalId: ReturnType<typeof setInterval> | null = null;
  private progressId: ReturnType<typeof setInterval> | null = null;
  private startTime = 0;

  ngOnInit(): void {
    this.buildCategories();
    this.startSlideshow();
  }

  ngOnDestroy(): void {
    this.stopSlideshow();
  }

  private buildCategories(): void {
    const grouped = new Map<string, MenuItem[]>();
    for (const item of menuItems) {
      if (!item.category || !item.image) continue;
      const cat = item.category;
      if (!grouped.has(cat)) grouped.set(cat, []);
      grouped.get(cat)!.push(item);
    }

    this.categories = Array.from(grouped.entries()).map(([key, items]) => ({
      key,
      label: TRANSLATIONS[key] || key,
      icon: CATEGORY_ICONS[key] || 'restaurant_menu',
      items,
    }));
  }

  private startSlideshow(): void {
    this.startTime = Date.now();

    this.progressId = setInterval(() => {
      const elapsed = Date.now() - this.startTime;
      this.progress.set(Math.min((elapsed / SLIDE_DURATION_MS) * 100, 100));
    }, 50);

    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, SLIDE_DURATION_MS);
  }

  private stopSlideshow(): void {
    if (this.intervalId) clearInterval(this.intervalId);
    if (this.progressId) clearInterval(this.progressId);
  }

  private nextSlide(): void {
    const next = (this.currentIndex() + 1) % this.categories.length;
    this.currentIndex.set(next);
    this.progress.set(0);
    this.startTime = Date.now();
  }

  getItemName(item: MenuItem): string {
    return TRANSLATIONS[item.name] || item.name;
  }

  getItemDesc(item: MenuItem): string {
    if (!item.description) return '';
    return DESC_TRANSLATIONS[item.description] || item.description;
  }

  getCountdown(): string {
    const remaining = Math.max(0, SLIDE_DURATION_MS - (Date.now() - this.startTime));
    const seconds = Math.ceil(remaining / 1000);
    const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
    const ss = String(seconds % 60).padStart(2, '0');
    return `${mm}:${ss}`;
  }
}
