import { WidthAndHeight } from "../../../services/interfaces";

function S3(props: WidthAndHeight) {

  const styles: { [key: string]: React.CSSProperties } = {
    S3: {
      backgroundColor: 'yellow',
      width: props.width,
      height: props.height,
    }
  }

  return (
    <div className="S3" style={styles.S3}>
      {/* add all the other components here*/}
    </div>
  );
}

export default S3;
