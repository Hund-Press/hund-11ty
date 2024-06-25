const { DateTime } = require("luxon");

module.exports = function (config) {
  config.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
};
