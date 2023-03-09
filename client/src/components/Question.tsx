import React, { useState } from "react";

const questions = [
  {
    id: 1,
    question: "what is 2 + 2",
    options: ["2", "4", "6", "8"],
  },
  {
    id: 2,
    question: "what is 4 / 2",
    options: ["2", "4", "16", "28"],
  },
  {
    id: 3,
    question: "what is 3 x 3",
    options: ["9", "14", "13", "48"],
  },
];

const Question = () => {
  const [clicked, setClicked] = useState(undefined);

  const handleChange = () => {
    console.log("changed");
  };
  return (
    <div>
      {questions.map((item, idx) => (
        <div key={idx}>
          <h4>{item.question}</h4>

          <ul>
            {item.options.map((opt, id) => (
              <li key={id}>
                <input
                  type="radio"
                  value={clicked}
                  name="options"
                  id="q1"
                  onChange={handleChange}
                />

                <label htmlFor="q1">option</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Question;
