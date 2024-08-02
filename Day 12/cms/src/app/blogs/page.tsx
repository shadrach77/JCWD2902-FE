import { client } from "@/lib/contentful";
import { title } from "process";
import React from "react";

type props = {};

export default async function page({}: props) {
  const blogs = await client.getEntries({ content_type: "blog" });
  blogs.items.map((_: any) => console.log(_.fields));
  return (
    <div className="max-w-screen-md m-auto mt-5 flex flex-col items-center">
      {blogs.items.map((blog: any, key: number) => (
        <div
          key={key}
          className="max-w-screen-sm border p-4 px-8 rounded-[20px] shadow-md w-full"
        >
          <div className="text-2xl font-bold">{blog.fileds.title}</div>
          <div className="text-xl font-bold">{blog.fileds.contentData}</div>
          <div className="text-lg font-semibold">
            <span>Longitude: {blogs.fields.location.lon}</span>{" "}
            <span>Latitude: {blogs.fields.location.lat}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
