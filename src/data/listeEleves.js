const data = [
  {
    id: 0,
    nom: 'Jacky ADJIBI',
    classe: '6e',
    serie: 'ML',
    section: 'Qlq',
    genre: 'F',
    age: 13,
    url: '/tab-profil/image@2x1.png',
    email: 'quelchose@num',
    dateInscription: '20/08/2019',
    details: [
      { title: 'Nom', value: 'ADJIBI' },
      { title: 'Père', value: 'ADJIBI Karl' },
      { title: 'Prénom', value: 'Jacky' },
      { title: 'Mère', value: 'DANSOU Marie' },
      { title: 'Date de naissance', value: '25/01/2006' },
      { title: 'Contact', value: '+229 45283334' },
      { title: 'Classe', value: 'Sixème' },
      { title: 'Genre', value: 'Féminin' },
      { title: 'Série', value: 'ML' },
      { title: 'Personne à contacter', value: 'ADJIBI Karl +229 45283334' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'BATCHO Harold +229 56887609' },
      { title: 'Adresse', value: 'Abomey-Calavi GBodjo lot 41 Maison ADJIBI' },
      { title: 'Allergie', value: 'Cacahuète' }
    ],
    paiement: [
      { status: '2', type: 'Scolarité', montant: 100000, echeance: '20/12/2019' }
    ]
  },
  {
    id: 1,
    nom: 'Jane FRANCOISE',
    classe: '5e',
    serie: 'MC',
    section: 'Qlq',
    genre: 'F',
    age: 10,
    url: '/tab-profil/image@2x2.png',
    email: 'quelchose@num',
    dateInscription: '20/07/2019',
    details: [
      { title: 'Nom', value: 'FRANCOISE' },
      { title: 'Père', value: 'FRANCOISE Bertin' },
      { title: 'Prénom', value: 'Jane' },
      { title: 'Mère', value: 'HOUNGBEDJI Nelly' },
      { title: 'Date de naissance', value: '20/08/2009' },
      { title: 'Contact', value: '+229 60 17 11 05' },
      { title: 'Classe', value: 'Cinquième' },
      { title: 'Genre', value: 'Féminin' },
      { title: 'Série', value: 'MC' },
      { title: 'Personne à contacter', value: 'HOUNGBEDJI Nelly +229 66 59 23 10' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'GANYE Christelle +229 96 23 02 05' },
      { title: 'Adresse', value: 'Abomey-Calavi Togoudo lot 16 Maison FANTONDJI' },
      { title: 'Allergie', value: 'Néant' }
    ],
    paiement: [
      { status: '0', type: 'Scolarité', montant: 0, echeance: '20/12/2019' }
    ]
  },
  {
    id: 2,
    nom: 'Flore HOUNNON',
    classe: '4e',
    serie: 'ML',
    section: 'Qlq',
    genre: 'F',
    age: 15,
    url: '/tab-profil/image@2x3.png',
    email: 'quelchose@num',
    dateInscription: '05/08/2019',
    details: [
      { title: 'Nom', value: 'HOUNNON' },
      { title: 'Père', value: 'HOUNNON Félix' },
      { title: 'Prénom', value: 'Flore' },
      { title: 'Mère', value: 'AHOUANDOGBO Josselyne' },
      { title: 'Date de naissance', value: '26/03/2004' },
      { title: 'Contact', value: '+229 67 17 11 05' },
      { title: 'Classe', value: 'Quatrième' },
      { title: 'Genre', value: 'Féminin' },
      { title: 'Série', value: 'ML' },
      { title: 'Personne à contacter', value: 'HOUNNON Félix +229 67 55 23 10' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'BEHETON Généreuse +229 97 23 82 00' },
      { title: 'Adresse', value: 'Abomey-Calavi Tankpe lot 16 Maison HOUNNON' },
      { title: 'Allergie', value: 'Néant' }
    ],
    paiement: [
      { status: '1', type: 'Scolarité', montant: 80000, echeance: '20/12/2019' }
    ]
  },
  {
    id: 3,
    nom: 'François ZINSOU',
    classe: '3e',
    serie: 'MC',
    section: 'Qlq',
    genre: 'M',
    age: 16,
    url: '/tab-profil/image@2x4.png',
    email: 'quelchose@num',
    dateInscription: '20/10/2019',
    details: [
      { title: 'Nom', value: 'ZINSOU' },
      { title: 'Père', value: 'ZINSOU Cir' },
      { title: 'Prénom', value: 'François' },
      { title: 'Mère', value: 'SEDOGBO Diane' },
      { title: 'Date de naissance', value: '07/03/2003' },
      { title: 'Contact', value: '+229 98 17 11 05' },
      { title: 'Classe', value: 'Troisième' },
      { title: 'Genre', value: 'Masculin' },
      { title: 'Série', value: 'MC' },
      { title: 'Personne à contacter', value: 'ZINSOU Cir +229 98 17 11 05' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'APITHY Mario +229 64 00 12 89' },
      { title: 'Adresse', value: 'Abomey-Calavi BIdosessi lot 16 Maison ZINSOU' },
      { title: 'Allergie', value: 'Néant' }
    ],
    paiement: [
      { status: '2', type: 'Scolarité', montant: 150000, echeance: '20/12/2019' }
    ]
  },
  {
    id: 4,
    nom: 'Carolle BONOU',
    classe: '2nd',
    serie: 'C',
    section: 'Qlq',
    genre: 'F',
    age: 14,
    url: '/tab-profil/image@2x5.png',
    email: 'quelchose@num',
    dateInscription: '20/08/2019',
    details: [
      { title: 'Nom', value: 'BONOU' },
      { title: 'Père', value: 'BONOU Clément' },
      { title: 'Prénom', value: 'Carolle' },
      { title: 'Mère', value: 'DICODE Elisabeth' },
      { title: 'Date de naissance', value: '05/10/2005' },
      { title: 'Contact', value: '+229 64 60 91 84' },
      { title: 'Classe', value: 'Seconde' },
      { title: 'Genre', value: 'Féminin' },
      { title: 'Série', value: 'C' },
      { title: 'Personne à contacter', value: 'DICODE Elisabeth +229 64 60 91 84' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'GNONHOSSOU Mickaël +229 97 25 55 05' },
      { title: 'Adresse', value: 'Abomey-Calavi BIdosessi lot 25 Maison BONOU' },
      { title: 'Allergie', value: 'Néant' }
    ],
    paiement: [
      { status: '2', type: 'Scolarité', montant: 160000, echeance: '20/12/2019' }
    ]
  },
  {
    id: 5,
    nom: 'Nabilath SAID',
    classe: '1ere',
    serie: 'D',
    section: 'Qlq',
    genre: 'F',
    age: 18,
    url: '/tab-profil/image@2x6.png',
    email: 'quelchose@num',
    dateInscription: '02/09/2019',
    details: [
      { title: 'Nom', value: 'SAID' },
      { title: 'Père', value: 'SAID Akim' },
      { title: 'Prénom', value: 'Nabilath' },
      { title: 'Mère', value: 'YEKINI Rodiath' },
      { title: 'Date de naissance', value: '25/02/2001' },
      { title: 'Contact', value: '+229 95 28 55 05' },
      { title: 'Classe', value: 'Première' },
      { title: 'Genre', value: 'Féminin' },
      { title: 'Série', value: 'D' },
      { title: 'Personne à contacter', value: 'SAID Akim +229 95 28 55 05' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'TOURE Alim +229 94 73 02 02' },
      { title: 'Adresse', value: 'Abomey-Calavi Akassato lot 213 Maison GODONOU' },
      { title: 'Allergie', value: 'Néant' }
    ],
    paiement: [
      { status: '0', type: 'Scolarité', montant: 0, echeance: '20/12/2019' }
    ]
  },
  {
    id: 6,
    nom: 'Dine CHITOU',
    classe: '6e',
    serie: 'MC',
    section: 'Qlq',
    genre: 'M',
    age: 9,
    url: '/tab-profil/image@2x7.png',
    email: 'quelchose@num',
    dateInscription: '15/07/2019',
    details: [
      { title: 'Nom', value: 'CHITOU' },
      { title: 'Père', value: 'CHITOU Mohamed' },
      { title: 'Prénom', value: 'Dine' },
      { title: 'Mère', value: 'DRAME Mariam' },
      { title: 'Date de naissance', value: '25/11/2010' },
      { title: 'Contact', value: '+229 96 25 49 20' },
      { title: 'Classe', value: 'Sixième' },
      { title: 'Genre', value: 'Masculin' },
      { title: 'Série', value: 'MC' },
      { title: 'Personne à contacter', value: 'SCHITOU Mohamed +229 96 25 49 20' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'VIADINOU Merveille +229 97 45 10 10' },
      { title: 'Adresse', value: 'Abomey-Calavi Acronville lot 214 Maison CHITOU' },
      { title: 'Allergie', value: 'Néant' }
    ],
    paiement: [
      { status: '2', type: 'Scolarité', montant: 100000, echeance: '20/12/2019' }
    ]
  },
  {
    id: 7,
    nom: 'Anita COSSOU',
    classe: 'Tle',
    serie: 'G2',
    section: 'Qlq',
    genre: 'F',
    age: 19,
    url: '/tab-profil/image@2x8.png',
    email: 'quelchose@num',
    dateInscription: '18/07/2019',
    details: [
      { title: 'Nom', value: 'COSSOU' },
      { title: 'Père', value: 'COSSOU Arnaud' },
      { title: 'Prénom', value: 'Anita' },
      { title: 'Mère', value: 'ACAKPO Milly' },
      { title: 'Date de naissance', value: '30/04/2000' },
      { title: 'Contact', value: '+229 66 85 29 15' },
      { title: 'Classe', value: 'Terminale' },
      { title: 'Genre', value: 'Féminin' },
      { title: 'Série', value: 'G2' },
      { title: 'Personne à contacter', value: 'ACAKPO Milly +229 66 85 29 15' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'ASSOGBA Warren +229 97 29 86 99' },
      { title: 'Adresse', value: 'Godomey lot 20 Maison VIITO' },
      { title: 'Allergie', value: 'Néant' }
    ],
    paiement: [
      { status: '1', type: 'Scolarité', montant: 150000, echeance: '20/12/2019' }
    ]
  },
  {
    id: 8,
    nom: 'George TOGBE',
    classe: '5e',
    serie: 'MC',
    section: 'Qlq',
    genre: 'M',
    age: 12,
    url: '/tab-profil/image@2x1.png',
    email: 'quelchose@num',
    dateInscription: '23/08/2019',
    details: [
      { title: 'Nom', value: 'TOGBE' },
      { title: 'Père', value: 'TOGBE Almaric' },
      { title: 'Prénom', value: 'George' },
      { title: 'Mère', value: 'SOURADJOU Maryam' },
      { title: 'Date de naissance', value: '30/06/2007' },
      { title: 'Contact', value: '+229 65 30 18 55' },
      { title: 'Classe', value: 'Cinquième' },
      { title: 'Genre', value: 'Masculin' },
      { title: 'Série', value: 'MC' },
      { title: 'Personne à contacter', value: 'TOGBE Almaric +229 65 30 18 55' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'ABOKY Odette +229 97 68 23 36' },
      { title: 'Adresse', value: 'Abomey-Calavi Aitchédji lot 12 Maison TOGBE' },
      { title: 'Allergie', value: 'Néant' }
    ],
    paiement: [
      { status: '1', type: 'Scolarité', montant: 90000, echeance: '20/12/2019' }
    ]
  },
  {
    id: 9,
    nom: 'Chaki KARIMOU',
    classe: '1ere',
    serie: 'C',
    section: 'Qlq',
    genre: 'F',
    age: 18,
    url: '/tab-profil/image@2x5.png',
    email: 'quelchose@num',
    dateInscription: '16/08/2019',
    details: [
      { title: 'Nom', value: 'KARIMOU' },
      { title: 'Père', value: 'KARIMOU Mouizou' },
      { title: 'Prénom', value: 'Chaki' },
      { title: 'Mère', value: 'Yessoufou Ayomidélé' },
      { title: 'Date de naissance', value: '25/05/2001' },
      { title: 'Contact', value: '+229 99 36 30 32' },
      { title: 'Classe', value: 'Première' },
      { title: 'Genre', value: 'Féminin' },
      { title: 'Série', value: 'C' },
      { title: 'Personne à contacter', value: 'YESSOUFOU Ayomidélé +229 99 36 30 32' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'ABOU Ichola +229 95 58 76 94' },
      { title: 'Adresse', value: 'Abomey-Calavi Aitchédji lot 15 Maison KARIMOu' },
      { title: 'Allergie', value: 'Néant' }
    ],
    paiement: [
      { status: '2', type: 'Scolarité', montant: 170000, echeance: '20/12/2019' }
    ]
  },
  {
    id: 10,
    nom: 'Colette ADO',
    classe: '5e',
    serie: 'ML',
    section: 'Qlq',
    genre: 'F',
    age: 18,
    url: '/tab-profil/image@2x5.png',
    email: 'quelchose@num',
    dateInscription: '05/08/2019',
    details: [
      { title: 'Nom', value: 'ADO' },
      { title: 'Père', value: 'ADO Vincent' },
      { title: 'Prénom', value: 'Colette' },
      { title: 'Mère', value: 'TSANGA Rosine' },
      { title: 'Date de naissance', value: '11/01/2001' },
      { title: 'Contact', value: '+229 66 12 14 41' },
      { title: 'Classe', value: 'Cinquième' },
      { title: 'Genre', value: 'Féminin' },
      { title: 'Série', value: 'ML' },
      { title: 'Personne à contacter', value: 'ADO Vincent +229 66 12 14 41' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'TSANGA Anna +229 66 53 64 19' },
      { title: 'Adresse', value: 'Abomey-Calavi Tanpke lot 35 Maison ADJAHO' },
      { title: 'Allergie', value: 'Néant' }
    ],
    paiement: [
      { status: '0', type: 'Scolarité', montant: 0, echeance: '20/12/2019' }
    ]
  },
  {
    id: 11,
    nom: 'Zoul TCHITOU',
    classe: '6e',
    serie: 'ML',
    section: 'Qlq',
    genre: 'M',
    age: 11,
    url: '/tab-profil/image@2x1.png',
    email: 'quelchose@num',
    dateInscription: '20/08/2019',
    details: [
      { title: 'Nom', value: 'TCHITOU' },
      { title: 'Père', value: 'TCHITOU Anziz' },
      { title: 'Prénom', value: 'Zoul' },
      { title: 'Mère', value: 'OGOUSSAN Nassirine' },
      { title: 'Date de naissance', value: '06/06/2008' },
      { title: 'Contact', value: '+229 97 89 86 82' },
      { title: 'Classe', value: 'Sixième' },
      { title: 'Genre', value: 'MAsculin' },
      { title: 'Série', value: 'ML' },
      { title: 'Personne à contacter', value: 'OGOUSSAN Nassirine +229 97 89 86 82' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'SOSSOU Paul +229 66 73 63 09' },
      { title: 'Adresse', value: 'Abomey-Calavi Tanpke lot 16 Maison TCHITOU' },
      { title: 'Allergie', value: 'Néant' }
    ],
    paiement: [
      { status: '1', type: 'Scolarité', montant: 50000, echeance: '20/12/2019' }
    ]
  },
  {
    id: 12,
    nom: 'Joanita BONOU',
    classe: '5e',
    serie: 'MC',
    section: 'Qlq',
    genre: 'F',
    age: 12,
    url: '/tab-profil/image@2x2.png',
    email: 'quelchose@num',
    dateInscription: '20/06/2019',
    details: [
      { title: 'Nom', value: 'BONOU' },
      { title: 'Père', value: 'BONOU Aldo' },
      { title: 'Prénom', value: 'Joanita' },
      { title: 'Mère', value: 'AKPLOGAN Funmilayo' },
      { title: 'Date de naissance', value: '06/12/2007' },
      { title: 'Contact', value: '+229 95 30 12 78' },
      { title: 'Classe', value: 'Cinquième' },
      { title: 'Genre', value: 'Féminin' },
      { title: 'Série', value: 'MC' },
      { title: 'Personne à contacter', value: 'AKPLOGAN Funmilayo +229 95 30 12 78' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'GNONHOSSOU Vivissin +229 96 30 75 60' },
      { title: 'Adresse', value: 'Godomey lot 16 Maison BONOU' },
      { title: 'Allergie', value: 'Néant' }
    ],
    paiement: [
      { status: '2', type: 'Scolarité', montant: 110000, echeance: '20/12/2019' }
    ]
  },
  {
    id: 13,
    nom: 'Rose SMITH',
    classe: '4e',
    serie: 'MC',
    section: 'Qlq',
    genre: 'F',
    age: 14,
    url: '/tab-profil/image@2x3.png',
    email: 'quelchose@num',
    dateInscription: '25/06/2019',
    details: [
      { title: 'Nom', value: 'SMITH' },
      { title: 'Père', value: 'SMITH John' },
      { title: 'Prénom', value: 'Rose' },
      { title: 'Mère', value: 'JENNER Kylie' },
      { title: 'Date de naissance', value: '06/08/2005' },
      { title: 'Contact', value: '+229 98 00 45 63' },
      { title: 'Classe', value: 'Quatrième' },
      { title: 'Genre', value: 'Féminin' },
      { title: 'Série', value: 'MC' },
      { title: 'Personne à contacter', value: 'SMITH John +229 98 00 45 63' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'DUBROW Terry +229 96 75 48 99' },
      { title: 'Adresse', value: 'Acronville lot 211 Maison SMITH' },
      { title: 'Allergie', value: 'Néant' }
    ],
    paiement: [
      { status: '0', type: 'Scolarité', montant: 0, echeance: '20/12/2019' }
    ]
  },
  {
    id: 14,
    nom: 'Litch GRANT',
    classe: '3e',
    serie: 'ML',
    section: 'Qlq',
    genre: 'M',
    age: 16,
    url: '/tab-profil/image@2x4.png',
    email: 'quelchose@num',
    dateInscription: '20/08/2019',
    details: [
      { title: 'Nom', value: 'GRANT' },
      { title: 'Père', value: 'GRANT Fitz' },
      { title: 'Prénom', value: 'Litch' },
      { title: 'Mère', value: 'JENNER Kylie' },
      { title: 'Date de naissance', value: '06/08/2005' },
      { title: 'Contact', value: '+229 98 00 45 63' },
      { title: 'Classe', value: 'Troisième' },
      { title: 'Genre', value: 'Masculin' },
      { title: 'Série', value: 'ML' },
      { title: 'Personne à contacter', value: 'JENNER Kylie +229 98 00 45 63' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'JEFFERSON Karl +229 97 46 19 35' },
      { title: 'Adresse', value: 'Acronville lot 200 Maison GRANT' },
      { title: 'Allergie', value: 'Néant' }
    ],
    paiement: [
      { status: '1', type: 'Scolarité', montant: 120000, echeance: '20/12/2019' }
    ]

  },
  {
    id: 15,
    nom: 'Olivia POPE',
    classe: '2nd',
    serie: 'B',
    section: 'Qlq',
    genre: 'F',
    age: 16,
    url: '/tab-profil/image@2x5.png',
    email: 'quelchose@num',
    dateInscription: '20/07/2019',
    details: [
      { title: 'Nom', value: 'POPE' },
      { title: 'Père', value: 'POPE Gerald' },
      { title: 'Prénom', value: 'OLivia' },
      { title: 'Mère', value: 'ANDERSON Khloé' },
      { title: 'Date de naissance', value: '19/12/2003' },
      { title: 'Contact', value: '+229 96 66 85 28' },
      { title: 'Classe', value: 'Seconde' },
      { title: 'Genre', value: 'Féminin' },
      { title: 'Série', value: 'B' },
      { title: 'Personne à contacter', value: 'POPE Gerald +229 96 66 85 28' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'Youl Carine +229 97 28 85 13' },
      { title: 'Adresse', value: 'Abomey-Calavi Tankpe lot 214 Maison POPE' },
      { title: 'Allergie', value: 'Néant' }
    ],
    paiement: [
      { status: '2', type: 'Scolarité', montant: 160000, echeance: '20/12/2019' }
    ]
  },
  {
    id: 16,
    nom: 'Aby WILLIAMS',
    classe: '1ere',
    serie: 'A1',
    section: 'Qlq',
    genre: 'F',
    age: 18,
    url: '/tab-profil/image@2x6.png',
    email: 'quelchose@num',
    dateInscription: '25/08/2019',
    details: [
      { title: 'Nom', value: 'WILLIAMS' },
      { title: 'Père', value: 'WIILIAMS Wilson' },
      { title: 'Prénom', value: 'Aby' },
      { title: 'Mère', value: 'SCOTT Penelope' },
      { title: 'Date de naissance', value: '07/11/2001' },
      { title: 'Contact', value: '+229 96 85 28 13' },
      { title: 'Classe', value: 'Première' },
      { title: 'Genre', value: 'Féminin' },
      { title: 'Série', value: 'A1' },
      { title: 'Personne à contacter', value: 'WIILIAMS Wilson +229 96 85 28 13' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'JONHSON Mary +229 97 64 20 27' },
      { title: 'Adresse', value: 'Abomey-Calavi Bidosessi lot 214 Maison WILLIAMS' },
      { title: 'Allergie', value: 'Néant' }
    ],
    paiement: [
      { status: '1', type: 'Scolarité', montant: 160000, echeance: '20/12/2019' }
    ]
  },
  {
    id: 17,
    nom: 'Charlie POTINS',
    classe: '6e',
    serie: 'MC',
    section: 'Qlq',
    genre: 'M',
    age: 12,
    url: '/tab-profil/image@2x7.png',
    email: 'quelchose@num',
    dateInscription: '20/06/2019',
    details: [
      { title: 'Nom', value: 'POTINS' },
      { title: 'Père', value: 'POTINS Charles' },
      { title: 'Prénom', value: 'Charlie' },
      { title: 'Mère', value: 'NICOLE Darnell' },
      { title: 'Date de naissance', value: '04/10/2007' },
      { title: 'Contact', value: '+229 97 13 28 29' },
      { title: 'Classe', value: 'Sixième' },
      { title: 'Genre', value: 'Masculin' },
      { title: 'Série', value: 'MC' },
      { title: 'Personne à contacter', value: 'NICOLE Darnell +229 97 13 28 29' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'JONHSON Maëllys +229 97 00 63 34' },
      { title: 'Adresse', value: 'Abomey-Calavi Bidosessi lot 19 Maison ABEY' },
      { title: 'Allergie', value: 'Néant' }
    ],
    paiement: [
      { status: '0', type: 'Scolarité', montant: 0, echeance: '20/12/2019' }
    ]
  },
  {
    id: 18,
    nom: 'Dalilath LATIDJOU',
    classe: 'Tle',
    serie: 'B',
    section: 'Qlq',
    genre: 'F',
    age: 20,
    url: '/tab-profil/image@2x8.png',
    email: 'quelchose@num',
    dateInscription: '20/08/2019',
    details: [
      { title: 'Nom', value: 'LATIDJOU' },
      { title: 'Père', value: 'LATIDJOU Mouléro' },
      { title: 'Prénom', value: 'Dalilath' },
      { title: 'Mère', value: 'SEIDOU Fatima' },
      { title: 'Date de naissance', value: '04/09/1999' },
      { title: 'Contact', value: '+229 95 42 19 36' },
      { title: 'Classe', value: 'Terminale' },
      { title: 'Genre', value: 'Féminin' },
      { title: 'Série', value: 'B' },
      { title: 'Personne à contacter', value: 'LATIDJOU Mouléro +229 95 42 19 36' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'LATOUNDJI Aminath +229 97 25 47 79' },
      { title: 'Adresse', value: 'Abomey-Calavi ITA lot 14 Maison LATIDJOU' },
      { title: 'Allergie', value: 'Néant' }
    ],
    paiement: [
      { status: '1', type: 'Scolarité', montant: 140000, echeance: '20/12/2019' }
    ]
  },
  {
    id: 19,
    nom: 'Sobour ADEGOYE',
    classe: '3e',
    serie: 'MC',
    section: 'Qlq',
    genre: 'F',
    age: 16,
    url: '/tab-profil/image@2x1.png',
    email: 'quelchose@num',
    dateInscription: '25/07/2019',
    details: [
      { title: 'Nom', value: 'ADEGOYE' },
      { title: 'Père', value: 'ADEGOYE Salif' },
      { title: 'Prénom', value: 'Sobour' },
      { title: 'Mère', value: 'AMINOU Sofiath' },
      { title: 'Date de naissance', value: '04/09/2003' },
      { title: 'Contact', value: '+229 95 00 80 08' },
      { title: 'Classe', value: 'Troisième' },
      { title: 'Genre', value: 'Féminin' },
      { title: 'Série', value: 'MC' },
      { title: 'Personne à contacter', value: 'AMINOU Sofiath +229 95 00 80 08' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'BOUSSARI Mohamed +229 97 79 64 58' },
      { title: 'Adresse', value: 'Abomey-Calavi ITA lot 19 Maison ADEGOYE' },
      { title: 'Allergie', value: 'Néant' }
    ],
    paiement: [
      { status: '0', type: 'Scolarité', montant: 0, echeance: '20/12/2019' }
    ]
  },
  {
    id: 20,
    nom: 'Loraine STRUKER',
    classe: '1ere',
    serie: 'A2',
    section: 'Qlq',
    genre: 'F',
    age: 17,
    url: '/tab-profil/image@2x5.png',
    email: 'quelchose@num',
    dateInscription: '20/08/2019',
    details: [
      { title: 'Nom', value: 'STRUKER' },
      { title: 'Père', value: 'STRUKER Ramus' },
      { title: 'Prénom', value: 'Loraine' },
      { title: 'Mère', value: 'VALERIE Cindy' },
      { title: 'Date de naissance', value: '04/04/2002' },
      { title: 'Contact', value: '+229 96 68 75 73' },
      { title: 'Classe', value: 'Première' },
      { title: 'Genre', value: 'Féminin' },
      { title: 'Série', value: 'A2' },
      { title: 'Personne à contacter', value: 'STRUKER Ramus +229 96 68 75 73' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'HOUNKANRIN Fahouk +229 97 79 64 58' },
      { title: 'Adresse', value: 'Abomey-Calavi Godomey lot 19 Maison STRUKER' },
      { title: 'Allergie', value: 'Néant' }
    ],
    paiement: [
      { status: '2', type: 'Scolarité', montant: 170000, echeance: '20/12/2019' }
    ]
  },
  {
    id: 21,
    nom: 'Lorla QUEEN',
    classe: '5e',
    serie: 'MC',
    section: 'Qlq',
    genre: 'F',
    age: 13,
    url: '/tab-profil/image@2x5.png',
    email: 'quelchose@num',
    dateInscription: '20/10/2019',
    details: [
      { title: 'Nom', value: 'QUEEN' },
      { title: 'Père', value: 'QUEEN Marius' },
      { title: 'Prénom', value: 'Lorla' },
      { title: 'Mère', value: 'HOUNNOUVI Trisha' },
      { title: 'Date de naissance', value: '04/02/2006' },
      { title: 'Contact', value: '+229 97 50 43 91' },
      { title: 'Classe', value: 'Cinquième' },
      { title: 'Genre', value: 'Féminin' },
      { title: 'Série', value: 'MC' },
      { title: 'Personne à contacter', value: 'QUEEN Marius +229 97 50 43 91' },
      { title: 'Section', value: 'Qlq' },
      { title: 'Médecin à contacter', value: 'FALADE Jean +229 97 26 47 20' },
      { title: 'Adresse', value: 'Cotonou Vèdoko lot 11 Maison DAA-KPODE' },
      { title: 'Allergie', value: 'Néant' }
    ],
    paiement: [
      { status: '2', type: 'Scolarité', montant: 110000, echeance: '20/12/2019' }
    ]
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
