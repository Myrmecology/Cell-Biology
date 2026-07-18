import type { Organelle } from '@/types/organelle'

export const lysosome: Organelle = {
  id: 'lysosome',
  cellTypes: ['animal'],
  name: 'Lysosome',
  pluralName: 'Lysosomes',

  shortDescription:
    'A membrane-bound sac of digestive enzymes responsible for breaking down waste, debris, and ' +
    'worn-out cellular components.',

  deepDescription:
    'Lysosomes are small, spherical organelles enclosed by a single membrane and filled with roughly ' +
    'fifty different digestive enzymes, collectively called acid hydrolases, which function optimally ' +
    'in the highly acidic environment (around pH 4.5–5.0) maintained inside the lysosome by proton ' +
    'pumps embedded in its membrane. This acidic interior is critical: if a lysosome\'s membrane were ' +
    'to rupture, the enzymes would be diluted into the neutral pH of the cytoplasm and largely lose ' +
    'their destructive activity, protecting the rest of the cell from self-digestion. Lysosomes carry ' +
    'out several essential jobs. They break down material brought into the cell through endocytosis, ' +
    'including engulfed bacteria and other pathogens. They perform autophagy, recycling the cell\'s own ' +
    'damaged or worn-out organelles by engulfing and digesting them, then releasing the reusable ' +
    'molecular building blocks back into the cytoplasm. And during programmed cell death (apoptosis), ' +
    'lysosomes can deliberately release their enzymes to help dismantle the cell in a controlled way. ' +
    'The Golgi apparatus is directly responsible for producing lysosomes, packaging digestive enzymes ' +
    'and marking them for delivery to this specialized compartment.',

  function:
    'Digest and recycle waste material, worn-out organelles, and engulfed foreign particles using a ' +
    'concentrated collection of acid-activated enzymes.',

  analogy:
    'Functions like a cell\'s dedicated recycling and waste disposal facility — broken-down materials ' +
    'aren\'t simply discarded, but taken apart into reusable raw materials the cell can put back to work.',

  comparisonNotes: {
    plant:
      'Plant cells generally lack distinct lysosomes as a separate organelle. Instead, the large ' +
      'central vacuole takes on much of the same digestive and waste-management role, containing many ' +
      'of the same hydrolytic enzymes within its own acidic interior. Rather than many small lysosomes, ' +
      'a plant cell concentrates this function into one large multipurpose compartment.',
    prokaryotic:
      'Prokaryotic cells have no lysosomes at all. Without internal membrane-bound compartments, waste ' +
      'breakdown in bacteria relies on enzymes released directly into the surrounding environment or ' +
      'periplasmic space, rather than a dedicated internal digestive organelle.',
  },

  scenePosition: {
    animal: { x: 2.4, y: 1.8, z: -0.9 },
  },

  sceneScale: {
    animal: 0.4,
  },

  animation: {
    animationId: 'lysosome-digestion',
    label: 'Watch waste digestion in action',
    durationSeconds: 11,
  },

  imageQuery: {
    query: 'lysosome structure digestive enzymes diagram',
    fallbackAttribution: 'Structural imagery courtesy of public scientific archives.',
  },

  quizQuestions: [
    {
      id: 'lysosome-q1',
      prompt: 'What is the primary role of a lysosome?',
      options: [
        { id: 'a', text: 'Producing new proteins', isCorrect: false },
        { id: 'b', text: 'Storing genetic material', isCorrect: false },
        {
          id: 'c',
          text: 'Digesting waste, debris, and worn-out cellular components using enzymes',
          isCorrect: true,
        },
        { id: 'd', text: 'Generating the cell\'s ATP supply', isCorrect: false },
      ],
      explanation:
        'Lysosomes contain a concentrated set of digestive enzymes used to break down waste material, ' +
        'engulfed particles, and the cell\'s own damaged organelles.',
    },
    {
      id: 'lysosome-q2',
      prompt: 'Why does the lysosome maintain a highly acidic internal environment?',
      options: [
        {
          id: 'a',
          text: 'Its enzymes function optimally at low pH, and it limits damage if the membrane ruptures',
          isCorrect: true,
        },
        { id: 'b', text: 'Acidity is required to store DNA', isCorrect: false },
        { id: 'c', text: 'It has no functional purpose, it\'s incidental', isCorrect: false },
        { id: 'd', text: 'It helps the lysosome move around the cell', isCorrect: false },
      ],
      explanation:
        'The acidic interior activates the lysosome\'s digestive enzymes and also serves as a safety ' +
        'mechanism — if the enzymes leaked into the cytoplasm\'s neutral pH, they would lose most of ' +
        'their destructive activity.',
    },
    {
      id: 'lysosome-q3',
      prompt: 'How do plant cells handle the digestive role that lysosomes perform in animal cells?',
      options: [
        { id: 'a', text: 'Plant cells have no need for digestion at the cellular level', isCorrect: false },
        {
          id: 'b',
          text: 'The large central vacuole takes on much of this digestive and waste-management function',
          isCorrect: true,
        },
        { id: 'c', text: 'Plant cells contain lysosomes identical to animal cells', isCorrect: false },
        { id: 'd', text: 'The cell wall performs this function', isCorrect: false },
      ],
      explanation:
        'Rather than numerous small lysosomes, plant cells concentrate similar digestive and waste ' +
        'functions into their large central vacuole.',
    },
  ],
}