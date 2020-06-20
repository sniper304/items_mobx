import { observable, action, decorate } from "mobx";
import BaseStore from "../utils/storeHelper";

class OrderItemsStore extends BaseStore {
  mainUrlPath = "order/";

  getOrderItems(id) {
    const self = this;
    self.mainUrlPath = `order/${id}`;
    self.getRequest();
  }
}

decorate(OrderItemsStore, {
  getOrderItems: action.bound,
});

export default new OrderItemsStore();
