const STARTER_RECIPES = [
  // ===== BREAKFAST =====
  {
    id: "overnight-oats",
    name: { en: "Overnight Oats", es: "Avena Nocturna" },
    category: "breakfast",
    servings: 2,
    prepTime: 10,
    cookTime: 0,
    ingredients: [
      { name: { en: "rolled oats", es: "avena en hojuelas" }, amount: 100, unit: "g" },
      { name: { en: "milk", es: "leche" }, amount: 250, unit: "ml" },
      { name: { en: "yogurt", es: "yogur" }, amount: 100, unit: "g" },
      { name: { en: "honey", es: "miel" }, amount: 2, unit: "tbsp" },
      { name: { en: "chia seeds", es: "semillas de chía" }, amount: 1, unit: "tbsp" },
      { name: { en: "fresh berries", es: "frutos rojos frescos" }, amount: 80, unit: "g" }
    ],
    instructions: {
      en: [
        "Mix oats, milk, yogurt, honey, and chia seeds in a jar or bowl.",
        "Stir well, cover, and refrigerate overnight (at least 6 hours).",
        "In the morning, top with fresh berries and serve cold."
      ],
      es: [
        "Mezcla la avena, leche, yogur, miel y semillas de chía en un frasco o bowl.",
        "Revuelve bien, cubre y refrigera toda la noche (al menos 6 horas).",
        "En la mañana, agrega frutos rojos frescos y sirve frío."
      ]
    },
    isCustom: false
  },
  {
    id: "scrambled-eggs-toast",
    name: { en: "Scrambled Eggs & Toast", es: "Huevos Revueltos con Tostada" },
    category: "breakfast",
    servings: 2,
    prepTime: 5,
    cookTime: 5,
    ingredients: [
      { name: { en: "eggs", es: "huevos" }, amount: 4, unit: "units" },
      { name: { en: "butter", es: "mantequilla" }, amount: 15, unit: "g" },
      { name: { en: "milk", es: "leche" }, amount: 30, unit: "ml" },
      { name: { en: "bread slices", es: "rebanadas de pan" }, amount: 4, unit: "units" },
      { name: { en: "salt", es: "sal" }, amount: 1, unit: "tsp" },
      { name: { en: "pepper", es: "pimienta" }, amount: 0.5, unit: "tsp" }
    ],
    instructions: {
      en: [
        "Crack eggs into a bowl, add milk, salt, and pepper. Whisk well.",
        "Melt butter in a non-stick pan over medium-low heat.",
        "Pour in eggs and stir gently with a spatula, forming soft curds.",
        "Remove from heat while still slightly wet — they'll finish cooking.",
        "Toast bread and serve alongside the eggs."
      ],
      es: [
        "Rompe los huevos en un bowl, agrega leche, sal y pimienta. Bate bien.",
        "Derrite la mantequilla en un sartén antiadherente a fuego medio-bajo.",
        "Vierte los huevos y revuelve suavemente con una espátula, formando grumos suaves.",
        "Retira del fuego mientras aún estén ligeramente húmedos — terminarán de cocinarse.",
        "Tuesta el pan y sirve junto a los huevos."
      ]
    },
    isCustom: false
  },
  {
    id: "fruit-smoothie",
    name: { en: "Fruit Smoothie", es: "Batido de Frutas" },
    category: "breakfast",
    servings: 2,
    prepTime: 5,
    cookTime: 0,
    ingredients: [
      { name: { en: "banana", es: "banano" }, amount: 2, unit: "units" },
      { name: { en: "frozen strawberries", es: "fresas congeladas" }, amount: 150, unit: "g" },
      { name: { en: "milk", es: "leche" }, amount: 300, unit: "ml" },
      { name: { en: "honey", es: "miel" }, amount: 1, unit: "tbsp" },
      { name: { en: "ice cubes", es: "cubos de hielo" }, amount: 4, unit: "units" }
    ],
    instructions: {
      en: [
        "Peel bananas and add to blender.",
        "Add frozen strawberries, milk, honey, and ice cubes.",
        "Blend on high for 60 seconds until smooth.",
        "Pour into glasses and serve immediately."
      ],
      es: [
        "Pela los bananos y agrégalos a la licuadora.",
        "Agrega las fresas congeladas, leche, miel y cubos de hielo.",
        "Licúa a máxima velocidad por 60 segundos hasta que quede suave.",
        "Sirve en vasos inmediatamente."
      ]
    },
    isCustom: false
  },
  {
    id: "pancakes",
    name: { en: "Pancakes", es: "Panqueques" },
    category: "breakfast",
    servings: 4,
    prepTime: 10,
    cookTime: 15,
    ingredients: [
      { name: { en: "all-purpose flour", es: "harina de trigo" }, amount: 200, unit: "g" },
      { name: { en: "milk", es: "leche" }, amount: 300, unit: "ml" },
      { name: { en: "eggs", es: "huevos" }, amount: 2, unit: "units" },
      { name: { en: "sugar", es: "azúcar" }, amount: 2, unit: "tbsp" },
      { name: { en: "baking powder", es: "polvo para hornear" }, amount: 2, unit: "tsp" },
      { name: { en: "butter", es: "mantequilla" }, amount: 30, unit: "g" },
      { name: { en: "maple syrup", es: "jarabe de arce" }, amount: 60, unit: "ml" }
    ],
    instructions: {
      en: [
        "Mix flour, sugar, and baking powder in a large bowl.",
        "Whisk milk and eggs together, then pour into dry ingredients. Stir until just combined (lumps are OK).",
        "Melt butter and stir into the batter.",
        "Heat a non-stick pan over medium heat. Pour ~60ml batter per pancake.",
        "Cook until bubbles form on surface (2-3 min), flip, cook 1-2 more minutes.",
        "Serve stacked with maple syrup."
      ],
      es: [
        "Mezcla la harina, azúcar y polvo para hornear en un bowl grande.",
        "Bate la leche y los huevos juntos, luego vierte sobre los ingredientes secos. Revuelve hasta combinar (los grumos están bien).",
        "Derrite la mantequilla e incorpórala a la mezcla.",
        "Calienta un sartén antiadherente a fuego medio. Vierte ~60ml de mezcla por panqueque.",
        "Cocina hasta que se formen burbujas en la superficie (2-3 min), voltea, cocina 1-2 minutos más.",
        "Sirve apilados con jarabe de arce."
      ]
    },
    isCustom: false
  },

  // ===== LUNCH =====
  {
    id: "chicken-caesar-salad",
    name: { en: "Chicken Caesar Salad", es: "Ensalada César con Pollo" },
    category: "lunch",
    servings: 2,
    prepTime: 15,
    cookTime: 10,
    ingredients: [
      { name: { en: "chicken breast", es: "pechuga de pollo" }, amount: 300, unit: "g" },
      { name: { en: "romaine lettuce", es: "lechuga romana" }, amount: 200, unit: "g" },
      { name: { en: "parmesan cheese", es: "queso parmesano" }, amount: 40, unit: "g" },
      { name: { en: "croutons", es: "crutones" }, amount: 50, unit: "g" },
      { name: { en: "Caesar dressing", es: "aderezo César" }, amount: 60, unit: "ml" },
      { name: { en: "olive oil", es: "aceite de oliva" }, amount: 1, unit: "tbsp" }
    ],
    instructions: {
      en: [
        "Season chicken with salt and pepper. Heat olive oil in a pan over medium-high heat.",
        "Cook chicken 5-6 minutes per side until golden and cooked through. Let rest 5 minutes, then slice.",
        "Wash and chop romaine lettuce into bite-size pieces.",
        "Toss lettuce with Caesar dressing in a large bowl.",
        "Top with sliced chicken, shaved parmesan, and croutons."
      ],
      es: [
        "Sazona el pollo con sal y pimienta. Calienta aceite de oliva en un sartén a fuego medio-alto.",
        "Cocina el pollo 5-6 minutos por lado hasta que esté dorado y cocido. Deja reposar 5 minutos, luego corta en rodajas.",
        "Lava y pica la lechuga romana en trozos pequeños.",
        "Mezcla la lechuga con el aderezo César en un bowl grande.",
        "Agrega el pollo en rodajas, parmesano rallado y crutones."
      ]
    },
    isCustom: false
  },
  {
    id: "grilled-cheese-tomato-soup",
    name: { en: "Grilled Cheese & Tomato Soup", es: "Sándwich de Queso a la Plancha y Sopa de Tomate" },
    category: "lunch",
    servings: 2,
    prepTime: 10,
    cookTime: 20,
    ingredients: [
      { name: { en: "bread slices", es: "rebanadas de pan" }, amount: 4, unit: "units" },
      { name: { en: "cheddar cheese", es: "queso cheddar" }, amount: 100, unit: "g" },
      { name: { en: "butter", es: "mantequilla" }, amount: 30, unit: "g" },
      { name: { en: "canned crushed tomatoes", es: "tomates triturados enlatados" }, amount: 400, unit: "g" },
      { name: { en: "onion", es: "cebolla" }, amount: 1, unit: "units" },
      { name: { en: "garlic cloves", es: "dientes de ajo" }, amount: 2, unit: "units" },
      { name: { en: "vegetable broth", es: "caldo de verduras" }, amount: 200, unit: "ml" },
      { name: { en: "olive oil", es: "aceite de oliva" }, amount: 1, unit: "tbsp" }
    ],
    instructions: {
      en: [
        "For the soup: dice onion and mince garlic. Heat olive oil in a pot, sauté onion until soft (5 min).",
        "Add garlic, cook 1 minute. Add crushed tomatoes and broth. Simmer 15 minutes.",
        "Blend soup with an immersion blender (or leave chunky). Season with salt and pepper.",
        "For grilled cheese: butter one side of each bread slice. Place cheese between unbuttered sides.",
        "Cook in a pan over medium heat, 3-4 minutes per side until golden and cheese melts."
      ],
      es: [
        "Para la sopa: pica la cebolla y el ajo. Calienta aceite de oliva en una olla, sofríe la cebolla hasta que esté suave (5 min).",
        "Agrega el ajo, cocina 1 minuto. Agrega los tomates triturados y el caldo. Cocina a fuego lento 15 minutos.",
        "Licúa la sopa con una licuadora de inmersión (o déjala con trozos). Sazona con sal y pimienta.",
        "Para el sándwich: unta mantequilla en un lado de cada rebanada. Coloca el queso entre los lados sin mantequilla.",
        "Cocina en un sartén a fuego medio, 3-4 minutos por lado hasta que esté dorado y el queso se derrita."
      ]
    },
    isCustom: false
  },
  {
    id: "tuna-wrap",
    name: { en: "Tuna Wrap", es: "Wrap de Atún" },
    category: "lunch",
    servings: 2,
    prepTime: 10,
    cookTime: 0,
    ingredients: [
      { name: { en: "canned tuna", es: "atún enlatado" }, amount: 200, unit: "g" },
      { name: { en: "flour tortillas", es: "tortillas de harina" }, amount: 2, unit: "units" },
      { name: { en: "mayonnaise", es: "mayonesa" }, amount: 2, unit: "tbsp" },
      { name: { en: "lettuce leaves", es: "hojas de lechuga" }, amount: 4, unit: "units" },
      { name: { en: "tomato", es: "tomate" }, amount: 1, unit: "units" },
      { name: { en: "red onion", es: "cebolla morada" }, amount: 0.5, unit: "units" }
    ],
    instructions: {
      en: [
        "Drain tuna and mix with mayonnaise in a bowl.",
        "Slice tomato and red onion thinly.",
        "Lay tortillas flat. Place lettuce leaves in the center.",
        "Add tuna mixture, tomato slices, and onion on top.",
        "Fold bottom up, then roll sides in tightly. Cut in half."
      ],
      es: [
        "Escurre el atún y mezcla con mayonesa en un bowl.",
        "Corta el tomate y la cebolla morada en rodajas finas.",
        "Coloca las tortillas planas. Pon las hojas de lechuga en el centro.",
        "Agrega la mezcla de atún, rodajas de tomate y cebolla encima.",
        "Dobla la parte inferior hacia arriba, luego enrolla los lados firmemente. Corta por la mitad."
      ]
    },
    isCustom: false
  },
  {
    id: "pasta-salad",
    name: { en: "Pasta Salad", es: "Ensalada de Pasta" },
    category: "lunch",
    servings: 4,
    prepTime: 10,
    cookTime: 10,
    ingredients: [
      { name: { en: "fusilli pasta", es: "pasta fusilli" }, amount: 300, unit: "g" },
      { name: { en: "cherry tomatoes", es: "tomates cherry" }, amount: 150, unit: "g" },
      { name: { en: "cucumber", es: "pepino" }, amount: 1, unit: "units" },
      { name: { en: "black olives", es: "aceitunas negras" }, amount: 80, unit: "g" },
      { name: { en: "feta cheese", es: "queso feta" }, amount: 100, unit: "g" },
      { name: { en: "olive oil", es: "aceite de oliva" }, amount: 3, unit: "tbsp" },
      { name: { en: "lemon juice", es: "jugo de limón" }, amount: 2, unit: "tbsp" }
    ],
    instructions: {
      en: [
        "Cook pasta according to package directions. Drain and rinse under cold water.",
        "Halve cherry tomatoes, dice cucumber, and slice olives.",
        "Combine pasta with all vegetables in a large bowl.",
        "Whisk olive oil and lemon juice with salt and pepper for dressing.",
        "Toss salad with dressing, crumble feta on top. Serve cold."
      ],
      es: [
        "Cocina la pasta según las instrucciones del paquete. Escurre y enjuaga con agua fría.",
        "Corta los tomates cherry por la mitad, pica el pepino en cubos y corta las aceitunas.",
        "Combina la pasta con todas las verduras en un bowl grande.",
        "Mezcla aceite de oliva y jugo de limón con sal y pimienta para el aderezo.",
        "Mezcla la ensalada con el aderezo, desmorona el queso feta encima. Sirve frío."
      ]
    },
    isCustom: false
  },

  // ===== DINNER =====
  {
    id: "chicken-stir-fry",
    name: { en: "Chicken Stir Fry", es: "Salteado de Pollo" },
    category: "dinner",
    servings: 4,
    prepTime: 15,
    cookTime: 10,
    ingredients: [
      { name: { en: "chicken breast", es: "pechuga de pollo" }, amount: 500, unit: "g" },
      { name: { en: "soy sauce", es: "salsa de soya" }, amount: 3, unit: "tbsp" },
      { name: { en: "bell pepper", es: "pimentón" }, amount: 2, unit: "units" },
      { name: { en: "broccoli florets", es: "floretes de brócoli" }, amount: 200, unit: "g" },
      { name: { en: "garlic cloves", es: "dientes de ajo" }, amount: 3, unit: "units" },
      { name: { en: "ginger (grated)", es: "jengibre (rallado)" }, amount: 1, unit: "tbsp" },
      { name: { en: "sesame oil", es: "aceite de sésamo" }, amount: 1, unit: "tbsp" },
      { name: { en: "cornstarch", es: "maicena" }, amount: 1, unit: "tbsp" },
      { name: { en: "rice", es: "arroz" }, amount: 300, unit: "g" }
    ],
    instructions: {
      en: [
        "Cook rice according to package directions.",
        "Cut chicken into bite-size strips. Toss with 1 tbsp soy sauce and cornstarch.",
        "Heat sesame oil in a wok or large pan over high heat.",
        "Stir-fry chicken 4-5 minutes until golden. Remove and set aside.",
        "Add garlic, ginger, bell pepper, and broccoli. Stir-fry 3-4 minutes.",
        "Return chicken to pan, add remaining soy sauce, toss to combine.",
        "Serve over rice."
      ],
      es: [
        "Cocina el arroz según las instrucciones del paquete.",
        "Corta el pollo en tiras pequeñas. Mezcla con 1 cda de salsa de soya y maicena.",
        "Calienta aceite de sésamo en un wok o sartén grande a fuego alto.",
        "Saltea el pollo 4-5 minutos hasta que esté dorado. Retira y reserva.",
        "Agrega ajo, jengibre, pimentón y brócoli. Saltea 3-4 minutos.",
        "Regresa el pollo al sartén, agrega el resto de la salsa de soya, mezcla todo.",
        "Sirve sobre arroz."
      ]
    },
    isCustom: false
  },
  {
    id: "spaghetti-bolognese",
    name: { en: "Spaghetti Bolognese", es: "Espaguetis a la Boloñesa" },
    category: "dinner",
    servings: 4,
    prepTime: 10,
    cookTime: 30,
    ingredients: [
      { name: { en: "spaghetti", es: "espaguetis" }, amount: 400, unit: "g" },
      { name: { en: "ground beef", es: "carne molida" }, amount: 500, unit: "g" },
      { name: { en: "canned crushed tomatoes", es: "tomates triturados enlatados" }, amount: 400, unit: "g" },
      { name: { en: "onion", es: "cebolla" }, amount: 1, unit: "units" },
      { name: { en: "garlic cloves", es: "dientes de ajo" }, amount: 3, unit: "units" },
      { name: { en: "olive oil", es: "aceite de oliva" }, amount: 2, unit: "tbsp" },
      { name: { en: "dried oregano", es: "orégano seco" }, amount: 1, unit: "tsp" },
      { name: { en: "parmesan cheese", es: "queso parmesano" }, amount: 40, unit: "g" }
    ],
    instructions: {
      en: [
        "Dice onion and mince garlic. Heat olive oil in a large pot over medium heat.",
        "Sauté onion until soft (5 min), add garlic, cook 1 minute.",
        "Add ground beef, break apart with a spoon, cook until browned (8 min).",
        "Add crushed tomatoes, oregano, salt, and pepper. Simmer 20 minutes.",
        "Meanwhile, cook spaghetti according to package directions. Drain.",
        "Serve spaghetti topped with bolognese sauce and grated parmesan."
      ],
      es: [
        "Pica la cebolla y el ajo. Calienta aceite de oliva en una olla grande a fuego medio.",
        "Sofríe la cebolla hasta que esté suave (5 min), agrega el ajo, cocina 1 minuto.",
        "Agrega la carne molida, desmorona con una cuchara, cocina hasta dorar (8 min).",
        "Agrega los tomates triturados, orégano, sal y pimienta. Cocina a fuego lento 20 minutos.",
        "Mientras tanto, cocina los espaguetis según las instrucciones del paquete. Escurre.",
        "Sirve los espaguetis con la salsa boloñesa y parmesano rallado."
      ]
    },
    isCustom: false
  },
  {
    id: "grilled-salmon-veggies",
    name: { en: "Grilled Salmon & Veggies", es: "Salmón a la Parrilla con Vegetales" },
    category: "dinner",
    servings: 2,
    prepTime: 10,
    cookTime: 15,
    ingredients: [
      { name: { en: "salmon fillets", es: "filetes de salmón" }, amount: 2, unit: "units" },
      { name: { en: "zucchini", es: "calabacín" }, amount: 1, unit: "units" },
      { name: { en: "asparagus", es: "espárragos" }, amount: 200, unit: "g" },
      { name: { en: "cherry tomatoes", es: "tomates cherry" }, amount: 150, unit: "g" },
      { name: { en: "olive oil", es: "aceite de oliva" }, amount: 2, unit: "tbsp" },
      { name: { en: "lemon", es: "limón" }, amount: 1, unit: "units" },
      { name: { en: "salt", es: "sal" }, amount: 1, unit: "tsp" },
      { name: { en: "pepper", es: "pimienta" }, amount: 0.5, unit: "tsp" }
    ],
    instructions: {
      en: [
        "Preheat oven to 200°C (400°F) or heat grill to medium-high.",
        "Slice zucchini into rounds, trim asparagus, halve cherry tomatoes.",
        "Toss vegetables with 1 tbsp olive oil, salt, and pepper on a baking sheet.",
        "Season salmon with remaining olive oil, salt, pepper, and lemon juice.",
        "Roast/grill vegetables 10 minutes, then add salmon. Cook 12-15 minutes until salmon flakes.",
        "Serve with lemon wedges."
      ],
      es: [
        "Precalienta el horno a 200°C o calienta la parrilla a fuego medio-alto.",
        "Corta el calabacín en rodajas, recorta los espárragos, corta los tomates cherry por la mitad.",
        "Mezcla los vegetales con 1 cda de aceite de oliva, sal y pimienta en una bandeja.",
        "Sazona el salmón con el resto del aceite de oliva, sal, pimienta y jugo de limón.",
        "Asa los vegetales 10 minutos, luego agrega el salmón. Cocina 12-15 minutos hasta que el salmón se deshaga.",
        "Sirve con rodajas de limón."
      ]
    },
    isCustom: false
  },
  {
    id: "tacos",
    name: { en: "Tacos", es: "Tacos" },
    category: "dinner",
    servings: 4,
    prepTime: 15,
    cookTime: 10,
    ingredients: [
      { name: { en: "ground beef", es: "carne molida" }, amount: 400, unit: "g" },
      { name: { en: "taco shells", es: "tortillas para tacos" }, amount: 8, unit: "units" },
      { name: { en: "lettuce", es: "lechuga" }, amount: 100, unit: "g" },
      { name: { en: "tomato", es: "tomate" }, amount: 2, unit: "units" },
      { name: { en: "shredded cheese", es: "queso rallado" }, amount: 80, unit: "g" },
      { name: { en: "sour cream", es: "crema agria" }, amount: 60, unit: "ml" },
      { name: { en: "cumin", es: "comino" }, amount: 1, unit: "tsp" },
      { name: { en: "chili powder", es: "chile en polvo" }, amount: 1, unit: "tsp" },
      { name: { en: "garlic powder", es: "ajo en polvo" }, amount: 0.5, unit: "tsp" }
    ],
    instructions: {
      en: [
        "Cook ground beef in a pan over medium-high heat, breaking apart with a spoon (8 min).",
        "Drain excess fat. Add cumin, chili powder, garlic powder, salt. Stir and cook 2 more minutes.",
        "Warm taco shells according to package directions.",
        "Shred lettuce, dice tomatoes.",
        "Assemble tacos: meat, lettuce, tomato, cheese, and sour cream."
      ],
      es: [
        "Cocina la carne molida en un sartén a fuego medio-alto, desmenuza con una cuchara (8 min).",
        "Escurre el exceso de grasa. Agrega comino, chile en polvo, ajo en polvo, sal. Revuelve y cocina 2 minutos más.",
        "Calienta las tortillas según las instrucciones del paquete.",
        "Pica la lechuga, corta los tomates en cubos.",
        "Arma los tacos: carne, lechuga, tomate, queso y crema agria."
      ]
    },
    isCustom: false
  },
  {
    id: "rice-beans-chicken",
    name: { en: "Rice & Beans with Chicken", es: "Arroz con Frijoles y Pollo" },
    category: "dinner",
    servings: 4,
    prepTime: 10,
    cookTime: 25,
    ingredients: [
      { name: { en: "chicken thighs", es: "muslos de pollo" }, amount: 600, unit: "g" },
      { name: { en: "rice", es: "arroz" }, amount: 300, unit: "g" },
      { name: { en: "canned black beans", es: "frijoles negros enlatados" }, amount: 400, unit: "g" },
      { name: { en: "onion", es: "cebolla" }, amount: 1, unit: "units" },
      { name: { en: "garlic cloves", es: "dientes de ajo" }, amount: 3, unit: "units" },
      { name: { en: "cumin", es: "comino" }, amount: 1, unit: "tsp" },
      { name: { en: "olive oil", es: "aceite de oliva" }, amount: 2, unit: "tbsp" },
      { name: { en: "lime", es: "lima" }, amount: 1, unit: "units" }
    ],
    instructions: {
      en: [
        "Cook rice according to package directions.",
        "Season chicken with cumin, salt, and pepper. Heat olive oil in a pan over medium-high heat.",
        "Cook chicken 6-7 minutes per side until golden and cooked through. Let rest, then slice.",
        "In the same pan, sauté diced onion and garlic for 3 minutes.",
        "Add drained beans, stir and heat through (3 min).",
        "Serve chicken over rice and beans. Squeeze lime on top."
      ],
      es: [
        "Cocina el arroz según las instrucciones del paquete.",
        "Sazona el pollo con comino, sal y pimienta. Calienta aceite de oliva en un sartén a fuego medio-alto.",
        "Cocina el pollo 6-7 minutos por lado hasta que esté dorado y cocido. Deja reposar, luego corta.",
        "En el mismo sartén, sofríe la cebolla picada y el ajo por 3 minutos.",
        "Agrega los frijoles escurridos, revuelve y calienta (3 min).",
        "Sirve el pollo sobre arroz y frijoles. Exprime lima encima."
      ]
    },
    isCustom: false
  }
];
