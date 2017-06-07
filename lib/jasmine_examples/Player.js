
 function calMod(a,b) {
     return a % b;
 };

 function calSum(arr) {
     var sum = 0;
     arr.forEach(function(e) {
         sum+=e;
     }, this);
     return sum;
 };

 function calSumInConditon(arr,division) {
     var sum = 0;
     arr.forEach(function(e) {
         sum += e < division ? e : 0;
     }, this);
     return sum;
 };

 module.exports = {
     calMod,
     calSum,
     calSumInConditon
 }

