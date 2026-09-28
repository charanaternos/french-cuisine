// ==========================================================================
// La Table Française - Authentic French Recipe Database
// Complete with multilingual translations, scalable portions, step timers & wine pairings
// ==========================================================================

const RECIPES_DATA = [
  {
    id: "ratatouille",
    title: "Ratatouille",
    titleEn: "Ratatouille",
    titleTe: "రతాతుయ్ ప్రొవెన్సాల్ (రొట్టె చేసిన కూరగాయలు)",
    titleHi: "रतातूई प्रोवेनसाल (रोस्टेड वेजिटेबल्स)",
    region: "Provence",
    category: "main-course",
    categoryLabel: "Main Course",
    difficulty: "Easy",
    rating: 4.9,
    reviews: "1.2k",
    prepTime: 20,
    cookTime: 40,
    calories: 210,
    servingsBase: 4,
    image: "assets/images/ratatouille.jpg",
    tags: ["Vegetarian", "Gluten-Free", "Provence", "Healthy"],
    subtitle: "A traditional vegetable dish from Provence.",
    subtitleEn: "A traditional vegetable dish from Provence.",
    subtitleTe: "ప్రోవెన్స్ సంప్రదాయ రుచికరమైన కూరగాయల వంటకం.",
    subtitleHi: "प्रोवेंस का पारंपरिक और पौष्टिक शाकाहारी व्यंजन।",
    description: "A colorful and healthy dish from the south of France, full of fresh vegetables and Mediterranean herbs. Thinly sliced zucchini, yellow squash, eggplant, and ripe tomatoes baked to tender perfection with extra virgin olive oil, garlic, and thyme.",
    winePairing: {
      wine: "Côtes de Provence Rosé or Bandol Blanc",
      notes: "A crisp, dry rosé from Provence that mirrors the fresh acidity of sun-ripened tomatoes and fragrant thyme."
    },
    chefTip: "Slice vegetables to an even 3mm thickness using a mandoline. Arrange them in a tight spiral over a bed of simmered bell pepper tomato coulis for stunning presentation.",
    nutrition: { protein: "4g", carbs: "18g", fat: "14g", fiber: "7g" },
    ingredients: [
      { name: "Fresh green zucchini, sliced", amount: 2, unit: "pcs" },
      { name: "Yellow squash, sliced", amount: 1, unit: "pc" },
      { name: "Glossy Italian eggplant", amount: 2, unit: "pcs" },
      { name: "Ripe Roma tomatoes", amount: 4, unit: "pcs" },
      { name: "Extra virgin olive oil", amount: 4, unit: "tbsp" },
      { name: "Garlic cloves, minced", amount: 4, unit: "cloves" },
      { name: "Fresh thyme and rosemary leaves", amount: 3, unit: "sprigs" },
      { name: "Crushed tomato coulis base", amount: 1, unit: "cup" },
      { name: "Sea salt and cracked black pepper", amount: 1, unit: "pinch" }
    ],
    steps: [
      { step: 1, title: "Spread Coulis Base", instruction: "Preheat oven to 180°C (350°F). Spread tomato coulis evenly on the bottom of a round baking dish with half the minced garlic and 1 tbsp olive oil.", timerSeconds: 0 },
      { step: 2, title: "Arrange Vegetable Spiral", instruction: "Layer alternating slices of green zucchini, yellow squash, eggplant, and tomato in a tight spiral from the rim toward the center.", timerSeconds: 600 },
      { step: 3, title: "Season with Herbs", instruction: "Drizzle with olive oil, scatter remaining garlic, fresh thyme leaves, sea salt, and pepper.", timerSeconds: 120 },
      { step: 4, title: "Bake to Perfection", instruction: "Cover with parchment paper and bake for 40 minutes. Remove parchment and bake 10 more minutes until vegetables are tender and slightly caramelized.", timerSeconds: 2400 }
    ]
  },
  {
    id: "croissant",
    title: "Croissant",
    titleEn: "Croissant",
    titleTe: "క్రోసెంట్ (బట్టరీ ఫ్రెంచ్ పేస్ట్రీ)",
    titleHi: "क्रोइसैंट (मक्खन वाली परतदार पेस्ट्री)",
    region: "Paris",
    category: "pastry",
    categoryLabel: "Pastry",
    difficulty: "Medium",
    rating: 4.8,
    reviews: "980",
    prepTime: 45,
    cookTime: 25,
    calories: 310,
    servingsBase: 8,
    image: "assets/images/croissant.jpg",
    tags: ["Pastry", "Bakery", "Breakfast", "Paris"],
    subtitle: "Flaky, buttery and simply irresistible.",
    subtitleEn: "Flaky, buttery and simply irresistible.",
    subtitleTe: "కరకరలాడే వెన్నతో చేసిన అసలైన ఫ్రెంచ్ పేస్ట్రీ.",
    subtitleHi: "परतदार, मक्खन से भरपूर और बेहद स्वादिष्ट पेस्ट्री।",
    description: "The quintessential French breakfast pastry: laminated yeast-leavened dough layered with high-fat Normandy butter, folded and rolled into delicate crescent shapes that bake into golden, shattering, honeycomb-structured pastries.",
    winePairing: {
      wine: "Café au Lait or Champagne Brut",
      notes: "A morning café au lait or a crisp sparkling Champagne cuts through rich buttery layers with refreshing effervescence."
    },
    chefTip: "Keep your butter block and dough at the exact same cool temperature (~15°C/60°F) during lamination so the butter glides between layers without breaking or melting.",
    nutrition: { protein: "6g", carbs: "32g", fat: "18g", fiber: "1.5g" },
    ingredients: [
      { name: "French T55 or all-purpose flour", amount: 500, unit: "g" },
      { name: "European unsalted butter (82% fat)", amount: 280, unit: "g" },
      { name: "Whole milk, lukewarm", amount: 140, unit: "ml" },
      { name: "Filtered water, chilled", amount: 140, unit: "ml" },
      { name: "Cane sugar", amount: 55, unit: "g" },
      { name: "Fine sea salt", amount: 10, unit: "g" },
      { name: "Active dry yeast", amount: 11, unit: "g" },
      { name: "Egg yolk mixed with 1 tbsp milk (egg wash)", amount: 1, unit: "pc" }
    ],
    steps: [
      { step: 1, title: "Prepare Détrempe Dough", instruction: "Mix flour, sugar, salt, yeast, milk, and water. Knead lightly into a smooth dough ball. Chill for 2 hours.", timerSeconds: 600 },
      { step: 2, title: "Laminate Butter Block", instruction: "Enclose butter block in dough. Roll out and perform three single folds (turns), resting 30 minutes in refrigerator between each turn.", timerSeconds: 1800 },
      { step: 3, title: "Shape the Crescents", instruction: "Roll dough to 4mm thickness, cut isosceles triangles, gently stretch bases, and roll tightly into crescent shapes. Proof for 2 hours until puffed.", timerSeconds: 1200 },
      { step: 4, title: "Bake until Golden", instruction: "Brush gently with egg wash. Bake at 200°C (400°F) for 10 minutes, reduce to 180°C (350°F) for 12-15 minutes until deep golden brown.", timerSeconds: 1500 }
    ]
  },
  {
    id: "crepes",
    title: "Crêpes",
    titleEn: "Crêpes",
    titleTe: "ఫ్రెంచ్ క్రేప్స్ (పలుచని పాన్‌కేకులు)",
    titleHi: "फ्रेंच क्रेप्स (पतले पैनकेक्स)",
    region: "Normandy",
    category: "dessert",
    categoryLabel: "Dessert",
    difficulty: "Easy",
    rating: 4.9,
    reviews: "1.1k",
    prepTime: 10,
    cookTime: 20,
    calories: 165,
    servingsBase: 4,
    image: "assets/images/crepes.jpg",
    tags: ["Dessert", "Breakfast", "Sweet", "Classic"],
    subtitle: "Thin pancakes, perfect for any occasion.",
    subtitleEn: "Thin pancakes, perfect for any occasion.",
    subtitleTe: "ఏ సందర్భానికైనా అనువైన తేలికపాటి ఫ్రెంచ్ పాన్‌కేకులు.",
    subtitleHi: "हर अवसर के लिए बिल्कुल सही पतले और मुलायम पैनकेक्स।",
    description: "Delicate, golden French crêpes made from a silky milk, egg, and browned butter batter. Cooked paper-thin in a hot skillet and topped with fresh berries, powdered sugar, or rich chocolate spread.",
    winePairing: {
      wine: "Cidre Brut de Normandie",
      notes: "Crisp Normandy apple cider provides the authentic historical pairing for sweet or savory crêpes."
    },
    chefTip: "Let your crêpe batter rest at room temperature for at least 30 minutes before cooking. This allows the gluten to relax and starch granules to swell, ensuring tear-free, lace-thin crêpes.",
    nutrition: { protein: "5g", carbs: "22g", fat: "6g", fiber: "1g" },
    ingredients: [
      { name: "All-purpose wheat flour", amount: 200, unit: "g" },
      { name: "Fresh large eggs", amount: 3, unit: "pcs" },
      { name: "Whole milk", amount: 500, unit: "ml" },
      { name: "Melted unsalted butter", amount: 40, unit: "g" },
      { name: "Granulated sugar", amount: 2, unit: "tbsp" },
      { name: "Pure vanilla bean extract", amount: 1, unit: "tsp" },
      { name: "Pinch of fine salt", amount: 1, unit: "pinch" }
    ],
    steps: [
      { step: 1, title: "Whisk Silky Batter", instruction: "Whisk eggs, milk, melted butter, sugar, vanilla, and salt. Gradually sift in flour until velvety smooth with no lumps.", timerSeconds: 300 },
      { step: 2, title: "Rest Batter", instruction: "Cover and let the batter rest for 30 minutes to relax gluten for tender, delicate crêpes.", timerSeconds: 1800 },
      { step: 3, title: "Swirl in Hot Pan", instruction: "Heat a non-stick crêpe pan over medium heat with a dab of butter. Pour a scant 1/4 cup batter, swirling immediately to coat the pan paper-thin.", timerSeconds: 60 },
      { step: 4, title: "Flip and Serve", instruction: "Cook 1-2 minutes until edges curl golden brown. Flip gently and cook 30 seconds more. Fold into triangles and dust with sugar.", timerSeconds: 60 }
    ]
  },
  {
    id: "coq-au-vin",
    title: "Coq au Vin",
    titleEn: "Coq au Vin",
    titleTe: "కోక్ ఓ విన్ (రెడ్ వైన్ లో ఉడికించిన చికెన్)",
    titleHi: "कॉक ओ वाइन (रेड वाइन चिकन स्टू)",
    region: "Bourgogne",
    category: "main-course",
    categoryLabel: "Main Course",
    difficulty: "Medium",
    rating: 4.8,
    reviews: "860",
    prepTime: 30,
    cookTime: 120,
    calories: 520,
    servingsBase: 4,
    image: "assets/images/coq_au_vin.jpg",
    tags: ["Comfort Food", "Chicken", "Burgundy", "Wine"],
    subtitle: "A classic French dish with rich flavors.",
    subtitleEn: "A classic French dish with rich flavors.",
    subtitleTe: "సంపన్నమైన రుచులతో కూడిన సంప్రదాయ ఫ్రెంచ్ చికెన్ వంటకం.",
    subtitleHi: "गहरे और समृद्ध स्वाद वाला पारंपरिक फ्रेंच चिकन व्यंजन।",
    description: "Tender bone-in chicken thighs braised slowly in full-bodied red Burgundy wine with smoked lardons, earthy cremini mushrooms, caramelized pearl onions, and aromatic bouquet garni.",
    winePairing: {
      wine: "Bourgogne Pinot Noir or Côtes du Rhône",
      notes: "Always serve with the same red Burgundy or Pinot Noir used in the braising liquor for harmonious flavor resonance."
    },
    chefTip: "Brown the bacon lardons first, then sear the chicken in the rendered bacon fat. This layers incredible smoky savory depth into the sauce.",
    nutrition: { protein: "44g", carbs: "12g", fat: "26g", fiber: "2.5g" },
    ingredients: [
      { name: "Bone-in chicken thighs and drumsticks", amount: 1.2, unit: "kg" },
      { name: "Full-bodied red Burgundy wine (Pinot Noir)", amount: 750, unit: "ml" },
      { name: "Smoked bacon lardons, diced", amount: 150, unit: "g" },
      { name: "Cremini button mushrooms, halved", amount: 250, unit: "g" },
      { name: "Pearl onions, peeled", amount: 12, unit: "pcs" },
      { name: "Garlic cloves, crushed", amount: 4, unit: "cloves" },
      { name: "Fresh bouquet garni (thyme, rosemary, bay leaf)", amount: 1, unit: "bundle" },
      { name: "Tomato paste", amount: 2, unit: "tbsp" },
      { name: "Beurre manié (equal parts butter & flour kneaded)", amount: 30, unit: "g" }
    ],
    steps: [
      { step: 1, title: "Crisp Bacon Lardons", instruction: "In a Dutch oven, crisp bacon lardons until golden and fragrant. Transfer with slotted spoon, leaving flavorful drippings.", timerSeconds: 480 },
      { step: 2, title: "Brown Chicken Pieces", instruction: "Season chicken with salt and pepper. Sear in the hot bacon fat over medium-high heat until skin is deeply golden, 4-5 minutes per side.", timerSeconds: 600 },
      { step: 3, title: "Braise in Red Wine", instruction: "Add garlic, pearl onions, tomato paste, bouquet garni, and pour over the entire bottle of red wine. Bring to simmer, cover, and gently braise for 75 minutes.", timerSeconds: 4500 },
      { step: 4, title: "Sauté Mushrooms & Thicken", instruction: "In a separate skillet, sauté mushrooms in butter until caramelized. Add mushrooms and lardons into stew. Whisk in beurre manié to thicken to a glossy glaze.", timerSeconds: 900 }
    ]
  },
  {
    id: "boeuf-bourguignon",
    title: "Bœuf Bourguignon",
    titleEn: "Beef Bourguignon",
    titleTe: "బోఫ్ బుర్గిన్యోన్ (ఫ్రెంచ్ రెడ్ వైన్ బీఫ్ స్టీవ్)",
    titleHi: "बीफ बोरगिग्नन (रेड वाइन में पका हुआ स्टू)",
    region: "Bourgogne",
    category: "main-course",
    categoryLabel: "Main Course",
    difficulty: "Advanced",
    rating: 5.0,
    reviews: "2.4k",
    prepTime: 40,
    cookTime: 180,
    calories: 620,
    servingsBase: 6,
    image: "assets/images/boeuf_bourguignon.jpg",
    tags: ["Beef", "Burgundy", "Slow-Cooked", "Gourmet"],
    subtitle: "Julia Child's beloved Burgundy beef stew.",
    subtitleEn: "Julia Child's beloved Burgundy beef stew.",
    subtitleTe: "జూలియా చైల్డ్ ప్రసిద్ధ బర్గండీ స్టీవ్.",
    subtitleHi: "जूलिया चाइल्ड का प्रसिद्ध और स्वादिष्ट फ्रेंच स्टू।",
    description: "The jewel of French comfort gastronomy: prime chuck beef seared in bacon lardons, simmered for 3 hours in red Burgundy wine and rich beef bone broth with sweet carrots, mushrooms, and fresh herbs.",
    winePairing: {
      wine: "Gevrey-Chambertin or Pommard (Burgundy)",
      notes: "The muscular tannins and dark fruit of aged Pinot Noir elevate the succulent slow-braised beef."
    },
    chefTip: "Pat beef cubes completely dry before searing in a smoking hot Dutch oven. Crowding the pan causes meat to steam instead of caramelize.",
    nutrition: { protein: "52g", carbs: "14g", fat: "32g", fiber: "3g" },
    ingredients: [
      { name: "Boneless beef chuck roast, cut in 2-inch cubes", amount: 1.5, unit: "kg" },
      { name: "Dry red Burgundy wine", amount: 750, unit: "ml" },
      { name: "Rich beef bone stock", amount: 500, unit: "ml" },
      { name: "Smoked pork belly lardons", amount: 180, unit: "g" },
      { name: "Carrots, sliced into 1-inch chunks", amount: 4, unit: "pcs" },
      { name: "Cremini mushrooms, quartered", amount: 300, unit: "g" },
      { name: "Pearl onions", amount: 16, unit: "pcs" },
      { name: "Garlic cloves, minced", amount: 5, unit: "cloves" }
    ],
    steps: [
      { step: 1, title: "Sear Beef Cubes", instruction: "Brown beef cubes in batches in hot bacon fat until deeply caramelized on all sides.", timerSeconds: 900 },
      { step: 2, title: "Sauté Aromatics", instruction: "Add carrots and onions to Dutch oven. Stir until lightly softened, then stir in tomato paste and garlic.", timerSeconds: 300 },
      { step: 3, title: "Slow Braise", instruction: "Return beef, pour in red wine and beef stock. Simmer covered in oven at 160°C (325°F) for 2.5 to 3 hours until fork-tender.", timerSeconds: 10800 },
      { step: 4, title: "Combine and Glaze", instruction: "Fold in sautéed butter mushrooms and glazed pearl onions. Simmer uncovered for 10 minutes until sauce coats the back of a spoon.", timerSeconds: 600 }
    ]
  },
  {
    id: "soupe-oignon",
    title: "Soupe à l'Oignon Gratinée",
    titleEn: "French Onion Soup",
    titleTe: "ఫ్రెంచ్ ఆనియన్ సూప్ (కరిగిన చీజ్ తో)",
    titleHi: "फ्रेंच अनियन सूप (पिघली हुई चीज के साथ)",
    region: "Paris",
    category: "main-course",
    categoryLabel: "Soup & Starter",
    difficulty: "Medium",
    rating: 4.9,
    reviews: "1.5k",
    prepTime: 20,
    cookTime: 60,
    calories: 340,
    servingsBase: 4,
    image: "assets/images/soupe_oignon.jpg",
    tags: ["Soup", "Cheese", "Paris", "Bistro"],
    subtitle: "Caramelized onions with bubbling Gruyère crust.",
    subtitleEn: "Caramelized onions with bubbling Gruyère crust.",
    subtitleTe: "కారమెలైజ్డ్ ఉల్లిపాయలు మరియు కరిగిన గ్రుయెర్ చీజ్ సూప్.",
    subtitleHi: "कैरमेलाइज्ड प्याज और पिघले हुए ग्रूयेर चीज़ वाला पारंपरिक सूप।",
    description: "Sweet yellow onions slow-caramelized over 45 minutes to deep mahogany richness, deglazed with dry white wine and rich beef broth, topped with toasted artisanal baguette and melted bubbling Swiss Gruyère.",
    winePairing: {
      wine: "Bourgogne Aligoté or Côtes du Jura",
      notes: "A dry, mineral white wine cuts through the decadent richness of melted Gruyère cheese."
    },
    chefTip: "Patience is key: do not rush the onion caramelization over high flame. Low and slow develops natural sugars without bitterness.",
    nutrition: { protein: "16g", carbs: "26g", fat: "18g", fiber: "4g" },
    ingredients: [
      { name: "Yellow onions, thinly sliced", amount: 1.2, unit: "kg" },
      { name: "French unsalted butter", amount: 45, unit: "g" },
      { name: "Dry white wine", amount: 120, unit: "ml" },
      { name: "Rich beef stock", amount: 1.2, unit: "liters" },
      { name: "French artisanal baguette, sliced & toasted", amount: 8, unit: "slices" },
      { name: "Grated Swiss Gruyère cheese", amount: 200, unit: "g" }
    ],
    steps: [
      { step: 1, title: "Caramelize Onions", instruction: "Melt butter in heavy pot. Cook onions on low heat for 45 minutes, stirring frequently until deep amber and sweet.", timerSeconds: 2700 },
      { step: 2, title: "Deglaze & Simmer", instruction: "Pour in white wine to scrape up brown bits. Add beef stock and fresh thyme sprigs. Simmer for 25 minutes.", timerSeconds: 1500 },
      { step: 3, title: "Broil Gratinée", instruction: "Ladle soup into oven-safe ramekins. Top with toasted baguette slices and mound generously with grated Gruyère. Broil 3-4 minutes until bubbling and golden.", timerSeconds: 240 }
    ]
  },
  {
    id: "quiche-lorraine",
    title: "Quiche Lorraine",
    titleEn: "Quiche Lorraine",
    titleTe: "క్విచే లొరైన్ (క్రీమీ బేకన్ పై)",
    titleHi: "क्विश लोरेन (मलाईदार बेकन टार्ट)",
    region: "Alsace",
    category: "breakfast",
    categoryLabel: "Breakfast & Brunch",
    difficulty: "Medium",
    rating: 4.8,
    reviews: "920",
    prepTime: 25,
    cookTime: 35,
    calories: 420,
    servingsBase: 6,
    image: "assets/images/quiche_lorraine.jpg",
    tags: ["Breakfast", "Brunch", "Alsace", "Savory"],
    subtitle: "Classic savory tart with bacon lardons & cream.",
    subtitleEn: "Classic savory tart with bacon lardons & cream.",
    subtitleTe: "క్రిస్పీ బేకన్ లార్డన్స్ మరియు ఫ్రెంచ్ క్రీమ్‌తో చేసిన రుచికరమైన పై.",
    subtitleHi: "कुरकुरे बेकन और गाढ़ी मलाई से बना लोकप्रिय क्लासिक टार्ट।",
    description: "The pride of eastern France: a buttery shortcrust pastry filled with crisp smoked bacon lardons, fresh farm eggs, rich crème fraîche, and a fragrant whisper of freshly grated nutmeg.",
    winePairing: {
      wine: "Alsace Pinot Blanc or Riesling",
      notes: "A dry Alsace Pinot Blanc complements the creamy egg custard and balances the smoky saltiness of bacon."
    },
    chefTip: "Blind-bake your pastry crust for 15 minutes before adding the custard to prevent a soggy bottom.",
    nutrition: { protein: "18g", carbs: "24g", fat: "28g", fiber: "1.5g" },
    ingredients: [
      { name: "Pâte brisée (shortcrust pastry disc)", amount: 1, unit: "pc" },
      { name: "Smoked bacon lardons", amount: 200, unit: "g" },
      { name: "Fresh eggs", amount: 4, unit: "pcs" },
      { name: "Crème fraîche or heavy cream", amount: 250, unit: "ml" },
      { name: "Whole milk", amount: 150, unit: "ml" },
      { name: "Freshly grated nutmeg", amount: 1, unit: "pinch" }
    ],
    steps: [
      { step: 1, title: "Blind Bake Crust", instruction: "Line a 9-inch tart tin with pastry. Prick base with fork, weight with baking beans, and bake at 190°C (375°F) for 15 minutes.", timerSeconds: 900 },
      { step: 2, title: "Crisp Lardons", instruction: "Sauté lardons until crisp. Drain excess fat on paper towels and scatter across the pre-baked pastry base.", timerSeconds: 300 },
      { step: 3, title: "Whisk Custard & Bake", instruction: "Whisk eggs, crème fraîche, milk, salt, pepper, and nutmeg until frothy. Pour over lardons. Bake for 30-35 minutes until puffed and set.", timerSeconds: 2100 }
    ]
  },
  {
    id: "creme-brulee",
    title: "Crème Brûlée",
    titleEn: "Crème Brûlée",
    titleTe: "క్రెమ్ బ్రూలే (కారమెల్ క్రస్ట్‌తో వెనిల్లా కస్టర్డ్)",
    titleHi: "क्रेम ब्रूले (कैरमेल क्रस्ट वाला वेनिला कस्टर्ड)",
    region: "Paris",
    category: "dessert",
    categoryLabel: "Dessert",
    difficulty: "Easy",
    rating: 4.9,
    reviews: "1.8k",
    prepTime: 20,
    cookTime: 45,
    calories: 380,
    servingsBase: 4,
    image: "assets/images/creme_brulee.jpg",
    tags: ["Dessert", "Vanilla", "Paris", "Classic"],
    subtitle: "Silky vanilla custard with shatteringly crisp caramel.",
    subtitleEn: "Silky vanilla custard with shatteringly crisp caramel.",
    subtitleTe: "కరకరలాడే చక్కెర పొరతో సున్నితమైన వెనిల్లా డెజర్ట్.",
    subtitleHi: "कुरकुरी कैरमेल परत और रेशमी वेनिला कस्टर्ड से बना लाजवाब डेसर्ट।",
    description: "Velvety custard infused with whole Madagascar vanilla bean seeds, gently baked in a water bath, then topped with cane sugar and torched until shatteringly crisp.",
    winePairing: {
      wine: "Sauternes or Muscat de Beaumes-de-Venise",
      notes: "A honeyed Sauternes dessert wine creates heavenly harmony with warm burnt sugar and chilled vanilla cream."
    },
    chefTip: "Always chill the baked custards for at least 4 hours before torching the sugar, ensuring a delightful contrast between cold custard and hot caramel.",
    nutrition: { protein: "5g", carbs: "26g", fat: "28g", fiber: "0g" },
    ingredients: [
      { name: "Heavy whipping cream", amount: 500, unit: "ml" },
      { name: "Egg yolks, large", amount: 5, unit: "pcs" },
      { name: "Madagascar vanilla bean, split & scraped", amount: 1, unit: "pod" },
      { name: "Granulated sugar for custard", amount: 70, unit: "g" },
      { name: "Cane sugar for caramel crust", amount: 4, unit: "tbsp" }
    ],
    steps: [
      { step: 1, title: "Infuse Cream", instruction: "Heat heavy cream with split vanilla bean and seeds to gentle simmer. Remove from heat and steep 15 minutes.", timerSeconds: 900 },
      { step: 2, title: "Whisk Custard", instruction: "Whisk egg yolks and sugar until pale yellow. Slowly stream in warm cream while continuously whisking.", timerSeconds: 300 },
      { step: 3, title: "Bake in Water Bath", instruction: "Pour into 4 shallow ramekins. Place in roasting pan filled with boiling water halfway up the sides. Bake at 150°C (300°F) for 40-45 minutes.", timerSeconds: 2700 },
      { step: 4, title: "Torch Sugar Glass", instruction: "Chill for 4 hours. Scatter thin layer of cane sugar on top and caramelize with blowtorch until deep amber glass.", timerSeconds: 120 }
    ]
  },
  {
    id: "salade-lyonnaise",
    title: "Salade Lyonnaise",
    titleEn: "Classic Lyonnaise Salad",
    titleTe: "సలాడ్ లయోన్నైస్ (పోచ్డ్ గుడ్డు మరియు బేకన్ సలాడ్)",
    titleHi: "सलाद ल्योनेस (पोच्ड एग और बेकन सलाद)",
    region: "Lyon",
    category: "main-course",
    categoryLabel: "Lyon Specialty",
    difficulty: "Easy",
    rating: 4.9,
    reviews: "1.4k",
    prepTime: 15,
    cookTime: 15,
    calories: 360,
    servingsBase: 4,
    image: "assets/images/salade_nicoise.jpg",
    tags: ["Lyon", "Salad", "Bacon", "Bistro"],
    subtitle: "Bistro frisée salad with warm bacon lardons & poached egg.",
    subtitleEn: "Bistro frisée salad with warm bacon lardons & poached egg.",
    subtitleTe: "ఫ్రెంచ్ బోషాన్ల ప్రసిద్ధ క్రిస్పీ బేకన్ మరియు పోచ్డ్ గుడ్డు సలాడ్.",
    subtitleHi: "कुरकुरी बेकन, लहसुनी क्राउटॉन्स और पोच्ड एग वाला पारंपरिक ल्योन सलाद।",
    description: "The crown jewel of Lyon's traditional bouchons: crisp frisée curly endive tossed in a warm shallot and red wine vinegar Dijon dressing with sizzling smoked pork lardons, crunchy garlic croutons, and a warm soft-poached farm egg that creates a rich, velvety emulsion when pierced.",
    winePairing: {
      wine: "Beaujolais-Villages or Coteaux du Lyonnais",
      notes: "A fruity, vibrant Beaujolais (Gamay grape) from just north of Lyon balances the rich smoky lardons and sharp Dijon dressing."
    },
    chefTip: "Toss the greens with the vinaigrette while the rendered bacon drippings are still warm, and poach the eggs with a splash of white vinegar in gentle simmering water for 3 minutes for a perfect molten yolk.",
    nutrition: { protein: "18g", carbs: "14g", fat: "26g", fiber: "3g" },
    ingredients: [
      { name: "Crisp frisée curly endive lettuce, washed & torn", amount: 1, unit: "large head" },
      { name: "Thick-cut smoked pork lardons, diced", amount: 200, unit: "g" },
      { name: "Fresh farm eggs for poaching", amount: 4, unit: "pcs" },
      { name: "Artisanal crusty bread, cut into 1/2-inch croutons", amount: 2, unit: "cups" },
      { name: "French Dijon mustard", amount: 1, unit: "tbsp" },
      { name: "Red wine vinegar", amount: 2, unit: "tbsp" },
      { name: "Extra virgin olive oil", amount: 3, unit: "tbsp" },
      { name: "Finely minced French shallot", amount: 1, unit: "pc" }
    ],
    steps: [
      { step: 1, title: "Crisp Lardons & Croutons", instruction: "In a skillet, crisp diced bacon lardons until golden brown. Remove with slotted spoon. In the hot bacon drippings, toss bread cubes until golden and crunchy.", timerSeconds: 420 },
      { step: 2, title: "Whisk Warm Vinaigrette", instruction: "Whisk minced shallot, Dijon mustard, red wine vinegar, olive oil, and 2 tbsp warm bacon pan drippings with a pinch of salt and pepper.", timerSeconds: 180 },
      { step: 3, title: "Poach the Farm Eggs", instruction: "Bring a pot of water with 1 tbsp vinegar to a gentle simmer. Swirl water to create a vortex and slide in cracked eggs one by one. Poach gently for 3 minutes until whites are set and yolks are soft.", timerSeconds: 180 },
      { step: 4, title: "Assemble and Serve Warm", instruction: "Toss frisée greens with warm dressing, lardons, and croutons. Divide into bowls and top each with a drained poached egg and cracked black pepper.", timerSeconds: 120 }
    ]
  },
  {
    id: "bouillabaisse",
    title: "Bouillabaisse Marseillaise",
    titleEn: "Traditional Marseille Seafood Stew",
    titleTe: "బుయాబేస్ (మార్సెయ్ సంప్రదాయ సీఫుడ్ స్టీవ్)",
    titleHi: "बुयाबेस (पारंपरिक फ्रेंच सीफूड स्टू)",
    region: "Provence",
    category: "main-course",
    categoryLabel: "Provençal Seafood",
    difficulty: "Advanced",
    rating: 4.9,
    reviews: "1.7k",
    prepTime: 40,
    cookTime: 45,
    calories: 450,
    servingsBase: 6,
    image: "assets/images/bouillabaisse.jpg",
    tags: ["Seafood", "Provence", "Fish", "Mediterranean"],
    subtitle: "Provençal seafood stew with saffron, fennel & fiery rouille.",
    subtitleEn: "Provençal seafood stew with saffron, fennel & fiery rouille.",
    subtitleTe: "కుంకుమపువ్వు మరియు సోంపుతో కూడిన మధ్యధరా సముద్రపు చేపల వంటకం.",
    subtitleHi: "केसर, सौंफ और गार्लिक रुई सॉस के साथ तैयार किया गया क्लासिक सीफूड स्टू।",
    description: "The pride of Marseille: a fragrant Mediterranean fish and shellfish stew scented with Spanish saffron threads, shaved fennel bulb, sun-dried orange peel, and pastis, served with garlic croutons and spicy piment d'Espelette rouille.",
    winePairing: {
      wine: "Cassis Blanc or Bandol Rosé",
      notes: "A mineral-driven white Cassis from the limestone cliffs of Provence matches the oceanic salinity and saffron fragrance."
    },
    chefTip: "Boil the broth rapidly (bouillir et baisser) so the olive oil and seafood stock emulsify into a rich, velvety orange broth.",
    nutrition: { protein: "46g", carbs: "12g", fat: "16g", fiber: "2g" },
    ingredients: [
      { name: "Mixed firm white fish (monkfish, red mullet, sea bass)", amount: 1.2, unit: "kg" },
      { name: "Fresh Mediterranean prawns and mussels", amount: 400, unit: "g" },
      { name: "Fennel bulb, finely sliced", amount: 1, unit: "pc" },
      { name: "Ripe Roma tomatoes, crushed", amount: 4, unit: "pcs" },
      { name: "Pure saffron threads", amount: 1, unit: "pinch" },
      { name: "Dry white wine", amount: 200, unit: "ml" },
      { name: "Garlic cloves", amount: 6, unit: "cloves" },
      { name: "Rouille sauce and toasted baguette slices", amount: 1, unit: "serving" }
    ],
    steps: [
      { step: 1, title: "Sauté Aromatics", instruction: "Sweat onions, fennel, leeks, and garlic in extra virgin olive oil until tender and fragrant. Add tomatoes, orange peel, and white wine.", timerSeconds: 600 },
      { step: 2, title: "Simmer Saffron Broth", instruction: "Add fish stock and saffron threads. Bring to a rolling boil so the olive oil and broth emulsify into a golden soup.", timerSeconds: 900 },
      { step: 3, title: "Cook Seafood in Stages", instruction: "Add firm fish first (monkfish), simmer 5 minutes, then add tender fish, prawns, and mussels until shells open.", timerSeconds: 480 },
      { step: 4, title: "Serve with Rouille", instruction: "Ladle hot broth into wide shallow bowls. Serve fish alongside toasted baguette croutons smothered with spicy garlic rouille.", timerSeconds: 120 }
    ]
  },
  {
    id: "canard-orange",
    title: "Canard à l'Orange",
    titleEn: "Crispy Duck Breast with Orange Bigarade",
    titleTe: "కనార్డ్ ఎ ఎల్'ఆరెంజ్ (నారింజ సాస్ లో డక్ బ్రెస్ట్)",
    titleHi: "कनार्ड अ ल'ऑरेंज (ऑरेंज सॉस वाला बत्तख का व्यंजन)",
    region: "Paris",
    category: "main-course",
    categoryLabel: "Haute Cuisine",
    difficulty: "Medium",
    rating: 4.9,
    reviews: "950",
    prepTime: 20,
    cookTime: 25,
    calories: 540,
    servingsBase: 2,
    image: "assets/images/canard_orange.jpg",
    tags: ["Duck", "Citrus", "Paris", "Gourmet"],
    subtitle: "Pan-roasted duck breast in bittersweet orange bigarade glaze.",
    subtitleEn: "Pan-roasted duck breast in bittersweet orange bigarade glaze.",
    subtitleTe: "క్రంచీ స్కిన్ డక్ బ్రెస్ట్ మరియు తీపి-పులుపు నారింజ సాస్.",
    subtitleHi: "कुरकुरी बत्तख की छाती और खट्टे-मीठे संतरे के सॉस का प्रसिद्ध शाही व्यंजन।",
    description: "A triumph of French classical haute cuisine: pan-roasted duck breast with crackling scored skin, finished with a classic gastrique of caramelized sugar, red wine vinegar, fresh Seville orange juice, and Grand Marnier.",
    winePairing: {
      wine: "Pinot Noir de Bourgogne or Pomerol",
      notes: "Silky, red-fruited Pinot Noir mirrors the acidity of citrus without clashing with the savory duck."
    },
    chefTip: "Score only the duck skin in a diamond lattice without cutting into the meat, and begin rendering skin-side down in a cold skillet on low heat.",
    nutrition: { protein: "38g", carbs: "16g", fat: "28g", fiber: "1g" },
    ingredients: [
      { name: "Magret duck breast fillets, skin scored in diamond pattern", amount: 2, unit: "fillets" },
      { name: "Fresh oranges (juice of 2, zest of 1 blanched)", amount: 3, unit: "pcs" },
      { name: "Granulated sugar for gastrique", amount: 2, unit: "tbsp" },
      { name: "Red wine vinegar", amount: 2, unit: "tbsp" },
      { name: "Rich duck or veal demi-glace", amount: 150, unit: "ml" },
      { name: "Grand Marnier or orange liqueur", amount: 1, unit: "tbsp" },
      { name: "Cold French butter cubes for monte au beurre", amount: 25, unit: "g" }
    ],
    steps: [
      { step: 1, title: "Render Duck Skin", instruction: "Place duck skin-down in a cold skillet over low-medium heat. Render fat slowly for 10-12 minutes until shatteringly crisp.", timerSeconds: 720 },
      { step: 2, title: "Sear Meat and Rest", instruction: "Flip duck and cook meat side for 3-4 minutes until medium-rare (54°C / 130°F). Transfer to warm plate and rest 6 minutes.", timerSeconds: 240 },
      { step: 3, title: "Create Orange Gastrique", instruction: "In saucepan, caramelize sugar with vinegar until deep amber. Deglaze with orange juice, demi-glace, and liqueur. Reduce to syrupy glaze.", timerSeconds: 360 },
      { step: 4, title: "Slice and Glaze", instruction: "Whisk cold butter cubes into hot sauce off heat for a mirror shine. Slice duck breast diagonally and fan over warm sauce with candied orange zest.", timerSeconds: 120 }
    ]
  },
  {
    id: "tarte-tatin",
    title: "Tarte Tatin",
    titleEn: "Caramelized Upside-Down Apple Tart",
    titleTe: "టార్ట్ టాటిన్ (కారమెలైజ్డ్ యాపిల్ టార్ట్)",
    titleHi: "टार्ट टैटिन (उल्टा कैरमेलाइज्ड सेब का टार्ट)",
    region: "Normandy",
    category: "dessert",
    categoryLabel: "Normandy Classic",
    difficulty: "Medium",
    rating: 4.9,
    reviews: "1.3k",
    prepTime: 25,
    cookTime: 45,
    calories: 360,
    servingsBase: 8,
    image: "assets/images/tarte_tatin.jpg",
    tags: ["Dessert", "Apples", "Caramel", "Normandy"],
    subtitle: "Caramelized apples baked under flaky puff pastry.",
    subtitleEn: "Caramelized apples baked under flaky puff pastry.",
    subtitleTe: "వెన్న, చక్కెరలో కారమెలైజ్ చేసిన యాపిల్స్‌తో చేసిన సంప్రదాయ ఫ్రెంచ్ డెజర్ట్.",
    subtitleHi: "कैरमेल में पके सेब और परतदार पेस्ट्री से बना प्रसिद्ध फ्रेंच उल्टा टार्ट।",
    description: "Invented accidentally by the Tatin sisters in Sologne: crisp Normandy apples slow-cooked in rich butter and caramelized sugar until mahogany dark, blanketed with puff pastry and inverted onto a platter while warm.",
    winePairing: {
      wine: "Calvados or Coteaux du Layon",
      notes: "An aged Normandy apple brandy (Calvados) or an unctuous Chenin Blanc from the Loire Valley complements the rich caramelized fruit."
    },
    chefTip: "Cook the apples tightly packed in the skillet; they shrink significantly as their pectin breaks down and natural juices concentrate.",
    nutrition: { protein: "3g", carbs: "48g", fat: "18g", fiber: "3g" },
    ingredients: [
      { name: "Crisp tart baking apples (Reinette or Gala), peeled & halved", amount: 8, unit: "pcs" },
      { name: "French unsalted butter", amount: 80, unit: "g" },
      { name: "Cane sugar", amount: 150, unit: "g" },
      { name: "All-butter puff pastry disc (pâte feuilletée)", amount: 1, unit: "pc" },
      { name: "Crème fraîche for serving", amount: 150, unit: "ml" }
    ],
    steps: [
      { step: 1, title: "Caramelize Butter and Sugar", instruction: "In an oven-safe cast iron skillet, melt butter and sugar over medium heat until a golden amber caramel forms.", timerSeconds: 480 },
      { step: 2, title: "Pack Apples Vertically", instruction: "Remove from heat and arrange apple halves vertically and tightly in concentric rings. Cook on stove for 15 minutes until tender.", timerSeconds: 900 },
      { step: 3, title: "Top with Pastry and Bake", instruction: "Tuck puff pastry over the apples, folding edges down into the pan. Bake at 190°C (375°F) for 30 minutes until puffed and golden brown.", timerSeconds: 1800 },
      { step: 4, title: "Invert Warm", instruction: "Let rest 5 minutes, then place a serving platter over pan and invert with one swift, confident motion. Serve warm with crème fraîche.", timerSeconds: 120 }
    ]
  },
  {
    id: "souffle-chocolat",
    title: "Soufflé au Chocolat Noir",
    titleEn: "Dark Valrhona Chocolate Soufflé",
    titleTe: "చాక్లెట్ సౌఫ్లే (తేలికపాటి ఫ్రెంచ్ డార్క్ చాక్లెట్ కేక్)",
    titleHi: "चॉकलेट सूफ्ले (हल्का और फूला हुआ डार्क चॉकलेट डेसर्ट)",
    region: "Paris",
    category: "dessert",
    categoryLabel: "Parisian Patisserie",
    difficulty: "Advanced",
    rating: 5.0,
    reviews: "1.9k",
    prepTime: 25,
    cookTime: 14,
    calories: 320,
    servingsBase: 4,
    image: "assets/images/souffle_chocolat.jpg",
    tags: ["Dessert", "Chocolate", "Paris", "Bistro"],
    subtitle: "Puffed airy chocolate soufflé with a warm molten core.",
    subtitleEn: "Puffed airy chocolate soufflé with a warm molten core.",
    subtitleTe: "గాలిలా తేలికగా పొంగిన ఫ్రెంచ్ డార్క్ చాక్లెట్ డెజర్ట్.",
    subtitleHi: "अंदर से गर्म और पिघली हुई चॉकलेट वाला बेहद हल्का और फूला हुआ सूफ्ले।",
    description: "The pinnacle of French restaurant patisserie: cloud-like, dramatic dark chocolate soufflé rising majestically above the ramekin rim, with an airy exterior and an intensely decadent molten chocolate center.",
    winePairing: {
      wine: "Banyuls or Maury Grand Cru",
      notes: "A fortified Grenache-based Banyuls from the Pyrenees mirrors the bittersweet roasted cacao notes of dark chocolate."
    },
    chefTip: "Brush ramekins with soft butter using strictly upward strokes, coat with granulated sugar, and run your thumb around the inner rim before baking to guide an even vertical rise.",
    nutrition: { protein: "7g", carbs: "28g", fat: "20g", fiber: "4g" },
    ingredients: [
      { name: "French dark chocolate 70% (Valrhona or Guanaja)", amount: 150, unit: "g" },
      { name: "Fresh large eggs, separated", amount: 4, unit: "pcs" },
      { name: "Whole milk", amount: 120, unit: "ml" },
      { name: "Granulated sugar", amount: 50, unit: "g" },
      { name: "Unsalted butter for ramekins", amount: 20, unit: "g" },
      { name: "Powdered sugar for dusting", amount: 1, unit: "tbsp" }
    ],
    steps: [
      { step: 1, title: "Prepare Ramekins", instruction: "Brush 4 ramekins with softened butter using vertical upward brushstrokes. Coat evenly with granulated sugar, tapping out excess.", timerSeconds: 240 },
      { step: 2, title: "Melt Chocolate Crème", instruction: "Melt chocolate in warm milk over low heat until glossy and smooth. Whisk in egg yolks one by one off the heat.", timerSeconds: 300 },
      { step: 3, title: "Whip French Meringue", instruction: "Whip egg whites to soft peaks, gradually add sugar until stiff and glossy. Fold 1/3 into chocolate, then gently fold remaining whites without deflating.", timerSeconds: 420 },
      { step: 4, title: "Bake and Rise", instruction: "Fill ramekins to the brim and smooth with palette knife. Bake at 190°C (375°F) for 12-14 minutes without opening the oven door. Dust with powdered sugar and serve immediately.", timerSeconds: 780 }
    ]
  }
,
  {
    "id": "salade_nicoise",
    "title": "Salade Niçoise",
    "titleEn": "Classic Niçoise Salad",
    "titleTe": "సలాడ్ నిస్వోయిస్ (రివేరా ఫ్రెష్ సలాడ్)",
    "titleHi": "सलाद निकोइस (क्लासिक फ्रेंच रिवेरा सलाद)",
    "region": "Provence",
    "category": "main-course",
    "categoryLabel": "Riviera Classic",
    "difficulty": "Easy",
    "rating": 4.9,
    "reviews": "1.8k",
    "prepTime": 20,
    "cookTime": 10,
    "calories": 380,
    "servingsBase": 4,
    "image": "assets/images/salade_nicoise.jpg",
    "tags": [
      "Provence",
      "Salad",
      "Tuna",
      "Healthy",
      "Riviera"
    ],
    "subtitle": "Fresh seared tuna, haricots verts, Niçoise olives, tomatoes & soft eggs.",
    "subtitleEn": "Fresh seared tuna, haricots verts, Niçoise olives, tomatoes & soft eggs.",
    "subtitleTe": "తాజా ట్యూనా, ఆలివ్‌లు మరియు ఉడికించిన గుడ్లతో చేసిన ఫ్రెంచ్ రివేరా సలాడ్.",
    "subtitleHi": "ताजा टूना, बीन्स, जैतून और उबले अंडे वाला क्लासिक फ्रेंच रिवेरा सलाद।",
    "description": "The pride of Nice and the Côte d'Azur: crisp mixed greens, tender blanched haricots verts, baby potatoes, sun-ripened tomatoes, tiny black Niçoise cailletier olives, anchovy fillets, and seared rare ahi tuna drizzled with a bright lemon-herb vinaigrette.",
    "winePairing": {
      "wine": "Côtes de Provence Rosé or Bandol Blanc",
      "notes": "A pale, dry Provencal rosé with crisp minerality cuts through the rich tuna and anchors the salty, savory olives and anchovies."
    },
    "chefTip": "Use authentic tiny black Niçoise olives (cailletier). Sear the tuna on scorching heat for just 45 seconds per side to leave a delicate ruby center.",
    "nutrition": {
      "protein": "32g",
      "carbs": "18g",
      "fat": "20g",
      "fiber": "5g"
    },
    "ingredients": [
      {
        "name": "Fresh yellowfin or ahi tuna steak",
        "amount": 400,
        "unit": "g"
      },
      {
        "name": "Tender French green beans (haricots verts)",
        "amount": 200,
        "unit": "g"
      },
      {
        "name": "Baby new potatoes, boiled and halved",
        "amount": 250,
        "unit": "g"
      },
      {
        "name": "Ripe vine-ripened tomatoes, wedged",
        "amount": 3,
        "unit": "pcs"
      },
      {
        "name": "Farm-fresh eggs, soft-boiled (6.5 min)",
        "amount": 4,
        "unit": "pcs"
      },
      {
        "name": "Authentic Niçoise black olives",
        "amount": 80,
        "unit": "g"
      },
      {
        "name": "Salt-cured Mediterranean anchovy fillets",
        "amount": 8,
        "unit": "pcs"
      },
      {
        "name": "Extra virgin Provencal olive oil",
        "amount": 4,
        "unit": "tbsp"
      },
      {
        "name": "Fresh lemon juice & Dijon mustard",
        "amount": 2,
        "unit": "tbsp"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "Boil Vegetables and Eggs",
        "instruction": "Boil baby potatoes until tender (12 min). Blanch haricots verts for 3 minutes and shock in ice water. Soft-boil eggs for 6.5 minutes and peel.",
        "timerSeconds": 720
      },
      {
        "step": 2,
        "title": "Whisk Vinaigrette",
        "instruction": "Whisk extra virgin olive oil, lemon juice, Dijon mustard, minced shallot, sea salt, and black pepper until emulsified.",
        "timerSeconds": 180
      },
      {
        "step": 3,
        "title": "Flash-Sear Tuna",
        "instruction": "Rub tuna steaks with olive oil, salt, and pepper. Sear in a screaming-hot skillet for 45 seconds per side. Slice into thick medallions.",
        "timerSeconds": 90
      },
      {
        "step": 4,
        "title": "Compose and Dress",
        "instruction": "Arrange crisp greens, potatoes, beans, tomatoes, halved soft-boiled eggs, olives, and anchovies on a wide platter. Crown with sliced tuna and drizzle vinaigrette.",
        "timerSeconds": 240
      }
    ]
  },
  {
    "id": "pissaladiere",
    "title": "Pissaladière Provençale",
    "titleEn": "Riviera Onion & Anchovy Tart",
    "titleTe": "పిస్సాలదియర్ (ఫ్రెంచ్ ఉల్లిపాయ మరియు ఆలివ్ టార్ట్)",
    "titleHi": "पिसालादिएर (कारमेलाइज्ड प्याज और जैतून वाली फ्रेंच टार्ट)",
    "region": "Provence",
    "category": "pastry",
    "categoryLabel": "Riviera Specialty",
    "difficulty": "Medium",
    "rating": 4.8,
    "reviews": "950",
    "prepTime": 30,
    "cookTime": 45,
    "calories": 340,
    "servingsBase": 6,
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Provence",
      "Pastry",
      "Baking",
      "Riviera",
      "Onion"
    ],
    "subtitle": "Olive oil dough topped with caramelized onions, black olives & anchovy lattice.",
    "subtitleEn": "Olive oil dough topped with caramelized onions, black olives & anchovy lattice.",
    "subtitleTe": "నెమ్మదిగా వేయించిన ఉల్లిపాయలు మరియు ఆలివ్‌లతో చేసిన ఫ్రెంచ్ టార్ట్.",
    "subtitleHi": "धीमी आंच पर भूने मीठे प्याज और काले जैतून से बनी क्लासिक फ्रेंच टार्ट।",
    "description": "Nice's legendary savory tart: a fragrant olive-oil-scented bread dough blanketed with sweet, jammy slow-caramelized onions infused with thyme, arranged in a signature diamond lattice of salted anchovies and plump Niçoise olives.",
    "winePairing": {
      "wine": "Bellet Blanc or Cassis Blanc",
      "notes": "Crisp white wines from the Riviera coastal limestone hills deliver citrus zest that contrasts the deep natural sweetness of caramelized onions."
    },
    "chefTip": "Cook the onions very slowly over low heat with olive oil and thyme for at least 45 minutes without rushing. They should melt into sweet golden jam without browning.",
    "nutrition": {
      "protein": "12g",
      "carbs": "42g",
      "fat": "16g",
      "fiber": "4g"
    },
    "ingredients": [
      {
        "name": "Unbleached flour for olive oil dough",
        "amount": 300,
        "unit": "g"
      },
      {
        "name": "Sweet yellow onions, thinly sliced",
        "amount": 1.2,
        "unit": "kg"
      },
      {
        "name": "Extra virgin olive oil",
        "amount": 5,
        "unit": "tbsp"
      },
      {
        "name": "Fresh thyme sprigs and bay leaf",
        "amount": 4,
        "unit": "sprigs"
      },
      {
        "name": "Mediterranean salted anchovy fillets",
        "amount": 16,
        "unit": "pcs"
      },
      {
        "name": "Small black Niçoise cailletier olives",
        "amount": 100,
        "unit": "g"
      },
      {
        "name": "Fresh active dry yeast",
        "amount": 7,
        "unit": "g"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "Prepare Dough",
        "instruction": "Mix flour, yeast, warm water, salt, and 2 tbsp olive oil into a supple dough. Knead 8 minutes and let rise for 1 hour until doubled.",
        "timerSeconds": 3600
      },
      {
        "step": 2,
        "title": "Slow-Melt Onions",
        "instruction": "Heat remaining olive oil in a wide pan over low heat. Add sliced onions, thyme, and bay leaf. Cook gently for 45 minutes until soft and caramelized.",
        "timerSeconds": 2700
      },
      {
        "step": 3,
        "title": "Roll and Top",
        "instruction": "Roll dough into a 1/4-inch rectangle on a baking sheet. Spread cooled onions evenly to the edges. Arrange anchovies in a crisscross diamond lattice and place an olive in each center.",
        "timerSeconds": 600
      },
      {
        "step": 4,
        "title": "Bake Golden",
        "instruction": "Bake at 220°C (425°F) for 20-25 minutes until the crust is deeply golden and blistered underneath.",
        "timerSeconds": 1300
      }
    ]
  },
  {
    "id": "socca_nicoise",
    "title": "Socca Niçoise",
    "titleEn": "Crisp Chickpea Street Flatbread",
    "titleTe": "సొక్కా నిస్వోయిస్ (శనగపిండి క్రిస్పీ బ్రెడ్)",
    "titleHi": "सोका निकोइस (कुरकुरी बेसन फ्रेंच ब्रेड)",
    "region": "Provence",
    "category": "breakfast",
    "categoryLabel": "Riviera Street Food",
    "difficulty": "Easy",
    "rating": 4.9,
    "reviews": "1.1k",
    "prepTime": 10,
    "cookTime": 12,
    "calories": 220,
    "servingsBase": 4,
    "image": "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Provence",
      "Breakfast",
      "Gluten-Free",
      "Vegan",
      "Riviera"
    ],
    "subtitle": "Blistered, paper-thin chickpea flatbread with sea salt & crushed pepper.",
    "subtitleEn": "Blistered, paper-thin chickpea flatbread with sea salt & crushed pepper.",
    "subtitleTe": "కరకరలాడే ఫ్రెంచ్ రివేరా శనగపిండి ఫ్లాట్‌బ్రెడ్.",
    "subtitleHi": "फ्रांस के नीस शहर की मशहूर कुरकुरी और गरमा-गरम बेसन ब्रेड।",
    "description": "The iconic street food of Old Nice: made from simply chickpea flour, water, fruity olive oil, and rosemary, poured into a blisteringly hot pan and baked until the edges are shattered-crisp and the center remains soft and creamy.",
    "winePairing": {
      "wine": "Chilled Pastis de Marseille or Bandol Rosé",
      "notes": "An anise-scented Pastis with cold water or a mineral-driven Rosé matches the earthy nuttiness of roasted chickpea and peppery olive oil."
    },
    "chefTip": "Preheat your cast iron skillet under the oven broiler until smoking hot before pouring in the batter. This ensures rapid blistering and authentic charred crust.",
    "nutrition": {
      "protein": "9g",
      "carbs": "28g",
      "fat": "8g",
      "fiber": "5g"
    },
    "ingredients": [
      {
        "name": "Fine chickpea flour (farine de pois chiches)",
        "amount": 200,
        "unit": "g"
      },
      {
        "name": "Lukewarm filtered water",
        "amount": 400,
        "unit": "ml"
      },
      {
        "name": "Extra virgin Provencal olive oil",
        "amount": 4,
        "unit": "tbsp"
      },
      {
        "name": "Flaky fleur de sel sea salt",
        "amount": 1,
        "unit": "tsp"
      },
      {
        "name": "Coarsely ground black pepper",
        "amount": 1,
        "unit": "tsp"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "Whisk Batter",
        "instruction": "Whisk chickpea flour and water until completely lump-free. Stir in 2 tbsp olive oil and salt. Let rest at room temperature for 1 hour.",
        "timerSeconds": 3600
      },
      {
        "step": 2,
        "title": "Preheat Skillet",
        "instruction": "Place a 12-inch cast iron skillet on the highest rack of your oven and turn broiler to MAX for 10 minutes until sizzling hot.",
        "timerSeconds": 600
      },
      {
        "step": 3,
        "title": "Pour and Broil",
        "instruction": "Carefully coat the skillet with 2 tbsp olive oil, pour batter to form a 1/8-inch thin layer, and broil 6-8 minutes until golden with dark charred blisters.",
        "timerSeconds": 450
      },
      {
        "step": 4,
        "title": "Season and Serve",
        "instruction": "Slide onto a wooden board, shower generously with freshly cracked black pepper and flaky sea salt, and tear into irregular pieces to enjoy hot.",
        "timerSeconds": 60
      }
    ]
  },
  {
    "id": "daube_provencale",
    "title": "Daube Provençale",
    "titleEn": "Slow-Braised Provençal Beef & Orange Stew",
    "titleTe": "దాబ్ ప్రొవెన్సాల్ (ఎరుపు వైన్ మరియు ఆరెంజ్ బీఫ్ స్టీవ్)",
    "titleHi": "दाब प्रोवेनसाल (रेड वाइन और संतरे के छिलके वाला धीमी आंच पर पका बीफ स्टू)",
    "region": "Provence",
    "category": "main-course",
    "categoryLabel": "Provençal Slow Stew",
    "difficulty": "Advanced",
    "rating": 5,
    "reviews": "1.6k",
    "prepTime": 30,
    "cookTime": 240,
    "calories": 590,
    "servingsBase": 6,
    "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Provence",
      "Main Course",
      "Beef",
      "Slow-Cooked",
      "Wine"
    ],
    "subtitle": "Melt-in-mouth beef braised with robust red wine, orange peel & wild herbs.",
    "subtitleEn": "Melt-in-mouth beef braised with robust red wine, orange peel & wild herbs.",
    "subtitleTe": "ఎరుపు వైన్, వెల్లుల్లి మరియు ఆరెంజ్ తొక్కతో మగ్గించిన మెత్తని సంప్రదాయ స్టీవ్.",
    "subtitleHi": "रेड वाइन, लहसुन और संतरे के छिलके की खुशबूदार ग्रेवी में पका स्वादिष्ट फ्रेंच स्टू।",
    "description": "A monumental heirloom stew from Provence: succulent chunks of beef chuck and shank marinated overnight in full-bodied red wine with orange peel, cloves, garlic, and thyme, then slow-simmered in an earthenware daubière until collapsing into rich gravy.",
    "winePairing": {
      "wine": "Bandol Rouge (Mourvèdre) or Gigondas",
      "notes": "A powerful, spicy southern Rhône or Bandol red with notes of dark blackberry and garrigue herbs elevates the orange-infused braise."
    },
    "chefTip": "Do not omit the strip of fresh orange peel! As it simmers for 4 hours, it dissolves and cuts through the intense meat richness with pure Provencal elegance.",
    "nutrition": {
      "protein": "46g",
      "carbs": "14g",
      "fat": "28g",
      "fiber": "3g"
    },
    "ingredients": [
      {
        "name": "Braeburn beef chuck or shank, cut in 2-inch chunks",
        "amount": 1.2,
        "unit": "kg"
      },
      {
        "name": "Full-bodied red wine (Côtes du Rhône)",
        "amount": 750,
        "unit": "ml"
      },
      {
        "name": "Fresh organic orange zest peel strips",
        "amount": 2,
        "unit": "strips"
      },
      {
        "name": "Carrots, sliced in rounds",
        "amount": 3,
        "unit": "pcs"
      },
      {
        "name": "Smoked bacon lardons",
        "amount": 150,
        "unit": "g"
      },
      {
        "name": "Garlic cloves, crushed",
        "amount": 6,
        "unit": "cloves"
      },
      {
        "name": "Fresh Herbes de Provence & bay leaf",
        "amount": 3,
        "unit": "sprigs"
      },
      {
        "name": "Pitted black olives",
        "amount": 60,
        "unit": "g"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "Marinate Overnight",
        "instruction": "Submerge beef chunks in red wine with carrots, onions, garlic, thyme, and orange peel. Marinate in refrigerator for 12 to 24 hours.",
        "timerSeconds": 0
      },
      {
        "step": 2,
        "title": "Brown Bacon and Meat",
        "instruction": "Render lardons in a heavy Dutch oven. Pat marinated beef dry and sear in batches over high heat until deeply crusty.",
        "timerSeconds": 600
      },
      {
        "step": 3,
        "title": "Deglaze and Simmer",
        "instruction": "Pour marinade, vegetables, and beef broth over the meat. Bring to a simmer, cover tightly, and braise in oven at 140°C (285°F) for 3.5 to 4 hours.",
        "timerSeconds": 12600
      },
      {
        "step": 4,
        "title": "Finish with Olives",
        "instruction": "Stir in black olives for the final 15 minutes. Serve hot over buttered fresh tagliatelle or crusty country bread.",
        "timerSeconds": 900
      }
    ]
  },
  {
    "id": "camembert_roti",
    "title": "Camembert Rôti au Four",
    "titleEn": "Baked Normandy Camembert with Honey & Herbs",
    "titleTe": "బేక్డ్ కేమెంబర్ట్ చీజ్ (తేనె మరియు రోజ్మేరీతో)",
    "titleHi": "बेक्ड कैमेम्बर्ट चीज (शहद, लहसुन और जड़ी-बूटियों के साथ)",
    "region": "Normandy",
    "category": "main-course",
    "categoryLabel": "Normandy Classic",
    "difficulty": "Easy",
    "rating": 5,
    "reviews": "2.3k",
    "prepTime": 5,
    "cookTime": 18,
    "calories": 420,
    "servingsBase": 4,
    "image": "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Normandy",
      "Cheese",
      "Bistro",
      "Comfort Food"
    ],
    "subtitle": "Molten baked Normandy Camembert with wild honey, garlic & rosemary.",
    "subtitleEn": "Molten baked Normandy Camembert with wild honey, garlic & rosemary.",
    "subtitleTe": "కరిగిన వెన్న లాంటి ఫ్రెంచ్ నార్మండీ చీజ్ వంటకం.",
    "subtitleHi": "पिघला हुआ गरम कैमेम्बर्ट चीज, जिसे शहद और गार्लिक ब्रेड के साथ खाया जाता है।",
    "description": "Normandy's most decadent comfort food: an entire wheel of raw-milk Camembert cheese baked in its wooden box until molten and bubbling, infused with garlic slivers, fresh rosemary sprigs, and a drizzle of lavender honey.",
    "winePairing": {
      "wine": "Cidre Brut de Normandie or Chenin Blanc",
      "notes": "Crisp sparkling Normandy dry apple cider cuts cleanly through the unctuous, rich creaminess of melted Camembert."
    },
    "chefTip": "Score the top rind in a diamond pattern before baking and wrap the base of the wooden box in foil to catch any bubbling molten cheese.",
    "nutrition": {
      "protein": "22g",
      "carbs": "12g",
      "fat": "32g",
      "fiber": "0.5g"
    },
    "ingredients": [
      {
        "name": "Whole wheel of authentic Normandy Camembert (in wooden box)",
        "amount": 250,
        "unit": "g"
      },
      {
        "name": "Garlic cloves, thinly sliced",
        "amount": 2,
        "unit": "cloves"
      },
      {
        "name": "Fresh rosemary needles",
        "amount": 2,
        "unit": "sprigs"
      },
      {
        "name": "Wild wildflower or lavender honey",
        "amount": 1,
        "unit": "tbsp"
      },
      {
        "name": "Crusty French baguette, sliced",
        "amount": 1,
        "unit": "loaf"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "Unwrap and Score",
        "instruction": "Remove plastic wrapping and place cheese back in its bottom wooden box. Score top rind in a diamond pattern.",
        "timerSeconds": 120
      },
      {
        "step": 2,
        "title": "Stud and Drizzle",
        "instruction": "Tuck garlic slivers and rosemary needles into the cuts. Drizzle with honey and a splash of white wine.",
        "timerSeconds": 120
      },
      {
        "step": 3,
        "title": "Bake Molten",
        "instruction": "Bake at 190°C (375°F) for 15-18 minutes until puffed, golden, and liquid in the center.",
        "timerSeconds": 1000
      },
      {
        "step": 4,
        "title": "Dip and Enjoy",
        "instruction": "Serve immediately with warm toasted baguette slices, crisp apple wedges, and cornichons.",
        "timerSeconds": 60
      }
    ]
  },
  {
    "id": "poulet_vallee_d_auge",
    "title": "Poulet Vallée d'Auge",
    "titleEn": "Normandy Chicken in Cider, Calvados & Cream",
    "titleTe": "నార్మండీ చికెన్ (యాపిల్ సైడర్ మరియు క్రీమ్‌తో)",
    "titleHi": "नॉर्मंडी चिकन (सेब साइडर, क्रीम और कैल्वाडोस ग्रेवी में पका चिकन)",
    "region": "Normandy",
    "category": "main-course",
    "categoryLabel": "Normandy Country Classic",
    "difficulty": "Medium",
    "rating": 4.9,
    "reviews": "1.5k",
    "prepTime": 25,
    "cookTime": 45,
    "calories": 540,
    "servingsBase": 4,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Normandy",
      "Main Course",
      "Chicken",
      "Cider",
      "Cream"
    ],
    "subtitle": "Farmhouse chicken braised in crisp apple cider, Calvados & velvety cream.",
    "subtitleEn": "Farmhouse chicken braised in crisp apple cider, Calvados & velvety cream.",
    "subtitleTe": "ఫ్రెంచ్ నార్మండీ శైలిలో యాపిల్స్ మరియు క్రీమ్‌తో వండిన జ్యుసి చికెన్.",
    "subtitleHi": "सेब के टुकड़ों, ताजे मक्खन और रिच क्रीम में बना फ्रांस का पारंपरिक चिकन।",
    "description": "The essence of Normandy's apple orchard valley: tender golden chicken seared in butter, flambéed with Calvados apple brandy, simmered with tart crisp cider and shallots, then enriched with heavy Normandy cream and caramelized apple quarters.",
    "winePairing": {
      "wine": "Cidre Fermier de Normandie or Meursault Chardonnay",
      "notes": "Traditional sparkling dry farmhouse cider or an oaky white Burgundy brings harmony to the sweet-tart apples and lush velvety sauce."
    },
    "chefTip": "Sauté the apple quarters separately in foaming butter until golden and caramelized, then gently fold them into the creamy sauce right before plating.",
    "nutrition": {
      "protein": "42g",
      "carbs": "16g",
      "fat": "32g",
      "fiber": "2g"
    },
    "ingredients": [
      {
        "name": "Bone-in chicken thighs and drumsticks",
        "amount": 1,
        "unit": "kg"
      },
      {
        "name": "Dry sparkling Normandy apple cider",
        "amount": 350,
        "unit": "ml"
      },
      {
        "name": "Calvados apple brandy",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Heavy Normandy cream (crème fraîche)",
        "amount": 150,
        "unit": "ml"
      },
      {
        "name": "Tart crisp apples (Cox or Reinette), quartered",
        "amount": 3,
        "unit": "pcs"
      },
      {
        "name": "Normandy salted butter",
        "amount": 40,
        "unit": "g"
      },
      {
        "name": "French shallots, finely minced",
        "amount": 3,
        "unit": "pcs"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "Sear Chicken",
        "instruction": "Brown seasoned chicken in butter over medium-high heat until skin is crisp and deep golden. Transfer to a plate.",
        "timerSeconds": 600
      },
      {
        "step": 2,
        "title": "Flambé with Calvados",
        "instruction": "Sauté shallots in the pan. Pour in Calvados and carefully ignite with a long match to flambé the alcohol.",
        "timerSeconds": 60
      },
      {
        "step": 3,
        "title": "Braise in Cider",
        "instruction": "Pour in cider, return chicken, cover and simmer gently for 30 minutes until meat is cooked through and tender.",
        "timerSeconds": 1800
      },
      {
        "step": 4,
        "title": "Finish Sauce and Apples",
        "instruction": "Sauté apple wedges in butter until golden. Stir crème fraîche into the pan sauce, reduce until glossy, and serve over chicken and apples.",
        "timerSeconds": 300
      }
    ]
  },
  {
    "id": "sole_meuniere",
    "title": "Sole Meunière",
    "titleEn": "Classic Dover Sole in Brown Butter & Lemon",
    "titleTe": "సోల్ మెనియర్ (వెన్న మరియు నిమ్మరసంతో కాల్చిన చేప)",
    "titleHi": "सोल मेनिएर (ब्राउन बटर और नींबू की सॉस में बनी डोवर सोल मछली)",
    "region": "Normandy",
    "category": "main-course",
    "categoryLabel": "Normandy Coastal Classic",
    "difficulty": "Medium",
    "rating": 5,
    "reviews": "1.7k",
    "prepTime": 15,
    "cookTime": 10,
    "calories": 360,
    "servingsBase": 2,
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Normandy",
      "Fish",
      "Seafood",
      "Fine Dining",
      "Butter"
    ],
    "subtitle": "Pan-fried Channel Dover sole in nutty brown butter, lemon & fresh parsley.",
    "subtitleEn": "Pan-fried Channel Dover sole in nutty brown butter, lemon & fresh parsley.",
    "subtitleTe": "వెన్నలో కాల్చిన సున్నితమైన ఫ్రెంచ్ సముద్ర చేప వంటకం.",
    "subtitleHi": "हल्के मक्खन और नींबू के रस में तली हुई प्रसिद्ध फ्रेंच मछली।",
    "description": "The immortal dish that inspired Julia Child's culinary passion: whole Dover sole dredged lightly in flour, pan-seared in clarified butter, and bathed at the table in foaming hazelnut-colored brown butter (beurre noisette) with fresh lemon and parsley.",
    "winePairing": {
      "wine": "Chablis Premier Cru or Sancerre",
      "notes": "Crisp chalky limestone acidity and citrus minerality in Chablis cuts like a knife through foaming brown butter."
    },
    "chefTip": "Watch the butter closely: as soon as the foam subsides and tiny brown flecks appear with a hazelnut aroma, immediately take off the heat and splash in fresh lemon juice.",
    "nutrition": {
      "protein": "34g",
      "carbs": "8g",
      "fat": "22g",
      "fiber": "0.5g"
    },
    "ingredients": [
      {
        "name": "Fresh Dover sole fillets or whole sole, skinned",
        "amount": 2,
        "unit": "pcs"
      },
      {
        "name": "All-purpose flour for dusting",
        "amount": 40,
        "unit": "g"
      },
      {
        "name": "Unsalted Normandy butter",
        "amount": 80,
        "unit": "g"
      },
      {
        "name": "Freshly squeezed lemon juice",
        "amount": 3,
        "unit": "tbsp"
      },
      {
        "name": "Flat-leaf French parsley, finely chopped",
        "amount": 3,
        "unit": "tbsp"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "Dredge Sole",
        "instruction": "Pat sole dry with paper towels. Season with salt and pepper, then lightly dredge in flour, shaking off all excess.",
        "timerSeconds": 120
      },
      {
        "step": 2,
        "title": "Pan-Sear in Butter",
        "instruction": "Melt 30g butter in a large oval skillet over medium-high heat. Fry sole for 4 minutes per side until golden and flakey. Transfer to warm platter.",
        "timerSeconds": 480
      },
      {
        "step": 3,
        "title": "Make Beurre Noisette",
        "instruction": "Wipe pan clean, add remaining 50g butter. Cook until foaming subsides and butter turns a fragrant golden-brown hazelnut color.",
        "timerSeconds": 150
      },
      {
        "step": 4,
        "title": "Sauce and Garnish",
        "instruction": "Add lemon juice and chopped parsley (it will foam vigorously!). Immediately spoon sizzling brown butter over fish and serve.",
        "timerSeconds": 60
      }
    ]
  },
  {
    "id": "tarte_flambee",
    "title": "Tarte Flambée (Flammekueche)",
    "titleEn": "Alsatian Wood-Fired Bacon & Cream Flatbread",
    "titleTe": "టార్ట్ ఫ్లాంబే (అల్సాస్ బేకన్ మరియు క్రీమ్ పిజ్జా)",
    "titleHi": "टार्ट फ्लेम्बे (फ्लेमकुचे - खस्ता बेकन और क्रीम वाली फ्रेंच फ्लैटब्रेड)",
    "region": "Alsace",
    "category": "main-course",
    "categoryLabel": "Alsatian Specialty",
    "difficulty": "Easy",
    "rating": 4.9,
    "reviews": "1.9k",
    "prepTime": 20,
    "cookTime": 12,
    "calories": 410,
    "servingsBase": 4,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Alsace",
      "Main Course",
      "Pizza",
      "Bacon",
      "Comfort Food"
    ],
    "subtitle": "Paper-thin dough spread with fromage blanc, smoked lardons & sweet onions.",
    "subtitleEn": "Paper-thin dough spread with fromage blanc, smoked lardons & sweet onions.",
    "subtitleTe": "కరకరలాడే అల్సాటియన్ బేకన్ మరియు చీజ్ ఫ్లాట్‌బ్రెడ్.",
    "subtitleHi": "पतली और कुरकुरी बेस पर स्मोक्ड बेकन, प्याज और ताजी क्रीम से बनी फ्रेंच फ्लैटब्रेड।",
    "description": "Alsace's beloved wood-fired specialty: an ultra-thin rolled dough spread with a seasoned blend of tangy fromage blanc and rich crème fraîche, topped generously with smoked pork lardons and thinly sliced sweet onions, baked blistering hot.",
    "winePairing": {
      "wine": "Alsace Pinot Blanc or Riesling",
      "notes": "A vibrant, refreshing Alsace Pinot Blanc cuts through the smoky bacon lardons and luscious crème fraîche."
    },
    "chefTip": "Roll the dough as paper-thin as possible (less than 2mm) and bake on a preheated pizza stone at your oven's maximum temperature for authentic charred cracker crust.",
    "nutrition": {
      "protein": "16g",
      "carbs": "44g",
      "fat": "20g",
      "fiber": "2.5g"
    },
    "ingredients": [
      {
        "name": "Unbleached flour for dough",
        "amount": 250,
        "unit": "g"
      },
      {
        "name": "Fromage blanc or whole milk ricotta",
        "amount": 150,
        "unit": "g"
      },
      {
        "name": "Heavy crème fraîche",
        "amount": 100,
        "unit": "g"
      },
      {
        "name": "Smoked bacon lardons",
        "amount": 180,
        "unit": "g"
      },
      {
        "name": "Sweet white onions, razor-thin sliced",
        "amount": 2,
        "unit": "pcs"
      },
      {
        "name": "Fresh ground nutmeg & sea salt",
        "amount": 1,
        "unit": "pinch"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "Roll Dough Ultra-Thin",
        "instruction": "Knead flour, water, oil, and salt into a smooth dough. Roll out paper-thin on parchment paper into an oblong oval.",
        "timerSeconds": 300
      },
      {
        "step": 2,
        "title": "Spread Cream Base",
        "instruction": "Whisk fromage blanc and crème fraîche with salt, pepper, and freshly grated nutmeg. Spread thinly over the dough to within 1/2 inch of edges.",
        "timerSeconds": 120
      },
      {
        "step": 3,
        "title": "Scatter Toppings",
        "instruction": "Scatter thinly sliced raw onions and smoky lardons evenly across the cream layer.",
        "timerSeconds": 120
      },
      {
        "step": 4,
        "title": "Bake at Max Heat",
        "instruction": "Slide onto a preheated baking stone at 250°C (480°F). Bake 10-12 minutes until edges are blistered, dark, and shatteringly crisp.",
        "timerSeconds": 650
      }
    ]
  },
  {
    "id": "choucroute_garnie",
    "title": "Choucroute Garnie Traditionnelle",
    "titleEn": "Alsatian Riesling Sauerkraut with Sausages & Pork",
    "titleTe": "షూక్రూట్ గార్నీ (వైట్ వైన్ క్యాబేజీ మరియు సాసేజ్ వంటకం)",
    "titleHi": "शुक्रूट गार्नी (सफेद वाइन में पकी गोभी और फ्रेंच सॉसेज का शाही व्यंजन)",
    "region": "Alsace",
    "category": "main-course",
    "categoryLabel": "Alsatian Heritage",
    "difficulty": "Medium",
    "rating": 5,
    "reviews": "2.1k",
    "prepTime": 25,
    "cookTime": 120,
    "calories": 680,
    "servingsBase": 6,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Alsace",
      "Main Course",
      "Pork",
      "Sausage",
      "Winter Feast"
    ],
    "subtitle": "Riesling-braised sauerkraut heaped with Montbéliard sausages & smoked pork.",
    "subtitleEn": "Riesling-braised sauerkraut heaped with Montbéliard sausages & smoked pork.",
    "subtitleTe": "అల్సాస్ సంప్రదాయ వైన్ స్టీవ్డ్ క్యాబేజీ మరియు స్మోక్డ్ మీట్ డిష్.",
    "subtitleHi": "अल्सास का राष्ट्रीय व्यंजन - वाइन में पकी खट्टी गोभी, फ्रेंच सॉसेज और आलू।",
    "description": "The crown jewel of Alsatian gastronomy: silky fermented cabbage braised for hours with Alsace Riesling, goose fat, juniper berries, and onions, topped with smoked pork loin, Strasbourg and Montbéliard sausages, and boiled yellow potatoes.",
    "winePairing": {
      "wine": "Alsace Grand Cru Riesling or Pinot Gris",
      "notes": "A dry, petrol-mineral Alsace Riesling has the piercing acidity needed to cut through smoked pork and rich duck fat."
    },
    "chefTip": "Rinse raw fermented sauerkraut in cold water and squeeze dry before cooking. Simmer with dried juniper berries and whole cloves for traditional aroma.",
    "nutrition": {
      "protein": "48g",
      "carbs": "26g",
      "fat": "42g",
      "fiber": "8g"
    },
    "ingredients": [
      {
        "name": "Fermented raw sauerkraut, gently rinsed",
        "amount": 1.2,
        "unit": "kg"
      },
      {
        "name": "Dry Alsace Riesling wine",
        "amount": 350,
        "unit": "ml"
      },
      {
        "name": "Smoked Montbéliard or Kielbasa sausages",
        "amount": 4,
        "unit": "pcs"
      },
      {
        "name": "Strasbourg / Frankfurter sausages",
        "amount": 4,
        "unit": "pcs"
      },
      {
        "name": "Smoked pork belly or thick bacon slab",
        "amount": 300,
        "unit": "g"
      },
      {
        "name": "Juniper berries, crushed & cloves",
        "amount": 10,
        "unit": "pcs"
      },
      {
        "name": "Yellow waxy potatoes, peeled",
        "amount": 6,
        "unit": "pcs"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "Rinse and Layer",
        "instruction": "Rinse sauerkraut in cold water and squeeze dry. Sauté sliced onions in duck fat, then add half the sauerkraut.",
        "timerSeconds": 300
      },
      {
        "step": 2,
        "title": "Add Spices and Meats",
        "instruction": "Tuck in juniper berries, cloves, bay leaf, and smoked pork slab. Pour in Riesling and chicken broth.",
        "timerSeconds": 180
      },
      {
        "step": 3,
        "title": "Simmer Gently",
        "instruction": "Top with remaining cabbage. Cover tightly and simmer on low for 1.5 hours until meltingly tender.",
        "timerSeconds": 5400
      },
      {
        "step": 4,
        "title": "Add Sausages and Potatoes",
        "instruction": "Nestle sausages and boiled potatoes on top for the final 20 minutes to heat through. Serve on a grand platter with spicy Dijon.",
        "timerSeconds": 1200
      }
    ]
  },
  {
    "id": "kouglof_alsacien",
    "title": "Kouglof Alsacien",
    "titleEn": "Traditional Alsatian Fluted Brioche with Rum Raisins",
    "titleTe": "కూగ్లోఫ్ అల్సాసియన్ (రమ్ కిస్మిస్ మరియు బాదం బ్రెడ్)",
    "titleHi": "कूग्लॉफ अल्सासियन (किशमिश और बादाम वाली पारंपरिक फ्रेंच बन केक)",
    "region": "Alsace",
    "category": "pastry",
    "categoryLabel": "Alsatian Patisserie",
    "difficulty": "Advanced",
    "rating": 4.8,
    "reviews": "820",
    "prepTime": 40,
    "cookTime": 40,
    "calories": 320,
    "servingsBase": 8,
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Alsace",
      "Pastry",
      "Breakfast",
      "Baking",
      "Brioche"
    ],
    "subtitle": "Golden fluted brioche crown studded with rum raisins & toasted sliced almonds.",
    "subtitleEn": "Golden fluted brioche crown studded with rum raisins & toasted sliced almonds.",
    "subtitleTe": "ప్రత్యేకమైన ఆకారంలో బేక్ చేసిన సంప్రదాయ ఫ్రెంచ్ స్వీట్ బ్రెడ్.",
    "subtitleHi": "फ्रांस का पारंपरिक बादाम और किशमिश से सजा हुआ शानदार ताज जैसा केक।",
    "description": "The architectural symbol of Alsace bakeries: a tall, turban-shaped fluted brioche crowned with toasted whole almonds, made with an enriched yeast dough laced with golden sultana raisins macerated in dark rum or Kirsch.",
    "winePairing": {
      "wine": "Alsace Gewurztraminer or Café au Lait",
      "notes": "The exotic floral and lychee sweetness of late-harvest Gewurztraminer complements rum-soaked raisins and buttery brioche crumb."
    },
    "chefTip": "Butter every flute of an authentic ceramic Soufflenheim mold thoroughly, and place a whole almond in each groove before dropping in the dough.",
    "nutrition": {
      "protein": "8g",
      "carbs": "42g",
      "fat": "14g",
      "fiber": "2g"
    },
    "ingredients": [
      {
        "name": "French bread flour (T45)",
        "amount": 400,
        "unit": "g"
      },
      {
        "name": "High-fat unsalted butter, softened",
        "amount": 150,
        "unit": "g"
      },
      {
        "name": "Golden sultana raisins",
        "amount": 100,
        "unit": "g"
      },
      {
        "name": "Dark Caribbean rum or Kirschwasser",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Whole blanched almonds",
        "amount": 20,
        "unit": "pcs"
      },
      {
        "name": "Fresh whole eggs",
        "amount": 3,
        "unit": "pcs"
      },
      {
        "name": "Active baker's yeast",
        "amount": 15,
        "unit": "g"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "Macerate Raisins",
        "instruction": "Soak raisins in warm rum for 30 minutes. Butter a fluted Kouglof mold generously and place an almond in each groove.",
        "timerSeconds": 1800
      },
      {
        "step": 2,
        "title": "Knead Enriched Dough",
        "instruction": "Knead flour, yeast, milk, eggs, and sugar for 10 minutes until elastic. Gradually incorporate softened butter until glossy, then fold in drained raisins.",
        "timerSeconds": 900
      },
      {
        "step": 3,
        "title": "First and Second Rise",
        "instruction": "Let dough rise 1.5 hours until doubled. Punch down, place into prepared mold, and let rise until dough reaches the rim.",
        "timerSeconds": 5400
      },
      {
        "step": 4,
        "title": "Bake and Dust",
        "instruction": "Bake at 180°C (350°F) for 35-40 minutes until deep mahogany. Invert warm onto a rack and dust with confectioners' sugar.",
        "timerSeconds": 2400
      }
    ]
  },
  {
    "id": "baeckeoffe",
    "title": "Baeckeoffe Alsacien",
    "titleEn": "Three-Meat Alsatian Wine & Potato Casserole",
    "titleTe": "బెక్-ఆఫ్ అల్సాసియన్ (మూడు రకాల మాంసం మరియు బంగాళాదుంప స్టీవ్)",
    "titleHi": "बेकऑफ अल्सासियन (वाइन, तीन प्रकार के मीट और आलू से बना पारंपरिक फ्रेंच स्टू)",
    "region": "Alsace",
    "category": "main-course",
    "categoryLabel": "Alsatian Sunday Feast",
    "difficulty": "Advanced",
    "rating": 5,
    "reviews": "1.4k",
    "prepTime": 35,
    "cookTime": 210,
    "calories": 620,
    "servingsBase": 6,
    "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Alsace",
      "Main Course",
      "Pork",
      "Beef",
      "Slow-Cooked"
    ],
    "subtitle": "Beef, pork & lamb layered with sliced potatoes, sealed in white wine.",
    "subtitleEn": "Beef, pork & lamb layered with sliced potatoes, sealed in white wine.",
    "subtitleTe": "వైట్ వైన్‌తో కాల్చిన అల్సాస్ మూడు రకాల మాంసాల రాయల్ స్టీవ్.",
    "subtitleHi": "मिट्टी के बर्तन में धीमी आंच पर पका हुआ फ्रांस का शाही तीन-मीट व्यंजन।",
    "description": "The historical bakers' oven feast of Alsace: layers of marinated beef chuck, pork shoulder, and lamb shoulder nestled between sliced waxy potatoes and leeks, sealed inside an oval ceramic terrine with a rope of dough and slow-baked for 3.5 hours.",
    "winePairing": {
      "wine": "Alsace Pinot Noir or Sylvaner",
      "notes": "A chilled, light-bodied Alsace Pinot Noir matches the earthy slow-baked root vegetables and trio of tender braised meats."
    },
    "chefTip": "Seal the lid of the ceramic terrine with a flour-and-water dough paste to prevent any steam from escaping during the long 3.5-hour bake.",
    "nutrition": {
      "protein": "48g",
      "carbs": "32g",
      "fat": "30g",
      "fiber": "4g"
    },
    "ingredients": [
      {
        "name": "Pork shoulder, cut into cubes",
        "amount": 400,
        "unit": "g"
      },
      {
        "name": "Beef chuck, cut into cubes",
        "amount": 400,
        "unit": "g"
      },
      {
        "name": "Lamb shoulder, cut into cubes",
        "amount": 400,
        "unit": "g"
      },
      {
        "name": "Dry Alsace Pinot Blanc or Sylvaner",
        "amount": 750,
        "unit": "ml"
      },
      {
        "name": "Waxy yellow potatoes, sliced 1/4-inch",
        "amount": 1.2,
        "unit": "kg"
      },
      {
        "name": "Leeks, cleaned and sliced",
        "amount": 2,
        "unit": "pcs"
      },
      {
        "name": "Garlic, thyme, bay leaves & cloves",
        "amount": 4,
        "unit": "sprigs"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "Marinate Meats",
        "instruction": "Marinate beef, pork, and lamb chunks in white wine with onions, leeks, garlic, and herbs for 24 hours.",
        "timerSeconds": 0
      },
      {
        "step": 2,
        "title": "Layer Terrine",
        "instruction": "Butter an oval ceramic terrine. Place a layer of sliced potatoes, then drained marinated meats, and top with remaining potatoes and leeks.",
        "timerSeconds": 600
      },
      {
        "step": 3,
        "title": "Pour Wine and Seal",
        "instruction": "Pour strained wine marinade over. Roll flour and water into a dough rope and press around rim to hermetically seal the lid.",
        "timerSeconds": 300
      },
      {
        "step": 4,
        "title": "Slow Bake",
        "instruction": "Bake at 150°C (300°F) for 3.5 hours. Break dough seal at the table and serve bubbling hot.",
        "timerSeconds": 12600
      }
    ]
  },
  {
    "id": "piperade_basquaise",
    "title": "Piperade Basquaise",
    "titleEn": "Basque Country Pepper & Egg Skillet",
    "titleTe": "పైపరేడ్ బాస్క్వైజ్ (బాస్క్ పెప్పర్ మరియు ఎగ్ స్కిల్లెట్)",
    "titleHi": "पाइप्रेड बास्क (शिमला मिर्च और अंडों से बना बास्क व्यंजन)",
    "region": "Basque",
    "category": "breakfast",
    "categoryLabel": "Basque Morning Classic",
    "difficulty": "Easy",
    "rating": 4.9,
    "reviews": "950",
    "prepTime": 15,
    "cookTime": 25,
    "calories": 280,
    "servingsBase": 4,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Basque",
      "Breakfast",
      "Eggs",
      "Peppers",
      "Traditional"
    ],
    "subtitle": "Sweet peppers, tomatoes & Espelette pepper softly scrambled with eggs & Bayonne ham.",
    "subtitleEn": "Sweet peppers, tomatoes & Espelette pepper softly scrambled with eggs & Bayonne ham.",
    "subtitleTe": "తీపి మిరపకాయలు, టమోటాలు మరియు బాస్క్ మసాలాతో చేసిన గుడ్ల వంటకం.",
    "subtitleHi": "मीठी मिर्च, टमाटर और बास्क मसालों से बना अंडों का पारंपरिक नाश्ता।",
    "description": "The vibrant colors of the Basque flag in a skillet: red and green sweet peppers, ripe tomatoes, and onions gently stewed with aromatic Piment d'Espelette, finished with softly folded farm eggs and crisped slices of Jambon de Bayonne.",
    "winePairing": {
      "wine": "Irouléguy Rosé or Basque Cider",
      "notes": "A mineral-rich, structured Basque rosé cuts through the gentle heat of Espelette pepper and rich cured ham."
    },
    "chefTip": "Cook the peppers very slowly over low heat until they melt into sweet jam-like tenderness before folding in the beaten eggs.",
    "nutrition": {
      "protein": "18g",
      "carbs": "12g",
      "fat": "18g",
      "fiber": "4g"
    },
    "ingredients": [
      {
        "name": "Red and green bell peppers, thinly sliced",
        "amount": 4,
        "unit": "pcs"
      },
      {
        "name": "Ripe vine tomatoes, peeled and chopped",
        "amount": 4,
        "unit": "pcs"
      },
      {
        "name": "Farm-fresh eggs, lightly beaten",
        "amount": 6,
        "unit": "pcs"
      },
      {
        "name": "Authentic Jambon de Bayonne or Prosciutto",
        "amount": 4,
        "unit": "slices"
      },
      {
        "name": "Garlic cloves, minced",
        "amount": 3,
        "unit": "cloves"
      },
      {
        "name": "Piment d'Espelette (Basque chili powder)",
        "amount": 1,
        "unit": "tsp"
      },
      {
        "name": "Extra virgin olive oil",
        "amount": 3,
        "unit": "tbsp"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "Stew Peppers and Aromatics",
        "instruction": "Warm olive oil in a skillet. Sauté onions and peppers over medium-low heat for 15 minutes until meltingly tender.",
        "timerSeconds": 900
      },
      {
        "step": 2,
        "title": "Add Tomatoes and Espelette",
        "instruction": "Stir in tomatoes, garlic, and Piment d'Espelette. Simmer for 10 minutes until excess moisture evaporates into a thick sauce.",
        "timerSeconds": 600
      },
      {
        "step": 3,
        "title": "Fold Eggs and Sear Ham",
        "instruction": "Pour in beaten eggs and stir gently over low heat until soft curds form. In a separate pan, flash-sear Bayonne ham slices for 30 seconds and serve on top.",
        "timerSeconds": 240
      }
    ]
  },
  {
    "id": "galette_bretonne",
    "title": "Galette Bretonne Complète",
    "titleEn": "Brittany Buckwheat Galette Complète",
    "titleTe": "గ్యాలెట్ బ్రిటన్ (బక్‌వీట్ ఫ్రెంచ్ క్రేప్)",
    "titleHi": "गैलेट ब्रेटोन (कुट्टू के आटे से बना क्लासिक फ्रेंच क्रेप)",
    "region": "Brittany",
    "category": "breakfast",
    "categoryLabel": "Brittany Crêperie Icon",
    "difficulty": "Medium",
    "rating": 5,
    "reviews": "2.3k",
    "prepTime": 20,
    "cookTime": 10,
    "calories": 420,
    "servingsBase": 4,
    "image": "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Brittany",
      "Breakfast",
      "Buckwheat",
      "Gluten-Free",
      "Crêpe"
    ],
    "subtitle": "Lacy buckwheat crêpe folded around French ham, melting Gruyère & a sunny egg.",
    "subtitleEn": "Lacy buckwheat crêpe folded around French ham, melting Gruyère & a sunny egg.",
    "subtitleTe": "ఫ్రెంచ్ హామ్, చీజ్ మరియు గుడ్డుతో కూడిన సాంప్రదాయ బక్‌వీట్ క్రేప్.",
    "subtitleHi": "हैम, पिघली हुई ग्रुयेर चीज़ और आधे तले अंडे से बना स्वादिष्ट फ्रेंच क्रेप।",
    "description": "The crown jewel of Brittany's seaside crêperies: an ultra-crisp, nutty 100% buckwheat flour galette crisped on a sizzling billig griddle with salted French butter, filled with artisanal cooked ham, grated Gruyère cheese, and crowned with a golden runny egg yolk.",
    "winePairing": {
      "wine": "Brut Breton Artisanal Cider",
      "notes": "Crisp, effervescent dry Brittany apple cider pairs harmoniously with nutty roasted buckwheat and savory melted cheese."
    },
    "chefTip": "Rest the buckwheat batter overnight in the refrigerator; the cold rest creates the signature micro-lacework holes ('krampouz') when batter hits the smoking-hot griddle.",
    "nutrition": {
      "protein": "22g",
      "carbs": "34g",
      "fat": "22g",
      "fiber": "4g"
    },
    "ingredients": [
      {
        "name": "Organic buckwheat flour (Farine de Blé Noir)",
        "amount": 250,
        "unit": "g"
      },
      {
        "name": "Cold water & pinch of Brittany coarse sea salt",
        "amount": 500,
        "unit": "ml"
      },
      {
        "name": "Artisanal salted French butter (Demi-sel)",
        "amount": 60,
        "unit": "g"
      },
      {
        "name": "French cooked ham (Jambon de Paris)",
        "amount": 4,
        "unit": "slices"
      },
      {
        "name": "Grated aged Gruyère or Emmental cheese",
        "amount": 150,
        "unit": "g"
      },
      {
        "name": "Farm egg per galette",
        "amount": 4,
        "unit": "pcs"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "Whisk Aerated Batter",
        "instruction": "Vigorously beat buckwheat flour, salt, and cold water with a wooden spoon until glossy and bubbling. Rest chilled for at least 2 hours.",
        "timerSeconds": 7200
      },
      {
        "step": 2,
        "title": "Spread on Scorching Griddle",
        "instruction": "Melt salted butter on a 220°C (425°F) griddle. Pour a ladle of batter and spread into a razor-thin circle using a rosette spreader. Cook 2 minutes until lacy and crisp.",
        "timerSeconds": 120
      },
      {
        "step": 3,
        "title": "Fill and Square-Fold",
        "instruction": "Crack an egg in the center, spread egg white over galette. Sprinkle Gruyère, lay ham slice, and fold four edges inward into a classic square leaving the golden yolk exposed.",
        "timerSeconds": 180
      }
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { RECIPES_DATA };
}

