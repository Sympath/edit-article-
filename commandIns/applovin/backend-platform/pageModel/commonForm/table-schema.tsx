import { ProColumnsType } from "table-render";
import { ActionSchema } from "./actions";

const properties = $columns$;
export const columns: ProColumnsType = [
  ...properties,
  {
    title: "action",
    key: "action",
    render: (_, record) => <ActionSchema key={"ActionSchema" + record.name} />,
  },
];
