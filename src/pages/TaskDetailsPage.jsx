import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "@/services/api.service";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { DialogDescription } from "@radix-ui/react-dialog";
export const TaskDetailsPage = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getTask() {
      try {
        const { data } = await api.get("/task/" + taskId);
        setTask(data);
      } catch (err) {
        console.log(err);
      }
    }
    getTask();
  }, []);

  async function handleDelete(ev) {
    ev.preventDefault();

    try {
      const { data } = await api.delete("/task/" + taskId);
      alert("task deleted successfuly");
      navigate("/Tasks/List");
    } catch (err) {
      console.log(err);
    }
  }

  async function handleEdit(ev) {
    ev.preventDefault();
    navigate("/Tasks/edit/" + taskId);
  }

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <>
      <Dialog open={true} onClose={handleClose}>
        <DialogTitle></DialogTitle>
        <DialogDescription></DialogDescription>
        <DialogContent>
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{task.title}</span>
              </CardTitle>
              <button
                className=" absolute right-1 top-1 cursor-pointer "
                onClick={handleClose}
              >
                <X color="red" />
              </button>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-4">
                <div>
                  <Label>{task.description}</Label>
                </div>
                <div>
                  <Label>{task.body}</Label>
                </div>
                <div>
                  <ul>
                    {Array.isArray(task.todoList) &&
                      task.todoList.map((todoItem, index) => (
                        <li key={index}>
                          <Checkbox
                            checked={todoItem.isComplete}
                            className="mr-2"
                          />

                          {todoItem.title}
                        </li>
                      ))}
                  </ul>
                </div>

                <Button onClick={handleEdit}>Edit</Button>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button>Remove</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDelete}>
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </form>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
};
