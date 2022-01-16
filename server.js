const db = require("./db/connection");
const initHome = require("./lib/home");

db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    initHome();
  }
});
