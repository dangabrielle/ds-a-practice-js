let numUniqueEmails = function (emails) {
  let set = new Set();

  // jo.hn+doe@gmail.com
  for (let email of emails) {
    let newArr = email.split("@"); // ["jo.hn+doe", "gmail.com"]
    newArr[0] = newArr[0].replace(/\./g, ""); // ["john+doe", "gmail.com"]
    newArr[0] = newArr[0].split("+")[0]; //["john", "gmail.com"]

    set.add(newArr.join("@"));
  }

  return set.size;
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
); // output: 2
