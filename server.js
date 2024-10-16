
const tegelane = {
    isiklikudAndmed: {
        eesnimi: "Harry",
        perekonnanimi: "Potter",
        vanus: 17,
        linn: "London"
    },
    eriala: "Nõiduskunst"
  };
const kool = {
    nimi: "Hogwarts",
    asukoht: {
      linn: "Hogsmeade",
      maakond: "Šoti Kõrge-Šotimaa",
      riik: "Suurbritannia"
    },
    tudeng: [
      {
        eesnimi: "Harry",
        perenimi: "Potter",
        majad: ["Gryffindor", "Kolmas aasta"]
      },
      {
        eesnimi: "Hermione",
        perenimi: "Granger",
        majad: ["Gryffindor", "Kolmas aasta"]
      },
      {
        eesnimi: "Ronald",
        perenimi: "Weasley",
        majad: ["Gryffindor", "Kolmas aasta"]
      }
    ]
  };

  const {tudeng: students} = kool;
  const [harry, hermione] = students;

  const {eesnimi: harryFirstName} = harry;
  const {eesnimi: hermioneFirstName} = hermione; 

  console.log(`${harryFirstName} and ${hermioneFirstName} are friends`);




