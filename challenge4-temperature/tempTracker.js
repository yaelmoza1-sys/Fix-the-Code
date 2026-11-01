const temps = [];

let sum = 0
export function addTemperature(temp) {
    temps.push(temp);
    sum += temp;
    const avg = sum / temps.length;
    console.log(`Average temperature: ${avg}`);
}
