//should probably delete this

//const nedb = require("nedb");
// const nedb = require("gray-nedb");

// class Hostels {
//   constructor(orderFilePath) {
//     console.log(orderFilePath);
//     if (orderFilePath) {
//       this.order = new nedb(orderFilePath);
//       orderFilePath;
//     } else {
//       this.order = new nedb();
//     }
//   }

//   getAllEntries() {
//     return new Promise((resolve, reject) => {
//       this.order.find({}, function (err, entries) {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(entries);
//           console.log("function all() returns: ", entries);
//         }
//       });
//     });
//   }

// }
// module.exports = Hostels;
