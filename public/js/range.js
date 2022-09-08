window.onload = function() {
    minPrice();
    maxPrice();
}

let minRange = document.getElementById('min-price');
let maxRange = document.getElementById('max-price');
let minValue = document.getElementById('min-value');
let maxValue = document.getElementById('max-value');
let track = document.querySelector(".catalog__top-filters-price-track");
let rangeMaxValue = document.getElementById('max-price').max;

let minGap = 0;

function minPrice() {
    if(parseInt(maxRange.value) - parseInt(minRange.value) <= minGap) {
        minRange.value = parseInt(maxRange.value) - minGap;
    }
    minValue.textContent = minRange.value;
    fillColor();
}

function maxPrice() {
    if(parseInt(maxRange.value) - parseInt(minRange.value) <= minGap) {
        maxRange.value = parseInt(minRange.value) + minGap;
    }
    maxValue.textContent = maxRange.value;
    fillColor();
}

function fillColor() {
    percent1 = (minRange.value / rangeMaxValue) * 100;
    percent2 = (maxRange.value / rangeMaxValue) * 100;
    track.style.background = `linear-gradient(to right, #f0f0f0 ${percent1}% , #f16d7f ${percent1}% , #f16d7f ${percent2}%, #f0f0f0 ${percent2}%)`;
}
