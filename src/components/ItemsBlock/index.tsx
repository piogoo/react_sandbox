import React from 'react';
import Item from './components/Item';
import { ItemsBlockProps } from './index.props';

const ItemsBlock: React.FC<ItemsBlockProps> = ({
    items,
    onItemRemove,
    onSaveItem,
}) => (
    <div className="items-container">
        {!!items?.length && 
            items.map(item => 
                <Item 
                    key={item.id} 
                    item={item} 
                    onItemRemove={onItemRemove} 
                    onSaveItem={onSaveItem}
                />
        )
        }
    </div>
);

export default ItemsBlock;