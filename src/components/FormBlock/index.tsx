import React, { useCallback, useState } from "react";
import { FormBlockProps } from "./index.props";

const FormBlock: React.FC<FormBlockProps> = ({
    onAddItem
}) => {
    const [newItemTitle, setNewItemTitle] = useState('');
    const handleAddItem = useCallback(() => {
        onAddItem(newItemTitle);
        setNewItemTitle('');
    }, [newItemTitle, onAddItem]);

    return (
        <>
            <input
                type="text"
                value={newItemTitle} 
                onChange={(e) => setNewItemTitle(e.target.value)}
            />
            <button onClick={handleAddItem}>Add</button>
        </>
    );
}

export default FormBlock;