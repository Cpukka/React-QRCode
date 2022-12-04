import { useState } from "react";
import QRCode from 'qrcode';



function App() {
  const [url,setUrl]=useState('');
  const [qrcode,setQrcode]=useState('');

  const GenerateQRCode=()=> {
    QRCode.toDataURL(url,(err, url)=>{
      if(err) return console.error(err)

      console.log(url)
      setQrcode(url)
    })
  }
  
  return (
    <div className="App">
      <h1>Chima QR code Generator</h1>
      <input type="text"
      placeholder="e.g. https://cgist.com.ng"
      value={url} onChange={(evt)=> setUrl(evt.target.value)}></input>
      <button onClick={GenerateQRCode}>Generator</button>
      {
        qrcode && <>
        <img src={qrcode} />
        <a href={qrcode} download="qrcode.png">Download</a></>
      }
      
    </div>
  )
}

export default App;
