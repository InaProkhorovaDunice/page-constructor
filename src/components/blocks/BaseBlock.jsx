import React, { useCallback, useState } from 'react';
import { Input, Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateBlock } from '../../redux/action';

const BaseBlock = ({ index, type, innerValue }) => {
    const dispatch = useDispatch();
    const showEdit = useSelector(state => state.showEdit);
    const [showEditField, setShowEditField] = useState(false);
    const [blockValue, setBlockValue] = useState();

    const saveNewValue = (e) => {
        e.stopPropagation();
        setShowEditField(false);
        dispatch(updateBlock({ index: index, innerValue: blockValue }));
        setBlockValue('');
    };

    const cancelEditValue = (e) => {
        e.stopPropagation();
        setShowEditField(false);
    };

    const changeBlockValue = useCallback((value) => {
        setBlockValue(value)
    }, []);

    return (
        <div className={`${type}-block base-block`} onClick={() => showEdit && setShowEditField(true)}>
            {showEditField
                ?
                <Space direction="vertical">
                    <Input
                        placeholder={type === 'image' ? 'Add image URL' : 'Add inner text'}
                        value={blockValue}
                        onChange={e => changeBlockValue(e.currentTarget.value)}
                    />
                    <Button onClick={saveNewValue}>Save</Button>
                    <Button onClick={cancelEditValue}>Cancel</Button>
                </Space>
                :
                <div>
                    {innerValue
                        ?
                        (type === 'image'
                        ?
                        <img src={innerValue} className={'image-container'} alt={'No image yet'}/>
                        :
                        <div>{innerValue}</div>)
                        :
                        'No data yet, click to add inner value.'
                    }
                </div>
            }
        </div>
    )
};

export default React.memo(BaseBlock);