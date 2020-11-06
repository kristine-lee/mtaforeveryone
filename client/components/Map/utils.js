
//haversine formula

export const GET_DISTANCE = (long1, lat1, long2, lat2) => {
const R = 3959; //miles
let dLat = (lat2 - lat1) * Math.PI / 180;  // deg2rad below
let dLong = (long2 - long1) * Math.PI / 180;
let a =
   0.5 - Math.cos(dLat)/2 +
   Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
   (1 - Math.cos(dLong))/2;
return R * 2 * Math.asin(Math.sqrt(a));
}

export const keepMapWithinBounds = (latitude, longitude, SW, NE) => {
   const [ [ swLong, swLat ] ] = SW
   const [ [ neLong, neLat ] ] = NE
   return longitude < swLong || longitude > neLong || latitude < swLat || latitude > neLat;
}

