import { useState } from "react"

const RandomColor = () => {
    const [colorType, setColorType] = useState(`RGB`)
    const [color, setColor] = useState("#ffff00")
   

    const randomColorUtils = (length)=>{
      return  Math.floor(Math.random()*length)
    }

    const generateRandomRgbColor = ()=>{
        const r = randomColorUtils(266)
        const g = randomColorUtils(266)
        const b = randomColorUtils(266)

        const color = `rgb(${r},${g},${b})`
        setColorType(`RGB`)
        setColor(color)
    }

    const generateRandomHexColor  = ()=>{
        const arr = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

        let color = "#"

        for(let i = 0;i<6;i++){
            color += arr[randomColorUtils(arr.length)]
        }
        setColorType(`HEX`)
        setColor(color);
    }

    const generateRandomColor  = ()=>{
        const r = randomColorUtils(266)
        const g = randomColorUtils(266)
        const b = randomColorUtils(266)
        setColorType("")
        setColor(`rgb(${r},${g},${b})`)
    }

  return (
    <div className="container"
    style={{backgroundColor:color}}>
        
        <div className="random-color" style={{height:"100%",backgroundColor:"inherit",position:"relative"}}>
        
        <button className="btn" onClick={generateRandomRgbColor}>Generate Random RGB Color</button>
            <button className="btn" onClick={generateRandomHexColor}>Generate Random HEX Color</button>
            <button className="btn" onClick={generateRandomColor}>Generate Random  Color</button>
           
            <div style={{position:"absolute",top:"45%",left:"45%"}}>
            <h3>{colorType}</h3>
            <h4>{color}</h4>
            </div>
           
        </div>
    </div>
  )
}

export default RandomColor