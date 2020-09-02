const {db} = require('./server/db')
const {AMS} = require('./server/db/AMS-model')

const seed = async () => {
  try {
    await db.sync({force: true})
    const AtlanticAveBarclaysCtr = await AMS.create({
      name: "Atlantic Avenue/Barclays Center",
      trains: ["B", "Q", "D", "N", "R", 2, 3, 4, 5],
      location: [40.683805, -73.978487]
    });
    const DekalbAve = await AMS.create({
      name: "Dekalb Avenue",
      trains: ["B", "Q", "R"],
      location: [40.689804, -73.981164]
    })
    const ThirtyFourthSt = await AMS.create({
      name: "34th Street",
      trains: ["B", "D", "F", "M", "N", "Q", "R", "W"],
      location: [40.749719, -73.987823]
    })
    const RockefellerCenter = await AMS.create({
      name: "47-50th Street/Rockefeller Center",
      trains: ["B", "D", "F", "M"],
      location: [40.758663, -73.981329]
    })
    const TwentyFirstSt = await AMS.create({
      name: "21st Street",
      trains: ["F"],
      location: [40.754203, -73.942836]
    })
    const LexingtonAve = await AMS.create({
      name: "Lexington Avenue",
      trains: ["F"],
      location: [40.764884, -73.966514]
    })
    const OneSeventyFifthSt = await AMS.create({
      name: "175th Street",
      trains: ["A"],
      location: [40.847946, -73.939375]
    })
    const PennStation = await AMS.create({
      name: "Penn Station",
      trains: ["A", "C", "E", 1, 2, 3],
      location: [40.751996, 73.993327]
    })
    const FiftySt = await AMS.create({
      name: "50th Street",
      trains: ["C", "E"],
      location: [40.761968, -73.986662]
    })
    const ColumbusCir = await AMS.create({
      name: "Columbus Circle",
      trains: ["A", "B", "C", "D", 1],
      location: [40.767667, -73.982408]
    })
    const Inwood = await AMS.create({
      name: "Inwood-207th Street",
      trains: ["A"],
      location: [40.867892, -73.921234]
    })
    const West4th = await AMS.create({
      name: "West 4th Street",
      trains: ["A", "B", "C", "D", "E", "F", "M"],
      location: [40.731086, -74.001209]
    })
    const JamaicaCenter = await AMS.create({
      name: "Parsons Blvd-Archer Ave/Jamaica Center",
      trains: ["E", "J", "Z"],
      location: [40.702353, -73.799784]
    })
    const FlushingAve = await AMS.create({
      name: "Flushing Avenue",
      trains: ["J", "M"],
      location: [40.700629, -73.941995]
    })
    const MarcyAve = await AMS.create({
      name: "Marcy Avenue",
      trains: ["J", "M", "Z"],
      location: [40.708565, -73.957893]
    })
    const LincolnCenter = await AMS.create({
      name: "66th Street-Lincoln Center",
      trains: [1],
      location: [40.773738, -73.982448]
    })
    const SouthFerry = await AMS.create({
      name: "South Ferry",
      trains: ["R", 1],
      location: [40.702033, -74.013149]
    })
    const BoroughHall = await AMS.create({
      name: "Borough Hall",
      trains: ["R", 2, 3, 4, 5],
      location: [40.693594, -73.990304]
    })
    const YankeeStadium = await AMS.create({
      name: "Yankee Stadium-161st Street",
      trains: ["B", "D", 4],
      location: [40.82784, -73.925715]
    })
    const UticaAve = await AMS.create({
      name: "Utica Avenue",
      trains: [3, 4],
      location: [40.668935, -73.931831]
    })
    const FlushingMainSt = await AMS.create({
      name: "Flushing-Main Street",
      trains: [7],
      location: [40.759908, -73.829019]
    })
    const EuclidAve = await AMS.create({
      name: "Euclid Avenue",
      trains: ["A", "C"],
      location: [40.675554, -73.871875]
    })
    const OneTwentyFifth = await AMS.create({
      name: "125th Street",
      trains: [4, 5, 6],
      location: [40.804407, -73.937234]
    })
    const BowlingGreen = await AMS.create({
      name: "Bowling Green",
      trains: [4, 5],
      location: [40.704659, -74.01392]
    })
    const CanalSt = await AMS.create({
      name: "Canal Street",
      trains: ["J", "N", "Q", "R", "Z", 6],
      location: [40.718304, -74.000138]
    })
    const ChurchAve = await AMS.create({
      name: "Church Avenue",
      trains: [2, 5],
      location: [40.650748, -73.949384]
    })
    const FlatbushAve = await AMS.create({
      name: "Flatbush Avenue/Brooklyn College",
      trains: [2, 5],
      location: [40.632463, -73.947518]
    })
    const PelhamBayPark = await AMS.create({
      name: "Pelham Bay Park",
      trains: [6],
      location: [40.852803, -73.827195]
    })
    const Jamaica179thSt = await AMS.create({
      name: "Jamaica-179th Street",
      trains: ["F"],
      location: [40.712581, -73.783377]
    })
    const KewGardens = await AMS.create({
      name: "Kew Gardens-Union Turnpike",
      trains: ["E","F"],
      location: [40.714001, -73.831166]
    })
    const Lexington53rdSt = await AMS.create({
      name: "Lexington Ave/53rd Street",
      trains: ["E","M", 6],
      location: [40.757804, -73.971141]
    })
    const HowardBeach = await AMS.create({
      name: "Howard Beach",
      trains: ["A"],
      location: [40.660465, -73.830518]
    })
    const OneFortyNineth = await AMS.create({
      name: "149th Street-3rd Avenue",
      trains: [2, 5],
      location: [40.816247, -73.917798]
    })
    const SimpsonSt = await AMS.create({
      name: "Simpson Street",
      trains: [2, 5],
      location: [40.824356, -73.892897]
    })
    const HudsonYards = await AMS.create({
      name: "34th Street/Hudson Yards",
      trains: [7],
      location: [40.754904, -74.001323]
    })
    const GrandCentral = await AMS.create({
      name: "Grand Central/42nd Street",
      trains: [4, 5, 6, 7],
      location: [40.752717, -73.978487]
    })
    const TimesSq = await AMS.create({
      name: "Times Square/42nd Street",
      trains: ["A", "C", "E", "N", "Q", "R", "S", 1, 2, 3, 7],
      location: [40.754172, -73.98668]
    })
    const UnionSq = await AMS.create({
      name: "Union Square",
      trains: ["L", "N", "Q", "R", "W", 4, 5, 6],
      location: [40.735278, -73.991058]
    })
  }
  catch (error) {
    console.log(error)
  }
}

module.exports = seed

if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!')
      db.close()
    })
    .catch(err => {
      console.error('Something went wrong! Could not seed the database')
      console.error(err)
      db.close()
    })
}
