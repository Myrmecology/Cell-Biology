import type { Organelle } from '@/types/organelle'

export const plasmodesma: Organelle = {
  id: 'plasmodesma',
  cellTypes: ['plant'],
  name: 'Plasmodesma',
  pluralName: 'Plasmodesmata',

  shortDescription:
    'A microscopic channel through the cell wall that directly connects the cytoplasm of neighboring ' +
    'plant cells, allowing them to share materials.',

  deepDescription:
    'Plasmodesmata (singular: plasmodesma) are narrow channels that tunnel through the rigid cell wall, ' +
    'directly connecting the cytoplasm of one plant cell to the cytoplasm of its immediate neighbor. ' +
    'Unlike the cell membrane, which controls what crosses between a cell and its external environment, ' +
    'plasmodesmata create continuous cytoplasmic passageways between adjoining cells, effectively ' +
    'linking many individual plant cells into one larger, interconnected communication network called ' +
    'the symplast. Each channel is lined by an extension of the cell membrane itself, and often contains ' +
    'a narrow strand of modified endoplasmic reticulum, called a desmotubule, running through its ' +
    'center. Small molecules — water, sugars, ions, and signaling molecules — can pass freely between ' +
    'connected cells through this channel, and the channel\'s effective width can even be actively ' +
    'regulated, widening or narrowing in response to the plant\'s needs. This direct cytoplasmic ' +
    'connectivity solves a structural problem plant cells face that animal cells don\'t: because plant ' +
    'cells are individually encased in a rigid wall and cannot simply migrate or press against one ' +
    'another to communicate the way animal cells can, plasmodesmata provide the plant equivalent of ' +
    'direct intercellular communication, allowing coordinated responses — such as defense signaling ' +
    'against pathogens — to spread rapidly across many connected cells.',

  function:
    'Create direct cytoplasmic channels between neighboring plant cells, allowing materials and ' +
    'signals to move between them without crossing the cell wall externally.',

  analogy:
    'Functions like a shared hallway connecting adjoining apartments — rather than each unit being ' +
    'fully sealed off and requiring a trip outside to reach a neighbor, a direct internal passage lets ' +
    'residents move things back and forth without ever stepping outside.',

  comparisonNotes: {
    animal:
      'Animal cells have no equivalent to plasmodesmata, since they lack a rigid cell wall that would ' +
      'otherwise block direct cell-to-cell contact in the first place. Instead, animal cells achieve a ' +
      'broadly similar outcome — direct cytoplasmic connections between neighbors — through an entirely ' +
      'different structure called a gap junction, built from proteins rather than a wall-spanning ' +
      'channel.',
    prokaryotic:
      'Prokaryotic cells have no plasmodesmata and, in most cases, exist as independent, unconnected ' +
      'single cells rather than as part of an interconnected tissue. Where bacteria do exchange material ' +
      'directly between cells, it happens through the entirely different mechanism of conjugation via a ' +
      'pilus, not a shared cytoplasmic channel.',
  },

  scenePosition: {
    plant: { x: 3.4, y: -0.8, z: -2.6 },
  },

  sceneScale: {
    plant: 0.7,
  },

  animation: {
    animationId: 'plasmodesma-material-exchange',
    label: 'Watch material move between cells',
    durationSeconds: 11,
  },

  imageQuery: {
    query: 'plasmodesmata plant cell wall channel diagram',
    fallbackAttribution: 'Structural imagery courtesy of public scientific archives.',
  },

  quizQuestions: [
    {
      id: 'plasmodesma-q1',
      prompt: 'What is the primary function of a plasmodesma?',
      options: [
        { id: 'a', text: 'Producing energy for the cell', isCorrect: false },
        {
          id: 'b',
          text: 'Creating a direct cytoplasmic channel between neighboring plant cells',
          isCorrect: true,
        },
        { id: 'c', text: 'Storing water for the cell', isCorrect: false },
        { id: 'd', text: 'Breaking down cellular waste', isCorrect: false },
      ],
      explanation:
        'Plasmodesmata tunnel through the cell wall to directly connect the cytoplasm of adjoining plant ' +
        'cells, allowing materials and signals to pass between them.',
    },
    {
      id: 'plasmodesma-q2',
      prompt: 'What is the "symplast"?',
      options: [
        {
          id: 'a',
          text: 'The interconnected network of plant cells linked by plasmodesmata',
          isCorrect: true,
        },
        { id: 'b', text: 'A type of plant cell wall', isCorrect: false },
        { id: 'c', text: 'The fluid inside a single vacuole', isCorrect: false },
        { id: 'd', text: 'A specialized chloroplast structure', isCorrect: false },
      ],
      explanation:
        'The symplast refers to the continuous cytoplasmic network formed when many plant cells are ' +
        'linked together via plasmodesmata, effectively connecting them into one larger system.',
    },
    {
      id: 'plasmodesma-q3',
      prompt: 'What do animal cells use to achieve a similar outcome to plasmodesmata?',
      options: [
        { id: 'a', text: 'Animal cells have no comparable structure at all', isCorrect: false },
        { id: 'b', text: 'Gap junctions, a different structure built from proteins', isCorrect: true },
        { id: 'c', text: 'Animal cells also have plasmodesmata', isCorrect: false },
        { id: 'd', text: 'The cell wall', isCorrect: false },
      ],
      explanation:
        'Animal cells lack a cell wall and use an entirely different structure, gap junctions, to ' +
        'achieve direct cytoplasmic communication between neighboring cells.',
    },
  ],
}