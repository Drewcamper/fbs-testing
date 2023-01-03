module.exports = (arr, target) => {
  // let prevStartingIndex = 0
  let startingIndex = 0
  let targetPosition = 0
  let lastIndex = arr.length-1

  while (startingIndex<=lastIndex) {

    let arrLength = lastIndex-startingIndex
    let avarageDifference = (arr[lastIndex]-arr[startingIndex])/arrLength
    let avarageSteps = Math.abs(Math.ceil((target-arr[startingIndex])/avarageDifference))

    if(arr[startingIndex]>target){
        lastIndex = startingIndex-1
        startingIndex = prevStartingIndex
    }   //left search
    if(arr[startingIndex]===target){ targetPosition = startingIndex; break}
    if(arr[lastIndex]===target){ targetPosition = lastIndex; break}
    prevStartingIndex = startingIndex
    startingIndex += avarageSteps
    lastIndex -= 1
  }
    
  if(arr[startingIndex]===target){targetPosition = startingIndex}
  if(arr[lastIndex]===target){ targetPosition = lastIndex}
  

    return (
        targetPosition
    )
}
