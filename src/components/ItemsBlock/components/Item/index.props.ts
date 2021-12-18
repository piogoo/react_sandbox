import { Item } from './../../../../types';

export interface ItemProps {
    item: Item, 
    onItemRemove: (id: number) => void,
    onSaveItem: (item: Item) => void,
};