import { WidthAndHeight } from '../../services/interfaces';
import TopBar from './layouts/TopBar';
import LeftNav from '../../layouts/LeftNav';
import S1 from './components/S1';
// eslint-disable-next-line
import { useEffect, useRef, useState } from 'react';
import S2 from './components/S2';
import S3 from './components/S3';
// import S3Filter from './components/S3Filter';
import ResizerHorizontal, { ResizerHorizontalProps } from '../../components/Resizer';


function KeywordTool(props: WidthAndHeight) {
  const TOP_BAR_HEIGHT: number = 70;
  const LEFT_NAV_WIDTH: number = 50;
  const styles: { [key: string]: React.CSSProperties } = {
    keyword_tool: {
      width: props.width,
      height: props.height
    },
    container: {
      width: props.width,
      height: props.height - TOP_BAR_HEIGHT,
      display: 'flex',
      flexWrap: 'nowrap',
    }
  }


  const propsLeftNav: WidthAndHeight = {
    width: LEFT_NAV_WIDTH,
    height: props.height - TOP_BAR_HEIGHT
  }

  const [propsS1, updateS1Props] = useState({
    width: ((props.width - LEFT_NAV_WIDTH) / 4) - 8,  // initial values -> shall be updated via callback resizerHorizontalS1ToS2XChange
    height: props.height - TOP_BAR_HEIGHT             // initial values 
  });  
  const [propsS2, updateS2Props] = useState({
    width: ((props.width - LEFT_NAV_WIDTH) / 4),      // initial values -> shall be updated via callback resizerHorizontalS1ToS2XChange
    height: props.height - TOP_BAR_HEIGHT             // initial values
  }); 
  // eslint-disable-next-line
  const [s3Width, setS3Width] = useState<number>((props.width - LEFT_NAV_WIDTH) / 4);
  // const [s3FilterWidth, setS3FilterWidth] = useState<number>((props.width - LEFT_NAV_WIDTH) / 4);
  const propsS3: WidthAndHeight = {
    width: s3Width,
    height: props.height - TOP_BAR_HEIGHT
  }
  // const propsS3FilterWidth: WidthAndHeight = {
  //   width: s3FilterWidth,
  //   height: props.height - TOP_BAR_HEIGHT
  // }

  /** +1 means increase S1 width, -1 means decrease S1 width */
  const resizerHorizontalS1ToS2XChange = (numberOfPixelToMove: number) => {
    // if (numberOfPixelToMove != 0) {
    //   updateS1Props({...propsS1, width: propsS1.width + numberOfPixelToMove})
    //   updateS2Props({...propsS2, width: propsS2.width - numberOfPixelToMove})
    // }
    // eslint-disable-next-line
    if (numberOfPixelToMove != 0) {
      updateS1Props({...propsS1, width: numberOfPixelToMove});
      updateS2Props({...propsS2, width: (props.width - LEFT_NAV_WIDTH) / 2 - 8 - numberOfPixelToMove});
    }
  }

  const propsResizerHorizontalS1ToS2: ResizerHorizontalProps = {
    height: props.height - TOP_BAR_HEIGHT,
    callbackXChange: resizerHorizontalS1ToS2XChange    /** <--------------- This is the callback function given to child ResizerHorizontal, to get the change in pixel back to this parent component. */
  }

  return (
    <div className="keyword_tool" style={styles.keyword_tool}>
      <TopBar />
      <div style={styles.container}>
        <LeftNav {...propsLeftNav} />
        <S1 width={propsS1.width} height={propsS1.height} />  {/** <----------- This one should change in size based on the  */}
        <ResizerHorizontal {...propsResizerHorizontalS1ToS2} />
        <S2 width={propsS2.width} height={propsS2.height} />
        <S3 {...propsS3} />
        {/*<S3Filter {...propsS3FilterWidth} />*/}
      </div>
    </div>
  );
}

export default KeywordTool;
