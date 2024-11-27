import React from "react";

const LearningVideo: React.FC = () => {
  return (
    <div>
      LearningVideo
      <video controls autoPlay width={700} height={500}>
        <source
          src="https://d2of6bhnpl91ni.cloudfront.net/cms/online-birthday-card-video-template%20(1)-0453118dd4.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default LearningVideo;
