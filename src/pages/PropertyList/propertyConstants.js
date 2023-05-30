const initialFilter = {
  agency: "",
  minRooms: 0,
  maxRooms: 7,
  minBaths: 0,
  maxBaths: 7,
  priceMin: 10000,
  priceMax: 90000,
  city: "5002,6020",
  propertyType: "",
  search: "",
};
const cities = [
  "Umm Al Quwain5544",
  "Fujairah6542",
  "Ajman5385",
  "Ras Al Khaimah5509",
  "Al Ain6057",
  "Sharjah5351",
  "Abu Dhabi6020",
  "Dubai5002",
];
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
  10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000,
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
};
