const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  debugger; //программа видит значание а и в, получает сумму
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger; //программа посчитала бонус
  return bonus;
};
console.log(calculateBonus(36, 25));

module.exports = calculateBonus;
