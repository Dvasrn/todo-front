import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { TodoType } from "@/lib/types";
import { Disc2, Trash2 } from "lucide-react";
import React from "react";
import { dummyTodos } from "@/lib/dummyTodo";
import { headers } from "next/headers";
import { Todo } from "@/src/generated";

const ListItem = ({ todo }: { todo: Todo }) => {
  const isDone = todo?.status || false;

  const id = dummyTodos;

  return (
    <TableRow className={`${isDone ? "line-through bg-secondary" : ""}`}>
      <TableCell className="font-medium">{todo?.todoName}</TableCell>
      <TableCell>{todo.status}</TableCell>
      <TableCell>{todo?.todoTeam}</TableCell>
      <TableCell className="flex gap-2 flex-row-reverse">
        <Button size={"sm"} variant={"outline"} disabled={isDone}>
          Mark as done
        </Button>
        <Button size={"sm"} variant={"ghost"}>
          <Trash2 />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ListItem;
