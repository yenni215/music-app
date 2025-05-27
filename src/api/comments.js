let commentsStore = {}; 
const allowedOrigins = [
  'http://localhost:5173',
  'https://music-app-two-dun.vercel.app',
  'https://music-app-git-main-yennis-projects-81408583.vercel.app',
];

export default async function handler(req, res) {
  const origin = req.headers.origin || '';
  
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', 'null');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    
    return res.status(204).end();
  }

  if (req.method === 'POST') {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({ message: '잘못된 JSON입니다.' });
      }
    }

    const { songId, user, comment } = body;

    if (!songId || !user || !comment || user.trim() === '' || comment.trim() === '') {
      return res.status(400).json({ message: '필수 항목이 누락되었습니다.' });
    }

    if (!commentsStore[songId]) {
      commentsStore[songId] = [];
    }

    commentsStore[songId].push({ user, comment, date: new Date().toISOString() });

    return res.status(201).json({ message: '댓글 저장 완료' });
  }

  if (req.method === 'GET') {
    const { songId } = req.query;

    if (!songId) {
      return res.status(400).json({ message: 'songId가 필요합니다.' });
    }

    return res.status(200).json(commentsStore[songId] || []);
  }

  res.setHeader('Allow', 'GET, POST, OPTIONS');
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
