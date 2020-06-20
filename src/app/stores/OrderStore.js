import { observable, action, decorate } from "mobx";
import BaseStore from "../utils/storeHelper";

// class OrderStore {
//   @observable orders = [];
//   @observable state = "pending"; //pending, loading, loaded, error

//   // constructor() {
//   //   // this.getOrders = this.getOrders;
//   //   // this.setState = this.setState;
//   // }

//   @action
//   getOrders() {
//     // set(state, "loading");
//     // this.state = "loading";
//     // setState("loading");
//     // set(state, "response.data");

//     getRequest("order")
//       .then((response) => {
//         console.log(orders);
//         orders = response.data;
//         // set(orders, response.data);
//       })
//       .catch((error) => console.error(error));
//   }

//   @action setState(status) {
//     this.state = status;
//   }
// }

// const OrderStore = observable(
//   {
//     state: "pending",
//     orders: [],
//     getOrders: function () {
//       getRequest("order")
//         .then((response) => {
//           console.log("æa", this);
//           // this.orders = response.data;
//         })
//         .catch((error) => console.error(error));
//     },
//   }
//   // ,
//   // {
//   //   state: observable,
//   //   orders: observable,
//   //   getOrders: action,
//   // }
// );

// class OrderStore {
//   state = "pending";
//   orders = [];
//   filterParams = {};

//   getOrders() {
//     const self = this;
//     getRequest("order", self.filterParams)
//       .then((response) => {
//         // console.log(self.orders);
//         self.orders = response.data;
//         // console.log(self.orders);
//       })
//       .catch((error) => console.error(error));
//   }

//   setFilterValue(filter = "") {
//     this.filterParams = { filter };
//     this.getOrders();
//   }
// }

class OrderStore extends BaseStore {
  mainUrlPath = "order";

  setFilterValue(filter = "") {
    this.requestParams = { filter };
    this.getRequest();
  }
}

decorate(OrderStore, {
  setFilterValue: action.bound,
});

export default new OrderStore();
