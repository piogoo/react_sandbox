import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { addItem, getData, removeItem, saveItem } from './http/mock.js';
import ItemsBlock from './components/ItemsBlock/index';
import FormBlock from './components/FormBlock';

const App = () => {
  const [items, setItems] = useState([]);

  const fetchItems = useCallback(async () => {
    const { data } = await getData(); 
    setItems(data);
  }, []);

  const onAddItem = useCallback(async (title) => {
      await addItem(title);
      fetchItems();
  }, [fetchItems]);

  const onItemRemove = useCallback(async (id) => {
    await removeItem(id);
    fetchItems();
  }, [fetchItems]);

  const onSaveItem = useCallback(async (item) => {
    await saveItem(item);
    fetchItems();
  }, [fetchItems])

  // component did mount
  useEffect(() => {
    fetchItems();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <FormBlock
          onAddItem={onAddItem}
        />

        <ItemsBlock 
          items={items}
          onItemRemove={onItemRemove}
          onSaveItem={onSaveItem}
        />
      </div>
    </>
  );
}

export default App;
