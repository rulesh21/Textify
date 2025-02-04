import React, { useState } from "react";

export default function Form() {
  const [text, setText] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const handleUppercase = () => setText(text.toUpperCase());
  const handleLowercase = () => setText(text.toLowerCase());

  const handleClearText = () => setText("");

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to Clipboard!");
  };

  const handlePasteFromClipboard = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(clipboardText);
    } catch (err) {
      alert("Failed to paste. Please allow clipboard access.");
    }
  };

  return (
    <>
      <div className="container my-3">
        <h1>Text Manipulation Tool</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUppercase}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowercase}>
          Lowercase
        </button>

        <button className="btn btn-danger mx-2" onClick={handleClearText}>
          Clear
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={handleCopyToClipboard}
        >
          Copy
        </button>
        <button
          className="btn btn-warning mx-2"
          onClick={handlePasteFromClipboard}
        >
          Paste
        </button>
      </div>

      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").filter((word) => word !== "").length} words &{" "}
          {text.length} characters
        </p>
        <p>
          Average minutes to read:{" "}
          {0.08 * text.split(" ").filter((word) => word !== "").length}
        </p>
        <button
          className="btn btn-info"
          onClick={() => setShowPreview(!showPreview)}
        >
          {showPreview ? "Hide Preview" : "Preview Text"}
        </button>
        {showPreview && <p className="mt-3">{text}</p>}
      </div>
    </>
  );
}
