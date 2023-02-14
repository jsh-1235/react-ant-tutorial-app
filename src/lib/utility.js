export function print(...args) {
  if (args.length === 1) {
    console.log(`%c${args[0]}`, "color:black");
  } else if (args.length === 2) {
    console.log(`%c${args[0]}`, `color:${args[1]}`);
  }
}

// export function print(message, color) {
//   console.log(`%c${message}`, `color:${color}`);
// }
