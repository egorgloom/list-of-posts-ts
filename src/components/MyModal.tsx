import React, { FC } from 'react';

interface IMyModal {
    children?: React.ReactNode,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    visible: boolean,

}

const MyModal: FC<IMyModal> = ({children, visible, setVisible}) => {

    const rootStyles = ['myModal']
    if(visible) {
        rootStyles.push('active')
    }
  return (
    <div className={rootStyles.join(' ')} onClick={()=> setVisible(false)}>
        <div className='myModalContent' onClick={(e)=> e.stopPropagation()} >
            {children}
        </div>
    </div>
  );
};

export default MyModal;