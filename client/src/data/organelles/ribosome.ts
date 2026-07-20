import type { Organelle } from '@/types/organelle'

export const ribosome: Organelle = {
  id: 'ribosome',
  cellTypes: ['animal', 'plant', 'prokaryotic'],
  name: 'Ribosome',
  pluralName: 'Ribosomes',

  shortDescription:
    'The molecular machine that reads genetic instructions and builds proteins — found in every ' +
    'known form of cellular life.',

  deepDescription:
    'Ribosomes are complex molecular machines made of ribosomal RNA (rRNA) and proteins, organized ' +
    'into two subunits — one large, one small — that come together around a strand of messenger RNA ' +
    '(mRNA) to synthesize proteins in a process called translation. As the ribosome moves along the ' +
    'mRNA strand, it reads each three-letter codon and recruits a matching transfer RNA (tRNA) ' +
    'carrying the corresponding amino acid, linking amino acids together one by one into a growing ' +
    'polypeptide chain. Unlike most organelles discussed in cell biology, ribosomes are not enclosed ' +
    'by a membrane — they are simply large molecular assemblies suspended directly in the cytoplasm, ' +
    'or attached to the rough endoplasmic reticulum in eukaryotic cells. Because every living cell ' +
    'needs to build proteins to survive, ribosomes are considered one of the most universal and ' +
    'ancient pieces of cellular machinery, found in some form across all three domains of life: ' +
    'Bacteria, Archaea, and Eukarya. A single cell typically contains thousands to tens of thousands ' +
    'of ribosomes at any given moment — they are, by a wide margin, the most numerous structure in ' +
    'almost any cell, though individually far smaller than organelles like the nucleus or mitochondria.',

  function:
    'Synthesize proteins by translating the genetic instructions carried by messenger RNA into chains ' +
    'of amino acids.',

  analogy:
    'Functions like a factory assembly line reading a blueprint — the mRNA is the blueprint, and the ' +
    'ribosome is the machine that reads it step by step, adding one component (amino acid) at a time ' +
    'until the finished product (protein) is complete.',

  comparisonNotes: {
    prokaryotic:
      'Prokaryotic cells have ribosomes too — in fact, ribosomes are one of the few structures present ' +
      'in essentially every cell type across all domains of life. However, prokaryotic ribosomes are ' +
      'structurally smaller than eukaryotic ribosomes (classified as 70S versus 80S, a measure of their ' +
      'sedimentation rate), and are built from different-sized rRNA and protein components. This ' +
      'difference is significant enough that many antibiotics work by selectively targeting and ' +
      'disrupting prokaryotic (bacterial) ribosomes without affecting the human eukaryotic ribosomes in ' +
      'our own cells — a direct real-world application of this structural distinction.',
  },

  scenePosition: {
    animal: { x: 2.6, y: 1.9, z: -2.1 },
    plant: { x: 3.0, y: 2.0, z: -1.8 },
    prokaryotic: { x: 1.4, y: -1.1, z: 1.6 },
  },

  sceneScale: {
    animal: 0.55,
    plant: 0.55,
    prokaryotic: 0.6,
  },

  animation: {
    animationId: 'ribosome-translation',
    label: 'Watch protein synthesis',
    durationSeconds: 18,
  },

  imageQuery: {
    query: 'ribosome structure',
    fallbackAttribution: 'Structural imagery courtesy of public scientific archives.',
  },

  quizQuestions: [
    {
      id: 'ribosome-q1',
      prompt: 'What is the primary function of a ribosome?',
      options: [
        { id: 'a', text: 'Storing the cell\'s genetic material', isCorrect: false },
        { id: 'b', text: 'Producing ATP through respiration', isCorrect: false },
        {
          id: 'c',
          text: 'Translating mRNA into proteins by linking amino acids together',
          isCorrect: true,
        },
        { id: 'd', text: 'Breaking down damaged organelles', isCorrect: false },
      ],
      explanation:
        'Ribosomes carry out translation — reading mRNA codons and assembling the corresponding chain ' +
        'of amino acids into a protein.',
    },
    {
      id: 'ribosome-q2',
      prompt: 'Which cell types contain ribosomes?',
      options: [
        { id: 'a', text: 'Only eukaryotic cells', isCorrect: false },
        { id: 'b', text: 'Only prokaryotic cells', isCorrect: false },
        { id: 'c', text: 'Only plant cells', isCorrect: false },
        {
          id: 'd',
          text: 'All known cell types — animal, plant, and prokaryotic',
          isCorrect: true,
        },
      ],
      explanation:
        'Ribosomes are among the most universal structures in biology, present in some form across all ' +
        'three domains of life.',
    },
    {
      id: 'ribosome-q3',
      prompt: 'How do prokaryotic ribosomes differ from eukaryotic ribosomes, and why does it matter?',
      options: [
        {
          id: 'a',
          text: 'They are structurally smaller (70S vs. 80S), which lets antibiotics target them selectively',
          isCorrect: true,
        },
        { id: 'b', text: 'They perform a completely different function', isCorrect: false },
        { id: 'c', text: 'Prokaryotic ribosomes don\'t use mRNA', isCorrect: false },
        { id: 'd', text: 'There is no meaningful difference', isCorrect: false },
      ],
      explanation:
        'The size difference between prokaryotic (70S) and eukaryotic (80S) ribosomes is significant ' +
        'enough that many antibiotics exploit it, disrupting bacterial protein synthesis without ' +
        'harming human cells.',
    },
  ],
}