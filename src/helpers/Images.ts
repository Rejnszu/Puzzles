const placesArray = {
  title: "Places",
  images: [
    "places1",
    "places2",
    "places3",
    "places4",
    "places5",
    "places6",
    "places7",
    "places8",
    "places9",
    "places10",
  ].map((place) => require(`../assets/places/${place}.jpg`)),
};
const peopleArray = {
  title: "People",
  images: [
    "people1",
    "people2",
    "people3",
    "people4",
    "people5",
    "people6",
    "people7",
    "people8",
    "people9",
    "people10",
  ].map((people) => require(`../assets/people/${people}.jpg`)),
};

const randomArray = {
  title: "Random",
  images: [
    "random1",
    "random2",
    "random3",
    "random4",
    "random5",
    "random6",
    "random7",
    "random8",
    "random9",
    "random10",
  ].map((random) => require(`../assets/random/${random}.jpg`)),
};

export const imagesArray = [placesArray, peopleArray, randomArray];
