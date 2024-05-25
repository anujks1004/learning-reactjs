import { useState } from "react";
import Form from "./Form";
import Items from "./Items";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (!list) list = [];
  else list = JSON.parse(list);
  return list;
};

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage());

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setLocalStorage(newItems);
    setItems(newItems);
    toast.success("item added to the list");
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setLocalStorage(newItems);
    setItems(newItems);
    toast.success("item removed from the list");
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setLocalStorage(newItems);
    setItems(newItems);
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
