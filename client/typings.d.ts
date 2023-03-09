export interface IQuestion {
  category: string;
  correct_answers: string;
  difficulty: string;
  incorrect_answers: [string];
  question: string;
  type: string;
}

// category: "Animals";
// correct_answer: "Cheetah";
// difficulty: "easy";
// incorrect_answers: (3)[
//   ("Lion", "Thomson&rsquo;s Gazelle", "Pronghorn Antelope")
// ];
// question: "What is the fastest  land animal?";
// type: "multiple";
