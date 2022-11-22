// import { useRef, useEffect, useState } from "react";
// import useEth from "../../contexts/EthContext/useEth";


// function Contract({ value, text, addressVoter }) {
  // const spanEle = useRef(null);
  // const [EventValue, setEventValue] = useState("");
  // const [EventTxtValue, setEventTxtValue] = useState("")
  // const [oldEvents, setOldEvents] = useState("");
  // const [oldTxtEvents, setOldTxtEvents]=useState("")

  // const { state: { contract } } = useEth();

  // useEffect(() => {
  //   (async function () {

  //      let oldEvents = await contract.getPastEvents('ValueChanged', {
  //         fromBlock: 0,
  //         toBlock: 'latest'
  //       });
  //       let oldies=[];
  //       oldEvents.forEach(event => {
  //           oldies.push(event.returnValues._val);
  //       });
  //       setOldEvents(oldies);

  //       await contract.events.ValueChanged({fromBlock:"earliest"})
  //       .on('data', event => {
  //         let lesevents = event.returnValues._val;
  //         setEventValue(lesevents);
  //       })          
  //       .on('changed', changed => console.log(changed))
  //       .on('error', err => console.log(err))
  //       .on('connected', str => console.log(str))
  //   })();
  // }, [contract])

  // useEffect(() => {
  //   (async function () {

  //      let oldTxtEvents= await contract.getPastEvents('TextChanged', {
  //         fromBlock: 0,
  //         toBlock: 'latest'
  //       });
  //       let oldTxt=[];
  //       oldTxtEvents.forEach(event => {
  //           oldTxt.push(event.returnValues._greeter);
  //       });
  //       setOldTxtEvents(oldTxt);

  //       await contract.events.TextChanged({fromBlock:"earliest"})
  //       .on('data', event => {
  //         let lesTxtevents = event.returnValues._greeter;
  //         setEventTxtValue(lesTxtevents);
  //       })          
  //       .on('changed', changed => console.log(changed))
  //       .on('error', err => console.log(err))
  //       .on('connected', str => console.log(str))
  //   })();
  // }, [contract])

  // return (

  //   <>
   
          

