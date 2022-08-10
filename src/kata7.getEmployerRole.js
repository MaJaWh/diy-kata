const getEmployerRole = (employeeName, employees) => {
  const employeesRole = employees.find((name) => name.name === employeeName);
  return employeesRole.role;
};

//   let employeesRole = employees.map({});

//   if ((employees.name = employeeName)) {
//     return employees.role;
//   }
// };

module.exports = getEmployerRole;
