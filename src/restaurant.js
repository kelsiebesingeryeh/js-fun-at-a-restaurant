function createRestaurant(name, menus) {

  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  }
  return restaurant;
}

function addMenuItem(restaurantName, menuItem) {

    var menuArray = restaurantName.menus[menuItem.type]
    if (menuArray.includes(menuItem)) {
    } else {
      menuArray.push(menuItem);
    }
}


function removeMenuItem(restaurantName, menuItem, menuType) {

  var menuTypeArray = restaurantName.menus[menuType]
  for (var i = 0; i < menuTypeArray.length; i++) {
      if (menuTypeArray[i].name === menuItem) {
        menuTypeArray.splice(i,1);
        return `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`
      }
  }
  return `Sorry, we don\'t sell ${menuItem}, try adding a new recipe!`
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
