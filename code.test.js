const ArrayManipulator = require("./code");

test("check if 2 arrs not the same lengths", () => {
  let am = new ArrayManipulator();
  let x = ["food", "item", "location", "temp"];
  let y = ["cherry", "lightbulb", "Tazmania"];
  let recObj = am.manipulate(x, y);
  expect(recObj).toEqual({ error: "Array lengths don't match" });
});
test("check manipulate method ", () => {
  let am = new ArrayManipulator();
  let x = ["food", "item", "location"];
  let y = ["cherry", "lightbulb", "Tazmania"];
  let recObj = am.manipulate(x, y);
  expect(recObj).toEqual({
    food: "cherry",
    item: "lightbulb",
    location: "Tazmania",
  });
});

// test("addPicture should add a picture URL to the pictureURLs array", function () {
//   //sanity
//   const picManager = new PM();
//   expect(picManager.pictureURLs.length).toBe(0);

//   picManager.addPicture("some_url");
//   expect(picManager.pictureURLs.length).toBe(1); //test
//   expect(picManager.pictureURLs).toContain("some_url"); //double check
// });
// test("removePicture should remove a picture URL from the pictureURLs array", function () {
//   //sanity
//   const picManager = new PM();
//   expect(picManager.pictureURLs.length).toBe(0);

//   picManager.addPicture("some_url");
//   picManager.addPicture("some_url2");
//   picManager.addPicture("some_url3");

//   picManager.removePicture("some_url");
//   expect(picManager.pictureURLs.length).toBe(2); //test
//   expect(picManager.pictureURLs).not.toContain("some_url"); //double check
// });

// const clearLowPriority = require("./code");

// // test("should return the square root of the sum of the squares", () => {
// //   let c = calculateHyp(3, 4);
// //   expect(c).toBe(5);
// // });

// test("should keep only HIGH priority tasks", () => {
//   let tasks = [
//     { text: "dummy", priority: "HIGH" },
//     { text: "dummy", priority: "HIGH" },
//   ];

//   let filteredTasks = clearLowPriority(tasks);

//   expect(filteredTasks.length).toBe(2);
//   filteredTasks.forEach((t) => {
//     expect(t.priority).toBe("HIGH");
//   });
// });
