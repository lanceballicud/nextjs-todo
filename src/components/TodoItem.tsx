interface TodoItemProps {
  id: string;
  title: string;
  complete: boolean;
}

export function TodoItem({ id, title, complete }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input id={id} type="checkbox" className="cursor-pointer peer" />
      {/* peer is used to style the label based on the input state */}
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
        {title}
      </label>
    </li>
  );
}
