module.exports = function toReadable (n) {
    
    let matrix = [
        ['','one hundred', 'two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred'],
        ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'],
        ['','one','two','three','four','five','six','seven','eight', 'nine'],
        ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    ]

    if( n == 0) return 'zero';
    n = String(n).split('');
    if(n.length == 2) n.unshift('0');
    if(n.length == 1) return matrix[2][n[0]];

    let newArr = [];


    for(let i =0; i < n.length; i++) {
        if(i == 1 && n[i] == 1) {
            newArr.push(matrix[3][n[2]]);
            break;
        }

        newArr.push(matrix[i][n[i]]);

    }


   return newArr.filter(el => el !== '').join(' ');
   
    


}


