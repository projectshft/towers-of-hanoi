var TowerOfHanoi 

beforeEach(function () {
  TowerOfHanoi = new GameBoard();
})

describe("Game can move pegs correctly", () => {
  it("Is an object", () => {
    expect(typeof TowerOfHanoi).toEqual("object")
  })

  it("Has correct initial game board", () => {
    expect(TowerOfHanoi.board).toEqual([[5,4,3,2,1],[],[]])
  })

  it("Can move disks correctly", () => {
    expect(TowerOfHanoi.move(0,1)).toEqual([[5,4,3,2],[1],[]])
  })

  it("Doesn't move disk if it moves onto a smaller disk than itself", () => {
    TowerOfHanoi.move(0,1);
    expect(TowerOfHanoi.move(0,1)).toEqual("You cannot move a larger disc on top of a smaller one")
  })

  it("Doesn't move disk if the origin peg is empty", () => {
    expect(TowerOfHanoi.move(1,2)).toEqual("Cannot move disk from an empty peg")
  })
})

describe("Game formats game board correctly", () => {

  it("Creates formatted string of game board from game board", () => {
    expect(TowerOfHanoi.stringFormattedGameBoard()).toEqual(['--- 5 4 3 2 1', '---', '---'])
  })

  it("Creates and array of h2 elements from game board", () => {
    expect(TowerOfHanoi.createPegElementsArray()[0].nodeName).toEqual("DIV")
  })

  it("Creates/resets board correctly", () => {
    TowerOfHanoi.move(0,1)
    TowerOfHanoi.move(0,2)
    expect(TowerOfHanoi.resetBoard()).toEqual([[5,4,3,2,1],[],[]])
  })
})

describe("Game checks for winner correctly", () => {

  it("Correctly Checks if all but one peg is empty correctly", () => {
    expect(TowerOfHanoi.checkIfAllButOnePegIsEmpty(TowerOfHanoi.board)).toEqual(0)
  })

  it("Correctly finds that not all but one peg is empty", () => {
    TowerOfHanoi.move(0,1)
    expect(TowerOfHanoi.checkIfAllButOnePegIsEmpty(TowerOfHanoi.board)).toEqual(-1)
  })

  it("Correctly finds that all the pegs are not empty", () => {
    TowerOfHanoi.move(0,1)
    TowerOfHanoi.move(0,2)
    expect(TowerOfHanoi.checkIfAllButOnePegIsEmpty(TowerOfHanoi.board)).toEqual(-1)
  })

  it("Correctly checks if peg is in order", () => {
    expect(TowerOfHanoi.checkIfPegIsInOrder([5,4,3,2,1])).toEqual(true)
  })

  it("Correctly checks if peg is NOT in order", () => {
    expect(TowerOfHanoi.checkIfPegIsInOrder([5,4,1,2,3])).toEqual(false)
  })

  it("Correctly judges that board is a winner", () => {
    expect(TowerOfHanoi.checkWinner([[],[5,4,3,2,1],[]])).toEqual(true)
  })

  it("Correctly judges that the board is a winner", () => {
    expect(TowerOfHanoi.checkWinner([[],[5,4,3,2,1],[]])).toEqual(true)
  })

  it("Correctly judges that board is NOT a winner bc not all pegs are empty", () => {
    expect(TowerOfHanoi.checkWinner([[],[5,4,3,],[2,1]])).toEqual(false)
  })

  it("Correctly judges that board is NOT a winner bc filled peg is starting peg", () => {
    expect(TowerOfHanoi.checkWinner([[5,4,3,2,1],[],[]])).toEqual(false)
  })


})