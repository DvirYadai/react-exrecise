import logo from "./logo.svg";
import "./App.css";
import IssueCard from "./components/issueCard";
import Tag from "./components/tag";

const issuesArr = [
  {
    title: "fix this issue!",
    id: "#1",
    timeCreated: new Date("2021-03-13"),
    userName: "Dvir",
    tags: ["issue: bug report", "needs triage"],
    numOfComments: 2,
  },
  {
    title: "there's a problem with the app",
    id: "#2",
    timeCreated: new Date("2021-03-10"),
    userName: "Noam",
    tags: ["issue: bug report"],
    numOfComments: 0,
  },
  {
    title: "can i suggest something?",
    id: "#3",
    timeCreated: new Date("2021-03-09"),
    userName: "Ophir",
    tags: ["issue: proposal"],
    numOfComments: 1,
  },
  {
    title: "please check this issue",
    id: "#4",
    timeCreated: new Date("2021-03-05"),
    userName: "Omer",
    tags: ["issue: bug report", "issue: needs investigation"],
    numOfComments: 5,
  },
  {
    title: "major problem!",
    id: "#5",
    timeCreated: new Date("2021-03-01"),
    userName: "Nitzan",
    tags: ["issue: bug report", "needs triage"],
    numOfComments: 8,
  },
];

function App() {
  return (
    <div className="App">
      {issuesArr.map((issue, i) => (
        <IssueCard
          key={i}
          title={issue.title}
          id={issue.id}
          date={issue.timeCreated}
          userName={issue.userName}
          tags={issue.tags.map((tag, j) => (
            <Tag key={j} tag={tag} />
          ))}
          comments={issue.numOfComments}
        />
      ))}
    </div>
  );
}

export default App;
