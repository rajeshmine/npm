//a- loanAmount,m-numberOfMonths,r=rateOfInterest,mir-monthlyInterestRatio,h-high,l-low,t-total,i-interest,bb-beginbalance,
emiCalc = (a, m, r) => {
  let mir, h, l, sp, emi, t, bb, initial = 0, begin = 0, end = 0, i = 1, res = [];
  a = (+a); m = (+m); r = (+r);
  mir = r / 100 / 12;
  h = Math.pow(1 + mir, m);
  l = h - 1;
  sp = h / l;
  emi = a * mir * sp;
  t = m * emi;
  bb = (+a);
  if (m > 0) {
    for (i; i <= m; i++) {
      initial = bb * (r / 100 / 12);
      begin = emi.toFixed(2) - initial.toFixed(2);
      end = bb - begin.toFixed(2);
      res.push({
        "MonthNo": i,
        "BeginBalance": bb.toFixed(2),
        "EMI": emi.toFixed(2),
        "Principal": begin.toFixed(2),
        "Interest": initial.toFixed(2),
        "EndBalance": end.toFixed(2)
      })
      bb = bb - begin.toFixed(2);
      if (i === m)
        return res;
    }
  } else {
    return {
      "MonthNo": 0,
      "BeginBalance": 0,
      "EMI": 0,
      "Principal": 0,
      "Interest": 0,
      "EndBalance": 0
    }
  }
}
module.exports = emiCalc;
