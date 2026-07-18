import type { Organelle } from '@/types/organelle'

export const chloroplast: Organelle = {
  id: 'chloroplast',
  cellTypes: ['plant'],
  name: 'Chloroplast',
  pluralName: 'Chloroplasts',

  shortDescription:
    'The site of photosynthesis — captures light energy and converts it into chemical energy stored ' +
    'in sugar molecules.',

  deepDescription:
    'Chloroplasts are double-membrane-bound organelles found in plant cells and algae, responsible for ' +
    'photosynthesis — the process of converting light energy, water, and carbon dioxide into glucose ' +
    'and oxygen. Inside the chloroplast\'s inner membrane lies a fluid-filled space called the stroma, ' +
    'which houses a third internal membrane system organized into stacks of flattened, coin-shaped ' +
    'sacs called thylakoids; a stack of thylakoids is called a granum (plural grana). Embedded in the ' +
    'thylakoid membranes is chlorophyll, the green pigment that absorbs light energy and gives plants ' +
    'their color. Photosynthesis unfolds in two linked stages. In the light-dependent reactions, which ' +
    'take place across the thylakoid membranes, captured light energy splits water molecules, releases ' +
    'oxygen as a byproduct, and generates energy-carrying molecules (ATP and NADPH). In the second ' +
    'stage, the Calvin cycle, which takes place in the stroma, those energy carriers power the ' +
    'conversion of carbon dioxide into glucose. Like mitochondria, chloroplasts contain their own ' +
    'circular DNA and ribosomes, independent of the cell\'s nucleus, and are believed to have originated ' +
    'the same way — as free-living photosynthetic bacteria (cyanobacteria) engulfed by an ancestral ' +
    'eukaryotic cell roughly 1 to 1.5 billion years ago.',

  function:
    'Capture light energy and convert it, along with water and carbon dioxide, into glucose and oxygen ' +
    'through photosynthesis.',

  analogy:
    'Functions like a solar power plant — chlorophyll acts as the solar panel, capturing light energy, ' +
    'while the internal machinery converts that captured energy into a usable, storable fuel (glucose) ' +
    'the plant can use immediately or bank for later.',

  comparisonNotes: {
    animal:
      'Animal cells have no chloroplasts and cannot perform photosynthesis at all — this is one of the ' +
      'most fundamental distinctions between plant and animal life, and it\'s why plants are producers ' +
      'that generate their own food from sunlight, while animals are consumers that must obtain energy ' +
      'by eating other organisms.',
    prokaryotic:
      'Prokaryotic cells have no chloroplasts, though some prokaryotes — cyanobacteria in particular — ' +
      'are themselves capable of photosynthesis, using photosynthetic membranes folded within the ' +
      'cytoplasm rather than a dedicated organelle. In fact, chloroplasts are believed to have evolved ' +
      'directly from ancient cyanobacteria engulfed by an early eukaryotic cell, mirroring the same ' +
      'endosymbiotic origin story as mitochondria.',
  },

  scenePosition: {
    plant: { x: 2.0, y: 1.6, z: -1.0 },
  },

  sceneScale: {
    plant: 1.1,
  },

  animation: {
    animationId: 'chloroplast-photosynthesis',
    label: 'Watch photosynthesis in action',
    durationSeconds: 17,
  },

  imageQuery: {
    query: 'chloroplast thylakoid grana structure diagram',
    fallbackAttribution: 'Structural imagery courtesy of public scientific archives.',
  },

  quizQuestions: [
    {
      id: 'chloro-q1',
      prompt: 'What is the primary function of the chloroplast?',
      options: [
        { id: 'a', text: 'Breaking down glucose to release energy', isCorrect: false },
        {
          id: 'b',
          text: 'Converting light energy into chemical energy through photosynthesis',
          isCorrect: true,
        },
        { id: 'c', text: 'Storing the cell\'s genetic material', isCorrect: false },
        { id: 'd', text: 'Digesting cellular waste', isCorrect: false },
      ],
      explanation:
        'Chloroplasts capture light energy and use it, along with water and carbon dioxide, to ' +
        'synthesize glucose and release oxygen — the process of photosynthesis.',
    },
    {
      id: 'chloro-q2',
      prompt: 'Where in the chloroplast do the light-dependent reactions take place?',
      options: [
        { id: 'a', text: 'The stroma', isCorrect: false },
        { id: 'b', text: 'The thylakoid membranes', isCorrect: true },
        { id: 'c', text: 'The outer membrane', isCorrect: false },
        { id: 'd', text: 'The nucleus', isCorrect: false },
      ],
      explanation:
        'The light-dependent reactions occur across the thylakoid membranes, where chlorophyll captures ' +
        'light energy and splits water molecules, releasing oxygen.',
    },
    {
      id: 'chloro-q3',
      prompt: 'What evidence supports the idea that chloroplasts originated from ancient bacteria?',
      options: [
        {
          id: 'a',
          text: 'Chloroplasts contain their own circular DNA and ribosomes, like free-living bacteria',
          isCorrect: true,
        },
        { id: 'b', text: 'Chloroplasts are identical in structure to mitochondria', isCorrect: false },
        { id: 'c', text: 'Chloroplasts can survive outside a cell indefinitely', isCorrect: false },
        { id: 'd', text: 'There is no such evidence', isCorrect: false },
      ],
      explanation:
        'Like mitochondria, chloroplasts carry their own circular DNA and ribosomes separate from the ' +
        'nucleus — strong evidence for the endosymbiotic theory, which holds they descend from engulfed ' +
        'photosynthetic cyanobacteria.',
    },
  ],
}