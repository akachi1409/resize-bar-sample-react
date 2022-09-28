import { useEffect } from "react";
import { WidthAndHeight } from "../../../services/interfaces";

function S2(props: WidthAndHeight) {

  const styles: { [key: string]: React.CSSProperties } = {
    S2: {
      backgroundColor: 'green',
      // width: props.width,    // should be a state - so it triggers rerender on change
      height: props.height,  // should be a state - so it triggers rerender on change
    }
  }

  useEffect(() => {
    //console.log("within S2 - props.width changed - rerender? width:" + styles.S2.width + "==" + props.width)
  }, [props.width]); // Only re-run the effect if count changes

  return (
    <div className="S2" style={{...styles.S2, width: props.width}}>
      {/* add all the other components here*/}
    </div>
  );
}

export default S2;
