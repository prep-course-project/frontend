const initialFilter = {
  roomsMin: 0,
  roomsMax: 7,
  bathMin: 0,
  bathMax: 7,
  priceMin: 20000,
  priceMax: 999999,
  city: "5002,6020",
  propertyType: "",
  areaMin:0,
  areaMax:10000,
  purpose:'for-rent'
};
const cities = [
  "Umm AlQuwain5544",
  "Fujairah6542",
  "Ajman5385",
  "Ras Al Khaimah5509",
  "Al Ain6057",
  "Sharjah5351",
  "Abu Dhabi6020",
  "Dubai5002",
];
const areas=[800,1000,1500,2000,2500,3000,3500,4000,4500,5000];
const purpose=['for-rent','for-sale'];
const propertyTypeList = [
  { type: "Apartment", ApiQuery: 4 },
  { type: "Townhouses", ApiQuery: 16 },
  { type: "Villas", ApiQuery: 3 },
  { type: "Penthouses", ApiQuery: 18 },
  { type: "Hotel Apartments", ApiQuery: 21 },
  { type: "Shop", ApiQuery: 6 },
  { type: "Warehouse", ApiQuery: 7 },
];
const roomAndBathNumberList = [1, 2, 3, 4, 5, 6, 7];
const pricesList = [
  20000,  30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000,150000,200000,300000,400000
];
const agenciesList = [
  "Espace Real Estate",
  "AX Capital Real Estate",
  "McCone Properties",
  "Pleasant Real Estate",
  "Buyutna F S M Property Management",
  "LuxuryProperty. com",
  "Sky View Real Estate",
  "White & Co Real Estate",
  "Haus & Haus Real Estate",
  "Sky View Real Estate",
  "AEON & Trisl Real Estate",
  "Metropolitan Premium Properties",
];
module.exports = {
  initialFilter,
  cities,
  propertyTypeList,
  roomAndBathNumberList,
  pricesList,
  agenciesList,
  areas,
  purpose,
};
