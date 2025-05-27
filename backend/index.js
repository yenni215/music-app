const express = require('express');
const cors = require('cors');  // 추가
const app = express();
const port = 3001;

app.use(cors());              // 추가: 모든 출처 허용
app.use(express.json());

let viewCounts = {}; // 메모리에 조회수 저장용

app.post('/api/view-count', (req, res) => {
  const { songId } = req.body;
  if (!songId) return res.status(400).json({ error: 'songId is required' });

  viewCounts[songId] = (viewCounts[songId] || 0) + 1;
  res.json({ songId, views: viewCounts[songId] });
});

app.get('/api/view-count', (req, res) => {
  const { songId } = req.query;
  if (!songId) return res.status(400).json({ error: 'songId query is required' });

  const views = viewCounts[songId] || 0;
  res.json({ songId, views });
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
