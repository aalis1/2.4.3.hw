const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  debugger;
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger;
  return bonus;
};
console.log(calculateBonus(36, 25));

module.exports = calculateBonus;