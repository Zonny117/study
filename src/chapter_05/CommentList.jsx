import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: '봇치',
    comment: '보보보봇치데스!!',
    image:
      'https://mblogthumb-phinf.pstatic.net/MjAyMzAxMjZfMzkg/MDAxNjc0NzMyNjc1NzIx.M6Xk5s_2Q_EXTi_6FnZmkp7RD9QxeToV4ZlSAqGEUjgg._t38_hztJlAsUhcAF_DD4mZ-aAN4-nIiH4tRPHfjbcYg.PNG.tjehdrms0908/SE-792ed89b-c76c-4736-9695-05e8e378a4e8.png?type=w800',
  },
  {
    name: '니지카',
    comment: '시모키타자와의 대천사',
    image:
      'https://data.onnada.com/character/202211/3718766049_efd01d81_ijika4.jpg',
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map(comment => {
        return (
          <Comment
            name={comment.name}
            comment={comment.comment}
            image={comment.image}
          ></Comment>
        );
      })}
    </div>
  );
}

export default CommentList;
