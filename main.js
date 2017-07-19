const bears = [
  { name: 'teddy', strength: 1000 },
  { name: 'grizzly', strength: 1000000 },
  { name: 'care', strength: 100 }
]
const btnText = ['Home', 'About', 'Blog', 'Contact'];
btnText.map(item => {
  return
})
<Button test={}>

const bearsWithFood = bears.map(item => {
  item.favFood = 'honey'
  return item
})

const weakerBearsBcNuclearWar = bears.map(stuff => {
  stuff.strength = stuff.strength - 100
  return stuff
})
console.log(bears, bearsWithFood, weakerBearsBcNuclearWar)
const bearNames = bears.map(el => {
  return el.name
})
// console.log(bearNames)
const slugs = [
  { name: 'wormy', strength: 1000 },
  { name: 'slimy', strength: 100 },
  { name: 'grimy', strength: 1 }
]
//
// const strongBears = []
// for (let i = 0; i < bears.length; i++) {
//   if (bears[i].strength >= 200) {
//     strongBears.push(bears[i])
//   }
// }
//
// const strongBears = bears.filter((item) => {
//   return item.strength >= 200
// })
// const getStrongAnimal = (item, index, arr) => {
//   return item.strength > arr[!index ? 0 : index - 1].strength
// }
// const strongestSlug = bears.find(getStrongAnimal)
// console.log('strongest bear', strongestSlug)
// const getStrongAnimals = (item, idx, arr) => {
//   console.log('index: ', idx)
//   return item.strength >= 200
// }
//
// const strongBears = bears.filter(getStrongAnimals)
// const strongSlugs = slugs.filter(getStrongAnimals)
// console.log(strongBears, strongSlugs)
// map
