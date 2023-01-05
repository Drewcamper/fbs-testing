module.exports = (arr, target) => {
  
  let startingIndex = 0
  let lastIndex = arr.length-1
  let targetPosition = 0

  if(arr[lastIndex]===target) targetPosition = lastIndex
  else
  while (startingIndex<=lastIndex) {
    let avarageDifference = (arr[lastIndex]-arr[startingIndex])/(lastIndex-startingIndex)
    let avarageSteps = Math.ceil((target-arr[startingIndex])/avarageDifference)-1 //Math.abs() may needed. Depends on the edge cases.

    startingIndex += avarageSteps+1
    
    if(arr[startingIndex]>target){
        lastIndex = startingIndex-1
        startingIndex -= (avarageSteps+1)   //setting to the previous start 
    }   //left search
    if(arr[startingIndex]===target){ targetPosition = startingIndex; break}  
  }
return targetPosition
}