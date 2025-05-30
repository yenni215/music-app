const songsData = [
  {
    id: 1,
    title: "네 옆에 있을 때 (feat. 보라미유)",
    artist: "HAAN, Chan (찬)",
    album: "한찬가게",
    releaseDate: "2025-05-26",
    genre: "R&B/Soul",
    lyrics: "오늘의 날씨는 참...",
  },
  {
    id: 2,
    title: "Sugar Honey Candy",
    artist: "설레게",
    album: "Sugar Honey Candy",
    releaseDate: "2025-05-26",
    genre: "R&B/Soul",
    lyrics: "톡 까놓고 말해 보자...",
  },
  {
    id: 3,
    title: "여름밤의 추억",
    artist: "비하트 (B.HEART)",
    album: "여름밤의 추억",
    releaseDate: "2025-05-26",
    genre: "발라드",
    lyrics: "그날 따라 바람이 차가워...",
  },
  {
    id: 4,
    title: "Blue Rain",
    artist: "옥주현",
    album: "Blue Rain",
    releaseDate: "2025-05-25",
    genre: "발라드",
    lyrics: "어딜 가면 볼 수 있는지...",
  },
  {
    id: 5,
    title: "CORPUS 0",
    artist: "데이먼스 이어 (Damons year)",
    album: "CORPUS 0",
    releaseDate: "2025-05-25",
    genre: "인디음악, 록/메탈",
    lyrics: "언제쯤 너는 잠에 들까...",
  },
  {
    id: 6,
    title: "우리 둘의 바다",
    artist: "서도밴드 (sEODo BAND)",
    album: "우리 둘의 바다",
    releaseDate: "2025-05-25",
    genre: "록/메탈",
    lyrics: "얼마나 좋을까 그대라는...",
  },
  {
    id: 7,
    title: "Poet | Artist",
    artist: "SHINee (샤이니)",
    album: "Poet | Artist",
    releaseDate: "2025-05-25",
    genre: "댄스",
    lyrics: "Call me post, artist...",
  },
  {
    id: 8,
    title: "헤어지자 말해요",
    artist: "박재정",
    album: "1집 Alone",
    releaseDate: "2023-05-15",
    genre: "발라드",
    lyrics: "헤어지자 말해요...",
  },
  {
    id: 9,
    title: "Love Lee",
    artist: "AKMU",
    album: "Love Lee",
    releaseDate: "2023-08-21",
    genre: "댄스",
    lyrics: "사랑해요 Love Lee...",
  },
  {
    id: 10,
    title: "너에게 닿기를",
    artist: "10CM",
    album: "너에게 닿기를",
    releaseDate: "2025-03-06",
    genre: "록/메탈",
    lyrics: "따사로운 햇살 속에서...",
  },
  {
    id: 11,
    title: "THUNDER",
    artist: "세븐틴(SEVENTEEN)",
    album: "SEVENTEEN 5th Album ‘HAPPY BURSTDAY’",
    releaseDate: "2025-05-26",
    genre: "댄스",
    lyrics: "떨어져 flash 온몸이 crash...",
  },
  {
    id: 12,
    title: "Drowning",
    artist: "WOODZ",
    album: "OO-LI",
    releaseDate: "2023-04-26",
    genre: "록/메탈",
    lyrics: "미치도록 사랑했던...",
  },
  {
    id: 13,
    title: "like JENNIE",
    artist: "제니 (JENNIE)",
    album: "Ruby",
    releaseDate: "2025-03-07",
    genre: "댄스",
    lyrics: "Come on, it’s gon be f*** hard...",
  },
  {
    id: 14,
    title: "모르시나요(PROD.로코베리)",
    artist: "조째즈",
    album: "모르시나요",
    releaseDate: "2025-01-07",
    genre: "발라드",
    lyrics: "찬바람 불어오니...",
  },
  {
    id: 15,
    title: "fault",
    artist: "matt matt",
    album: "fault",
    releaseDate: "2025-05-25",
    genre: "R&B/Soul",
    lyrics: "It could be my fault...",
  },
  {
    id: 16,
    title: "Right Away",
    artist: "Sphaze(스페이즈)",
    album: "Right Away",
    releaseDate: "2025-05-25",
    genre: "R&B/Soul",
    lyrics: "너와 첫 만남의 그 떨림 너의...",
  },
  {
    id: 17,
    title: "TOO BAD (feat. Anderson .Paak)",
    artist: "G-DRAGON",
    album: "Übermensch",
    releaseDate: "2025-02-25",
    genre: "랩/힙합",
    lyrics: "‘G’, ‘A.P’ “Let me kill ’em like...",
  },
  {
    id: 18,
    title: "Whiplash",
    artist: "aespa",
    album: "Whiplash - The 5th Mini Album",
    releaseDate: "2024-10-21",
    genre: "댄스",
    lyrics: "One look give ‘em Whiplash...",
  },
  {
    id: 19,
    title: "나는 반딧불",
    artist: "황가람",
    album: "나는 반딧불",
    releaseDate: "2024-10-21",
    genre: "발라드",
    lyrics: "나는 내가 빛나는 별인 줄 알았어요...",
  },
  {
    id: 20,
    title: "HOME SWEET HOME (feat. 태양, 대성)",
    artist: "G-DRAGON",
    album: "HOME SWEET HOME (feat. 태양, 대성)",
    releaseDate: "2024-11-22",
    genre: "랩/힙합",
    lyrics: "You say, It’s changed...",
  },
  {
    id: 21,
    title: "어제보다 슬픈 오늘",
    artist: "우디 (Woody)",
    album: "어제보다 슬픈 오늘",
    releaseDate: "2025-03-31",
    genre: "발라드",
    lyrics: "밤새도록 내리던 소낙비가 네 모습을 지울까...",
  },
  {
    id: 22,
    title: "죽지 않은 연인에게",
    artist: "데이먼스 이어 (Damons year)",
    album: "CORPUS 0",
    releaseDate: "2025-05-25",
    genre: "인디음악, 록/메탈",
    lyrics: "몸은 구겨져도 마음은 부풀어서...",
  },
  {
    id: 23,
    title: "그라데이션",
    artist: "10CM",
    album: "5.3",
    releaseDate: "2022-07-03",
    genre: "인디음악, 포크/블루스",
    lyrics: "밤은 다시 길고 깊어졌네",
  },
  {
    id: 24,
    title: "봄눈",
    artist: "10CM",
    album: "선재 업고 튀어 OST Part 8",
    releaseDate: "2024-05-14",
    genre: "발라드, 국내드라마",
    lyrics: "가려진 오랜 시간이 우리를...",
  }
];

export default songsData;
