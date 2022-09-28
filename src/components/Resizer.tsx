// eslint-disable-next-line
import React, { useContext, useState, useEffect, useRef } from "react";

export interface ResizerHorizontalProps {
  height: number,
  callbackXChange: ((xChange: number) => void)  // minus means resizer goes left, plus means resizer goes right
}

/**
 * Note: Takes 4 pixel in width
 * Requires: Parent should be default position: 'static'
 * @param props: ResizerHorizontalProps
 * @returns 
 */
function ResizerHorizontal(props: ResizerHorizontalProps) {

  const styles: { [key: string]: React.CSSProperties } = {
    resizerHorizontal: {
      width: 4,
      height: props.height,
      backgroundColor: '#E9EAEC',
      position: 'relative',
      bottom: 0,
      left: 0,
      cursor: 'ew-resize',
      zIndex: 100
    }
  }

  const css = 
    `
      .resizer_horizontal:hover {
        -webkit-box-shadow: 2px 0px 0px 0px rgba(233,234,236,1) !important;
        -moz-box-shadow: 2px 0px 0px 0px rgba(233,234,236,1) !important;
        box-shadow: 2px 0px 0px 0px rgba(233,234,236,1) !important;
      }
    
    `

  //const [clientX, setClientX] = useState(-1)  
  const clientX = useRef<number>(-1)

  const resizeHorizontally = (event: MouseEvent) => {
    //console.log(event)
    // eslint-disable-next-line
    if (clientX.current == -1) {
      // console.log("clientX: " +  clientX.current + "|" + event.clientX)
      // console.log("event.clientX: " + event.clientX)
      clientX.current = event.clientX 
    } else {
      // console.log("clientX: " +  clientX.current + "|" + event.clientX)
      // console.log("event.clientX - clientX: " + (event.clientX - clientX))
      // props.callbackXChange(event.clientX - clientX.current)
      props.callbackXChange(event.clientX)
      //setClientX(event.clientX)
      clientX.current = event.clientX
    }
  }

  const onMouseUp = (event: MouseEvent) => {
    console.log("onMouseUp")
    window.removeEventListener('mousemove', resizeHorizontally);
    window.removeEventListener('mouseup', onMouseUp);
  }

  const onMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    console.log("onMouseDown")
    window.addEventListener('mousemove', resizeHorizontally);
    window.addEventListener('mouseup', onMouseUp);
  }


  return (
    <div className="resizer_horizontal" style={styles.resizerHorizontal} onMouseDown={onMouseDown}>
      <style>
        {css}
      </style>
      {/* add all the other components here*/}
    </div>
  );
}

export default ResizerHorizontal;
