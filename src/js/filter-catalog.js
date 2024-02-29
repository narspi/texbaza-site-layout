import noUiSlider from "nouislider";
import customSelect from "custom-select";

const valuesSlider = document.getElementById("catalog__range");
const techview = document.getElementById("techview");
const branches = document.getElementById("branches");

console.log(techview)

if (valuesSlider && techview) {
  const valuesForSlider = [
    "0",
    "500т",
    "800т",
    "1,1м",
    "1,4м",
    "1,7м",
    "2м",
    "2,3м",
    "2,7м",
    "3м",
  ];

  var format = {
    to: function (value) {
      return valuesForSlider[Math.round(value)];
    },
    from: function (value) {
      return valuesForSlider.indexOf(Number(value));
    },
  };

  noUiSlider.create(valuesSlider, {
    start: [5, 32],
    range: { min: 0, max: valuesForSlider.length - 1 },
    connect: true,
    step: 1,
    format: format,
    pips: { mode: 'steps', format: format },
  });

  const techviewValue = customSelect(techview);
  const branchesValue = customSelect(branches);
}
