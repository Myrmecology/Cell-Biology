export interface ComparisonRow {
  category: string
  eukaryotic: string
  prokaryotic: string
}

export const eukaryoteProkaryoteIntro =
  'All life on Earth is built from one of two fundamentally different cell architectures. ' +
  'Eukaryotic cells — found in animals, plants, fungi, and protists — organize their contents into ' +
  'membrane-bound compartments, most notably a true nucleus. Prokaryotic cells — bacteria and archaea ' +
  '— take a simpler, older approach, with no internal membrane-bound organelles at all. Despite that ' +
  'simplicity, prokaryotes are the oldest and most numerous form of life on the planet, and understanding ' +
  'what they lack is just as instructive as understanding what eukaryotic cells have.'

export const comparisonRows: ComparisonRow[] = [
  {
    category: 'Genetic material',
    eukaryotic:
      'Enclosed within a true, membrane-bound nucleus. DNA is linear and organized around histone ' +
      'proteins into chromatin.',
    prokaryotic:
      'Concentrated in an unmembraned nucleoid region. DNA is typically a single circular chromosome, ' +
      'often supplemented by small circular plasmids.',
  },
  {
    category: 'Internal organelles',
    eukaryotic:
      'Extensive membrane-bound organelles — mitochondria, ER, Golgi apparatus, lysosomes, peroxisomes ' +
      '— each compartmentalizing a specialized function.',
    prokaryotic:
      'No membrane-bound internal organelles. All cellular processes occur directly in the cytoplasm or ' +
      'across the plasma membrane.',
  },
  {
    category: 'Size',
    eukaryotic:
      'Typically 10–100 micrometers in diameter — roughly 10 times larger than a typical prokaryotic ' +
      'cell.',
    prokaryotic:
      'Typically 1–10 micrometers in diameter, allowing for a much higher surface-area-to-volume ratio.',
  },
  {
    category: 'Ribosomes',
    eukaryotic:
      'Larger (80S) ribosomes, either free in the cytoplasm or attached to the rough endoplasmic ' +
      'reticulum.',
    prokaryotic:
      'Smaller (70S) ribosomes, floating freely in the cytoplasm — a size difference many antibiotics ' +
      'exploit.',
  },
  {
    category: 'Cell division',
    eukaryotic:
      'Divides through mitosis (or meiosis for reproductive cells), a multi-stage process involving ' +
      'spindle fibers and chromosome segregation.',
    prokaryotic:
      'Divides through binary fission, a simpler process where the single chromosome replicates and the ' +
      'cell splits directly in two.',
  },
  {
    category: 'Energy production',
    eukaryotic:
      'Handled by dedicated mitochondria (and chloroplasts, in photosynthetic cells).',
    prokaryotic:
      'Occurs directly across the plasma membrane, sometimes folded to increase surface area, with no ' +
      'dedicated organelle.',
  },
  {
    category: 'Cell wall',
    eukaryotic:
      'Present in plant cells (built from cellulose) and fungi (built from chitin); absent in animal ' +
      'cells entirely.',
    prokaryotic:
      'Present in most bacteria, built from peptidoglycan — a molecule found nowhere in eukaryotic ' +
      'cells, and the target of many antibiotics.',
  },
  {
    category: 'Movement',
    eukaryotic:
      'Some cells use flagella or cilia built from microtubules in a "9+2" arrangement, powered ' +
      'directly by ATP and moving in a whip-like or beating motion.',
    prokaryotic:
      'Some cells use a flagellum built from a completely different protein, powered by a true rotary ' +
      'motor driven by an ion gradient — spinning like a propeller rather than whipping.',
  },
  {
    category: 'Origin & evolutionary age',
    eukaryotic:
      'Believed to have evolved roughly 1.5–2 billion years ago, likely through the endosymbiosis of ' +
      'free-living prokaryotic ancestors becoming mitochondria and chloroplasts.',
    prokaryotic:
      'The oldest known form of life on Earth, with fossil evidence dating back roughly 3.5–3.8 billion ' +
      'years.',
  },
]

export const eukaryoteProkaryoteOutro =
  'Despite these structural differences, eukaryotic and prokaryotic cells share deep similarities that ' +
  'reflect a shared evolutionary origin — both are enclosed by a phospholipid bilayer membrane, both use ' +
  'DNA as genetic material and the same universal genetic code, and both rely on ribosomes to translate ' +
  'that code into proteins. These shared fundamentals are part of why the endosymbiotic theory — the ' +
  'idea that mitochondria and chloroplasts descend from ancient free-living prokaryotes — is so widely ' +
  'accepted: it explains how one cellular strategy could give rise to the other.'