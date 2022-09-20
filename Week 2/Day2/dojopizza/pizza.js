function pizzaOven(crustType,sauceType,cheeses,toppings){
    let pizza ={}
    pizza.crust=crustType;
    pizza.sauce=sauceType;
    pizza.cheese=cheeses;
    pizza.toppings=toppings;
    
    return pizza;
}
let result = pizzaOven('deep dish','traditional',['mozzarella'],['pepperoni','sausage'])
console.log(result)
let result2 = pizzaOven('hand tossed','marinara',['mozzarella','feta'],['mushrooms','olives','onions'])
console.log(result2)
let result3 = pizzaOven('thin','white',['mozzarella','feta'],['mushrooms','chicken','onions'])
console.log(result3)
let result4 = pizzaOven('stuffed','marinara',['mozzarella','feta'],['mushrooms','pepperoni','bacon'])
console.log(result4)