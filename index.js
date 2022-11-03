"use strict";
setTimeout(() => {
    let A = prompt("List A set values separated by commas: ").split(", ");
    let B = prompt("List B set values separated by commas: ").split(", ");
    let C = prompt("List C set values separated by commas: ").split(", ");
    let ownU = prompt("Enter own values of U set: ").split(", ");
    let U = [...ownU, ...A, ...B, ...C];

    document.getElementById("A").textContent = "A set contains: " + A.join(", ")
    document.getElementById("B").textContent = "B set contains: " + B.join(", ")
    document.getElementById("C").textContent = "C set contains: " + C.join(", ")
    document.getElementById("U").textContent = "U set's own elements: " + ownU.join(", ")

    function count(item, arr) {
        let counter = 0;
        for (let i of arr) {
            if (i === item) {
                counter++;
            }
        }
        return counter;
    }
    function compliment(arr) {
        let arr1 = [];
        for (let item of U) {
            if (!arr1.includes(item) && (count(item, U) > 1 || !arr.includes(item))) {
                arr1.push(item);
            }
        }
        alert("Result equals: " + arr1.join(", "));
    }
    function union(arrs) {
        let result = [];

        let all = [];

        for (let i = 0; i < arrs.length; i++) {
            all = [...all, ...arrs[i]]
        }

        for (let i of all) {
            if (!result.includes(i)) {
                result.push(i)
            }
        }

        alert("Result equals: " + result.join(", "));
    }
    function intersection(arrs) {
        let first = arrs[0];
        let others = [];

        let result = [];
        for (let i = 1; i < arrs.length; i++) {
            others = [...others, ...arrs[i]]
        }

        for (let i of first) {
            if (count(i, others) === arrs.length - 1) {
                result.push(i)
            }
        }
        alert("Result equals: " + result.join(", "))
        
    }
    function difference(arr1, arr2) {
        let arr = [];
        for (let item of arr1) {
            if (!arr2.includes(item)) {
                arr.push(item);
            }
        }
        alert("Result equals: " + arr.join(", "));
    }
    const values = {
        "A": A,
        "B": B,
        "C": C
    };
    let unionButton = document.getElementById("union");
    let complimentButton = document.getElementById("compliment");
    let intersectionButton = document.getElementById("intersection");
    let differenceButton = document.getElementById("difference");
    complimentButton.addEventListener("click", () => {
        const prompt1 = prompt("What set do you want compliment of?");
        const argument = values[prompt1];
        compliment(argument);
    });
    unionButton.addEventListener("click", () => {
        const args = prompt("Enter sets for union (e.g A, C, B): ").split(", ");
        const arrs = [];

        for (let i of args) {
            arrs.push(values[i])
        }

        union(arrs);
    });
    intersectionButton.addEventListener("click", () => {
        const args = prompt("Enter sets for intersection (e.g A, C, B): ").split(", ");
        const arrs = [];

        for (let i of args) {
            arrs.push(values[i])
        }
        intersection(arrs);
    });
    differenceButton.addEventListener("click", () => {
        const argument1 = values[prompt("What set do you want to get the difference from?")];
        const argument2 = values[prompt("What set do you want to difference from the previous one?")];
        difference(argument1, argument2);
    });
}, 2000);
