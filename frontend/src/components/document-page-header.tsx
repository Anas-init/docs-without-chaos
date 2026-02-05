import { Button } from "./ui/button";

const DocumentPageHeader = () => {
  return (
    <header className="flex items-center justify-between px-4">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/assets/dwc-logo.png"
          alt="Docs Without Chaos"
          className="h-9"
        />
      </div>

      {/* Center: Document actions */}
      <div className="flex items-center gap-2">
        <Button className="px-3 py-1.5 text-sm border border-neutral-700 rounded-none cursor-pointer text-neutral-200 hover:bg-neutral-800">
          Save
        </Button>

        {/* Hide on small screens */}
        <Button className="hidden sm:inline-flex px-3 py-1.5 text-sm border border-neutral-700 rounded-none cursor-pointer text-neutral-200 hover:bg-neutral-800">
          Undo
        </Button>

        <Button className="hidden sm:inline-flex px-3 py-1.5 text-sm border border-neutral-700 rounded-none cursor-pointer text-neutral-200 hover:bg-neutral-800">
          Redo
        </Button>

        <Button className="px-3 py-1.5 text-sm color-primary text-white rounded-none cursor-pointer hover:bg-blue-600">
          Share
        </Button>
      </div>

      {/* Right: User profile */}
      <div className="flex items-center gap-3">
        <button className="h-9 w-9 rounded-full color-primary flex items-center justify-center text-sm font-semibold text-white hover:bg-neutral-600">
          A
        </button>
      </div>
    </header>
  );
};

export default DocumentPageHeader;
