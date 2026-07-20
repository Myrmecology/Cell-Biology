import type { Organelle } from '@/types/organelle'

export const vacuole: Organelle = {
  id: 'vacuole',
  cellTypes: ['animal', 'plant'],
  name: 'Vacuole',
  pluralName: 'Vacuoles',

  shortDescription:
    'A fluid-filled, membrane-bound sac used for storage, waste management, and — in plant cells — ' +
    'maintaining structural rigidity.',

  deepDescription:
    'Vacuoles are versatile, membrane-bound organelles filled with water and dissolved substances, and ' +
    'their size and role differ dramatically between animal and plant cells. In animal cells, vacuoles ' +
    'are typically small, numerous, and temporary, forming as needed to store water, ions, nutrients, ' +
    'or waste products, or to transport materials brought in through endocytosis. In plant cells, by ' +
    'contrast, a single large central vacuole often occupies as much as 30 to 90 percent of the total ' +
    'cell volume, pushing the cytoplasm and other organelles into a thin layer near the cell membrane. ' +
    'This central vacuole is enclosed by a specialized membrane called the tonoplast, which regulates ' +
    'the movement of ions and molecules between the vacuole and the surrounding cytoplasm. The central ' +
    'vacuole serves several critical roles: it stores water, nutrients, and pigments (responsible for ' +
    'many flower and fruit colors); it contains digestive enzymes similar to a lysosome\'s, breaking ' +
    'down waste and recycling cellular components; and most importantly, it generates turgor pressure ' +
    'by taking in water, pressing outward against the rigid cell wall to keep the plant firm and ' +
    'upright. When a plant wilts, it\'s because its central vacuoles have lost water and turgor ' +
    'pressure has dropped.',

  function:
    'Store water, nutrients, and waste products; in plant cells, generate turgor pressure that ' +
    'maintains structural rigidity.',

  analogy:
    'In plant cells, the central vacuole functions much like a water tank pressurizing a firehose — ' +
    'it\'s the internal water pressure pressing outward that keeps the whole structure firm, and when ' +
    'the tank empties, the structure goes slack.',

  comparisonNotes: {
    animal:
      'While both cell types have vacuoles, animal cell vacuoles are small, numerous, and used mainly ' +
      'for short-term storage or transport, whereas a plant cell dedicates a single enormous central ' +
      'vacuole to long-term storage and, critically, structural support through turgor pressure — a job ' +
      'animal cells have no equivalent need for, since they rely on the cytoskeleton and, in many cases, ' +
      'an internal or external skeleton instead.',
    prokaryotic:
      'Prokaryotic cells generally lack true vacuoles of this kind. Some bacteria contain small, ' +
      'simpler gas-filled vesicles used for buoyancy in aquatic environments, but these are structurally ' +
      'and functionally distinct from the complex, enzyme-containing vacuoles found in eukaryotic cells.',
  },

  scenePosition: {
    animal: { x: -2.6, y: -1.2, z: -1.4 },
    plant: { x: 0.3, y: 0.1, z: 0.2 },
  },

  sceneScale: {
    animal: 0.5,
    plant: 3.2,
  },

  animation: {
    animationId: 'vacuole-turgor-pressure',
    label: 'Watch turgor pressure change',
    durationSeconds: 13,
  },

  imageQuery: {
    query: 'plant cell vacuole',
    fallbackAttribution: 'Structural imagery courtesy of public scientific archives.',
  },

  quizQuestions: [
    {
      id: 'vacuole-q1',
      prompt: 'How does the vacuole differ between animal and plant cells?',
      options: [
        { id: 'a', text: 'Animal cells have no vacuoles at all', isCorrect: false },
        {
          id: 'b',
          text: 'Plant cells have one large central vacuole; animal cells have small, numerous ones',
          isCorrect: true,
        },
        { id: 'c', text: 'Plant cells have no vacuoles at all', isCorrect: false },
        { id: 'd', text: 'There is no meaningful difference between them', isCorrect: false },
      ],
      explanation:
        'Plant cells typically feature one dominant central vacuole occupying much of the cell\'s ' +
        'volume, while animal cells contain multiple small, temporary vacuoles for storage and transport.',
    },
    {
      id: 'vacuole-q2',
      prompt: 'What is turgor pressure, and what causes it?',
      options: [
        {
          id: 'a',
          text: 'Pressure from the central vacuole pushing outward against the rigid cell wall',
          isCorrect: true,
        },
        { id: 'b', text: 'Pressure created by mitochondria during respiration', isCorrect: false },
        { id: 'c', text: 'A force generated only in animal cells', isCorrect: false },
        { id: 'd', text: 'The pressure of air inside the cell', isCorrect: false },
      ],
      explanation:
        'Turgor pressure results from water inside the central vacuole pressing outward against the ' +
        'cell wall, which is what keeps healthy plant cells firm and the whole plant upright.',
    },
    {
      id: 'vacuole-q3',
      prompt: 'What happens to a plant when its vacuoles lose water?',
      options: [
        { id: 'a', text: 'Nothing changes structurally', isCorrect: false },
        { id: 'b', text: 'The plant wilts, since turgor pressure drops', isCorrect: true },
        { id: 'c', text: 'The cell wall dissolves', isCorrect: false },
        { id: 'd', text: 'The plant grows more rigid', isCorrect: false },
      ],
      explanation:
        'When central vacuoles lose water, turgor pressure drops and the plant loses its structural ' +
        'firmness, visibly wilting as a result.',
    },
  ],
}