"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ListItem from "./ListItem";

import { Todo, useAddTodoMutationMutation } from "@/src/generated";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { useGetAllTodoQuery } from "@/src/generated";
import { start } from "repl";

const AddTodoAndList = () => {
  const [addTodoInput, setAddTodoInput] = useState("");

  const [addTodo] = useAddTodoMutationMutation();
  const { refetch: todoRefetch, data: todoData } = useGetAllTodoQuery();

  console.log("addTodo", addTodo);

  const HandleAddTodo = async () => {
    const input = {
      todoName: addTodoInput,
      todoTeam: "test",
      status: false,
    };
    await addTodo({ variables: { input: input } });
    await todoRefetch();
  };
  return (
    <div>
      <div className="flex gap-2 max-w-[700px] m-auto mb-[40px]">
        <Input
          type="text"
          placeholder="Todo Title"
          onChange={(e) => setAddTodoInput(e.target.value)}
          value={addTodoInput}
        />
        <Button variant={"outline"} onClick={() => HandleAddTodo()}>
          Add
        </Button>
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Team" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">My-1</SelectItem>
              <SelectItem value="dark">My-2</SelectItem>
              <SelectItem value="system">My-3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Card className="w-[700px] m-auto">
        <Table>
          <TableCaption>A list of todos</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Team</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {todoData?.getAllTodo?.map((todo, index) => (
              <ListItem key={index} todo={todo as Todo} />
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>

              <TableCell className="text-right">
                {addTodoInput.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Card>
    </div>
  );
};

export default AddTodoAndList;
