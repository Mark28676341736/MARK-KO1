const user = {
  hobby: "eating",
  premium: yes
};


user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of keys) {
  console.log('key',user[key]);
}


function countProps(obj) {
  return Object.keys(obj).length;
}

console.log(countProps({ hobby: "eating",}))
console.log(countProps({ }));

const findBestEmployee=['Mark','Frey','Sam']

const yearsOfWork = [23, 38, 41]
const max = Math.max(yearsOfWork);
console.log(findBestEmployee({
  Mark:23,
  Sam: 38,
  Frey:41 ,
 
}))


function countSalary{
  const salaries = values;
  let total = 0;

  for (const salary of salaries) {
    total =+ salary;
  }

  return total;
}
console.log(countTotalSalary({
  Mark: 142,
  Sam: 293,
  Frye: 31,
})); 

function getAllPropValues(arr, prop)