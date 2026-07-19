import type { Organelle } from '@/types/organelle'

export const peroxisome: Organelle = {
  id: 'peroxisome',
  cellTypes: ['animal', 'plant'],
  name: 'Peroxisome',
  pluralName: 'Peroxisomes',

  shortDescription:
    'A small, membrane-bound organelle that breaks down fatty acids and neutralizes toxic byproducts, ' +
    'particularly hydrogen peroxide.',

  deepDescription:
    'Peroxisomes are small, roughly spherical organelles enclosed by a single membrane, containing a ' +
    'dense collection of enzymes specialized for oxidative reactions. Their name comes from their most ' +
    'distinctive job: many of the reactions occurring inside a peroxisome generate hydrogen peroxide ' +
    '(H₂O₂) as a byproduct — a compound that\'s toxic to the cell in any quantity. Rather than letting ' +
    'this dangerous byproduct escape into the cytoplasm, peroxisomes contain an enzyme called catalase, ' +
    'which immediately breaks the hydrogen peroxide down into harmless water and oxygen, all within the ' +
    'same compartment where it was produced. Beyond this detoxification role, peroxisomes are heavily ' +
    'involved in breaking down long-chain fatty acids through a process called beta-oxidation, ' +
    'shortening them into smaller molecules the mitochondria can then use for energy production. In ' +
    'plant cells specifically, a specialized type of peroxisome called a glyoxysome plays an additional ' +
    'role in seeds, converting stored fats into sugars to fuel a seedling\'s early growth before it can ' +
    'photosynthesize on its own. Unlike mitochondria and chloroplasts, peroxisomes contain no DNA of ' +
    'their own — they\'re built and supplied entirely with proteins imported from the cytoplasm, and ' +
    'they multiply by simply dividing in two, similar to how bacteria reproduce.',

  function:
    'Break down fatty acids and neutralize toxic byproducts like hydrogen peroxide, protecting the ' +
    'rest of the cell from oxidative damage.',

  analogy:
    'Functions like a hazmat containment room — reactions that produce dangerous byproducts happen in ' +
    'a sealed, self-contained space, where the danger (hydrogen peroxide) is immediately neutralized ' +
    'before it can ever escape and cause harm elsewhere.',

  comparisonNotes: {
    prokaryotic:
      'Prokaryotic cells have no peroxisomes, or any membrane-bound organelles at all. Any oxidative or ' +
      'detoxifying reactions a bacterium performs happen directly in the cytoplasm, without the ' +
      'contained, compartmentalized safety peroxisomes provide in eukaryotic cells.',
  },

  scenePosition: {
    animal: { x: -1.9, y: -1.8, z: 1.5 },
    plant: { x: 2.6, y: -1.6, z: 1.9 },
  },

  sceneScale: {
    animal: 0.35,
    plant: 0.35,
  },

  animation: {
    animationId: 'peroxisome-detoxification',
    label: 'Watch hydrogen peroxide breakdown',
    durationSeconds: 10,
  },

  imageQuery: {
    query: 'peroxisome organelle structure diagram',
    fallbackAttribution: 'Structural imagery courtesy of public scientific archives.',
  },

  quizQuestions: [
    {
      id: 'peroxisome-q1',
      prompt: 'What is the primary function of a peroxisome?',
      options: [
        { id: 'a', text: 'Producing ATP for the cell', isCorrect: false },
        {
          id: 'b',
          text: 'Breaking down fatty acids and neutralizing toxic byproducts like hydrogen peroxide',
          isCorrect: true,
        },
        { id: 'c', text: 'Storing the cell\'s genetic material', isCorrect: false },
        { id: 'd', text: 'Synthesizing proteins', isCorrect: false },
      ],
      explanation:
        'Peroxisomes specialize in oxidative reactions, including fatty acid breakdown, and contain ' +
        'catalase to immediately neutralize the hydrogen peroxide those reactions produce.',
    },
    {
      id: 'peroxisome-q2',
      prompt: 'What does the enzyme catalase do inside a peroxisome?',
      options: [
        {
          id: 'a',
          text: 'Breaks down hydrogen peroxide into harmless water and oxygen',
          isCorrect: true,
        },
        { id: 'b', text: 'Synthesizes new fatty acids', isCorrect: false },
        { id: 'c', text: 'Builds the peroxisome\'s own DNA', isCorrect: false },
        { id: 'd', text: 'Transports proteins to the Golgi apparatus', isCorrect: false },
      ],
      explanation:
        'Catalase rapidly converts the toxic hydrogen peroxide generated inside the peroxisome into ' +
        'harmless water and oxygen, preventing it from damaging the rest of the cell.',
    },
    {
      id: 'peroxisome-q3',
      prompt: 'How do peroxisomes differ from mitochondria and chloroplasts in terms of their origin?',
      options: [
        {
          id: 'a',
          text: 'Peroxisomes contain no DNA of their own and are built entirely from imported proteins',
          isCorrect: true,
        },
        { id: 'b', text: 'Peroxisomes have their own circular DNA, just like mitochondria', isCorrect: false },
        { id: 'c', text: 'Peroxisomes are believed to be engulfed bacteria too', isCorrect: false },
        { id: 'd', text: 'There is no meaningful difference', isCorrect: false },
      ],
      explanation:
        'Unlike mitochondria and chloroplasts, which carry their own DNA from their endosymbiotic ' +
        'origins, peroxisomes have no DNA of their own and are assembled entirely from proteins ' +
        'imported from the cytoplasm.',
    },
  ],
}