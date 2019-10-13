let cardData = [
  ['user text example 1', 'user text example 2', 'user text example 3', null, null],
  [null, null, null, null, null],
  [null, null, 'free space', null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
];

function bingoInit() {
  setTimeout(function(){
    console.log(inputCardLoaded, textCardLoaded)
    if (typeof textCardLoaded == 'undefined' || typeof inputCardLoaded == 'undefined') {
      bingoInit();
    } else{
      setUp();
    }
  }, 100);
}

function setUp() {
  createTable(cardData, 'inputsContainer', createInputCard )
  createTable(cardData, 'bingoCardContainer', createCard )

  const saveButton = document.getElementById('saveButton').addEventListener('click', handleSave)
}

function clearTables() {
  const inputs = document.getElementById('inputsContainer').innerHTML = ''
  const bingo = document.getElementById('bingoCardContainer').innerHTML = ''

  const saveButton = document.getElementById('saveButton').removeEventListener('click', handleSave)

}

function handleSave(){
  const inputs = document.getElementsByClassName('input-cell')
  let rowLength = 5;
  let newCardData=[];
  let tempCardRow=[];

  for(let i=0; i < inputs.length; i++){
    const id = Math.floor(i / rowLength) +'-'+ (i % rowLength)
    const input = document.getElementById(id)
    tempCardRow.push(input.value || null)
    // console.log(input.value)

    if( (i+1) % (rowLength) === 0){
      newCardData.push(tempCardRow)
      tempCardRow=[]
    }
  }

  cardData = newCardData
  clearTables()
  setUp()
}


function createTable(data, containerId, tableFunction){
  const table = tableFunction(data)
  const container = document.getElementById(containerId)
  container.appendChild(table)
}
// @TODO function that sets cookies



// function that changes the color of a square (inside card) possibly separate file
