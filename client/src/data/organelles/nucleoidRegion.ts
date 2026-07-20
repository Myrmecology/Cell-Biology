import type { Organelle } from '@/types/organelle'

export const nucleoidRegion: Organelle = {
  id: 'nucleoid-region',
  cellTypes: ['prokaryotic'],
  name: 'Nucleoid Region',
  pluralName: 'Nucleoid Regions',

  shortDescription:
    'The irregularly shaped region within a prokaryotic cell where genetic material is concentrated — ' +
    'with no surrounding membrane.',

  deepDescription:
    'The nucleoid region is the area within a prokaryotic cell where the cell\'s genetic material is ' +
    'concentrated. Unlike the eukaryotic nucleus, the nucleoid has no membrane enclosing it — it is ' +
    'simply the region of the cytoplasm where DNA is most densely packed, held together by ' +
    'DNA-binding proteins and extensive supercoiling that compacts the genome into a manageable space. ' +
    'Most prokaryotes carry a single circular chromosome, though some species carry multiple ' +
    'chromosomes or additional small circular DNA molecules called plasmids, which often carry genes ' +
    'for specialized functions such as antibiotic resistance and can be shared between bacteria ' +
    'independent of the main chromosome. Because the nucleoid has no membrane separating it from the ' +
    'rest of the cytoplasm, ribosomes can begin translating a strand of mRNA into protein before ' +
    'transcription of that same strand has even finished — a phenomenon called coupled ' +
    'transcription-translation, which is physically impossible in eukaryotic cells, where the nuclear ' +
    'envelope keeps these two processes separated in space and time.',

  function:
    'House and organize the prokaryotic cell\'s genetic material without the protection or regulation ' +
    'of a surrounding membrane.',

  analogy:
    'Functions like an open-plan office rather than a private office with a closed door — the genetic ' +
    '"paperwork" (DNA) is out in the open, so work on it (transcription) and immediate use of the ' +
    'results (translation) can happen simultaneously, without walls slowing communication down.',

  comparisonNotes: {
    animal:
      'Animal cells (and all eukaryotic cells) enclose their DNA inside a membrane-bound nucleus, ' +
      'physically separating transcription from translation. A prokaryotic cell\'s nucleoid has no such ' +
      'membrane, which is faster in some respects but offers far less regulatory control over gene ' +
      'expression than the eukaryotic system provides.',
    plant:
      'The comparison to plant cells mirrors the animal cell comparison — plant cells also enclose ' +
      'their DNA in a true, membrane-bound nucleus, unlike the open nucleoid region of a prokaryotic ' +
      'cell.',
  },

  scenePosition: {
    prokaryotic: { x: -0.5, y: 0.2, z: -0.3 },
  },

  sceneScale: {
    prokaryotic: 1.8,
  },

  animation: {
    animationId: 'nucleoid-coupled-transcription-translation',
    label: 'Watch coupled transcription-translation',
    durationSeconds: 15,
  },

  imageQuery: {
    query: 'bacterial nucleoid',
    fallbackAttribution: 'Structural imagery courtesy of public scientific archives.',
  },

  quizQuestions: [
    {
      id: 'nucleoid-q1',
      prompt: 'What is the key structural difference between the nucleoid region and the nucleus?',
      options: [
        { id: 'a', text: 'The nucleoid region is larger', isCorrect: false },
        { id: 'b', text: 'The nucleoid region has no surrounding membrane', isCorrect: true },
        { id: 'c', text: 'The nucleoid region contains no DNA', isCorrect: false },
        { id: 'd', text: 'There is no structural difference', isCorrect: false },
      ],
      explanation:
        'Unlike the membrane-bound nucleus of eukaryotic cells, the nucleoid region is simply the area ' +
        'of the prokaryotic cytoplasm where DNA is concentrated, with no membrane enclosing it.',
    },
    {
      id: 'nucleoid-q2',
      prompt: 'What is a plasmid?',
      options: [
        { id: 'a', text: 'The main chromosome of a bacterial cell', isCorrect: false },
        {
          id: 'b',
          text: 'A small circular DNA molecule, often carrying specialized genes like antibiotic resistance',
          isCorrect: true,
        },
        { id: 'c', text: 'A type of ribosome found only in bacteria', isCorrect: false },
        { id: 'd', text: 'The membrane surrounding the nucleoid', isCorrect: false },
      ],
      explanation:
        'Plasmids are small, separate circular DNA molecules that many bacteria carry in addition to ' +
        'their main chromosome, often carrying genes that can be shared between bacterial cells.',
    },
    {
      id: 'nucleoid-q3',
      prompt: 'What is "coupled transcription-translation," and why can\'t eukaryotic cells do it?',
      options: [
        {
          id: 'a',
          text: 'Translation begins before transcription finishes; eukaryotes can\'t because the nuclear envelope separates the two processes',
          isCorrect: true,
        },
        { id: 'b', text: 'It refers to two ribosomes working on the same mRNA strand', isCorrect: false },
        { id: 'c', text: 'It only occurs during bacterial cell division', isCorrect: false },
        { id: 'd', text: 'Eukaryotic cells can also do this freely', isCorrect: false },
      ],
      explanation:
        'Because prokaryotic DNA sits directly in the cytoplasm with no nuclear envelope, ribosomes can ' +
        'begin translating an mRNA strand before transcription is even complete — something physically ' +
        'impossible in eukaryotic cells, where the nucleus keeps transcription and translation separated.',
    },
  ],
}