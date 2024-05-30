import React from "react";
import { useState, useEffect } from "react";


export default function App() {


  const [counter, setCounter] = useState(0)

  const [sync, setSync] = useState(false)


  useEffect(() => {

    console.log("rendering.....")

    document.title = "UseEffect " + sync    //counter

  }, [sync]) //counter


  //api data fetching start

  //sync method start

  // useEffect(() => {

  //   fetch("https://jsonplaceholder.typicode.com/users", {

  //     method: "GET",
  //   })

  //     .then((response) => {

  //       return response.json();

  //     })

  //     .then((data) => {

  //       console.log(data)

  //     })

  //     .catch((err) => {

  //       console.log(err)

  //       console.log("Invalid End Points")

  //     })

  // }

  // )

  //sync methoD END

  //async methoad start

  useEffect(() => {

    const controller =new  AbortController();
    const signal = controller.signal;


    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",

          { signal }

        );
        const json = await response.json();
        console.log(json);
        // console.log(controller.signal);
      } catch (err) {
        console.log(err);
      }
    }

    fetchUsers();

    return()=>{
      controller.abort();
    };

  });



  //async method end


  //api data fetching end


  return (

    <div>


        <div>You clicked the button {counter} times.</div> <br />


      <button onClick={() => setCounter((counter) => counter + 1)}> Click me</button>


      <button onClick={() => setSync((current) => !current)}> Sync</button>


    </div>


  )


}