import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ToggleModeButton from './buttons/ToggleModeButton';
import AddNewButton from './buttons/AddNewButton';
import BaseBlock from './blocks/BaseBlock';
import ButtonsBlock from './blocks/ButtonsBlock';
import { setLocalStorageItem } from '../utils';

const MainPage = () => {
    const showEdit = useSelector(state => state.showEdit);
    const blocks = useSelector(state => state.blocks);

    useEffect(() => {
        if(blocks.length) {
            setLocalStorageItem('blocks', blocks);
        }
    }, [blocks]);

    return (
        <div>
            <div className="header">
                <ToggleModeButton />
            </div>
            {showEdit && <AddNewButton index={0}/>}
            {blocks?.map((block, index) =>
                <div key={index}>
                    <div className={`block-container ${!showEdit && 'preview-container'}`}>
                        {showEdit && <ButtonsBlock index={index} blockListLength={blocks.length}/>}
                        <BaseBlock index={index} type={block.type} innerValue={block.innerValue} />
                    </div>
                    {showEdit && <AddNewButton index={index + 1}/>}
                </div>)
            }
        </div>
    )
};

export default React.memo(MainPage);