import type { Organelle } from '@/types/organelle'

export const nucleus: Organelle = {
  id: 'nucleus',
  cellTypes: ['animal', 'plant'],
  name: 'Nucleus',
  pluralName: 'Nuclei',

  shortDescription:
    'The membrane-bound control center of the cell, housing and protecting the cell\'s genetic material.',

  deepDescription:
    'The nucleus is typically the largest organelle in a eukaryotic cell and serves as its command ' +
    'center. It is enclosed by the nuclear envelope, a double membrane structure perforated by ' +
    'thousands of nuclear pores that regulate the movement of molecules — such as RNA and proteins — ' +
    'into and out of the nucleus. Inside, the cell\'s DNA is organized into chromatin, a complex of ' +
    'DNA wound around histone proteins, which condenses further into visible chromosomes during cell ' +
    'division. A distinct region within the nucleus, the nucleolus, is responsible for assembling ' +
    'ribosomal subunits before they are exported to the cytoplasm. The nuclear envelope is continuous ' +
    'with the endoplasmic reticulum, physically linking genetic control to the cell\'s protein and ' +
    'lipid production systems. By keeping DNA physically separated from the cytoplasm, the nucleus ' +
    'allows eukaryotic cells to precisely regulate gene expression — controlling exactly when and how ' +
    'genetic instructions are read and acted upon.',

  function:
    'Store and protect the cell\'s genetic material (DNA) and control gene expression by regulating ' +
    'access to it.',

  analogy:
    'Functions much like a library\'s reference archive — the master copies of information (DNA) never ' +
    'leave the building, but controlled copies (RNA transcripts) are checked out and sent elsewhere in ' +
    'the cell to be acted on.',

  comparisonNotes: {
    prokaryotic:
      'Prokaryotic cells have no nucleus at all. Their genetic material — typically a single circular ' +
      'chromosome — is instead concentrated in an irregularly shaped region called the nucleoid, which ' +
      'has no surrounding membrane. Without a nuclear envelope creating physical separation, DNA in a ' +
      'prokaryotic cell sits directly in the cytoplasm, meaning transcription and translation can occur ' +
      'simultaneously in the same space — something eukaryotic cells cannot do, since their DNA is ' +
      'sequestered behind the nuclear envelope. This is considered one of the defining structural ' +
      'differences between the two domains of cellular life, and it directly gives the terms their ' +
      'names: "eukaryotic" means "true nucleus," while "prokaryotic" means "before nucleus."',
  },

  scenePosition: {
    animal: { x: 0, y: 0, z: 0 },
    plant: { x: -1.5, y: 0.5, z: 0 },
  },

  sceneScale: {
    animal: 1.6,
    plant: 1.4,
  },

  animation: {
    animationId: 'nucleus-transcription',
    label: 'Watch gene transcription',
    durationSeconds: 15,
  },

  imageQuery: {
    query: 'cell nucleus',
    fallbackAttribution: 'Electron micrograph imagery courtesy of public scientific archives.',
  },

  quizQuestions: [
    {
      id: 'nucleus-q1',
      prompt: 'What is the primary role of the nucleus?',
      options: [
        { id: 'a', text: 'Producing ATP for the cell', isCorrect: false },
        {
          id: 'b',
          text: 'Storing and controlling access to the cell\'s genetic material',
          isCorrect: true,
        },
        { id: 'c', text: 'Digesting waste products', isCorrect: false },
        { id: 'd', text: 'Synthesizing lipids', isCorrect: false },
      ],
      explanation:
        'The nucleus houses the cell\'s DNA and regulates gene expression by controlling which genes ' +
        'are transcribed and when.',
    },
    {
      id: 'nucleus-q2',
      prompt: 'What structure inside the nucleus is responsible for assembling ribosomal subunits?',
      options: [
        { id: 'a', text: 'The nuclear envelope', isCorrect: false },
        { id: 'b', text: 'Chromatin', isCorrect: false },
        { id: 'c', text: 'The nucleolus', isCorrect: true },
        { id: 'd', text: 'The nuclear pore complex', isCorrect: false },
      ],
      explanation:
        'The nucleolus is a specialized region within the nucleus dedicated to assembling ribosomal ' +
        'subunits before they\'re exported to the cytoplasm for protein synthesis.',
    },
    {
      id: 'nucleus-q3',
      prompt: 'How do prokaryotic cells organize their genetic material, given they lack a nucleus?',
      options: [
        { id: 'a', text: 'DNA floats freely with no organization at all', isCorrect: false },
        {
          id: 'b',
          text: 'DNA is concentrated in an unmembraned region called the nucleoid',
          isCorrect: true,
        },
        { id: 'c', text: 'DNA is stored inside the cell wall', isCorrect: false },
        { id: 'd', text: 'Prokaryotes store DNA in mitochondria-like structures', isCorrect: false },
      ],
      explanation:
        'Prokaryotic DNA is concentrated in the nucleoid region — not enclosed by a membrane, unlike ' +
        'the eukaryotic nucleus.',
    },
    {
      id: 'nucleus-q4',
      prompt: 'What do the terms "eukaryotic" and "prokaryotic" literally refer to?',
      options: [
        { id: 'a', text: 'Cell size — large vs. small', isCorrect: false },
        { id: 'b', text: 'The presence or absence of a cell wall', isCorrect: false },
        {
          id: 'c',
          text: '"True nucleus" vs. "before nucleus," referring to nuclear membrane presence',
          isCorrect: true,
        },
        { id: 'd', text: 'Single-celled vs. multicellular organisms', isCorrect: false },
      ],
      explanation:
        'The names directly reference the defining structural difference: eukaryotic cells have a ' +
        'true, membrane-bound nucleus, while prokaryotic cells do not.',
    },
  ],
}