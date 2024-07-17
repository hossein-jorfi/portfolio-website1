// assets
import GraphqlIcon from "@/assets/skills/api/graphql.svg?react";
import ReactQueryLogo from "@/assets/skills/api/react-query-logo.png";

const LIST = [
  {
    title: "GraphQl",
    icon: <GraphqlIcon width={40} />,
  },
  {
    title: "React Query",
    icon: <img src={ReactQueryLogo} width={40} />,
  },  
];

const ApiContent = () => {
  return (
    <div className="flex items-baseline gap-3 flex-wrap">
      {LIST.map((item) => (
        <div
          key={item.title}
          className="flex flex-col justify-center items-center"
        >
          <div>{item.icon}</div>
          <p className="text-sm font-bold">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ApiContent;
