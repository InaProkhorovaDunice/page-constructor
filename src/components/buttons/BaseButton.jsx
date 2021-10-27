import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, CopyOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

const BaseButton = ({ mode, editBlockList, isDisabled }) => {
    const [icon, setIcon] = useState();

    const editBlocks = () => {
        editBlockList(mode);
    };

    useEffect(() => {
        if(mode) {
            if(mode === 'up') {
                setIcon(<ArrowUpOutlined />);
                return;
            }
            if(mode === 'down') {
                setIcon(<ArrowDownOutlined />);
                return;
            }
            if(mode === 'copy') {
                setIcon(<CopyOutlined />);
            }
        }
    }, [mode]);

    return (
        <Button onClick={editBlocks} disabled={isDisabled}>{icon}</Button>
    )
};

export default React.memo(BaseButton);