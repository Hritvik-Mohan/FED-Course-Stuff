const names = ["Youtube", "facebook", "Instagram", "Netflix", "Amazon"];

// for (const n of names) { // for array
//     console.log(n);
// }

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    hm: "Hritvik.codes"
}

// for (const n in symbols) { // for objects
//     console.log(n);
// }

// for (const n in symbols) { // for objects
//     console.log(symbols[n]);
// }


for(const n in symbols) {
    console.log(`Key: ${n}, value: ${symbols[n]} `);
}