import georgianFlag from "../../../assets/images/georgia.png"
import usaFlag from "../../../assets/images/usa.png"
import franceFlag from "../../../assets/images/france.png"
import germanyFlag from "../../../assets/images/germany.png"

interface Country {
    name: string;
    image: string;
    population: number;
    capital: string;
    id:number;
  }
  

export const cardList: Country[] = [
      { name: 'Georgia', image: georgianFlag, population: 3290128, capital: 'Tbilisi', id:1},
      { name: 'USA', image: usaFlag, population: 331002651, capital: 'Washington, D.C.', id:2 },
      { name: 'France', image: franceFlag, population: 67081000, capital: 'Paris',  id:3},
      { name: 'Germany', image: germanyFlag, population: 83783942, capital: 'Berlin', id:4  },
    ]