import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../redux/index';

const Comments = ({ fetchComments, loading, comments }) => {
  const commentsItems = loading ? (
    <div>is loadding...</div>
  ) : (
    comments.map(comment => (
      <div key={comment.id}>
        <h3>{comment.name}</h3>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
      </div>
    ))
  );

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return <div>{commentsItems}</div>;
};

const mapStateToProps = ({ comments }) => {
  return {
    comments: comments.items,
  };
};

const mapDispatchToProps = {
  fetchComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
