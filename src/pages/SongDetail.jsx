import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import songsData from '../data/songsData';

function SongDetail() {
  const { id } = useParams();
  const song = songsData.find((s) => s.id.toString() === id);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loadingComments, setLoadingComments] = useState(true);

  useEffect(() => {
    // 댓글 불러오기(GET 요청)
    fetch(`/api/comments?songId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        // API 응답 형식에 맞게 comments 배열 상태 업데이트
        // data가 [{user, comment, date}, ...] 배열이라고 가정
        setComments(data);
        setLoadingComments(false);
      })
      .catch(() => setLoadingComments(false));
  }, [id]);

  if (!song) {
    return <div style={{ paddingTop: '120px' }}>곡 정보를 찾을 수 없습니다.</div>;
  }

  const handleAddComment = () => {
    const user = '익명'; // 임시로 사용자명 하드코딩, 로그인 시스템 있다면 교체

    if (newComment.trim() === '') return;

    // 댓글 등록(POST 요청)
    fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, user, comment: newComment.trim() }),
    })
        
      .then((res) => {
        if (!res.ok) throw new Error('댓글 등록 실패');
        console.log(songId, user,newComment.trim());
        return res.json();
      })
      .then(() => {
        // 댓글 성공적으로 저장되면, 댓글 리스트에 새 댓글 추가
        setComments((prev) => [
          ...prev,
          { user, comment: newComment.trim(), date: new Date().toISOString() },
        ]);
        setNewComment('');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div style={{ paddingTop: '180px', paddingLeft: '20px' }}>
      <h2>{song.title}</h2>
      <p><strong>아티스트:</strong> {song.artist}</p>
      <p><strong>앨범:</strong> {song.album}</p>
      <p><strong>발매일:</strong> {song.releaseDate}</p>
      <p><strong>장르:</strong> {song.genre}</p>
      <p><strong>가사:</strong></p>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{song.lyrics}</pre>
      <hr />
      <h3>댓글</h3>

      {loadingComments ? (
        <p>댓글을 불러오는 중...</p>
      ) : comments.length > 0 ? (
        <ul>
          {comments.map((c, idx) => (
            <li key={idx}>
              <strong>{c.user}:</strong> {c.comment} <small>({new Date(c.date).toLocaleString()})</small>
            </li>
          ))}
        </ul>
      ) : (
        <p>댓글이 없습니다.</p>
      )}

      <div style={{ marginTop: '20px' }}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="댓글을 입력하세요"
          rows={3}
          style={{ width: '100%', resize: 'vertical' }}
        />
        <button onClick={handleAddComment} style={{ marginTop: '8px' }}>
          등록
        </button>
      </div>
    </div>
  );
}

export default SongDetail;
