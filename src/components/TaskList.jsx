import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Pin } from "lucide-react";
import { Label } from "./ui/label";

const TaskList = ({ tasks, isPinned }) => {
  return (
    <ul>
      {tasks.map((task) => {
        if (task.isPinned === isPinned) {
          return (
            <li key={task._id}>
              <Link to={"/Tasks/List/" + task._id}>
                <Card className="shadow-2xl my-4">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{task.title}</span>
                      {isPinned && <Pin />}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-4">
                      <div>
                        <Label>{task.description}</Label>
                      </div>
                      <div>
                        <Label>{task.body}</Label>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default TaskList;
