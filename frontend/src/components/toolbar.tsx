import { Toggle } from "@/components/ui/toggle";
import {
  Bold,
  Italic,
  ListIcon,
  ListOrdered,
  Strikethrough,
  UnderlineIcon,
  Ruler,
  Pilcrow,
  Redo,
  Undo,
  CornerDownLeft,
} from "lucide-react";

import { Editor } from "@tiptap/react"; // Ensure you have the correct import for the Editor type

function Toolbar({ editor }: { editor: Editor | null }) {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex gap-3 border border-gray-200 p-2 rounded-lg mt-5">
      <Toggle
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold")
            ? "border border-gray-400"
            : "border border-gray-400 text-black"
        }
      >
        <Bold size={14} height={14} />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic")
            ? "border border-gray-400"
            : "border border-gray-400 text-black"
        }
      >
        <Italic size={14} height={14} />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={
          editor.isActive("strike")
            ? "border border-gray-400"
            : "border border-gray-400 text-black"
        }
      >
        <Strikethrough size={14} height={14} />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={
          editor.isActive("paragraph")
            ? "border border-gray-400"
            : "border border-gray-400 text-black"
        }
      >
        <Pilcrow size={14} height={14} color="black" />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 })
            ? "border border-gray-400"
            : "border border-gray-400 text-black"
        }
      >
        H2
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive("heading", { level: 3 })
            ? "border border-gray-400"
            : "border border-gray-400 text-black"
        }
      >
        H3
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={
          editor.isActive("heading", { level: 4 })
            ? "border border-gray-400"
            : "border border-gray-400 text-black"
        }
      >
        H4
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={
          editor.isActive("heading", { level: 5 })
            ? "border border-gray-400"
            : "border border-gray-400 text-black"
        }
      >
        H5
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={
          editor.isActive("heading", { level: 6 })
            ? "border border-gray-400"
            : "border border-gray-400 text-black"
        }
      >
        H6
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive("bulletList")
            ? "border border-gray-400"
            : "border border-gray-400 text-black"
        }
        title="bullet list"
      >
        <ListIcon size={14} height={14} />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive("orderedList")
            ? "border border-gray-400"
            : "border border-gray-400 text-black"
        }
        title="ordered list"
      >
        <ListOrdered size={14} height={14} />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={
          editor.isActive("horizontalRule")
            ? "border border-gray-400"
            : "border border-gray-400 text-black"
        }
        title="ruler"
      >
        <Ruler size={14} height={14} />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className={
          editor.isActive("horizontalRule")
            ? "border border-gray-400"
            : "border border-gray-400 text-black"
        }
        title="line break"
      >
        <CornerDownLeft size={14} height={14} />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className={
          editor.isActive("undo")
            ? "border border-gray-400"
            : "border border-gray-400 text-black"
        }
      >
        <Undo size={14} height={14} />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className={
          editor.isActive("blockquote")
            ? "border border-gray-400"
            : "border border-gray-400 text-black"
        }
      >
        <Redo size={14} height={14} />
      </Toggle>
    </div>
  );
}

export default Toolbar;
