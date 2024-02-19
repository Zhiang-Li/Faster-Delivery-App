export default class Errand {
  constructor({ id = 1, description, tag, delivery_time, origin, destination, compensation, image} = {}) {
    this.id = id;
    this.description = description;
    this.tag = tag;
    this.delivery_time = delivery_time;
    this.origin = origin;
    this.destination = destination;
    this.compensation = compensation;
    this.image = image;
  }
}
  