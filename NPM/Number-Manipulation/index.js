
sum_arr = (arr) => {
  let r = 0;
  for (let i of arr) {
    r = r + (+i);
  }
  return r;
}
sum = (a, b) => {
  return (+a) + (+b)
}
str_join = (str1, str2) => {
  return String(str1) + String(str2)
}
minus = (a, b) => {
  return (+a) - (+b)
}
multiply = (a, b) => {
  return (+a) * (+b);
}
divide = (a, b) => {
  return (+a) / (+b);
}
modulo = (a, b) => {
  return (+a) % (+b);
}
percentage = (n, p) => {
  return (((+p) / 100) * (+n))
}
module.exports = { sum_arr, sum, str_join, minus, multiply, divide, modulo, percentage };