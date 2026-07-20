import type { Organelle } from '@/types/organelle'

export const endoplasmicReticulum: Organelle = {
  id: 'endoplasmic-reticulum',
  cellTypes: ['animal', 'plant'],
  name: 'Endoplasmic Reticulum',
  pluralName: 'Endoplasmic Reticula',

  shortDescription:
    'A vast, folded membrane network that manufactures proteins and lipids, existing in two distinct ' +
    'forms — rough and smooth — each with a different job.',

  deepDescription:
    'The endoplasmic reticulum (ER) is an extensive network of interconnected membranous tubules and ' +
    'flattened sacs that spreads throughout the cytoplasm, physically continuous with the nuclear ' +
    'envelope. It exists in two structurally and functionally distinct regions. The rough endoplasmic ' +
    'reticulum (RER) is studded on its outer surface with ribosomes, giving it a "rough" appearance ' +
    'under a microscope; these attached ribosomes synthesize proteins directly into the ER\'s interior ' +
    '(lumen), where the proteins are folded, modified, and quality-checked before being packaged into ' +
    'transport vesicles bound for the Golgi apparatus. The smooth endoplasmic reticulum (SER) lacks ' +
    'ribosomes entirely and instead specializes in synthesizing lipids and steroids, metabolizing ' +
    'carbohydrates, and detoxifying drugs and poisons — in liver cells, for instance, the SER is ' +
    'especially extensive because of its role in processing toxins. The SER also plays a critical role ' +
    'in storing and releasing calcium ions, particularly important in muscle cells, where it\'s called ' +
    'the sarcoplasmic reticulum and directly triggers muscle contraction.',

  function:
    'Manufacture, fold, and modify proteins (rough ER) and synthesize lipids while detoxifying harmful ' +
    'substances (smooth ER).',

  analogy:
    'The rough ER functions like a factory production floor with workstations (ribosomes) bolted ' +
    'directly to the walls, building products (proteins) that get funneled through internal hallways ' +
    'for quality control before shipping. The smooth ER is more like an adjoining chemical processing ' +
    'plant, with no assembly stations at all — just tanks and pipelines synthesizing lipids and ' +
    'breaking down hazardous materials.',

  comparisonNotes: {
    prokaryotic:
      'Prokaryotic cells have no endoplasmic reticulum, or any internal membrane-bound organelles at ' +
      'all. Protein synthesis still occurs via free-floating ribosomes in the cytoplasm, but without an ' +
      'ER to fold, modify, and sort proteins afterward, prokaryotic protein processing is considerably ' +
      'simpler and less capable of the complex post-translational modifications eukaryotic cells rely ' +
      'on. This is one of the major reasons eukaryotic cells can produce far more structurally complex ' +
      'proteins than prokaryotic cells.',
  },

  scenePosition: {
    animal: { x: -1.8, y: 0.8, z: 1.0 },
    plant: { x: -2.2, y: 1.0, z: 0.8 },
  },

  sceneScale: {
    animal: 1.3,
    plant: 1.2,
  },

  animation: {
    animationId: 'er-protein-folding',
    label: 'Watch protein folding & transport',
    durationSeconds: 16,
  },

  imageQuery: {
    query: 'endoplasmic reticulum',
    fallbackAttribution: 'Structural imagery courtesy of public scientific archives.',
  },

  quizQuestions: [
    {
      id: 'er-q1',
      prompt: 'What gives the rough endoplasmic reticulum its "rough" appearance?',
      options: [
        { id: 'a', text: 'Folds in its membrane', isCorrect: false },
        { id: 'b', text: 'Attached ribosomes on its outer surface', isCorrect: true },
        { id: 'c', text: 'Calcium deposits', isCorrect: false },
        { id: 'd', text: 'Its connection to the Golgi apparatus', isCorrect: false },
      ],
      explanation:
        'Ribosomes attached to the outer surface of the rough ER give it a studded, "rough" appearance ' +
        'under a microscope, and are responsible for synthesizing proteins directly into the ER lumen.',
    },
    {
      id: 'er-q2',
      prompt: 'What is a primary function of the smooth endoplasmic reticulum?',
      options: [
        { id: 'a', text: 'Synthesizing proteins from mRNA', isCorrect: false },
        { id: 'b', text: 'Storing genetic material', isCorrect: false },
        { id: 'c', text: 'Synthesizing lipids and detoxifying harmful substances', isCorrect: true },
        { id: 'd', text: 'Producing ATP', isCorrect: false },
      ],
      explanation:
        'The smooth ER specializes in lipid synthesis, carbohydrate metabolism, and detoxification — ' +
        'it lacks ribosomes and is not involved in protein synthesis directly.',
    },
    {
      id: 'er-q3',
      prompt: 'Why can\'t prokaryotic cells process proteins with the same complexity as eukaryotic cells?',
      options: [
        { id: 'a', text: 'Prokaryotic ribosomes cannot make proteins at all', isCorrect: false },
        {
          id: 'b',
          text: 'They lack an endoplasmic reticulum to fold, modify, and sort proteins after synthesis',
          isCorrect: true,
        },
        { id: 'c', text: 'Prokaryotic cells don\'t use proteins', isCorrect: false },
        { id: 'd', text: 'They have too many ribosomes', isCorrect: false },
      ],
      explanation:
        'Without an ER, prokaryotic protein processing is much simpler — proteins are made by free ' +
        'ribosomes in the cytoplasm without the extensive folding and modification machinery the ER ' +
        'provides.',
    },
  ],
}