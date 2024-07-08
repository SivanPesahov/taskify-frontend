import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import api from "@/services/api.service";

import TaskList from "@/components/TaskList";
import { Outlet } from "react-router-dom";

export const TasksPage = () => {
  const context = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const { data } = await api.get("/task/tasks");
        setTasks(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTasks();
  }, []);

  return (
    <>
      {/* <ul>
        {tasks.map((task) => {
          if (task.isPinned == true) {
            return (
              <li key={task._id}>
                <Link to={"/Tasks/" + task._id}>
                  <Card className="shadow-2xl my-4">
                    <CardHeader>
                      <CardTitle className="flex justify-between items-center">
                        <span>{task.title}</span> <Pin />
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
      <ul>
        {tasks.map((task) => {
          if (task.isPinned == false) {
            return (
              <li key={task._id}>
                <Link to={"/Tasks/" + task._id}>
                  <Card className="shadow-2xl my-4">
                    <CardHeader>
                      <CardTitle className="flex justify-between items-center">
                        <span>{task.title}</span>
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
      </ul> */}

      <TaskList tasks={tasks} isPinned={true} />
      <TaskList tasks={tasks} isPinned={false} />
      <Outlet />
    </>
  );
};
