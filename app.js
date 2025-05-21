const users = [
  { name: 'ana', age: 25, active: true },
  { name: 'luis', age: 30, active: false },
  { name: 'marco', age: 22, active: true },
  { name: 'jose', age: 40, active: false },
]

const result = users.map(user => {
  return {
    name: user.name.toUpperCase(),
    age: user.age + 5,
    active: user.active ? 'activo' : 'inactivo'
  }
})

console.log("Usuarios procesados: ");
console.log(result);


result.map(user => {
  console.log(`${user.name} tiene ${user.age} años y está ${user.status}`);

})