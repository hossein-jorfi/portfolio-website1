// assets
import GraphqlIcon from "@/assets/skills/api/graphql.svg?react";

const LIST = [
  {
    title: "GraphQl",
    icon: <GraphqlIcon width={40} />,
  },
];

const ApiContent = () => {
  return (
    <div>
      {LIST.map((item) => (
        <div key={item.title}>
          <div>{item.icon}</div>
          <p></p>
        </div>
      ))}
    </div>
  );
};

export default ApiContent;
