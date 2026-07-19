import type { Organelle } from '@/types/organelle'

export const vesicle: Organelle = {
  id: 'vesicle',
  cellTypes: ['animal', 'plant'],
  name: 'Vesicle',
  pluralName: 'Vesicles',

  shortDescription:
    'A small, membrane-bound sac used to transport materials between organelles, or in and out of the ' +
    'cell entirely.',

  deepDescription:
    'Vesicles are small, spherical sacs enclosed by a single lipid membrane, functioning as the cell\'s ' +
    'internal shipping containers. Rather than a fixed, permanent organelle, a vesicle is typically a ' +
    'temporary structure — it forms by budding off from one membrane (such as the endoplasmic ' +
    'reticulum or Golgi apparatus), travels through the cytoplasm along the cytoskeleton, and then ' +
    'fuses with a target membrane to deliver its contents, disappearing as a distinct structure once ' +
    'its cargo is delivered. Vesicles serve several essential transport roles. Transport vesicles carry ' +
    'proteins and lipids between organelles of the endomembrane system, most commonly from the rough ER ' +
    'to the Golgi apparatus, and from the Golgi onward to their final destination. Secretory vesicles ' +
    'carry finished products, such as hormones or enzymes, to the cell membrane, where they fuse with ' +
    'it and release their contents outside the cell entirely, in a process called exocytosis. In the ' +
    'reverse direction, vesicles also form when the cell membrane folds inward to engulf material from ' +
    'outside the cell — a process called endocytosis — pulling nutrients, fluids, or even entire ' +
    'pathogens into the cell inside a newly formed vesicle. Because so many essential processes rely on ' +
    'this budding-and-fusing cycle, vesicles are considered one of the defining features of the ' +
    'eukaryotic endomembrane system.',

  function:
    'Transport proteins, lipids, and other materials between organelles, and move materials into or ' +
    'out of the cell through endocytosis and exocytosis.',

  analogy:
    'Functions like a delivery truck — it picks up cargo at one location (say, the ER), drives it ' +
    'across town (through the cytoplasm), and drops it off at its destination (the Golgi, the cell ' +
    'membrane, or outside the cell entirely), then is repurposed for the next delivery.',

  comparisonNotes: {
    prokaryotic:
      'Prokaryotic cells generally lack the extensive internal vesicle transport system found in ' +
      'eukaryotic cells, since they have no endomembrane system of organelles (ER, Golgi apparatus) to ' +
      'shuttle material between in the first place. Some bacteria do produce small vesicles that bud ' +
      'from their outer membrane for purposes like toxin delivery or genetic material exchange, but ' +
      'this is structurally and functionally distinct from the eukaryotic vesicle transport system.',
  },

  scenePosition: {
    animal: { x: -2.3, y: 0.3, z: 2.4 },
    plant: { x: -2.7, y: 0.6, z: 2.1 },
  },

  sceneScale: {
    animal: 0.25,
    plant: 0.25,
  },

  animation: {
    animationId: 'vesicle-transport-cycle',
    label: 'Watch a vesicle bud and fuse',
    durationSeconds: 12,
  },

  imageQuery: {
    query: 'cell vesicle transport endocytosis exocytosis diagram',
    fallbackAttribution: 'Structural imagery courtesy of public scientific archives.',
  },

  quizQuestions: [
    {
      id: 'vesicle-q1',
      prompt: 'What is the primary role of a vesicle?',
      options: [
        { id: 'a', text: 'Producing energy for the cell', isCorrect: false },
        {
          id: 'b',
          text: 'Transporting materials between organelles or into/out of the cell',
          isCorrect: true,
        },
        { id: 'c', text: 'Storing the cell\'s genetic information', isCorrect: false },
        { id: 'd', text: 'Breaking down waste permanently', isCorrect: false },
      ],
      explanation:
        'Vesicles act as transport containers, moving materials between organelles and across the cell ' +
        'membrane in either direction.',
    },
    {
      id: 'vesicle-q2',
      prompt: 'What is exocytosis?',
      options: [
        { id: 'a', text: 'The cell membrane folding inward to engulf material', isCorrect: false },
        {
          id: 'b',
          text: 'A vesicle fusing with the cell membrane to release contents outside the cell',
          isCorrect: true,
        },
        { id: 'c', text: 'The process of building a new vesicle from scratch', isCorrect: false },
        { id: 'd', text: 'A type of cell division', isCorrect: false },
      ],
      explanation:
        'Exocytosis occurs when a secretory vesicle fuses with the cell membrane, releasing its contents ' +
        'to the outside of the cell.',
    },
    {
      id: 'vesicle-q3',
      prompt: 'Why do prokaryotic cells lack the extensive vesicle transport system eukaryotic cells have?',
      options: [
        {
          id: 'a',
          text: 'They have no endomembrane system of organelles to shuttle material between',
          isCorrect: true,
        },
        { id: 'b', text: 'Prokaryotic cells never move materials internally', isCorrect: false },
        { id: 'c', text: 'Vesicles are too large for prokaryotic cells', isCorrect: false },
        { id: 'd', text: 'There is no actual difference', isCorrect: false },
      ],
      explanation:
        'Without an ER or Golgi apparatus, prokaryotic cells have no equivalent internal system for ' +
        'vesicles to shuttle cargo between — a direct consequence of lacking membrane-bound organelles.',
    },
  ],
}