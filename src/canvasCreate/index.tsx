import { CSSProperties, useEffect, useState } from "react";

const CanvasMaker = ({canvasItem}:any) => {
    const [canvasHeight,setCanvasHeight]=useState<string>();
    const [canvasWidth,setCanvasWidth]=useState<string>();
    const [canvasStyle,setCanvasStyle]=useState<CSSProperties>();
    const [canvasScale,setCanvasScale]=useState<number>();
    const [backgroundColor,setBackgroundColor]=useState<string>();
    // useEffect(()=>{
    //     setCanvasStyle({display:'flex',alignSelf:'center',height:canvasHeight,width:canvasWidth,border:'1px solid black',margin:'1em',padding:'1em',transform:`scale(${canvasScale})`,
    // backgroundColor:backgroundColor});
    // },[canvasStyle,canvasHeight,canvasWidth,canvasScale,backgroundColor])
    
    const createCanvas=(e:any)=>{
        //setCanvasStyle({display:'flex',height:canvasHeight,width:canvasWidth,border:'1px solid black',margin:'1em',padding:'1em',transform:`scale(${canvasScale})`});
        setCanvasStyle({display:'flex',alignSelf:'center',height:canvasHeight,width:canvasWidth,border:'1px solid black',margin:'1em',padding:'1em',transform:`scale(${canvasScale})`,backgroundColor:backgroundColor});
        console.log(canvasStyle)
    }
  return (
    <div className="wrapper" style={{display:'flex',flexDirection:'column',alignContent:'center',justifyContent:'center'}}>
        <div style={{display:"flex",justifyContent:'center',padding:'1em',margin:'1em'}}>
        <label htmlFor="canvasHeight" >
            Height:
            <input type="text" id="canvasHeight" onChange={(e:any)=>setCanvasHeight(e?.target?.value)} defaultValue={canvasHeight}/>
        </label>
        <label htmlFor="canvasWidth">
            Width:
            <input type="text" id="canvasWidth" onChange={(e:any)=>setCanvasWidth(e?.target?.value)} defaultValue={canvasWidth}/>
        </label>
        <label htmlFor="canvasScale">
            Scale:
            <input type="number" id="canvasScale" onChange={(e:any)=>setCanvasScale(e?.target?.value)} defaultValue={canvasScale}/>
        </label>
        <label htmlFor="backgroundColor">
            Bacground:
            <input type="text" id="backgroundColor" onChange={(e:any)=>setBackgroundColor(e?.target?.value)} defaultValue={backgroundColor}/>
        </label>
        <button onClick={(e)=>createCanvas(e)}>Create A Canvas</button>
        </div>
        <div className="canvas" style={canvasStyle}>
            {canvasHeight?canvasItem:''}
        </div>
    </div>
  );
};

export default CanvasMaker;
