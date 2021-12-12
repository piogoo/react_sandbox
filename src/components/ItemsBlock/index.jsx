import React from 'react';
import Item from './components/Item';

const ItemsBlock = ({
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