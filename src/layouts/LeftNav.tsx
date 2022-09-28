import IconBtn from "../components/Button";
import { WidthAndHeight } from "../services/interfaces";

import { ReactComponent as IconKeywordList } from './../assets/icon_tool_keyword_list.svg';
import { ReactComponent as IconLogout } from './../assets/icon_logout.svg';

function LeftNav(props: WidthAndHeight) {
  let backgroundColor = "#222F3F"

  const styles: { [key: string]: React.CSSProperties } = {
    left_nav: {
      backgroundColor: backgroundColor,
      width: props.width,
      height: props.height,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }

  const onClickCallback = () => {
    console.log("Got clicked - callback within leftnay yeay")
  }
  
  return (
    <div className="left_nav" style={styles.left_nav}>
      {/* add all the other components here - buttons*/}
      <IconBtn backgroundColor={backgroundColor} onClickCallback={onClickCallback} >
        <IconKeywordList fill='#F4981C' stroke='none' onClick={() => console.log("click 1")} />
      </IconBtn>
      <IconBtn backgroundColor={backgroundColor} onClickCallback={onClickCallback}>
        <IconLogout fill='white' stroke='none' onClick={() => console.log("click 2")}/>
      </IconBtn>
    </div>
  );
}

export default LeftNav;
