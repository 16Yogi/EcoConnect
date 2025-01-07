import React from 'react';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';

const SocialShare = ({ url, title }) => {
  return (
    <div>
      <FacebookShareButton url={url} quote={title}>
        Share on Facebook
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        Share on Twitter
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title}>
        Share on LinkedIn
      </LinkedinShareButton>
    </div>
  );
};

export default SocialShare;
