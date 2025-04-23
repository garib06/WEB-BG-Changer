import { useState } from 'react'
import './App.css'


function App() {

  function removeimg(){
    
    document.body.style.backgroundImage = 'none';

  }
  
  function changeColor() {
    let color = document.getElementById("color").value;
    document.body.style.backgroundColor = color;
    removeimg()
  }


  function changeImage() {
    let imgInput = document.getElementById("img");
    let imgFile = imgInput.files[0];
    let imgUrl = URL.createObjectURL(imgFile);
    document.body.style.backgroundImage = `url(${imgUrl})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center'; 
    document.body.style.backgroundAttachment = 'scroll';
  }

  return (
    <>
    <div className=''>
      <h1 className=''>Enter the color to change</h1>
      <input type="text" name="input_color" id="color" placeholder='Enter color name or code to change' className='bg-white text-black w-70 border-2 rounded' />
      <button className='button bg-white text-black border-2  rounded-4xl' onClick={changeColor}>Change</button>
      <p><b>OR</b></p>
      <h1>Upload the file to change background</h1>
      <input type="file" accept='image/*' name="input_img" id="img" placeholder='Upload image to Chnage background' className='bg-white text-black w-70 border-2 rounded' />
      <button className='button bg-white text-black border-2  rounded-4xl' onClick={changeImage}>Change</button>


      <ol className='ol  w-150 h-15 border-2 rounded-2xl'>
        <li><button className='button bg-red-600 text-black  border-transparent  rounded-4xl align-middle' type="button" onClick={()=> {document.body.style.backgroundColor = "red", removeimg()}} >Red</button></li>
        <li><button className='button bg-blue-600 text-black  border-transparent   rounded-4xl' type="button" onClick={()=> {document.body.style.backgroundColor = "blue", removeimg()}}>Blue</button></li>
        <li><button className='button bg-yellow-400 text-black  border-transparent   rounded-4xl' type="button" onClick={()=> {document.body.style.backgroundColor = "yellow", removeimg()}}>Yellow</button></li>
        <li><button className='button bg-green-500 text-black  border-transparent   rounded-4xl' type="button" onClick={()=> {document.body.style.backgroundColor = "green",removeimg}}>Green</button></li>
        <li><button className='button bg-white  text-black border-2   rounded-4xl' type="button" onClick={()=> {document.body.style.backgroundColor = "white",removeimg}}>White</button></li>
        <li><button className='button bg-black  text-white border-transparent   rounded-4xl' type="button" onClick={()=> {document.body.style.backgroundColor = "black",removeimg}}>Black</button></li>
      </ol>

    
    </div>
  
    </>
  )
}

export default App