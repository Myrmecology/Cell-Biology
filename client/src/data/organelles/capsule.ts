import type { Organelle } from '@/types/organelle'

export const capsule: Organelle = {
  id: 'capsule',
  cellTypes: ['prokaryotic'],
  name: 'Capsule',
  pluralName: 'Capsules',

  shortDescription:
    'A thick, protective outer layer surrounding the cell wall in some bacteria, providing defense and ' +
    'helping the cell adhere to surfaces.',

  deepDescription:
    'The capsule is a thick, gel-like layer found outside the cell wall in many — though not all — ' +
    'species of bacteria, typically composed of polysaccharides (long chains of sugar molecules), and ' +
    'occasionally proteins. Unlike the rigid cell wall beneath it, the capsule is soft and slimy, and it ' +
    'serves several important protective functions. Most significantly, the capsule provides a physical ' +
    'defense against a host organism\'s immune system: it can prevent immune cells called phagocytes ' +
    'from recognizing and engulfing the bacterium, and can shield the bacterial surface from antibodies ' +
    'that would otherwise mark it for destruction. This makes the capsule a major factor in bacterial ' +
    'virulence — many of the most dangerous disease-causing bacteria, including the species responsible ' +
    'for pneumonia and meningitis, rely heavily on a capsule to survive inside a host long enough to ' +
    'cause infection. Beyond immune evasion, the capsule also helps bacteria adhere firmly to surfaces ' +
    'and to one another, contributing to the formation of biofilms — dense, structured bacterial ' +
    'communities that are notably more resistant to antibiotics and disinfectants than free-floating ' +
    'individual bacteria. Because the capsule is not required for basic survival the way the cell wall ' +
    'or membrane is, only some bacterial species produce one, and its presence or thickness can vary ' +
    'even between different strains of the same species.',

  function:
    'Provide physical protection against a host\'s immune system, aid in surface adhesion, and ' +
    'contribute to biofilm formation.',

  analogy:
    'Functions like a soldier\'s camouflage cloak — it doesn\'t make the cell physically stronger the ' +
    'way the wall does, but it helps the cell go unnoticed by threats (the immune system) that would ' +
    'otherwise target and destroy it.',

  comparisonNotes: {
    animal:
      'Animal cells have no equivalent structure to a bacterial capsule. Human immune cells, ' +
      'ironically, are often the very target the capsule is defending a bacterium against — the ' +
      'capsule\'s entire purpose in pathogenic bacteria is frequently to evade detection and destruction ' +
      'by exactly this kind of immune cell.',
    plant:
      'Plant cells have no capsule either, though it\'s worth noting the capsule and the plant cell wall ' +
      'serve conceptually different purposes despite both being "outer layers" — the plant cell wall is ' +
      'primarily structural, providing rigidity and shape, while a bacterial capsule is primarily ' +
      'defensive and adhesive, and is soft rather than rigid.',
  },

  scenePosition: {
    prokaryotic: { x: 0, y: 3.2, z: 0 },
  },

  sceneScale: {
    prokaryotic: 1,
  },

  animation: {
    animationId: 'capsule-immune-evasion',
    label: 'Watch immune evasion in action',
    durationSeconds: 13,
  },

  imageQuery: {
    query: 'bacterial capsule polysaccharide layer diagram',
    fallbackAttribution: 'Structural imagery courtesy of public scientific archives.',
  },

  quizQuestions: [
    {
      id: 'capsule-q1',
      prompt: 'What is the primary function of a bacterial capsule?',
      options: [
        { id: 'a', text: 'Producing ATP for the cell', isCorrect: false },
        {
          id: 'b',
          text: 'Protecting the cell from a host\'s immune system and aiding surface adhesion',
          isCorrect: true,
        },
        { id: 'c', text: 'Storing the cell\'s genetic material', isCorrect: false },
        { id: 'd', text: 'Synthesizing proteins', isCorrect: false },
      ],
      explanation:
        'The capsule primarily defends the bacterium against immune detection and helps it adhere to ' +
        'surfaces and other bacteria.',
    },
    {
      id: 'capsule-q2',
      prompt: 'What is a capsule typically made of?',
      options: [
        { id: 'a', text: 'Cellulose', isCorrect: false },
        { id: 'b', text: 'Peptidoglycan', isCorrect: false },
        { id: 'c', text: 'Polysaccharides (and sometimes proteins)', isCorrect: true },
        { id: 'd', text: 'Phospholipids', isCorrect: false },
      ],
      explanation:
        'Capsules are typically composed of long chains of sugar molecules (polysaccharides), sometimes ' +
        'along with proteins — a soft, gel-like material distinct from the rigid peptidoglycan wall ' +
        'beneath it.',
    },
    {
      id: 'capsule-q3',
      prompt: 'Why is the capsule significant for bacterial virulence (disease-causing ability)?',
      options: [
        {
          id: 'a',
          text: 'It helps bacteria evade detection and destruction by the host immune system',
          isCorrect: true,
        },
        { id: 'b', text: 'It produces toxins directly', isCorrect: false },
        { id: 'c', text: 'It has no connection to disease-causing ability', isCorrect: false },
        { id: 'd', text: 'It weakens the bacterium, making capsules disadvantageous', isCorrect: false },
      ],
      explanation:
        'Many dangerous pathogens rely on their capsule to avoid immune detection long enough to ' +
        'establish an infection, making it a key factor in how virulent a bacterial strain is.',
    },
  ],
}