import { useEditor, EditorContent } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import { forwardRef, useImperativeHandle } from "react";
import Toolbar from "./toolbar";
import { tiptapData } from "@/pages/shareRecipe";

const MyTipTap = forwardRef((props: { tiptap: tiptapData }, ref) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal list-inside text-black inline-block",
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc list-inside text-black inline-block",
          },
        },
      }),
      Document,
    ],
    editorProps: {
      attributes: {
        class:
          "mt-5 min-h-[200px] p-2 border border-gray-200 rounded-lg text-black",
      },
    },
  });

  useImperativeHandle(ref, () => ({
    getContent: () => {
      return editor ? editor.getHTML() : "";
    },
  }));

  return (
    <div>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
});

export default MyTipTap;
