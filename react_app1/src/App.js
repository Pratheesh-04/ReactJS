import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class = "body">
      <div id = "main">
        <i><b><h1>This is full-stack !!</h1></b></i>
        <i><h2>Pratheeshwaran S</h2></i>
        <b><i><p>Artificial Intelligence and Data Science</p></i></b>
        <b><i><p id = "hello"></p></i></b>
        <div class="year">
            <button onclick="first()" class="option">In 1st year</button>
            <button onclick="second()" class="option">In 2nd year</button>
            <button onclick="third()" class="option">In 3rd year</button>
            <button onclick="final()" class="option">In final year</button>
        </div>
      </div>

      <div  class = "image" >
        {/* <img src="./assets/IMG_20230331_185606 (1).jpg" alt="me"> */}
      </div>

      <div> 
        <u><i><h3>Education:</h3></i></u>

        <ul>
            <li>10th - Lotus Matric Higher Secondary School </li>
            <li>12th - Lotus Matric Higher Secondary School</li>
            <li>UG - Kumaraguru College of Technology</li>
        </ul>

        <u><i><h3>Skills:</h3></i></u>
        <ol type="i">
            <li>Python</li>
            <li>Machine Learning</li>
            <li>Data Science</li>
            <li>HTML</li>
            <li>CSS</li>
        </ol>

        <u><i><h3>Contact me:</h3></i></u>
        <ul>
            <li><a href="https://www.linkedin.com/in/pratheeshwaran-s-628ab0242" target="_blank">Linkedin</a></li>
            <li><a href="https://www.instagram.com/pratheeshwaran2004/" target="_blank">Instagram</a></li>
            <li><a href="https://github.com/Pratheesh-04" target="_blank">Github</a></li>
        </ul>
      </div> 

      <div class="grid-container" >
        <div class="grid-items">Project 1</div>
        <div class="grid-items">Project 2</div>
      </div>

      <div class="flex-container" >
        <div class="flex-items">Project 3</div>
        <div class="flex-items">Project 4</div>
      </div>

      <button onclick="window.print()" class="print">Print this page</button>     
    </div>
    
        

  );
}

export default App;
