// ==========================================================================
// La Table Française - Deep Multilingual Recipe Encyclopedia
// Complete translations for all 23 authentic French recipes across:
// Français (fr), English (en), తెలుగు (te), and हिंदी (hi)
// Guarantees ZERO English leakage when any language is selected.
// ==========================================================================

const RECIPE_TRANSLATIONS = {
  // 1. Ratatouille Provençale
  "ratatouille": {
    title: {
      fr: "Ratatouille Provençale",
      en: "Ratatouille Provençale",
      te: "రతాతుయ్ ప్రొవెన్సాల్ (రొట్టె చేసిన కూరగాయలు)",
      hi: "रतातूई प्रोवेनसाल (रोस्टेड वेजिटेबल्स)"
    },
    subtitle: {
      fr: "Le grand classique ensoleillé aux légumes fondants et herbes de Provence.",
      en: "A traditional vegetable dish from Provence.",
      te: "ప్రోవెన్స్ సంప్రదాయ రుచికరమైన కూరగాయల వంటకం.",
      hi: "प्रोवेंस का पारंपरिक और पौष्टिक शाकाहारी व्यंजन।"
    },
    categoryLabel: {
      fr: "Plat Principal Végétarien",
      en: "Vegetarian Main Course",
      te: "శాకాహార ప్రధాన వంటకం",
      hi: "शाकाहारी मुख्य भोजन"
    },
    description: {
      fr: "Un plat coloré et ensoleillé du sud de la France, regorgeant de légumes frais du potager et d'herbes aromatiques méditerranéennes. Fines tranches de courgettes vertes, courges jaunes, aubergines fondantes et tomates Roma mûries au soleil, cuites à la perfection avec de l'huile d'olive vierge extra, de l'ail et du thym frais.",
      en: "A colorful and healthy dish from the south of France, full of fresh vegetables and Mediterranean herbs. Thinly sliced zucchini, yellow squash, eggplant, and ripe tomatoes baked to tender perfection with extra virgin olive oil, garlic, and thyme.",
      te: "దక్షిణ ఫ్రాన్స్ నుండి రంగురంగుల ఆరోగ్యకరమైన వంటకం, తాజా కూరగాయలు మరియు మధ్యధరా సుగంధ మూలికలతో కూడినది. సన్నగా తరిగిన జుకినీ, వంకాయ మరియు టమోటాలు ఆలివ్ ఆయిల్, వెల్లుల్లి మరియు థైమ్‌తో కాల్చబడతాయి.",
      hi: "दक्षिणी फ्रांस का एक रंगीन और स्वास्थ्यवर्धक व्यंजन, ताजी सब्जियों और सुगंधित भूमध्यसागरीय जड़ी-बूटियों से भरपूर। पतले कटे हुए ज्यूकिनी, बैंगन और पके टमाटर जैतून के तेल, लहसुन और थाइम के साथ पूरी तरह से बेक किए जाते हैं।"
    },
    wine: {
      fr: "Côtes de Provence Rosé ou Bandol Blanc",
      en: "Côtes de Provence Rosé or Bandol Blanc",
      te: "కోట్స్ డి ప్రోవెన్స్ రోస్ లేదా బాండోల్ బ్లాంక్",
      hi: "कोट्स डी प्रोवेंस रोसे या बांडोल ब्लैंक"
    },
    wineNotes: {
      fr: "Un rosé frais, sec et minéral de Provence qui sublime l'acidité naturelle des tomates gorgées de soleil et le parfum envoûtant du thym frais.",
      en: "A crisp, dry rosé from Provence that mirrors the fresh acidity of sun-ripened tomatoes and fragrant thyme.",
      te: "ప్రోవెన్స్ నుండి వచ్చే తాజా రోస్ వైన్, ఎండలో పండిన టమోటాలు మరియు థైమ్ ఆకుల సువాసనతో అద్భుతంగా సరిపోతుంది.",
      hi: "प्रोवेंस की एक कुरकुरी और सूखी रोसे वाइन, जो धूप में पके टमाटरों की ताजगी और थाइम की सुगंध को खूबसूरती से निखारती है।"
    },
    chefTip: {
      fr: "Tranchez les légumes à une épaisseur régulière de 3 mm à l'aide d'une mandoline. Disposez-les en une spirale serrée sur un lit de coulis mijoté pour une présentation digne des plus grandes tables gastronomiques.",
      en: "Slice vegetables to an even 3mm thickness using a mandoline. Arrange them in a tight spiral over a bed of simmered bell pepper tomato coulis for stunning presentation.",
      te: "కూరగాయలను మాండోలిన్ సహాయంతో సమానంగా 3 మి.మీ మందంతో తరగండి. అందమైన ప్రదర్శన కోసం సాస్ పైన వాటిని చక్కగా మురిపిస్తూ పేర్చండి.",
      hi: "मंडोलिन का उपयोग करके सब्जियों को 3 मिमी की एक समान मोटाई में काटें। एक शानदार प्रस्तुति के लिए उन्हें गाढ़े टमाटर सॉस पर सुंदर सर्पिलाकार में सजाएं।"
    },
    ingredients: [
      { fr: "Courgettes vertes fraîches, émincées", en: "Fresh green zucchini, sliced", te: "తాజా పచ్చి జుకినీ ముక్కలు", hi: "ताजा हरी तोरी (ज्यूकिनी) स्लाइस" },
      { fr: "Courge jaune d'été, tranchée", en: "Yellow squash, sliced", te: "పసుపు గుమ్మడి ముక్కలు", hi: "पीली तोरी (स्क्वैश) स्लाइस" },
      { fr: "Aubergines italiennes lustrées", en: "Glossy Italian eggplant", te: "వంకాయ ముక్కలు", hi: "चमकदार गोल बैंगन" },
      { fr: "Tomates Roma bien mûres", en: "Ripe Roma tomatoes", te: "పండిన రోమా టమోటాలు", hi: "पके हुए रोमा टमाटर" },
      { fr: "Huile d'olive vierge extra", en: "Extra virgin olive oil", te: "ఎక్స్‌ట్రా వర్జిన్ ఆలివ్ ఆయిల్", hi: "एक्स्ट्रा वर्जिन जैतून का तेल" },
      { fr: "Gousses d'ail frais hachées", en: "Garlic cloves, minced", te: "సన్నగా తరిగిన వెల్లుల్లి రెబ్బలు", hi: "बारीक कटा हुआ लहसुन" },
      { fr: "Feuilles fraîches de thym et romarin", en: "Fresh thyme and rosemary leaves", te: "తాజా థైమ్ మరియు రోజ్మేరీ ఆకులు", hi: "ताजा थाइम और रोजमेरी पत्तियां" },
      { fr: "Coulis de tomates fraîches mijoté", en: "Crushed tomato coulis base", te: "టమోటా ప్యూరీ బేస్", hi: "टमाटर की प्यूरी" },
      { fr: "Fleur de sel et poivre noir moulu", en: "Sea salt and cracked black pepper", te: "సముద్రపు ఉప్పు మరియు నల్ల మిరియాలు", hi: "समुद्री नमक और पिसी काली मिर्च" }
    ],
    steps: [
      {
        title: { fr: "Étaler le coulis de tomates", en: "Spread Coulis Base", te: "టమోటా సాస్ పరచండి", hi: "टमाटर प्यूरी फैलाएं" },
        instruction: {
          fr: "Préchauffer le four à 180°C (thermostat 6). Étaler uniformément le coulis de tomates au fond d'un plat à gratin avec la moitié de l'ail haché et un filet d'huile d'olive.",
          en: "Preheat oven to 180°C (350°F). Spread tomato coulis evenly on the bottom of a round baking dish with half the minced garlic and 1 tbsp olive oil.",
          te: "ఓవెన్‌ను 180°C వద్ద వేడి చేయండి. బేకింగ్ డిష్ అడుగున టమోటా సాస్, వెల్లుల్లి మరియు ఆలివ్ నూనెను సమంగా పరచండి.",
          hi: "ओवन को 180°C पर पहले से गरम करें। बेकिंग डिश के तले में टमाटर प्यूरी, आधा लहसुन और जैतून का तेल समान रूप से फैलाएं।"
        }
      },
      {
        title: { fr: "Dresser la rosace de légumes", en: "Arrange Vegetable Spiral", te: "కూరగాయలను పేర్చండి", hi: "सब्जियों को सजाएं" },
        instruction: {
          fr: "Disposer les rondelles alternées de courgettes vertes, courges jaunes, aubergines et tomates en une spirale serrée, de la périphérie vers le centre du plat.",
          en: "Layer alternating slices of green zucchini, yellow squash, eggplant, and tomato in a tight spiral from the rim toward the center.",
          te: "జుకినీ, గుమ్మడి, వంకాయ మరియు టమోటా ముక్కలను ఒకదాని తర్వాత ఒకటి అందంగా చుట్టూరా పేర్చండి.",
          hi: "तोरी, बैंगन और टमाटर के स्लाइस को किनारे से केंद्र की ओर एक तंग सर्पिल में बारी-बारी से सजाएं।"
        }
      },
      {
        title: { fr: "Assaisonner d'herbes de Provence", en: "Season with Herbs", te: "సుగంధ ద్రవ్యాలు కలపండి", hi: "जड़ी-बूटियों से सजाएं" },
        instruction: {
          fr: "Arroser d'un généreux filet d'huile d'olive, parsemer du reste d'ail haché, de thym frais émietté, de fleur de sel et de poivre du moulin.",
          en: "Drizzle with olive oil, scatter remaining garlic, fresh thyme leaves, sea salt, and pepper.",
          te: "ఆలివ్ ఆయిల్ చిలకరించి, మిగిలిన వెల్లుల్లి, తాజా థైమ్, ఉప్పు మరియు మిరియాల పొడి చల్లండి.",
          hi: "जैतून का तेल छिड़कें, शेष लहसुन, ताजी थाइम, समुद्री नमक और काली मिर्च बुरकें।"
        }
      },
      {
        title: { fr: "Cuire au four à la perfection", en: "Bake to Perfection", te: "ఓవెన్ లో కాల్చండి", hi: "अच्छी तरह बेक करें" },
        instruction: {
          fr: "Couvrir d'une feuille de papier sulfurisé et enfourner 40 minutes. Retirer le papier et poursuivre la cuisson 10 minutes pour confire légèrement les légumes.",
          en: "Cover with parchment paper and bake for 40 minutes. Remove parchment and bake 10 more minutes until vegetables are tender and slightly caramelized.",
          te: "కాగితంతో కప్పి 40 నిమిషాలు బేక్ చేయండి. తర్వాత కాగితం తీసి మరో 10 నిమిషాలు వేగనివ్వండి.",
          hi: "पार्चमेंट पेपर से ढककर 40 मिनट तक बेक करें। पेपर हटाकर 10 मिनट और बेक करें जब तक कि सब्जियां पूरी तरह नरम न हो जाएं।"
        }
      }
    ]
  },

  // 2. Croissant au Beurre
  "croissant": {
    title: {
      fr: "Croissant Pur Beurre de Normandie",
      en: "Butter Croissant",
      te: "క్రోసెంట్ (బట్టరీ ఫ్రెంచ్ పేస్ట్రీ)",
      hi: "क्रोइसैंट (मक्खन वाली परतदार पेस्ट्री)"
    },
    subtitle: {
      fr: "Feuilleté aérien, croustillant et pur beurre français AOP.",
      en: "Flaky, buttery and simply irresistible.",
      te: "కరకరలాడే వెన్నతో చేసిన అసలైన ఫ్రెంచ్ పేస్ట్రీ.",
      hi: "परतदार, मक्खन से भरपूर और बेहद स्वादिष्ट पेस्ट्री।"
    },
    categoryLabel: {
      fr: "Viennoiserie Artisanale",
      en: "Artisanal Viennoiserie",
      te: "ఆర్టిసానల్ పేస్ట్రీ",
      hi: "कारीगरी पेस्ट्री"
    },
    description: {
      fr: "Le joyau de la viennoiserie française : pâte levée feuilletée tourée avec un beurre de tourage normand à 82% de matière grasse, façonnée en croissants parfaits dont la croûte dorée croustille sous la dent pour révéler un alvéolage d'une légèreté incomparable.",
      en: "The quintessential French breakfast pastry: laminated yeast-leavened dough layered with high-fat Normandy butter, folded and rolled into delicate crescent shapes that bake into golden, shattering, honeycomb-structured pastries.",
      te: "అసలైన ఫ్రెంచ్ అల్పాహార పేస్ట్రీ: ఈస్ట్ పిండి మరియు నార్మాండీ వెన్న పొరలతో తయారుచేసి, బంగారు రంగులో కరకరలాడేలా కాల్చబడుతుంది.",
      hi: "पारंपरिक फ्रेंच नाश्ता पेस्ट्री: उच्च वसा वाले नॉर्मैंडी मक्खन की परतों से बना आटा, जिसे नाजुक अर्धचंद्राकार में मोड़कर सुनहरा और खस्ता बेक किया जाता है।"
    },
    wine: {
      fr: "Café au Lait Velouté ou Champagne Brut",
      en: "Café au Lait or Champagne Brut",
      te: "కేఫ్ ఔ లైట్ లేదా షాంపేన్ బ్రూట్",
      hi: "कैफे औ लेत या शैम्पेन ब्रूट"
    },
    wineNotes: {
      fr: "Un café au lait onctueux le matin ou un Champagne brut aux bulles fines qui tranchent à merveille la richesse gourmande du beurre fondu.",
      en: "A morning café au lait or a crisp sparkling Champagne cuts through rich buttery layers with refreshing effervescence.",
      te: "ఉదయం తీసుకునే తాజా కాఫీ లేదా షాంపేన్ వెన్న రుచిని సమతుల్యం చేస్తుంది.",
      hi: "सुबह की गर्मागर्म कॉफी या झागदार शैम्पेन मक्खन की समृद्धि को संतुलित करती है।"
    },
    chefTip: {
      fr: "Maintenez la détrempe et le pâton de beurre exactement à la même température fraîche (~15°C) pendant le tourage afin que le beurre s'étire uniformément sans percer la pâte.",
      en: "Keep your butter block and dough at the exact same cool temperature (~15°C/60°F) during lamination so the butter glides between layers without breaking or melting.",
      te: "పిండి మరియు వెన్న ముక్కను సరిగ్గా 15°C చల్లదనంలో ఉంచండి, తద్వారా పొరలు పగలకుండా సమానంగా వ్యాపిస్తాయి.",
      hi: "लेमिनेशन के दौरान अपने मक्खन के टुकड़े और आटे को बिल्कुल एक ही ठंडे तापमान (~15°C) पर रखें।"
    },
    ingredients: [
      { fr: "Farine de blé T55 de tradition", en: "French T55 or all-purpose flour", te: "మైదా లేదా గోధుమ పిండి", hi: "मैदा (गेहूं का आटा)" },
      { fr: "Beurre de tourage doux (82% M.G.)", en: "European unsalted butter (82% fat)", te: "అన్‌సాల్టెడ్ ఫ్రెంచ్ వెన్న", hi: "यूरोपीय मक्खन (82% वसा)" },
      { fr: "Lait entier tiédi", en: "Whole milk, lukewarm", te: "గోరువెచ్చని పాలు", hi: "हल्का गर्म दूध" },
      { fr: "Eau filtrée bien fraîche", en: "Filtered water, chilled", te: "చల్లని నీరు", hi: "ठंडा पानी" },
      { fr: "Sucre blond de canne", en: "Cane sugar", te: "పంచదార", hi: "ब्राउन शुगर" },
      { fr: "Sel fin de Guérande", en: "Fine sea salt", te: "సముద్రపు ఉప్పు", hi: "बारीक नमक" },
      { fr: "Levure boulangère active", en: "Active dry yeast", te: "ఈస్ట్", hi: "यीस्ट (खमीर)" },
      { fr: "Jaune d'œuf pour la dorure", en: "Egg yolk for egg wash", te: "గుడ్డు పచ్చసొన (పైపూత కోసం)", hi: "अंडे की जर्दी" }
    ],
    steps: [
      {
        title: { fr: "Pétrir la détrempe", en: "Prepare Détrempe Dough", te: "పిండి కలపండి", hi: "आटा तैयार करें" },
        instruction: {
          fr: "Mélanger farine, sucre, sel, levure délayée, lait et eau. Pétrir brièvement jusqu'à obtenir une pâte homogène. Réserver 2 heures au frais.",
          en: "Mix flour, sugar, salt, yeast, milk, and water. Knead lightly into a smooth dough ball. Chill for 2 hours.",
          te: "పిండి, చక్కెర, ఉప్పు, ఈస్ట్, పాలు మరియు నీటిని కలపండి. మృదువైన ముద్దగా చేసి 2 గంటలు ఫ్రిజ్ లో ఉంచండి.",
          hi: "आटा, चीनी, नमक, खमीर, दूध और पानी मिलाएं। चिकना आटा गूंथ लें और 2 घंटे के लिए ठंडा करें।"
        }
      },
      {
        title: { fr: "Tourer avec le beurre", en: "Laminate Butter Block", te: "వెన్న పొరలు వేయండి", hi: "मक्खन की परतें बनाएं" },
        instruction: {
          fr: "Enchâsser le beurre dans la détrempe. Réaliser trois tours simples avec 30 minutes de repos au réfrigérateur entre chaque tour.",
          en: "Enclose butter block in dough. Roll out and perform three single folds (turns), resting 30 minutes in refrigerator between each turn.",
          te: "వెన్నను పిండిలో ఉంచి చుట్టండి. ప్రతి మడత మధ్య 30 నిమిషాల పాటు ఫ్రిజ్ లో విశ్రాంతి ఇవ్వండి.",
          hi: "आटे में मक्खन को लपेटें। बेलें और तीन सिंगल फोल्ड करें, हर फोल्ड के बीच 30 मिनट फ्रिज में रखें।"
        }
      },
      {
        title: { fr: "Façonner les croissants", en: "Shape the Crescents", te: "క్రోసెంట్ ఆకారం ఇవ్వండి", hi: "अर्धचंद्राकार आकार दें" },
        instruction: {
          fr: "Abaisser la pâte à 4 mm, découper des triangles isocèles, étirer délicatement la base et rouler en croissants. Laisser lever 2 heures.",
          en: "Roll dough to 4mm thickness, cut isosceles triangles, gently stretch bases, and roll tightly into crescent shapes. Proof for 2 hours until puffed.",
          te: "పిండిని రోల్ చేసి త్రికోణ ఆకారంలో కత్తిరించండి. వాటిని రోల్ చేసి 2 గంటల పాటు పొంగనివ్వండి.",
          hi: "आटे को बेलें, त्रिकोण काटें और कसकर अर्धचंद्राकार में रोल करें। 2 घंटे तक फूलने दें।"
        }
      },
      {
        title: { fr: "Dorer et cuire à four chaud", en: "Bake until Golden", te: "బంగారు రంగులో కాల్చండి", hi: "सुनहरा होने तक बेक करें" },
        instruction: {
          fr: "Dorer au jaune d'œuf sans toucher le feuilletage. Enfourner à 200°C pendant 10 minutes, puis baisser à 180°C pendant 12 à 15 minutes jusqu'à dorure caramel.",
          en: "Brush gently with egg wash. Bake at 200°C (400°F) for 10 minutes, reduce to 180°C (350°F) for 12-15 minutes until deep golden brown.",
          te: "గుడ్డు పూత పూయండి. 200°C వద్ద 10 నిమిషాలు, తర్వాత 180°C వద్ద 15 నిమిషాలు కాల్చండి.",
          hi: "अंडे की परत लगाएं। 200°C पर 10 मिनट तक बेक करें, फिर 180°C पर 15 मिनट तक गहरा सुनहरा होने तक बेक करें।"
        }
      }
    ]
  },

  // 3. Crêpes Fines
  "crepes": {
    title: {
      fr: "Crêpes Fines Traditionnelles",
      en: "French Crêpes",
      te: "ఫ్రెంచ్ క్రేప్స్ (పలుచని పాన్‌కేకులు)",
      hi: "फ्रेंच क्रेप्स (पतले पैनकेक्स)"
    },
    subtitle: {
      fr: "Fines crêpes moelleuses et dorées au beurre noisette et vanille.",
      en: "Thin pancakes, perfect for any occasion.",
      te: "ఏ సందర్భానికైనా అనువైన తేలికపాటి ఫ్రెంచ్ పాన్‌కేకులు.",
      hi: "हर अवसर के लिए बिल्कुल सही पतले और मुलायम पैनकेक्स।"
    },
    categoryLabel: {
      fr: "Dessert & Goûter",
      en: "Dessert & Tea Time",
      te: "డెజర్ట్ & అల్పాహారం",
      hi: "डेसर्ट और नाश्ता"
    },
    description: {
      fr: "Délicates crêpes dorées et fondantes préparées à partir d'un appareil soyeux à base de lait entier, d'œufs frais de ferme et d'une touche de beurre noisette. Cuites en voile de dentelle dans une poêle très chaude et garnies de sucre, de confiture ou de chocolat fondant.",
      en: "Delicate, golden French crêpes made from a silky milk, egg, and browned butter batter. Cooked paper-thin in a hot skillet and topped with fresh berries, powdered sugar, or rich chocolate spread.",
      te: "పాలు, గుడ్లు మరియు వెన్నతో చేసిన సున్నితమైన ఫ్రెంచ్ క్రేప్స్. పెనంపై పలుచగా కాల్చి, పండ్లు లేదా చాక్లెట్‌తో వడ్డిస్తారు.",
      hi: "दूध, अंडे और मक्खन के मखमली घोल से बने पतले और सुनहरे फ्रेंच क्रेप्स। गर्म पैन में पतले पकाए जाते हैं और ताजे फल या चॉकलेट के साथ परोसे जाते हैं।"
    },
    wine: {
      fr: "Cidre Brut Artisanal de Normandie",
      en: "Cidre Brut de Normandie",
      te: "నార్మాండీ ఆపిల్ సైడర్",
      hi: "नॉर्मैंडी एप्पल साइडर"
    },
    wineNotes: {
      fr: "Le cidre brut normand, fruité et pétillant, est l'accord historique et indispensable qui sublime la finesse de la pâte à crêpes.",
      en: "Crisp Normandy apple cider provides the authentic historical pairing for sweet or savory crêpes.",
      te: "నార్మాండీ యాపిల్ సైడర్ క్రేప్స్‌తో తీసుకోవడానికి సంప్రదాయ పానీయం.",
      hi: "कुरकुरा नॉर्मैंडी सेब का साइडर मीठे या नमकीन क्रेप्स के लिए प्रामाणिक ऐतिहासिक पेय है।"
    },
    chefTip: {
      fr: "Laissez reposer votre pâte à crêpes au minimum 30 minutes à température ambiante : l'amidon gonfle et le gluten se détend, garantissant des crêpes d'une finesse incomparable sans jamais se déchirer.",
      en: "Let your crêpe batter rest at room temperature for at least 30 minutes before cooking. This allows the gluten to relax and starch granules to swell, ensuring tear-free, lace-thin crêpes.",
      te: "పిండిని కాల్చడానికి ముందు కనీసం 30 నిమిషాలు పక్కన ఉంచండి. దీనివల్ల క్రేప్స్ చిరిగిపోకుండా చాలా పలుచగా వస్తాయి.",
      hi: "पकाने से पहले अपने क्रेप के घोल को कम से कम 30 मिनट के लिए रख दें। इससे क्रेप्स बहुत पतले और बिना फटे बनते हैं।"
    },
    ingredients: [
      { fr: "Farine de blé fluide", en: "All-purpose wheat flour", te: "గోధుమ లేదా మైదా పిండి", hi: "मैदा" },
      { fr: "Œufs frais de ferme", en: "Fresh large eggs", te: "తాజా కోడిగుడ్లు", hi: "ताजे अंडे" },
      { fr: "Lait entier de terroir", en: "Whole milk", te: "చిక్కటి పాలు", hi: "फुल क्रीम दूध" },
      { fr: "Beurre fondu noisette", en: "Melted unsalted butter", te: "కరిగించిన వెన్న", hi: "पिघला हुआ मक्खन" },
      { fr: "Sucre semoule fin", en: "Granulated sugar", te: "పంచదార", hi: "चीनी" },
      { fr: "Extrait pur de vanille Bourbon", en: "Pure vanilla bean extract", te: "వెనిల్లా ఎసెన్స్", hi: "वैनिला एक्सट्रैक्ट" },
      { fr: "Pincée de sel fin", en: "Pinch of fine salt", te: "చిటికెడు ఉప్పు", hi: "चुटकी भर नमक" }
    ],
    steps: [
      {
        title: { fr: "Fouetter l'appareil lisse", en: "Whisk Silky Batter", te: "పిండి మిశ్రమం సిద్ధం చేయండి", hi: "घोल तैयार करें" },
        instruction: {
          fr: "Fouetter les œufs avec le lait, le beurre fondu, le sucre, la vanille et le sel. Incorporer la farine tamisée progressivement jusqu'à texture veloutée sans grumeaux.",
          en: "Whisk eggs, milk, melted butter, sugar, vanilla, and salt. Gradually sift in flour until velvety smooth with no lumps.",
          te: "గుడ్లు, పాలు, కరిగిన వెన్న, చక్కెర, వెనిల్లా మరియు ఉప్పు కలపండి. పిండిని కొద్దికొద్దిగా వేస్తూ ఉండలు లేకుండా కలపండి.",
          hi: "अंडे, दूध, पिघला मक्खन, चीनी, वैनिला और नमक फेंटें। धीरे-धीरे मैदा मिलाएं जब तक घोल पूरी तरह चिकना न हो जाए।"
        }
      },
      {
        title: { fr: "Reposer la pâte", en: "Rest Batter", te: "పిండికి విశ్రాంతి ఇవ్వండి", hi: "घोल को आराम दें" },
        instruction: {
          fr: "Couvrir d'un linge propre et laisser reposer 30 minutes à température ambiante pour détendre le gluten.",
          en: "Cover and let the batter rest for 30 minutes to relax gluten for tender, delicate crêpes.",
          te: "పిండిని 30 నిమిషాల పాటు కప్పి పక్కన ఉంచండి.",
          hi: "कपड़े से ढककर 30 मिनट के लिए रख दें ताकि क्रेप्स मुलायम बनें।"
        }
      },
      {
        title: { fr: "Verser en voile fin", en: "Swirl in Hot Pan", te: "పెనంపై పోయండి", hi: "पैन में फैलाएं" },
        instruction: {
          fr: "Chauffer une crêpière beurrée à feu moyen. Verser une petite louche et napper le fond d'un geste circulaire rapide.",
          en: "Heat a non-stick crêpe pan over medium heat with a dab of butter. Pour a scant 1/4 cup batter, swirling immediately to coat the pan paper-thin.",
          te: "పెనంపై కొద్దిగా వెన్న రాసి వేడి చేయండి. పిండిని పోసి గుండ్రంగా తిప్పుతూ పలుచగా పరచండి.",
          hi: "पैन में थोड़ा मक्खन लगाकर गर्म करें। घोल डालें और पैन को घुमाकर बहुत पतला फैलाएं।"
        }
      },
      {
        title: { fr: "Dorer et déguster", en: "Flip and Serve", te: "తిప్పి కాల్చండి", hi: "पलटें और परोसें" },
        instruction: {
          fr: "Cuire 1 minute jusqu'à bords dorés, retourner délicatement et cuire 30 secondes. Plier en éventail et saupoudrer de sucre.",
          en: "Cook 1-2 minutes until edges curl golden brown. Flip gently and cook 30 seconds more. Fold into triangles and dust with sugar.",
          te: "1 నిమిషం కాల్చి, తిప్పి మరో 30 సెకన్లు కాల్చండి. త్రికోణంగా మడతపెట్టి పంచదార చల్లండి.",
          hi: "1-2 मिनट पकाएं जब तक किनारे सुनहरे न हो जाएं। पलटकर 30 सेकंड और पकाएं। मोड़कर चीनी छिड़कें।"
        }
      }
    ]
  },

  // 4. Coq au Vin
  "coq-au-vin": {
    title: {
      fr: "Coq au Vin de Bourgogne",
      en: "Coq au Vin",
      te: "కోక్ ఓ విన్ (రెడ్ వైన్ లో ఉడికించిన చికెన్)",
      hi: "कॉक ओ वाइन (रेड वाइन चिकन स्टू)"
    },
    subtitle: {
      fr: "Mijoté emblématique au vin rouge de Bourgogne, lardons et champignons.",
      en: "A classic French dish with rich flavors.",
      te: "సంపన్నమైన రుచులతో కూడిన సంప్రదాయ ఫ్రెంచ్ చికెన్ వంటకం.",
      hi: "गहरे और समृद्ध स्वाद वाला पारंपरिक फ्रेंच चिकन व्यंजन।"
    },
    categoryLabel: {
      fr: "Plat Mijoté de Tradition",
      en: "Traditional Braised Dish",
      te: "సంప్రదాయ చికెన్ వంటకం",
      hi: "पारंपरिक स्टू"
    },
    description: {
      fr: "Morceaux de poulet fermier rissolés et mijotés longuement dans un vin rouge corsé de Bourgogne, accompagnés de lardons fumés dorés, de champignons de Paris émincés, de petits oignons grelots glacés et d'un bouquet garni parfumé.",
      en: "Tender bone-in chicken thighs braised slowly in full-bodied red Burgundy wine with smoked lardons, earthy cremini mushrooms, caramelized pearl onions, and aromatic bouquet garni.",
      te: "బోన్-ఇన్ చికెన్ ముక్కలను బర్గండీ రెడ్ వైన్, స్మోక్డ్ లార్డన్స్, పుట్టగొడుగులు మరియు ఉల్లిపాయలతో నెమ్మదిగా ఉడికిస్తారు.",
      hi: "चिकन के टुकड़ों को गाढ़ी बरगंडी रेड वाइन, स्मोक्ड बेकन, मशरूम, छोटे प्याज और खुशबूदार जड़ी-बूटियों के साथ धीमी आंच पर पकाया जाता है।"
    },
    wine: {
      fr: "Bourgogne Pinot Noir ou Côtes du Rhône",
      en: "Bourgogne Pinot Noir or Côtes du Rhône",
      te: "బర్గండీ పినోట్ నోయిర్ లేదా కోట్స్ డు రోన్",
      hi: "बरगंडी पिनोट नोइर या कोट्स डू रोन"
    },
    wineNotes: {
      fr: "Servez toujours avec le même Pinot Noir de Bourgogne que celui employé pour le braisage afin d'assurer une harmonie aromatique absolue.",
      en: "Always serve with the same red Burgundy or Pinot Noir used in the braising liquor for harmonious flavor resonance.",
      te: "వంటలో ఉపయోగించిన అదే రెడ్ వైన్‌ను వడ్డించడం వల్ల రుచి అద్భుతంగా ఉంటుంది.",
      hi: "हमेशा उसी बरगंडी या पिनोट नोइर के साथ परोसें जिसका उपयोग पकाने में किया गया है।"
    },
    chefTip: {
      fr: "Faites dorer les lardons en premier, puis saisissez les morceaux de poulet dans la graisse de canard ou de lardon rendue. Cela confère une profondeur fumée exceptionnelle à la sauce.",
      en: "Brown the bacon lardons first, then sear the chicken in the rendered bacon fat. This layers incredible smoky savory depth into the sauce.",
      te: "ముందుగా బేకన్ ముక్కలను వేయించి, ఆ నూనెలోనే చికెన్ ముక్కలను వేయించండి. ఇది సాస్‌కు మంచి పొగ రుచిని అందిస్తుంది.",
      hi: "पहले बेकन को भूनें, फिर उसी वसा में चिकन को भूनें। यह सॉस को अद्भुत गहरा स्वाद देता है।"
    },
    ingredients: [
      { fr: "Cuisses et pilons de poulet fermier", en: "Bone-in chicken thighs and drumsticks", te: "చికెన్ తొడ ముక్కలు", hi: "चिकन लेग और थाई" },
      { fr: "Bouteille de vin rouge de Bourgogne (Pinot Noir)", en: "Full-bodied red Burgundy wine", te: "రెడ్ బర్గండీ వైన్", hi: "रेड बरगंडी वाइन" },
      { fr: "Lardons fumés pur porc taillés", en: "Smoked bacon lardons, diced", te: "స్మోక్డ్ బేకన్ లార్డన్స్", hi: "स्मोक्ड बेकन के टुकड़े" },
      { fr: "Champignons de Paris émincés", en: "Cremini button mushrooms, halved", te: "తాజా పుట్టగొడుగులు", hi: "मशरूम" },
      { fr: "Petits oignons grelots épluchés", en: "Pearl onions, peeled", te: "చిన్న ఉల్లిపాయలు", hi: "छोटे प्याज (पर्ल अनियन)" },
      { fr: "Gousses d'ail écrasées", en: "Garlic cloves, crushed", te: "వెల్లుల్లి రెబ్బలు", hi: "कुचला हुआ लहसुन" },
      { fr: "Bouquet garni (thym, laurier, romarin)", en: "Fresh bouquet garni", te: "సుగంధ మూలికల కట్ట", hi: "जड़ी-बूटी का गुच्छा" },
      { fr: "Concentré de tomate pur", en: "Tomato paste", te: "టమోటా పేస్ట్", hi: "टमाटर का पेस्ट" },
      { fr: "Beurre manié pour lier la sauce", en: "Beurre manié", te: "వెన్న-పిండి మిశ్రమం", hi: "मक्खन और मैदे का मिश्रण" }
    ],
    steps: [
      {
        title: { fr: "Rissoler les lardons", en: "Crisp Bacon Lardons", te: "బేకన్ వేయించండి", hi: "बेकन को भूनें" },
        instruction: {
          fr: "Dans une cocotte en fonte, faire dorer les lardons fumés. Les réserver à l'aide d'une écumoire en conservant les sucs de cuisson.",
          en: "In a Dutch oven, crisp bacon lardons until golden and fragrant. Transfer with slotted spoon, leaving flavorful drippings.",
          te: "ఒక పాత్రలో బేకన్ ముక్కలను బంగారు రంగు వచ్చే వరకు వేయించి తీసి పక్కన పెట్టండి.",
          hi: "कड़ाही में बेकन को कुरकुरा और सुनहरा होने तक भूनें। तेल छोड़कर बेकन निकाल लें।"
        }
      },
      {
        title: { fr: "Saisir le poulet", en: "Brown Chicken Pieces", te: "చికెన్ వేయించండి", hi: "चिकन को भूनें" },
        instruction: {
          fr: "Assaisonner le poulet de sel et poivre. Le saisir vivement dans la graisse chaude 4 à 5 minutes de chaque côté jusqu'à peau bien dorée.",
          en: "Season chicken with salt and pepper. Sear in the hot bacon fat over medium-high heat until skin is deeply golden, 4-5 minutes per side.",
          te: "చికెన్ ముక్కలకు ఉప్పు, మిరియాలు రాసి, వేడి నూనెలో రెండు వైపులా 5 నిమిషాలు వేయించండి.",
          hi: "चिकन पर नमक-मिर्च लगाएं। गर्म तेल में दोनों तरफ 4-5 मिनट तक सुनहरा होने तक भूनें।"
        }
      },
      {
        title: { fr: "Mijoter au vin rouge", en: "Braise in Red Wine", te: "రెడ్ వైన్ లో ఉడికించండి", hi: "वाइन में धीमी आंच पर पकाएं" },
        instruction: {
          fr: "Ajouter l'ail, les oignons grelots, le concentré de tomate et le bouquet garni. Verser la bouteille de vin rouge entière. Couvrir et laisser mijoter 75 minutes.",
          en: "Add garlic, pearl onions, tomato paste, bouquet garni, and pour over the entire bottle of red wine. Bring to simmer, cover, and gently braise for 75 minutes.",
          te: "వెల్లుల్లి, ఉల్లిపాయలు, టమోటా పేస్ట్, మూలికలు మరియు పూర్తి బాటిల్ రెడ్ వైన్ పోయండి. మూతపెట్టి 75 నిమిషాలు ఉడికించండి.",
          hi: "लहसुन, प्याज, टमाटर पेस्ट और वाइन डालें। ढककर 75 मिनट तक धीमी आंच पर पकने दें।"
        }
      },
      {
        title: { fr: "Glacer et napper la sauce", en: "Sauté Mushrooms & Thicken", te: "పుట్టగొడుగులు కలిపి చిక్కబరచండి", hi: "मशरूम मिलाएं और सॉस गाढ़ा करें" },
        instruction: {
          fr: "Poêler les champignons au beurre. Les ajouter à la cocotte avec les lardons. Incorporer le beurre manié en fouettant pour lier la sauce en un velouté brillant.",
          en: "In a separate skillet, sauté mushrooms in butter until caramelized. Add mushrooms and lardons into stew. Whisk in beurre manié to thicken to a glossy glaze.",
          te: "పుట్టగొడుగులను వేయించి కలపండి. సాస్ చిక్కబడే వరకు వెన్న మిశ్రమం కలిపి వడ్డించండి.",
          hi: "मशरूम को मक्खन में भूनकर स्टू में डालें। सॉस को गाढ़ा और चमकदार बनाने के लिए मक्खन-मैदा मिलाएं।"
        }
      }
    ]
  },

  // 5. Bœuf Bourguignon
  "boeuf-bourguignon": {
    title: {
      fr: "Bœuf Bourguignon Traditionnel",
      en: "Beef Bourguignon",
      te: "బోఫ్ బుర్గిన్యోన్ (ఫ్రెంచ్ రెడ్ వైన్ బీఫ్ స్టీవ్)",
      hi: "बीफ बोरगिग्नन (रेड वाइन में पका हुआ स्टू)"
    },
    subtitle: {
      fr: "Le chef-d'œuvre de la gastronomie bourguignonne mijoté 3 heures.",
      en: "Julia Child's beloved Burgundy beef stew.",
      te: "జూలియా చైల్డ్ ప్రసిద్ధ బర్గండీ స్టీవ్.",
      hi: "जूलिया चाइल्ड का प्रसिद्ध और स्वादिष्ट फ्रेंच स्टू।"
    },
    categoryLabel: {
      fr: "Haute Gastronomie de Terroir",
      en: "Gourmet Terroir Classic",
      te: "రాయల్ ఫ్రెంచ్ వంటకం",
      hi: "शाही व्यंजन"
    },
    description: {
      fr: "Morceaux de bœuf fondants saisis puis mijotés pendant 3 heures dans un bouillon riche au vin rouge de Bourgogne, carottes douces, oignons grelots caramélisés et champignons sautés au beurre.",
      en: "The jewel of French comfort gastronomy: prime chuck beef seared in bacon lardons, simmered for 3 hours in red Burgundy wine and rich beef bone broth with sweet carrots, mushrooms, and fresh herbs.",
      te: "గొడ్డు మాంసం ముక్కలను బర్గండీ రెడ్ వైన్ మరియు ఎముకల రసంలో క్యారెట్లు, పుట్టగొడుగులతో 3 గంటల పాటు నెమ్మదిగా ఉడికిస్తారు.",
      hi: "मांस के टुकड़ों को बरगंडी रेड वाइन और गाढ़े सूप में गाजर, मशरूम और जड़ी-बूटियों के साथ 3 घंटे तक पकाया जाता है।"
    },
    wine: {
      fr: "Gevrey-Chambertin ou Pommard (Bourgogne)",
      en: "Gevrey-Chambertin or Pommard",
      te: "గెవ్రే-చాంబర్టిన్ లేదా పోమార్డ్",
      hi: "गेव्रे-चैम्बर्टिन या पोमार्ड"
    },
    wineNotes: {
      fr: "Les tanins soyeux et la profondeur des fruits noirs d'un grand cru de Bourgogne magnifient la chair fondante du bœuf braisé.",
      en: "The muscular tannins and dark fruit of aged Pinot Noir elevate the succulent slow-braised beef.",
      te: "పాతకాలపు పినోట్ నోయిర్ వైన్ నెమ్మదిగా ఉడికించిన మాంసం రుచిని అద్భుతంగా పెంచుతుంది.",
      hi: "पुरानी पिनोट नोइर वाइन धीमी आंच पर पके मांस के स्वाद को बढ़ाती है।"
    },
    chefTip: {
      fr: "Séchez parfaitement vos cubes de viande avec du papier absorbant avant de les saisir dans une cocotte fumante. S'ils sont humides, la viande bout au lieu de caraméliser.",
      en: "Pat beef cubes completely dry before searing in a smoking hot Dutch oven. Crowding the pan causes meat to steam instead of caramelize.",
      te: "ముక్కలను వేయించే ముందు కాగితంతో పూర్తిగా తుడవండి. తడి ఉంటే అవి వేగకుండా ఉడికిపోతాయి.",
      hi: "भूनने से पहले मांस के टुकड़ों को पूरी तरह सूखा लें। नमी होने से वे भुनने के बजाय उबलने लगेंगे।"
    },
    ingredients: [
      { fr: "Paleron ou gîte de bœuf en cubes", en: "Boneless beef chuck roast, in cubes", te: "బోన్‌లెస్ మాంసం ముక్కలు", hi: "मांस के चौकोर टुकड़े" },
      { fr: "Vin rouge de Bourgogne charpenté", en: "Dry red Burgundy wine", te: "డ్రై రెడ్ బర్గండీ వైన్", hi: "रेड बरगंडी वाइन" },
      { fr: "Bouillon de bœuf maison", en: "Rich beef bone stock", te: "మాంసం సూప్ రసం", hi: "बीफ स्टॉक (सूप)" },
      { fr: "Lardons fumés fermiers", en: "Smoked pork belly lardons", te: "స్మోక్డ్ లార్డన్స్", hi: "स्मोक्ड बेकन" },
      { fr: "Carottes coupées en rondelles épaisses", en: "Carrots, sliced into chunks", te: "క్యారెట్ ముక్కలు", hi: "गाजर के टुकड़े" },
      { fr: "Champignons de Paris dorés", en: "Cremini mushrooms, quartered", te: "పుట్టగొడుగులు", hi: "मशरूम" },
      { fr: "Petits oignons grelots", en: "Pearl onions", te: "చిన్న ఉల్లిపాయలు", hi: "छोटे प्याज" },
      { fr: "Gousses d'ail hachées", en: "Garlic cloves, minced", te: "వెల్లుల్లి రెబ్బలు", hi: "कटा हुआ लहसुन" }
    ],
    steps: [
      {
        title: { fr: "Saisir les cubes de bœuf", en: "Sear Beef Cubes", te: "మాంసం ముక్కలను వేయించండి", hi: "मांस को भूनें" },
        instruction: {
          fr: "Colorer les cubes de viande par petites quantités dans la graisse des lardons jusqu'à belle caramélisation sur toutes les faces.",
          en: "Brown beef cubes in batches in hot bacon fat until deeply caramelized on all sides.",
          te: "నూనెలో మాంసం ముక్కలను అన్ని వైపులా బాగా వేయించండి.",
          hi: "गर्म तेल में मांस के टुकड़ों को हर तरफ से गहरा भूरा होने तक भूनें।"
        }
      },
      {
        title: { fr: "Suer la garniture aromatique", en: "Sauté Aromatics", te: "కూరగాయలు వేయించండి", hi: "सब्जियां भूनें" },
        instruction: {
          fr: "Faire suer carottes et oignons dans la cocotte, puis incorporer le concentré de tomate et l'ail écrasé.",
          en: "Add carrots and onions to Dutch oven. Stir until lightly softened, then stir in tomato paste and garlic.",
          te: "క్యారెట్లు, ఉల్లిపాయలు వేసి మెత్తబడేవరకు వేయించి, టమోటా పేస్ట్ కలపండి.",
          hi: "गाजर और प्याज डालकर भूनें, फिर टमाटर पेस्ट और लहसुन मिलाएं।"
        }
      },
      {
        title: { fr: "Braiser lentement au four", en: "Slow Braise", te: "ఓవెన్ లో నెమ్మదిగా ఉడికించండి", hi: "ओवन में धीमी आंच पर पकाएं" },
        instruction: {
          fr: "Remettre la viande, mouiller au vin rouge et au bouillon. Couvrir et enfourner à 160°C pendant 2h30 à 3 heures.",
          en: "Return beef, pour in red wine and beef stock. Simmer covered in oven at 160°C (325°F) for 2.5 to 3 hours until fork-tender.",
          te: "వైన్ మరియు సూప్ పోసి, మూతపెట్టి 160°C వద్ద 3 గంటలు ఓవెన్ లో ఉడికించండి.",
          hi: "मांस वापस डालें, वाइन और सूप डालें। ढककर 160°C पर 3 घंटे तक पकाएं जब तक कि मांस बिल्कुल नरम न हो जाए।"
        }
      },
      {
        title: { fr: "Garnir et glacer la sauce", en: "Combine and Glaze", te: "పుట్టగొడుగులు కలిపి వడ్డించండి", hi: "मशरूम मिलाएं और परोसें" },
        instruction: {
          fr: "Ajouter les champignons sautés et les oignons grelots caramélisés. Laisser réduire 10 minutes pour napper la cuillère.",
          en: "Fold in sautéed butter mushrooms and glazed pearl onions. Simmer uncovered for 10 minutes until sauce coats the back of a spoon.",
          te: "పుట్టగొడుగులు, ఉల్లిపాయలు కలిపి మరో 10 నిమిషాలు ఉడికించి వడ్డించండి.",
          hi: "भूने हुए मशरूम और प्याज मिलाएं। 10 मिनट तक पकाएं जब तक सॉस गाढ़ा न हो जाए।"
        }
      }
    ]
  },

  // 6. Soupe à l'Oignon Gratinée
  "soupe-oignon": {
    title: {
      fr: "Soupe à l'Oignon Gratinée à la Parisienne",
      en: "French Onion Soup",
      te: "ఫ్రెంచ్ ఆనియన్ సూప్ (కరిగిన చీజ్ తో)",
      hi: "फ्रेंच अनियन सूप (पिघली हुई चीज के साथ)"
    },
    subtitle: {
      fr: "Oignons fondants caramélisés, baguette grillée et croûte de Gruyère gratinée.",
      en: "Caramelized onions with bubbling Gruyère crust.",
      te: "కారమెలైజ్డ్ ఉల్లిపాయలు మరియు కరిగిన గ్రుయెర్ చీజ్ సూప్.",
      hi: "कैरमेलाइज्ड प्याज और पिघले हुए ग्रूयेर चीज़ वाला पारंपरिक सूप।"
    },
    categoryLabel: {
      fr: "Soupe & Entrée Bistrot",
      en: "Bistro Soup & Starter",
      te: "సూప్ & స్టార్టర్",
      hi: "सूप और स्टार्टर"
    },
    description: {
      fr: "Oignons jaunes lentement confits pendant 45 minutes jusqu'à couleur acajou, déglacés au vin blanc sec et mouillés au riche bouillon de bœuf, couronnés de tranches de baguette artisanale et d'une généreuse couche de Gruyère suisse gratiné au four.",
      en: "Sweet yellow onions slow-caramelized over 45 minutes to deep mahogany richness, deglazed with dry white wine and rich beef broth, topped with toasted artisanal baguette and melted bubbling Swiss Gruyère.",
      te: "ఉల్లిపాయలను 45 నిమిషాల పాటు వెన్నలో నెమ్మదిగా వేయించి, వైన్ మరియు బీఫ్ సూప్‌తో ఉడికించి, బ్రెడ్ మరియు కరిగిన చీజ్‌తో వడ్డిస్తారు.",
      hi: "मीठे पीले प्याज को 45 मिनट तक मक्खन में भूनकर वाइन और सूप के साथ पकाया जाता है, फिर टोस्टेड ब्रेड और पिघले हुए ग्रूयेर चीज़ से सजाया जाता है।"
    },
    wine: {
      fr: "Bourgogne Aligoté ou Côtes du Jura",
      en: "Bourgogne Aligoté or Côtes du Jura",
      te: "బర్గండీ అలిగోట్ లేదా కోట్స్ డు జురా",
      hi: "बरगंडी एलीगोटे या कोट्स डू जुरा"
    },
    wineNotes: {
      fr: "Un blanc sec et minéral qui tranche avec vivacité la richesse gourmande du fromage Gruyère fondu.",
      en: "A dry, mineral white wine cuts through the decadent richness of melted Gruyère cheese.",
      te: "పొడి వైట్ వైన్ కరిగిన చీజ్ యొక్క చిక్కదనాన్ని సమతుల్యం చేస్తుంది.",
      hi: "सूखी सफेद वाइन पिघले हुए चीज़ के भारीपन को संतुलित करती है।"
    },
    chefTip: {
      fr: "La patience est essentielle : ne brusquez jamais la caramélisation des oignons à feu vif. Une cuisson douce et prolongée extrait leurs sucres naturels sans aucune amertume.",
      en: "Patience is key: do not rush the onion caramelization over high flame. Low and slow develops natural sugars without bitterness.",
      te: "ఉల్లిపాయలను ఎక్కువ మంటపై వేయించకండి. తక్కువ మంటపై నెమ్మదిగా వేయించడం వల్ల సహజమైన తీపి వస్తుంది.",
      hi: "प्याज को तेज आंच पर जल्दी में न भूनें। धीमी आंच पर पकाने से प्राकृतिक मिठास निकलती है।"
    },
    ingredients: [
      { fr: "Oignons jaunes doux, finement émincés", en: "Yellow onions, thinly sliced", te: "సన్నగా తరిగిన పసుపు ఉల్లిపాయలు", hi: "बारीक कटे प्याज" },
      { fr: "Beurre doux de Normandie", en: "French unsalted butter", te: "అన్‌సాల్టెడ్ వెన్న", hi: "मक्खन" },
      { fr: "Vin blanc sec de cuisine", en: "Dry white wine", te: "డ్రై వైట్ వైన్", hi: "व्हाइट वाइन" },
      { fr: "Bouillon de bœuf corsé", en: "Rich beef stock", te: "బీఫ్ స్టాక్ సూప్", hi: "सूप (स्टॉक)" },
      { fr: "Tranches de baguette tradition grillées", en: "French artisanal baguette, sliced", te: "కాల్చిన ఫ్రెంచ్ బ్రెడ్ ముక్కలు", hi: "टोस्ट किए हुए ब्रेड स्लाइस" },
      { fr: "Fromage Gruyère suisse râpé", en: "Grated Swiss Gruyère cheese", te: "తురిమిన గ్రుయెర్ చీజ్", hi: "कद्दूकस किया हुआ ग्रूयेर चीज़" }
    ],
    steps: [
      {
        title: { fr: "Caraméliser les oignons", en: "Caramelize Onions", te: "ఉల్లిపాయలు వేయించండి", hi: "प्याज को कैरेमेलाइज करें" },
        instruction: {
          fr: "Fondre le beurre et cuire les oignons à feu très doux pendant 45 minutes en remuant régulièrement jusqu'à belle teinte ambrée.",
          en: "Melt butter in heavy pot. Cook onions on low heat for 45 minutes, stirring frequently until deep amber and sweet.",
          te: "తక్కువ మంటపై ఉల్లిపాయలను 45 నిమిషాల పాటు బంగారు రంగు వచ్చేవరకు వేయించండి.",
          hi: "धीमी आंच पर प्याज को 45 मिनट तक गहरा भूरा और मीठा होने तक भूनें।"
        }
      },
      {
        title: { fr: "Déglacer et mijoter", en: "Deglaze & Simmer", te: "వైన్ పోసి ఉడికించండి", hi: "वाइन डालकर उबालें" },
        instruction: {
          fr: "Déglacer au vin blanc en grattant les sucs au fond du faitout. Verser le bouillon de bœuf chaud et laisser frémir 25 minutes.",
          en: "Pour in white wine to scrape up brown bits. Add beef stock and fresh thyme sprigs. Simmer for 25 minutes.",
          te: "వైట్ వైన్ మరియు వేడి సూప్ పోసి 25 నిమిషాలు మరగనివ్వండి.",
          hi: "सफेद वाइन और गर्म सूप डालें। 25 मिनट तक धीमी आंच पर उबलने दें।"
        }
      },
      {
        title: { fr: "Gratiner au four", en: "Broil Gratinée", te: "చీజ్ తో బేక్ చేయండి", hi: "चीज़ डालकर बेक करें" },
        instruction: {
          fr: "Verser la soupe dans des bols allant au four, déposer le pain grillé et couvrir d'une montagne de Gruyère. Gratiner 4 minutes sous le gril.",
          en: "Ladle soup into oven-safe ramekins. Top with toasted baguette slices and mound generously with grated Gruyère. Broil 3-4 minutes until bubbling and golden.",
          te: "సూప్‌ను గిన్నెలో పోసి, బ్రెడ్ ముక్కలు, చీజ్ వేసి 4 నిమిషాలు ఓవెన్ లో కాల్చండి.",
          hi: "कटोरों में सूप डालें, ब्रेड और ढेर सारा चीज़ डालकर 3-4 मिनट तक सुनहरा होने तक बेक करें।"
        }
      }
    ]
  },

  // 7. Quiche Lorraine
  "quiche-lorraine": {
    title: {
      fr: "Quiche Lorraine Traditionnelle",
      en: "Quiche Lorraine",
      te: "క్విచే లొరైన్ (క్రీమీ బేకన్ పై)",
      hi: "क्विश लोरेन (मलाईदार बेकन टार्ट)"
    },
    subtitle: {
      fr: "Tarte salée pur beurre garnie de lardons croustillants et crème fraîche.",
      en: "Classic savory tart with bacon lardons & cream.",
      te: "క్రిస్పీ బేకన్ లార్డన్స్ మరియు ఫ్రెంచ్ క్రీమ్‌తో చేసిన రుచికరమైన పై.",
      hi: "कुरकुरी बेकन और गाढ़ी मलाई से बना लोकप्रिय क्लासिक टार्ट।"
    },
    categoryLabel: {
      fr: "Tarte Salée & Brunch",
      en: "Savory Tart & Brunch",
      te: "అల్పాహారం & బ్రంచ్",
      hi: "नाश्ता और ब्रंच"
    },
    description: {
      fr: "La fierté de l'Est de la France : une pâte brisée pur beurre garnie de lardons fumés dorés, d'œufs frais de ferme, d'une onctueuse crème fraîche épaisse et d'une pointe de noix de muscade fraîchement râpée.",
      en: "The pride of eastern France: a buttery shortcrust pastry filled with crisp smoked bacon lardons, fresh farm eggs, rich crème fraîche, and a fragrant whisper of freshly grated nutmeg.",
      te: "తూర్పు ఫ్రాన్స్ యొక్క గర్వకారణమైన వంటకం: వెన్న పేస్ట్రీలో స్మోక్డ్ బేకన్, తాజా గుడ్లు, క్రీమ్ మరియు జాజికాయతో బేక్ చేయబడుతుంది.",
      hi: "पूर्वी फ्रांस का प्रसिद्ध व्यंजन: मक्खन वाली पेस्ट्री में कुरकुरी स्मोक्ड बेकन, अंडे, गाढ़ी मलाई और जायफल भरकर बेक किया जाता है।"
    },
    wine: {
      fr: "Pinot Blanc d'Alsace ou Riesling",
      en: "Alsace Pinot Blanc or Riesling",
      te: "అల్సాస్ పినోట్ బ్లాంక్ లేదా రైస్లింగ్",
      hi: "अलसैस पिनोट ब्लैंक या रीस्लिंग"
    },
    wineNotes: {
      fr: "Un Pinot Blanc sec d'Alsace épouse la douceur de l'appareil à crème et équilibre la salinité fumée des lardons.",
      en: "A dry Alsace Pinot Blanc complements the creamy egg custard and balances the smoky saltiness of bacon.",
      te: "అల్సాస్ వైన్ క్రీమీ కస్టర్డ్ మరియు బేకన్ ఉప్పదనాన్ని సంపూర్ణంగా సమతుల్యం చేస్తుంది.",
      hi: "सूखी अलसैस वाइन मलाईदार कस्टर्ड और बेकन के नमकीन स्वाद को संतुलित करती है।"
    },
    chefTip: {
      fr: "Cuisez votre fond de pâte à blanc pendant 15 minutes avant de verser l'appareil pour éviter que la pâte ne ramollisse à la cuisson.",
      en: "Blind-bake your pastry crust for 15 minutes before adding the custard to prevent a soggy bottom.",
      te: "కస్టర్డ్ పోసే ముందు పేస్ట్రీని 15 నిమిషాలు బేక్ చేయండి, తద్వారా అడుగు భాగం మెత్తబడకుండా కరకరలాడుతుంది.",
      hi: "घोल डालने से पहले टार्ट बेस को 15 मिनट पहले बेक कर लें ताकि वह कुरकुरा रहे।"
    },
    ingredients: [
      { fr: "Disque de pâte brisée pur beurre", en: "Pâte brisée (shortcrust pastry)", te: "పేస్ట్రీ బేస్", hi: "पेस्ट्री बेस" },
      { fr: "Lardons fumés fermiers", en: "Smoked bacon lardons", te: "స్మోక్డ్ బేకన్ లార్డన్స్", hi: "स्मोक्ड बेकन" },
      { fr: "Œufs frais entiers", en: "Fresh farm eggs", te: "తాజా కోడిగుడ్లు", hi: "ताजे अंडे" },
      { fr: "Crème fraîche épaisse de Normandie", en: "Crème fraîche or heavy cream", te: "ఫ్రెంచ్ క్రీమ్", hi: "गाढ़ी मलाई (क्रीम)" },
      { fr: "Lait entier", en: "Whole milk", te: "చిక్కటి పాలు", hi: "दूध" },
      { fr: "Noix de muscade râpée", en: "Freshly grated nutmeg", te: "జాజికాయ పొడి", hi: "जायफल पाउडर" }
    ],
    steps: [
      {
        title: { fr: "Cuire la pâte à blanc", en: "Blind Bake Crust", te: "బేస్ బేక్ చేయండి", hi: "बेस को पहले बेक करें" },
        instruction: {
          fr: "Foncer un moule à tarte, piquer à la fourchette et cuire à blanc à 190°C pendant 15 minutes.",
          en: "Line a tart tin with pastry, prick with fork, weight with baking beans, and bake at 190°C (375°F) for 15 minutes.",
          te: "పేస్ట్రీని గిన్నెలో పరిచి 190°C వద్ద 15 నిమిషాలు బేక్ చేయండి.",
          hi: "टार्ट मोल्ड में पेस्ट्री लगाएं और 190°C पर 15 मिनट तक बेक करें।"
        }
      },
      {
        title: { fr: "Rissoler les lardons", en: "Crisp Lardons", te: "బేకన్ వేయించండి", hi: "बेकन भूनें" },
        instruction: {
          fr: "Faire dorer les lardons à sec, égoutter le gras et répartir sur le fond de tarte précuit.",
          en: "Sauté lardons until crisp. Drain excess fat on paper towels and scatter across the pre-baked pastry base.",
          te: "బేకన్ వేయించి, నూనె తీసివేసి బేస్ పైన పరచండి.",
          hi: "बेकन को कुरकुरा भूनें और पहले से पके बेस पर फैलाएं।"
        }
      },
      {
        title: { fr: "Verser la migaine et cuire", en: "Whisk Custard & Bake", te: "క్రీమ్ పోసి బేక్ చేయండి", hi: "घोल डालकर बेक करें" },
        instruction: {
          fr: "Fouetter œufs, crème, lait, sel, poivre et muscade. Verser sur les lardons et cuire 35 minutes à 180°C jusqu'à belle dorure.",
          en: "Whisk eggs, crème fraîche, milk, salt, pepper, and nutmeg. Pour over lardons. Bake for 30-35 minutes until puffed and set.",
          te: "గుడ్లు, క్రీమ్, పాలు, ఉప్పు, జాజికాయ కలిపి బేకన్ పై పోసి 35 నిమిషాలు బేక్ చేయండి.",
          hi: "अंडे, मलाई, दूध और जायफल फेंटें। बेकन पर डालें और 35 मिनट तक बेक करें।"
        }
      }
    ]
  },

  // 8. Crème Brûlée
  "creme-brulee": {
    title: {
      fr: "Crème Brûlée à la Vanille de Madagascar",
      en: "Crème Brûlée",
      te: "క్రెమ్ బ్రూలే (కారమెల్ క్రస్ట్‌తో వెనిల్లా కస్టర్డ్)",
      hi: "क्रेम ब्रूले (कैरमेल क्रस्ट वाला वेनिला कस्टर्ड)"
    },
    subtitle: {
      fr: "Crème soyeuse et fondante sous une fine couche de caramel craquant.",
      en: "Silky vanilla custard with shatteringly crisp caramel.",
      te: "కరకరలాడే చక్కెర పొరతో సున్నితమైన వెనిల్లా డెజర్ట్.",
      hi: "कुरकुरी कैरमेल परत और रेशमी वेनिला कस्टर्ड से बना लाजवाब डेसर्ट।"
    },
    categoryLabel: {
      fr: "Dessert Gastronomique",
      en: "Gourmet Dessert",
      te: "డెజర్ట్",
      hi: "डेसर्ट"
    },
    description: {
      fr: "Crème veloutée délicatement infusée aux grains de vanille Bourbon de Madagascar, cuite en douceur au bain-marie, saupoudrée de cassonade puis caramélisée au chalumeau en un disque de verre ambré craquant sous la cuillère.",
      en: "Velvety custard infused with whole Madagascar vanilla bean seeds, gently baked in a water bath, then topped with cane sugar and torched until shatteringly crisp.",
      te: "మడగాస్కర్ వెనిల్లా గింజలతో తయారుచేసిన మృదువైన కస్టర్డ్, పైన పంచదారను బర్నర్‌తో కారమెలైజ్ చేసి కరకరలాడేలా చేస్తారు.",
      hi: "मेडागास्कर वैनिला बीन्स के साथ पकाया गया मखमली कस्टर्ड, जिसके ऊपर चीनी छिड़ककर टॉर्च से कुरकुरी कैरेमेल परत बनाई जाती है।"
    },
    wine: {
      fr: "Sauternes ou Muscat de Beaumes-de-Venise",
      en: "Sauternes or Muscat",
      te: "సౌటర్న్స్ లేదా మస్కట్",
      hi: "सॉटरनेस या मस्कट"
    },
    wineNotes: {
      fr: "Les notes miellées et d'abricot confit d'un Sauternes créent un accord paradisiaque avec le sucre brûlé tiède et la crème vanillée bien fraîche.",
      en: "A honeyed Sauternes dessert wine creates heavenly harmony with warm burnt sugar and chilled vanilla cream.",
      te: "తేనె రుచిగల సౌటర్న్స్ డెజర్ట్ వైన్ వేడి కారమెల్ మరియు చల్లని క్రీమ్‌తో అద్భుతంగా సరిపోతుంది.",
      hi: "शहद जैसे मीठे सॉटरनेस वाइन गर्म कैरेमेल और ठंडी वैनिला क्रीम के साथ अद्भुत तालमेल बनाती है।"
    },
    chefTip: {
      fr: "Placez impérativement vos crèmes cuites au réfrigérateur au moins 4 heures avant de les caraméliser au chalumeau : ce contraste saisissant entre la crème glacée et le caramel brûlant fait toute la magie du dessert.",
      en: "Always chill the baked custards for at least 4 hours before torching the sugar, ensuring a delightful contrast between cold custard and hot caramel.",
      te: "చక్కెరను కరిగించే ముందు కస్టర్డ్‌ను కనీసం 4 గంటలు ఫ్రిజ్ లో ఉంచండి, ఇది చల్లని క్రీమ్ మరియు వేడి కారమెల్ మధ్య అద్భుతమైన అనుభూతిని ఇస్తుంది.",
      hi: "चीनी को पिघलाने से पहले कस्टर्ड को कम से कम 4 घंटे फ्रिज में रखें, जिससे ठंडे कस्टर्ड और गर्म कैरेमेल का बेमिसाल स्वाद मिले।"
    },
    ingredients: [
      { fr: "Crème liquide entière 35% de M.G.", en: "Heavy whipping cream", te: "హెవీ విప్పింగ్ క్రీమ్", hi: "ताजा गाढ़ी मलाई (क्रीम)" },
      { fr: "Jaunes d'œufs frais de gros calibre", en: "Fresh large egg yolks", te: "గుడ్డు పచ్చసొనలు", hi: "अंडे की जर्दी" },
      { fr: "Gousse de vanille de Madagascar fendue", en: "Madagascar vanilla bean", te: "వెనిల్లా బీన్ పాడ్", hi: "वैनिला फली" },
      { fr: "Sucre semoule extra fin", en: "Granulated sugar", te: "పంచదార", hi: "चीनी" },
      { fr: "Cassonade pure canne pour le croustillant", en: "Cane sugar for crust", te: "కారమెల్ కోసం బ్రౌన్ షుగర్", hi: "ब्राउन शुगर (कैरेमेल के लिए)" }
    ],
    steps: [
      {
        title: { fr: "Infuser la crème vanille", en: "Infuse Cream", te: "క్రీమ్ మరిగించండి", hi: "क्रीम में वैनिला मिलाएं" },
        instruction: {
          fr: "Chauffer la crème avec la gousse de vanille fendue et grattée. Retirer du feu dès les premiers frémissements et laisser infuser 15 minutes.",
          en: "Heat heavy cream with split vanilla bean and seeds to gentle simmer. Remove from heat and steep 15 minutes.",
          te: "క్రీమ్‌లో వెనిల్లా వేసి మరిగించి, 15 నిమిషాలు పక్కన ఉంచండి.",
          hi: "क्रीम को वैनिला के साथ धीमी आंच पर गर्म करें और 15 मिनट तक ढककर रखें।"
        }
      },
      {
        title: { fr: "Blanchir les jaunes", en: "Whisk Custard", te: "గుడ్లు, చక్కెర కలపండి", hi: "अंडे और चीनी फेंटें" },
        instruction: {
          fr: "Fouetter les jaunes d'œufs avec le sucre jusqu'à mélange pâle, puis incorporer la crème tiède filtrée en filet continu.",
          en: "Whisk egg yolks and sugar until pale yellow. Slowly stream in warm cream while continuously whisking.",
          te: "గుడ్డు పచ్చసొన మరియు చక్కెర కలిపి, గోరువెచ్చని క్రీమ్ పోస్తూ ఉండలు లేకుండా కలపండి.",
          hi: "अंडे की जर्दी और चीनी फेंटें, फिर गुनगुनी क्रीम धीरे-धीरे मिलाते रहें।"
        }
      },
      {
        title: { fr: "Cuire au bain-marie doux", en: "Bake in Water Bath", te: "వాటర్ బాత్‌లో బేక్ చేయండి", hi: "भाप में बेक करें" },
        instruction: {
          fr: "Verser dans 4 ramequins plats. Cuire au bain-marie à 150°C pendant 45 minutes jusqu'à ce que le centre soit tremblotant.",
          en: "Pour into 4 shallow ramekins. Place in roasting pan filled with boiling water halfway up the sides. Bake at 150°C (300°F) for 40-45 minutes.",
          te: "గిన్నెల్లో పోసి నీటి పాత్రలో ఉంచి 150°C వద్ద 45 నిమిషాలు బేక్ చేయండి.",
          hi: "कटोरों में डालें और गर्म पानी की ट्रे में रखकर 150°C पर 45 मिनट तक बेक करें।"
        }
      },
      {
        title: { fr: "Caraméliser au chalumeau", en: "Torch Sugar Glass", te: "కారమెల్ చేయండి", hi: "कैरेमेल बनाएं" },
        instruction: {
          fr: "Après 4 heures au frais, saupoudrer d'un voile de cassonade et brûler au chalumeau jusqu'à formation d'une croûte dorée cassante.",
          en: "Chill for 4 hours. Scatter thin layer of cane sugar on top and caramelize with blowtorch until deep amber glass.",
          te: "4 గంటలు చల్లబరిచిన తర్వాత పైన చక్కెర చల్లి బర్నర్‌తో కారమెలైజ్ చేయండి.",
          hi: "4 घंटे ठंडा करने के बाद ऊपर चीनी छिड़कें और टॉर्च से सुनहरा कैरेमेल बनाएं।"
        }
      }
    ]
  },

  // 9. Salade Lyonnaise
  "salade-lyonnaise": {
    title: {
      fr: "Salade Lyonnaise aux Lardons et Œuf Poché",
      en: "Classic Lyonnaise Salad",
      te: "సలాడ్ లయోన్నైస్ (పోచ్డ్ గుడ్డు మరియు బేకన్ సలాడ్)",
      hi: "सलाद ल्योनेस (पोच्ड एग और बेकन सलाद)"
    },
    subtitle: {
      fr: "Frisée croquante, lardons tièdes, croûtons dorés et œuf fermier poché coulant.",
      en: "Bistro frisée salad with warm bacon lardons & poached egg.",
      te: "ఫ్రెంచ్ బోషాన్ల ప్రసిద్ధ క్రిస్పీ బేకన్ మరియు పోచ్డ్ గుడ్డు సలాడ్.",
      hi: "कुरकुरी बेकन, लहसुनी क्राउटॉन्स और पोच्ड एग वाला पारंपरिक ल्योन सलाद।"
    },
    categoryLabel: {
      fr: "Spécialité des Bouchons Lyonnais",
      en: "Lyon Bistro Specialty",
      te: "లియోన్ ప్రత్యేక వంటకం",
      hi: "ल्योन का खास व्यंजन"
    },
    description: {
      fr: "L'emblème des bouchons traditionnels de Lyon : frisée fraîche assaisonnée d'une vinaigrette chaude aux échalotes, moutarde de Dijon et déglaçage au vinaigre de vin rouge, surmontée de lardons fumés croustillants, de croûtons aillés et d'un œuf poché dont le jaune coulant enrobe le tout.",
      en: "The crown jewel of Lyon's traditional bouchons: crisp frisée curly endive tossed in a warm shallot and red wine vinegar Dijon dressing with sizzling smoked pork lardons, crunchy garlic croutons, and a warm soft-poached farm egg that creates a rich, velvety emulsion when pierced.",
      te: "లియోన్ సాంప్రదాయ వంటకం: క్రిస్పీ గ్రీన్స్, వేడి బేకన్ ముక్కలు, గార్లిక్ బ్రెడ్ క్రౌటన్స్ మరియు పోచ్డ్ గుడ్డుతో చేసిన సంప్రదాయ సలాడ్.",
      hi: "ल्योन का प्रसिद्ध सलाद: कुरकुरी हरी पत्तियां, गर्म बेकन के टुकड़े, लहसुनी ब्रेड क्रूटॉन और ऊपर से नरम पोच्ड अंडा जो काटने पर मखमली सॉस जैसा बन जाता है।"
    },
    wine: {
      fr: "Beaujolais-Villages ou Coteaux du Lyonnais",
      en: "Beaujolais-Villages",
      te: "బోజోలెస్-విలేజెస్",
      hi: "बोजोले-विलेजेस"
    },
    wineNotes: {
      fr: "Un rouge fruité et gourmand issu du cépage Gamay qui rafraîchit le palais face au gras noble des lardons et au piquant de la moutarde.",
      en: "A fruity, vibrant Beaujolais (Gamay grape) from just north of Lyon balances the rich smoky lardons and sharp Dijon dressing.",
      te: "ఫ్రూటీ బోజోలెస్ రెడ్ వైన్ బేకన్ మరియు డిజోన్ మస్టర్డ్ రుచులను అద్భుతంగా సమతుల్యం చేస్తుంది.",
      hi: "हल्की फलदार बोजोले वाइन बेकन की समृद्धि और मस्टर्ड की तीखी धार को संतुलित करती है।"
    },
    chefTip: {
      fr: "Versez la vinaigrette directement dans la poêle chaude contenant les sucs de lardons avant de napper la salade, et pochez les œufs dans une eau frémissante avec un trait de vinaigre blanc pendant exactement 3 minutes.",
      en: "Toss the greens with the vinaigrette while the rendered bacon drippings are still warm, and poach the eggs with a splash of white vinegar in gentle simmering water for 3 minutes for a perfect molten yolk.",
      te: "బేకన్ వేయించిన వేడి నూనెలోనే డ్రెస్సింగ్ కలిపి సలాడ్‌పై పోయండి. గుడ్డును వినెగార్ కలిపిన నీటిలో 3 నిమిషాలు ఉడికించండి.",
      hi: "सॉस को बेकन के गर्म तेल में मिलाकर सलाद पर डालें और अंडे को हल्के उबलते पानी में 3 मिनट तक पोच करें।"
    },
    ingredients: [
      { fr: "Belle salade frisée lavée et essorée", en: "Crisp frisée curly endive lettuce", te: "తాజా సలాడ్ ఆకులు", hi: "सलाद के ताजे पत्ते" },
      { fr: "Lardons fumés fermiers taillés épais", en: "Thick-cut smoked pork lardons", te: "స్మోక్డ్ బేకన్ ముక్కలు", hi: "स्मोक्ड बेकन के टुकड़े" },
      { fr: "Œufs frais de ferme pour pocher", en: "Fresh farm eggs for poaching", te: "పోచింగ్ కోసం తాజా కోడిగుడ్లు", hi: "पोचिंग के लिए ताजे अंडे" },
      { fr: "Croûtons de pain de campagne aillés", en: "Artisanal garlic bread croutons", te: "గార్లిక్ బ్రెడ్ క్రౌటన్స్", hi: "लहसुनी ब्रेड क्रूटॉन" },
      { fr: "Moutarde forte de Dijon", en: "French Dijon mustard", te: "ఫ్రెంచ్ డిజోన్ ఆవాల పేస్ట్", hi: "डिजोन मस्टर्ड" },
      { fr: "Vinaigre de vin rouge de qualité", en: "Red wine vinegar", te: "రెడ్ వైన్ వెనిగర్", hi: "रेड वाइन सिरका" },
      { fr: "Huile d'olive vierge extra", en: "Extra virgin olive oil", te: "ఆలివ్ ఆయిల్", hi: "जैतून का तेल" },
      { fr: "Échalote française finement ciselée", en: "Finely minced French shallot", te: "సన్నగా తరిగిన ఉల్లిపాయ", hi: "बारीक कटा छोटा प्याज" }
    ],
    steps: [
      {
        title: { fr: "Dorer lardons et croûtons", en: "Crisp Lardons & Croutons", te: "బేకన్, బ్రెడ్ వేయించండి", hi: "बेकन और ब्रेड भूनें" },
        instruction: {
          fr: "Rissoler les lardons dans une poêle. Les réserver puis faire dorer les dés de pain dans la graisse chaude jusqu'à ce qu'ils soient bien croquants.",
          en: "In a skillet, crisp diced bacon lardons until golden brown. Remove with slotted spoon. In the hot bacon drippings, toss bread cubes until golden and crunchy.",
          te: "బాణలిలో బేకన్ వేయించి తీసి, అదే నూనెలో బ్రెడ్ ముక్కలను కరకరలాడేలా వేయించండి.",
          hi: "पैन में बेकन को सुनहरा भूनें। उसी तेल में ब्रेड के टुकड़ों को कुरकुरा होने तक भूनें।"
        }
      },
      {
        title: { fr: "Fouetter la vinaigrette tiède", en: "Whisk Warm Vinaigrette", te: "సాస్ సిద్ధం చేయండి", hi: "सॉस तैयार करें" },
        instruction: {
          fr: "Fouetter échalote, moutarde, vinaigre de vin et huile d'olive avec 2 cuillères de jus de cuisson chaud des lardons.",
          en: "Whisk minced shallot, Dijon mustard, red wine vinegar, olive oil, and 2 tbsp warm bacon pan drippings with a pinch of salt and pepper.",
          te: "ఉల్లిపాయ, మస్టర్డ్, వెనిగర్, ఆలివ్ నూనె మరియు కొద్దిగా వేడి బేకన్ నూనెను కలపండి.",
          hi: "प्याज, मस्टर्ड, सिरका, जैतून का तेल और गर्म बेकन का तेल मिलाकर फेंटें।"
        }
      },
      {
        title: { fr: "Pocher les œufs fermiers", en: "Poach the Farm Eggs", te: "గుడ్లను పోచ్ చేయండి", hi: "अंडे पोच करें" },
        instruction: {
          fr: "Pocher les œufs 3 minutes dans une eau frémissante vinaigrée. Le blanc doit être pris et le jaune parfaitement coulant.",
          en: "Bring a pot of water with 1 tbsp vinegar to a gentle simmer. Swirl water to create a vortex and slide in cracked eggs one by one. Poach gently for 3 minutes until whites are set and yolks are soft.",
          te: "వేడి నీటిలో వెనిగర్ వేసి గుడ్లను 3 నిమిషాలు నెమ్మదిగా ఉడికించండి.",
          hi: "उबलते पानी में थोड़ा सिरका डालकर अंडों को 3 मिनट तक धीमी आंच पर पोच करें।"
        }
      },
      {
        title: { fr: "Dresser et servir tiède", en: "Assemble and Serve Warm", te: "అలంకరించి వడ్డించండి", hi: "सजाएं और गर्म परोसें" },
        instruction: {
          fr: "Mélanger la frisée avec la vinaigrette tiède, parsemer de lardons et croûtons, et couronner de l'œuf poché égoutté.",
          en: "Toss frisée greens with warm dressing, lardons, and croutons. Divide into bowls and top each with a drained poached egg and cracked black pepper.",
          te: "ఆకులను సాస్‌తో కలిపి, బేకన్, బ్రెడ్ ముక్కలు వేసి పైన పోచ్డ్ గుడ్డు ఉంచి వడ్డించండి.",
          hi: "सलाद के पत्तों में सॉस, बेकन और ब्रेड मिलाएं, ऊपर से पोच्ड अंडा रखकर परोसें।"
        }
      }
    ]
  },

  // 10. Bouillabaisse Marseillaise
  "bouillabaisse": {
    title: {
      fr: "Bouillabaisse Marseillaise Traditionnelle",
      en: "Traditional Marseille Seafood Stew",
      te: "బుయాబేస్ (మార్సెయ్ సంప్రదాయ సీఫుడ్ స్టీవ్)",
      hi: "बुयाबेस (पारंपरिक फ्रेंच सीफूड स्टू)"
    },
    subtitle: {
      fr: "Grand bouillon de poissons de roche au safran, fenouil et rouille aillée.",
      en: "Provençal seafood stew with saffron, fennel & fiery rouille.",
      te: "కుంకుమపువ్వు మరియు సోంపుతో కూడిన మధ్యధరా సముద్రపు చేపల వంటకం.",
      hi: "केसर, सौंफ और गार्लिक रुई सॉस के साथ तैयार किया गया क्लासिक सीफूड स्टू।"
    },
    categoryLabel: {
      fr: "Spécialité Maritime de Provence",
      en: "Provençal Maritime Classic",
      te: "ప్రోవెన్సాల్ సీఫుడ్",
      hi: "प्रोवेंस सीफूड"
    },
    description: {
      fr: "L'institution de la cité phocéenne : un riche bouillon de poissons de roche méditerranéens parfumé au safran en pistils, au fenouil sauvage et aux zestes d'orange, servi avec des poissons nobles fondants, des croûtons frottés d'ail et la célèbre rouille provençale pimentée.",
      en: "The pride of Marseille: a fragrant Mediterranean fish and shellfish stew scented with Spanish saffron threads, shaved fennel bulb, sun-dried orange peel, and pastis, served with garlic croutons and spicy piment d'Espelette rouille.",
      te: "మార్సెయ్ నగరపు ప్రసిద్ధ చేపల కూర: కుంకుమపువ్వు, సోంపు, ఆరెంజ్ తొక్కతో ఘుమఘుమలాడే రసంలో తాజా సముద్రపు చేపలను ఉడికిస్తారు.",
      hi: "मार्सेई का प्रसिद्ध समुद्री व्यंजन: केसर, सौंफ और संतरे के छिलके से सुगंधित शोरबे में ताजी समुद्री मछलियां और झींगे पकाए जाते हैं।"
    },
    wine: {
      fr: "Cassis Blanc ou Bandol Rosé",
      en: "Cassis Blanc or Bandol Rosé",
      te: "కాసిస్ వైట్ లేదా బాండోల్ రోస్",
      hi: "कैलिस ब्लैंक या बांडोल रोसे"
    },
    wineNotes: {
      fr: "La fraîcheur iodée et minérale d'un Cassis blanc de Provence fait écho à la puissance du bouillon de roche et à la rouille safranée.",
      en: "A mineral-driven white Cassis from the limestone cliffs of Provence matches the oceanic salinity and saffron fragrance.",
      te: "ప్రోవెన్స్ వైట్ వైన్ సముద్రపు చేపలు మరియు కుంకుమపువ్వు రుచులకు సరిగ్గా సరిపోతుంది.",
      hi: "प्रोवेंस की मिनरल सफेद वाइन समुद्री मछली और केसरिया सॉस के साथ बेहतरीन स्वाद देती है।"
    },
    chefTip: {
      fr: "Laissez bouillir à gros bouillons ('bouillir et baisser') : c'est cette vive ébullition qui émulsionne l'huile d'olive avec le fumet de poisson en un nectar doré et velouté.",
      en: "Boil the broth rapidly (bouillir et baisser) so the olive oil and seafood stock emulsify into a rich, velvety orange broth.",
      te: "రసాన్ని వేగంగా మరిగించండి, దీనివల్ల ఆలివ్ ఆయిల్ మరియు చేపల రసం కలిసి బంగారు రంగులో చిక్కగా మారుతుంది.",
      hi: "सूप को तेज आंच पर उबालें ताकि जैतून का तेल और मछली का सूप मिलकर मखमली सुनहरा गाढ़ा शोरबा बना लें।"
    },
    ingredients: [
      { fr: "Poissons de roche et filets nobles (lotte, rascasse, loup)", en: "Mixed firm white fish", te: "సముద్రపు చేపల ముక్కలు", hi: "सफेद समुद्री मछली के टुकड़े" },
      { fr: "Grosses crevettes et moules fraîches", en: "Fresh prawns and mussels", te: "రొయ్యలు మరియు నత్తలు", hi: "ताजे झींगे (प्रॉन)" },
      { fr: "Bulbe de fenouil finement émincé", en: "Fennel bulb, finely sliced", te: "సోంపు దుంప ముక్కలు", hi: "सौंफ की जड़ (फेनेल)" },
      { fr: "Tomates mûres concassées", en: "Ripe Roma tomatoes, crushed", te: "టమోటా ముక్కలు", hi: "पके टमाटर" },
      { fr: "Pistils de safran pur", en: "Pure saffron threads", te: "స్వచ్ఛమైన కుంకుమపువ్వు", hi: "शुद्ध केसर" },
      { fr: "Vin blanc sec de Provence", en: "Dry white wine", te: "డ్రై వైట్ వైన్", hi: "सफेद वाइन" },
      { fr: "Gousses d'ail frais", en: "Garlic cloves", te: "వెల్లుల్లి రెబ్బలు", hi: "लहसुन" },
      { fr: "Sauce rouille aillée et croûtons de baguette", en: "Rouille sauce and croutons", te: "రౌయిల్లె సాస్ మరియు బ్రెడ్", hi: "रुई सॉस और टोस्टेड ब्रेड" }
    ],
    steps: [
      {
        title: { fr: "Suer les aromates", en: "Sauté Aromatics", te: "కూరగాయలు వేయించండి", hi: "सब्जियां भूनें" },
        instruction: {
          fr: "Faire suer oignons, fenouil, poireaux et ail dans l'huile d'olive. Ajouter tomates, zeste d'orange et vin blanc.",
          en: "Sweat onions, fennel, leeks, and garlic in extra virgin olive oil until tender and fragrant. Add tomatoes, orange peel, and white wine.",
          te: "ఆలివ్ ఆయిల్‌లో ఉల్లిపాయలు, సోంపు, వెల్లుల్లి వేసి వేయించి, టమోటాలు మరియు వైన్ కలపండి.",
          hi: "जैतून के तेल में प्याज, सौंफ और लहसुन भूनें। टमाटर और वाइन मिलाएं।"
        }
      },
      {
        title: { fr: "Émulsionner le bouillon safrané", en: "Simmer Saffron Broth", te: "కుంకుమపువ్వు రసం మరిగించండి", hi: "केसरिया शोरबा उबालें" },
        instruction: {
          fr: "Mouiller au fumet de poisson et parsemer de safran. Porter à gros bouillons pour émulsionner l'huile et le bouillon.",
          en: "Add fish stock and saffron threads. Bring to a rolling boil so the olive oil and broth emulsify into a golden soup.",
          te: "చేపల రసం మరియు కుంకుమపువ్వు వేసి వేగంగా మరిగించండి.",
          hi: "मछली का सूप और केसर डालें। तेज उबाल आने दें ताकि सूप गाढ़ा हो जाए।"
        }
      },
      {
        title: { fr: "Cuire les poissons étagés", en: "Cook Seafood in Stages", te: "చేపలను ఉడికించండి", hi: "मछली को पकाएं" },
        instruction: {
          fr: "Ajouter d'abord les poissons fermes (5 minutes), puis les poissons délicats et les fruits de mer jusqu'à ouverture des coquilles.",
          en: "Add firm fish first, simmer 5 minutes, then add tender fish, prawns, and mussels until shells open.",
          te: "గట్టి చేపలను ముందుగా 5 నిమిషాలు ఉడికించి, తర్వాత రొయ్యలు మరియు నత్తలను వేయండి.",
          hi: "पहले बड़ी मछली डालकर 5 मिनट पकाएं, फिर झींगे डालकर पकाएं।"
        }
      },
      {
        title: { fr: "Servir avec la rouille", en: "Serve with Rouille", te: "సాస్‌తో వడ్డించండి", hi: "रुई सॉस के साथ परोसें" },
        instruction: {
          fr: "Dresser le bouillon bouillant en soupière. Servir les poissons nappés à côté avec des croûtons aillés tartinés de rouille.",
          en: "Ladle hot broth into wide shallow bowls. Serve fish alongside toasted baguette croutons smothered with spicy garlic rouille.",
          te: "వేడి సూప్‌ను గిన్నెల్లో పోసి, పక్కన బ్రెడ్ మరియు గార్లిక్ సాస్‌తో వడ్డించండి.",
          hi: "गर्म शोरबा कटोरों में निकालें और साथ में ब्रेड व लहसुनी रुई सॉस के साथ परोसें।"
        }
      }
    ]
  },

  // 11. Canard à l'Orange
  "canard-orange": {
    title: {
      fr: "Magret de Canard à l'Orange Bigarade",
      en: "Duck Breast à l'Orange",
      te: "కనార్డ్ ఎ ఎల్'ఆరెంజ్ (నారింజ సాస్ లో డక్ బ్రెస్ట్)",
      hi: "कनार्ड अ ल'ऑरेंज (ऑरेंज सॉस वाला बत्तख का व्यंजन)"
    },
    subtitle: {
      fr: "Magret rôti peau croustillante et gastrique d'oranges amères.",
      en: "Pan-roasted duck breast in bittersweet orange glaze.",
      te: "క్రంచీ స్కిన్ డక్ బ్రెస్ట్ మరియు తీపి-పులుపు నారింజ సాస్.",
      hi: "कुरकुरी बत्तख की छाती और खट्टे-मीठे संतरे के सॉस का प्रसिद्ध शाही व्यंजन।"
    },
    categoryLabel: {
      fr: "Haute Cuisine Française",
      en: "French Haute Cuisine",
      te: "రాయల్ ఫ్రెంచ్ వంటకం",
      hi: "शाही व्यंजन"
    },
    description: {
      fr: "Un monument de la haute gastronomie française classique : magret de canard doré à la peau quadrillée croustillante, nappé d'une sauce gastrique aux oranges bigarades, vinaigre de vin vieux, fond brun réduit et touche de Grand Marnier.",
      en: "A triumph of French classical haute cuisine: pan-roasted duck breast with crackling scored skin, finished with a classic gastrique of caramelized sugar, red wine vinegar, fresh Seville orange juice, and Grand Marnier.",
      te: "ఫ్రెంచ్ రాయల్ వంటకం: కరకరలాడే చర్మంతో వేయించిన డక్ బ్రెస్ట్, తీపి మరియు పులుపు కలిసిన నారింజ సాస్ మరియు లిక్కర్‌తో వడ్డించబడుతుంది.",
      hi: "शाही फ्रेंच व्यंजन: कुरकुरी त्वचा वाली बत्तख की छाती, जिसे कैरेमेलाइज्ड चीनी, संतरे के रस और लिकर के खट्टे-मीठे सॉस के साथ परोसा जाता है।"
    },
    wine: {
      fr: "Pinot Noir de Bourgogne ou Pomerol",
      en: "Pinot Noir de Bourgogne",
      te: "పినోట్ నోయిర్ డి బర్గండీ",
      hi: "पिनोट नोइर डी बरगंडी"
    },
    wineNotes: {
      fr: "Un Pinot Noir soyeux aux arômes de cerise noire qui dialogue merveilleusement avec l'acidité suave de l'orange sans écraser le canard.",
      en: "Silky, red-fruited Pinot Noir mirrors the acidity of citrus without clashing with the savory duck.",
      te: "సిల్కీ పినోట్ నోయిర్ రెడ్ వైన్ నారింజ పులుపు మరియు మాంసం రుచిని అద్భుతంగా మెరుగుపరుస్తుంది.",
      hi: "सिल्की पिनोट नोइर वाइन संतरे के खट्टेपन और बत्तख के मांस के स्वाद को संतुलित करती है।"
    },
    chefTip: {
      fr: "Quadrillez uniquement la peau sans entamer la chair, et démarrez la cuisson dans une poêle froide à feu très doux pour faire fondre le gras en douceur et obtenir une peau fine et ultra-craquante.",
      en: "Score only the duck skin in a diamond lattice without cutting into the meat, and begin rendering skin-side down in a cold skillet on low heat.",
      te: "చర్మంపై మాత్రమే డైమండ్ ఆకారంలో గాట్లు పెట్టండి, చల్లని పాన్‌పై తక్కువ మంటతో కాల్చడం ప్రారంభించండి.",
      hi: "त्वचा पर डायमंड कट लगाएं और ठंडे पैन में धीमी आंच पर पकाना शुरू करें ताकि वह बेहद कुरकुरी बने।"
    },
    ingredients: [
      { fr: "Magrets de canard fermier du Sud-Ouest", en: "Magret duck breast fillets", te: "డక్ బ్రెస్ట్ ఫిల్లెట్లు", hi: "बत्तख का सीना (डक ब्रेस्ट)" },
      { fr: "Oranges fraîches (jus pressé et zestes)", en: "Fresh oranges (juice & zest)", te: "తాజా నారింజ పండ్లు", hi: "ताजे संतरे (रस और छिलका)" },
      { fr: "Sucre semoule pour la gastrique", en: "Granulated sugar", te: "పంచదార", hi: "चीनी" },
      { fr: "Vinaigre de vin rouge vieux", en: "Red wine vinegar", te: "రెడ్ వైన్ వెనిగర్", hi: "रेड वाइन सिरका" },
      { fr: "Fond de veau ou demi-glace de canard", en: "Rich duck or veal demi-glace", te: "డెమీ-గ్లేస్ సూప్ రసం", hi: "गाढ़ा मीट स्टॉक (डेमी-ग्लेस)" },
      { fr: "Liqueur Grand Marnier", en: "Grand Marnier liqueur", te: "గ్రాండ్ మార్నియర్ లిక్కర్", hi: "ग्रैंड मार्नियर लिकर" },
      { fr: "Beurre froid en dés pour monter la sauce", en: "Cold butter cubes", te: "చల్లని వెన్న ముక్కలు", hi: "ठंडा मक्खन" }
    ],
    steps: [
      {
        title: { fr: "Fondre le gras de canard", en: "Render Duck Skin", te: "చర్మం వేయించండి", hi: "त्वचा को कुरकुरा भूनें" },
        instruction: {
          fr: "Démarrer la cuisson des magrets côté peau dans une poêle froide à feu doux pendant 10 à 12 minutes pour rendre le gras et dorer la peau.",
          en: "Place duck skin-down in a cold skillet over low-medium heat. Render fat slowly for 10-12 minutes until shatteringly crisp.",
          te: "చల్లని పాన్‌లో తక్కువ మంటపై 10-12 నిమిషాలు చర్మం కరకరలాడేవరకు వేయించండి.",
          hi: "ठंडे पैन में त्वचा की तरफ से 10-12 मिनट तक धीमी आंच पर भूनें जब तक कि वह कुरकुरी न हो जाए।"
        }
      },
      {
        title: { fr: "Saisir la chair et reposer", en: "Sear Meat and Rest", te: "తిప్పి కాల్చి విశ్రాంతి ఇవ్వండి", hi: "पलटें और आराम दें" },
        instruction: {
          fr: "Retourner et cuire côté chair 3 à 4 minutes (cuisson rosée). Débarrasser sur une assiette chaude et laisser reposer 6 minutes.",
          en: "Flip duck and cook meat side for 3-4 minutes until medium-rare. Transfer to warm plate and rest 6 minutes.",
          te: "తిప్పి మరో 4 నిమిషాలు కాల్చి, ప్లేట్‌లో తీసి 6 నిమిషాలు విశ్రాంతి ఇవ్వండి.",
          hi: "पलटकर 3-4 मिनट तक पकाएं। प्लेट में निकालकर 6 मिनट आराम करने दें।"
        }
      },
      {
        title: { fr: "Réduire la gastrique à l'orange", en: "Create Orange Gastrique", te: "నారింజ సాస్ తయారుచేయండి", hi: "ऑरेंज सॉस तैयार करें" },
        instruction: {
          fr: "Caraméliser le sucre avec le vinaigre. Déglacer au jus d'orange, fond de veau et Grand Marnier. Réduire en sirop sirupeux.",
          en: "In saucepan, caramelize sugar with vinegar until deep amber. Deglaze with orange juice, demi-glace, and liqueur. Reduce to syrupy glaze.",
          te: "చక్కెర, వెనిగర్ కరిగించి, నారింజ రసం, సూప్ మరియు లిక్కర్ వేసి చిక్కబడేవరకు మరిగించండి.",
          hi: "चीनी और सिरका कैरेमेलाइज करें, फिर संतरे का रस और लिकर डालकर गाढ़ा सॉस बनाएं।"
        }
      },
      {
        title: { fr: "Monter au beurre et dresser", en: "Slice and Glaze", te: "కోసి సాస్‌తో వడ్డించండి", hi: "काटें और सॉस डालकर परोसें" },
        instruction: {
          fr: "Monter la sauce hors du feu avec le beurre froid pour la rendre brillante. Trancher les magrets en biais et napper de sauce.",
          en: "Whisk cold butter cubes into hot sauce off heat for a mirror shine. Slice duck breast diagonally and fan over warm sauce with candied orange zest.",
          te: "సాస్‌లో చల్లని వెన్న కలిపి, డక్ బ్రెస్ట్‌ను ముక్కలుగా కోసి సాస్ పోసి వడ్డించండి.",
          hi: "सॉस में ठंडा मक्खन मिलाएं, बत्तख के स्लाइस काटें और ऊपर से गर्म सॉस डालकर परोसें।"
        }
      }
    ]
  },

  // 12. Tarte Tatin
  "tarte-tatin": {
    title: {
      fr: "Tarte Tatin aux Pommes Caramélisées",
      en: "Caramelized Tarte Tatin",
      te: "టార్ట్ టాటిన్ (కారమెలైజ్డ్ యాపిల్ టార్ట్)",
      hi: "टार्ट टैटिन (उल्टा कैरमेलाइज्ड सेब का टार्ट)"
    },
    subtitle: {
      fr: "Pommes fondantes confites au beurre et caramel sous pâte feuilletée dorée.",
      en: "Caramelized apples baked under flaky puff pastry.",
      te: "వెన్న, చక్కెరలో కారమెలైజ్ చేసిన యాపిల్స్‌తో చేసిన సంప్రదాయ ఫ్రెంచ్ డెజర్ట్.",
      hi: "कैरमेल में पके सेब और परतदार पेस्ट्री से बना प्रसिद्ध फ्रेंच उल्टा टार्ट।"
    },
    categoryLabel: {
      fr: "Pâtisserie de Terroir",
      en: "Terroir Patisserie",
      te: "సంప్రదాయ పేస్ట్రీ",
      hi: "पारंपरिक पेस्ट्री"
    },
    description: {
      fr: "Créée par les demoiselles Tatin en Sologne : quartiers de pommes acidulées cuits lentement dans du beurre demi-sel et du sucre caramélisé ambré, recouverts d'un disque de pâte feuilletée croustillante et renversés encore chauds sur plat de service.",
      en: "Invented accidentally by the Tatin sisters in Sologne: crisp Normandy apples slow-cooked in rich butter and caramelized sugar until mahogany dark, blanketed with puff pastry and inverted onto a platter while warm.",
      te: "సోలోన్ ప్రాంతపు టాటిన్ సోదరీమణులు కనిపెట్టిన ప్రసిద్ధ డెజర్ట్: వెన్న, చక్కెరలో ఉడికించిన యాపిల్స్ పైన పేస్ట్రీ వేసి బేక్ చేసి తిరగవేస్తారు.",
      hi: "फ्रांस का मशहूर उल्टा सेब का टार्ट: सेब को मक्खन और कैरेमेल में पकाकर ऊपर से पफ पेस्ट्री रखकर बेक किया जाता है, फिर गरमा-गर्म पलटा जाता है।"
    },
    wine: {
      fr: "Calvados Fermier ou Coteaux du Layon",
      en: "Calvados or Coteaux du Layon",
      te: "కాల్వాడోస్ లేదా కోటోక్స్ డు లేయాన్",
      hi: "काल्वाडो या कोटॉक्स डू लेयोन"
    },
    wineNotes: {
      fr: "Une eau-de-vie de pomme de Normandie (Calvados) vieillie en fût de chêne ou un Chenin blanc liquoreux sublime les arômes de pomme rôtie au caramel.",
      en: "An aged Normandy apple brandy (Calvados) or an unctuous Chenin Blanc from the Loire Valley complements the rich caramelized fruit.",
      te: "పాత నార్మాండీ ఆపిల్ బ్రాందీ లేదా తీపి వైన్ కారమెల్ యాపిల్స్ రుచికి అద్భుతంగా సరిపోతుంది.",
      hi: "पुरानी नॉर्मैंडी एप्पल ब्रांडी (काल्वाडो) कैरेमलाइज्ड सेब के स्वाद को और बढ़ा देती है।"
    },
    chefTip: {
      fr: "Serrez les quartiers de pommes au maximum à la verticale dans la poêle : elles réduisent de près d'un tiers de leur volume en confisant dans le beurre caramel.",
      en: "Cook the apples tightly packed in the skillet; they shrink significantly as their pectin breaks down and natural juices concentrate.",
      te: "యాపిల్ ముక్కలను పాన్‌లో నిలువుగా చాలా దగ్గరగా పేర్చండి, ఎందుకంటే అవి ఉడికేటప్పుడు పరిమాణంలో తగ్గుతాయి.",
      hi: "पैन में सेब के टुकड़ों को बिल्कुल सटाकर खड़ा रखें, क्योंकि पकने पर वे सिकुड़ जाते हैं।"
    },
    ingredients: [
      { fr: "Belles pommes à cuire fermes (Reinette ou Gala)", en: "Crisp baking apples, peeled & halved", te: "తాజా యాపిల్స్ (తొక్క తీసి సగానికి కోసినవి)", hi: "कड़क पकाने वाले सेब (छिले और आधे कटे)" },
      { fr: "Beurre doux de Normandie", en: "French unsalted butter", te: "అన్‌సాల్టెడ్ వెన్న", hi: "मक्खन" },
      { fr: "Sucre blond de canne", en: "Cane sugar", te: "పంచదార", hi: "चीनी" },
      { fr: "Disque de pâte feuilletée pur beurre", en: "Puff pastry sheet", te: "పఫ్ పేస్ట్రీ షీట్", hi: "पफ पेस्ट्री शीट" },
      { fr: "Crème fraîche épaisse pour accompagner", en: "Crème fraîche for serving", te: "వడ్డించడానికి తాజా క్రీమ్", hi: "परोसने के लिए ताजी मलाई" }
    ],
    steps: [
      {
        title: { fr: "Caraméliser beurre et sucre", en: "Caramelize Butter and Sugar", te: "వెన్న, చక్కెర కరిగించండి", hi: "मक्खन और चीनी कैरेमेलाइज करें" },
        instruction: {
          fr: "Dans un moule à tatin en fonte, fondre le beurre et le sucre jusqu'à obtention d'un caramel blond ambré.",
          en: "In an oven-safe cast iron skillet, melt butter and sugar over medium heat until a golden amber caramel forms.",
          te: "బాణలిలో వెన్న మరియు చక్కెర వేసి బంగారు రంగు కారమెల్ వచ్చేవరకు వేడి చేయండి.",
          hi: "पैन में मक्खन और चीनी को सुनहरा कैरेमेल बनने तक पिघलाएं।"
        }
      },
      {
        title: { fr: "Dresser les pommes serrées", en: "Pack Apples Vertically", te: "యాపిల్స్ పేర్చండి", hi: "सेब के टुकड़े सजाएं" },
        instruction: {
          fr: "Disposer les demi-pommes debout très serrées en cercles concentriques. Cuire 15 minutes sur le feu jusqu'à ce qu'elles s'imprègnent de caramel.",
          en: "Remove from heat and arrange apple halves vertically and tightly in concentric rings. Cook on stove for 15 minutes until tender.",
          te: "యాపిల్ ముక్కలను నిలువుగా దగ్గరగా పేర్చి, స్టవ్ పైన 15 నిమిషాలు ఉడికించండి.",
          hi: "सेब के टुकड़ों को खड़ा और सटाकर गोल सजाएं। 15 मिनट तक पकाएं जब तक वे नरम न हो जाएं।"
        }
      },
      {
        title: { fr: "Couvrir de pâte et enfourner", en: "Top with Pastry and Bake", te: "పేస్ట్రీ పెట్టి బేక్ చేయండి", hi: "पेस्ट्री रखकर बेक करें" },
        instruction: {
          fr: "Recouvrir de la pâte feuilletée en rentrant les bords à l'intérieur. Cuire à 190°C pendant 30 minutes jusqu'à beau feuilletage doré.",
          en: "Tuck puff pastry over the apples, folding edges down into the pan. Bake at 190°C (375°F) for 30 minutes until puffed and golden brown.",
          te: "యాపిల్స్ పైన పేస్ట్రీ పెట్టి, అంచులను లోపలికి మడిచి 190°C వద్ద 30 నిమిషాలు బేక్ చేయండి.",
          hi: "सेब के ऊपर पेस्ट्री लगाएं और किनारों को अंदर मोड़ें। 190°C पर 30 मिनट तक सुनहरा होने तक बेक करें।"
        }
      },
      {
        title: { fr: "Renverser tiède", en: "Invert Warm", te: "తిరగవేయండి", hi: "उल्टा पलटें" },
        instruction: {
          fr: "Laisser tiédir 5 minutes, poser le plat de service sur le moule et retourner d'un geste sec et décidé. Servir tiède avec de la crème.",
          en: "Let rest 5 minutes, then place a serving platter over pan and invert with one swift, confident motion. Serve warm with crème fraîche.",
          te: "5 నిమిషాలు చల్లబరిచి, ప్లేట్ పైకి తిరగేయండి. క్రీమ్‌తో కలిపి వేడిగా వడ్డించండి.",
          hi: "5 मिनट आराम दें, प्लेट ऊपर रखें और झटके से पलटें। मलाई के साथ गरमा-गर्म परोसें।"
        }
      }
    ]
  },

  // 13. Soufflé au Chocolat
  "souffle-chocolat": {
    title: {
      fr: "Soufflé au Chocolat Noir Valrhona",
      en: "Dark Chocolate Soufflé",
      te: "చాక్లెట్ సౌఫ్లే (తేలికపాటి ఫ్రెంచ్ డార్క్ చాక్లెట్ కేక్)",
      hi: "चॉकलेट सूफ्ले (हल्का और फूला हुआ डार्क चॉकलेट डेसर्ट)"
    },
    subtitle: {
      fr: "Nuage aérien au grand chocolat noir et cœur coulant chaud.",
      en: "Puffed airy chocolate soufflé with a warm molten core.",
      te: "గాలిలా తేలికగా పొంగిన ఫ్రెంచ్ డార్క్ చాక్లెట్ డెజర్ట్.",
      hi: "अंदर से गर्म और पिघली हुई चॉकलेट वाला बेहद हल्का और फूला हुआ सूफ्ले।"
    },
    categoryLabel: {
      fr: "Pâtisserie Haute Gastronomie",
      en: "Fine Dining Patisserie",
      te: "లగ్జరీ పేస్ట్రీ",
      hi: "शाही पेस्ट्री"
    },
    description: {
      fr: "Le sommet de la pâtisserie de restaurant : soufflé spectaculaire au chocolat noir 70% montant fièrement au-dessus du ramequin, avec une texture aérienne comme une plume et un cœur chocolaté chaud et intensément gourmand.",
      en: "The pinnacle of French restaurant patisserie: cloud-like, dramatic dark chocolate soufflé rising majestically above the ramekin rim, with an airy exterior and an intensely decadent molten chocolate center.",
      te: "ఫ్రెంచ్ రెస్టారెంట్ డెజర్ట్లలో అగ్రశ్రేణి వంటకం: గిన్నె అంచుపైకి పొంగే తేలికపాటి డార్క్ చాక్లెట్ కేక్, లోపల కరిగిన చాక్లెట్ ఉంటుంది.",
      hi: "फ्रेंच रेस्तरां पेस्ट्री का शिखर: कटोरे से ऊपर उठा हुआ बादलों जैसा हल्का डार्क चॉकलेट सूफ्ले, जिसके अंदर गर्म पिघली हुई चॉकलेट होती है।"
    },
    wine: {
      fr: "Banyuls Grand Cru ou Maury",
      en: "Banyuls or Maury Grand Cru",
      te: "బాన్యుల్స్ లేదా మౌరీ",
      hi: "बान्युल्स या मौरी"
    },
    wineNotes: {
      fr: "Ce vin doux naturel du Roussillon aux notes de cacao torréfié et de fruits macérés s'accorde à la perfection avec la puissance du chocolat noir 70%.",
      en: "A fortified Grenache-based Banyuls from the Pyrenees mirrors the bittersweet roasted cacao notes of dark chocolate.",
      te: "తీపి రెడ్ వైన్ డార్క్ చాక్లెట్ చేదు-తీపి రుచికి సంపూర్ణంగా సరిపోతుంది.",
      hi: "मीठी बान्युल्स वाइन 70% डार्क चॉकलेट के समृद्ध स्वाद के साथ बहुत अच्छी लगती है।"
    },
    chefTip: {
      fr: "Beurrez vos ramequins au pinceau exclusivement de bas en haut, chemisez de sucre cristal et passez votre pouce sur le rebord intérieur avant d'enfourner pour garantir une levée parfaitement verticale.",
      en: "Brush ramekins with soft butter using strictly upward strokes, coat with granulated sugar, and run your thumb around the inner rim before baking to guide an even vertical rise.",
      te: "గిన్నెలకు వెన్న రాసేటప్పుడు కింద నుండి పైకి మాత్రమే రాయండి, అంచుల వద్ద వేలితో తుడవండి, ఇది నిలువుగా పొంగడానికి సహాయపడుతుంది.",
      hi: "कटोरों में मक्खन नीचे से ऊपर की ओर लगाएं, चीनी लगाएं और किनारे पर अंगूठा घुमाएं ताकि वह सीधा ऊपर फूले।"
    },
    ingredients: [
      { fr: "Chocolat noir de dégustation 70% Valrhona", en: "French dark chocolate 70%", te: "డార్క్ చాక్లెట్ 70%", hi: "डार्क चॉकलेट 70%" },
      { fr: "Œufs frais clarifiés (blancs et jaunes)", en: "Fresh large eggs, separated", te: "తాజా కోడిగుడ్లు (తెల్లసొన, పచ్చసొన విడదీసినవి)", hi: "अंडे (सफेदी और जर्दी अलग)" },
      { fr: "Lait entier", en: "Whole milk", te: "చిక్కటి పాలు", hi: "दूध" },
      { fr: "Sucre semoule fin", en: "Granulated sugar", te: "పంచదార", hi: "चीनी" },
      { fr: "Beurre doux pour les ramequins", en: "Unsalted butter for ramekins", te: "గిన్నెల కోసం వెన్న", hi: "मक्खन" },
      { fr: "Sucre glace pour saupoudrer", en: "Powdered sugar for dusting", te: "చల్లడానికి ఐసింగ్ షుగర్", hi: "पिसी चीनी" }
    ],
    steps: [
      {
        title: { fr: "Préparer les ramequins", en: "Prepare Ramekins", te: "గిన్నెలు సిద్ధం చేయండి", hi: "कटोरे तैयार करें" },
        instruction: {
          fr: "Beurrer 4 ramequins au pinceau du bas vers le haut. Chemiser de sucre semoule en tapotant l'excédent.",
          en: "Brush 4 ramekins with softened butter using vertical upward brushstrokes. Coat evenly with granulated sugar, tapping out excess.",
          te: "గిన్నెలకు వెన్న కింద నుండి పైకి రాసి, పంచదార చల్లండి.",
          hi: "कटोरों में मक्खन नीचे से ऊपर लगाएं और चीनी की परत चढ़ाएं।"
        }
      },
      {
        title: { fr: "Fondre la crème de chocolat", en: "Melt Chocolate Crème", te: "చాక్లెట్ కరిగించండి", hi: "चॉकलेट पिघलाएं" },
        instruction: {
          fr: "Fondre le chocolat dans le lait tiède à feu doux. Hors du feu, incorporer les jaunes d'œufs un à un en fouettant.",
          en: "Melt chocolate in warm milk over low heat until glossy and smooth. Whisk in egg yolks one by one off the heat.",
          te: "పాలలో చాక్లెట్ కరిగించి, పక్కన పెట్టి గుడ్డు పచ్చసొనలు కలపండి.",
          hi: "दूध में चॉकलेट धीमी आंच पर पिघलाएं, फिर आंच से उतारकर अंडे की जर्दी मिलाएं।"
        }
      },
      {
        title: { fr: "Monter la meringue française", en: "Whip French Meringue", te: "మెరింగ్ సిద్ధం చేయండి", hi: "सफेदी फेंटें" },
        instruction: {
          fr: "Monter les blancs en neige, serrer avec le sucre. Incorporer 1/3 au chocolat vivement, puis le reste très délicatement à la spatule.",
          en: "Whip egg whites to soft peaks, gradually add sugar until stiff and glossy. Fold 1/3 into chocolate, then gently fold remaining whites without deflating.",
          te: "గుడ్డు తెల్లసొనలో చక్కెర వేసి గట్టిగా వచ్చేవరకు బీట్ చేయండి, చాక్లెట్ మిశ్రమంలో కలపండి.",
          hi: "अंडे की सफेदी को चीनी के साथ फेंटें, फिर चॉकलेट में धीरे-धीरे मिलाएं।"
        }
      },
      {
        title: { fr: "Cuire sans ouvrir le four", en: "Bake and Rise", te: "ఓవెన్ లో కాల్చండి", hi: "बेक करें" },
        instruction: {
          fr: "Remplir à ras bord et lisser à la spatule. Cuire à 190°C pendant 12 à 14 minutes sans ouvrir la porte. Saupoudrer de sucre glace et servir sur le champ.",
          en: "Fill ramekins to the brim and smooth with palette knife. Bake at 190°C (375°F) for 12-14 minutes without opening the oven door. Dust with powdered sugar and serve immediately.",
          te: "గిన్నెల నిండా పోసి 190°C వద్ద 12-14 నిమిషాలు ఓవెన్ తీయకుండా బేక్ చేయండి. వెంటనే వడ్డించండి.",
          hi: "कटोरों में ऊपर तक भरें और 190°C पर बिना ओवन खोले 12-14 मिनट तक बेक करें। तुरंत परोसें।"
        }
      }
    ]
  },

  // 14. Cassoulet de Castelnaudary
  "cassoulet": {
    title: {
      fr: "Cassoulet de Castelnaudary",
      en: "Slow-Cooked Duck & Bean Cassoulet",
      te: "కాసౌలెట్ (ఫ్రెంచ్ వైట్ బీన్స్ మరియు డక్ స్టీవ్)",
      hi: "कैसौलेट (सफेद सेम और बत्तख का पारंपरिक फ्रेंच स्टू)"
    },
    subtitle: {
      fr: "Mijoté généreux du Sud-Ouest aux haricots blancs, confit de canard et saucisse de Toulouse.",
      en: "Rich slow-baked white bean and duck confit stew.",
      te: "డక్ కాన్ఫిట్ మరియు వైట్ బీన్స్‌తో నెమ్మదిగా ఉడికించిన సంప్రదాయ ఫ్రెంచ్ స్టీవ్.",
      hi: "बतख और सफेद सेम से बना फ्रांस का प्रसिद्ध और स्वादिष्ट स्लो-कुक्ड स्टू।"
    },
    categoryLabel: {
      fr: "Classique du Sud-Ouest",
      en: "South-West Classic",
      te: "నైరుతి ఫ్రాన్స్ క్లాసిక్",
      hi: "दक्षिण-पश्चिम का क्लासिक"
    },
    description: {
      fr: "La gloire du Sud-Ouest : haricots blancs lingots fondants lentement cuits dans une cassole en terre cuite avec cuisses de canard confites, saucisse de Toulouse dorée, poitrine de porc et ail doux, dont on brise la croûte dorée à plusieurs reprises pendant la cuisson.",
      en: "The pride of southwest France: creamy Tarbais white beans slow-baked in an earthenware cassole with tender duck confit, Toulouse sausages, pork belly, and a golden breadcrumb crust broken seven times during cooking.",
      te: "దక్షిణ-పశ్చిమ ఫ్రాన్స్ యొక్క ప్రత్యేక వంటకం: తెల్లటి బీన్స్, డక్ కాన్ఫిట్, ఫ్రెంచ్ సాసేజ్‌లను మట్టి పాత్రలో నెమ్మదిగా ఉడికిస్తారు.",
      hi: "दक्षिण-पश्चिम फ्रांस का गौरव: मिट्टी के बर्तन में पकी सफेद सेम, बत्तख, टूलूज़ सॉसेज और पोर्क, जिसे ओवन में कई घंटों तक धीमी आंच पर पकाया जाता है।"
    },
    wine: {
      fr: "Madiran ou Cahors (Malbec)",
      en: "Madiran or Cahors",
      te: "మదిరన్ లేదా కాహోర్స్",
      hi: "मादिरन या काहोर्स"
    },
    wineNotes: {
      fr: "Un rouge puissant et structuré du Sud-Ouest dont les tanins robustes tranchent sans peine la générosité du canard confit.",
      en: "A bold, structured Southwest red wine with robust tannins that effortlessly cuts through the sumptuous richness of duck confit and pork.",
      te: "బోల్డ్ రెడ్ వైన్ మాంసం మరియు బీన్స్ రుచిని సమతుల్యం చేస్తుంది.",
      hi: "गाढ़ी रेड वाइन बत्तख और सेम के भारीपन को बहुत अच्छी तरह काटती है।"
    },
    chefTip: {
      fr: "Enfoncez délicatement la croûte dorée qui se forme à la surface à l'aide d'une cuillère en bois 5 à 7 fois pendant la cuisson pour confire la sauce au cœur des haricots.",
      en: "Gently break the golden crust that forms on top of the stew with the back of a wooden spoon 5 to 7 times while baking to infuse moisture and deep flavor into the beans.",
      te: "ఉడికేటప్పుడు పైన ఏర్పడే పొరను చెక్క గరిటెతో 5-7 సార్లు సున్నితంగా నొక్కండి, ఇది లోపలికి రుచిని నింపుతుంది.",
      hi: "बेक करते समय ऊपर बनने वाली सुनहरी पपड़ी को लकड़ी की चम्मच से 5-7 बार दबाएं ताकि सेम में गहरा स्वाद आए।"
    },
    ingredients: [
      { fr: "Haricots blancs lingots de Castelnaudary", en: "Dried Tarbais or Great Northern white beans", te: "తెల్లటి బీన్స్", hi: "सफेद सेम (बीन्स)" },
      { fr: "Cuisses de canard confites", en: "Duck confit legs", te: "డక్ కాన్ఫిట్ కాళ్ళు", hi: "डक कॉन्फिट लेग्स" },
      { fr: "Véritables saucisses de Toulouse", en: "Authentic French Toulouse sausages", te: "ఫ్రెంచ్ సాసేజ్‌లు", hi: "टूलूज़ सॉसेज" },
      { fr: "Poitrine de porc fermière en dés", en: "Pork belly or bacon, cubed", te: "పోర్క్ బెల్లీ ముక్కలు", hi: "पोर्क बेली" },
      { fr: "Bouillon de volaille corsé", en: "Rich duck or chicken broth", te: "చికెన్ లేదా డక్ సూప్ రసం", hi: "चिकन या डक ब्रोथ" },
      { fr: "Gousses d'ail rose écrasées", en: "Garlic cloves, crushed", te: "వెల్లుల్లి రెబ్బలు", hi: "लहसुन" },
      { fr: "Concentré de tomate de Provence", en: "Tomato paste", te: "టమోటా పేస్ట్", hi: "टमाटर पेस्ट" },
      { fr: "Thym frais et feuilles de laurier", en: "Fresh thyme and bay leaves", te: "థైమ్ మరియు బిర్యానీ ఆకులు", hi: "ताजा थाइम और तेजपत्ता" }
    ],
    steps: [
      {
        title: { fr: "Cuire les haricots blancs", en: "Soak and Simmer Beans", te: "బీన్స్ నానబెట్టి ఉడికించండి", hi: "सेम भिगोएं और उबालें" },
        instruction: {
          fr: "Faire tremper les haricots la veille. Égoutter et blanchir 45 minutes avec ail et bouquet garni jusqu'à tendreté.",
          en: "Soak white beans overnight in water. Drain and simmer with garlic and herbs for 45 minutes until tender.",
          te: "బీన్స్‌ను రాత్రంతా నానబెట్టి, వెల్లుల్లి మరియు మూలికలతో 45 నిమిషాలు ఉడికించండి.",
          hi: "सेम को रातभर भिगोएं। लहसुन और जड़ी-बूटियों के साथ 45 मिनट तक उबालें।"
        }
      },
      {
        title: { fr: "Dorer les viandes", en: "Brown Meats", te: "మాంసాన్ని వేయించండి", hi: "मीट को भूनें" },
        instruction: {
          fr: "Rissoler les saucisses et la poitrine dans la graisse de canard. Colorer légèrement les cuisses confites.",
          en: "In a heavy skillet, brown Toulouse sausages and pork belly in duck fat. Sear duck confit legs lightly.",
          te: "సాసేజ్‌లు మరియు మాంసాన్ని బాణలిలో వేయించండి.",
          hi: "पैन में सॉसेज और मीट को सुनहरा भूनें।"
        }
      },
      {
        title: { fr: "Monter la cassole et mijoter", en: "Layer Cassole and Bake", te: "మట్టి పాత్రలో పేర్చి బేక్ చేయండి", hi: "बर्तन में सजाकर बेक करें" },
        instruction: {
          fr: "Disposer haricots et viandes en couches alternées dans une terrine. Mouiller au bouillon chaud et cuire à 150°C pendant 3 heures en cassant la croûte.",
          en: "Layer beans and meats in an earthenware dish. Pour warm stock over. Bake at 150°C (300°F) for 2.5 to 3 hours, breaking the crust 5 times.",
          te: "బీన్స్ మరియు మాంసాన్ని పొరలుగా పేర్చి, సూప్ పోసి 150°C వద్ద 3 గంటలు బేక్ చేయండి.",
          hi: "सेम और मीट को बर्तन में परतदार सजाएं, सूप डालें और 150°C पर 3 घंटे तक बेक करें।"
        }
      }
    ]
  },

  // 15. Macarons Parisiens
  "macarons": {
    title: {
      fr: "Macarons Parisiens au Chocolat Noir",
      en: "Parisian Almond Macarons",
      te: "ఫ్రెంచ్ మకరాన్స్ (బాదం మరియు చాక్లెట్ గనాచే కుకీలు)",
      hi: "फ्रेंच मैकरॉन (बादाम और गनाचे कुकीज)"
    },
    subtitle: {
      fr: "Coques d'amande croustillantes et cœur moelleux garni de ganache veloutée.",
      en: "Delicate almond meringue shells with velvety ganache.",
      te: "సున్నితమైన బాదం మెరింగ్ షెల్స్ మరియు వెల్వెట్ చాక్లెట్ గనాచే.",
      hi: "कुरकुरी बादाम परत और मखमली चॉकलेट गनाचे वाली क्लासिक पेस्ट्री।"
    },
    categoryLabel: {
      fr: "Pâtisserie Parisienne",
      en: "Parisian Patisserie",
      te: "పారిసియన్ పేస్ట్రీ",
      hi: "पेरिसियन पेस्ट्री"
    },
    description: {
      fr: "L'icône des salons de thé parisiens : coques lisses et brillantes à base de poudre d'amande et de meringue française avec collerette dentelée, assemblées deux à deux avec une ganache onctueuse au chocolat noir pur cacao.",
      en: "Iconic Parisian confection: crisp, glossy almond meringue shells with a delicate ruffled foot and a melt-in-the-mouth center, sandwiched together with rich dark chocolate Valrhona ganache or fruit purée.",
      te: "పారిస్ సంప్రదాయ ప్రసిద్ధ మిఠాయి: బాదం పిండితో చేసిన కరకరలాడే షెల్స్ మధ్య చాక్లెట్ గనాచే ఉంచి తయారుచేస్తారు.",
      hi: "पेरिस की प्रसिद्ध मिठाई: बादाम के आटे और फेंटे हुए अंडे से बनी कुरकुरी परत, जिसके बीच में गाढ़ी डार्क चॉकलेट गनाचे भरी होती है।"
    },
    wine: {
      fr: "Champagne Rosé Brut ou Thé Noir Bergamote",
      en: "Champagne Rosé Brut",
      te: "షాంపేన్ రోస్ లేదా బ్లాక్ టీ",
      hi: "शैम्पेन रोसे या ब्लैक टी"
    },
    wineNotes: {
      fr: "Les bulles délicates d'un Champagne rosé soulignent la douceur de l'amande sans saturer le palais.",
      en: "The delicate red berry notes and gentle mousse of rosé Champagne complement the sweet nuttiness of almond macarons.",
      te: "రోస్ షాంపేన్ బాదం మరియు చాక్లెట్ తీపికి అద్భుతంగా సరిపోతుంది.",
      hi: "रोसे शैम्पेन बादाम के स्वाद और चॉकलेट के साथ बेहतरीन तालमेल बनाती है।"
    },
    chefTip: {
      fr: "Laissez croûter les coques pochées à l'air libre pendant 30 minutes jusqu'à ce qu'elles ne collent plus au doigt avant d'enfourner : c'est le secret absolu pour obtenir la célèbre collerette dentelée.",
      en: "Age your egg whites for 24 hours at room temperature, and let the piped shells rest for 30 minutes until a dry skin forms on top before baking. This guarantees the signature ruffled 'pied' (feet).",
      te: "బేక్ చేయడానికి ముందు వాటిని 30 నిమిషాలు ఆరనివ్వండి, దీనివల్ల కింద అందమైన రిఫుల్డ్ అంచు ఏర్పడుతుంది.",
      hi: "बेक करने से पहले 30 मिनट तक सूखने दें ताकि छूने पर चिपके नहीं, इससे सुंदर किनारे बनते हैं।"
    },
    ingredients: [
      { fr: "Poudre d'amandes blanche extra-fine", en: "Extra-fine almond flour", te: "సన్నని బాదం పిండి", hi: "बारीक बादाम का आटा" },
      { fr: "Sucre glace tamisé", en: "Powdered sugar", te: "ఐసింగ్ షుగర్", hi: "पिसी हुई चीनी" },
      { fr: "Blancs d'œufs vieillis à température ambiante", en: "Aged egg whites", te: "గుడ్డు తెల్లసొన", hi: "अंडे की सफेदी" },
      { fr: "Sucre en poudre extra-fin", en: "Superfine granulated sugar", te: "సన్నని పంచదార", hi: "बारीक चीनी" },
      { fr: "Chocolat noir 70% pour la ganache", en: "Dark chocolate 70%", te: "డార్క్ చాక్లెట్ 70%", hi: "डार्क चॉकलेट" },
      { fr: "Crème liquide entière 30% M.G.", en: "Heavy cream", te: "హెవీ క్రీమ్", hi: "ताजा क्रीम" }
    ],
    steps: [
      {
        title: { fr: "Tamiser les poudres", en: "Sift Dry Ingredients", te: "పిండి జల్లించండి", hi: "सूखी सामग्री छानें" },
        instruction: {
          fr: "Mixer brièvement poudre d'amandes et sucre glace puis tamiser deux fois pour éliminer toute impureté.",
          en: "Pulse almond flour and confectioners' sugar in food processor, then sift twice through a fine mesh sieve.",
          te: "బాదం పిండి, చక్కెర కలిపి రెండుసార్లు జల్లెడ పట్టండి.",
          hi: "बादाम का आटा और पिसी चीनी मिलाकर दो बार छान लें।"
        }
      },
      {
        title: { fr: "Monter et macaronner", en: "Whip Meringue and Macaronage", te: "మెరింగ్ కలిపి కలపండి", hi: "सफेदी फेंटकर मिलाएं" },
        instruction: {
          fr: "Monter les blancs en neige en serrant au sucre. Incorporer les poudres et macaronner à la spatule jusqu'au ruban lisse.",
          en: "Whip egg whites while gradually streaming granulated sugar until stiff glossy peaks form. Gently fold in dry ingredients until the batter flows like molten lava.",
          te: "గుడ్డు తెల్లసొనను పంచదారతో బీట్ చేసి, బాదం పిండిని మెల్లగా కలపండి.",
          hi: "अंडे की सफेदी को चीनी के साथ फेंटें, फिर सूखी सामग्री को धीरे-धीरे मिलाएं।"
        }
      },
      {
        title: { fr: "Pocher et croûter", en: "Pipe and Rest Shells", te: "పైప్ చేసి ఆరనివ్వండి", hi: "पाइप करें और सूखने दें" },
        instruction: {
          fr: "Pocher des ronds réguliers sur plaque sulfurisée. Claquer la plaque sur le plan de travail et laisser croûter 30 minutes.",
          en: "Pipe 1.5-inch rounds onto parchment-lined baking sheets. Tap sheet firmly on counter to release air bubbles. Rest 30 minutes until touch-dry.",
          te: "ట్రేపై గుండ్రంగా పైప్ చేసి, 30 నిమిషాలు ఆరనివ్వండి.",
          hi: "ट्रे पर छोटे गोल आकार बनाएं और 30 मिनट तक सूखने दें।"
        }
      },
      {
        title: { fr: "Cuire et garnir de ganache", en: "Bake and Sandwich", te: "బేక్ చేసి గనాచే రాయండి", hi: "बेक करें और गनाचे लगाएं" },
        instruction: {
          fr: "Cuire à 150°C pendant 14 à 16 minutes. Laisser refroidir complètement avant de décoller et garnir de ganache au chocolat.",
          en: "Bake at 150°C (300°F) for 14-16 minutes until ruffled feet form. Cool completely and sandwich with chocolate ganache.",
          te: "150°C వద్ద 15 నిమిషాలు బేక్ చేసి, చల్లారాక చాక్లెట్ గనాచే రాసి అతికించండి.",
          hi: "150°C पर 15 मिनट बेक करें, ठंडा करके बीच में चॉकलेट गनाचे लगाएं।"
        }
      }
    ]
  },

  // 16. Croque-Monsieur
  "croque-monsieur": {
    title: {
      fr: "Croque-Monsieur au Comté Affiné",
      en: "Classic Croque-Monsieur",
      te: "క్రోక్-మాన్సియర్ (ఫ్రెంచ్ బేక్డ్ హామ్ & చీజ్ శాండ్‌విచ్)",
      hi: "क्रोक-मॉनसिएर (बेक्ड हैम और बेकमेल चीज़ सैंडविच)"
    },
    subtitle: {
      fr: "Pain de mie doré, jambon blanc de Paris, béchamel onctueuse et Comté gratiné.",
      en: "Toasted brioche with ham, silky béchamel & melted Comté.",
      te: "కరిగిన చీజ్ మరియు వెన్నతో కాల్చిన ఫ్రెంచ్ బిస్ట్రో శాండ్‌విచ్.",
      hi: "मक्खन, बेकमेल सॉस और पिघले हुए चीज से भरा प्रसिद्ध फ्रेंच सैंडविच।"
    },
    categoryLabel: {
      fr: "Classique des Bistrots Parisiens",
      en: "Parisian Café Classic",
      te: "పారిసియన్ కేఫ్ వంటకం",
      hi: "पेरिस कैफे क्लासिक"
    },
    description: {
      fr: "Le roi des cafés parisiens : tranches épaisses de pain de mie artisanal beurrées, garnies de jambon de Paris savoureux, nappées d'une béchamel onctueuse parfumée à la muscade et couronnées de fromage Comté râpé gratiné à point.",
      en: "The definitive Paris café sandwich: thick slices of golden pain de mie or brioche layered with French jambon de Paris, slathered with rich nutmeg béchamel sauce, and blanketed with aged Comté or Gruyère cheese toasted to bubbling golden perfection.",
      te: "పారిస్ కేఫ్ శాండ్‌విచ్: బ్రెడ్ స్లైసెస్ మధ్య హామ్, బెషమెల్ సాస్ మరియు గ్రుయెర్ లేదా కామ్టే చీజ్ పెట్టి బేక్ చేస్తారు.",
      hi: "पेरिस कैफे का लोकप्रिय सैंडविच: ब्रेड के बीच हैम, मखमली बेकमेल सॉस और ढेर सारा चीज़ रखकर ओवन में सुनहरा होने तक बेक किया जाता है।"
    },
    wine: {
      fr: "Bordeaux Blanc ou Beaujolais",
      en: "Bordeaux Blanc or Beaujolais",
      te: "బోర్డో వైట్ లేదా బోజోలెస్",
      hi: "बोर्डो व्हाइट या बोजोले"
    },
    wineNotes: {
      fr: "La fraîcheur vive d'un Sauvignon blanc de Bordeaux équilibre idéalement la richesse de la béchamel et du fromage fondu.",
      en: "A fresh, aromatic Sauvignon Blanc-based Bordeaux Blanc cuts cleanly through buttery béchamel and melted cheese.",
      te: "వైట్ వైన్ బెషమెల్ సాస్ మరియు చీజ్ బరువును సమతుల్యం చేస్తుంది.",
      hi: "सफेद वाइन मक्खन और पिघले हुए चीज़ के स्वाद को तरोताजा करती है।"
    },
    chefTip: {
      fr: "Nappez également le dessus du sandwich d'une fine couche de béchamel avant d'ajouter le Comté râpé : cela garantit un gratiné doré et moelleux sans dessécher le pain.",
      en: "Spread remaining béchamel over the top slices and sprinkle generously with remaining Comté. This ensures a golden, bubbly crust without drying out the bread.",
      te: "శాండ్‌విచ్ పైన కూడా కొద్దిగా సాస్ మరియు చీజ్ వేయండి, ఇది బ్రెడ్ ఎండిపోకుండా చాలా మృదువుగా ఉండేలా చేస్తుంది.",
      hi: "सैंडविच के ऊपर भी थोड़ा बेकमेल सॉस और चीज़ लगाएं ताकि ब्रेड सूखे नहीं और ऊपर से मलाईदार बने।"
    },
    ingredients: [
      { fr: "Tranches épaisses de pain de mie artisanal", en: "Thick slices artisanal bread", te: "మందపాటి బ్రెడ్ ముక్కలు", hi: "ब्रेड के मोटे स्लाइस" },
      { fr: "Jambon blanc de Paris artisanal", en: "French cooked ham", te: "కుక్ చేసిన హామ్ స్లైసెస్", hi: "पका हुआ हैम" },
      { fr: "Fromage Comté ou Gruyère affiné râpé", en: "Grated aged Comté or Gruyère", te: "తురిమిన కామ్టే లేదా గ్రుయెర్ చీజ్", hi: "कद्दूकस किया हुआ चीज़" },
      { fr: "Beurre doux de Normandie", en: "French butter", te: "ఫ్రెంచ్ వెన్న", hi: "मक्खन" },
      { fr: "Farine pour la béchamel", en: "All-purpose flour", te: "మైదా పిండి", hi: "मैदा" },
      { fr: "Lait entier chaud", en: "Whole milk, warm", te: "వేడి పాలు", hi: "गर्म दूध" },
      { fr: "Noix de muscade râpée, sel et poivre", en: "Nutmeg, salt and pepper", te: "జాజికాయ పొడి, ఉప్పు, మిరియాలు", hi: "जायफल, नमक और काली मिर्च" },
      { fr: "Pointe de moutarde de Dijon", en: "Dijon mustard", te: "డిజోన్ ఆవాల పేస్ట్", hi: "डिजोन मस्टर्ड" }
    ],
    steps: [
      {
        title: { fr: "Préparer la sauce béchamel", en: "Whisk Silky Béchamel", te: "బెషమెల్ సాస్ తయారుచేయండి", hi: "बेकमेल सॉस बनाएं" },
        instruction: {
          fr: "Fondre le beurre, ajouter la farine et cuire 1 minute. Verser le lait chaud en fouettant jusqu'à épaississement. Assaisonner de muscade.",
          en: "Melt butter in saucepan, stir in flour for 1 minute. Gradually whisk in warm milk and simmer until thick and glossy. Season with nutmeg, salt, and pepper.",
          te: "వెన్నలో పిండి వేయించి, పాలు పోస్తూ సాస్ చిక్కబడేవరకు ఉడికించి జాజికాయ పొడి కలపండి.",
          hi: "मक्खन में मैदा भूनें, दूध डालकर गाढ़ा सॉस बनाएं और जायफल मिलाएं।"
        }
      },
      {
        title: { fr: "Monter les sandwichs", en: "Assemble Sandwiches", te: "శాండ్‌విచ్ తయారుచేయండి", hi: "सैंडविच तैयार करें" },
        instruction: {
          fr: "Tartiner les tranches de moutarde et de béchamel. Déposer le jambon et la moitié du Comté râpé. Refermer.",
          en: "Spread Dijon mustard and béchamel on bread slices. Add ham slices and half the grated Comté cheese. Top with remaining bread.",
          te: "బ్రెడ్ పై సాస్ రాసి, హామ్ మరియు చీజ్ ఉంచి మూయండి.",
          hi: "ब्रेड पर सॉस लगाएं, हैम और चीज़ रखकर सैंडविच बंद करें।"
        }
      },
      {
        title: { fr: "Napper et gratiner au four", en: "Top and Broil Golden", te: "పైన చీజ్ వేసి బేక్ చేయండి", hi: "ऊपर चीज़ डालकर बेक करें" },
        instruction: {
          fr: "Napper le dessus du reste de béchamel et couvrir de Comté. Enfourner 10 minutes à 200°C puis passer 2 minutes sous le gril.",
          en: "Spread remaining béchamel over the top slices and sprinkle generously with remaining Comté. Bake at 200°C (400°F) for 10 minutes, then broil 2 minutes until bubbling golden.",
          te: "పైన సాస్, చీజ్ వేసి 200°C వద్ద 10 నిమిషాలు బేక్ చేయండి.",
          hi: "ऊपर सॉस और ढेर सारा चीज़ डालकर 200°C पर 10 मिनट तक सुनहरा होने तक बेक करें।"
        }
      }
    ]
  },

  // 17. Pain au Chocolat
  "pain-au-chocolat": {
    title: {
      fr: "Pain au Chocolat Pur Beurre",
      en: "Pain au Chocolat",
      te: "పెయిన్ ఓ చాక్లెట్ (చాక్లెట్ ఫ్రెంచ్ క్రోసెంట్)",
      hi: "पेन ओ शोकोला (चॉकलेट से भरी फ्रेंच पेस्ट्री)"
    },
    subtitle: {
      fr: "Feuilletage pur beurre croustillant renfermant deux barres de chocolat noir.",
      en: "French Chocolate Croissant Bread.",
      te: "కరకరలాడే వెన్న పేస్ట్రీలో రెండు డార్క్ చాక్లెట్ బార్లు గల అల్పాహారం.",
      hi: "मक्खन से भरपूर परतदार पेस्ट्री जिसमें दो डार्क चॉकलेट की पट्टियां भरी होती हैं।"
    },
    categoryLabel: {
      fr: "Viennoiserie Artisanale",
      en: "Artisanal Viennoiserie",
      te: "ఆర్టిసానల్ పేస్ట్రీ",
      hi: "कारीगरी पेस्ट्री"
    },
    description: {
      fr: "Le grand incontournable du petit-déjeuner français : une pâte levée feuilletée dorée et croustillante au beurre fin AOP, enveloppant deux barres de chocolat noir intense qui fondent sous la dent à la sortie du four.",
      en: "The breakfast classic of French bakeries: laminated all-butter yeast dough wrapped around two dark chocolate batons that melt inside a golden, flaky honeycomb pastry.",
      te: "ఫ్రెంచ్ బేకరీలలో అత్యంత ప్రసిద్ధ అల్పాహారం: వెన్న పొరల పిండిలో రెండు డార్క్ చాక్లెట్ బార్లు పెట్టి బంగారు రంగులో కరకరలాడేలా కాల్చుతారు.",
      hi: "फ्रेंच बेकरी का सबसे लोकप्रिय नाश्ता: मक्खन की परतदार पेस्ट्री जिसमें दो डार्क चॉकलेट बार्स भरे होते हैं जो गर्म होने पर पिघल जाते हैं।"
    },
    wine: {
      fr: "Chocolat Chaud à l'Ancienne ou Café Expresso",
      en: "Hot Chocolate or Espresso",
      te: "హాట్ చాక్లెట్ లేదా ఎస్ప్రెస్సో కాఫీ",
      hi: "हॉट चॉकलेट या एस्प्रेसो"
    },
    wineNotes: {
      fr: "Un café expresso serré ou un bol de chocolat chaud onctueux accompagne à merveille le feuilletage croustillant.",
      en: "A dark rich espresso or traditional thick hot chocolate provides the quintessential café companion.",
      te: "స్ట్రాంగ్ ఎస్ప్రెస్సో కాఫీతో ఇది అద్భుతమైన కలయిక.",
      hi: "गर्म एस्प्रेसो कॉफी के साथ इसका स्वाद लाजवाब लगता है।"
    },
    chefTip: {
      fr: "Utilisez de véritables bâtons de boulanger à 44% ou 55% de cacao conçus pour résister à la cuisson sans brûler ni durcir.",
      en: "Always use baker's chocolate batons designed to bake smoothly inside the laminated pastry without burning or seizing.",
      te: "బేకింగ్ కోసం ప్రత్యేకంగా తయారుచేసిన చాక్లెట్ బార్లను మాత్రమే వాడండి, అవి కాలిపోకుండా కరుగుతాయి.",
      hi: "बेकिंग के लिए बने खास चॉकलेट बार्स का इस्तेमाल करें ताकि वे जलें नहीं।"
    },
    ingredients: [
      { fr: "Farine de blé T55 de meule", en: "French bread flour", te: "గోధుమ లేదా మైదా పిండి", hi: "मैदा" },
      { fr: "Beurre de tourage doux 82%", en: "European butter 82%", te: "అన్‌సాల్టెడ్ ఫ్రెంచ్ వెన్న", hi: "मक्खन" },
      { fr: "Lait entier", en: "Whole milk", te: "పాలు", hi: "दूध" },
      { fr: "Eau filtrée fraîche", en: "Filtered water", te: "చల్లని నీరు", hi: "पानी" },
      { fr: "Sucre semoule", en: "Granulated sugar", te: "పంచదార", hi: "चीनी" },
      { fr: "Bâtons de chocolat noir de boulanger", en: "Dark chocolate baker's batons", te: "డార్క్ చాక్లెట్ బార్లు", hi: "डार्क चॉकलेट बार्स" },
      { fr: "Levure boulangère déshydratée", en: "Instant dry yeast", te: "ఈస్ట్", hi: "खमीर (यीस्ट)" },
      { fr: "Sel fin de mer", en: "Fine sea salt", te: "సముద్రపు ఉప్పు", hi: "नमक" }
    ],
    steps: [
      {
        title: { fr: "Pétrir la détrempe", en: "Knead and Chill Détrempe", te: "పిండి ముద్ద చేయండి", hi: "आटा गूंथें और ठंडा करें" },
        instruction: {
          fr: "Pétrir la pâte, former un pâton rectangulaire et placer au frais 2 heures.",
          en: "Mix flour, sugar, salt, yeast, milk, and water into smooth dough. Shape into rectangle and refrigerate for 2 hours.",
          te: "పిండిని మృదువుగా కలిపి 2 గంటలు ఫ్రిజ్ లో ఉంచండి.",
          hi: "आटा गूंथ लें और 2 घंटे के लिए फ्रिज में ठंडा करें।"
        }
      },
      {
        title: { fr: "Tourer avec le beurre", en: "Laminate with Butter", te: "వెన్న పొరలు వేయండి", hi: "मक्खन की परतें बनाएं" },
        instruction: {
          fr: "Enchâsser le beurre et donner trois tours simples espacés de 30 minutes de repos au réfrigérateur.",
          en: "Enfold butter block, roll, and perform three single folds with 30-minute chilling intervals between each fold.",
          te: "వెన్న చుట్టి 3 మడతలు వేస్తూ ఫ్రిజ్ లో ఉంచండి.",
          hi: "मक्खन लपेटें और तीन फोल्ड करें, हर बार ठंडा करें।"
        }
      },
      {
        title: { fr: "Rouler avec les barres de chocolat", en: "Roll with Chocolate Batons", te: "చాక్లెట్ బార్లు పెట్టి రోల్ చేయండి", hi: "चॉकलेट रखकर रोल करें" },
        instruction: {
          fr: "Découper des rectangles de 8x12 cm, poser 2 bâtons de chocolat et rouler. Laisser lever 2 heures.",
          en: "Cut into rectangles, place two chocolate batons, and roll tightly. Proof for 2 hours until doubled.",
          te: "దీర్ఘచతురస్రాకారంలో కత్తిరించి, 2 చాక్లెట్ బార్లు ఉంచి రోల్ చేసి 2 గంటలు పొంగనివ్వండి.",
          hi: "चौकोर टुकड़े काटें, दो चॉकलेट बार रखें और रोल करें। 2 घंटे तक फूलने दें।"
        }
      },
      {
        title: { fr: "Dorer et cuire", en: "Egg Wash and Bake", te: "కాల్చండి", hi: "बेक करें" },
        instruction: {
          fr: "Dorer délicatement à l'œuf. Cuire à 190°C pendant 18 à 20 minutes jusqu'à magnifique feuilletage croustillant.",
          en: "Brush gently with egg wash. Bake at 190°C (375°F) for 18-20 minutes until puffed and dark golden.",
          te: "గుడ్డు పూత పూసి 190°C వద్ద 20 నిమిషాలు బంగారు రంగులో కాల్చండి.",
          hi: "अंडा लगाएं और 190°C पर 20 मिनट तक सुनहरा होने तक बेक करें।"
        }
      }
    ]
  },

  // 18. Steak Frites Béarnaise
  "steak-frites": {
    title: {
      fr: "Steak Frites Sauce Béarnaise",
      en: "Parisian Steak Frites",
      te: "స్టీక్ ఫ్రైట్స్ విత్ బేర్నైస్ సాస్",
      hi: "स्टेक फ्राइट्स और बेयर्नेस सॉस"
    },
    subtitle: {
      fr: "Entrecôte persillée saisie, frites maison croustillantes et béarnaise à l'estragon.",
      en: "Parisian Steak Frites with Béarnaise sauce.",
      te: "ఫ్రెంచ్ రెస్టారెంట్ స్టీక్, కరకరలాడే ఫ్రెంచ్ ఫ్రైస్ మరియు తారగన్ సాస్.",
      hi: "कुरकुरी फ्रेंच फ्राइज और तारगोन वाली मखमली सॉस के साथ भुना हुआ स्टेक।"
    },
    categoryLabel: {
      fr: "Classique de Brasserie",
      en: "Brasserie Classic",
      te: "బ్రాసరీ క్లాసిక్",
      hi: "ब्रासरे क्लासिक"
    },
    description: {
      fr: "Le monument des brasseries parisiennes : belle pièce d'entrecôte saisie à feu vif, accompagnée de frites maison cuites en deux bains pour un croustillant parfait, et d'une sauce béarnaise montée au beurre clarifié et parfumée à l'estragon frais.",
      en: "The quintessential Parisian brasserie dinner: seared prime beef steak with double-fried golden frites, accompanied by warm, velvety Béarnaise sauce emulsified with clarified butter, fresh tarragon, and shallots.",
      te: "పారిసియన్ బ్రాసరీలలో ప్రసిద్ధ వంటకం: వేయించిన బీఫ్ స్టీక్, రెండుసార్లు వేయించిన క్రిస్పీ ఫ్రైస్ మరియు వెన్నతో చేసిన సుగంధభరిత బేర్నైస్ సాస్.",
      hi: "पेरिसियन रेस्तरां का सबसे पसंदीदा भोजन: गर्म पैन में भुना हुआ स्टेक, दो बार तली हुई कुरकुरी फ्राइज और तारगोन वाली मखमली बेयर्नेस सॉस।"
    },
    wine: {
      fr: "Saint-Émilion Grand Cru ou Syrah de la Vallée du Rhône",
      en: "Bordeaux or Rhône Syrah",
      te: "బోర్డో లేదా రోన్ వైన్",
      hi: "बोर्डो या रोन वाइन"
    },
    wineNotes: {
      fr: "Un Bordeaux charpenté ou une Syrah épicée souligne le grillé de la viande tout en épousant l'acidité herbacée de la sauce béarnaise.",
      en: "A structured Bordeaux or spicy Rhône Syrah pairs seamlessly with seared beef and buttery herbal sauce.",
      te: "బోర్డో రెడ్ వైన్ మాంసం మరియు బేర్నైస్ సాస్‌తో అద్భుతంగా సరిపోతుంది.",
      hi: "गाढ़ी बोर्डो वाइन भुने हुए स्टेक और मक्खन वाली सॉस के साथ बेहतरीन स्वाद देती है।"
    },
    chefTip: {
      fr: "Pour des frites ultra-croustillantes, pratiquez impérativement la double cuisson belge : un premier bain à 160°C pour pocher l'intérieur de la pomme de terre, puis un second bain à 190°C juste avant de servir pour dorer la croûte.",
      en: "For intensely crisp frites, always use double-frying: first at 160°C (320°F) to cook the potatoes through, then at 190°C (375°F) to achieve golden crunch.",
      te: "ఫ్రైస్ కరకరలాడటానికి రెండుసార్లు వేయించండి: మొదట 160°C వద్ద ఉడికించి, తర్వాత 190°C వద్ద ఎర్రగా వేయించండి.",
      hi: "कुरकुरी फ्राइज के लिए दो बार तलें: पहले 160°C पर ताकि आलू अंदर से पके, फिर 190°C पर कुरकुरा होने तक।"
    },
    ingredients: [
      { fr: "Belles entrecôtes ou faux-filets de bœuf", en: "Prime ribeye or strip steaks", te: "స్టీక్ మాంసం ముక్కలు", hi: "स्टेक के टुकड़े" },
      { fr: "Pommes de terre Bintje pour frites", en: "Bintje potatoes, cut into frites", te: "బంగాళాదుంపలు", hi: "आलू (फ्राइज के लिए कटे)" },
      { fr: "Beurre clarifié tiède pour la sauce", en: "Clarified butter", te: "కరిగించిన స్వచ్ఛమైన వెన్న", hi: "पिघला हुआ मक्खन (घी)" },
      { fr: "Jaunes d'œufs frais", en: "Egg yolks", te: "గుడ్డు పచ్చసొనలు", hi: "अंडे की जर्दी" },
      { fr: "Vinaigre d'alcool et vin blanc sec", en: "White wine vinegar and wine", te: "వైట్ వైన్ మరియు వెనిగర్", hi: "सफेद सिरका और वाइन" },
      { fr: "Estragon et cerfeuil frais hachés", en: "Fresh tarragon and chervil", te: "తారగన్ ఆకులు", hi: "ताजा तारगोन" },
      { fr: "Échalote française émincée", en: "Shallots, minced", te: "ఉల్లిపాయ ముక్కలు", hi: "बारीक कटा छोटा प्याज" },
      { fr: "Huile de friture neutre", en: "Oil for frying", te: "వేయించడానికి నూనె", hi: "तलने के लिए तेल" }
    ],
    steps: [
      {
        title: { fr: "Premier bain des frites", en: "First Fry Potatoes", te: "మొదటిసారి వేయించండి", hi: "आलू को पहली बार तलें" },
        instruction: {
          fr: "Cuire les bâtonnets de pommes de terre à 160°C pendant 6 minutes sans coloration. Égoutter sur papier absorbant.",
          en: "Fry potatoes at 160°C (320°F) for 6 minutes until soft but not browned. Drain on paper towels.",
          te: "బంగాళాదుంప ముక్కలను 160°C వద్ద 6 నిమిషాలు రంగు మారకుండా వేయించి తీయండి.",
          hi: "आलू को 160°C पर 6 मिनट तक तलें ताकि वे पक जाएं लेकिन भूरे न हों।"
        }
      },
      {
        title: { fr: "Monter la sauce béarnaise", en: "Whisk Silky Béarnaise", te: "బేర్నైస్ సాస్ కలపండి", hi: "बेयर्नेस सॉस बनाएं" },
        instruction: {
          fr: "Réduire vinaigre, vin et échalote. Fouetter au bain-marie avec les jaunes puis incorporer le beurre clarifié en filet. Ajouter l'estragon.",
          en: "Reduce vinegar, wine, and shallots. Whisk with egg yolks over a double boiler, slowly streaming in warm clarified butter until thick. Stir in tarragon.",
          te: "వెనిగర్ మరియు ఉల్లిపాయల రసంలో గుడ్డు పచ్చసొన మరియు వెన్న కలిపి సాస్ తయారుచేయండి.",
          hi: "सिरका और प्याज उबालें। अंडे की जर्दी और मक्खन मिलाकर गाढ़ी सॉस बनाएं, तारगोन डालें।"
        }
      },
      {
        title: { fr: "Saisir les steaks", en: "Sear Steaks", te: "స్టీక్ వేయించండి", hi: "स्टेक को भूनें" },
        instruction: {
          fr: "Saisir la viande 3 minutes par face dans une poêle en fonte fumante. Arroser de beurre moussant et laisser reposer 5 minutes.",
          en: "Sear steaks in smoking cast iron skillet for 3 minutes per side. Baste with butter and crushed garlic. Rest for 5 minutes.",
          te: "బాణలిలో రెండు వైపులా 3 నిమిషాలు వేయించి, వెన్న పోసి 5 నిమిషాలు పక్కన పెట్టండి.",
          hi: "गर्म पैन में दोनों तरफ 3 मिनट तक भूनें। मक्खन डालें और 5 मिनट आराम करने दें।"
        }
      },
      {
        title: { fr: "Second bain et service", en: "Second Flash Fry", te: "రెండోసారి వేయించి వడ్డించండి", hi: "दोबारा तलें और परोसें" },
        instruction: {
          fr: "Replonger les frites à 190°C pendant 2 à 3 minutes jusqu'à ce qu'elles soient ultra-dorées et croustillantes. Saler et servir aussitôt.",
          en: "Drop frites into 190°C (375°F) oil for 2-3 minutes until golden and intensely crisp. Toss with flaky sea salt and serve immediately.",
          te: "190°C వద్ద 2-3 నిమిషాలు కరకరలాడేలా వేయించి, ఉప్పు చల్లి వడ్డించండి.",
          hi: "190°C पर 2-3 मिनट तक सुनहरा और कुरकुरा होने तक दोबारा तलें। नमक छिड़कें और परोसें।"
        }
      }
    ]
  },

  // 19. Moules Marinières
  "moules-marinieres": {
    title: {
      fr: "Moules Marinières au Vin Blanc et Échalotes",
      en: "Normandy Steamed Mussels",
      te: "మౌల్స్ మారినియర్స్ (వైట్ వైన్ లో ఉడికించిన ఫ్రెంచ్ నత్తలు)",
      hi: "मूल्स मारिनिएर (सफेद वाइन में पकी समुद्री मसल्स)"
    },
    subtitle: {
      fr: "Moules de bouchot ouvertes à la vapeur de vin blanc, beurre et persil frais.",
      en: "Normandy Steamed Mussels in White Wine.",
      te: "వైట్ వైన్, వెన్న మరియు పార్స్లీ ఆకులతో వండిన నార్మాండీ సముద్రపు నత్తలు.",
      hi: "सफेद वाइन, मक्खन और ताजे पार्सले के साथ पकी नॉर्मैंडी की प्रसिद्ध मसल्स।"
    },
    categoryLabel: {
      fr: "Spécialité Maritime Normande",
      en: "Normandy Maritime",
      te: "నార్మాండీ సముద్ర తీర వంటకం",
      hi: "नॉर्मैंडी समुद्री व्यंजन"
    },
    description: {
      fr: "La fraîcheur des côtes normandes : moules de bouchot charnues ouvertes à vif dans un bouillon frémissant de vin blanc sec, échalotes fondues au beurre doux et persil plat frais haché, servies avec leur jus iodé parfumé.",
      en: "Fresh plump ocean mussels flash-steamed in a covered pot with aromatic minced shallots, French butter, crisp white wine, and fresh flat-leaf parsley, served with crusty bread for dipping.",
      te: "నార్మాండీ సముద్ర తీర వంటకం: తాజా నత్తలను వైట్ వైన్, వెన్న, ఉల్లిపాయలు మరియు పార్స్లీతో వేగంగా ఉడికిస్తారు.",
      hi: "नॉर्मैंडी के समुद्र तट का ताजा व्यंजन: ताजी मसल्स को सफेद वाइन, मक्खन, प्याज और पार्सले के खुशबूदार सूप में भाप से पकाया जाता है।"
    },
    wine: {
      fr: "Muscadet Sèvre-et-Maine sur lie ou Gros Plant",
      en: "Muscadet sur lie",
      te: "మస్కడెట్ వైన్",
      hi: "मस्काडेट वाइन"
    },
    wineNotes: {
      fr: "Un blanc marin, vivace et minéral qui exalte la saveur saline naturelle des moules de bouchot.",
      en: "A vibrant, bone-dry Muscadet echoes the briny oceanic freshness of steamed shellfish.",
      te: "మినరల్ వైట్ వైన్ సముద్రపు తాజా రుచికి సరిగ్గా సరిపోతుంది.",
      hi: "कुरकुरी सूखी सफेद वाइन समुद्री मसल्स के स्वाद को निखारती है।"
    },
    chefTip: {
      fr: "Jetez sans hésitation toute moule qui reste fermée après 5 minutes de cuisson vive : cela garantit une fraîcheur et une sécurité irréprochables.",
      en: "Discard any mussels that do not open after 5 minutes of vigorous steaming; this guarantees complete culinary safety and freshness.",
      te: "ఉడికిన తర్వాత తెరవని నత్తలను పడేయండి, తెరిచిన వాటిని మాత్రమే తినండి.",
      hi: "पकने के बाद जो मसल्स न खुलें उन्हें हटा दें, केवल खुली हुई मसल्स ही खाएं।"
    },
    ingredients: [
      { fr: "Moules de bouchot fraîches nettoyées", en: "Fresh live blue mussels", te: "తాజా సముద్రపు నత్తలు", hi: "ताजी मसल्स" },
      { fr: "Vin blanc sec de qualité (Muscadet)", en: "Dry French white wine", te: "డ్రై వైట్ వైన్", hi: "सफेद वाइन" },
      { fr: "Beurre doux de Normandie", en: "French butter", te: "ఫ్రెంచ్ వెన్న", hi: "मक्खन" },
      { fr: "Échalotes françaises finement ciselées", en: "French shallots, minced", te: "సన్నగా తరిగిన ఉల్లిపాయలు", hi: "बारीक कटा छोटा प्याज" },
      { fr: "Gousses d'ail émincées", en: "Garlic cloves, sliced", te: "వెల్లుల్లి రెబ్బలు", hi: "लहसुन" },
      { fr: "Persil plat frais haché", en: "Fresh flat-leaf parsley", te: "తాజా పార్స్లీ ఆకులు", hi: "ताजा पार्सले" },
      { fr: "Cuillère de crème fraîche épaisse", en: "Heavy cream", te: "క్రీమ్", hi: "ताजी क्रीम" },
      { fr: "Poivre noir fraîchement moulu", en: "Cracked black pepper", te: "మిరియాల పొడి", hi: "काली मिर्च" }
    ],
    steps: [
      {
        title: { fr: "Suer les échalotes", en: "Sauté Aromatics", te: "ఉల్లిపాయలు వేయించండి", hi: "प्याज भूनें" },
        instruction: {
          fr: "Fondre le beurre dans un grand faitout et faire suer échalotes et ail 3 minutes sans coloration.",
          en: "Melt butter in a large wide pot. Gently soften shallots and garlic over medium heat for 3 minutes without browning.",
          te: "బాణలిలో వెన్న వేసి ఉల్లిపాయలు మరియు వెల్లుల్లిని 3 నిమిషాలు వేయించండి.",
          hi: "बड़े बर्तन में मक्खन पिघलाएं, प्याज और लहसुन को 3 मिनट तक भूनें।"
        }
      },
      {
        title: { fr: "Porter le vin blanc à ébullition", en: "Pour Wine and Boil", te: "వైన్ పోసి మరిగించండి", hi: "वाइन डालकर उबालें" },
        instruction: {
          fr: "Verser le vin blanc et porter à vive ébullition pendant 1 minute pour évaporer l'alcool.",
          en: "Pour in dry white wine, bring to a rolling boil for 1 minute to cook off raw alcohol.",
          te: "వైట్ వైన్ పోసి 1 నిమిషం మరిగించండి.",
          hi: "सफेद वाइन डालें और 1 मिनट तक तेज उबाल आने दें।"
        }
      },
      {
        title: { fr: "Cuire à la vapeur vive", en: "Flash Steam Mussels", te: "నత్తలను ఉడికించండి", hi: "मसल्स को भाप में पकाएं" },
        instruction: {
          fr: "Ajouter les moules, couvrir hermétiquement et cuire 4 à 5 minutes à feu vif en secouant la cocotte.",
          en: "Add cleaned mussels, cover tightly, and steam on high for 4 to 5 minutes, shaking pot once. Discard any mussels that do not open.",
          te: "నత్తలు వేసి మూతపెట్టి 5 నిమిషాలు ఉడికించండి.",
          hi: "मसल्स डालें, ढककर तेज आंच पर 4-5 मिनट तक भाप में पकाएं।"
        }
      },
      {
        title: { fr: "Parsemer de persil et servir", en: "Finish and Serve", te: "పార్స్లీ వేసి వడ్డించండి", hi: "पार्सले डालकर परोसें" },
        instruction: {
          fr: "Ajouter le persil haché et un filet de crème. Servir aussitôt dans des bols profonds avec du pain frais.",
          en: "Stir in fresh parsley and cream. Ladle into deep bowls with the fragrant broth and serve with warm baguette.",
          te: "పార్స్లీ, క్రీమ్ కలిపి వేడి సూప్‌తో బ్రెడ్‌తో వడ్డించండి.",
          hi: "पार्सले और थोड़ी क्रीम मिलाएं। कटोरे में गरमा-गर्म सूप और ब्रेड के साथ परोसें।"
        }
      }
    ]
  },

  // 20. Madeleines de Commercy
  "madeleines": {
    title: {
      fr: "Madeleines de Commercy au Citron",
      en: "Lemon-Butter Madeleines",
      te: "ఫ్రెంచ్ మెడ్లిన్స్ (నిమ్మ మరియు వెన్నతో చేసిన చిన్న స్పాంజ్ కేకులు)",
      hi: "फ्रेंच मेडेलीन्स (नींबू और मक्खन वाले छोटे स्पंज केक्स)"
    },
    subtitle: {
      fr: "Petits gâteaux moelleux en coquille à la belle bosse dorée et zeste de citron.",
      en: "Traditional French Lemon-Butter Madeleines.",
      te: "శంఖం ఆకారంలో ఉండే సుగంధభరిత నిమ్మ మరియు వెన్న స్పాంజ్ కేకులు.",
      hi: "शंख के आकार वाले खुशबूदार और मुलायम फ्रेंच स्पंज टी-केक्स।"
    },
    categoryLabel: {
      fr: "Gâteau de Goûter Traditionnel",
      en: "Classic Tea Cake",
      te: "టీ టైమ్ కేక్",
      hi: "चाय का केक"
    },
    description: {
      fr: "La célèbre réminiscence de Marcel Proust : petits gâteaux spongieux et dorés cuits dans des moules cannelés en forme de coquille Saint-Jacques, au parfum délicat de citron jaune râpé et surmontés de leur célèbre bosse ronde.",
      en: "Proust's famous sensory memory: light, buttery sponge cakes baked in scalloped shell molds, featuring a delicate crumb, fragrant grated lemon zest, and the iconic puffed 'hump' in the center.",
      te: "ఫ్రాన్స్ యొక్క ప్రసిద్ధ స్పాంజ్ కేకులు: శంఖం ఆకారపు అచ్చులలో వెన్న, నిమ్మ తొక్క సువాసనతో కాల్చబడతాయి.",
      hi: "फ्रांस का प्रसिद्ध चाय का केक: शंख के आकार के सांचों में बेक किया गया हल्का और मक्खन वाला स्पंज केक, जिसमें नींबू के छिलके की भीनी खुशबू होती है।"
    },
    wine: {
      fr: "Thé Noir Earl Grey ou Sauternes Frais",
      en: "Earl Grey Tea or Sauternes",
      te: "ఎర్ల్ గ్రే టీ లేదా తీపి వైన్",
      hi: "अर्ल ग्रे चाय या मीठी वाइन"
    },
    wineNotes: {
      fr: "Une tasse de thé noir à la bergamote ou un verre de Sauternes glacé accompagne merveilleusement la douceur citronnée.",
      en: "A cup of bergamot-infused Earl Grey tea or a chilled glass of sweet Sauternes makes for an enchanting afternoon indulgence.",
      te: "ఎర్ల్ గ్రే టీతో ఈ మెడ్లిన్స్ కేకులు చాలా రుచిగా ఉంటాయి.",
      hi: "गर्म चाय के साथ ये मुलायम मेडेलीन्स बहुत स्वादिष्ट लगते हैं।"
    },
    chefTip: {
      fr: "Laissez reposer la pâte au réfrigérateur au moins 1 heure avant de l'enfourner dans un four très chaud : c'est ce choc thermique entre la pâte glacée et la chaleur qui fait pousser la bosse magique.",
      en: "Chilling the batter in the refrigerator for at least 1 hour before piping into hot molds creates a thermal shock in the oven that forces the iconic dome hump to rise.",
      te: "పిండిని బేక్ చేయడానికి ముందు 1 గంట ఫ్రిజ్ లో ఉంచండి, ఈ చల్లదనం ఓవెన్ లో కేక్ పైకి పొంగడానికి సహాయపడుతుంది.",
      hi: "घोल को बेक करने से पहले 1 घंटे फ्रिज में रखें, जिससे ओवन में अचानक गर्म होने पर बीच का हिस्सा सुंदर फूलता है।"
    },
    ingredients: [
      { fr: "Farine de blé tamisée", en: "All-purpose wheat flour", te: "మైదా పిండి", hi: "मैदा" },
      { fr: "Beurre doux fondu et refroidi", en: "Unsalted butter, melted", te: "కరిగించిన వెన్న", hi: "पिघला हुआ मक्खन" },
      { fr: "Œufs frais à température ambiante", en: "Fresh eggs", te: "కోడిగుడ్లు", hi: "अंडे" },
      { fr: "Sucre blond de canne", en: "Cane sugar", te: "పంచదార", hi: "चीनी" },
      { fr: "Zeste de citron jaune finement râpé", en: "Finely grated lemon zest", te: "తురిమిన నిమ్మ తొక్క", hi: "नींबू का छिलका (कद्दूकस किया)" },
      { fr: "Levure chimique", en: "Baking powder", te: "బేకింగ్ పౌడర్", hi: "बेकिंग पाउडर" },
      { fr: "Extrait de vanille pure et pincée de sel", en: "Vanilla extract and pinch of salt", te: "వెనిల్లా మరియు ఉప్పు", hi: "वैनिला और नमक" }
    ],
    steps: [
      {
        title: { fr: "Blanchir les œufs et le sucre", en: "Whip Eggs and Sugar", te: "గుడ్లు, చక్కెర కలపండి", hi: "अंडे और चीनी फेंटें" },
        instruction: {
          fr: "Fouetter vivement œufs et sucre jusqu'à mélange mousseux et clair. Ajouter le zeste de citron et la vanille.",
          en: "Beat eggs and sugar until pale, thick, and ribbon-like. Fold in lemon zest, vanilla, and salt.",
          te: "గుడ్లు మరియు చక్కెరను నురుగు వచ్చేలా బీట్ చేసి, నిమ్మ తొక్క కలపండి.",
          hi: "अंडे और चीनी को गाढ़ा और झागदार होने तक फेंटें, नींबू का छिलका मिलाएं।"
        }
      },
      {
        title: { fr: "Incorporer farine et beurre", en: "Fold Flour and Butter", te: "పిండి, వెన్న కలపండి", hi: "मैदा और मक्खन मिलाएं" },
        instruction: {
          fr: "Tamiser la farine et la levure, mélanger délicatement puis incorporer le beurre fondu refroidi. Réfrigérer 1 heure.",
          en: "Sift in flour and baking powder. Gently fold in melted butter until smooth. Chill batter in refrigerator for 1 hour.",
          te: "పిండి, బేకింగ్ పౌడర్, కరిగించిన వెన్న కలిపి 1 గంట ఫ్రిజ్ లో ఉంచండి.",
          hi: "मैदा और बेकिंग पाउडर छानें, पिघला मक्खन मिलाएं और 1 घंटा फ्रिज में रखें।"
        }
      },
      {
        title: { fr: "Créer le choc thermique", en: "Bake Thermal Shock", te: "ఓవెన్ లో కాల్చండి", hi: "ओवन में बेक करें" },
        instruction: {
          fr: "Remplir les moules beurrés de pâte bien froide. Cuire à 200°C pendant 10 minutes jusqu'à ce que la bosse se dresse et dore.",
          en: "Spoon cold batter into buttered madeleine molds. Bake at 200°C (400°F) for 10 minutes until golden and center domes rise high.",
          te: "చల్లని పిండిని అచ్చులలో వేసి 200°C వద్ద 10 నిమిషాలు బేక్ చేయండి.",
          hi: "सांचों में ठंडा घोल भरें और 200°C पर 10 मिनट तक बेक करें जब तक कि बीच का भाग फूल न जाए।"
        }
      }
    ]
  },

  // 21. Gratin Dauphinois
  "gratin-dauphinois": {
    title: {
      fr: "Gratin Dauphinois Traditionnel",
      en: "Traditional Potato Gratin",
      te: "గ్రాటిన్ డోఫినోయిస్ (ఫ్రెంచ్ క్రీమీ బంగాళాదుంప బేక్)",
      hi: "ग्रैटिन डौफिनोइस (क्रीमी और मक्खन वाली फ्रेंच बेक्ड आलू डिश)"
    },
    subtitle: {
      fr: "Fines rondelles de pommes de terre confites à la crème d'ail et muscade.",
      en: "Sliced potatoes baked in garlic cream and nutmeg.",
      te: "వెల్లుల్లి, క్రీమ్ మరియు జాజికాయతో బేక్ చేసిన బంగాళాదుంప వంటకం.",
      hi: "क्रीम, लहसुन और जायफल के साथ बेक किया हुआ स्वादिष्ट क्लासिक फ्रेंच व्यंजन।"
    },
    categoryLabel: {
      fr: "Spécialité Rhône-Alpes",
      en: "Rhône-Alpes Specialty",
      te: "రోన్-ఆల్ప్స్ ప్రత్యేక వంటకం",
      hi: "रोन-आल्प्स की खासियत"
    },
    description: {
      fr: "Le chef-d'œuvre de la région du Dauphiné : fines rondelles de pommes de terre à chair ferme confites longuement au four dans un bain de crème entière infusée à l'ail et à la noix de muscade, sans aucun ajout de fromage conformément à la tradition puriste.",
      en: "An authentic culinary masterpiece of the Dauphiné region: paper-thin potato rounds slow-baked submerged in garlic-scented heavy cream, whole milk, and a dusting of nutmeg until meltingly tender and crowned with a burnished golden top.",
      te: "డోఫినే ప్రాంతపు అద్భుతమైన వంటకం: బంగాళాదుంప ముక్కలను వెల్లుల్లి క్రీమ్, పాలు మరియు జాజికాయతో నెమ్మదిగా బంగారు రంగు వచ్చేవరకు బేక్ చేస్తారు.",
      hi: "फ्रांस का क्लासिक व्यंजन: पतले कटे आलू को लहसुन वाली गाढ़ी मलाई, दूध और जायफल में धीमी आंच पर बेक किया जाता है जब तक कि ऊपर से सुनहरा न हो जाए।"
    },
    wine: {
      fr: "Côtes du Rhône Blanc ou Saint-Joseph",
      en: "Côtes du Rhône Blanc",
      te: "కోట్స్ డు రోన్ వైట్",
      hi: "कोट्स डू रोन व्हाइट"
    },
    wineNotes: {
      fr: "Un blanc de la vallée du Rhône, riche et ample, accompagne avec élégance le crémeux onctueux des pommes de terre.",
      en: "A rich, textured white Rhône wine complements the opulent creaminess of slow-baked potatoes without overpowering.",
      te: "రోన్ వైట్ వైన్ బంగాళాదుంపల క్రీమీ రుచికి అద్భుతంగా సరిపోతుంది.",
      hi: "सफेद रोन वाइन मलाईदार आलू के स्वाद को और भी शानदार बनाती है।"
    },
    chefTip: {
      fr: "Ne lavez jamais vos rondelles de pommes de terre après les avoir tranchées ! C'est leur amidon naturel de surface qui permet à la crème de lier et de former une sauce divinement soyeuse.",
      en: "Never rinse your sliced potatoes in water! The natural surface starch is essential to bind the cream into a luxurious, silky sauce.",
      te: "బంగాళాదుంపలను కోసిన తర్వాత నీటితో కడగవద్దు! వాటిలోని స్టార్చ్ క్రీమ్‌ను చిక్కగా మార్చడానికి చాలా అవసరం.",
      hi: "आलू के स्लाइस को काटने के बाद पानी से न धोएं! उनका प्राकृतिक स्टार्च क्रीम को गाढ़ा और मखमली बनाने के लिए जरूरी है।"
    },
    ingredients: [
      { fr: "Pommes de terre à chair ferme (Charlotte ou Monalisa)", en: "Firm baking potatoes, sliced thin", te: "బంగాళాదుంపలు (సన్నగా కోసినవి)", hi: "आलू (पतले गोल कटे)" },
      { fr: "Crème liquide entière 35% de M.G.", en: "Heavy whipping cream", te: "హెవీ విప్పింగ్ క్రీమ్", hi: "गाढ़ी मलाई (क्रीम)" },
      { fr: "Lait entier de ferme", en: "Whole milk", te: "చిక్కటి పాలు", hi: "दूध" },
      { fr: "Gousses d'ail frais écrasées", en: "Fresh garlic cloves", te: "వెల్లుల్లి రెబ్బలు", hi: "लहसुन" },
      { fr: "Beurre doux pour le plat", en: "Butter for dish", te: "వెన్న", hi: "मक्खन" },
      { fr: "Noix de muscade fraîchement râpée", en: "Freshly grated nutmeg", te: "జాజికాయ పొడి", hi: "जायफल" },
      { fr: "Fleur de sel et poivre blanc moulu", en: "Sea salt and white pepper", te: "ఉప్పు మరియు మిరియాల పొడి", hi: "नमक और सफेद मिर्च" }
    ],
    steps: [
      {
        title: { fr: "Frotter le plat à l'ail", en: "Prepare Dish and Potatoes", te: "గిన్నెకు వెల్లుల్లి రాయండి", hi: "बर्तन में लहसुन लगाएं" },
        instruction: {
          fr: "Frotter un plat à gratin avec une gousse d'ail coupée et beurrer généreusement. Couper les pommes de terre à 3 mm d'épaisseur sans les laver.",
          en: "Rub baking dish with cut garlic cloves and butter. Slice unrinsed potatoes 3mm thick using a mandoline.",
          te: "గిన్నెకు వెల్లుల్లి మరియు వెన్న రాయండి. బంగాళాదుంపలను కడగకుండా సన్నగా కోయండి.",
          hi: "बेकिंग डिश पर लहसुन और मक्खन लगाएं। बिना धोए आलू को 3 मिमी पतला काटें।"
        }
      },
      {
        title: { fr: "Infuser la crème", en: "Infuse Cream", te: "క్రీమ్ మరిగించండి", hi: "क्रीम गर्म करें" },
        instruction: {
          fr: "Chauffer lait, crème, ail écrasé, sel, poivre et muscade 5 minutes pour développer les arômes.",
          en: "Simmer milk, cream, crushed garlic, nutmeg, salt, and white pepper in a saucepan for 5 minutes. Remove garlic.",
          te: "పాలు, క్రీమ్, వెల్లుల్లి, ఉప్పు మరియు జాజికాయను 5 నిమిషాలు వేడి చేయండి.",
          hi: "दूध, मलाई, लहसुन, नमक और जायफल को 5 मिनट तक धीमी आंच पर गर्म करें।"
        }
      },
      {
        title: { fr: "Dresser et cuire doucement", en: "Layer and Bake", te: "పేర్చి బేక్ చేయండి", hi: "सजाएं और बेक करें" },
        instruction: {
          fr: "Disposer les rondelles en couches régulières, verser la crème chaude et cuire 1h15 à 160°C jusqu'à dorure caramel et cœur fondant.",
          en: "Arrange potato slices neatly in overlapping layers in the baking dish. Pour warm cream mixture over top. Bake at 160°C (325°F) for 60-70 minutes until fork tender and golden brown.",
          te: "బంగాళాదుంప ముక్కలను పేర్చి, వేడి క్రీమ్ పోసి 160°C వద్ద 70 నిమిషాలు బేక్ చేయండి.",
          hi: "आलू की परतें लगाएं, गर्म मलाई डालें और 160°C पर 70 मिनट तक सुनहरा और नरम होने तक बेक करें।"
        }
      }
    ]
  },

  // 22. Crêpes Suzette
  "crepe-suzette": {
    title: {
      fr: "Crêpes Suzette Flambées au Grand Marnier",
      en: "Crêpes Suzette",
      te: "క్రేప్స్ సుజెట్ (ఆరెంజ్ కారామెల్ మరియు గ్రాండ్ మార్నియర్ పాన్‌కేకులు)",
      hi: "क्रेप्स सुजेट (संतरे के कैरेमेल और लिकर वाली फ्लेम्ब्ड पेस्ट्री)"
    },
    subtitle: {
      fr: "Crêpes fondantes nappées de beurre d'orange caramélisé et flambées au Grand Marnier.",
      en: "Flambéed Orange Crêpes Suzette.",
      te: "ఆరెంజ్ కారామెల్ మరియు తాజా వెన్నతో టేబుల్ వద్ద ఫ్లేమ్ చేసిన ఫ్రెంచ్ డెసర్ట్.",
      hi: "संतरे के रस और मक्खन की चाशनी में डूबे हुए शानदार फ्रेंच क्रेप्स।"
    },
    categoryLabel: {
      fr: "Classique de la Haute Gastronomie",
      en: "Haute Cuisine Classic",
      te: "హాట్ వంటకం",
      hi: "शाही क्लासिक"
    },
    description: {
      fr: "L'apogée du spectacle gourmand français : crêpes fines pliées en quatre, mijotées dans un beurre Suzette de sucre caramélisé, jus d'oranges fraîches et zestes rapés, puis flambées en salle au Grand Marnier et au Cognac.",
      en: "The crown jewel of French dessert showmanship: tender golden crêpes folded into quarters, simmered in a beurre Suzette of caramelized sugar, fresh orange juice, zest, and flambéed tableside with Grand Marnier and Cognac.",
      te: "ఫ్రెంచ్ డెజర్ట్లలో అత్యున్నత ప్రదర్శన: మడతపెట్టిన క్రేప్స్‌ను ఆరెంజ్ కారమెల్ సాస్‌లో ఉడికించి, గ్రాండ్ మార్నియర్ లిక్కర్‌తో మంటలు చెలరేగేలా చేస్తారు.",
      hi: "शाही फ्रेंच मिठाई: चार परतों में मुड़े क्रेप्स को संतरे के कैरेमेल सॉस में पकाया जाता है और ग्रैंड मार्नियर लिकर के साथ टेबल पर फ्लेम किया जाता है।"
    },
    wine: {
      fr: "Champagne Demi-Sec ou Muscat de Beaumes-de-Venise",
      en: "Champagne Demi-Sec or Muscat",
      te: "షాంపేన్ డెమి-సెక్ లేదా మస్కట్",
      hi: "शैम्पेन या मस्कट"
    },
    wineNotes: {
      fr: "Les agrumes caramélisés et la flamme de la liqueur répondent en harmonie avec les bulles douces d'un Champagne demi-sec.",
      en: "The caramelized citrus oils and liqueur in the dish match effortlessly with the honeyed stone fruits of a southern French Muscat.",
      te: "కారమెలైజ్డ్ ఆరెంజ్ మరియు లిక్కర్ రుచికి తీపి షాంపేన్ చాలా బాగుంటుంది.",
      hi: "संतरे के कैरेमेल और लिकर के साथ मीठी शैम्पेन का स्वाद लाजवाब लगता है।"
    },
    chefTip: {
      fr: "Frottez vos morceaux de sucre directement sur la peau des oranges avant de les presser pour capturer toute la quintessence des huiles essentielles dans le caramel.",
      en: "Rub whole sugar cubes against fresh orange peel before crushing to capture all the potent, fragrant essential citrus oils directly in your caramel.",
      te: "పంచదార పలుకులను నారింజ తొక్కపై రుద్దండి, దీనివల్ల నారింజ నూనెలు నేరుగా కారమెల్‌లోకి చేరతాయి.",
      hi: "चीनी के टुकड़ों को संतरे के छिलके पर रगड़ें ताकि प्राकृतिक सुगंधित तेल कैरेमेल में आ जाएं।"
    },
    ingredients: [
      { fr: "Crêpes traditionnelles fines préparées", en: "Prepared thin French crêpes", te: "సిద్ధం చేసిన ఫ్రెంచ్ క్రేప్స్", hi: "तैयार पतले फ्रेंच क्रेप्स" },
      { fr: "Jus d'oranges fraîches pressées", en: "Freshly squeezed orange juice", te: "తాజా నారింజ రసం", hi: "संतरे का ताजा रस" },
      { fr: "Zestes râpés d'orange et de citron", en: "Grated orange and lemon zest", te: "నారింజ మరియు నిమ్మ తొక్క", hi: "संतरे और नींबू का छिलका" },
      { fr: "Beurre doux de Normandie en dés", en: "Unsalted French butter, cubed", te: "వెన్న ముక్కలు", hi: "मक्खन के टुकड़े" },
      { fr: "Sucre blond de canne", en: "Cane sugar", te: "పంచదార", hi: "चीनी" },
      { fr: "Liqueur Grand Marnier ou Cointreau", en: "Grand Marnier orange liqueur", te: "గ్రాండ్ మార్నియర్ లిక్కర్", hi: "ग्रैंड मार्नियर लिकर" },
      { fr: "Cognac français de tradition", en: "French Cognac", te: "ఫ్రెంచ్ కాన్యాక్", hi: "फ्रेंच कॉन्यैक" }
    ],
    steps: [
      {
        title: { fr: "Préparer le beurre Suzette", en: "Make Beurre Suzette", te: "ఆరెంజ్ కారమెల్ సాస్ చేయండి", hi: "ऑरेंज कैरेमेल सॉस बनाएं" },
        instruction: {
          fr: "Fondre le sucre à sec jusqu'à blond ambré. Verser jus et zestes d'orange, puis incorporer les dés de beurre en fouettant.",
          en: "Melt sugar in wide skillet over medium heat until pale amber. Stir in orange juice, zest, and whisk in butter cubes until glossy caramel forms.",
          te: "బాణలిలో చక్కెర కరిగించి, నారింజ రసం మరియు వెన్న కలిపి మెరిసే సాస్ చేయండి.",
          hi: "पैन में चीनी पिघलाएं, संतरे का रस, छिलका और मक्खन मिलाकर चमकदार सॉस बनाएं।"
        }
      },
      {
        title: { fr: "Napper et plier les crêpes", en: "Coat and Fold Crêpes", te: "క్రేప్స్ మడిచి సాస్ లో వేయండి", hi: "क्रेप्स को सॉस में डुबोएं" },
        instruction: {
          fr: "Imbiber chaque crêpe dans le beurre d'orange bouillonnant et plier en quatre dans la poêle.",
          en: "Lay crêpes one by one into bubbling orange butter, coating both sides, and fold into triangles.",
          te: "క్రేప్స్‌ను వేడి సాస్‌లో ముంచి త్రికోణంగా మడతపెట్టండి.",
          hi: "क्रेप्स को गर्म सॉस में दोनों तरफ से डुबोएं और तिकोना मोड़ें।"
        }
      },
      {
        title: { fr: "Flamber au Grand Marnier", en: "Flambé Safely", te: "మంటలతో ఫ్లేమ్ చేయండి", hi: "फ्लेम करें" },
        instruction: {
          fr: "Chauffer Grand Marnier et Cognac dans une louche, enflammer délicatement et verser sur les crêpes. Agiter la poêle jusqu'à extinction.",
          en: "Warm Grand Marnier and Cognac in a small ladle, ignite carefully with a long lighter, and pour over crêpes. Swirl pan gently until flames subside.",
          te: "గ్రాండ్ మార్నియర్ మరియు కాన్యాక్‌ను వేడి చేసి వెలిగించి, క్రేప్స్ పై పోయండి.",
          hi: "लिकर को थोड़ा गर्म करके आग लगाएं और क्रेप्स के ऊपर डालें। लपटें शांत होने तक हिलाएं।"
        }
      }
    ]
  },

  // 23. Clafoutis Limousin aux Cerises
  "clafoutis": {
    title: {
      fr: "Clafoutis Limousin aux Cerises Noires",
      en: "Black Cherry Clafoutis",
      te: "క్లాఫౌటిస్ (నల్ల చెర్రీలతో చేసిన కాల్చిన ఫ్రెంచ్ కస్టర్డ్ కేక్)",
      hi: "क्लाफूटी (काली चेरी और मखमली कस्टर्ड से बना क्लासिक फ्रेंच केक)"
    },
    subtitle: {
      fr: "Gâteau rustique aux cerises noires fraîches noyées dans un flan vanillé moelleux.",
      en: "Black cherries baked in sweet vanilla custard.",
      te: "చెర్రీలు మరియు కస్టర్డ్‌తో చేసిన సులభమైన గ్రామీణ ఫ్రెంచ్ డెసర్ట్.",
      hi: "मीठी काली चेरी और वैनिला कस्टर्ड से बना फ्रांस का पारंपरिक बेक्ड डेजर्ट।"
    },
    categoryLabel: {
      fr: "Douceur Rustique de Terroir",
      en: "Rustic Countryside",
      te: "గ్రామీణ డెజర్ట్",
      hi: "ग्रामीण डेसर्ट"
    },
    description: {
      fr: "L'authentique douceur du Limousin : cerises noires juteuses entières noyées dans un appareil onctueux aux œufs, lait et sucre semblable à un flan doré, servi tiède et saupoudré d'un voile de sucre glace.",
      en: "An authentic rustic dessert from central France: ripe, dark cherries submerged in a smooth, sweet egg-and-milk batter reminiscent of a baked crêpe or flan, served warm dusted with confectioners' sugar.",
      te: "ఫ్రాన్స్ గ్రామీణ ప్రాంతపు సాంప్రదాయ డెజర్ట్: నల్లటి చెర్రీలను గుడ్లు, పాలు, చక్కెరతో చేసిన క్రీమీ బ్యాటర్‌లో వేసి ఓవెన్ లో బేక్ చేస్తారు.",
      hi: "मध्य फ्रांस का प्रामाणिक देहाती डेसर्ट: पकी हुई मीठी काली चेरी को दूध और अंडे के चिकने घोल में डालकर बेक किया जाता है और ऊपर से चीनी छिड़ककर गर्म परोसा जाता है।"
    },
    wine: {
      fr: "Vouvray Moelleux ou Rosé d'Anjou",
      en: "Vouvray Moelleux or Rosé d'Anjou",
      te: "వూవ్రే లేదా రోస్ డి'అంజౌ",
      hi: "वूव्रे या रोसे डी'अंजू"
    },
    wineNotes: {
      fr: "Un blanc moelleux du Val de Loire aux reflets d'or fait écho à l'acidité naturelle des cerises et à la douceur du flan.",
      en: "A lightly sweet Loire Valley Chenin Blanc echoes the gentle acidity of baked cherries and rich vanilla flan.",
      te: "తీపి వైట్ వైన్ బేక్ చేసిన చెర్రీల పులుపు మరియు కస్టర్డ్ తీపికి సరిగ్గా సరిపోతుంది.",
      hi: "हल्की मीठी सफेद वाइन पकी हुई चेरी के खट्टेपन और वैनिला कस्टर्ड के साथ बहुत अच्छी लगती है।"
    },
    chefTip: {
      fr: "La tradition limousine exige de laisser les noyaux dans les cerises : en cuisant, ils diffusent un parfum délicat d'amande amère tout en évitant que le jus ne détrempe la pâte.",
      en: "Traditional French purists bake cherries with their pits intact; during baking, the pits release natural almond aroma to the custard and keep the fruit juicy without diluting the batter.",
      te: "సంప్రదాయ పద్ధతిలో చెర్రీల గింజలను తీసివేయరు; బేక్ అయ్యేటప్పుడు గింజలు మంచి బాదం సువాసనను ఇస్తాయి.",
      hi: "पारंपरिक फ्रेंच तरीका यह है कि चेरी के बीज न निकालें; पकते समय बीज से भीनी बादाम जैसी खुशबू निकलती है।"
    },
    ingredients: [
      { fr: "Belles cerises noires fraîches entières", en: "Fresh dark sweet black cherries", te: "తాజా నల్లటి చెర్రీలు", hi: "ताजी मीठी काली चेरी" },
      { fr: "Lait entier de ferme", en: "Whole milk", te: "చిక్కటి పాలు", hi: "दूध" },
      { fr: "Crème liquide entière", en: "Heavy whipping cream", te: "క్రీమ్", hi: "ताजा मलाई" },
      { fr: "Œufs frais entiers", en: "Fresh large eggs", te: "కోడిగుడ్లు", hi: "अंडे" },
      { fr: "Farine de blé fluide", en: "All-purpose wheat flour", te: "మైదా పిండి", hi: "मैदा" },
      { fr: "Sucre semoule fin", en: "Granulated sugar", te: "పంచదార", hi: "चीनी" },
      { fr: "Extrait de vanille pure et pincée de sel", en: "Pure vanilla extract & salt", te: "వెనిల్లా మరియు ఉప్పు", hi: "वैनिला और नमक" },
      { fr: "Sucre glace pour le décor", en: "Powdered sugar for dusting", te: "ఐసింగ్ షుగర్", hi: "पिसी हुई चीनी" }
    ],
    steps: [
      {
        title: { fr: "Fouetter l'appareil à flan", en: "Whisk Custard Batter", te: "కస్టర్డ్ మిశ్రమం తయారుచేయండి", hi: "कस्टर्ड घोल बनाएं" },
        instruction: {
          fr: "Fouetter œufs et sucre jusqu'à blanchiment. Incorporer la farine, puis verser lait, crème et vanille en fouettant.",
          en: "Whisk eggs and sugar until pale. Sift in flour, then smoothly whisk in milk, cream, vanilla, and salt until batter resembles heavy cream.",
          te: "గుడ్లు, చక్కెర బీట్ చేసి, పిండి, పాలు, క్రీమ్, వెనిల్లా వేసి మృదువుగా కలపండి.",
          hi: "अंडे और चीनी फेंटें। मैदा, दूध, मलाई और वैनिला डालकर चिकना घोल बनाएं।"
        }
      },
      {
        title: { fr: "Disposer les cerises", en: "Arrange Cherries in Dish", te: "చెర్రీలు పరచండి", hi: "चेरी सजाएं" },
        instruction: {
          fr: "Beurrer généreusement un plat en céramique. Répartir les cerises noires entières en une couche régulière.",
          en: "Butter a 9-inch ceramic pie dish generously. Scatter cherries evenly in a single layer across the base.",
          te: "గిన్నెకు వెన్న రాసి, చెర్రీలను సమానంగా పరచండి.",
          hi: "बेकिंग डिश में मक्खन लगाएं और चेरी को समान रूप से फैलाएं।"
        }
      },
      {
        title: { fr: "Couler et cuire au four", en: "Pour and Bake", te: "పోసి బేక్ చేయండి", hi: "घोल डालकर बेक करें" },
        instruction: {
          fr: "Verser l'appareil sur les cerises. Cuire à 180°C pendant 35 à 40 minutes jusqu'à ce que le flan soit doré et pris. Saupoudrer de sucre glace.",
          en: "Pour batter over cherries. Bake at 180°C (350°F) for 35-40 minutes until golden, puffed, and set in the center. Dust with powdered sugar.",
          te: "చెర్రీల పైన మిశ్రమాన్ని పోసి 180°C వద్ద 40 నిమిషాలు బేక్ చేయండి. చక్కెర చల్లండి.",
          hi: "चेरी के ऊपर घोल डालें और 180°C पर 40 मिनट तक सुनहरा होने तक बेक करें। ऊपर से चीनी छिड़कें।"
        }
      }
    ]
  },
  // Recipe: salade_nicoise
  "salade_nicoise": {
    "title": {
      "fr": "Salade Niçoise Authentique",
      "en": "Classic Niçoise Salad",
      "te": "సలాడ్ నిస్వోయిస్ (రివేరా ఫ్రెష్ సలాడ్)",
      "hi": "सलाद निकोइस (क्लासिक फ्रेंच रिवेरा सलाद)"
    },
    "subtitle": {
      "fr": "Thon frais poêlé, haricots verts croquants, olives de Nice et œuf mollet.",
      "en": "Fresh seared tuna, haricots verts, Niçoise olives, tomatoes & soft eggs.",
      "te": "తాజా ట్యూనా, ఆలివ్‌లు మరియు ఉడికించిన గుడ్లతో చేసిన ఫ్రెంచ్ రివేరా సలాడ్.",
      "hi": "ताजा टूना, बीन्स, जैतून और उबले अंडे वाला क्लासिक फ्रेंच रिवेरा सलाद।"
    },
    "categoryLabel": {
      "fr": "Spécialité de la Riviera",
      "en": "Riviera Classic",
      "te": "రివేరా సంప్రదాయ వంటకం",
      "hi": "रिवेरा का क्लासिक व्यंजन"
    },
    "description": {
      "fr": "La fierté de Nice et de la Côte d'Azur : mesclun frais, haricots verts croquants blanchis, pommes de terre grenailles, tomates gorgées de soleil, petites olives cailletiers de Nice, filets d'anchois et pavé de thon rouge juste saisi, arrosés d'une vinaigrette citronnée aux herbes fraîches.",
      "en": "The pride of Nice and the Côte d'Azur: crisp mixed greens, tender blanched haricots verts, baby potatoes, sun-ripened tomatoes, tiny black Niçoise cailletier olives, anchovy fillets, and seared rare ahi tuna drizzled with a bright lemon-herb vinaigrette.",
      "te": "ఫ్రాన్స్‌లోని నీస్ నగరపు ప్రసిద్ధ వంటకం: తాజా ఆకుకూరలు, బంగాళాదుంపలు, టమోటాలు, నల్ల ఆలివ్‌లు మరియు సన్నగా కాల్చిన ట్యూనా చేపతో తయారు చేసిన పోషకభరిత సలాడ్.",
      "hi": "फ्रांस के नीस शहर का गौरव: ताजी हरी पत्तियां, उबली बीन्स, आलू, धूप में पके टमाटर, काले जैतून और हल्के भुने टूना फिश के साथ तैयार किया गया पौष्टिक सलाद।"
    },
    "wine": {
      "fr": "Côtes de Provence Rosé ou Bandol Blanc",
      "en": "Côtes de Provence Rosé or Bandol Blanc",
      "te": "కోట్స్ డి ప్రోవెన్స్ రోస్",
      "hi": "कोट्स डी प्रोवेंस रोसे"
    },
    "wineNotes": {
      "fr": "Un rosé pâle et minéral de Provence qui équilibre à merveille la chair savoureuse du thon et le sel fin des olives cailletiers.",
      "en": "A pale, dry Provencal rosé with crisp minerality cuts through the rich tuna and anchors the salty, savory olives and anchovies.",
      "te": "తాజా ప్రోవెన్సల్ రోస్ వైన్ ట్యూనా చేప మరియు ఆలివ్‌ల రుచిని అద్భుతంగా పెంచుతుంది.",
      "hi": "एक कुरकुरी सूखी रोसे वाइन जो टूना और नमकीन जैतून के स्वाद को बेहतरीन संतुलन देती है।"
    },
    "chefTip": {
      "fr": "Privilégiez d'authentiques petites olives cailletiers de Nice. Saisissez le pavé de thon sur feu très vif pendant 45 secondes seulement par face pour conserver un cœur rubis ultra-fondant.",
      "en": "Use authentic tiny black Niçoise olives (cailletier). Sear the tuna on scorching heat for just 45 seconds per side to leave a delicate ruby center.",
      "te": "అసలైన నిస్వోయిస్ నల్ల ఆలివ్‌లను ఉపయోగించండి. ట్యూనా చేపను కేవలం 45 సెకన్ల పాటు మాత్రమే వేయించండి.",
      "hi": "हमेशा असली नीस के काले जैतून का उपयोग करें और टूना को केवल 45 सेकंड के लिए तेज आंच पर भूनें ताकि बीच का हिस्सा रसीला रहे।"
    },
    "ingredients": [
      {
        "fr": "Pavé de thon frais de ligne",
        "en": "Fresh yellowfin or ahi tuna steak",
        "te": "తాజా ట్యూనా చేప ముక్క",
        "hi": "ताजा टूना मछली"
      },
      {
        "fr": "Haricots verts fins du potager",
        "en": "Tender French green beans (haricots verts)",
        "te": "తాజా ఫ్రెంచ్ బీన్స్",
        "hi": "ताजी हरी बीन्स"
      },
      {
        "fr": "Pommes de terre grenailles cuites",
        "en": "Baby new potatoes, boiled and halved",
        "te": "చిన్న బంగాళాదుంపలు",
        "hi": "छोटे उबले आलू"
      },
      {
        "fr": "Tomates mûres en quartiers",
        "en": "Ripe vine-ripened tomatoes, wedged",
        "te": "పండిన టమోటాలు",
        "hi": "पके हुए टमाटर"
      },
      {
        "fr": "Œufs frais de ferme mollets (6 min 30)",
        "en": "Farm-fresh eggs, soft-boiled (6.5 min)",
        "te": "ఉడికించిన గుడ్లు",
        "hi": "उबले हुए अंडे"
      },
      {
        "fr": "Olives noires cailletiers de Nice AOP",
        "en": "Authentic Niçoise black olives",
        "te": "నల్ల ఆలివ్‌లు",
        "hi": "काले जैतून"
      },
      {
        "fr": "Filets d'anchois marinés",
        "en": "Salt-cured Mediterranean anchovy fillets",
        "te": "ఆంకోవి ఫిల్లెట్లు",
        "hi": "एंकोवी मछली"
      },
      {
        "fr": "Huile d'olive vierge extra de Provence",
        "en": "Extra virgin Provencal olive oil",
        "te": "ఆలివ్ ఆయిల్",
        "hi": "जैतून का तेल"
      },
      {
        "fr": "Jus de citron frais et moutarde de Dijon",
        "en": "Fresh lemon juice & Dijon mustard",
        "te": "నిమ్మరసం మరియు ఆవాల పేస్ట్",
        "hi": "नींबू का रस और सरसों"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": {
          "fr": "Cuire légumes et œufs",
          "en": "Boil Vegetables and Eggs",
          "te": "కూరగాయలు మరియు గుడ్లు ఉడకబెట్టండి",
          "hi": "सब्जियां और अंडे उबालें"
        },
        "instruction": {
          "fr": "Cuisez les pommes de terre à l'eau bouillante salée. Blanchissez les haricots verts 3 minutes et plongez-les dans l'eau glacée. Cuisez les œufs mollets 6 min 30.",
          "en": "Boil baby potatoes until tender (12 min). Blanch haricots verts for 3 minutes and shock in ice water. Soft-boil eggs for 6.5 minutes and peel.",
          "te": "బంగాళాదుంపలు మరియు బీన్స్ ఉడకబెట్టండి. గుడ్లను 6.5 నిమిషాలు ఉడికించి పెంకు తీయండి.",
          "hi": "आलू और बीन्स को उबालें। अंडों को 6.5 मिनट तक उबालकर छील लें।"
        }
      },
      {
        "step": 2,
        "title": {
          "fr": "Émulsionner la vinaigrette",
          "en": "Whisk Vinaigrette",
          "te": "వినైగ్రేట్ కలపండి",
          "hi": "ड्रेसिंग तैयार करें"
        },
        "instruction": {
          "fr": "Fouettez l'huile d'olive, le jus de citron, la moutarde de Dijon, l'échalote hachée, sel et poivre du moulin.",
          "en": "Whisk extra virgin olive oil, lemon juice, Dijon mustard, minced shallot, sea salt, and black pepper until emulsified.",
          "te": "ఆలివ్ ఆయిల్, నిమ్మరసం, ఆవాలు, ఉప్పు మరియు మిరియాల పొడిని బాగా కలపండి.",
          "hi": "जैतून का तेल, नींबू का रस, सरसों, नमक और काली मिर्च को एक साथ फेंट लें।"
        }
      },
      {
        "step": 3,
        "title": {
          "fr": "Saisir le thon",
          "en": "Flash-Sear Tuna",
          "te": "చేపను వేయించండి",
          "hi": "मछली को हल्का भूनें"
        },
        "instruction": {
          "fr": "Badigeonnez le thon d'huile d'olive. Saisissez dans une poêle brûlante 45 secondes par face. Tranchez en beaux médaillons.",
          "en": "Rub tuna steaks with olive oil, salt, and pepper. Sear in a screaming-hot skillet for 45 seconds per side. Slice into thick medallions.",
          "te": "ట్యూనా చేపకు ఆయిల్ రాసి, వేడి పాన్‌పై రెండు వైపులా 45 సెకన్లు వేయించి ముక్కలుగా కోయండి.",
          "hi": "टूना पर तेल लगाकर तेज आंच पर दोनों तरफ 45 सेकंड भूनें और स्लाइस काट लें।"
        }
      },
      {
        "step": 4,
        "title": {
          "fr": "Dresser l'assiette",
          "en": "Compose and Dress",
          "te": "ప్లేట్‌లో సర్వ్ చేయండి",
          "hi": "सजाकर परोसें"
        },
        "instruction": {
          "fr": "Disposez harmonieusement légumes, olives, anchois et œufs sur un grand plat. Déposez le thon et nappez de vinaigrette.",
          "en": "Arrange crisp greens, potatoes, beans, tomatoes, halved soft-boiled eggs, olives, and anchovies on a wide platter. Crown with sliced tuna and drizzle vinaigrette.",
          "te": "ప్లేట్‌లో కూరగాయలు, గుడ్లు, ఆలివ్‌లు మరియు చేప ముక్కలను చక్కగా అమర్చి డ్రెస్సింగ్ చల్లండి.",
          "hi": "प्लेट में सब्जियां, अंडे, जैतून और टूना सजाकर ऊपर से ड्रेसिंग डालें।"
        }
      }
    ]
  },

  // Recipe: pissaladiere
  "pissaladiere": {
    "title": {
      "fr": "Pissaladière Provençale",
      "en": "Riviera Onion & Anchovy Tart",
      "te": "పిస్సాలదియర్ (ఉల్లిపాయ మరియు ఆలివ్ టార్ట్)",
      "hi": "पिसालादिएर (कारमेलाइज्ड प्याज और जैतून वाली टार्ट)"
    },
    "subtitle": {
      "fr": "Pâte à l'huile d'olive, compotée d'oignons fondants, anchois et olives noires.",
      "en": "Olive oil dough topped with caramelized onions, black olives & anchovy lattice.",
      "te": "నెమ్మదిగా వేయించిన ఉల్లిపాయలు మరియు ఆలివ్‌లతో చేసిన ఫ్రెంచ్ టార్ట్.",
      "hi": "धीमी आंच पर भूने मीठे प्याज और काले जैतून से बनी क्लासिक फ्रेंच टार्ट।"
    },
    "categoryLabel": {
      "fr": "Spécialité Niçoise",
      "en": "Riviera Specialty",
      "te": "రివేరా స్పెషాలిటీ",
      "hi": "रिवेरा की खास डिश"
    },
    "description": {
      "fr": "La reine des tartes salées du Midi : une pâte moelleuse parfumée à l'huile d'olive, généreusement recouverte d'une compotée d'oignons lentement confits au thym frais, parée de filets d'anchois en croisillons et de petites olives noires de Nice.",
      "en": "Nice's legendary savory tart: a fragrant olive-oil-scented bread dough blanketed with sweet, jammy slow-caramelized onions infused with thyme, arranged in a signature diamond lattice of salted anchovies and plump Niçoise olives.",
      "te": "ఫ్రెంచ్ తీరప్రాంత ప్రసిద్ధ బేక్డ్ టార్ట్: మెత్తని పిండిపై మగ్గించిన ఉల్లిపాయలు, ఆలివ్‌లు మరియు చేపలను అందమైన డైమండ్ ఆకారంలో అలంకరిస్తారు.",
      "hi": "फ्रांस की प्रसिद्ध नमकीन टार्ट: जैतून के तेल से गुंथे आटे पर धीमी आंच में पके मीठे प्याज, स्वादिष्ट काले जैतून और एंकोवी मछली सजाकर बेक की जाती है।"
    },
    "wine": {
      "fr": "Bellet Blanc ou Cassis Blanc",
      "en": "Bellet Blanc or Cassis Blanc",
      "te": "బెల్లెట్ బ్లాంక్ వైన్",
      "hi": "बेलेट ब्लैंक वाइन"
    },
    "wineNotes": {
      "fr": "Un blanc minéral et parfumé des coteaux maritimes qui tranche élégamment avec la douceur confite des oignons.",
      "en": "Crisp white wines from the Riviera coastal limestone hills deliver citrus zest that contrasts the deep natural sweetness of caramelized onions.",
      "te": "తీరప్రాంత వైట్ వైన్ ఉల్లిపాయల తీపిదనాన్ని మరియు ఆలివ్‌ల రుచిని అద్భుతంగా సమతుల్యం చేస్తుంది.",
      "hi": "एक ताजी सफेद वाइन जो कैरेमेलाइज्ड प्याज के मीठेपन और जैतून के नमकीन स्वाद को संतुलित करती है।"
    },
    "chefTip": {
      "fr": "Faites compoter les oignons à feu très doux avec un bon filet d'huile d'olive et du thym pendant 45 minutes sans les laisser brunir : ils doivent être doux et translucides.",
      "en": "Cook the onions very slowly over low heat with olive oil and thyme for at least 45 minutes without rushing. They should melt into sweet golden jam without browning.",
      "te": "ఉల్లిపాయలను తక్కువ మంటపై నెమ్మదిగా 45 నిమిషాలు వేయించండి. అవి మాడకుండా బంగారు రంగులోకి రావాలి.",
      "hi": "प्याज को धीमी आंच पर कम से कम 45 मिनट तक पकाएं ताकि वे बिना जले बिल्कुल मीठे और पारदर्शी हो जाएं।"
    },
    "ingredients": [
      {
        "fr": "Farine de blé pour pâte levée",
        "en": "Unbleached flour for olive oil dough",
        "te": "గోధుమ పిండి",
        "hi": "गेहूं का आटा"
      },
      {
        "fr": "Oignons jaunes émincés finement",
        "en": "Sweet yellow onions, thinly sliced",
        "te": "సన్నగా తరిగిన ఉల్లిపాయలు",
        "hi": "बारीक कटे प्याज"
      },
      {
        "fr": "Huile d'olive vierge extra",
        "en": "Extra virgin olive oil",
        "te": "ఆలివ్ ఆయిల్",
        "hi": "जैतून का तेल"
      },
      {
        "fr": "Branches de thym frais et laurier",
        "en": "Fresh thyme sprigs and bay leaf",
        "te": "థైమ్ మరియు బిర్యానీ ఆకు",
        "hi": "ताजा थाइम और तेजपत्ता"
      },
      {
        "fr": "Filets d'anchois salés à l'huile",
        "en": "Mediterranean salted anchovy fillets",
        "te": "ఆంకోవి చేపలు",
        "hi": "एंकोवी मछली"
      },
      {
        "fr": "Olives noires de Nice AOP",
        "en": "Small black Niçoise cailletier olives",
        "te": "నల్ల ఆలివ్‌లు",
        "hi": "काले जैतून"
      },
      {
        "fr": "Levure boulangère active",
        "en": "Fresh active dry yeast",
        "te": "ఈస్ట్",
        "hi": "यीस्ट"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": {
          "fr": "Pétrir la pâte",
          "en": "Prepare Dough",
          "te": "పిండి కలపండి",
          "hi": "आटा गूंथें"
        },
        "instruction": {
          "fr": "Mélangez farine, levure, eau tiède, sel et huile d'olive. Pétrissez 8 minutes et laissez lever 1 heure.",
          "en": "Mix flour, yeast, warm water, salt, and 2 tbsp olive oil into a supple dough. Knead 8 minutes and let rise for 1 hour until doubled.",
          "te": "పిండి, ఈస్ట్, నీరు, ఉప్పు మరియు ఆయిల్ కలిపి పిండి ముద్ద చేసి 1 గంట నానబెట్టండి.",
          "hi": "आटा, यीस्ट, पानी और तेल मिलाकर नरम आटा गूंथ लें और 1 घंटे के लिए फूलने दें।"
        }
      },
      {
        "step": 2,
        "title": {
          "fr": "Confire les oignons",
          "en": "Slow-Melt Onions",
          "te": "ఉల్లిపాయలు వేయించండి",
          "hi": "प्याज भूनें"
        },
        "instruction": {
          "fr": "Faites suer les oignons émincés dans l'huile d'olive avec le thym pendant 45 minutes à feu très doux.",
          "en": "Heat remaining olive oil in a wide pan over low heat. Add sliced onions, thyme, and bay leaf. Cook gently for 45 minutes until soft and caramelized.",
          "te": "ఉల్లిపాయలను ఆలివ్ ఆయిల్‌లో తక్కువ మంటపై 45 నిమిషాలు వేయించండి.",
          "hi": "धीमी आंच पर प्याज को थाइम के साथ 45 मिनट तक पकाएं जब तक वे पूरी तरह से नरम न हो जाएं।"
        }
      },
      {
        "step": 3,
        "title": {
          "fr": "Garnir la tarte",
          "en": "Roll and Top",
          "te": "టాపింగ్స్ వేయండి",
          "hi": "टॉपिंग्स सजाएं"
        },
        "instruction": {
          "fr": "Étalez la pâte, recouvrez de compotée d'oignons. Disposez les anchois en losanges et déposez une olive au centre de chaque losange.",
          "en": "Roll dough into a 1/4-inch rectangle on a baking sheet. Spread cooled onions evenly to the edges. Arrange anchovies in a crisscross diamond lattice and place an olive in each center.",
          "te": "పిండిని రోల్ చేసి ఉల్లిపాయల మిశ్రమం పూయండి. చేపలు మరియు ఆలివ్‌లతో డైమండ్ ఆకారంలో అలంకరించండి.",
          "hi": "आटे को बेलकर प्याज फैलाएं। ऊपर से मछली और जैतून से सुंदर डिजाइन बनाएं।"
        }
      },
      {
        "step": 4,
        "title": {
          "fr": "Cuire au four",
          "en": "Bake Golden",
          "te": "బేక్ చేయండి",
          "hi": "बेक करें"
        },
        "instruction": {
          "fr": "Enfournez à 220°C pendant 20 à 25 minutes jusqu'à ce que la pâte soit bien dorée et croustillante.",
          "en": "Bake at 220°C (425°F) for 20-25 minutes until the crust is deeply golden and blistered underneath.",
          "te": "220°C వద్ద 20-25 నిమిషాలు కరకరలాడే వరకు బేక్ చేయండి.",
          "hi": "220 डिग्री सेल्सियस पर 20-25 मिनट तक सुनहरा और कुरकुरा होने तक बेक करें।"
        }
      }
    ]
  },

  // Recipe: socca_nicoise
  "socca_nicoise": {
    "title": {
      "fr": "Socca Niçoise Authentique",
      "en": "Crisp Chickpea Street Flatbread",
      "te": "సొక్కా నిస్వోయిస్ (శనగపిండి క్రిస్పీ బ్రెడ్)",
      "hi": "सोका निकोइस (कुरकुरी बेसन फ्रेंच ब्रेड)"
    },
    "subtitle": {
      "fr": "Galette dorée de pois chiches cuite à très haute température, poivre noir et fleur de sel.",
      "en": "Blistered, paper-thin chickpea flatbread with sea salt & crushed pepper.",
      "te": "కరకరలాడే ఫ్రెంచ్ రివేరా శనగపిండి ఫ్లాట్‌బ్రెడ్.",
      "hi": "फ्रांस के नीस शहर की मशहूर कुरकुरी और गरमा-गरम बेसन ब्रेड।"
    },
    "categoryLabel": {
      "fr": "Cuisine de Rue Provençale",
      "en": "Riviera Street Food",
      "te": "స్ట్రీట్ ఫుడ్",
      "hi": "फ्रेंच स्ट्रीट फूड"
    },
    "description": {
      "fr": "L'incontournable délice des ruelles du Vieux-Nice : préparée simplement avec de la farine de pois chiches, de l'eau, de l'huile d'olive fruitée et du sel, coulée sur une plaque de cuivre brûlante et cuite au four à bois jusqu'à obtenir des bords croustillants et un cœur moelleux.",
      "en": "The iconic street food of Old Nice: made from simply chickpea flour, water, fruity olive oil, and rosemary, poured into a blisteringly hot pan and baked until the edges are shattered-crisp and the center remains soft and creamy.",
      "te": "నీస్ పాత నగరపు ప్రత్యేకమైన వీధి ఆహారం: శనగపిండి, నీరు మరియు ఆలివ్ ఆయిల్‌తో తయారు చేసి అత్యంత వేడి పాన్‌పై కాల్చే కరకరలాడే అల్పాహారం.",
      "hi": "पुराने नीस शहर का मशहूर स्ट्रीट फूड: केवल बेसन, पानी और जैतून के तेल से बना पतला बैटर, जिसे बेहद तेज आंच पर बेक करके कुरकुरा बनाया जाता है।"
    },
    "wine": {
      "fr": "Pastis de Marseille bien glacé ou Rosé de Provence",
      "en": "Chilled Pastis de Marseille or Bandol Rosé",
      "te": "పాస్టిస్ లేదా ప్రోవెన్స్ రోస్ వైన్",
      "hi": "पास्टिस या प्रोवेंस रोसे वाइन"
    },
    "wineNotes": {
      "fr": "Un pastis allongé d'eau très fraîche ou un rosé sec souligne les notes grillées du pois chiche et le poivre fraîchement moulu.",
      "en": "An anise-scented Pastis with cold water or a mineral-driven Rosé matches the earthy nuttiness of roasted chickpea and peppery olive oil.",
      "te": "చల్లని పాస్టిస్ లేదా రోస్ వైన్ శనగపిండి మరియు మిరియాల ఘాటుతో పరిపూర్ణంగా సరిపోతుంది.",
      "hi": "सौंफ की सुगंध वाला पास्टिस या सूखी रोसे वाइन बेसन के सोंधेपन को शानदार स्वाद देती है।"
    },
    "chefTip": {
      "fr": "Chauffez préalablement votre poêle en fonte sous le grill du four jusqu'à ce qu'elle soit fumante avant de verser la pâte. C'est le secret pour obtenir les fameuses cloques dorées.",
      "en": "Preheat your cast iron skillet under the oven broiler until smoking hot before pouring in the batter. This ensures rapid blistering and authentic charred crust.",
      "te": "పిండి పోయడానికి ముందు పాన్‌ను ఓవెన్‌లో బాగా వేడి చేయండి. ఇది కరకరలాడే అంచులను అందిస్తుంది.",
      "hi": "बैटर डालने से पहले लोहे के तवे को ओवन में खूब गरम कर लें ताकि ऊपर से सुंदर और कुरकुरी परत बने।"
    },
    "ingredients": [
      {
        "fr": "Farine fine de pois chiches",
        "en": "Fine chickpea flour (farine de pois chiches)",
        "te": "శనగపిండి",
        "hi": "बारीक बेसन"
      },
      {
        "fr": "Eau tiède filtrée",
        "en": "Lukewarm filtered water",
        "te": "గోరువెచ్చని నీరు",
        "hi": "गुनगुना पानी"
      },
      {
        "fr": "Huile d'olive vierge extra de Provence",
        "en": "Extra virgin Provencal olive oil",
        "te": "ఆలివ్ ఆయిల్",
        "hi": "जैतून का तेल"
      },
      {
        "fr": "Fleur de sel de Camargue",
        "en": "Flaky fleur de sel sea salt",
        "te": "సముద్రపు ఉప్పు",
        "hi": "सेंधा नमक"
      },
      {
        "fr": "Poivre noir fraîchement concassé",
        "en": "Coarsely ground black pepper",
        "te": "నల్ల మిరియాల పొడి",
        "hi": "कुटी हुई काली मिर्च"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": {
          "fr": "Préparer la pâte",
          "en": "Whisk Batter",
          "te": "పిండి కలపండి",
          "hi": "बैटर बनाएं"
        },
        "instruction": {
          "fr": "Fouettez la farine de pois chiches et l'eau jusqu'à consistance fluide et sans grumeaux. Ajoutez l'huile d'olive et le sel. Reposez 1 heure.",
          "en": "Whisk chickpea flour and water until completely lump-free. Stir in 2 tbsp olive oil and salt. Let rest at room temperature for 1 hour.",
          "te": "శనగపిండి మరియు నీటిని ఉండలు లేకుండా కలపండి. ఆయిల్ మరియు ఉప్పు చేర్చి 1 గంట పక్కన పెట్టండి.",
          "hi": "बेसन और पानी को बिना गांठ के फेंट लें। तेल और नमक डालकर 1 घंटे रख दें।"
        }
      },
      {
        "step": 2,
        "title": {
          "fr": "Préchauffer la poêle",
          "en": "Preheat Skillet",
          "te": "పాన్ వేడి చేయండి",
          "hi": "तवा गरम करें"
        },
        "instruction": {
          "fr": "Placez une grande poêle en fonte sous le grill à puissance maximale pendant 10 minutes.",
          "en": "Place a 12-inch cast iron skillet on the highest rack of your oven and turn broiler to MAX for 10 minutes until sizzling hot.",
          "te": "కాస్ట్ ఐరన్ పాన్‌ను ఓవెన్‌లో అత్యధిక వేడి వద్ద 10 నిమిషాలు వేడి చేయండి.",
          "hi": "तवे को ओवन में 10 मिनट के लिए सबसे तेज आंच पर गरम करें।"
        }
      },
      {
        "step": 3,
        "title": {
          "fr": "Verser et griller",
          "en": "Pour and Broil",
          "te": "కాల్చండి",
          "hi": "बेक करें"
        },
        "instruction": {
          "fr": "Huilez la poêle, versez une fine couche de pâte de 3 mm et enfournez sous le grill 6 à 8 minutes jusqu'à cloquage doré.",
          "en": "Carefully coat the skillet with 2 tbsp olive oil, pour batter to form a 1/8-inch thin layer, and broil 6-8 minutes until golden with dark charred blisters.",
          "te": "పాన్‌పై ఆయిల్ రాసి పిండి పోసి 6-8 నిమిషాలు బంగారు రంగు వచ్చే వరకు కాల్చండి.",
          "hi": "तवे पर तेल लगाकर पतला बैटर डालें और 6-8 मिनट सुनहरा होने तक ग्रिल करें।"
        }
      },
      {
        "step": 4,
        "title": {
          "fr": "Assaisonner et savourer",
          "en": "Season and Serve",
          "te": "సర్వ్ చేయండి",
          "hi": "गरमा-गरम परोसें"
        },
        "instruction": {
          "fr": "Glissez sur une planche, donnez plusieurs tours généreux de moulin à poivre, parsemez de fleur de sel et dégustez brûlant.",
          "en": "Slide onto a wooden board, shower generously with freshly cracked black pepper and flaky sea salt, and tear into irregular pieces to enjoy hot.",
          "te": "బోర్డుపైకి తీసి నల్ల మిరియాల పొడి మరియు ఉప్పు చల్లి వేడివేడిగా ఆస్వాదించండి.",
          "hi": "काली मिर्च और नमक छिड़क कर तुरंत गरमा-गरम परोसें।"
        }
      }
    ]
  },

  // Recipe: daube_provencale
  "daube_provencale": {
    "title": {
      "fr": "Daube Provençale Traditionnelle",
      "en": "Slow-Braised Provençal Beef & Orange Stew",
      "te": "దాబ్ ప్రొవెన్సాల్ (ఎరుపు వైన్ మరియు ఆరెంజ్ బీఫ్ స్టీవ్)",
      "hi": "दाब प्रोवेनसाल (रेड वाइन और संतरे के छिलके वाला बीफ स्टू)"
    },
    "subtitle": {
      "fr": "Bœuf fondant mariné et mijoté au vin rouge, zeste d'orange et herbes de Provence.",
      "en": "Melt-in-mouth beef braised with robust red wine, orange peel & wild herbs.",
      "te": "ఎరుపు వైన్, వెల్లుల్లి మరియు ఆరెంజ్ తొక్కతో మగ్గించిన మెత్తని సంప్రదాయ స్టీవ్.",
      "hi": "रेड वाइन, लहसुन और संतरे के छिलके की खुशबूदार ग्रेवी में पका स्वादिष्ट फ्रेंच स्टू।"
    },
    "categoryLabel": {
      "fr": "Plat Mijoté Provençal",
      "en": "Provençal Slow Stew",
      "te": "ప్రొవెన్సల్ స్టీవ్",
      "hi": "धीमी आंच पर पका स्टू"
    },
    "description": {
      "fr": "Le chef-d'œuvre de la cuisine provençale des dimanches d'hiver : de beaux morceaux de paleron et de gîte marinés 24 heures dans un vin rouge corsé avec zeste d'orange, clous de girofle et thym sauvage, puis mijotés lentement en daubière pendant 4 heures jusqu'à tendreté absolue.",
      "en": "A monumental heirloom stew from Provence: succulent chunks of beef chuck and shank marinated overnight in full-bodied red wine with orange peel, cloves, garlic, and thyme, then slow-simmered in an earthenware daubière until collapsing into rich gravy.",
      "te": "ప్రోవెన్స్ సంప్రదాయ స్టీవ్: ఎరుపు వైన్, ఆరెంజ్ తొక్క మరియు సుగంధ ద్రవ్యాలలో రాత్రంతా నానబెట్టి, 4 గంటలు నెమ్మదిగా ఉడికించిన అత్యంత రుచికరమైన వంటకం.",
      "hi": "प्रोवेंस का एक ऐतिहासिक व्यंजन: रेड वाइन, संतरे के छिलके, लौंग और थाइम में 24 घंटे मैरीनेट किया हुआ बीफ, जिसे 4 घंटे धीमी आंच पर गाढ़ी ग्रेवी में पकाया जाता है।"
    },
    "wine": {
      "fr": "Bandol Rouge (Mourvèdre) ou Gigondas",
      "en": "Bandol Rouge (Mourvèdre) or Gigondas",
      "te": "బాండోల్ రెడ్ వైన్",
      "hi": "बांडोल रेड वाइन"
    },
    "wineNotes": {
      "fr": "Un rouge puissant et épicé aux arômes de garrigue et de mûre sauvage qui s'accorde magistralement au parfum d'orange de la daube.",
      "en": "A powerful, spicy southern Rhône or Bandol red with notes of dark blackberry and garrigue herbs elevates the orange-infused braise.",
      "te": "గాఢమైన రెడ్ వైన్ ఆరెంజ్ సువాసనతో కూడిన గ్రేవీకి చక్కటి జత.",
      "hi": "एक गाढ़ी मसालेदार रेड वाइन जो संतरे की सुगंध वाले इस स्टू के स्वाद को दोगुना कर देती है।"
    },
    "chefTip": {
      "fr": "Ne négligez surtout pas le ruban d'écorce d'orange fraîche dans la marinade : en cuisant 4 heures, il apporte cette subtilité aromatique inimitable propre à la véritable daube provençale.",
      "en": "Do not omit the strip of fresh orange peel! As it simmers for 4 hours, it dissolves and cuts through the intense meat richness with pure Provencal elegance.",
      "te": "తాజా ఆరెంజ్ తొక్కను తప్పకుండా వేయండి. 4 గంటల పాటు ఉడికినప్పుడు ఇది అద్భుతమైన సువాసనను ఇస్తుంది.",
      "hi": "संतरे के छिलके को बिल्कुल न भूलें! 4 घंटे पकने पर यह ग्रेवी को एक लाजवाब खुशबू और हल्का खट्टापन देता है।"
    },
    "ingredients": [
      {
        "fr": "Paleron ou gîte de bœuf en gros cubes",
        "en": "Braeburn beef chuck or shank, cut in 2-inch chunks",
        "te": "బీఫ్ ముక్కలు",
        "hi": "बीफ के टुकड़े"
      },
      {
        "fr": "Vin rouge corsé des Côtes du Rhône",
        "en": "Full-bodied red wine (Côtes du Rhône)",
        "te": "రెడ్ వైన్",
        "hi": "रेड वाइन"
      },
      {
        "fr": "Rubans de zeste d'orange biologique",
        "en": "Fresh organic orange zest peel strips",
        "te": "ఆరెంజ్ తొక్క ముక్కలు",
        "hi": "संतरे के छिलके की पट्टी"
      },
      {
        "fr": "Carottes coupées en rondelles",
        "en": "Carrots, sliced in rounds",
        "te": "క్యారెట్ ముక్కలు",
        "hi": "गाजर के गोल टुकड़े"
      },
      {
        "fr": "Lardons fumés fermiers",
        "en": "Smoked bacon lardons",
        "te": "స్మోక్డ్ బేకన్",
        "hi": "स्मोक्ड बेकन"
      },
      {
        "fr": "Gousses d'ail écrasées",
        "en": "Garlic cloves, crushed",
        "te": "వెల్లుల్లి రెబ్బలు",
        "hi": "लहसुन की कलियां"
      },
      {
        "fr": "Bouquet garni et thym frais",
        "en": "Fresh Herbes de Provence & bay leaf",
        "te": "థైమ్ మరియు బిర్యానీ ఆకులు",
        "hi": "थाइम और तेजपत्ता"
      },
      {
        "fr": "Olives noires dénoyautées",
        "en": "Pitted black olives",
        "te": "నల్ల ఆలివ్‌లు",
        "hi": "काले जैतून"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": {
          "fr": "Mariner 24 heures",
          "en": "Marinate Overnight",
          "te": "రాత్రంతా నానబెట్టండి",
          "hi": "मैरीनेट करें"
        },
        "instruction": {
          "fr": "Placez la viande, les légumes, l'ail, le thym et le zeste d'orange dans le vin rouge. Réservez 24 heures au frais.",
          "en": "Submerge beef chunks in red wine with carrots, onions, garlic, thyme, and orange peel. Marinate in refrigerator for 12 to 24 hours.",
          "te": "మాంసం, కూరగాయలు, ఆరెంజ్ తొక్క మరియు సుగంధ ద్రవ్యాలను వైన్‌లో 24 గంటలు నానబెట్టండి.",
          "hi": "रेड वाइन में मीट, गाजर, लहसुन, थाइम और संतरे का छिलका डालकर 24 घंटे रखें।"
        }
      },
      {
        "step": 2,
        "title": {
          "fr": "Rissoler la viande",
          "en": "Brown Bacon and Meat",
          "te": "మాంసాన్ని వేయించండి",
          "hi": "मीट को भूनें"
        },
        "instruction": {
          "fr": "Faites dorer les lardons, égouttez la viande et saisissez-la vivement dans la cocotte sur toutes les faces.",
          "en": "Render lardons in a heavy Dutch oven. Pat marinated beef dry and sear in batches over high heat until deeply crusty.",
          "te": "బేకన్ వేయించి, మాంసం ముక్కలను వేడి పాత్రలో అన్ని వైపులా గోధుమ రంగు వచ్చే వరకు వేయించండి.",
          "hi": "बर्तन में बेकन भूनें, फिर मीट के टुकड़ों को तेज आंच पर अच्छी तरह लाल होने तक भूनें।"
        }
      },
      {
        "step": 3,
        "title": {
          "fr": "Mijoter lentement",
          "en": "Deglaze and Simmer",
          "te": "నెమ్మదిగా ఉడికించండి",
          "hi": "धीमी आंच पर पकाएं"
        },
        "instruction": {
          "fr": "Versez la marinade filtrée et les légumes. Couvrez hermétiquement et enfournez à 140°C pendant 3h30 à 4h.",
          "en": "Pour marinade, vegetables, and beef broth over the meat. Bring to a simmer, cover tightly, and braise in oven at 140°C (285°F) for 3.5 to 4 hours.",
          "te": "వైన్ మరియు కూరగాయలను పోసి మూతపెట్టి 140°C వద్ద 3.5 నుండి 4 గంటలు ఉడికించండి.",
          "hi": "मैरिनेड और सब्जियों को डालकर ढक दें और 140 डिग्री पर 4 घंटे धीमी आंच पर पकने दें।"
        }
      },
      {
        "step": 4,
        "title": {
          "fr": "Ajouter les olives",
          "en": "Finish with Olives",
          "te": "ఆలివ్‌లు వేసి సర్వ్ చేయండి",
          "hi": "जैतून डालकर परोसें"
        },
        "instruction": {
          "fr": "Ajoutez les olives 15 minutes avant la fin. Servez fumant avec des tagliatelles fraîches au beurre.",
          "en": "Stir in black olives for the final 15 minutes. Serve hot over buttered fresh tagliatelle or crusty country bread.",
          "te": "చివరి 15 నిమిషాల్లో ఆలివ్‌లు కలపండి. తాజా పాస్తా లేదా బ్రెడ్‌తో వేడిగా వడ్డించండి.",
          "hi": "आखिरी 15 मिनट में जैतून डालें और गरमा-गरम पास्ता या ब्रेड के साथ परोसें।"
        }
      }
    ]
  },

  // Recipe: camembert_roti
  "camembert_roti": {
    "title": {
      "fr": "Camembert Rôti au Four",
      "en": "Baked Normandy Camembert with Honey & Herbs",
      "te": "బేక్డ్ కేమెంబర్ట్ చీజ్ (తేనె మరియు రోజ్మేరీతో)",
      "hi": "बेक्ड कैमेम्बर्ट चीज (शहद और हर्ब्स के साथ)"
    },
    "subtitle": {
      "fr": "Camembert de Normandie coulant au miel sauvage, romarin frais et toasts croustillants.",
      "en": "Molten baked Normandy Camembert with wild honey, garlic & rosemary.",
      "te": "కరిగిన వెన్న లాంటి ఫ్రెంచ్ నార్మండీ చీజ్ వంటకం.",
      "hi": "पिघला हुआ गरम कैमेम्बर्ट चीज, जिसे शहद और गार्लिक ब्रेड के साथ खाया जाता है।"
    },
    "categoryLabel": {
      "fr": "Classique Normand",
      "en": "Normandy Classic",
      "te": "నార్మండీ క్లాసిక్",
      "hi": "नॉर्मंडी क्लासिक"
    },
    "description": {
      "fr": "Le plaisir gourmand par excellence de Normandie : une boîte en bois de Camembert AOP au lait cru cuite au four jusqu'à devenir onctueuse et coulante, parfumée de fines lamelles d'ail, de brins de romarin et d'un filet de miel de fleurs sauvages.",
      "en": "Normandy's most decadent comfort food: an entire wheel of raw-milk Camembert cheese baked in its wooden box until molten and bubbling, infused with garlic slivers, fresh rosemary sprigs, and a drizzle of lavender honey.",
      "te": "ఫ్రెంచ్ నార్మండీ అత్యంత రుచికరమైన చీజ్ వంటకం: చెక్క పెట్టెలో ఉంచి ఓవెన్‌లో కాల్చిన కరిగే చీజ్, వెల్లుల్లి, తేనె మరియు రోజ్మేరీ సువాసనలతో.",
      "hi": "नॉर्मंडी का सबसे प्रसिद्ध आरामदायक भोजन: लकड़ी के डिब्बे में बेक किया हुआ मलाईदार कैमेम्बर्ट चीज, जिसमें शहद, लहसुन और रोजमेरी का अनोखा स्वाद होता है।"
    },
    "wine": {
      "fr": "Cidre Brut de Normandie ou Chenin Blanc",
      "en": "Cidre Brut de Normandie or Chenin Blanc",
      "te": "నార్మండీ యాపిల్ సైడర్",
      "hi": "नॉर्मंडी ड्राई एप्पल साइडर"
    },
    "wineNotes": {
      "fr": "Un cidre fermier normand pétillant et sec dont la fraîcheur acidulée coupe admirablement l'onctuosité riche du fromage fondu.",
      "en": "Crisp sparkling Normandy dry apple cider cuts cleanly through the unctuous, rich creaminess of melted Camembert.",
      "te": "చల్లని ఆపిల్ సైడర్ కరిగిన చీజ్ యొక్క క్రీమీ రుచిని మరింత ఆహ్లాదకరంగా మారుస్తుంది.",
      "hi": "स्पार्कलिंग ड्राई एप्पल साइडर पिघले हुए चीज के भारीपन को काटकर एक ताज़ा अहसास देता है।"
    },
    "chefTip": {
      "fr": "Entaillez délicatement la croûte supérieure en croisillons avant cuisson et insérez-y les éclats d'ail et le romarin. Emballez le fond de la boîte de papier d'aluminium pour éviter tout débordement.",
      "en": "Score the top rind in a diamond pattern before baking and wrap the base of the wooden box in foil to catch any bubbling molten cheese.",
      "te": "చీజ్ పైభాగాన్ని డైమండ్ ఆకారంలో కోసి వెల్లుల్లి, రోజ్మేరీ ముక్కలను ఉంచండి. కింద అల్యూమినియం ఫాయిల్ పెట్టండి.",
      "hi": "चीज के ऊपरी हिस्से पर चीरे लगाकर लहसुन और रोजमेरी भरें और डिब्बे के नीचे फॉयल लगाएं ताकि चीज बाहर न बहे।"
    },
    "ingredients": [
      {
        "fr": "Véritable Camembert de Normandie AOP en boîte",
        "en": "Whole wheel of authentic Normandy Camembert (in wooden box)",
        "te": "నార్మండీ కేమెంబర్ట్ చీజ్",
        "hi": "कैमेम्बर्ट चीज का पूरा डिब्बा"
      },
      {
        "fr": "Gousses d'ail émincées en lamelles",
        "en": "Garlic cloves, thinly sliced",
        "te": "వెల్లుల్లి ముక్కలు",
        "hi": "बारीक कटी लहसुन की कलियां"
      },
      {
        "fr": "Brins de romarin frais",
        "en": "Fresh rosemary needles",
        "te": "రోజ్మేరీ ఆకులు",
        "hi": "ताजा रोजमेरी"
      },
      {
        "fr": "Miel sauvage de lavande ou de fleurs",
        "en": "Wild wildflower or lavender honey",
        "te": "స్వచ్ఛమైన తేనె",
        "hi": "शुद्ध शहद"
      },
      {
        "fr": "Baguette de tradition française tranchée",
        "en": "Crusty French baguette, sliced",
        "te": "ఫ్రెంచ్ బాకెట్ బ్రెడ్",
        "hi": "फ्रेंच बैगेट ब्रेड"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": {
          "fr": "Préparer la boîte",
          "en": "Unwrap and Score",
          "te": "చీజ్‌ను సిద్ధం చేయండి",
          "hi": "चीज तैयार करें"
        },
        "instruction": {
          "fr": "Ôtez le papier protecteur, replacez le fromage dans sa boîte en bois et entaillez la croûte en losanges.",
          "en": "Remove plastic wrapping and place cheese back in its bottom wooden box. Score top rind in a diamond pattern.",
          "te": "ప్లాస్టిక్ తీసి చీజ్‌ను చెక్క బాక్స్‌లో ఉంచండి. పైభాగాన్ని డైమండ్ ఆకారంలో కట్ చేయండి.",
          "hi": "प्लास्टिक हटाकर चीज को लकड़ी के डिब्बे में रखें और ऊपर से चीरा लगाएं।"
        }
      },
      {
        "step": 2,
        "title": {
          "fr": "Garnir d'aromates",
          "en": "Stud and Drizzle",
          "te": "తేనె మరియు మూలికలు వేయండి",
          "hi": "शहद और लहसुन डालें"
        },
        "instruction": {
          "fr": "Insérez les lamelles d'ail et le romarin dans les fentes. Nappez de miel et d'une goutte de vin blanc.",
          "en": "Tuck garlic slivers and rosemary needles into the cuts. Drizzle with honey and a splash of white wine.",
          "te": "వెల్లుల్లి, రోజ్మేరీ ఉంచి తేనె చల్లండి.",
          "hi": "चीरों में लहसुन और रोजमेरी डालें और ऊपर से शहद डालें।"
        }
      },
      {
        "step": 3,
        "title": {
          "fr": "Cuire au four",
          "en": "Bake Molten",
          "te": "ఓవెన్‌లో బేక్ చేయండి",
          "hi": "बेक करें"
        },
        "instruction": {
          "fr": "Enfournez à 190°C pendant 15 à 18 minutes jusqu'à ce que le centre soit chaud et totalement liquide.",
          "en": "Bake at 190°C (375°F) for 15-18 minutes until puffed, golden, and liquid in the center.",
          "te": "190°C వద్ద 15-18 నిమిషాలు చీజ్ కరిగే వరకు బేక్ చేయండి.",
          "hi": "190 डिग्री पर 15-18 मिनट बेक करें जब तक चीज पूरी तरह पिघल न जाए।"
        }
      },
      {
        "step": 4,
        "title": {
          "fr": "Déguster à la baguette",
          "en": "Dip and Enjoy",
          "te": "బ్రెడ్‌తో ఆస్వాదించండి",
          "hi": "ब्रेड के साथ खाएं"
        },
        "instruction": {
          "fr": "Servez immédiatement au centre de la table avec des tranches de baguette chaude croustillante.",
          "en": "Serve immediately with warm toasted baguette slices, crisp apple wedges, and cornichons.",
          "te": "వేడి బ్రెడ్ ముక్కలతో ముంచి వెంటనే ఆస్వాదించండి.",
          "hi": "गरमा-गरम टोस्टेड ब्रेड के साथ डिप करके तुरंत परोसें।"
        }
      }
    ]
  },

  // Recipe: poulet_vallee_d_auge
  "poulet_vallee_d_auge": {
    "title": {
      "fr": "Poulet Vallée d'Auge",
      "en": "Normandy Chicken in Cider, Calvados & Cream",
      "te": "నార్మండీ చికెన్ (యాపిల్ సైడర్ మరియు క్రీమ్‌తో)",
      "hi": "नॉर्मंडी चिकन (सेब साइडर, क्रीम और कैल्वाडोस ग्रेवी)"
    },
    "subtitle": {
      "fr": "Poulet fermier doré flambé au Calvados, mijoté au cidre brut et crème fraîche d'Isigny.",
      "en": "Farmhouse chicken braised in crisp apple cider, Calvados & velvety cream.",
      "te": "ఫ్రెంచ్ నార్మండీ శైలిలో యాపిల్స్ మరియు క్రీమ్‌తో వండిన జ్యుసి చికెన్.",
      "hi": "सेब के टुकड़ों, ताजे मक्खन और रिच क्रीम में बना फ्रांस का पारंपरिक चिकन।"
    },
    "categoryLabel": {
      "fr": "Spécialité du Bocage Normand",
      "en": "Normandy Country Classic",
      "te": "నార్మండీ స్పెషాలిటీ",
      "hi": "नॉर्मंडी की पारंपरिक डिश"
    },
    "description": {
      "fr": "L'âme des vergers de pommiers normands : des morceaux de poulet fermier dorés au beurre doux, flambés au vieux Calvados, braisés avec du cidre fermier acidulé, puis nappés d'une sauce veloutée à la crème d'Isigny et accompagnés de quartiers de pommes caramélisées.",
      "en": "The essence of Normandy's apple orchard valley: tender golden chicken seared in butter, flambéed with Calvados apple brandy, simmered with tart crisp cider and shallots, then enriched with heavy Normandy cream and caramelized apple quarters.",
      "te": "నార్మండీ యాపిల్ తోటల ప్రత్యేకత: వెన్నలో వేయించిన చికెన్, యాపిల్ బ్రాందీతో ఫ్లేమ్ చేసి, సైడర్ మరియు ఫ్రెంచ్ క్రీమ్‌తో ఉడికించిన అద్భుతమైన వంటకం.",
      "hi": "नॉर्मंडी के सेब के बागानों का स्वाद: मक्खन में तला चिकन, कैल्वाडोस ब्रांडी में फ्लेम्ब्ड, खट्टे सेब साइडर और गाढ़ी क्रीम की ग्रेवी में पकाया गया स्वादिष्ट व्यंजन।"
    },
    "wine": {
      "fr": "Cidre Fermier de Normandie ou Meursault",
      "en": "Cidre Fermier de Normandie or Meursault Chardonnay",
      "te": "నార్మండీ సైడర్ లేదా షార్డోనే వైన్",
      "hi": "नॉर्मंडी साइडर या मीरसॉल्ट वाइन"
    },
    "wineNotes": {
      "fr": "Un cidre bouché brut ou un grand Chardonnay blanc de Bourgogne sublime la douceur fruitée des pommes et la richesse de la crème.",
      "en": "Traditional sparkling dry farmhouse cider or an oaky white Burgundy brings harmony to the sweet-tart apples and lush velvety sauce.",
      "te": "యాపిల్ సైడర్ లేదా వైట్ వైన్ ఈ క్రీమీ చికెన్ గ్రేవీకి ఎంతో రుచినిస్తుంది.",
      "hi": "पारंपरिक एप्पल साइडर या व्हाइट वाइन सेब के खट्टे-मीठे स्वाद और मलाईदार ग्रेवी से पूरी तरह मेल खाती है।"
    },
    "chefTip": {
      "fr": "Faites caraméliser les quartiers de pommes séparément dans du beurre moussant avec une pincée de sucre, et ajoutez-les dans la cocotte seulement au moment de servir pour qu'elles restent entières.",
      "en": "Sauté the apple quarters separately in foaming butter until golden and caramelized, then gently fold them into the creamy sauce right before plating.",
      "te": "యాపిల్ ముక్కలను విడిగా వెన్నలో వేయించి, వడ్డించే ముందు మాత్రమే గ్రేవీలో కలపండి.",
      "hi": "सेब के टुकड़ों को मक्खन में अलग से सुनहरा होने तक भूनें और परोसने से ठीक पहले ग्रेवी में मिलाएं ताकि वे टूटें नहीं।"
    },
    "ingredients": [
      {
        "fr": "Morceaux de poulet fermier de qualité",
        "en": "Bone-in chicken thighs and drumsticks",
        "te": "చికెన్ ముక్కలు",
        "hi": "चिकन के टुकड़े"
      },
      {
        "fr": "Cidre de pomme brut de Normandie",
        "en": "Dry sparkling Normandy apple cider",
        "te": "నార్మండీ యాపిల్ సైడర్",
        "hi": "ड्राई एप्पल साइडर"
      },
      {
        "fr": "Calvados (eau-de-vie de cidre)",
        "en": "Calvados apple brandy",
        "te": "కాల్వాడోస్ యాపిల్ బ్రాందీ",
        "hi": "कैल्वाडोस एप्पल ब्रांडी"
      },
      {
        "fr": "Crème fraîche épaisse d'Isigny AOP",
        "en": "Heavy Normandy cream (crème fraîche)",
        "te": "ఫ్రెంచ్ క్రీమ్",
        "hi": "ताजा गाढ़ी क्रीम"
      },
      {
        "fr": "Pommes reinettes acidulées en quartiers",
        "en": "Tart crisp apples (Cox or Reinette), quartered",
        "te": "యాపిల్ ముక్కలు",
        "hi": "खट्टे-मीठे सेब के टुकड़े"
      },
      {
        "fr": "Beurre de Normandie doux",
        "en": "Normandy salted butter",
        "te": "నార్మండీ వెన్న",
        "hi": "नॉर्मंडी मक्खन"
      },
      {
        "fr": "Échalotes françaises ciselées",
        "en": "French shallots, finely minced",
        "te": "ఉల్లిపాయలు",
        "hi": "कटे हुए प्याज"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": {
          "fr": "Dorer le poulet",
          "en": "Sear Chicken",
          "te": "చికెన్ వేయించండి",
          "hi": "चिकन भूनें"
        },
        "instruction": {
          "fr": "Colorez les morceaux de poulet au beurre jusqu'à ce que la peau soit bien croustillante. Réservez sur une assiette.",
          "en": "Brown seasoned chicken in butter over medium-high heat until skin is crisp and deep golden. Transfer to a plate.",
          "te": "చికెన్‌ను వెన్నలో గోధుమ రంగు వచ్చే వరకు వేయించి పక్కన పెట్టండి.",
          "hi": "चिकन को मक्खन में त्वचा सुनहरी और कुरकुरी होने तक भूनें और अलग निकाल लें।"
        }
      },
      {
        "step": 2,
        "title": {
          "fr": "Flamber au Calvados",
          "en": "Flambé with Calvados",
          "te": "కాల్వాడోస్‌తో ఫ్లేమ్ చేయండి",
          "hi": "कैल्वाडोस से फ्लेम्ब्ड करें"
        },
        "instruction": {
          "fr": "Faites suer les échalotes dans la poêle. Versez le Calvados et flambez soigneusement.",
          "en": "Sauté shallots in the pan. Pour in Calvados and carefully ignite with a long match to flambé the alcohol.",
          "te": "ఉల్లిపాయలను వేయించి, కాల్వాడోస్ పోసి జాగ్రత్తగా మంట వెలిగించండి.",
          "hi": "प्याज भूनें, फिर कैल्वाडोस डालकर सावधानी से माचिस से फ्लेम्ब्ड करें।"
        }
      },
      {
        "step": 3,
        "title": {
          "fr": "Mijoter au cidre",
          "en": "Braise in Cider",
          "te": "సైడర్‌లో ఉడికించండి",
          "hi": "साइडर में पकाएं"
        },
        "instruction": {
          "fr": "Mouillez au cidre, replacez le poulet, couvrez et laissez mijoter 30 minutes à feu doux.",
          "en": "Pour in cider, return chicken, cover and simmer gently for 30 minutes until meat is cooked through and tender.",
          "te": "సైడర్ పోసి, చికెన్ వేసి మూతపెట్టి 30 నిమిషాలు ఉడికించండి.",
          "hi": "साइडर डालें, चिकन वापस रखें और 30 मिनट ढककर धीमी आंच पर पकाएं।"
        }
      },
      {
        "step": 4,
        "title": {
          "fr": "Crémer et garnir de pommes",
          "en": "Finish Sauce and Apples",
          "te": "క్రీమ్ మరియు యాపిల్స్ కలపండి",
          "hi": "क्रीम और सेब मिलाएं"
        },
        "instruction": {
          "fr": "Incorporez la crème fraîche dans la sauce. Dorez les quartiers de pommes au beurre et disposez harmonieusement sur le plat.",
          "en": "Sauté apple wedges in butter until golden. Stir crème fraîche into the pan sauce, reduce until glossy, and serve over chicken and apples.",
          "te": "గ్రేవీలో క్రీమ్ కలపండి. వేయించిన యాపిల్స్ చికెన్ పైన ఉంచి సర్వ్ చేయండి.",
          "hi": "सॉस में क्रीम मिलाएं। सेब के टुकड़ों को मक्खन में भूनकर चिकन के ऊपर सजाएं।"
        }
      }
    ]
  },

  // Recipe: sole_meuniere
  "sole_meuniere": {
    "title": {
      "fr": "Sole Meunière Traditionnelle",
      "en": "Classic Dover Sole in Brown Butter & Lemon",
      "te": "సోల్ మెనియర్ (వెన్న మరియు నిమ్మరసంతో కాల్చిన చేప)",
      "hi": "सोल मेनिएर (ब्राउन बटर और नींबू की सॉस वाली मछली)"
    },
    "subtitle": {
      "fr": "Sole entière farinée dorée au beurre noisette moussant, citron jaune et persil plat.",
      "en": "Pan-fried Channel Dover sole in nutty brown butter, lemon & fresh parsley.",
      "te": "వెన్నలో కాల్చిన సున్నితమైన ఫ్రెంచ్ సముద్ర చేప వంటకం.",
      "hi": "हल्के मक्खन और नींबू के रस में तली हुई प्रसिद्ध फ्रेंच मछली।"
    },
    "categoryLabel": {
      "fr": "Haute Gastronomie Côtière",
      "en": "Normandy Coastal Classic",
      "te": "నార్మండీ సీఫుడ్ క్లాసిక్",
      "hi": "नॉर्मंडी कोस्टल क्लासिक"
    },
    "description": {
      "fr": "Le chef-d'œuvre marin immortalisé par la cuisine française : une sole de Manche fraîchement pêchée, légèrement farinée façon meunière, dorée avec précision et arrosée à la table d'un beurre noisette fumant au parfum de noisette grillée, relevé de jus de citron et de persil ciselé.",
      "en": "The immortal dish that inspired Julia Child's culinary passion: whole Dover sole dredged lightly in flour, pan-seared in clarified butter, and bathed at the table in foaming hazelnut-colored brown butter (beurre noisette) with fresh lemon and parsley.",
      "te": "జూలియా చైల్డ్‌ను ప్రేరేపించిన అమర వంటకం: పిండి పూసిన సోల్ చేపను వెన్నలో వేయించి, టేబుల్ వద్ద వేడి నట్టి బ్రౌన్ బట్టర్, నిమ్మరసం మరియు పార్స్లీతో వడ్డిస్తారు.",
      "hi": "जूलिया चाइल्ड को प्रेरित करने वाला ऐतिहासिक व्यंजन: मैदे में हल्की लिपटी मछली, मक्खन में तली हुई और ऊपर से गरमा-गरम ब्राउन बटर और नींबू का रस डालकर परोसी जाती है।"
    },
    "wine": {
      "fr": "Chablis Premier Cru ou Sancerre Blanc",
      "en": "Chablis Premier Cru or Sancerre",
      "te": "షాబ్లిస్ లేదా సాన్సెర్ వైన్",
      "hi": "शाब्लिस या सांसर वाइन"
    },
    "wineNotes": {
      "fr": "La minéralité tranchante et l'acidité ciselée d'un Chablis traversent avec une grâce infinie la richesse du beurre noisette.",
      "en": "Crisp chalky limestone acidity and citrus minerality in Chablis cuts like a knife through foaming brown butter.",
      "te": "షాబ్లిస్ వైన్ యొక్క తాజా నిమ్మ సువాసన వేడి బ్రౌన్ బట్టర్ రిచ్‌నెస్‌ను అద్భుతంగా బ్యాలెన్స్ చేస్తుంది.",
      "hi": "शाब्लिस की ताजी खटास और मिनरल्स ब्राउन बटर के भारी स्वाद को बहुत ही खूबसूरती से संतुलित करते हैं।"
    },
    "chefTip": {
      "fr": "Dès que le beurre cesse de mousser et commence à dégager un enivrant parfum de noisette avec de petits grains dorés, retirez immédiatement du feu et jetez-y le jus de citron frais pour stopper la cuisson.",
      "en": "Watch the butter closely: as soon as the foam subsides and tiny brown flecks appear with a hazelnut aroma, immediately take off the heat and splash in fresh lemon juice.",
      "te": "వెన్న గోధుమ రంగులోకి వచ్చి మంచి సువాసన రాగానే మంట ఆపి వెంటనే నిమ్మరసం పిండండి.",
      "hi": "मक्खन पर नजर रखें: जैसे ही झाग कम हो और अखरोट जैसी खुशबू आने लगे, तुरंत आंच से उतारकर नींबू का रस डालें।"
    },
    "ingredients": [
      {
        "fr": "Sole de Manche entière dépouillée",
        "en": "Fresh Dover sole fillets or whole sole, skinned",
        "te": "సోల్ చేప",
        "hi": "डोवर सोल मछली"
      },
      {
        "fr": "Farine blanche pour enrober",
        "en": "All-purpose flour for dusting",
        "te": "మైదా పిండి",
        "hi": "मैदा"
      },
      {
        "fr": "Beurre frais de Normandie",
        "en": "Unsalted Normandy butter",
        "te": "నార్మండీ వెన్న",
        "hi": "नॉर्मंडी मक्खन"
      },
      {
        "fr": "Jus de citron jaune frais",
        "en": "Freshly squeezed lemon juice",
        "te": "నిమ్మరసం",
        "hi": "नींबू का रस"
      },
      {
        "fr": "Persil plat finement haché",
        "en": "Flat-leaf French parsley, finely chopped",
        "te": "పార్స్లీ ఆకులు",
        "hi": "बारीक कटा हरा धनिया/पार्सले"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": {
          "fr": "Fariner la sole",
          "en": "Dredge Sole",
          "te": "చేపకు పిండి పట్టించండి",
          "hi": "मछली पर मैदा लगाएं"
        },
        "instruction": {
          "fr": "Assaisonnez la sole de sel et poivre. Farinez-la légèrement et tapotez pour retirer l'excédent.",
          "en": "Pat sole dry with paper towels. Season with salt and pepper, then lightly dredge in flour, shaking off all excess.",
          "te": "చేపను పొడిగా తుడిచి ఉప్పు, మిరియాలు మరియు కొద్దిగా మైదా పిండి రాయండి.",
          "hi": "मछली को पोंछकर नमक, काली मिर्च और हल्का मैदा लगाकर अतिरिक्त मैदा झाड़ दें।"
        }
      },
      {
        "step": 2,
        "title": {
          "fr": "Dorer au beurre",
          "en": "Pan-Sear in Butter",
          "te": "వెన్నలో వేయించండి",
          "hi": "मक्खन में तलें"
        },
        "instruction": {
          "fr": "Chauffez 30g de beurre dans une grande poêle ovale. Cuisez la sole 4 minutes par face jusqu'à coloration dorée.",
          "en": "Melt 30g butter in a large oval skillet over medium-high heat. Fry sole for 4 minutes per side until golden and flakey. Transfer to warm platter.",
          "te": "పాన్‌లో 30 గ్రా వెన్న కరిగించి రెండు వైపులా 4 నిమిషాలు వేయించండి.",
          "hi": "तवे पर 30 ग्राम मक्खन गरम करके दोनों तरफ 4 मिनट तक सुनहरा होने तक तलें।"
        }
      },
      {
        "step": 3,
        "title": {
          "fr": "Réaliser le beurre noisette",
          "en": "Make Beurre Noisette",
          "te": "బ్రౌన్ బట్టర్ చేయండి",
          "hi": "ब्राउन बटर बनाएं"
        },
        "instruction": {
          "fr": "Ajoutez le restant de beurre dans la poêle essuyée et laissez mousser jusqu'à obtenir une belle couleur noisette.",
          "en": "Wipe pan clean, add remaining 50g butter. Cook until foaming subsides and butter turns a fragrant golden-brown hazelnut color.",
          "te": "పాన్ శుభ్రం చేసి మిగిలిన వెన్న వేసి మంచి సువాసన వచ్చే వరకు కరిగించండి.",
          "hi": "तवा साफ करके बाकी मक्खन डालें और सुनहरा भूरा होने तक पकाएं।"
        }
      },
      {
        "step": 4,
        "title": {
          "fr": "Napper et servir",
          "en": "Sauce and Garnish",
          "te": "వడ్డించండి",
          "hi": "सॉस डालकर परोसें"
        },
        "instruction": {
          "fr": "Ajoutez le jus de citron et le persil, et nappez immédiatement la sole fumante de ce beurre noisette crépitant.",
          "en": "Add lemon juice and chopped parsley (it will foam vigorously!). Immediately spoon sizzling brown butter over fish and serve.",
          "te": "నిమ్మరసం మరియు పార్స్లీ వేసి వెంటనే చేపపై పోసి వేడిగా వడ్డించండి.",
          "hi": "नींबू का रस और पार्सले डालें और गरमा-गरम मक्खन मछली पर डालकर तुरंत परोसें।"
        }
      }
    ]
  },

  // Recipe: tarte_flambee
  "tarte_flambee": {
    "title": {
      "fr": "Tarte Flambée Alsacienne (Flammekueche)",
      "en": "Alsatian Wood-Fired Bacon & Cream Flatbread",
      "te": "టార్ట్ ఫ్లాంబే (అల్సాస్ బేకన్ మరియు క్రీమ్ పిజ్జా)",
      "hi": "टार्ट फ्लेम्बे (खस्ता बेकन और क्रीम वाली फ्लैटब्रेड)"
    },
    "subtitle": {
      "fr": "Pâte extra-fine croustillante, fromage blanc onctueux, lardons fumés et oignons doux.",
      "en": "Paper-thin dough spread with fromage blanc, smoked lardons & sweet onions.",
      "te": "కరకరలాడే అల్సాటియన్ బేకన్ మరియు చీజ్ ఫ్లాట్‌బ్రెడ్.",
      "hi": "पतली और कुरकुरी बेस पर स्मोक्ड बेकन, प्याज और ताजी क्रीम से बनी फ्रेंच फ्लैटब्रेड।"
    },
    "categoryLabel": {
      "fr": "Spécialité Traditionnelle d'Alsace",
      "en": "Alsatian Specialty",
      "te": "అల్సాస్ స్పెషాలిటీ",
      "hi": "अल्सास की प्रसिद्ध डिश"
    },
    "description": {
      "fr": "L'incontournable fête paysanne des fermes alsaciennes : une pâte abaissée d'une finesse absolue, recouverte d'un mélange onctueux de fromage blanc et de crème fraîche parfumée à la muscade, généreusement parsemée de lardons fumés paysans et d'oignons blancs émincés, cuite à la flamme vive.",
      "en": "Alsace's beloved wood-fired specialty: an ultra-thin rolled dough spread with a seasoned blend of tangy fromage blanc and rich crème fraîche, topped generously with smoked pork lardons and thinly sliced sweet onions, baked blistering hot.",
      "te": "అల్సాస్ సంప్రదాయ ఫ్లాట్‌బ్రెడ్: చాలా పల్చగా ఉండే క్రస్ట్‌పై క్రీమ్, జున్ను, స్మోక్డ్ బేకన్ మరియు ఉల్లిపాయలను ఉంచి అత్యధిక వేడి వద్ద కాల్చి కరకరలాడేలా చేస్తారు.",
      "hi": "अल्सास की पसंदीदा वुड-फायर्ड फ्लैटब्रेड: बेहद पतले आटे पर खट्टी क्रीम, पनीर, स्मोक्ड बेकन और पतले कटे प्याज डालकर तेज आंच में बेक की जाती है।"
    },
    "wine": {
      "fr": "Pinot Blanc d'Alsace ou Riesling sec",
      "en": "Alsace Pinot Blanc or Riesling",
      "te": "అల్సాస్ పినోట్ బ్లాంక్ వైన్",
      "hi": "अल्सास पिनोट ब्लैंक वाइन"
    },
    "wineNotes": {
      "fr": "Un Pinot Blanc d'Alsace fruité, vif et gouleyant qui désaltère face au sel des lardons et à la douceur de la crème.",
      "en": "A vibrant, refreshing Alsace Pinot Blanc cuts through the smoky bacon lardons and luscious crème fraîche.",
      "te": "తాజా అల్సాస్ వైట్ వైన్ బేకన్ మరియు క్రీమ్ యొక్క రిచ్ రుచికి చక్కటి జోడింపు.",
      "hi": "ताजा पिनोट ब्लैंक वाइन स्मोक्ड बेकन और मलाईदार क्रीम के स्वाद को बेहतरीन ताजगी देती है।"
    },
    "chefTip": {
      "fr": "Étalez la pâte le plus finement possible (moins de 2 mm) et cuisez sur une pierre à pizza préalablement chauffée à la température maximale de votre four pour obtenir ce craquant incomparable.",
      "en": "Roll the dough as paper-thin as possible (less than 2mm) and bake on a preheated pizza stone at your oven's maximum temperature for authentic charred cracker crust.",
      "te": "పిండిని 2 మి.మీ కన్నా తక్కువ మందంతో చాలా పల్చగా రోల్ చేయండి. పిజ్జా స్టోన్‌పై కాల్చండి.",
      "hi": "आटे को 2 मिमी से भी कम पतला बेलें और पहले से गरम पिज्जा स्टोन पर तेज आंच में बेक करें।"
    },
    "ingredients": [
      {
        "fr": "Farine de blé T55",
        "en": "Unbleached flour for dough",
        "te": "గోధుమ పిండి",
        "hi": "मैदा/गेहूं का आटा"
      },
      {
        "fr": "Fromage blanc fermier égoutté",
        "en": "Fromage blanc or whole milk ricotta",
        "te": "ఫ్రెంచ్ చీజ్ లేదా రికోటా",
        "hi": "ताजा पनीर/रिकोटा"
      },
      {
        "fr": "Crème fraîche épaisse d'Alsace",
        "en": "Heavy crème fraîche",
        "te": "ఫ్రెంచ్ క్రీమ్",
        "hi": "गाढ़ी मलाईदार क्रीम"
      },
      {
        "fr": "Lardons fumés paysans",
        "en": "Smoked bacon lardons",
        "te": "స్మోక్డ్ బేకన్ ముక్కలు",
        "hi": "स्मोक्ड बेकन"
      },
      {
        "fr": "Oignons blancs coupés en lamelles fines",
        "en": "Sweet white onions, razor-thin sliced",
        "te": "సన్నగా తరిగిన తెల్ల ఉల్లిపాయలు",
        "hi": "पतले कटे प्याज"
      },
      {
        "fr": "Noix de muscade râpée et poivre",
        "en": "Fresh ground nutmeg & sea salt",
        "te": "జాజికాయ పొడి మరియు ఉప్పు",
        "hi": "जायफल और नमक"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": {
          "fr": "Abaisser la pâte",
          "en": "Roll Dough Ultra-Thin",
          "te": "పిండిని పల్చగా చేయండి",
          "hi": "आटा पतला बेलें"
        },
        "instruction": {
          "fr": "Pétrissez farine, eau, huile et sel. Étalez la pâte le plus finement possible sur du papier cuisson.",
          "en": "Knead flour, water, oil, and salt into a smooth dough. Roll out paper-thin on parchment paper into an oblong oval.",
          "te": "పిండి ముద్దను బేకింగ్ పేపర్‌పై చాలా పల్చగా రోల్ చేయండి.",
          "hi": "आटे को चिकना गूंथ लें और पार्चमेंट पेपर पर जितना हो सके पतला बेलें।"
        }
      },
      {
        "step": 2,
        "title": {
          "fr": "Napper de crème",
          "en": "Spread Cream Base",
          "te": "క్రీమ్ పూయండి",
          "hi": "क्रीम फैलाएं"
        },
        "instruction": {
          "fr": "Mélangez le fromage blanc et la crème avec la muscade, le sel et le poivre. Étalez sur la pâte.",
          "en": "Whisk fromage blanc and crème fraîche with salt, pepper, and freshly grated nutmeg. Spread thinly over the dough to within 1/2 inch of edges.",
          "te": "క్రీమ్, చీజ్, జాజికాయ పొడి కలిపి పిండిపై సమానంగా పూయండి.",
          "hi": "क्रीम, चीज, नमक और जायफल मिलाकर आटे पर फैलाएं।"
        }
      },
      {
        "step": 3,
        "title": {
          "fr": "Garnir généreusement",
          "en": "Scatter Toppings",
          "te": "టాపింగ్స్ చల్లండి",
          "hi": "टॉपिंग्स डालें"
        },
        "instruction": {
          "fr": "Répartissez uniformément les lamelles d'oignons crus et les lardons fumés.",
          "en": "Scatter thinly sliced raw onions and smoky lardons evenly across the cream layer.",
          "te": "ఉల్లిపాయలు మరియు బేకన్ ముక్కలను చల్లండి.",
          "hi": "ऊपर से कटे प्याज और बेकन के टुकड़े फैलाएं।"
        }
      },
      {
        "step": 4,
        "title": {
          "fr": "Cuire au four brûlant",
          "en": "Bake at Max Heat",
          "te": "బేక్ చేయండి",
          "hi": "तेज आंच पर बेक करें"
        },
        "instruction": {
          "fr": "Glissez au four à 250°C sur plaque brûlante pendant 10 à 12 minutes jusqu'à ce que les bords soient croustillants et dorés.",
          "en": "Slide onto a preheated baking stone at 250°C (480°F). Bake 10-12 minutes until edges are blistered, dark, and shatteringly crisp.",
          "te": "250°C వద్ద 10-12 నిమిషాలు అంచులు కరకరలాడే వరకు బేక్ చేయండి.",
          "hi": "250 डिग्री पर 10-12 मिनट किनारों के कुरकुरे होने तक बेक करें।"
        }
      }
    ]
  },

  // Recipe: choucroute_garnie
  "choucroute_garnie": {
    "title": {
      "fr": "Choucroute Garnie Traditionnelle",
      "en": "Alsatian Riesling Sauerkraut with Sausages & Pork",
      "te": "షూక్రూట్ గార్నీ (వైట్ వైన్ క్యాబేజీ మరియు సాసేజ్ వంటకం)",
      "hi": "शुक्रूट गार्नी (सफेद वाइन में पकी गोभी और सॉसेज)"
    },
    "subtitle": {
      "fr": "Chou fermenté braisé au Riesling, saucisses de Montbéliard, lard fumé et pommes de terre.",
      "en": "Riesling-braised sauerkraut heaped with Montbéliard sausages & smoked pork.",
      "te": "అల్సాస్ సంప్రదాయ వైన్ స్టీవ్డ్ క్యాబేజీ మరియు స్మోక్డ్ మీట్ డిష్.",
      "hi": "अल्सास का राष्ट्रीय व्यंजन - वाइन में पकी खट्टी गोभी, फ्रेंच सॉसेज और आलू।"
    },
    "categoryLabel": {
      "fr": "Patrimoine Gastronomique d'Alsace",
      "en": "Alsatian Heritage",
      "te": "అల్సాస్ సంప్రదాయం",
      "hi": "अल्सास का पारंपरिक भोजन"
    },
    "description": {
      "fr": "Le monument de la gastronomie alsacienne : chou blanc finement fermenté et mijoté de longues heures avec un Riesling sec d'Alsace, de la graisse d'oie, des baies de genièvre et des oignons, couronné de saucisses de Strasbourg, de Montbéliard fumées, de lard paysan et de pommes de terre fondantes.",
      "en": "The crown jewel of Alsatian gastronomy: silky fermented cabbage braised for hours with Alsace Riesling, goose fat, juniper berries, and onions, topped with smoked pork loin, Strasbourg and Montbéliard sausages, and boiled yellow potatoes.",
      "te": "అల్సాస్ రాయల్ డిష్: పులియబెట్టిన క్యాబేజీని వైట్ వైన్, సుగంధ ద్రవ్యాలతో గంటల తరబడి ఉడికించి, పొగబెట్టిన సాసేజ్‌లు, బంగాళాదుంపలతో కలిపి వడ్డిస్తారు.",
      "hi": "अल्सास का प्रसिद्ध व्यंजन: बारीक कटी खट्टी गोभी को वाइन और मसालों के साथ धीमी आंच में पकाकर सॉसेज, आलू और स्मोक्ड पोर्क के साथ परोसा जाता है।"
    },
    "wine": {
      "fr": "Riesling Grand Cru d'Alsace ou Pinot Gris",
      "en": "Alsace Grand Cru Riesling or Pinot Gris",
      "te": "అల్సాస్ రీస్లింగ్ వైన్",
      "hi": "अल्सास रीसलिंग वाइन"
    },
    "wineNotes": {
      "fr": "La fraîcheur vive et minérale d'un grand Riesling sec d'Alsace traverse sans faillir la richesse des viandes fumées.",
      "en": "A dry, petrol-mineral Alsace Riesling has the piercing acidity needed to cut through smoked pork and rich duck fat.",
      "te": "రీస్లింగ్ వైన్ యొక్క అసిడిటీ స్మోక్డ్ మాంసం మరియు క్యాబేజీ రుచిని అద్భుతంగా నిలబెడుతుంది.",
      "hi": "सूखी रीसलिंग वाइन स्मोक्ड मीट और वसा के भारी स्वाद को बहुत ही शानदार संतुलन देती है।"
    },
    "chefTip": {
      "fr": "Rincez le chou fermenté sous l'eau froide pour enlever l'excès d'acidité avant de le presser. Mijotez avec des baies de genièvre concassées pour la touche d'authenticité.",
      "en": "Rinse raw fermented sauerkraut in cold water and squeeze dry before cooking. Simmer with dried juniper berries and whole cloves for traditional aroma.",
      "te": "క్యాబేజీని చల్లని నీటిలో కడిగి పిండండి. జూనిపర్ బెర్రీస్ వేసి ఉడికించండి.",
      "hi": "पकाने से पहले खट्टी गोभी को ठंडे पानी से धोकर निचोड़ लें ताकि अतिरिक्त खटास निकल जाए।"
    },
    "ingredients": [
      {
        "fr": "Chou à choucroute cru fermenté",
        "en": "Fermented raw sauerkraut, gently rinsed",
        "te": "పులియబెట్టిన క్యాబేజీ",
        "hi": "किण्वित पत्ता गोभी"
      },
      {
        "fr": "Riesling sec d'Alsace",
        "en": "Dry Alsace Riesling wine",
        "te": "రీస్లింగ్ వైట్ వైన్",
        "hi": "सफेद वाइन"
      },
      {
        "fr": "Saucisses fumées de Montbéliard",
        "en": "Smoked Montbéliard or Kielbasa sausages",
        "te": "స్మోక్డ్ సాసేజ్‌లు",
        "hi": "स्मोक्ड सॉसेज"
      },
      {
        "fr": "Saucisses de Strasbourg ou Francfort",
        "en": "Strasbourg / Frankfurter sausages",
        "te": "ఫ్రాంక్‌ఫర్టర్ సాసేజ్‌లు",
        "hi": "फ्रैंकफर्टर सॉसेज"
      },
      {
        "fr": "Lard paysan fumé en tranches épaisses",
        "en": "Smoked pork belly or thick bacon slab",
        "te": "స్మోక్డ్ బేకన్ ముక్క",
        "hi": "स्मोक्ड पोर्क बेली"
      },
      {
        "fr": "Baies de genièvre et clous de girofle",
        "en": "Juniper berries, crushed & cloves",
        "te": "లవంగాలు మరియు జూనిపర్ బెర్రీలు",
        "hi": "लौंग और जुनिपर बेरीज"
      },
      {
        "fr": "Pommes de terre à chair ferme",
        "en": "Yellow waxy potatoes, peeled",
        "te": "బంగాళాదుంపలు",
        "hi": "उबले आलू"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": {
          "fr": "Rincer et suer",
          "en": "Rinse and Layer",
          "te": "క్యాబేజీ కడగండి",
          "hi": "गोभी धोएं और परत लगाएं"
        },
        "instruction": {
          "fr": "Rincez le chou à l'eau froide et pressez bien. Faites revenir un oignon émincé dans une cocotte.",
          "en": "Rinse sauerkraut in cold water and squeeze dry. Sauté sliced onions in duck fat, then add half the sauerkraut.",
          "te": "క్యాబేజీని కడిగి నీరు పిండండి. ఉల్లిపాయలను వేయించి సగం క్యాబేజీ వేయండి.",
          "hi": "गोभी को धोकर निचोड़ें। प्याज भूनकर आधी गोभी बर्तन में फैलाएं।"
        }
      },
      {
        "step": 2,
        "title": {
          "fr": "Assaisonner et mouiller",
          "en": "Add Spices and Meats",
          "te": "సుగంధ ద్రవ్యాలు మరియు వైన్ కలపండి",
          "hi": "मसाले और वाइन डालें"
        },
        "instruction": {
          "fr": "Ajoutez le lard fumé, genièvre et clous de girofle. Versez le Riesling et couvrez du reste de chou.",
          "en": "Tuck in juniper berries, cloves, bay leaf, and smoked pork slab. Pour in Riesling and chicken broth.",
          "te": "మసాలాలు, బేకన్ వేసి వైట్ వైన్ పోయండి.",
          "hi": "मसाले, बेकन और बाकी गोभी डालकर ऊपर से सफेद वाइन डालें।"
        }
      },
      {
        "step": 3,
        "title": {
          "fr": "Mijoter longuement",
          "en": "Simmer Gently",
          "te": "నెమ్మదిగా ఉడికించండి",
          "hi": "धीमी आंच पर पकाएं"
        },
        "instruction": {
          "fr": "Laissez mijoter à couvert à feu très doux pendant 1h30.",
          "en": "Top with remaining cabbage. Cover tightly and simmer on low for 1.5 hours until meltingly tender.",
          "te": "మూతపెట్టి 1.5 గంటల పాటు తక్కువ మంటపై ఉడికించండి.",
          "hi": "ढककर 1.5 घंटे तक धीमी आंच पर गोभी के गलने तक पकाएं।"
        }
      },
      {
        "step": 4,
        "title": {
          "fr": "Pocher les saucisses",
          "en": "Add Sausages and Potatoes",
          "te": "సాసేజ్‌లు వేసి ఉడికించండి",
          "hi": "सॉसेज और आलू डालकर परोसें"
        },
        "instruction": {
          "fr": "Déposez les saucisses et les pommes de terre cuites 20 minutes avant de servir. Dressez sur grand plat avec moutarde forte.",
          "en": "Nestle sausages and boiled potatoes on top for the final 20 minutes to heat through. Serve on a grand platter with spicy Dijon.",
          "te": "చివరి 20 నిమిషాల్లో సాసేజ్‌లు, ఆలు వేసి వేడి చేసి ఆవాల పేస్ట్‌తో వడ్డించండి.",
          "hi": "आखिरी 20 मिनट में सॉसेज और उबले आलू रखकर गरम करें और सरसों के साथ परोसें।"
        }
      }
    ]
  },

  // Recipe: kouglof_alsacien
  "kouglof_alsacien": {
    "title": {
      "fr": "Kouglof Alsacien Traditionnel",
      "en": "Traditional Alsatian Fluted Brioche with Rum Raisins",
      "te": "కూగ్లోఫ్ అల్సాసియన్ (రమ్ కిస్మిస్ మరియు బాదం బ్రెడ్)",
      "hi": "कूग्लॉफ अल्सासियन (किशमिश और बादाम वाला फ्रेंच केक)"
    },
    "subtitle": {
      "fr": "Brioche dorée cannelée aux raisins marinés au rhum et amandes effilées.",
      "en": "Golden fluted brioche crown studded with rum raisins & toasted sliced almonds.",
      "te": "ప్రత్యేకమైన ఆకారంలో బేక్ చేసిన సంప్రదాయ ఫ్రెంచ్ స్వీట్ బ్రెడ్.",
      "hi": "फ्रांस का पारंपरिक बादाम और किशमिश से सजा हुआ शानदार ताज जैसा केक।"
    },
    "categoryLabel": {
      "fr": "Pâtisserie Emblématique d'Alsace",
      "en": "Alsatian Patisserie",
      "te": "అల్సాస్ పేస్ట్రీ",
      "hi": "अल्सास की पेस्ट्री"
    },
    "description": {
      "fr": "Le symbole des dimanches en Alsace : une brioche aérée et beurrée cuite dans un moule traditionnel en terre cuite émaillée de Soufflenheim, garnie d'amandes entières torréfiées et de raisins secs dorés préalablement macérés dans du rhum ambré.",
      "en": "The architectural symbol of Alsace bakeries: a tall, turban-shaped fluted brioche crowned with toasted whole almonds, made with an enriched yeast dough laced with golden sultana raisins macerated in dark rum or Kirsch.",
      "te": "అల్సాస్ సంప్రదాయ రాయల్ బ్రెడ్: సువాసనగల ఈస్ట్ పిండితో, రమ్‌లో నానబెట్టిన కిస్మిస్‌లు మరియు బాదంపప్పులతో ప్రత్యేకమైన కుండీ లాంటి అచ్చులో కాల్చుతారు.",
      "hi": "अल्सास की बेकरी की शान: बादाम और डार्क रम में भीगी किशमिश से बना ताज के आकार का मुलायम और मक्खनदार फ्रेंच बन केक।"
    },
    "wine": {
      "fr": "Gewurztraminer Vendanges Tardives ou Café au Lait",
      "en": "Alsace Gewurztraminer or Café au Lait",
      "te": "గేవుర్జ్‌ట్రామినర్ లేదా కాఫీ",
      "hi": "गेवुर्ज़ट्रामिनर वाइन या कॉफी"
    },
    "wineNotes": {
      "fr": "Les notes exotiques de litchi et de rose d'un Gewurztraminer moelleux subliment les raisins au rhum et la mie beurrée.",
      "en": "The exotic floral and lychee sweetness of late-harvest Gewurztraminer complements rum-soaked raisins and buttery brioche crumb.",
      "te": "తీపి గేవుర్జ్‌ట్రామినర్ వైన్ లేదా కాఫీ ఈ స్వీట్ బ్రెడ్‌తో ఎంతో బాగుంటుంది.",
      "hi": "मीठी व्हाइट वाइन या गरमा-गरम कॉफी इस मक्खनदार केक के साथ बहुत स्वादिष्ट लगती है।"
    },
    "chefTip": {
      "fr": "Beurrez soigneusement chaque cannelure du moule en terre cuite et insérez une amande entière au fond de chaque rainure avant d'y déposer la pâte.",
      "en": "Butter every flute of an authentic ceramic Soufflenheim mold thoroughly, and place a whole almond in each groove before dropping in the dough.",
      "te": "మోల్డ్ యొక్క ప్రతి గాడిలో వెన్న రాసి ఒక బాదం పప్పును ఉంచిన తర్వాత పిండిని పోయండి.",
      "hi": "मोल्ड के हर खांचे में मक्खन लगाकर एक-एक बादाम रखें, फिर आटा डालकर बेक करें।"
    },
    "ingredients": [
      {
        "fr": "Farine de blé tamisée",
        "en": "French bread flour (T45)",
        "te": "గోధుమ/మైదా పిండి",
        "hi": "मैदा"
      },
      {
        "fr": "Beurre fin ramolli",
        "en": "High-fat unsalted butter, softened",
        "te": "మెత్తని వెన్న",
        "hi": "नरम मक्खन"
      },
      {
        "fr": "Raisins secs blonds marinés",
        "en": "Golden sultana raisins",
        "te": "కిస్మిస్‌లు",
        "hi": "किशमिश"
      },
      {
        "fr": "Rhum ambré de qualité",
        "en": "Dark Caribbean rum or Kirschwasser",
        "te": "రమ్ లేదా కిర్ష్",
        "hi": "डार्क रम"
      },
      {
        "fr": "Amandes entières émondées",
        "en": "Whole blanched almonds",
        "te": "బాదంపప్పులు",
        "hi": "बादाम"
      },
      {
        "fr": "Œufs entiers frais",
        "en": "Fresh whole eggs",
        "te": "కోడిగుడ్లు",
        "hi": "अंडे"
      },
      {
        "fr": "Levure de boulanger",
        "en": "Active baker's yeast",
        "te": "ఈస్ట్",
        "hi": "बेकर्स यीस्ट"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": {
          "fr": "Macérer les raisins",
          "en": "Macerate Raisins",
          "te": "కిస్మిస్‌లు నానబెట్టండి",
          "hi": "किशमिश भिगोएं"
        },
        "instruction": {
          "fr": "Faites tremper les raisins dans le rhum chaud 30 minutes. Beurrez le moule et déposez une amande par cannelure.",
          "en": "Soak raisins in warm rum for 30 minutes. Butter a fluted Kouglof mold generously and place an almond in each groove.",
          "te": "కిస్మిస్‌లను రమ్‌లో 30 నిమిషాలు నానబెట్టండి. మోల్డ్‌లో బాదం ఉంచండి.",
          "hi": "किशमिश को गरम रम में 30 मिनट भिगोएं। मोल्ड में मक्खन लगाकर बादाम सजाएं।"
        }
      },
      {
        "step": 2,
        "title": {
          "fr": "Pétrir la brioche",
          "en": "Knead Enriched Dough",
          "te": "పిండి ముద్ద చేయండి",
          "hi": "आटा गूंथें"
        },
        "instruction": {
          "fr": "Pétrissez farine, levure, lait, œufs et sucre 10 minutes. Incorporez le beurre puis les raisins égouttés.",
          "en": "Knead flour, yeast, milk, eggs, and sugar for 10 minutes until elastic. Gradually incorporate softened butter until glossy, then fold in drained raisins.",
          "te": "పిండి, ఈస్ట్, పాలు, గుడ్లు కలిపి కలపండి. వెన్న మరియు కిస్మిస్‌లు చేర్చండి.",
          "hi": "आटा, दूध, अंडे और चीनी को 10 मिनट गूंथें। मक्खन और किशमिश मिला लें।"
        }
      },
      {
        "step": 3,
        "title": {
          "fr": "Lever dans le moule",
          "en": "First and Second Rise",
          "te": "పిండిని పొంగనివ్వండి",
          "hi": "आटा फूलने दें"
        },
        "instruction": {
          "fr": "Laissez lever 1h30. Déposez dans le moule et laissez lever à nouveau jusqu'au bord.",
          "en": "Let dough rise 1.5 hours until doubled. Punch down, place into prepared mold, and let rise until dough reaches the rim.",
          "te": "పిండిని 1.5 గంటల పాటు రెట్టింపు అయ్యే వరకు ఉంచండి.",
          "hi": "आटे को 1.5 घंटे फूलने दें। मोल्ड में रखकर ऊपर तक आने दें।"
        }
      },
      {
        "step": 4,
        "title": {
          "fr": "Cuire et saupoudrer",
          "en": "Bake and Dust",
          "te": "బేక్ చేసి సర్వ్ చేయండి",
          "hi": "बेक करके चीनी छिड़कें"
        },
        "instruction": {
          "fr": "Cuisez à 180°C pendant 35 à 40 minutes. Démoulez tiède et poudrez de sucre glace.",
          "en": "Bake at 180°C (350°F) for 35-40 minutes until deep mahogany. Invert warm onto a rack and dust with confectioners' sugar.",
          "te": "180°C వద్ద 35-40 నిమిషాలు బేక్ చేసి చక్కెర పొడి చల్లండి.",
          "hi": "180 डिग्री पर 35-40 मिनट बेक करें और ऊपर से पिसी चीनी छिड़कें।"
        }
      }
    ]
  },

  // Recipe: baeckeoffe
  "baeckeoffe": {
    "title": {
      "fr": "Baeckeoffe Alsacien Traditionnel",
      "en": "Three-Meat Alsatian Wine & Potato Casserole",
      "te": "బెక్-ఆఫ్ అల్సాసియన్ (మూడు రకాల మాంసం మరియు బంగాళాదుంప స్టీవ్)",
      "hi": "बेकऑफ अल्सासियन (तीन प्रकार के मीट और आलू का शाही फ्रेंच स्टू)"
    },
    "subtitle": {
      "fr": "Bœuf, porc et agneau marinés au vin blanc, mijotés sous luth avec pommes de terre et poireaux.",
      "en": "Beef, pork & lamb layered with sliced potatoes, sealed in white wine.",
      "te": "వైట్ వైన్‌తో కాల్చిన అల్సాస్ మూడు రకాల మాంసాల రాయల్ స్టీవ్.",
      "hi": "मिट्टी के बर्तन में धीमी आंच पर पका हुआ फ्रांस का शाही तीन-मीट व्यंजन।"
    },
    "categoryLabel": {
      "fr": "Plat Festif Alsacien",
      "en": "Alsatian Sunday Feast",
      "te": "అల్సాస్ విందు వంటకం",
      "hi": "अल्सास का दावत वाला व्यंजन"
    },
    "description": {
      "fr": "Le chef-d'œuvre du dimanche alsacien : trois viandes tendres (paleron de bœuf, échine de porc, épaule d'agneau) marinées au vin blanc d'Alsace, superposées entre des couches de pommes de terre émincées et de poireaux dans une terrine scellée à la pâte et cuite 3h30 à l'étouffée.",
      "en": "The historical bakers' oven feast of Alsace: layers of marinated beef chuck, pork shoulder, and lamb shoulder nestled between sliced waxy potatoes and leeks, sealed inside an oval ceramic terrine with a rope of dough and slow-baked for 3.5 hours.",
      "te": "అల్సాస్ బేకర్ల ఓవెన్ విందు: బీఫ్, పోర్క్ మరియు లాంబ్ మాంసాలను బంగాళాదుంపలు, ఉల్లిపాయలతో పొరలుగా పేర్చి, కుండ మూతను పిండితో సీల్ చేసి 3.5 గంటలు నెమ్మదిగా ఉడికిస్తారు.",
      "hi": "अल्सास की सदियों पुरानी शाही डिश: वाइन में मैरीनेट किए गए बीफ, पोर्क और लैम्ब मीट को आलू और प्याज की परतों के बीच मिट्टी के बर्तन में रखकर आटे से सील करके 3.5 घंटे पकाया जाता है।"
    },
    "wine": {
      "fr": "Pinot Noir d'Alsace ou Sylvaner",
      "en": "Alsace Pinot Noir or Sylvaner",
      "te": "అల్సాస్ పినోట్ నోయిర్ వైన్",
      "hi": "अल्सास पिनोट नॉयर वाइन"
    },
    "wineNotes": {
      "fr": "Un Pinot Noir d'Alsace frais et fruité accompagne avec élégance le fondant des viandes marinées au vin blanc.",
      "en": "A chilled, light-bodied Alsace Pinot Noir matches the earthy slow-baked root vegetables and trio of tender braised meats.",
      "te": "చల్లని పినోట్ నోయిర్ వైన్ మూడు రకాల మాంసాల రుచికి అద్భుతంగా సరిపోతుంది.",
      "hi": "हल्की पिनोट नॉयर रेड वाइन आलू और तीनों प्रकार के रसीले मीट के स्वाद को निखारती है।"
    },
    "chefTip": {
      "fr": "Scellez le couvercle de la terrine avec un cordon de pâte (farine et eau) pour créer un joint hermétique qui emprisonne toutes les saveurs et vapeurs de vin pendant la longue cuisson.",
      "en": "Seal the lid of the ceramic terrine with a flour-and-water dough paste to prevent any steam from escaping during the long 3.5-hour bake.",
      "te": "ఆవిరి బయటకు పోకుండా మూత చుట్టూ పిండి ముద్దతో సీల్ చేయండి.",
      "hi": "बर्तन के ढक्कन को आटे की लोई से अच्छी तरह सील करें ताकि 3.5 घंटे तक भाप बिल्कुल बाहर न निकले।"
    },
    "ingredients": [
      {
        "fr": "Échine de porc coupée en morceaux",
        "en": "Pork shoulder, cut into cubes",
        "te": "పోర్క్ ముక్కలు",
        "hi": "पोर्क के टुकड़े"
      },
      {
        "fr": "Paleron de bœuf en cubes",
        "en": "Beef chuck, cut into cubes",
        "te": "బీఫ్ ముక్కలు",
        "hi": "बीफ के टुकड़े"
      },
      {
        "fr": "Épaule d'agneau désossée en morceaux",
        "en": "Lamb shoulder, cut into cubes",
        "te": "లాంబ్ ముక్కలు",
        "hi": "लैम्ब के टुकड़े"
      },
      {
        "fr": "Pinot Blanc sec d'Alsace",
        "en": "Dry Alsace Pinot Blanc or Sylvaner",
        "te": "అల్సాస్ వైట్ వైన్",
        "hi": "सफेद वाइन"
      },
      {
        "fr": "Pommes de terre coupées en rondelles",
        "en": "Waxy yellow potatoes, sliced 1/4-inch",
        "te": "బంగాళాదుంప చక్రాలు",
        "hi": "आलू के गोल स्लाइस"
      },
      {
        "fr": "Poireaux émincés",
        "en": "Leeks, cleaned and sliced",
        "te": "లీక్స్ ముక్కలు",
        "hi": "लीक्स (हरी प्याज)"
      },
      {
        "fr": "Ail, thym frais, clous de girofle et laurier",
        "en": "Garlic, thyme, bay leaves & cloves",
        "te": "వెల్లుల్లి మరియు సుగంధ ద్రవ్యాలు",
        "hi": "लहसुन, थाइम और तेजपत्ता"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": {
          "fr": "Mariner les viandes",
          "en": "Marinate Meats",
          "te": "మాంసాన్ని నానబెట్టండి",
          "hi": "मीट मैरीनेट करें"
        },
        "instruction": {
          "fr": "Faites mariner les 3 viandes 24 heures dans le vin blanc avec oignons, poireaux, ail et épices.",
          "en": "Marinate beef, pork, and lamb chunks in white wine with onions, leeks, garlic, and herbs for 24 hours.",
          "te": "మూడు రకాల మాంసాలను వైట్ వైన్ మరియు మసాలాలలో 24 గంటలు నానబెట్టండి.",
          "hi": "तीनों प्रकार के मीट को वाइन, प्याज, लहसुन और मसालों के साथ 24 घंटे मैरीनेट करें।"
        }
      },
      {
        "step": 2,
        "title": {
          "fr": "Monter la terrine",
          "en": "Layer Terrine",
          "te": "పొరలుగా పేర్చండి",
          "hi": "बर्तन में परतें लगाएं"
        },
        "instruction": {
          "fr": "Beurrez la terrine. Déposez une couche de pommes de terre, puis les viandes égouttées, et terminez par les pommes de terre et poireaux.",
          "en": "Butter an oval ceramic terrine. Place a layer of sliced potatoes, then drained marinated meats, and top with remaining potatoes and leeks.",
          "te": "కుండలో బంగాళాదుంపలు, మాంసం మరియు లీక్స్ పొరలుగా పేర్చండి.",
          "hi": "बर्तन में पहले आलू, फिर मीट और ऊपर से फिर आलू व प्याज की परत लगाएं।"
        }
      },
      {
        "step": 3,
        "title": {
          "fr": "Arroser et luter",
          "en": "Pour Wine and Seal",
          "te": "వైన్ పోసి సీల్ చేయండి",
          "hi": "वाइन डालें और सील करें"
        },
        "instruction": {
          "fr": "Versez la marinade filtrée. Scellez le couvercle avec un cordon de pâte (farine + eau).",
          "en": "Pour strained wine marinade over. Roll flour and water into a dough rope and press around rim to hermetically seal the lid.",
          "te": "వైన్ పోసి మూత చుట్టూ పిండితో గట్టిగా సీల్ చేయండి.",
          "hi": "मैरिनेड की वाइन डालें और ढक्कन के चारों तरफ गीले आटे से सील कर दें।"
        }
      },
      {
        "step": 4,
        "title": {
          "fr": "Cuire lentement",
          "en": "Slow Bake",
          "te": "నెమ్మదిగా బేక్ చేయండి",
          "hi": "धीमी आंच पर बेक करें"
        },
        "instruction": {
          "fr": "Cuisez à 150°C pendant 3h30. Brisez le cordon de pâte à table et servez fumant.",
          "en": "Bake at 150°C (300°F) for 3.5 hours. Break dough seal at the table and serve bubbling hot.",
          "te": "150°C వద్ద 3.5 గంటలు బేక్ చేయండి. టేబుల్ వద్ద సీల్ తీసి వేడిగా వడ్డించండి.",
          "hi": "150 डिग्री पर 3.5 घंटे बेक करें। मेज पर सील तोड़कर गरमा-गरम परोसें।"
        }
      }
    ]
  },
  "piperade_basquaise": {
    "title": {
      "fr": "Piperade Basquaise Traditionnelle",
      "en": "Basque Country Pepper & Egg Skillet",
      "te": "పైపరేడ్ బాస్క్వైజ్ (బాస్క్ పెప్పర్ మరియు ఎగ్ స్కిల్లెట్)",
      "hi": "पाइप्रेड बास्क (शिमला मिर्च और अंडों से बना बास्क व्यंजन)"
    },
    "subtitle": {
      "fr": "Poivrons doux, tomates mûres au piment d'Espelette et œufs brouillés au jambon de Bayonne.",
      "en": "Sweet peppers, tomatoes & Espelette pepper softly scrambled with eggs & Bayonne ham.",
      "te": "తీపి మిరపకాయలు, టమోటాలు మరియు బాస్క్ మసాలాతో చేసిన గుడ్ల వంటకం.",
      "hi": "मीठी मिर्च, टमाटर और बास्क मसालों से बना अंडों का पारंपरिक नाश्ता।"
    },
    "categoryLabel": {
      "fr": "Classique du Pays Basque",
      "en": "Basque Morning Classic",
      "te": "బాస్క్ మార్నింగ్ క్లాసిక్",
      "hi": "बास्क क्लासिक नाश्ता"
    },
    "description": {
      "fr": "L'emblème culinaire du Pays Basque : poivrons rouges et verts confits à feu doux avec tomates, ail et piment d'Espelette, liés aux œufs frais et accompagnés de jambon de Bayonne poêlé.",
      "en": "The vibrant colors of the Basque flag in a skillet: red and green sweet peppers, ripe tomatoes, and onions gently stewed with aromatic Piment d'Espelette, finished with softly folded farm eggs and crisped slices of Jambon de Bayonne.",
      "te": "ఎరుపు, ఆకుపచ్చ బెల్ పెప్పర్స్ మరియు టమోటాలను బాస్క్ సుగంధ ద్రవ్యాలతో ఉడికించి, తాజా గుడ్లు మరియు క్రిస్పీ హామ్‌తో వడ్డించే ప్రసిద్ధ ఫ్రెంచ్ వంటకం.",
      "hi": "लाल-हरी शिमला मिर्च, रसीले टमाटर और बास्क मसालों को धीमी आंच पर पकाकर, अंडों और बेयोन हैम के साथ परोसा जाने वाला पारंपरिक फ्रेंच व्यंजन।"
    },
    "winePairing": {
      "wine": {
        "fr": "Irouléguy Rosé ou Cidre Basque",
        "en": "Irouléguy Rosé or Basque Cider",
        "te": "ఇరౌలెగై రోస్ లేదా బాస్క్ సైడర్",
        "hi": "इरोलेगी रोज़े या बास्क साइडर"
      },
      "notes": {
        "fr": "Un rosé de caractère aux notes de fruits rouges et d'épices douces qui équilibre parfaitement le piment d'Espelette.",
        "en": "A mineral-rich, structured Basque rosé cuts through the gentle heat of Espelette pepper and rich cured ham.",
        "te": "మసాలా ఘాటును సమతుల్యం చేసే మినరల్-రిచ్ బాస్క్ వైన్.",
        "hi": "मसालेदार मिर्च और नमकीन हैम के स्वाद को संतुलित करने वाली विशेष फ्रेंच रोज़े वाइन।"
      }
    },
    "chefTip": {
      "fr": "Ne pressez jamais la cuisson des poivrons : ils doivent confire dans l'huile d'olive sans colorer pour libérer toute leur sucrosité naturelle.",
      "en": "Cook the peppers very slowly over low heat until they melt into sweet jam-like tenderness before folding in the beaten eggs.",
      "te": "మిరపకాయలను తక్కువ మంటపై నెమ్మదిగా ఉడికించండి, తద్వారా వాటి సహజ తీపి బయటకు వస్తుంది.",
      "hi": "शिमला मिर्च को धीमी आंच पर तब तक पकाएं जब तक वे पूरी तरह से नरम और मीठी न हो जाएं।"
    },
    "ingredients": [
      {
        "name": {
          "fr": "Poivrons rouges et verts émincés",
          "en": "Red and green bell peppers, thinly sliced",
          "te": "ఎరుపు మరియు ఆకుపచ్చ బెల్ పెప్పర్స్",
          "hi": "लाल और हरी शिमला मिर्च"
        },
        "amount": 4,
        "unit": "pcs"
      },
      {
        "name": {
          "fr": "Tomates mûres mondées et concassées",
          "en": "Ripe vine tomatoes, peeled and chopped",
          "te": "తాజా టమోటాలు ముక్కలు",
          "hi": "पके हुए टमाटर"
        },
        "amount": 4,
        "unit": "pcs"
      },
      {
        "name": {
          "fr": "Œufs frais battus en omelette",
          "en": "Farm-fresh eggs, lightly beaten",
          "te": "తాజా కోడిగుడ్లు",
          "hi": "ताजे अंडे"
        },
        "amount": 6,
        "unit": "pcs"
      },
      {
        "name": {
          "fr": "Tranches de jambon de Bayonne",
          "en": "Authentic Jambon de Bayonne or Prosciutto",
          "te": "బేయోన్ హామ్ ముక్కలు",
          "hi": "बेयोन हैम स्लाइस"
        },
        "amount": 4,
        "unit": "slices"
      },
      {
        "name": {
          "fr": "Gousses d'ail hachées",
          "en": "Garlic cloves, minced",
          "te": "వెల్లుల్లి రెబ్బలు",
          "hi": "लहसुन की कलियां"
        },
        "amount": 3,
        "unit": "cloves"
      },
      {
        "name": {
          "fr": "Piment d'Espelette AOP",
          "en": "Piment d'Espelette (Basque chili powder)",
          "te": "బాస్క్ చిల్లీ పౌడర్",
          "hi": "बास्क चिली पाउडर"
        },
        "amount": 1,
        "unit": "tsp"
      },
      {
        "name": {
          "fr": "Huile d'olive vierge extra",
          "en": "Extra virgin olive oil",
          "te": "ఆలివ్ ఆయిల్",
          "hi": "ऑलिव ऑयल"
        },
        "amount": 3,
        "unit": "tbsp"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": {
          "fr": "Confire les poivrons",
          "en": "Stew Peppers and Aromatics",
          "te": "మిరపకాయలను ఉడికించండి",
          "hi": "शिमला मिर्च धीमी आंच पर पकाएं"
        },
        "instruction": {
          "fr": "Chauffez l'huile d'olive et faites suer oignons et poivrons à feu doux 15 minutes sans coloration.",
          "en": "Warm olive oil in a skillet. Sauté onions and peppers over medium-low heat for 15 minutes until meltingly tender.",
          "te": "పాన్‌లో ఆలివ్ ఆయిల్ వేసి, ఉల్లిపాయలు మరియు మిరపకాయలను 15 నిమిషాలు వేయించండి.",
          "hi": "पैन में ऑलिव ऑयल गर्म करें और प्याज व मिर्च को 15 मिनट तक धीमी आंच पर भूनें।"
        }
      },
      {
        "step": 2,
        "title": {
          "fr": "Mijoter la sauce",
          "en": "Add Tomatoes and Espelette",
          "te": "టమోటాలు మరియు మసాలాలు కలపండి",
          "hi": "टमाटर और मसाले मिलाएं"
        },
        "instruction": {
          "fr": "Ajoutez tomates, ail et piment d'Espelette. Laissez compoter 10 minutes jusqu'à réduction du jus.",
          "en": "Stir in tomatoes, garlic, and Piment d'Espelette. Simmer for 10 minutes until excess moisture evaporates into a thick sauce.",
          "te": "టమోటాలు, వెల్లుల్లి మరియు మసాలా వేసి 10 నిమిషాలు సాస్ చిక్కబడే వరకు ఉడికించండి.",
          "hi": "टमाटर, लहसुन और बास्क मसाला डालें और 10 मिनट तक गाढ़ा होने तक पकाएं।"
        }
      },
      {
        "step": 3,
        "title": {
          "fr": "Lier aux œufs",
          "en": "Fold Eggs and Sear Ham",
          "te": "గుడ్లను కలపండి మరియు వడ్డించండి",
          "hi": "अंडे मिलाएं और परोसें"
        },
        "instruction": {
          "fr": "Versez les œufs battus et remuez doucement hors du feu pour obtenir une texture crémeuse. Poêlez le jambon 30 secondes et déposez dessus.",
          "en": "Pour in beaten eggs and stir gently over low heat until soft curds form. In a separate pan, flash-sear Bayonne ham slices for 30 seconds and serve on top.",
          "te": "గుడ్లను నెమ్మదిగా కలిపి క్రీమీగా అయ్యే వరకు ఉడికించండి. పక్కన వేయించిన హామ్‌తో వేడిగా వడ్డించండి.",
          "hi": "अंडे डालकर धीमी आंच पर मखमली होने तक चलाएं और ऊपर से हल्का सिका हुआ हैम रखकर परोसें।"
        }
      }
    ]
  },
  "galette_bretonne": {
    "title": {
      "fr": "Galette Bretonne Complète",
      "en": "Brittany Buckwheat Galette Complète",
      "te": "గ్యాలెట్ బ్రిటన్ (బక్‌వీట్ ఫ్రెంచ్ క్రేప్)",
      "hi": "गैलेट ब्रेटोन (कुट्टू के आटे से बना क्लासिक फ्रेंच क्रेप)"
    },
    "subtitle": {
      "fr": "Galette de sarrasin croustillante au beurre demi-sel, jambon blanc, emmental et œuf miroir.",
      "en": "Lacy buckwheat crêpe folded around French ham, melting Gruyère & a sunny egg.",
      "te": "ఫ్రెంచ్ హామ్, చీజ్ మరియు గుడ్డుతో కూడిన సాంప్రదాయ బక్‌వీట్ క్రేప్.",
      "hi": "हैम, पिघली हुई ग्रुयेर चीज़ और आधे तले अंडे से बना स्वादिष्ट फ्रेंच क्रेप।"
    },
    "categoryLabel": {
      "fr": "Institution Bretonne",
      "en": "Brittany Crêperie Icon",
      "te": "బ్రిటనీ క్రేప్ ఐకాన్",
      "hi": "ब्रिटनी क्लासिक डिश"
    },
    "description": {
      "fr": "L'incontournable des crêperies bretonnes : une pâte 100% blé noir tournée sur bilig au beurre demi-sel, garnie d'un œuf au jaune coulant, de fromage râpé fondant et d'une tranche de jambon artisanal.",
      "en": "The crown jewel of Brittany's seaside crêperies: an ultra-crisp, nutty 100% buckwheat flour galette crisped on a sizzling billig griddle with salted French butter, filled with artisanal cooked ham, grated Gruyère cheese, and crowned with a golden runny egg yolk.",
      "te": "సహజ సిద్ధమైన బక్‌వీట్ పిండితో తయారు చేసిన క్రిస్పీ ఫ్రెంచ్ క్రేప్. దీని మధ్యలో చీజ్, హామ్ మరియు గుడ్డు వేసి మడతపెడతారు.",
      "hi": "कुट्टू के आटे से बना खस्ता फ्रेंच नमकीन क्रेप, जिसमें मक्खन, पिघला हुआ पनीर, स्वादिष्ट हैम और बीच में अंडा रखकर चौकोर मोड़ा जाता है।"
    },
    "winePairing": {
      "wine": {
        "fr": "Cidre Brut Fermier de Bretagne",
        "en": "Brut Breton Artisanal Cider",
        "te": "బ్రూట్ బ్రిటన్ ఆపిల్ సైడర్",
        "hi": "पारंपरिक ब्रूट ब्रिटनी साइडर"
      },
      "notes": {
        "fr": "L'effervescence vive et les notes de pomme acidulée nettoient le palais entre chaque bouchée beurrée.",
        "en": "Crisp, effervescent dry Brittany apple cider pairs harmoniously with nutty roasted buckwheat and savory melted cheese.",
        "te": "బట్టర్ మరియు చీజ్ రుచులకు సరిపోయే ఫ్రెష్ ఆపిల్ సైడర్.",
        "hi": "मक्खन और चीज़ के समृद्ध स्वाद के साथ ताज़ा सेब का साइडर एकदम सही जोड़ी बनाता है।"
      }
    },
    "chefTip": {
      "fr": "N'ajoutez pas d'œuf dans la pâte : le vrai secret breton réside dans le battage vigoureux pour incorporer l'air et le repos au frais.",
      "en": "Rest the buckwheat batter overnight in the refrigerator; the cold rest creates the signature micro-lacework holes ('krampouz') when batter hits the smoking-hot griddle.",
      "te": "పిండిని కనీసం 2 గంటలు ఫ్రిజ్‌లో ఉంచండి, ఇది పెనం మీద సన్నని క్రిస్పీ హోల్స్ ఏర్పడటానికి సహాయపడుతుంది.",
      "hi": "घोल को 2 घंटे फ्रिज में रखें, जिससे गर्म तवे पर डालते ही जालीदार खस्तापन बनता है।"
    },
    "ingredients": [
      {
        "name": {
          "fr": "Farine de blé noir de Bretagne IGP",
          "en": "Organic buckwheat flour (Farine de Blé Noir)",
          "te": "బక్‌వీట్ పిండి",
          "hi": "कुट्टू का आटा"
        },
        "amount": 250,
        "unit": "g"
      },
      {
        "name": {
          "fr": "Eau froide et fleur de sel de Guérande",
          "en": "Cold water & pinch of Brittany coarse sea salt",
          "te": "చల్లటి నీరు మరియు ఉప్పు",
          "hi": "ठंडा पानी और समुद्री नमक"
        },
        "amount": 500,
        "unit": "ml"
      },
      {
        "name": {
          "fr": "Beurre demi-sel artisanal",
          "en": "Artisanal salted French butter (Demi-sel)",
          "te": "ఫ్రెంచ్ సాల్టెడ్ బటర్",
          "hi": "नमकीन फ्रेंच मक्खन"
        },
        "amount": 60,
        "unit": "g"
      },
      {
        "name": {
          "fr": "Jambon blanc supérieur",
          "en": "French cooked ham (Jambon de Paris)",
          "te": "ఫ్రెంచ్ కుక్డ్ హామ్",
          "hi": "फ्रेंच कुक्ड हैम"
        },
        "amount": 4,
        "unit": "slices"
      },
      {
        "name": {
          "fr": "Gruyère ou Emmental râpé",
          "en": "Grated aged Gruyère or Emmental cheese",
          "te": "తురిమిన గ్రేయర్ చీజ్",
          "hi": "कद्दूकस की हुई ग्रुयेर चीज़"
        },
        "amount": 150,
        "unit": "g"
      },
      {
        "name": {
          "fr": "Œufs frais de ferme",
          "en": "Farm egg per galette",
          "te": "తాజా కోడిగుడ్లు",
          "hi": "ताजे अंडे"
        },
        "amount": 4,
        "unit": "pcs"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": {
          "fr": "Battre la pâte",
          "en": "Whisk Aerated Batter",
          "te": "పిండిని కలపండి",
          "hi": "घोल तैयार करें"
        },
        "instruction": {
          "fr": "Battez énergiquement la farine, le sel et l'eau jusqu'à formation de bulles d'air. Laissez reposer 2 heures au frais.",
          "en": "Vigorously beat buckwheat flour, salt, and cold water with a wooden spoon until glossy and bubbling. Rest chilled for at least 2 hours.",
          "te": "పిండి, ఉప్పు మరియు నీటిని బాగా కలిపి 2 గంటల పాటు నానబెట్టండి.",
          "hi": "आटा, नमक और पानी को अच्छी तरह फेंटें और 2 घंटे के लिए ठंडा होने रख दें।"
        }
      },
      {
        "step": 2,
        "title": {
          "fr": "Cuire sur bilig",
          "en": "Spread on Scorching Griddle",
          "te": "పెనం మీద వేయండి",
          "hi": "तवे पर फैलाएं"
        },
        "instruction": {
          "fr": "Étalez une louche de pâte d'un geste circulaire sur le bilig très chaud graissé au beurre demi-sel. Cuisez 2 minutes.",
          "en": "Melt salted butter on a 220°C (425°F) griddle. Pour a ladle of batter and spread into a razor-thin circle using a rosette spreader. Cook 2 minutes until lacy and crisp.",
          "te": "వేడి పెనంపై బటర్ రాసి, సన్నని పొరలా పిండిని వేసి 2 నిమిషాలు కాల్చండి.",
          "hi": "तवे पर मक्खन लगाएं और पतली जालीदार परत बनाकर 2 मिनट तक सेकें।"
        }
      },
      {
        "step": 3,
        "title": {
          "fr": "Garnir et plier",
          "en": "Fill and Square-Fold",
          "te": "చీజ్, గుడ్డు వేసి మడతపెట్టండి",
          "hi": "चीज़ और अंडा डालकर मोड़ें"
        },
        "instruction": {
          "fr": "Cassez l'œuf au centre, étalez le blanc, parsemez de fromage et déposez le jambon. Rabattez les 4 côtés en carré.",
          "en": "Crack an egg in the center, spread egg white over galette. Sprinkle Gruyère, lay ham slice, and fold four edges inward into a classic square leaving the golden yolk exposed.",
          "te": "మధ్యలో గుడ్డు వేసి, పైన చీజ్ మరియు హామ్ వేసి నాలుగు వైపులా చతురస్రాకారంలో మడతపెట్టండి.",
          "hi": "बीच में अंडा तोड़ें, चीज़ और हैम डालें और चारों कोनों को मोड़कर चौकोर आकार दें।"
        }
      }
    ]
  }
};

// Global Exposure
if (typeof window !== "undefined") {
  window.RECIPE_TRANSLATIONS = RECIPE_TRANSLATIONS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { RECIPE_TRANSLATIONS };
}

