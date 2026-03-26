let handset = {
    model: "Xiomi Note 9 Pro Max",
    specification: {
        ram: 4,
        rom: 128,
        battery: 5400,
    },
    price:17999,
}



const new_handset = structuredClone(handset);

new_handset.model = "Vivo V23 5G"
new_handset.specification.ram = 8;


console.log(handset)