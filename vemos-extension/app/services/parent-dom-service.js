import Service, { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

const CONTAINER_ID = `vemos-container`;

export default class ParentDomService extends Service {
  container = undefined;
  window = undefined;
  body = undefined;
  @tracked activeFrame = undefined;

  initialize() {
    console.log(`Initializing Parent DOM Service`);
    this.window = window.parent;
    this.body = window.document.body;
    this.container = window.parent.document.getElementById(CONTAINER_ID);
  }

  get host() {
    this.window.location.host;
  }
}
