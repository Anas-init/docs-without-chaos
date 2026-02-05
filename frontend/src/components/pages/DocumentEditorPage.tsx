import "quill/dist/quill.snow.css";
import DocumentPageHeader from "../document-page-header";
import DocumentEditor from "../document-editor";

const DocumentEditorPage = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col gap-4"
      style={{ background: "#fafaf9" }}
    >
      <DocumentPageHeader />
      <DocumentEditor />
    </div>
  );
};

export default DocumentEditorPage;
