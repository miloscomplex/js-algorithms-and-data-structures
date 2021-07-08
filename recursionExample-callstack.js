// it works through the stack to return
// the original ask of num + sumRange(num-1)
// once all the que'ed functions are returned

function sumRange(num){
   if(num === 1) return 1;
   return num + sumRange(num-1);
}

sumRange(4)
