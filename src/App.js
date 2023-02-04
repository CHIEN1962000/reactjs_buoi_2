import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function DemoComponet(props) {
    return (
      <div>
        <div>Đây là tuổi: {props.age}</div>
        <div>Đây là tên: {props.displayName}</div>
      </div>
    )
}

function App() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('chien');

  const tangAge = () => {
    setAge(age + 1);
  }

  const [userInput, setUserInput] = useState("");
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleButtonClick = (e) => {
    alert(userInput)
  }

return (
  <div>
    <div>Thực hành 1</div>
    <HelloWorld />
    <div>--------------------</div>
    <div>Thực hành 2</div>
    <Header></Header>
    <div>Đây là content</div>
    <Footer></Footer>
    <div>--------------------</div>
    <div>Thực hành 3</div>
    <div className='container'>
        <div>{age}</div>
        <div>Tăng age lên 1</div>
        <div onClick={tangAge}>Tăng age </div>
        <DemoComponet age={age} displayName={name}></DemoComponet>
    </div>
    <div>--------------------</div>
    <div>Thực hành 4</div>
    <input type="text" name="user" placeholder="Please type somthing" onChange={handleInputChange}/>
    <button onClick={handleButtonClick}>Print</button>
  </div>
);
}
export default App;