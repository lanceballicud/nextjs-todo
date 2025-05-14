import { prisma } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Page() {
  async function createTodo(data: FormData) {
    "use server";
    // you need to place "use server" at the top of the function to make it a server action

    const title = data.get("title")?.valueOf();
    // FormData.get() returns a string or null, so you need to cast it to a string
    // the argument of FormData.get() is the name of the input field
    if (typeof title !== "string" || title.length === 0) {
      throw new Error("Invalid title");
    }

    await prisma.todo.create({
      data: {
        title,
      },
    });

    redirect("/");
    // redirect is a Next.js function that redirects the user to the specified URL
  }

  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">New</h1>
      </header>
      <form className="flex gap-2 flex-col" action={createTodo}>
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-2 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">
            Create
          </button>
        </div>
      </form>
    </>
  );
}
