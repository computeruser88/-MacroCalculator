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
    console.log("protein down button clicked");
    if (protein > 1) {
      protein -= 1;
      calories -= 4;
    }
    console.log("Protein = " + protein);
    $("#protein-grams").text(protein);
    $(".target-calories").text(calories);
  });
  $(".protein-up").click(function () {
    console.log("protein up button clicked");
    if (protein < 300) {
      protein += 1;
      calories += 4;
    }
    console.log("Protein = " + protein);
    $("#protein-grams").text(protein);
    $(".target-calories").text(calories);
  });
  $(".carbs-down").click(function () {
    console.log("carbs down button clicked");
    if (carbs > 1) {
      carbs -= 1;
      calories -= 4;
    }
    console.log("Carbs = " + carbs);
    $("#carbs-grams").text(carbs);
    $(".target-calories").text(calories);
  });
  $(".carbs-up").click(function () {
    console.log("carbs up button clicked");
    if (carbs < 1000) {
      carbs += 1;
      calories += 4;
    }
    console.log("Carbs = " + carbs);
    $("#carbs-grams").text(carbs);
    $(".target-calories").text(calories);
  });
  $(".fat-down").click(function () {
    console.log("fat down button clicked");
    if (fat > 1) {
      fat -= 1;
      calories -= 9;
    }
    console.log("Fat = " + fat);
    $("#fat-grams").text(fat);
    $(".target-calories").text(calories);
  });
  $(".fat-up").click(function () {
    console.log("fat up button clicked");
    if (fat < 500) {
      fat += 1;
      calories += 9;
    }
    console.log("Fat = " + fat);
    $("#fat-grams").text(fat);
    $(".target-calories").text(calories);
  });
});
