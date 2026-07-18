import type { Organelle } from '@/types/organelle'

export const cellMembrane: Organelle = {
  id: 'cell-membrane',
  cellTypes: ['animal', 'plant', 'prokaryotic'],
  name: 'Cell Membrane',
  pluralName: 'Cell Membranes',

  shortDescription:
    'The selectively permeable boundary that separates a cell\'s interior from its environment while ' +
    'controlling what enters and exits.',

  deepDescription:
    'The cell membrane, also called the plasma membrane, is a thin, flexible boundary composed ' +
    'primarily of a phospholipid bilayer — two layers of lipid molecules arranged with their ' +
    'water-attracting (hydrophilic) heads facing outward and their water-repelling (hydrophobic) tails ' +
    'facing inward. This structure is described by the fluid mosaic model, since the individual ' +
    'phospholipids move fluidly within the layer, and a variety of embedded proteins, cholesterol ' +
    'molecules, and carbohydrate chains float within it like tiles in a mosaic. These embedded proteins ' +
    'perform critical jobs: channel and transport proteins move specific molecules across the membrane, ' +
    'receptor proteins detect chemical signals from outside the cell, and marker proteins allow immune ' +
    'cells to identify the cell as friend or foe. The membrane is selectively permeable — small ' +
    'nonpolar molecules like oxygen and carbon dioxide diffuse across it freely, while larger or ' +
    'charged molecules require specific transport proteins or energy-driven processes to cross. This ' +
    'selective control is fundamental to nearly every function a cell performs, from maintaining ' +
    'internal chemical balance to communicating with neighboring cells.',

  function:
    'Regulate what substances enter and exit the cell, maintain internal chemical balance, and enable ' +
    'communication with the surrounding environment.',

  analogy:
    'Functions like airport security — the membrane doesn\'t block everything or let everything ' +
    'through freely; it checks each item (molecule) and decides, based on size, charge, and identity, ' +
    'exactly what\'s allowed to pass and how.',

  comparisonNotes: {
    plant:
      'Plant cells possess a cell membrane just like animal cells, but it sits just inside an ' +
      'additional, rigid cell wall made primarily of cellulose. The cell wall provides structural ' +
      'support and protection that the membrane alone cannot, allowing plant cells to withstand higher ' +
      'internal pressure (turgor pressure) without bursting.',
    prokaryotic:
      'Prokaryotic cells also have a cell membrane with the same fundamental phospholipid bilayer ' +
      'structure, and in most bacteria it too is reinforced by an outer cell wall — though built from ' +
      'peptidoglycan rather than the cellulose found in plants. Some prokaryotes fold their plasma ' +
      'membrane inward into structures that increase surface area for metabolic reactions, ' +
      'compensating in part for the absence of a mitochondrion.',
  },

  scenePosition: {
    animal: { x: 0, y: 0, z: 0 },
    plant: { x: 0, y: 0, z: 0 },
    prokaryotic: { x: 0, y: 0, z: 0 },
  },

  sceneScale: {
    animal: 5,
    plant: 5,
    prokaryotic: 3,
  },

  animation: {
    animationId: 'membrane-selective-transport',
    label: 'Watch selective transport',
    durationSeconds: 14,
  },

  imageQuery: {
    query: 'cell membrane phospholipid bilayer fluid mosaic model',
    fallbackAttribution: 'Structural imagery courtesy of public scientific archives.',
  },

  quizQuestions: [
    {
      id: 'membrane-q1',
      prompt: 'What does it mean that the cell membrane is "selectively permeable"?',
      options: [
        { id: 'a', text: 'It allows all molecules to pass through freely', isCorrect: false },
        { id: 'b', text: 'It blocks all molecules from entering or exiting', isCorrect: false },
        {
          id: 'c',
          text: 'It controls which specific substances can cross, based on size and charge',
          isCorrect: true,
        },
        { id: 'd', text: 'It only allows water to pass through', isCorrect: false },
      ],
      explanation:
        'Selective permeability means the membrane permits some substances to cross freely while ' +
        'restricting others, using channel and transport proteins to manage the process.',
    },
    {
      id: 'membrane-q2',
      prompt: 'What model describes the structure and behavior of the cell membrane?',
      options: [
        { id: 'a', text: 'The rigid lattice model', isCorrect: false },
        { id: 'b', text: 'The fluid mosaic model', isCorrect: true },
        { id: 'c', text: 'The static bilayer model', isCorrect: false },
        { id: 'd', text: 'The porous membrane theory', isCorrect: false },
      ],
      explanation:
        'The fluid mosaic model describes the membrane as a fluid layer of phospholipids with proteins ' +
        'and other molecules embedded throughout, like tiles in a mosaic, able to move within the layer.',
    },
    {
      id: 'membrane-q3',
      prompt: 'How does a plant cell\'s boundary differ from an animal cell\'s?',
      options: [
        { id: 'a', text: 'Plant cells have no membrane at all, only a wall', isCorrect: false },
        {
          id: 'b',
          text: 'Plant cells have the same membrane, plus an additional rigid cellulose cell wall',
          isCorrect: true,
        },
        { id: 'c', text: 'Plant cell membranes are impermeable to all molecules', isCorrect: false },
        { id: 'd', text: 'Only animal cells have a phospholipid bilayer', isCorrect: false },
      ],
      explanation:
        'Plant cells have a standard phospholipid membrane just like animal cells, but it\'s reinforced ' +
        'by an outer cell wall made of cellulose, providing structural rigidity.',
    },
  ],
}