
 describe('Player()', function() {
     it('the mod of two numbers',function() {
         expect(Player.calMod(9, 3)).toEqual(0);
         expect(Player.calMod(9,4)).toEqual(1);
     });

     /*it('should calculate the sum of numbers which are in array', () => {
         let numArray1 = [3, 6, 1, 8, 6, 4, 2];
         let numArray2 = [1, 2, 6, 2, 9, 0, 4];
         expect(Player.calSum(numArray1)).toBe(30);
         expect(Player.calSum(numArray2)).toBe(24);
     });

     it('should calculate the sum of numbers which are in array and less than indicated num ', () => {
         let numArray1 = [3, 6, 1, 8, 6, 4, 2];
         let numArray2 = [1, 2, 6, 2, 9, 0, 4];

         expect(Player.calSumInConditon(numArray1 , 5)).toBe(10);
         expectPlayer.calSumInConditon(numArray2,6).toBe(9);
     });*/
 });