import type { Organelle } from '@/types/organelle'

export const cellWall: Organelle = {
  id: 'cell-wall',
  cellTypes: ['plant', 'prokaryotic'],
  name: 'Cell Wall',
  pluralName: 'Cell Walls',

  shortDescription:
    'A rigid outer layer that provides structural support and protection — present in plant and ' +
    'prokaryotic cells, but notably absent in animal cells.',

  deepDescription:
    'The cell wall is a tough, rigid layer that surrounds the cell membrane, providing structural ' +
    'support, protection from mechanical stress, and defense against osmotic rupture. In plant cells, ' +
    'the wall is built primarily from cellulose, a long chain of glucose molecules bundled into strong ' +
    'microfibrils, along with hemicellulose and pectin that help bind the structure together. This wall ' +
    'allows plant cells to withstand significant internal water pressure (turgor pressure) without ' +
    'bursting, which is what keeps a healthy plant rigid and upright rather than wilting. In ' +
    'prokaryotic cells — specifically bacteria — the wall is instead constructed from peptidoglycan, a ' +
    'mesh-like polymer of sugars and amino acids that forms a single continuous molecule around the ' +
    'entire cell. The thickness and structure of this peptidoglycan layer varies significantly between ' +
    'bacterial species, and this variation is the basis for Gram staining, a classic laboratory ' +
    'technique that divides bacteria into Gram-positive (thick peptidoglycan, stains purple) and ' +
    'Gram-negative (thin peptidoglycan with an additional outer membrane, stains pink) categories — a ' +
    'distinction that still guides antibiotic selection today.',

  function:
    'Provide rigid structural support, maintain cell shape, and protect against mechanical damage and ' +
    'osmotic pressure.',

  analogy:
    'Functions like the frame of a tent — the membrane alone would be as flimsy as tent fabric on its ' +
    'own, but the rigid wall gives the whole structure shape and lets it hold firm under pressure.',

  comparisonNotes: {
    animal:
      'Animal cells have no cell wall at all — only the flexible cell membrane. This is precisely why ' +
      'animal cells can take on such varied, irregular shapes (like the elongated form of a nerve cell ' +
      'or the flexible disc shape of a red blood cell), while plant and prokaryotic cells are ' +
      'constrained to more regular, boxy shapes by their rigid walls.',
    prokaryotic:
      'While both plant and prokaryotic cells have walls, the materials differ entirely — plant walls ' +
      'are built from cellulose, while bacterial walls are built from peptidoglycan, a completely ' +
      'different molecule found nowhere in the plant or animal kingdoms. This difference is significant ' +
      'medically: antibiotics like penicillin work specifically by disrupting peptidoglycan synthesis, ' +
      'which is harmless to human and plant cells since neither uses that molecule.',
  },

  scenePosition: {
    plant: { x: 0, y: 0, z: 0 },
    prokaryotic: { x: 0, y: 0, z: 0 },
  },

  sceneScale: {
    plant: 5.3,
    prokaryotic: 3.2,
  },

  animation: {
    animationId: 'cell-wall-turgor-pressure',
    label: 'Watch turgor pressure in action',
    durationSeconds: 10,
  },

  imageQuery: {
    query: 'plant cell wall cellulose structure diagram',
    fallbackAttribution: 'Structural imagery courtesy of public scientific archives.',
  },

  quizQuestions: [
    {
      id: 'wall-q1',
      prompt: 'Which cell types have a cell wall?',
      options: [
        { id: 'a', text: 'Animal cells only', isCorrect: false },
        { id: 'b', text: 'Plant and prokaryotic cells, but not animal cells', isCorrect: true },
        { id: 'c', text: 'All cell types have a cell wall', isCorrect: false },
        { id: 'd', text: 'Prokaryotic cells only', isCorrect: false },
      ],
      explanation:
        'Animal cells lack a cell wall entirely, relying only on the flexible cell membrane — while ' +
        'plant and prokaryotic cells both have rigid walls, built from different materials.',
    },
    {
      id: 'wall-q2',
      prompt: 'What is the plant cell wall primarily made of?',
      options: [
        { id: 'a', text: 'Peptidoglycan', isCorrect: false },
        { id: 'b', text: 'Chitin', isCorrect: false },
        { id: 'c', text: 'Cellulose', isCorrect: true },
        { id: 'd', text: 'Keratin', isCorrect: false },
      ],
      explanation:
        'Plant cell walls are built primarily from cellulose, a strong polymer of glucose molecules ' +
        'bundled into microfibrils.',
    },
    {
      id: 'wall-q3',
      prompt: 'Why do antibiotics like penicillin target bacterial cell walls specifically?',
      options: [
        {
          id: 'a',
          text: 'They disrupt peptidoglycan synthesis, a molecule absent in human cells',
          isCorrect: true,
        },
        { id: 'b', text: 'Bacteria have no cell wall, making them vulnerable', isCorrect: false },
        { id: 'c', text: 'They target cellulose, which bacteria also use', isCorrect: false },
        { id: 'd', text: 'All cell walls share an identical structure', isCorrect: false },
      ],
      explanation:
        'Penicillin-type antibiotics disrupt peptidoglycan synthesis specifically — since human cells ' +
        'don\'t use peptidoglycan at all, this makes the drug effective against bacteria while sparing ' +
        'our own cells.',
    },
  ],
}