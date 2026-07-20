import type { Organelle } from '@/types/organelle'

export const golgiApparatus: Organelle = {
  id: 'golgi-apparatus',
  cellTypes: ['animal', 'plant'],
  name: 'Golgi Apparatus',
  pluralName: 'Golgi Apparatuses',

  shortDescription:
    'The cell\'s packaging and shipping center — modifies, sorts, and dispatches proteins and lipids ' +
    'received from the endoplasmic reticulum.',

  deepDescription:
    'The Golgi apparatus, also called the Golgi complex or Golgi body, is a stack of flattened, ' +
    'membrane-bound sacs called cisternae, typically arranged like a stack of pancakes. It has a ' +
    'distinct directionality: the cis face receives transport vesicles arriving from the endoplasmic ' +
    'reticulum, while the trans face buds off finished vesicles bound for their final destinations. As ' +
    'proteins and lipids move through the stack from the cis to the trans face, the Golgi modifies ' +
    'them further — commonly by attaching carbohydrate chains in a process called glycosylation, ' +
    'trimming or adding chemical tags, and folding them into their final functional shape. The Golgi ' +
    'also acts as a sorting and distribution hub, reading molecular "address tags" on each protein to ' +
    'determine its correct destination: some proteins are packaged for secretion outside the cell, some ' +
    'are routed to lysosomes, and others are sent to specific locations within the cell itself. Without ' +
    'the Golgi\'s sorting function, the cell\'s transport system would have no way of ensuring proteins ' +
    'end up where they\'re actually needed.',

  function:
    'Modify, sort, and package proteins and lipids received from the endoplasmic reticulum, then ' +
    'dispatch them to their correct destinations inside or outside the cell.',

  analogy:
    'Functions like a post office distribution center — packages (proteins) arrive from the factory ' +
    '(ER), get sorted, labeled with the correct address, and shipped out to their final destination, ' +
    'whether that\'s elsewhere in the building (inside the cell) or out into the world (secreted ' +
    'outside the cell).',

  comparisonNotes: {
    prokaryotic:
      'Prokaryotic cells have no Golgi apparatus, and no equivalent sorting-and-packaging system at ' +
      'all. Any proteins destined for secretion are typically transported directly across the plasma ' +
      'membrane using simpler, more direct mechanisms. This reflects a broader pattern: prokaryotic ' +
      'cells generally lack the elaborate internal membrane-bound organelle systems eukaryotic cells ' +
      'use to compartmentalize and refine complex cellular processes.',
  },

  scenePosition: {
    animal: { x: -1.2, y: -0.5, z: 1.6 },
    plant: { x: -1.6, y: -0.3, z: 1.4 },
  },

  sceneScale: {
    animal: 0.9,
    plant: 0.85,
  },

  animation: {
    animationId: 'golgi-vesicle-packaging',
    label: 'Watch vesicle packaging & shipping',
    durationSeconds: 14,
  },

  imageQuery: {
    query: 'golgi apparatus',
    fallbackAttribution: 'Structural imagery courtesy of public scientific archives.',
  },

  quizQuestions: [
    {
      id: 'golgi-q1',
      prompt: 'What is the primary function of the Golgi apparatus?',
      options: [
        { id: 'a', text: 'Producing the cell\'s energy supply', isCorrect: false },
        {
          id: 'b',
          text: 'Modifying, sorting, and shipping proteins and lipids to their destinations',
          isCorrect: true,
        },
        { id: 'c', text: 'Storing the cell\'s genetic material', isCorrect: false },
        { id: 'd', text: 'Breaking down cellular waste', isCorrect: false },
      ],
      explanation:
        'The Golgi apparatus receives materials from the ER, modifies them (often adding carbohydrate ' +
        'chains), and sorts them for delivery to their correct final destination.',
    },
    {
      id: 'golgi-q2',
      prompt: 'What distinguishes the cis face of the Golgi from the trans face?',
      options: [
        {
          id: 'b',
          text: 'The cis face receives material from the ER; the trans face ships finished vesicles out',
          isCorrect: true,
        },
        { id: 'a', text: 'The cis face is where DNA replication happens', isCorrect: false },
        { id: 'c', text: 'There is no functional difference between the two', isCorrect: false },
        { id: 'd', text: 'The trans face only exists in plant cells', isCorrect: false },
      ],
      explanation:
        'The Golgi has clear directionality — incoming material enters at the cis face and exits, fully ' +
        'processed, from the trans face.',
    },
    {
      id: 'golgi-q3',
      prompt: 'How do prokaryotic cells handle protein secretion without a Golgi apparatus?',
      options: [
        { id: 'a', text: 'They cannot secrete proteins at all', isCorrect: false },
        {
          id: 'b',
          text: 'Proteins are transported directly across the plasma membrane by simpler mechanisms',
          isCorrect: true,
        },
        { id: 'c', text: 'They use a simplified version of the Golgi apparatus', isCorrect: false },
        { id: 'd', text: 'Secretion only happens during cell division', isCorrect: false },
      ],
      explanation:
        'Without a Golgi apparatus or other internal sorting organelles, prokaryotic cells rely on more ' +
        'direct transport mechanisms across the plasma membrane.',
    },
  ],
}