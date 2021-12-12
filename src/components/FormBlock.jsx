import React, { useCallback, useState } from "react";

const FormBlock = ({
    onAddItem
}) => {
    const [newItem, setNewItem] = useState('');
    const handleAddItem = useCallback(() => {
        onAddItem(newItem);
        setNewItem('');
    }, [newItem, onAddItem]);

    return (
        <>
            <input
                type="text"
                value={newItem} 
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={handleAddItem}>Add</button>
        </>
    );
}

export default FormBlock;