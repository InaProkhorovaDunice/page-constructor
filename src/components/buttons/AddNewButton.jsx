import React, { useState, useCallback } from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { setBlocks } from '../../redux/action';
import {PlusOutlined} from '@ant-design/icons';
import { Select } from 'antd';
import 'antd/dist/antd.css';
const { Option } = Select;

const AddNewButton = ({ index }) => {
    const dispatch = useDispatch();
    const [showSelect, setShowSelect] = useState(false);

    const handleChange = useCallback((value) => {
        setShowSelect(false);
        const payload = {
            type: value,
            index,
        }
        dispatch(setBlocks(payload));
    }, []);

    const changeSelectVisibility = () => {
        setShowSelect(!showSelect);
    }

    return (
        <div className={'add-new-block'}>
            <Button onClick={changeSelectVisibility}>
                <PlusOutlined />
            </Button>
            {showSelect &&
                <Select style={{ width: 220 }} onChange={e => handleChange(e)} placeholder={"Select block type"}>
                    <Option value="title" key={'title'}>Title</Option>
                    <Option value="text" key={'text'}>Text</Option>
                    <Option value="image" key={'image'}>Image</Option>
                </Select>
            }
        </div>
    )
};

export default React.memo(AddNewButton);