class ArrayManipulator {
  manipulate(arr1, arr2) {
    let obj = {};
    if (arr1.length != arr2.length) {
      return { error: "Array lengths don't match" };
    }
    for (let i in arr1) {
      obj[arr1[i]] = arr2[i];
    }
    return obj;
  }
}

module.exports = ArrayManipulator;

// class PictureManager {
//   constructor() {
//     this.pictureURLs = [];
//   }

//   addPicture(picURL) {
//     this.pictureURLs.push(picURL);
//   }

//   removePicture(picURL) {
//     this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1);
//   }
// }

// module.exports = PictureManager;

// // const add = function (a, b) {
// //   return a - b;
// // };

// // const calculateHyp = function (a, b) {
// //   return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// // };

// const clearLowPriority = function (arr) {
//   return arr.filter((t) => t.priority != "LOW");
// };

// module.exports = clearLowPriority;
