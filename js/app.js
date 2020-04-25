var protein = 150;
var carbs = 200;
var fat = 100;
var calories = 2300;

$(document).ready(function () {
  $("#protein-grams").text(protein);
  $("#carbs-grams").text(carbs);
  $("#fat-grams").text(fat);
  $(".target-calories").text(calories);

  $(".protein-down").click(function () {
    if (protein > 1) {
      protein -= 1;
      calories -= 4;
    }

    $("#protein-grams").text(protein);
    $(".target-calories").text(calories);
  });
  $(".protein-up").click(function () {
    if (protein < 300) {
      protein += 1;
      calories += 4;
    }

    $("#protein-grams").text(protein);
    $(".target-calories").text(calories);
  });
  $(".carbs-down").click(function () {
    if (carbs > 1) {
      carbs -= 1;
      calories -= 4;
    }

    $("#carbs-grams").text(carbs);
    $(".target-calories").text(calories);
  });
  $(".carbs-up").click(function () {
    if (carbs < 1000) {
      carbs += 1;
      calories += 4;
    }

    $("#carbs-grams").text(carbs);
    $(".target-calories").text(calories);
  });
  $(".fat-down").click(function () {
    if (fat > 1) {
      fat -= 1;
      calories -= 9;
    }

    $("#fat-grams").text(fat);
    $(".target-calories").text(calories);
  });
  $(".fat-up").click(function () {
    if (fat < 500) {
      fat += 1;
      calories += 9;
    }

    $("#fat-grams").text(fat);
    $(".target-calories").text(calories);
  });
});
