import { Item } from './../../types';

export interface ItemsBlockProps {
    items: Item[],
    onItemRemove: (id: number) => void,
    onSaveItem: (item: Item) => void,
};