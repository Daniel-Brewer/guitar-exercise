function createGuitarDatabase(brand, model, type, pickups, year) {
    let guitarData = {
        brand: brand,
        model: model,
        type: type,
        pickups: pickups,
        year: year
    }
    return guitarData;
}

const tele = createGuitarDatabase("Fender", "Telecaster", "Electric", 2018, "Combo")
const dangelico = createGuitarDatabase("D'Angelico", "EXL-1", "Acoustic/Electric", 2016, "Floating")
const strat = createGuitarDatabase("Fender", "Stratocaster", "Electric", 2009, "Single Coil")
const bass = createGuitarDatabase("Ibanez", "SR505", "Electric", 2011, "Active")
const vc = createGuitarDatabase("Veilette-Citron", "VC", "Electric", 1983, "Coil-Split")
const gt = createGuitarDatabase("Gold Tone", "", "Acoustic/Electric", 2017, "Combo")

let guitars = [tele, dangelico,strat, bass, vc, gt]

function populateDB() {
    // assigning data in sting form
    const stringifiedDatabase = JSON.stringify(guitars)
    localStorage.setItem("guitars", stringifiedDatabase)
    }

    const databaseString = localStorage.getItem("guitars")

    // Use JSON.parse() to convert the string back into an object
    const data = JSON.parse(databaseString);
console.log(databaseString);
console.log(data);