import React, { useState } from "react";
import axios from "axios"; 
// Importing toastify module
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddUrlComponent = () => {
  const [url, setUrl] = useState("");

    
  const onSubmit = e => {
    e.preventDefault();

    if (!url) {
        toast.error('Please enter URL')
      return;
    }

    axios
      .post("http://localhost:3333/short", { origUrl: url })
      .then(res => {
        console.log(res.data);
      })
        .catch(err => {
          toast.error("Error happened")
        console.log(err.message);
      });
      toast.success("URL is shortened")
    setUrl("");
  };


  return (
    <div>
      <main>
        <section className="w-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="mb-2 fs-1">URL Shortener</h1>
          <form className="w-50" onSubmit={onSubmit}>
            <input
              className="w-100 border border-primary p-2 mb-2 fs-3 h-25"
              type="text"
              placeholder="http://samplesite.com"
              value={url}
              onChange={({ target }) => setUrl(target.value)}
            />
            <div className="d-grid gap-2 col-6 mx-auto">
              <button type="submit" className="btn m-5" style={{backgroundColor:"green",color:"white"}}>
               <strong> Shorten!</strong>
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default AddUrlComponent;