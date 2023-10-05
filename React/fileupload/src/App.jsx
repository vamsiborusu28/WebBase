import { useState } from 'react'
import './App.css'
import Form from './form';
function App() {
  const [fileName,setFile] = useState(null);


  function AddFile(event){
      event.preventDefault();
      console.log(fileName);
      if(!fileName)
      {
        console.log(fileName);
        alert("No File is Selected");
        return;
      }
      const formData=new FormData();
      formData.append('image',fileName);
      // console.log(formData.image);
  }

  return (
    <>
    <form onSubmit={AddFile}>
      <input type="file" onChange={event =>{ 
        console.log(event.target.files);
        setFile(event.target.files[0]);
      }
    }></input>
      <button>Add Image</button>
    </form>
    <Form></Form>
    </>
  )
}

export default App
