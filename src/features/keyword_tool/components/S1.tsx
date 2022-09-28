import { useEffect } from "react";
import { WidthAndHeight } from "../../../services/interfaces";

function S1(props: WidthAndHeight) {

  const styles: { [key: string]: React.CSSProperties } = {
    S1: {
      backgroundColor: 'gray',
      width: props.width,    // should be a state - so it triggers rerender on change
      height: props.height,  // should be a state - so it triggers rerender on change
    }
  }

  useEffect(() => {
    //console.log("within S1 - props.width changed - rerender? width:" + styles.S1.width + "==" + props.width)
  }, [props.width]); // Only re-run the effect if count changes

  return (
    <div className="s1" style={{...styles.S1, width: props.width}}>
      {/* add all the other components here*/}
    </div>
  );
}

export default S1;
