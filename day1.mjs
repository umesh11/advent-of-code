import fs, { readFileSync } from "fs";


const readtxtFile = readFileSync("./day1.txt", { encoding: "utf-8"})
.replace(/\r/g, "").trim().split("\n\n");

console.log("readtxtFile", readtxtFile);


function biggestCalory(){
    const calories = readtxtFile.map((item) => {
        const calories = item.split('\n').map(Number);
        return calories.reduce((current, value) => current + value, 0);
    })
    console.log("total calories", Math.max(...calories));
}

biggestCalory();

function topThreeCalories(){
    const calories = readtxtFile.map((item) => {
        const calories = item.split('\n').map(Number);
        return calories.reduce((current, value) => current + value, 0);
    });

  const sortedCalories = calories.sort((a, b) => b - a);
  return sortedCalories.slice(0, 3).reduce((a, v) => a + v, 0);
}

topThreeCalories();
console.log("Top 3 calories", topThreeCalories());
