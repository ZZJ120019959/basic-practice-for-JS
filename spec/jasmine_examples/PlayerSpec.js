
 describe("Player", function() {
     var Player = require('../../lib/jasmine_examples/Player');

     it("the mod of two numbers",function() {
         expect(Player.calMod(9, 3)).toEqual(0);
         expect(Player.calMod(9,4)).toEqual(1);
     });

     it('calculate the sum of numbers in an array', () => {
         let numArray1 = [1,2,3];
         expect(Player.calSum(numArray1)).toBe(6);
     });

     it('should calculate the sum of numbers which are in array and less than indicated num ', () => {
         let numArray1 = [1,2,4];
         expect(Player.calSumInConditon(numArray1 , 4)).toBe(3);
     });
 });