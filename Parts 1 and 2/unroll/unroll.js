const square = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16]
  ];

const smallerSquare = [
	["a", "b", "c"],
	["d", "e", "f"],
	["g", "h", "i"]
  ];

function unroll(squareArray) {
	let ans = []

	while (squareArray.length > 0){
	ans = [...ans, squareArray.shift()]

	ans = [...ans, squareArray.map(x => x.pop())]

	if(typeof (ans[0][0]) !== 'string'){
	ans = [...ans, squareArray.pop().reverse()]}

	else if(squareArray.length > 0) {
		ans = [...ans, squareArray.pop().reverse()]
	}

	if(typeof (ans[0][0]) !== 'string'){	
	ans = [...ans, (squareArray.map(x => x.shift()).reverse())]}

	else if(squareArray.length > 0){
		ans = [...ans, (squareArray.map(x => x.shift()))]
	}
}
	return(ans.flat())
}

unroll(square)
unroll(smallerSquare)

module.exports = unroll;