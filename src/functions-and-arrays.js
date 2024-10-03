// Iteration 1 | Find the Maximum
function maxOfTwoNumbers (num1, num2) {
  if (num1 > num2) {
    return num1
  } else if (num2 > num1) {
    return num2
  } else {
    return num1
  }
}
maxOfTwoNumbers(1, 2)

// Iteration 2 | Find the Longest Word
const words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
]

function findLongestWord (wordsArr) {
  if (wordsArr.length === 0) {
    return null
  }
  let longestWord = wordsArr[0]
  for (let i = 0; i < wordsArr.length; i++) {
    if (longestWord.length < wordsArr[i].length) {
      longestWord = wordsArr[i]
    }
  }
  return longestWord
}
findLongestWord(words)
// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]

function sumNumbers (nums) {
  let sum = 0
  if (nums.length === 0) {
    return (sum = 0)
  }
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  return sum
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9]

function averageNumbers (nums) {
  if (nums.length === 0) {
    return 0
  }
  const sum = sumNumbers(nums)
  return sum / nums.length
}
averageNumbers(numbers2)
// Iteration 5 | Find Elements
const words2 = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
]

function doesWordExist (arr, aim) {
  if (arr.length === 0) {
    return null
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === aim) {
      return true
    }
  }
  return false
}
