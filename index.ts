setTimeout((): void => {
	let A: string[] = prompt("List A set values separated by commas: ")!.split(", ");
	let B: string[] = prompt("List B set values separated by commas: ")!.split(", ");
	let C: string[] = prompt("List C set values separated by commas: ")!.split(", ");
	
	let ownU: string[] = prompt("Enter own values of U set: ")!.split(", ");

	let U: string[] = [...ownU, ...A, ...B, ...C];
	
	function count(item: any, arr: any[]): number {
		let counter = 0;
		for (let i of arr) {
			if (i === item) {
				counter++
			}
		}
		return counter;
	}

	function compliment(arr: string[]): void { // 
		let arr1: string[] = [];
		for (let item of U) {
			if (!arr1.includes(item) && (count(item, U) > 1 || !arr.includes(item))) {
					arr1.push(item)
			}
		}
		alert("Result equals: " + arr1.join(", "));
	}
	
	function union(arr1: string[], arr2: string[]): void {
		 let arr: string[] = [];
		 let general: string[] = arr1.concat(arr2);
		 for (let i = 0; i < general.length; i++) {
			  if (!arr.includes(general[i])) {
					arr.push(general[i])
			  }
		 }
		 alert("Result equals: " + arr.join(", "));
	}
	
	function intersection(arr1: string[], arr2: string[]): void {
		 let arr: string[] = [];
		 let general: string[] = arr1.concat(arr2);
		 for (let i = 0; i < general.length; i++) {
			  if (arr1.includes(general[i]) && arr2.includes(general[i]) && !arr.includes(general[i])) {
					arr.push(general[i])
			  }
		 }
		 alert("Result equals: " + arr.join(", "));
	}
	
	function difference(arr1: string[], arr2: string[]) { 
		 let arr: string[] = [];
		 for (let item of arr1) {
			  if (!arr2.includes(item)) {
					arr.push(item)
			  }
		 }
		 alert("Result equals: " + arr.join(", "));
	}

	
	const values: {
		[key: string]: string[]
	} = {
		"A": A,
		"B": B,
		"C": C
	}

	type strings = "A" | "B" | "C";

	let unionButton = document.getElementById("union")! as HTMLButtonElement;
	let complimentButton = document.getElementById("compliment")! as HTMLButtonElement;
	let intersectionButton = document.getElementById("intersection")! as HTMLButtonElement;
	let differenceButton = document.getElementById("difference")! as HTMLButtonElement;

	complimentButton.addEventListener("click", (): void => {
		const prompt1: string = prompt("What set do you want compliment of?")! as strings;
		const argument: string[] = values[prompt1]
		compliment(argument)
	})

	unionButton.addEventListener("click", () => {
		const argument1: string[] = values[prompt("What first set do you want to union?")!]
		const argument2: string[] = values[prompt("What second set do you want to union?")!]

		union(argument1, argument2)
	})
	
	intersectionButton.addEventListener("click", () => {
		const argument1: string[] = values[prompt("What first set do you want to intersect?")!]
		const argument2: string[] = values[prompt("What second set do you want to intersect?")!]

		intersection(argument1, argument2)
	})

	differenceButton.addEventListener("click", () => {
		const argument1: string[] = values[prompt("What set do you want to get the difference from?")!]
		const argument2: string[] = values[prompt("What set do you want to difference from the previous one?")!]

		difference(argument1, argument2)
	})
}, 5000)

