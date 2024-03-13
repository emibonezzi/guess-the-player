import { Nationality } from "./Nationality";
import { Position } from "./Position";

export interface Player {
  id: string;
  name: string;
  image: string;
  shirtNumber: string;
  dateOfBirth: number;
  age: number;
  heroImage: "https://tmssl.akamaized.net/images/foto/normal/thiago-silva-chelsea-1606401233-52095.jpg?lm=1606401255";
  isGoalkeeper: boolean;
  marketValue: {
    value: number;
  };
  nationalities: Nationality[];
  positions: {
    first: Position;
    second: Position;
    third: Position;
  };
}
