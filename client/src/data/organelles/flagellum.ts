import type { Organelle } from '@/types/organelle'

export const flagellum: Organelle = {
  id: 'flagellum',
  cellTypes: ['prokaryotic'],
  name: 'Flagellum',
  pluralName: 'Flagella',

  shortDescription:
    'A long, whip-like appendage that propels a prokaryotic cell through its environment, driven by a ' +
    'true rotary molecular motor.',

  deepDescription:
    'The bacterial flagellum is a long, helical filament extending from the cell surface, used to ' +
    'propel the cell through liquid environments. Unlike cilia or eukaryotic flagella, which bend and ' +
    'whip using internal sliding protein filaments, the bacterial flagellum is a genuinely rotary ' +
    'structure — it spins like a propeller, driven by a molecular motor embedded in the cell membrane ' +
    'and wall. This motor is powered not by ATP directly, but by the flow of protons (or in some ' +
    'species, sodium ions) across the membrane, moving down their electrochemical gradient through the ' +
    'motor complex much like water flowing through a turbine. The motor can rotate in either direction: ' +
    'counterclockwise rotation typically drives smooth, directed swimming (called a "run"), while a ' +
    'brief switch to clockwise rotation causes the cell to tumble randomly, reorienting it before the ' +
    'next run. By adjusting the balance of runs and tumbles in response to chemical signals in the ' +
    'environment — a behavior called chemotaxis — bacteria can navigate toward nutrients or away from ' +
    'harmful substances, even though the flagellum itself has no ability to steer directionally on its ' +
    'own.',

  function:
    'Propel the cell through its environment and, combined with directional tumbling, enable movement ' +
    'toward favorable conditions and away from harmful ones.',

  analogy:
    'Functions like an outboard boat motor — a rotating propeller (the flagellum) driven by an engine ' +
    'that runs on fuel flow (in this case, protons flowing through the motor) rather than the whip-like ' +
    'oar strokes used by other swimming cells.',

  comparisonNotes: {
    animal:
      'Some eukaryotic cells, such as sperm cells, also have a structure called a flagellum, but it is ' +
      'built and powered completely differently. The eukaryotic flagellum contains a distinctive ' +
      '"9+2" arrangement of microtubules that bends and whips using a sliding-filament mechanism powered ' +
      'directly by ATP, rather than rotating like a propeller. Despite sharing a name, the bacterial and ' +
      'eukaryotic flagellum are not evolutionarily related structures — a classic example of convergent ' +
      'evolution, where two very different mechanisms evolved to solve the same problem of movement.',
  },

  scenePosition: {
    prokaryotic: { x: 1.8, y: -0.4, z: 0.2 },
  },

  sceneScale: {
    prokaryotic: 1.5,
  },

  animation: {
    animationId: 'flagellum-rotary-motor',
    label: 'Watch the rotary motor spin',
    durationSeconds: 12,
  },

  imageQuery: {
    query: 'bacterial flagellum',
    fallbackAttribution: 'Structural imagery courtesy of public scientific archives.',
  },

  quizQuestions: [
    {
      id: 'flagellum-q1',
      prompt: 'How does the bacterial flagellum move, mechanically?',
      options: [
        { id: 'a', text: 'It bends and whips like a eukaryotic flagellum', isCorrect: false },
        { id: 'b', text: 'It rotates like a propeller, driven by a rotary motor', isCorrect: true },
        { id: 'c', text: 'It does not move; it is a passive sensory structure', isCorrect: false },
        { id: 'd', text: 'It contracts and expands rhythmically', isCorrect: false },
      ],
      explanation:
        'Unlike whip-like eukaryotic flagella, the bacterial flagellum is a true rotary structure, ' +
        'spinning like a propeller under power from a molecular motor.',
    },
    {
      id: 'flagellum-q2',
      prompt: 'What actually powers the bacterial flagellar motor?',
      options: [
        { id: 'a', text: 'ATP hydrolysis directly', isCorrect: false },
        {
          id: 'b',
          text: 'The flow of protons (or sometimes sodium ions) across the membrane',
          isCorrect: true,
        },
        { id: 'c', text: 'Light energy', isCorrect: false },
        { id: 'd', text: 'Chemical energy from the cell wall', isCorrect: false },
      ],
      explanation:
        'The flagellar motor is powered by ions flowing down their electrochemical gradient through the ' +
        'motor complex — not by ATP directly, unlike most other cellular motors.',
    },
    {
      id: 'flagellum-q3',
      prompt: 'Are bacterial and eukaryotic flagella evolutionarily related structures?',
      options: [
        {
          id: 'a',
          text: 'No — despite sharing a name, they are structurally distinct and evolved independently',
          isCorrect: true,
        },
        { id: 'b', text: 'Yes, they are identical in structure and mechanism', isCorrect: false },
        { id: 'c', text: 'Only plant flagella are related to bacterial ones', isCorrect: false },
        { id: 'd', text: 'Eukaryotic flagella evolved directly from bacterial ones', isCorrect: false },
      ],
      explanation:
        'Despite the shared name, bacterial and eukaryotic flagella are a textbook case of convergent ' +
        'evolution — different structures and mechanisms that independently evolved to solve the same ' +
        'problem of cell movement.',
    },
  ],
}