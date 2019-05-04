// Array Left Rotate
arrayLRotate = (arr, t) => {
	for (let i = 0; i < t; i++){arr.shift(arr.push(arr[0]));}       
	return arr.indexOf(Math.max(...arr))
}

// Array Right Rotate
arrayRRotate = (arr, t) => {
	for (let i = 0; i < t; i++){arr.pop(arr.unshift(arr[arr.length-1]));}       
	return arr.indexOf(Math.max(...arr))
}
module.exports = {arrayLRotate,arrayRRotate};
