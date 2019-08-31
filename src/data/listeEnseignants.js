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
    email: 'quelchose@num',
    dateInscription: '05/08/2019',
    details: [
      { title: 'Nom', value: 'TRAORE' },
      { title: 'Nationalité', value: 'Sénégalaise' },
      { title: 'Prénom', value: 'Paul' },
      { title: 'Eamil', value: 'traore.paul@gmail.com' },
      { title: 'Age', value: '34ans' },
      { title: 'Contact', value: '+229 67 17 11 05' },
      { title: 'Classe', value: ['6e-B1', '5e-A2', '4e-MC-3'] },
      { title: 'Genre', value: 'Masculin' },
      { title: 'Matières', value: ['Mathématique'] },
      { title: 'Personne à contacter', value: 'HOUNNON Félix +229 67 55 23 10' },
      { title: 'Adresse', value: 'Abomey-Calavi Tankpe lot 16 Maison HOUNNON' }
    ],
    paiement: [
      { status: '1', type: 'Scolarité', montant: 80000, echeance: '20/12/2019' }
    ]
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
    email: 'quelchose@num',
    dateInscription: '05/08/2019',
    details: [
      { title: 'Nom', value: 'BOLORE' },
      { title: 'Nationalité', value: 'Béninoise' },
      { title: 'Prénom', value: 'Martin' },
      { title: 'Eamil', value: 'bolore.martin@gmail.com' },
      { title: 'Age', value: '24ans' },
      { title: 'Contact', value: '+229 67 17 11 05' },
      { title: 'Classe', value: ['3e-MC-1', 'Tle-C'] },
      { title: 'Genre', value: 'Masculin' },
      { title: 'Matières', value: ['Anglais'] },
      { title: 'Personne à contacter', value: 'HOUNNON Félix +229 67 55 23 10' },
      { title: 'Adresse', value: 'Abomey-Calavi Tankpe lot 16 Maison HOUNNON' }
    ],
    paiement: [
      { status: '1', type: 'Scolarité', montant: 80000, echeance: '20/12/2019' }
    ]
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
    email: 'quelchose@num',
    dateInscription: '05/08/2019',
    details: [
      { title: 'Nom', value: 'BOLORE' },
      { title: 'Nationalité', value: 'Béninoise' },
      { title: 'Prénom', value: 'Martin' },
      { title: 'Eamil', value: 'bolore.martin@gmail.com' },
      { title: 'Age', value: '24ans' },
      { title: 'Contact', value: '+229 67 17 11 05' },
      { title: 'Classe', value: ['3e-MC-1', 'Tle-C'] },
      { title: 'Genre', value: 'Masculin' },
      { title: 'Matières', value: ['Anglais'] },
      { title: 'Personne à contacter', value: 'HOUNNON Félix +229 67 55 23 10' },
      { title: 'Adresse', value: 'Abomey-Calavi Tankpe lot 16 Maison HOUNNON' }
    ],
    paiement: [
      { status: '1', type: 'Scolarité', montant: 80000, echeance: '20/12/2019' }
    ]
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
    email: 'quelchose@num',
    dateInscription: '05/08/2019',
    details: [
      { title: 'Nom', value: 'BOLORE' },
      { title: 'Nationalité', value: 'Béninoise' },
      { title: 'Prénom', value: 'Martin' },
      { title: 'Eamil', value: 'bolore.martin@gmail.com' },
      { title: 'Age', value: '24ans' },
      { title: 'Contact', value: '+229 67 17 11 05' },
      { title: 'Classe', value: ['3e-MC-1', 'Tle-C'] },
      { title: 'Genre', value: 'Masculin' },
      { title: 'Matières', value: ['Anglais'] },
      { title: 'Personne à contacter', value: 'HOUNNON Félix +229 67 55 23 10' },
      { title: 'Adresse', value: 'Abomey-Calavi Tankpe lot 16 Maison HOUNNON' }
    ],
    paiement: [
      { status: '1', type: 'Scolarité', montant: 80000, echeance: '20/12/2019' }
    ]
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
    email: 'quelchose@num',
    dateInscription: '05/08/2019',
    details: [
      { title: 'Nom', value: 'BOLORE' },
      { title: 'Nationalité', value: 'Béninoise' },
      { title: 'Prénom', value: 'Martin' },
      { title: 'Eamil', value: 'bolore.martin@gmail.com' },
      { title: 'Age', value: '24ans' },
      { title: 'Contact', value: '+229 67 17 11 05' },
      { title: 'Classe', value: ['3e-MC-1', 'Tle-C'] },
      { title: 'Genre', value: 'Masculin' },
      { title: 'Matières', value: ['Anglais'] },
      { title: 'Personne à contacter', value: 'HOUNNON Félix +229 67 55 23 10' },
      { title: 'Adresse', value: 'Abomey-Calavi Tankpe lot 16 Maison HOUNNON' }
    ],
    paiement: [
      { status: '1', type: 'Scolarité', montant: 80000, echeance: '20/12/2019' }
    ]
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
    email: 'quelchose@num',
    dateInscription: '05/08/2019',
    details: [
      { title: 'Nom', value: 'BOLORE' },
      { title: 'Nationalité', value: 'Béninoise' },
      { title: 'Prénom', value: 'Martin' },
      { title: 'Eamil', value: 'bolore.martin@gmail.com' },
      { title: 'Age', value: '24ans' },
      { title: 'Contact', value: '+229 67 17 11 05' },
      { title: 'Classe', value: ['3e-MC-1', 'Tle-C'] },
      { title: 'Genre', value: 'Masculin' },
      { title: 'Matières', value: ['Anglais'] },
      { title: 'Personne à contacter', value: 'HOUNNON Félix +229 67 55 23 10' },
      { title: 'Adresse', value: 'Abomey-Calavi Tankpe lot 16 Maison HOUNNON' }
    ],
    paiement: [
      { status: '1', type: 'Scolarité', montant: 80000, echeance: '20/12/2019' }
    ]
  }
]

export default data

export const getEnseignant = async (id) => {
  return new Promise((resolve, reject) => {
    const datEnseignant = data.find(el => String(el.id) === id)
    if (datEnseignant) resolve(datEnseignant)
    else reject(new Error(''))
  })
}
