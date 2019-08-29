const data = [
  {
    id: 0,
    nom: 'Paul TRAORE',
    classes: ['6e-B1', '5e-A2', '4e-MC-3'],
    matiere: ['Mathématique'],
    nationalite: 'Sénégalaise',
    genre: 'H',
    age: 23,
    url: '/tab-profil/image@2x1.png',
    email: 'quelchose@num'
  },
  {
    id: 1,
    nom: 'Martin BOLORE',
    classes: ['3e-MC-1', 'Tle-C'],
    matiere: ['Anglais'],
    nationalite: 'Béninoise',
    genre: 'H',
    age: 30,
    url: '/tab-profil/image@2x2.png',
    email: 'quelchose@num'
  },
  {
    id: 2,
    nom: 'Alice HOUKANNOUNON',
    classes: ['4e-MC-1', '4e-MC-2', '4e-MC-3'],
    matiere: ['Histoire-Géographie'],
    nationalite: 'Béninoise',
    genre: 'F',
    age: 25,
    url: '/tab-profil/image@2x3.png',
    email: 'quelchose@num'
  },
  {
    id: 3,
    nom: 'Arnold BATCHO',
    classes: ['3e-ML-1', '2nd-D'],
    matiere: ['Physique-Chimie'],
    nationalite: 'Béninoise',
    genre: 'M',
    age: 36,
    url: '/tab-profil/image@2x4.png',
    email: 'quelchose@num'
  },
  {
    id: 4,
    nom: 'Carolline MARTINEZE',
    classes: ['2nd-D-3', '1er-D-2', 'Tle-D-1'],
    matiere: ['SVT'],
    nationalite: 'Béninoise',
    genre: 'F',
    age: 24,
    url: '/tab-profil/image@2x5.png',
    email: 'quelchose@num'
  },
  {
    id: 5,
    nom: 'Carlos MANOU',
    classes: ['5e-A2', '2nd-D-3', '1er-D-2', 'Tle-D-1'],
    matiere: ['Français'],
    nationalite: 'Béninoise',
    genre: 'F',
    age: 24,
    url: '/tab-profil/image@2x6.png',
    email: 'quelchose@num'
  }
]

export default data

export const getEleve = async (id) => {
  return new Promise((resolve, reject) => {
    const datEleve = data.find(el => String(el.id) === id)
    if (datEleve) resolve(datEleve)
    else reject(new Error(''))
  })
}
