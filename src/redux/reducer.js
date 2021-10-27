import { handleActions } from 'redux-actions';
import {getLocalStorageItem} from "../utils";
import {
    changeMode,
    setBlocks,
    updateBlock,
    changeBlockOrder,
    copyBlock,
} from './action';

const initialState = {
    showEdit: true,
    blocks: getLocalStorageItem('blocks') || [],
};

const commonHandler = {
    [changeMode]: (state) => {
        return {...state, showEdit: !state.showEdit};
    },
    [setBlocks]: (state, {payload}) => {
        const newBlock = { type: payload.type, innerValue: '' };
        const blocks = [...state.blocks];
        if(!payload.index) {
            blocks.unshift(newBlock);
        } else {
            blocks.splice(payload.index, 0, newBlock);
        }

        return {...state, blocks: blocks};
    },
    [updateBlock]: (state, {payload}) => {
        const blocks = [...state.blocks];
        blocks[payload.index].innerValue = payload.innerValue || '';

        return {...state, blocks: blocks};
    },
    [changeBlockOrder]: (state, {payload}) => {
        const blocks = [...state.blocks];
        let firstIndex;
        let secondIndex;

        if(payload.direction === 'down') {
            firstIndex = payload.index;
            secondIndex = payload.index + 1;
        } else {
            firstIndex = payload.index - 1;
            secondIndex = payload.index;
        }
        blocks[firstIndex] = blocks.splice(secondIndex, 1, blocks[firstIndex])[0];

        return {...state, blocks: blocks};
    },
    [copyBlock]: (state, {payload}) => {
        const blocks = [...state.blocks];
        const targetBlock = blocks[payload];
        blocks.splice(payload + 1, 0, targetBlock);

        return {...state, blocks: blocks};
    },
}

export default handleActions(commonHandler, initialState);