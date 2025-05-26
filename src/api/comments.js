// 예: Vercel 서버리스 함수 (Node.js 환경)
let commentsStore = {}; // 메모리 저장용 (배포시 DB 필요)

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { songId, user, comment } = req.body;

    if (!songId || !user || !comment) {
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

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
