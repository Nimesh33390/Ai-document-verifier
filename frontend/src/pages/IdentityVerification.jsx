import React, { useState } from "react";
import axios from "axios";

export default function IdentityVerification() {
  const MAX_FILE_SIZE = 500 * 1024;

  const [documents, setDocuments] = useState([
    {
      title: "Aadhaar Card",
      file: null,
      fileType: "pdf",
      required: true,
      uploaded: false,
    },
    {
      title: "Voter ID",
      file: null,
      fileType: "pdf",
      required: false,
      uploaded: false,
    },
    {
      title: "Driving License",
      file: null,
      fileType: "pdf",
      required: false,
      uploaded: false,
    },
  ]);

  const handleFileTypeChange = (index, type) => {
    const updatedDocs = [...documents];
    updatedDocs[index].fileType = type;
    updatedDocs[index].file = null;
    updatedDocs[index].uploaded = false;
    setDocuments(updatedDocs);
  };

  const handleFileChange = (index, file) => {
    if (file && file.size > MAX_FILE_SIZE) {
      alert(`File size for ${documents[index].title} must be under 500 KB.`);
      return;
    }

    const updatedDocs = [...documents];
    updatedDocs[index].file = file;
    updatedDocs[index].uploaded = false;
    setDocuments(updatedDocs);
  };

  const handleUpload = async (index) => {
    const doc = documents[index];
    if (!doc.file) {
      alert(`Please select a file for ${doc.title}.`);
      return;
    }

    const formData = new FormData();
    formData.append("title", doc.title);
    formData.append("file", doc.file);

    try {
      const response = await axios.post(
        "http://localhost:8000/upload-individual/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedDocs = [...documents];
      updatedDocs[index].uploaded = true;
      setDocuments(updatedDocs);
      alert(`${doc.title} uploaded successfully!`);
      console.log(response.data);
    } catch (error) {
      console.error("Upload failed:", error.response?.data || error.message);
      alert(`Upload failed for ${doc.title}`);
    }
  };

  const handleSubmitVerification = () => {
    const missingRequired = documents.filter(
      (doc) => doc.required && !doc.uploaded
    );
    if (missingRequired.length > 0) {
      alert("Please upload all required documents before submitting.");
    } else {
      alert("All required documents uploaded. Proceeding with verification...");
      // Redirect, trigger next step, or call a final API
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Identity Proof Verification
        </h1>
        <p className="text-gray-600 mb-8 text-sm text-center">
          Upload each document one-by-one. Aadhaar is mandatory. Others are optional.
        </p>

        <div className="space-y-10">
          {documents.map((doc, index) => (
            <div key={index} className="space-y-3 border-b pb-6">
              <h2 className="text-lg font-semibold text-gray-700">
                {doc.title} {doc.required && <span className="text-red-500">*</span>}
              </h2>

              <select
                value={doc.fileType}
                onChange={(e) => handleFileTypeChange(index, e.target.value)}
                className="block w-full py-1 border-gray-300 rounded-md shadow-sm text-sm"
              >
                <option value="pdf">PDF</option>
                <option value="jpg">JPG</option>
                <option value="png">PNG</option>
              </select>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <input
                  type="file"
                  accept={
                    doc.fileType === "pdf"
                      ? "application/pdf"
                      : doc.fileType === "jpg"
                      ? "image/jpeg"
                      : "image/png"
                  }
                  onChange={(e) => handleFileChange(index, e.target.files[0])}
                  className="block w-full sm:w-2/3 text-sm file:mr-4 file:py-2 file:px-4 file:border file:rounded-md file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />

                <button
                  type="button"
                  onClick={() => handleUpload(index)}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                >
                  Upload
                </button>
              </div>

              {doc.file && (
                <p className="text-sm text-gray-600">
                  Selected: {doc.file.name} ({(doc.file.size / 1024).toFixed(1)} KB)
                </p>
              )}

              {doc.uploaded && (
                <p className="text-sm text-green-600 font-medium">
                  Uploaded successfully!
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button
            type="button"
            onClick={handleSubmitVerification}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Submit for Verification
          </button>
        </div>
      </div>
    </main>
  );
}
