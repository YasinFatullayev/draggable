import { createRef, useEffect, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

const DraggableWrapper = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  position: relative;
  .draggable-wrapper {
    min-height: 50vh;
    background-color: #5a595965;
  }
`;

const Draggable = () => {
//   const [imageSrc,setImageSrc]=useState<string>();
  const [itemsState, setItemsState] = useState<any>([
    // { id: "1", x: 0, y: 0, width: "500px", height: "100px" },
    // { id: "2", x: 60, y: 60, width: "500px", height: "100px" },
    // { id: "3", x: 160, y: 160, width: "500px", height: "100px" },
  ]); //coming from datasource
  const [refState, setRefState] = useState<any>();
  const elementsRef = useRef(itemsState.map(() => createRef()));
  

  useEffect(() => {
    //setRefState(elementsRef);
    const element = elementsRef ?.current;
    if (!element) return;
    //Do something when the element is resized
    const observer = new ResizeObserver((resizedElement: any) => {
      const elementId = resizedElement[0]?.target?.id;
      const elementWidth = resizedElement[0]?.contentRect?.width;
      const elementHeight = resizedElement[0]?.contentRect?.height;
      console.log(elementId,elementWidth,elementHeight)
      //console.log(resizedElement[0]);
      const index = itemsState.findIndex((item: any) => item.id === elementId);
      let updated = [...itemsState];
      updated[index].height = elementHeight + "px";
      updated[index].width = elementWidth + "px";
      updated[index].id = elementId;
      setItemsState(updated);
      console.log(itemsState)
    });
    element?.map((element: any, index: any) =>
      observer.observe(element?.current)
    );
    // Cleanup the observer by unobserving all elements
    return () => {
      observer.disconnect();
    };
  }, []);

  const onDrag = (e: any, itemid: string) => {
    const index = itemsState.findIndex((item: any) => item.id === itemid);
    let updated = [...itemsState];
    updated[index].x = e?.pageX;
    updated[index].y = e?.pageY;
    //updated[index].id=itemid;
    setItemsState(updated);
  };
  const onDragEnd=(e:any,itemid:string)=>{
    const index = itemsState.findIndex((item: any) => item.id === itemid);
    let updated = [...itemsState];
    updated[index].x = e?.pageX;
    updated[index].y = e?.pageY;
    setItemsState(updated);
}
  const allowDrop = (e: any) => {
    e.preventDefault();
  };
  const addNewBox=(e:any)=>{
    console.log(e)
    setItemsState([...itemsState,{ id: itemsState.length+1, x: 0, y: 0, width: "500px", height: "100px" }])
   // setRefState(elementsRef);
  }
  return (
    <DraggableWrapper>
        <button onClick={(e:any)=>addNewBox(e)}>Add New</button>
      <div className="draggable-wrapper">
        {itemsState.map((item: any, index: any) => {
          return (
            <div
              id={`${item.id}`}
              key={item.id}
              ref={elementsRef.current[index]}
              draggable={true}
              onDrag={(e) => onDrag(e, item.id)}
              onDragOver={allowDrop}
              onDragEnd={(e)=>onDragEnd(e,item.id)}
              style={{
                position: "absolute",
                top: item.y + "px",
                left: item.x + "px",
                resize: "both",
                border: "2px solid",
                overflow: "auto",
                height: item?.height,
                width: item?.width,
                // background:`url(${imageSrc})`,
              }}
            >{`TOP: ${item.y}px  LEFT:${item.x}px  Width:${item.width} Height:${item.height}`}
                {/* <input type="text" onChange={(e:any)=>setImageSrc(e?.target?.value)}/> */}
            </div>
          );
        })}
      </div>
    </DraggableWrapper>
  );
};

export default Draggable;
