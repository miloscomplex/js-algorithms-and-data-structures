// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(bas, pow){
    if (pow < 1) return 1a; 
    return bas * power(bas, pow - 1)
}

power(4,4)
