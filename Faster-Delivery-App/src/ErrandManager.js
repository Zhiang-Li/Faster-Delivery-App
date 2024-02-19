import Errand from "./Errand.js";

export default class ErrandManager {
  constructor() {
    this.errands = [
      {
        id: 1,
        title: "Camera",
        description: "This is a large camera",
        tag: "machine",
        delivery_time: "11:30",
        origin: "san mateo",
        destination: "foster city",
        compensation: "30",
        image: "w",
      },
      {
        id: 1,
        title: "letter",
        description: "This is a letter",
        tag: "paper",
        delivery_time: "12:30",
        origin: "san mateo",
        destination: "sf",
        compensation: "100",
        image: "wfaf",
      },
      {
        id: 1,
        title: "pen",
        description: "This is a pen",
        tag: "stationary",
        delivery_time: "3:00",
        origin: "sv",
        destination: "oakland",
        compensation: "3",
        image: "hi",
      },
    ];
  }

  addInteraction(title,description, tag, delivery_time, origin, destination, compensation, image) {
    this.errands.push(
      new Errand({
        id: this.getNextId(),
        title,
        description, 
        tag, 
        delivery_time, 
        origin, 
        destination, 
        compensation, 
        image,
      })
    );
  }

  addErrand(errand){
    this.errands.push(errand);
  }

  getInteractions() {
    return this.errands;
  }

  getInteractionById(id) {
    return this.errands[id];
  }

  deleteInteractionById(id) {
    this.errands.splice(id, 1);
  }

  getNextId() {
    return this.errands.at(-1).id + 1;
  }
}
