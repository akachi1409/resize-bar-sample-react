import { PropsWithChildren } from 'react';

export interface IconBtnProps {
  backgroundColor: string,
  onClickCallback: (e: React.MouseEvent<HTMLElement>) => void
}

function IconBtn(props: PropsWithChildren<IconBtnProps>) {
  const css = 
    `
      .icon_btn > * {
        height: 24px!important;
        width: 24px!important;
        position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
      }

      .icon_btn > *:hover {
        fill: #F4981C;
        cursor: pointer;
      }
    `
  const styles: { [key: string]: React.CSSProperties } = {
    icon_btn: {
      height: 50,
      width: 50,
      lineHeight: 50,
      position: 'relative',
      textAlign: 'center',
      verticalAlign: 'middle',
      backgroundColor: props.backgroundColor,
      flex: 'none'
    }
  }

  return (
      <div className="icon_btn" style={styles.icon_btn}>
        {/* Icon Btn */}
        <style>
          {css}
        </style>
          {props.children}
      </div>
  );
}

//<props.iconReactComponent />
 //         <IconLogo className="icon_btn__inner" fill='white' stroke='white' height={24} width={24} />

export default IconBtn;