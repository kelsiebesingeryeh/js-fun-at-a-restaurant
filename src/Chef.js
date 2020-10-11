class Chef {
  constructor(chefName, restaurant) {
    this.name = chefName;
    this.restaurant = restaurant;
  }

  greetCustomer(customerName, isMorning) {
    if (isMorning) {
      return `Good morning, ${customerName}!`
  }
    return `Hello, ${customerName}!`
  }

  checkForFood(foodItem) {
    if (this.restaurant.menus[foodItem.type].includes(foodItem)) {
      return `Yes, we're serving ${foodItem.name} today!`
    }
      return `Sorry, we aren't serving ${foodItem.name} today.`
  }

}

module.exports = Chef;
