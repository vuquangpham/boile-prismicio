import Page from "@/classes/Page";

export default class Home extends Page {
  constructor() {
    super({
      id: "error",
      element: "[data-template]",
    });
  }
}
