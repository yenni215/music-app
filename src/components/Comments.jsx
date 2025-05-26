import React, { useState, useEffect } from 'react';

function Comments({ songId }) {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');

  // 댓글 불러오기
  useEffect(() => {
    async function fetchComments() {
      const res = await fetch(`/api/comments?songId=${songId}`);
      const data = await res.json();
      setComments(data);
    }
    fetchComments();
  }, [songId]);

  // 댓글 등록
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.trim() || !comment.trim()) return alert('사용자명과 댓글을 입력하세요.');

    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ songId, user, comment }),
    });

    if (res.ok) {
      setUser('');
      setComment('');
      // 댓글 새로 불러오기
      const updated = await res.json();
      // 간단히 댓글 다시 가져오기
      const res2 = await fetch(`/api/comments?songId=${songId}`);
      const data = await res2.json();
      setComments(data);
    } else {
      alert('댓글 저장 실패');
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>댓글</h3>
      <form onSubmit={handleSubmit} style={{ marginBottom: '12px' }}>
        <input
          placeholder="사용자명"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          style={{ width: '30%', marginRight: '8px' }}
        />
        <input
          placeholder="댓글 입력"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ width: '50%', marginRight: '8px' }}
        />
        <button type="submit">댓글 남기기</button>
      </form>

      <div>
        {comments.length === 0 && <p>댓글이 없습니다.</p>}
        {comments.map((c, i) => (
          <div key={i} style={{ borderTop: '1px solid #ccc', padding: '8px 0' }}>
            <b>{c.user}</b> <small>({new Date(c.date).toLocaleString()})</small>
            <p>{c.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
