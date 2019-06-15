var list = ["ab", "cd", "acb", "dc", "ba", "abc", "cba", "bca"];

var oMap = {},
  temp,
  i;

for (i = 0; i < list.length; i++) {
  //ab
  temp = sortstr(list[i]);
  oMap[temp] = oMap[temp] || [];
  if (temp in oMap) {
    oMap[temp].push(list[i]);
  } else {
    oMap[temp] = list[i];
  }
}

//console.log(oMap);

function sortstr(text) {
  return text
    .split("")
    .sort()
    .join("");
}

var arrOfarray = [["ac", "bc"], ["cd", "dc"], ["oc", "pc"]];

var flattened = arrOfarray.reduce((ac, i) => {
  return ac.concat(i);
});

console.log(flattened);
