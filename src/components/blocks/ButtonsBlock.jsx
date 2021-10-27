import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { copyBlock, changeBlockOrder } from '../../redux/action';
import BaseButton from '../buttons/BaseButton';

const ButtonsBlock = ({ index, blockListLength }) => {
    const dispatch = useDispatch();
    const buttonModes = ['up', 'down', 'copy'];

    const editBlockList = useCallback((mode) => {
        if(mode === 'copy') {
            dispatch(copyBlock(index));
        } else {
            dispatch(changeBlockOrder({ index, direction: mode }));
        }
    }, []);

    const checkIsDisabled = (mode) => {
        return mode === 'up' && index === 0 || mode === 'down' && index === blockListLength - 1;
    };

    return (
        <div className={"button-group"}>
            {buttonModes.map((mode, index) =>
                <BaseButton key={index} mode={mode} editBlockList={editBlockList} isDisabled={checkIsDisabled(mode)}/>
            )}
        </div>
    )
};

export default ButtonsBlock;