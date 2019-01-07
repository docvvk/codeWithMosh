// import Raven from "raven-js";

function init() {
  // Raven.config("https://24e617a215cf45cc84851867531bfde0@sentry.io/1365235", {
  //   release: "1-0-0",
  //   environment: "development-test"
  // }).install();
}

function log(error) {
  console.error(error);
  // Raven.captureException(error);
}

export default {
  init,
  log
};
