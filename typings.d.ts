import { string } from "zod";

export interface IQuestion {
  category: string;
  correct_answers: string;
  difficulty: string;
  incorrect_answers: [string];
  question: string;
  type: string;
}

export interface IDecoded {
  name: string;
  picture: string;
  sub: string;
}

export interface Iuser {
  name: string;
  picture: string;
  id: string;
}
// category: "Animals";
// correct_answer: "Cheetah";
// difficulty: "easy";
// incorrect_answers: (3)[
//   ("Lion", "Thomson&rsquo;s Gazelle", "Pronghorn Antelope")
// ];
// question: "What is the fastest  land animal?";
// type: "multiple";
