function naikAngkot(arrPenumpang) {
    if (arrPenumpang.length === 0) {return [];}
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let placeHolder = {};
    let goFrom;
    let goTo;
    let result = [];
    for (let i = 0; i < arrPenumpang.length; i++) {
        placeHolder = {};
        placeHolder.penumpang = arrPenumpang[i][0];
        placeHolder.naikDari = arrPenumpang[i][1];
        placeHolder.tujuan = arrPenumpang[i][2];
        for (let j = 0; j < rute.length; j++) {
            if (placeHolder.naikDari === rute[j]) {
                goFrom = j;
            }
            if (placeHolder.tujuan === rute[j]) {
                goTo = j;
            }
        }
        placeHolder.bayar = Math.abs((goTo - goFrom) * 2000);
        result.push(placeHolder);
    }
    return result;
}
  
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
 
console.log(naikAngkot([])); //[]