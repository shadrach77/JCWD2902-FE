import React from "react";

type Props = {};

export const fruits = ["apple", "banana", "orange"];
export default function FruitPage({}: Props) {
  return (
    <div>
      <h1>Fruits</h1>
      <div>
        {fruits.map((fruit) => (
          <div key={fruit}>{fruit}</div>
        ))}
      </div>
    </div>
  );
}
