
let elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


const binarySort = (elements: number[], toFind: number) => {

  let max = elements[elements.length - 1]
  let middle = elements[Math.floor((elements.length - 1) / 2)]

  console.log('middle: ', middle)

  if (middle === toFind) {
    console.log('Found element', middle)
    return
  }

  if (middle > toFind) {
    for (let i = max; i >= middle; i--) {
      elements.pop()
    }
    console.log(`new elements: ${elements}`)
    binarySort(elements, toFind)
  }

  if (middle < toFind) {
    for (let i = elements[0]; i <= middle; i++) {
      elements.shift()
    }
    console.log(`new elements: ${elements}`)
    binarySort(elements, toFind)
  }

}


binarySort(elements, 7)