import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { IUserDTO } from "~/generatedCode/todoApi";
import CustomTable from "./customTable";

interface IProps {
  data: IUserDTO[];
}

export function CustomTableUser(props: IProps) {
  const columns = React.useMemo<ColumnDef<IUserDTO>[]>(
    () => [
      {
        accessorKey: "id",
        cell: (props) => props.row.original.id,
        header: () => <span role="button">ID</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row.userName,
        accessorKey: "userName",
        cell: (info) => info.getValue(),
        header: () => <span role="button">User Name</span>,
        footer: (props) => props.column.id,
      },
    ],
    []
  );

  return <CustomTable<IUserDTO> tableRows={props.data} columns={columns} />;
}
