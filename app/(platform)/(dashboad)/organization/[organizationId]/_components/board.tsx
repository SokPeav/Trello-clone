import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";

interface BoardProp {
  id: string;
  title: string;
}

export const Board = ({ id, title }: BoardProp) => {
  const deleteBoardById = deleteBoard.bind(null, id);
  return (
    <form className="flex items-center gap-x-2" action={deleteBoardById}>
      <div key={id}>{title}</div>
      <Button variant={"destructive"} size={"sm"}>
        Delete
      </Button>
    </form>
  );
};
