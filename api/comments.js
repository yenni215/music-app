let commentsStore = {}; // 메모리 저장용 (배포 시 DB 필요)
const allowedOrigin = 'https://music-app-two-dun.vercel.app'; 

export default async function handler(req, res) {
  // CORS 헤더 수동 설정
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
  
    return res.status(204).end();
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (err) {
      return res.status(400).json({ message: '잘못된 JSON입니다.' });
    }
  }

  if (req.method === 'POST') {
    const { songId, user, comment } = body;

    if (
      songId === undefined ||
      user === undefined ||
      comment === undefined ||
      user.trim() === '' ||
      comment.trim() === ''
    ) {
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
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
