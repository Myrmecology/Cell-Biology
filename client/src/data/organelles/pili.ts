import type { Organelle } from '@/types/organelle'

export const pili: Organelle = {
  id: 'pili',
  cellTypes: ['prokaryotic'],
  name: 'Pilus',
  pluralName: 'Pili',

  shortDescription:
    'Short, hair-like protein appendages on the surface of many prokaryotic cells, used for attachment ' +
    'and, in some cases, genetic exchange between cells.',

  deepDescription:
    'Pili (singular: pilus) are thin, hair-like structures made of a protein called pilin, projecting ' +
    'from the surface of many bacterial cells. They are typically shorter, straighter, and far more ' +
    'numerous than flagella, and unlike flagella, they play no role in propelling the cell through its ' +
    'environment. Most pili function as attachment structures, allowing bacteria to adhere firmly to ' +
    'surfaces, host tissues, or one another — this attachment role is often central to a pathogenic ' +
    'bacterium\'s ability to establish an infection, since many disease-causing bacteria rely on pili to ' +
    'anchor themselves to human cells before further invasion can occur. A specialized type, the sex ' +
    'pilus (or conjugation pilus), serves an entirely different purpose: it forms a physical bridge ' +
    'between two bacterial cells during a process called conjugation, through which a copy of a plasmid ' +
    '— a small circular piece of DNA, often carrying genes for antibiotic resistance — can be ' +
    'transferred directly from one bacterium to another. This is one of the primary mechanisms by which ' +
    'antibiotic resistance spreads rapidly through bacterial populations, since it allows genetic ' +
    'information to move between cells without either one needing to reproduce.',

  function:
    'Enable bacterial cells to attach firmly to surfaces or host tissue, and in some cases, facilitate ' +
    'direct transfer of genetic material between cells.',

  analogy:
    'Ordinary pili function like tiny grappling hooks, letting a bacterium anchor itself to a surface. ' +
    'The specialized conjugation pilus functions more like a temporary bridge or cable, built ' +
    'specifically to pass a package (a plasmid) from one cell directly to another.',

  comparisonNotes: {
    animal:
      'Animal cells have no equivalent structure to bacterial pili. While some eukaryotic cells have ' +
      'surface structures used for adhesion (like the microvilli lining intestinal cells), these are ' +
      'built from entirely different materials and mechanisms, and eukaryotic cells have no direct ' +
      'equivalent to the sex pilus\'s role in transferring genetic material between individual cells.',
  },

  scenePosition: {
    prokaryotic: { x: -1.6, y: 0.9, z: 0.6 },
  },

  sceneScale: {
    prokaryotic: 1.2,
  },

  animation: {
    animationId: 'pili-conjugation',
    label: 'Watch bacterial conjugation',
    durationSeconds: 13,
  },

  imageQuery: {
    query: 'bacterial pili',
    fallbackAttribution: 'Structural imagery courtesy of public scientific archives.',
  },

  quizQuestions: [
    {
      id: 'pili-q1',
      prompt: 'What is the primary function of most pili?',
      options: [
        { id: 'a', text: 'Propelling the cell through liquid', isCorrect: false },
        { id: 'b', text: 'Attaching the cell to surfaces or host tissue', isCorrect: true },
        { id: 'c', text: 'Producing ATP', isCorrect: false },
        { id: 'd', text: 'Digesting nutrients outside the cell', isCorrect: false },
      ],
      explanation:
        'Most pili serve as attachment structures, allowing bacteria to adhere to surfaces, host ' +
        'tissue, or other cells — unlike flagella, which are used for movement.',
    },
    {
      id: 'pili-q2',
      prompt: 'What does a sex pilus (conjugation pilus) do?',
      options: [
        { id: 'a', text: 'It helps the cell move faster through liquid', isCorrect: false },
        {
          id: 'b',
          text: 'It forms a bridge between two bacterial cells to transfer a plasmid',
          isCorrect: true,
        },
        { id: 'c', text: 'It protects the cell from antibiotics directly', isCorrect: false },
        { id: 'd', text: 'It anchors the cell permanently to a host', isCorrect: false },
      ],
      explanation:
        'The conjugation pilus creates a physical connection between two bacteria, allowing a plasmid ' +
        '— often carrying antibiotic resistance genes — to pass from one cell to the other.',
    },
    {
      id: 'pili-q3',
      prompt: 'Why are pili significant in the spread of antibiotic resistance?',
      options: [
        {
          id: 'a',
          text: 'Conjugation via pili allows resistance genes to spread between bacteria without reproduction',
          isCorrect: true,
        },
        { id: 'b', text: 'Pili destroy antibiotics on contact', isCorrect: false },
        { id: 'c', text: 'Pili have no connection to antibiotic resistance', isCorrect: false },
        { id: 'd', text: 'Pili only transfer resistance genes to human cells', isCorrect: false },
      ],
      explanation:
        'Conjugation allows resistance-carrying plasmids to move directly between bacterial cells, ' +
        'making it one of the fastest ways antibiotic resistance spreads through a population.',
    },
  ],
}