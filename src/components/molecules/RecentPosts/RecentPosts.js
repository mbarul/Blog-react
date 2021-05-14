import React from 'react';
import Card from '../Card/Card';

const RecentPosts = (props) => {
  return (
    <div style={props.style}>
      <Card style={{ marginBottom: '20px 0' }}>
        <div className="postImage">
          <img src="/images/valencia.jpg" alt="" />
          <div style={{ textAlign: 'center' }}>
            <span>Featured</span>
            <h2>Hahahah</h2>
            <span>date</span>
            <p>Lorem..................</p>
            <button>Read more</button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RecentPosts;
