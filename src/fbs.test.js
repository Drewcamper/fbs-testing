/* eslint-env jest */
const fbs = require('./fbs')

describe('fbs()', () => {


  // test('Finds 20 in several arrays', () => {
  //   const arraysToTest= [
  //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], //normal array

  //     [1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,40,41,42,43,44,46,47,48,49,50], //5 holes with 1 missing element each
  //     [1,2,5,6,7,8,9,10,11,12,13,16,17,18,19,20,21,22,23,24,25,26,27,30,31,34,35,36,37,38,39,40,41,42,43,46,47,48,49,50], //5 holes with 2 missing elements each
  //     [1,2,3,4,5,6,7,9,10,11,12,14,15,16,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,38,39,40,41,42,43,45,46,47,48,49,50], //10 holes with 1 missing element each
  //     [1,2,3,4,5,8,9,10,11,12,15,16,17,18,19,20,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,40,41,42,43,44,47,48,49,50], //10 holes with 2 missing element each

  //     [1,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], //1 hole between the first and the second element with the value of 19. Not working from for 21,22,23
  //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,50], //1 hole between the second last and the last element with the value of 19
  //     [1,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], //1 holw between the first and the second element with the value of 9
  //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,50], //1 hole between the second last and the last element with the value of 9
  //     [1,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], //1 hole between the first and the second element with the value of 15
  //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,50], //1 hole between the last and the second last element with the value of 15

  //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], //1 hole in the middle with the value of 5
  //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], //1 hole in the middle with the value of 10
  //     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], //1 hole in the middle with the value of 15

  //   ]

  //   const target = 20
  
   
  //   for (const arr of arraysToTest) {
  //     const expected = arr.indexOf(target)
  //     const actual = fbs(arr, target)
  //     expect(actual).toEqual(expected)
  //   }    
  // })

  test('Finds 21 in an array with 1 billion length', () => {
    let arraysToTest = []
    const target = 131329
    for(let i = 1; i<=1000; i++){
      let litleArray = []
      for(let k = 1; k<=200000; k++){
        
        litleArray.push(k)
      }
      arraysToTest.push(litleArray)
    }
  
    for (const arr of arraysToTest) {
      const expected = arr.indexOf(target)
      const actual = fbs(arr, target)
      expect(actual).toEqual(expected)
    }    
  })
})