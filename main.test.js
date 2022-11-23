import { sort, search, newsList } from "./main.js";

//Example testing for search function
test("Search function testing", () => {
  expect.arrayContaining(newsList);
});

test("Sort function testing", () => {
  expect(sort(newsList)).toStrictEqual(newsList.sort())
})