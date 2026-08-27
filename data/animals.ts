export type Animal = {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: string;
  size: string;
  gender: string;
  image: string;
  summary: string;
  description: string;
  location: string;
  health: string;
  personality: string[];
  story: string;
  weight: string;
  photos: string[];
};

export const animals: Animal[] = [
  {
    id: '1',
    name: 'Luna',
    species: 'Cão',
    breed: 'Labrador',
    age: '2 anos',
    size: 'Grande',
    gender: 'Fêmea',
    image: '🐕',
    summary: 'Luna é uma cadela muito carinhosa e brincalhona.',
    description:
      'Luna é uma cadela muito carinhosa e brincalhona. Ela adora brincar com crianças e outros cães. Foi resgatada quando ainda era filhote e agora está pronta para encontrar uma família amorosa.',
    location: 'São Paulo, SP',
    health: 'Vacinada, castrada, vermifugada',
    personality: ['Carinhosa', 'Brincalhona', 'Sociável', 'Obediente'],
    story:
      'Luna foi encontrada abandonada em uma caixa de papelão quando tinha apenas 2 meses. Desde então, tem sido cuidada com muito amor pela nossa equipe.',
    weight: '25kg',
    photos: ['🐕', '🐕‍🦺', '🦮'],
  },
  {
    id: '2',
    name: 'Mimi',
    species: 'Gato',
    breed: 'SRD',
    age: '1 ano',
    size: 'Pequeno',
    gender: 'Fêmea',
    image: '🐱',
    summary: 'Mimi é uma gatinha dócil e independente.',
    description:
      'Mimi é uma gatinha dócil e independente. Perfeita para quem busca um companheiro tranquilo.',
    location: 'São Paulo, SP',
    health: 'Vacinada, castrada, vermifugada',
    personality: ['Dócil', 'Independente', 'Carinhosa', 'Calma'],
    story:
      'Mimi foi resgatada de uma colônia de gatos de rua. É muito carinhosa e se adapta bem a ambientes internos.',
    weight: '3kg',
    photos: ['🐱', '😺', '😸'],
  },
  {
    id: '3',
    name: 'Thor',
    species: 'Cão',
    breed: 'Pastor Alemão',
    age: '3 anos',
    size: 'Grande',
    gender: 'Macho',
    image: '🐕‍🦺',
    summary: 'Thor é um cão protetor e leal.',
    description: 'Thor é um cão protetor e leal. Ideal para quem busca um companheiro fiel.',
    location: 'São Paulo, SP',
    health: 'Vacinado, castrado, vermifugado',
    personality: ['Protetor', 'Leal', 'Inteligente', 'Corajoso'],
    story:
      'Thor foi abandonado por sua família anterior, mas não perdeu a fé nos humanos. É um cão muito especial.',
    weight: '35kg',
    photos: ['🐕‍🦺', '🐕', '🦮'],
  },
  {
    id: '4',
    name: 'Bella',
    species: 'Cão',
    breed: 'Golden Retriever',
    age: '4 anos',
    size: 'Grande',
    gender: 'Fêmea',
    image: '🦮',
    summary: 'Bella é muito amigável e adora crianças.',
    description:
      'Bella é muito amigável e adora crianças. Uma companheira perfeita para famílias.',
    location: 'São Paulo, SP',
    health: 'Vacinada, castrada, vermifugada',
    personality: ['Amigável', 'Paciente', 'Brincalhona', 'Gentil'],
    story:
      'Bella chegou até nós após seu dono idoso não conseguir mais cuidar dela. É uma cadelinha muito especial.',
    weight: '28kg',
    photos: ['🦮', '🐕', '🐕‍🦺'],
  },
];
