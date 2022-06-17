// 8 x 8

let s = '';
const p = 8; //Panjang
const l = 8; //Lebar

for (let i = 1; i <= l; i++) {
    // console.log('#');
    if (i % 2 == 0) {
        for (let j=1; j <= p; j++) {
        // console.log('#');
            if(j % 2 == 0) {
                s += '#';
            } else {
                s += ' ';
            }
        }
    } else {
        for (let j = 1; j <= p; j++) {
            if (j % 2 == 0) {
                s += ' ';
            } else {
                s += '#';
            }
        }
    }
    
    s += '\n';
}

console.log(s);
