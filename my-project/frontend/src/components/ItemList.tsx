import React, { useEffect, useState } from 'react';

interface Item {
    id: number;
    name: string;
}

const ItemList: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        fetch('/api/items')
            .then(response => response.json())
            .then(data => setItems(data));
    }, []);

    return (
        <div>
            <h1>Item List</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
