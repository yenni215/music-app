import { promises as fs } from 'fs';
import path from 'path';

const filePath = path.resolve('./view-count.json');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { songId } = req.body;
    if (!songId) return res.status(400).json({ error: 'songId is required' });

    try {
      let data = {};
      try {
        const file = await fs.readFile(filePath, 'utf-8');
        data = JSON.parse(file);
      } catch {}

      data[songId] = (data[songId] || 0) + 1;

      await fs.writeFile(filePath, JSON.stringify(data, null, 2));

      res.status(200).json({ songId, views: data[songId] });
    } catch {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  else if (req.method === 'GET') {
    const { songId } = req.query;
    if (!songId) return res.status(400).json({ error: 'songId query is required' });

    try {
      const file = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(file);
      const views = data[songId] || 0;
      res.status(200).json({ songId, views });
    } catch {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
