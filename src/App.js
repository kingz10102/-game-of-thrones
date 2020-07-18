import React  from 'react'
import axios from 'axios'



let one = "http://anapioficeandfire.com/api/characters/16"
let two = "http://www.anapioficeandfire.com/api/houses/378"
let three = " http://www.anapioficeandfire.com/api/houses/229"
let four = "http://www.anapioficeandfire.com/api/houses/17"
let five = "http://www.anapioficeandfire.com/api/characters/901"
let six = "http://www.anapioficeandfire.com/api/houses/362"
let seven = "http://www.anapioficeandfire.com/api/characters/232"

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);
const requestFour = axios.get(four);
const requestFive = axios.get(five);
const requestSix = axios.get(six);
const requestSeven = axios.get(seven);


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null

    }
  }
}

ComponentDidMount() {

  
  axios
  .all([requestOne, requestTwo, requestThree, requestFour, requestFive, requestSix, requestSeven])
  .then(
    axios.spread((...res) => {
      const requestOne = res[0];
      const requestTwo = res[1];
      const requestThree =res[2];
      const requestFour = res[3];
      const requestFive =res[4];
      const requestSix = res[5];
      const requestSeven = res[6]

    })
  )
  .catch(erros => 
  
    console.error(errors);
});

export default App;