import { inherits } from 'util';
import { ReactComponent as LogoFullWhte } from './../../../assets/logo_full_blue.svg';

function TopBar() {
  const styles: { [key: string]: React.CSSProperties } = {
    top_bar: {
      backgroundColor: 'white',
      height: 50,
      width: '100vw',
      position: 'relative',
      WebkitBoxShadow: '0px 5px 5px 0px rgba(0,0,0,0.25)', 
      boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.25)',
      display: 'flex',
      padding: 10
    },
    top_bar__logo: {
      height: '100%',
      width: 200,
      textAlign: 'center',
      verticalAlign: 'middle'
    },
    top_bar__logo__svg: {
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      height: 50,
      width: 200
    }
  }
    
  return (
    <div className="top_bar" style={styles.top_bar}>
      <div style={styles.top_bar__logo}>
        <LogoFullWhte fill='white' stroke='none' style={styles.top_bar__logo__svg} />
      </div>
    </div>
  );
}

export default TopBar;
