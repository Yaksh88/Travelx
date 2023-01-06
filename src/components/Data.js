
const dmv = {
  // Social Security is the numbered value
  123456789: {
    fullName: 'Arden Archer',
    driversLicense: 'H28309231',
    dateOfBirth: '01/11/1999',
    passportNumber: '432124327',
    passportExpiration: '09/02/2069',
    image: '/images/avatar-M.png',
    image2: '/images/avatar-M.png'
  },

  987654321: {
    fullName: 'Elon Musk',
    driversLicense: 'B18339138',
    dateOfBirth: '07/19/1980',
    passportNumber: '283716346',
    passportExpiration: '03/03/2033',
    image: '/images/musk1.png',
    image2: '/images/musk2.png'
  },
  
  102836492: {
    fullName: 'The Rock',
    driversLicense: 'B6750698',
    dateOfBirth: '07/04/1995',
    passportNumber: '293847568',
    passportExpiration: '06/19/2050',
    image: '/images/rock1.png',
    image2: '/images/rock2.png'
  },

  483291472: {
    fullName: 'Alexis Zones',
    driversLicense: 'C7977036',
    dateOfBirth: '01/10/1996',
    passportNumber: '967805239',
    passportExpiration: '01/20/2024',
    image: '/images/avatar-F.png',
    image2: '/images/avatar-F.png'
  },

  404932814: {
    fullName: 'Michael Stark',
    driversLicense: 'R2055724',
    dateOfBirth: '09/10/1968',
    passportNumber: '391447997',
    passportExpiration: '11/16/2033',
    image: '/images/avatar-M.png',
    image2: '/images/avatar-M.png'
  },
}

export function getIn(inputStr) {
  if (inputStr in dmv){
      return dmv[inputStr]
  } else {
      return false
  }
  }
export function getName(inputStr) {
  if (inputStr in dmv){
    return dmv[inputStr][0]
} else {
    return false
}
}

export function getDl(inputStr) {
  if (inputStr in dmv){
    return dmv[inputStr][1]
} else {
    return false
}
}

export function getDOB(inputStr) {
  if (inputStr in dmv){
    return dmv[inputStr][2]
} else {
    return false
}
}