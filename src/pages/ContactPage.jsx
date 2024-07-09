import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@/services/api.service";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CirclePlus } from "lucide-react";
import { CircleMinus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const ContactPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddennElements = document.querySelectorAll(".hiddenn");
    hiddennElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div>
      <section className="hiddenn h-screen flex flex-col items-center justify-center text-center bg-sky-900 text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mb-4">
          Have questions or feedback? Get in touch with us. We're here to assist
          you and provide the support you need.
        </p>
        <div className="absolute bottom-4 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </section>
      <section className="hiddenn h-screen flex flex-col items-center justify-center text-center bg-sky-900 text-white p-8">
        <Card className="shadow-2xl">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Enter your question here</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <div>
                <Input placeholder={"Title"} />
              </div>
              <div>
                <Input placeholder={"Description"} />
              </div>
              <div>
                <Input placeholder={"body"} className={"h-24"} />
              </div>

              <Button className={"bg-sky-900"}>Send</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};
