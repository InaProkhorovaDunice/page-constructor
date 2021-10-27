import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { changeMode } from '../../redux/action';
import 'antd/dist/antd.css';

const ToggleModeButton = () => {
    const dispatch = useDispatch();

    const toggleMode = () => {
        dispatch(changeMode());
    };

    return (
        <Button onClick={toggleMode}>Edit/Preview</Button>
    )
};

export default React.memo(ToggleModeButton);