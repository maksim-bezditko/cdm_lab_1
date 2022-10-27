setTimeout(() => {
	let A = prompt("List A set values separated by commas: ").split(", ");
	let B = prompt("List B set values separated by commas: ").split(", ");
	let C = prompt("List C set values separated by commas: ").split(", ");
	let U = [...prompt("Own elements of universal set that are not in any other subset: ").split(", "), ...A, ...B, ...C];
	
	function compliment(arr) { // 
		 let arr1 = [];
		 for (let item of U) {
			  if (!arr1.includes(item) && !arr.includes(item)) {
					arr1.push(item)
			  }
		 }
		 alert("Result equals: " + arr1.join(", "));
	}
	
	function union(arr1, arr2) {
		 let arr = [];
		 let general = arr1.concat(arr2);
		 for (let i = 0; i < general.length; i++) {
			  if (!arr.includes(general[i])) {
					arr.push(general[i])
			  }
		 }
		 alert("Result equals: " + arr.join(", "));
	}
	
	function intersection(arr1, arr2) {
		 let arr = [];
		 let general = arr1.concat(arr2);
		 for (let i = 0; i < general.length; i++) {
			  if (arr1.includes(general[i]) && arr2.includes(general[i]) && !arr.includes(general[i])) {
					arr.push(general[i])
			  }
		 }
		 alert("Result equals: " + arr.join(", "));
	}
	
	function difference(arr1, arr2) { 
		 let arr = [];
		 for (let item of arr1) {
			  if (!arr2.includes(item)) {
					arr.push(item)
			  }
		 }
		 alert("Result equals: " + arr.join(", "));
	}

	const values = {
		"A": A,
		"B": B,
		"C": C
	}
	
	document.getElementById("compliment").addEventListener("click", () => {
		const argument = values[prompt("What set do you want compliment of?")]

		compliment(argument)
	})

	document.getElementById("union").addEventListener("click", () => {
		const argument1 = values[prompt("What first set do you want to union?")]
		const argument2 = values[prompt("What second set do you want to union?")]

		union(argument1, argument2)
	})
	
	document.getElementById("intersection").addEventListener("click", () => {
		const argument1 = values[prompt("What first set do you want to intersect?")]
		const argument2 = values[prompt("What second set do you want to intersect?")]
		
		intersection(argument1, argument2)
	})

	document.getElementById("difference").addEventListener("click", () => {
		const argument1 = values[prompt("What set do you want to get the difference from?")]
		const argument2 = values[prompt("What set do you want to difference from the previous one?")]

		difference(argument1, argument2)
	})
}, 5000)

