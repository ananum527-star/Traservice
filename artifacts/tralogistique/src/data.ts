export type Product = {
  id: string; name: string; category: string; description: string; price: number;
  unit: string; stock: number; availability: boolean; promotion?: number; image: string;
};
export type Vehicle = {
  id: string; brand: string; model: string; year: number; category: string; seats: number;
  transmission: string; fuel: string; airConditioning: boolean; pricePerDay: number;
  conditions: string[]; availability: boolean; images: string[];
};
export type OrderItem = { productId: string; name: string; quantity: number; price: number; unit: string };
export type Order = {
  id: string; customer: string; phone: string; address: string; neighborhood: string;
  city: string; items: OrderItem[]; total: number; deliveryFee: number; payment: string;
  status: string; date: string;
};
export type Delivery = { id: string; orderId: string; customer: string; address: string; phone: string; fee: number; status: string };
export type Rental = {
  id: string; customer: string; phone: string; vehicleId: string; start: string; end: string;
  pickup: string; returnLocation: string; total: number; status: string;
};
export type Customer = { id: string; name: string; phone: string; email: string; address: string; orders: number; rentals: number };
export type Promotion = { id: string; title: string; productIds: string[]; discount: number; startsAt: string; endsAt: string; status: string };
export type CartLine = { productId: string; quantity: number };

export const products: Product[] = [
  { id: 'riz-local', name: 'Riz Tastic long grain', category: 'Épicerie', description: 'Un riz long grain polyvalent, facile à préparer pour les repas du quotidien.', price: 2750, unit: 'sac de 2 kg', stock: 18, availability: true, promotion: 10, image: '/products/rice.jpg' },
  { id: 'huile-arachide', name: "Huile d'arachide Ndar", category: 'Épicerie', description: 'Pressée avec soin, l’huile d’arachide qui donne du relief aux plats du quotidien.', price: 3400, unit: 'bouteille de 1 L', stock: 31, availability: true, image: '/products/oil.jpg' },
  { id: 'jus-bissap', name: 'Boisson à l’hibiscus', category: 'Boissons', description: 'Une boisson rouge à base d’hibiscus, fraîche et légèrement sucrée.', price: 1800, unit: 'bouteille de 1 L', stock: 12, availability: true, promotion: 15, image: '/products/juice.jpg' },
  { id: 'cafe-touba', name: 'Café Touba soluble', category: 'Boissons', description: 'Café Touba parfumé au poivre de Guinée, pratique à préparer au quotidien.', price: 4200, unit: 'sachet de 250 g', stock: 9, availability: true, image: '/products/coffee.jpg' },
  { id: 'mangue-sechee', name: 'Mangue séchée de Casamance', category: 'Snacking', description: 'Lamelles de mangue séchées naturellement, sans conservateur.', price: 2500, unit: 'sachet de 150 g', stock: 25, availability: true, image: '/products/mango.jpg' },
  { id: 'mil-precuit', name: 'Millet nature', category: 'Épicerie', description: 'Une base de millet simple à cuisiner pour des recettes généreuses et authentiques.', price: 2200, unit: 'sac de 1 kg', stock: 22, availability: true, image: '/products/mil.jpg' },
  { id: 'panier-teranga', name: 'Panier Teranga', category: 'Coffrets', description: 'Un assortiment généreux pour offrir un morceau de Sénégal : bissap, café, mangue et mil.', price: 12500, unit: 'coffret', stock: 7, availability: true, promotion: 12, image: '/products/basket.jpg' },
  { id: 'savon-karite', name: 'Savon karité & neem', category: 'Maison', description: 'Savon doux fabriqué par une coopérative partenaire à Rufisque.', price: 1500, unit: 'pièce de 120 g', stock: 40, availability: true, image: '/products/soap.jpg' },
];

export const vehicles: Vehicle[] = [
  { id: 'toyota-corolla', brand: 'Toyota', model: 'Corolla', year: 2022, category: 'Berline', seats: 5, transmission: 'Automatique', fuel: 'Essence', airConditioning: true, pricePerDay: 28000, conditions: ['Permis valide', 'Caution de 150 000 FCFA', 'Minimum 2 jours'], availability: true, images: ['/vehicles/corolla.jpg'] },
  { id: 'suzuki-ertiga', brand: 'Suzuki', model: 'Ertiga', year: 2021, category: 'Familiale', seats: 7, transmission: 'Manuelle', fuel: 'Essence', airConditioning: true, pricePerDay: 35000, conditions: ['Permis valide', 'Caution de 200 000 FCFA', 'Minimum 2 jours'], availability: true, images: ['/vehicles/ertiga.jpg'] },
  { id: 'renault-duster', brand: 'Renault', model: 'Duster', year: 2023, category: 'SUV', seats: 5, transmission: 'Automatique', fuel: 'Diesel', airConditioning: true, pricePerDay: 42000, conditions: ['Permis valide', 'Caution de 250 000 FCFA', 'Minimum 2 jours'], availability: true, images: ['/vehicles/duster.jpg'] },
  { id: 'peugeot-partner', brand: 'Peugeot', model: 'Partner', year: 2020, category: 'Utilitaire', seats: 2, transmission: 'Manuelle', fuel: 'Diesel', airConditioning: false, pricePerDay: 30000, conditions: ['Permis valide', 'Caution de 180 000 FCFA', 'Minimum 1 jour'], availability: false, images: ['/vehicles/partner.jpg'] },
];

export const initialOrders: Order[] = [
  { id: 'TR-2408', customer: 'Awa Ndiaye', phone: '77 234 18 60', address: '12 rue 10', neighborhood: 'Mermoz', city: 'Dakar', items: [{ productId: 'panier-teranga', name: 'Panier Teranga', quantity: 1, price: 12500, unit: 'coffret' }], total: 14500, deliveryFee: 2000, payment: 'Wave', status: 'En préparation', date: 'Aujourd’hui, 10:42' },
  { id: 'TR-2407', customer: 'Moussa Faye', phone: '76 842 90 11', address: 'Cité Keur Gorgui', neighborhood: 'Sacré-Cœur', city: 'Dakar', items: [{ productId: 'riz-local', name: 'Riz local de la vallée', quantity: 2, price: 2750, unit: 'sac de 2 kg' }, { productId: 'huile-arachide', name: "Huile d'arachide Ndar", quantity: 1, price: 3400, unit: 'bouteille de 1 L' }], total: 10900, deliveryFee: 2000, payment: 'Espèces', status: 'Livrée', date: 'Hier, 16:18' },
  { id: 'TR-2406', customer: 'Fatou Sarr', phone: '70 412 65 08', address: 'Villa 28, Almadies', neighborhood: 'Almadies', city: 'Dakar', items: [{ productId: 'cafe-touba', name: 'Café Touba torréfié', quantity: 1, price: 4200, unit: 'sachet de 250 g' }], total: 6200, deliveryFee: 2000, payment: 'Orange Money', status: 'En livraison', date: 'Hier, 11:06' },
];

export const initialDeliveries: Delivery[] = [
  { id: 'DL-881', orderId: 'TR-2408', customer: 'Awa Ndiaye', address: '12 rue 10, Mermoz, Dakar', phone: '77 234 18 60', fee: 2000, status: 'À préparer' },
  { id: 'DL-880', orderId: 'TR-2407', customer: 'Moussa Faye', address: 'Cité Keur Gorgui, Sacré-Cœur', phone: '76 842 90 11', fee: 2000, status: 'Livrée' },
  { id: 'DL-879', orderId: 'TR-2406', customer: 'Fatou Sarr', address: 'Villa 28, Almadies', phone: '70 412 65 08', fee: 2000, status: 'En route' },
];

export const initialRentals: Rental[] = [
  { id: 'LOC-114', customer: 'Ibrahima Ba', phone: '78 503 41 20', vehicleId: 'renault-duster', start: '2025-08-22T09:00', end: '2025-08-25T18:00', pickup: 'Agence Point E', returnLocation: 'Aéroport Blaise Diagne', total: 126000, status: 'Confirmée' },
  { id: 'LOC-113', customer: 'Sophie Martin', phone: '77 104 08 22', vehicleId: 'toyota-corolla', start: '2025-08-19T10:00', end: '2025-08-21T10:00', pickup: 'Aéroport Blaise Diagne', returnLocation: 'Agence Point E', total: 56000, status: 'Terminée' },
];

export const initialCustomers: Customer[] = [
  { id: 'cus-01', name: 'Awa Ndiaye', phone: '77 234 18 60', email: 'awa.ndiaye@email.com', address: 'Mermoz, Dakar', orders: 8, rentals: 1 },
  { id: 'cus-02', name: 'Moussa Faye', phone: '76 842 90 11', email: 'moussa.faye@email.com', address: 'Sacré-Cœur, Dakar', orders: 4, rentals: 0 },
  { id: 'cus-03', name: 'Fatou Sarr', phone: '70 412 65 08', email: 'fatou.sarr@email.com', address: 'Almadies, Dakar', orders: 11, rentals: 2 },
  { id: 'cus-04', name: 'Ibrahima Ba', phone: '78 503 41 20', email: 'ibrahima.ba@email.com', address: 'Ouakam, Dakar', orders: 2, rentals: 3 },
];

export const initialPromotions: Promotion[] = [
  { id: 'promo-01', title: 'Les essentiels du Sahel', productIds: ['riz-local', 'huile-arachide'], discount: 10, startsAt: '2025-08-01', endsAt: '2025-08-31', status: 'Active' },
  { id: 'promo-02', title: 'Pause fraîcheur', productIds: ['jus-bissap'], discount: 15, startsAt: '2025-08-15', endsAt: '2025-08-30', status: 'Active' },
];

export const formatFcfa = (value: number) => `${new Intl.NumberFormat('fr-FR').format(Math.round(value))} FCFA`;
export const getProduct = (id: string) => products.find((product) => product.id === id);
export const getVehicle = (id: string) => vehicles.find((vehicle) => vehicle.id === id);