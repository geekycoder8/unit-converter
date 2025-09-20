// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound


const convertBtn = document.getElementById("convert-btn")
const paragraphEl = document.querySelectorAll(".paragraph-text");
const inputEl = document.getElementById("input-text")


convertBtn.addEventListener("click", function () {
	const inputValue = inputEl.value
	lengthConverter(inputValue)
	volumeConverter(inputValue)
	massConverter(inputValue)
})

function lengthConverter(valNum) {
	const feetToMeters = parseFloat(valNum / 3.2808).toFixed(3)
	const metersToFeet = parseFloat(valNum * 3.2808).toFixed(3)
	paragraphEl[0].textContent = `${valNum} meters = ${metersToFeet} feet | ${valNum} feet = ${feetToMeters} meters`
}


function volumeConverter(valNum) {
	const litersToGallons = parseFloat(valNum * 0.264172).toFixed(3)
	const gallonsToLiters = parseFloat(valNum * 3.78541).toFixed(3)
	paragraphEl[1].textContent = `${valNum} liters = ${litersToGallons} gallons | ${valNum} gallons = ${gallonsToLiters} liters`
}


function massConverter(valNum) {
	const kilosToPounds = parseFloat(valNum * 2.20462).toFixed(3)
	const poundsToKilos = parseFloat(valNum * 0.453592).toFixed(3)
	paragraphEl[2].textContent = `${valNum} kilos = ${kilosToPounds} pounds | ${valNum} pounds = ${poundsToKilos} kilos`
}

function inputValue(value) {
	console.log(value, "!!")
	lengthConverter(value)
	volumeConverter(value)
	massConverter(value)
}