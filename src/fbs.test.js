/* eslint-env jest */
const fbs = require('./fbs')

describe('fbs()', () => {
//all tests except the first one ran with 1 billion elements 1 billion times

  test('Finds 20 in several arrays', () => {
    const arraysToTest= [
      [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], //normal array

      [1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,40,41,42,43,44,46,47,48,49,50], //5 holes with 1 missing element each
      [1,2,5,6,7,8,9,10,11,12,13,16,17,18,19,20,21,22,23,24,25,26,27,30,31,34,35,36,37,38,39,40,41,42,43,46,47,48,49,50], //5 holes with 2 missing elements each
      [1,2,3,4,5,6,7,9,10,11,12,14,15,16,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,38,39,40,41,42,43,45,46,47,48,49,50], //10 holes with 1 missing element each
      [1,2,3,4,5,8,9,10,11,12,15,16,17,18,19,20,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,40,41,42,43,44,47,48,49,50], //10 holes with 2 missing element each

      [1,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], //1 hole between the first and the second element with the value of 19. Not working from for 21,22,23
      [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,50], //1 hole between the second last and the last element with the value of 19
      [1,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], //1 holw between the first and the second element with the value of 9
      [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,50], //1 hole between the second last and the last element with the value of 9
      [1,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], //1 hole between the first and the second element with the value of 15
      [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,50], //1 hole between the last and the second last element with the value of 15

      [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], //1 hole in the middle with the value of 5
      [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], //1 hole in the middle with the value of 10
      [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], //1 hole in the middle with the value of 15

    ]

    const target = 20
  
    for (const arr of arraysToTest) {
      const expected = arr.indexOf(target)
      const actual = fbs(arr, target)
      expect(actual).toEqual(expected)
    }    
  })

  test('linear array', () => {
    let arraysToTest = []
    const target = 9991718346
    for(let i = 1; i<=1000000000; i++){
      let litleArray = []
      for(let k = 1; k<=1000000000; k++){
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


//arrays with rarely missing elements

  test('missing 23 multiplies', () => {
    let arraysToTest = []
    const target = 1991730
    for(let i = 1; i<=1000000000; i++){
      let litleArray = []
      for(let k = 1; k<=1000000000; k++){
        if(k%23===0)continue;
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
  test('missing 47 multiplies', () => {
    let arraysToTest = []
    const target = 1991718
    for(let i = 1; i<=1000000000; i++){
      let litleArray = []
      for(let k = 1; k<=1000000000; k++){
        if(k%47===0)continue;
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
  test('missing 54 multiplies', () => {
    let arraysToTest = []
    const target = 1991681
    for(let i = 1; i<=1000000000; i++){
      let litleArray = []
      for(let k = 1; k<=1000000000; k++){
        if(k%54===0)continue;
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


//arrays with frequently missing elements

  test('missing 3 multiplies', () => {
    let arraysToTest = []
    const target = 879386125
    for(let i = 1; i<=1000000000; i++){
      let litleArray = []
      for(let k = 1; k<=1000000000; k++){
        if(k%3===0)continue;
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
  test('missing 7 multiplies', () => {
    let arraysToTest = []
    const target = 779286125
    for(let i = 1; i<=1000000000; i++){
      let litleArray = []
      for(let k = 1; k<=1000000000; k++){
        if(k%7===0)continue;
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
  test('missing 11 multiplies', () => {
    let arraysToTest = []
    const target = 879286125
    for(let i = 1; i<=1000000000; i++){
      let litleArray = []
      for(let k = 1; k<=1000000000; k++){
        if(k%11===0)continue;
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

  //arrays with big differences between two following elements at the beginning

  test('1000000000 is second. Big hole at the beginning', () => {
    let arraysToTest = []
    const target = 1000000000
    for(let i = 1; i<=1000000000; i++){
      let litleArray = [1]
      for(let k = 1000000000; k<=999999999999999; k++){
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
  test('1 is first. Big hole at the beginning', () => {
    let arraysToTest = []
    const target = 1
    for(let i = 1; i<=1000000000; i++){
      let litleArray = [1]
      for(let k = 1000000000; k<=999999999999999; k++){
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

  //arrays with big differences between two following elements at the end

  test('999999999 is second last. Big hole at the end', () => {
    let arraysToTest = []
    const target = 999999999
    for(let i = 1; i<=1000000000; i++){
      let litleArray = []
      for(let k = 1; k<=999999999; k++){
        litleArray.push(k)
        if(k===999999999){
          litleArray.push(k)
          litleArray.push(1000000000000000)
        }
      }
      arraysToTest.push(litleArray)
    }
    for (const arr of arraysToTest) {
      const expected = arr.indexOf(target)
      const actual = fbs(arr, target)
      expect(actual).toEqual(expected)
    }  
  })
  test('1000000000000000 is the last. Big hole at the end', () => {
    let arraysToTest = []
    const target = 999999999
    for(let i = 1; i<=1000000000; i++){
      let litleArray = []
      for(let k = 1; k<=999999999; k++){
        litleArray.push(k)
        if(k===999999999){
          litleArray.push(k)
          litleArray.push(1000000000000000)
        }
      }
      arraysToTest.push(litleArray)
    }
    for (const arr of arraysToTest) {
      const expected = arr.indexOf(target)
      const actual = fbs(arr, target)
      expect(actual).toEqual(expected)
    }  
  })


//arrays with several missing elements

  test('missing 23 and 43 multiplies', () => {
    let arraysToTest = []
    const target = 1991730
    for(let i = 1; i<=1000000000; i++){
      let litleArray = []
      for(let k = 1; k<=1000000000; k++){
        if(k%23===0)continue;
        if(k%43===0)continue;
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
  test('missing 17 and 33 multiplies', () => {
    let arraysToTest = []
    const target = 1991730
    for(let i = 1; i<=1000000000; i++){
      let litleArray = []
      for(let k = 1; k<=1000000000; k++){
        if(k%17===0)continue;
        if(k%33===0)continue;
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