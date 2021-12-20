import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import PropTypes from "prop-types";
import "./index.css";

function TweetList({ tweets }) {
  return tweets.map((tweet) => {
    return <Tweet tweet={tweet} />;
  });
}

function Tweet({ tweet }) {
  return (
    <>
      <div className="tweet">
        <Avatar hash={tweet.gravatar} />
        <div className="content">
          <Author author={tweet.author} />
          <Time time={tweet.timestamp} />
          <Message text={tweet.message} />
          <div className="buttons">
            <ReplyButton />
            <RetweetButton count={tweet.retweets} />
            <LikeButton count={tweet.likes} />
            <MoreOptionsButton />
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} className="avatar" alt="avatar" />;
}

Avatar.propTypes = {
  hash: PropTypes.string,
};

function Message({ text }) {
  return <div className="message">{text}</div>;
}

Message.propTypes = {
  text: PropTypes.string,
};

function Author({ author }) {
  const { name, handle } = author;
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
  }).isRequired,
};

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

Time.propTypes = {
  time: PropTypes.string,
};

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
}

const RetweetButton = ({ count }) => {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet">{getRetweetCount(count)}</i>
    </span>
  );
};

RetweetButton.propTypes = {
  count: PropTypes.number,
};

const LikeButton = ({ count }) => {
  return (
    <span className="like-button">
      <i className="fa fa-heart">
        {count > 0 && <span className="like-count">{count}</span>}
      </i>
    </span>
  );
};

LikeButton.propTypes = {
  count: PropTypes.number,
};

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

const tweetsData = [
  {
    message: "Something about cats.",
    gravatar: "xyz",
    author: {
      handle: "catperson",
      name: "IAMA Cat Person",
    },
    likes: 2,
    retweets: 17,
    timestamp: "2016-07-30 21:24:37",
  },
  {
    message: "Something about dogs.",
    gravatar: "xyz",
    author: {
      handle: "Alesvoy",
      name: "I like dogs, I am a dog Person",
    },
    likes: 32,
    retweets: 17,
    timestamp: "2016-07-30 21:24:37",
  },
  {
    message: "I like rap.",
    gravatar: "xyz",
    author: {
      handle: "Drake",
      name: "Aubrey Drake Graham",
    },
    likes: 234400,
    retweets: 17000,
    timestamp: "2016-07-30 21:24:37",
  },
];

ReactDOM.render(
  <TweetList tweets={tweetsData} />,
  document.querySelector("#root")
);
