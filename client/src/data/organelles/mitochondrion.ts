import type { Organelle } from '@/types/organelle'

export const mitochondrion: Organelle = {
  id: 'mitochondrion',
  cellTypes: ['animal', 'plant'],
  name: 'Mitochondrion',
  pluralName: 'Mitochondria',

  shortDescription:
    'The organelle responsible for producing most of the cell\'s usable energy, in the form of ATP.',

  deepDescription:
    'Mitochondria are double-membrane-bound organelles found in nearly all eukaryotic cells. ' +
    'The outer membrane is smooth, while the inner membrane folds into structures called cristae, ' +
    'which dramatically increase the surface area available for the chemical reactions of cellular ' +
    'respiration. Inside the inner membrane lies the mitochondrial matrix, containing enzymes, ' +
    'ribosomes, and — notably — its own circular DNA (mtDNA), separate from the cell\'s nuclear DNA. ' +
    'Mitochondria generate energy primarily through oxidative phosphorylation: electrons harvested ' +
    'from glucose breakdown are passed along an electron transport chain embedded in the cristae, ' +
    'pumping protons across the inner membrane and creating a gradient that powers ATP synthase, ' +
    'the molecular machine that manufactures ATP. Cells with high energy demands, such as muscle and ' +
    'liver cells, contain thousands of mitochondria, while less active cells may contain only a few ' +
    'hundred.',

  function:
    'Convert energy from nutrients into ATP through cellular respiration, powering nearly all ' +
    'cellular activity.',

  analogy:
    'Often called the "powerhouse of the cell" — a fitting analogy, since mitochondria function ' +
    'much like a power plant, converting raw fuel into a usable energy currency (ATP) the rest of ' +
    'the cell can spend.',

  comparisonNotes: {
    prokaryotic:
      'Prokaryotic cells have no mitochondria at all. Instead, the reactions of cellular respiration ' +
      'take place directly across the cell\'s plasma membrane, which is folded in some species to ' +
      'increase surface area. This is one of the clearest structural distinctions between prokaryotic ' +
      'and eukaryotic life, and it\'s central to the endosymbiotic theory: mitochondria are believed ' +
      'to have originated as free-living prokaryotic bacteria that were engulfed by an ancestral ' +
      'eukaryotic cell roughly 1.5–2 billion years ago, eventually evolving into a permanent, ' +
      'energy-producing partner. Their circular DNA and double membrane are considered strong evidence ' +
      'for this ancient prokaryotic origin.',
  },

  scenePosition: {
    animal: { x: 3.2, y: -1.5, z: 1.8 },
    plant: { x: 3.6, y: -2.0, z: 1.2 },
  },

  sceneScale: {
    animal: 1,
    plant: 0.85,
  },

  animation: {
    animationId: 'mitochondrion-atp-synthesis',
    label: 'Watch ATP production',
    durationSeconds: 12,
  },

  imageQuery: {
    query: 'mitochondria electron microscopy',
    fallbackAttribution: 'Electron micrograph imagery courtesy of public scientific archives.',
  },

  quizQuestions: [
    {
      id: 'mito-q1',
      prompt: 'What is the primary function of the mitochondrion?',
      options: [
        { id: 'a', text: 'Storing genetic information', isCorrect: false },
        { id: 'b', text: 'Producing ATP through cellular respiration', isCorrect: true },
        { id: 'c', text: 'Synthesizing proteins', isCorrect: false },
        { id: 'd', text: 'Breaking down waste materials', isCorrect: false },
      ],
      explanation:
        'Mitochondria generate ATP — the cell\'s primary energy currency — through the process of ' +
        'oxidative phosphorylation, using the electron transport chain embedded in their inner membrane.',
    },
    {
      id: 'mito-q2',
      prompt: 'Why do mitochondria have their own DNA, separate from the nucleus?',
      options: [
        {
          id: 'a',
          text: 'It\'s a backup copy in case nuclear DNA is damaged',
          isCorrect: false,
        },
        {
          id: 'b',
          text: 'Mitochondria are believed to have originated as free-living prokaryotic bacteria',
          isCorrect: true,
        },
        { id: 'c', text: 'It regulates the cell cycle independently', isCorrect: false },
        { id: 'd', text: 'All organelles contain their own DNA', isCorrect: false },
      ],
      explanation:
        'The endosymbiotic theory holds that mitochondria descend from ancient free-living bacteria ' +
        'engulfed by an early eukaryotic cell — their own circular DNA is a remnant of that independent ' +
        'origin.',
    },
    {
      id: 'mito-q3',
      prompt: 'How do prokaryotic cells perform cellular respiration without mitochondria?',
      options: [
        { id: 'a', text: 'They cannot perform cellular respiration', isCorrect: false },
        {
          id: 'b',
          text: 'The reactions occur directly across the cell\'s plasma membrane',
          isCorrect: true,
        },
        { id: 'c', text: 'They use the cell wall instead', isCorrect: false },
        { id: 'd', text: 'They import ATP from neighboring cells', isCorrect: false },
      ],
      explanation:
        'Without a mitochondrion, prokaryotes carry out the equivalent reactions across their plasma ' +
        'membrane, sometimes folded to increase available surface area.',
    },
  ],
}