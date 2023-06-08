const assignNoteForDistrict = (stationName) => {
  switch (stationName) {
    case 'Upminster':
      return 'C4';
    case 'UpminsterBridge':
      return 'D4';
    case 'Hornchurch':
      return 'E4';
    case 'ElmPark':
      return 'G4';
    case 'DagenhamEast':
      return 'A4';
    case 'DagenhamHeathway':
      return 'C5';
    case 'Becontree':
      return 'D5';
    case 'Upney':
      return 'E5';
    case 'Barking':
      return 'G5';
    case 'EastHam':
      return 'A5';
    case 'UptonPark':
      return 'C6';
    case 'Plaistow':
      return 'C4';
    case 'WestHam':
      return 'D4';
    case 'Bromley-by-Bow':
      return 'E4';
    case 'BowRoad':
      return 'G4';
    case 'MileEnd':
      return 'A4';
    case 'StepneyGreen':
      return 'G4';
    case 'Whitechapel':
      return 'C5';
    case 'AldgateEast':
      return 'D5';
    case 'TowerHill':
      return 'E5';
    case 'Monument':
      return 'G5';
    case 'CannonStreet':
      return 'A5';
    case 'MansionHouse':
      return 'C6';
    case 'Blackfriars':
      return 'C4';
    case 'Temple':
      return 'D4';
    case 'Embankment':
      return 'E4';
    case 'Westminster':
      return 'G4';
    case 'StJamessPark':
      return 'A4';
    case 'Victoria':
      return 'C5';
    case 'SloaneSquare':
      return 'D5';
    case 'SouthKensington':
      return 'E5';
    case 'GloucesterRoad':
      return 'G5';
    case 'HighStreetKensington':
      return 'A5';
    case 'EarlsCourt':
      return 'C6';
    case 'WestKensington':
      return 'C4';
    case 'BaronsCourt':
      return 'D4';
    case 'Hammersmith(Dist&PiccLine)':
      return 'E4';
    case 'RavenscourtPark':
      return 'G4';
    case 'StamfordBrook':
      return 'A4';
    case 'TurnhamGreen':
      return 'C5';
    case 'Gunnersbury':
      return 'D5';
    case 'KewGardens':
      return 'E5';
    case 'Richmond':
      return 'G5';
    case 'WimbledonPark':
      return 'A5';
    case 'Wimbledon':
      return 'C6';
    case 'WestBrompton':
      return 'C4';
    default:
      return 'C4';
  }
};

module.exports = assignNoteForDistrict;