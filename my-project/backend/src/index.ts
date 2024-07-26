import express, { Request, Response } from 'express';

const app = express();
const port = 3001;

app.get('/api/items', (req: Request, res: Response) => {
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];
    res.json(items);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
