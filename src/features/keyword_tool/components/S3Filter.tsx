import { WidthAndHeight } from "../../../services/interfaces";

function S3Filter(props: WidthAndHeight) {

  const styles: { [key: string]: React.CSSProperties } = {
    S3Filter: {
      backgroundColor: 'orange',
      width: props.width,
      height: props.height,
    }
  }

  return (
    <div className="S3Filter" style={styles.S3Filter}>
      {/* add all the other components here*/}
    </div>
  );
}

export default S3Filter;
