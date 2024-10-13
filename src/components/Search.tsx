import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export function Search() {
  return (
    <div className="flex w-full max-w-sm items-center bg-accentColor p-1 rounded-full">
      <Button
        variant="secondary"
        type="submit"
        className="bg-accentColor   text-primary-main
        "
        size={"icon"}
      >
        <MagnifyingGlassIcon className="size-6 text-primary-main" />
      </Button>
      <Input
        type="text"
        placeholder="Search"
        className="border-none focus:ring-0 outline-none px-4 py-2"
      />
    </div>
  );
}
