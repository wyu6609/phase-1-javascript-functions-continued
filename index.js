// code your solution here
function saturdayFun(argument = "roller-skate") {
  return `This Saturday, I want to ${argument}!`;
}
function mondayWork(argument = "go to the office") {
  return `This Monday, I will ${argument}.`;
}
function wrapAdjective(string = "*") {
  return function (argument = "special") {
    return `You are ${string}${argument}${string}!`;
  };
}
