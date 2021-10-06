//
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
// ./ in the same forder
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          imageAvatar={faker.image.avatar()}
          author="John"
          timeAgo="Today at 4:00PM"
          textComment="Hello"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          imageAvatar={faker.image.avatar()}
          author="Gabi"
          timeAgo="Today at 2:30PM"
          textComment="Good morning"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          imageAvatar={faker.image.avatar()}
          author="Mihai"
          timeAgo="Yesterday at 10:00PM"
          textComment="Hi, there"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
