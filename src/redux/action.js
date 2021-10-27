import { createActions } from 'redux-actions';

import {
    CHANGE_MODE,
    SET_BLOCKS,
    UPDATE_BLOCK,
    CHANGE_BLOCK_ORDER,
    COPY_BLOCK,
} from './constants';

export const {
    changeMode,
    setBlocks,
    updateBlock,
    changeBlockOrder,
    copyBlock,
} = createActions(
    CHANGE_MODE,
    SET_BLOCKS,
    UPDATE_BLOCK,
    CHANGE_BLOCK_ORDER,
    COPY_BLOCK,
);