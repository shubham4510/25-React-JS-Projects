import React, {  useState } from 'react'
import QRCode from 'react-qr-code'

const QrCodeGenerator = () => {
    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')

    const handleGeneratQrCode = () => setQrCode(input)

  return (
    <div style={{height:"100vh",width:"100vw",textAlign:"center",paddingTop:"60px"}}>
        <h1>QR CODE GENERATOR</h1>
        <div>
            <input value={input} type="text" name='qr-code' placeholder='Enter your value here' onChange={e=>setInput(e.target.value)} />
            <button disabled={input && input.trim !== ''?false:true} onClick={handleGeneratQrCode}>Generate</button>
        </div>
        <div>
            <QRCode id='qr-code-value' value={qrCode} size={400} bgColor='#fff'/>
            </div>
    </div>
  )
}

export default QrCodeGenerator