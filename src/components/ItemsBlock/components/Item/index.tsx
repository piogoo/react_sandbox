import React, { useCallback, useEffect, useState } from "react";
import { ItemProps } from "./index.props";

/**
 * todo: decompose
 */
const Item: React.FC<ItemProps> = ({item, onItemRemove, onSaveItem}) => {
    const [opened, setOpened] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [title, setTitle] = useState(item.title);
    const [description, setDescription]= useState(item.description);

    const handleSaveItem = useCallback(async () => {
        const newItem: any = {...item, title, description};
        await onSaveItem(newItem);
        setShowEdit(false);
    }, [description, item, onSaveItem, title]);

    useEffect(() => {
        setTitle(item.title);
        setDescription(item.description);
    }, [item]);

    return (
        <li>
             <div className="item">
                 <div className="item-header">
                    <div className="item-title" onClick={() => setOpened(!opened)}>
                        <span>{item.title}</span>
                    </div>
                    <div className="remove-button" onClick={() => onItemRemove(item.id)}>X</div>
                 </div>
                 {opened && ( 
                    <div className="item-content">
                        <div className="edit-button" onClick={() => setShowEdit(!showEdit)}>edit</div>
                        { showEdit ? (
                            <div className="item-content-edit">
                                <input 
                                    type="text" 
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                                <textarea 
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                ></textarea>
                                <button onClick={handleSaveItem}>save</button>
                            </div>
                        ) : (
                            <p>{item.description}</p>
                        )}
                        
                    </div>
                 )}                 
             </div>
            
        </li>
    )
};

export default Item;