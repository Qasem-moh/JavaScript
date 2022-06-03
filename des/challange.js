whatToPrint(myfriends, chosen); // function call

function whatToPrint(x, z) {
    let obj;
    if (z == 1) {
        obj = x[0];
    }
    if (z == 2) {
        obj = x[1];
    }
    if (z == 3) {
        obj = x[2];
    }
    ({title: n, age: a, available: b, skills: [, s2],} = obj);
    b == 1 ? (b = "available") : (b = "not available");
    console.log(obj);
    console.log(`${n}`);
    console.log(`${a}`);
    console.log(`${b}`);
    console.log(`${s2}`);
} // you may need to add a path for when chosen is out of range !! less than one or more than three.


// switch statement


switch (chosen) {
    case 1: {
        let [{title: n, age: a, available: b, skills: [, s2],}, {}, {},] = myfriends;
        b == 1 ? (b = "available") : (b = "not available");
        console.log(`${n}`);
        console.log(`${a}`);
        console.log(`${b}`);
        console.log(`${s2}`);
        break;
    }
    case 2: {
        let [{}, {title: n, age: a, available: b, skills: [, s2],}, {},] = myfriends;
        b == 1 ? (b = "available") : (b = "not available");
        console.log(`${n}`);
        console.log(`${a}`);
        console.log(`${b}`);
        console.log(`${s2}`);
        break;
    }
    case 3: {
        let [{}, {}, {title: n, age: a, available: b, skills: [, s2],},] = myfriends;
        b == 1 ? (b = "available") : (b = "not available");
        console.log(`${n}`);
        console.log(`${a}`);
        console.log(`${b}`);
        console.log(`${s2}`);
        break;
    }
} // also you may need to add a default case for the switch.