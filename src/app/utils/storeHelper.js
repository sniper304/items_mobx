import { getRequest } from "./axiosHelper";
import { observable, action, decorate } from "mobx";

class BaseStore {
  state = "pending";
  data = [];
  mainUrlPath = null;
  requestParams = {};

  getRequest() {
    const self = this;

    if (!self.mainUrlPath) {
      throw Error("mainUrlPath not defined");
    }

    self.state = "loading";

    getRequest(self.mainUrlPath, self.requestParams)
      .then((response) => {
        self.state = "loaded";
        self.data = response.data;
      })
      .catch((error) => {
        self.state = "error";

        console.error(error);
      });
  }
}

decorate(BaseStore, {
  state: observable,
  data: observable,
  mainUrlPath: observable,
  requestParams: observable,
  getRequest: action.bound,
});

export default BaseStore;
