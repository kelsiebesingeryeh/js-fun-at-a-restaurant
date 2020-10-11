
function takeOrder(orderNum, deliveryOrders) {
    if (deliveryOrders.length < 3) {
      deliveryOrders.push(orderNum);
    }
  return deliveryOrders;
}

function refundOrder(orderNum, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (orderNum === deliveryOrders[i].orderNumber) {
      deliveryOrders.splice(i,1)
    }
  }
    return deliveryOrders
}

function listItems(deliveryOrders) {
  var paragraph = ''
  for (var i = 0; i < deliveryOrders.length; i++) {
    var sentence = `${deliveryOrders[i].item}, `
    paragraph += sentence;
  }
  return paragraph.replace(/,\s*$/, "")
}

function searchOrder(deliveryOrders, item) {
  for (var i = 0; i < deliveryOrders.length; i++) {
      if (item === deliveryOrders[i].item) {
        return true;
      }
  }
      return false
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
