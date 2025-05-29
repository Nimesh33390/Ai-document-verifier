export default function About() {
  return (
    <main className="bg-white px-6 py-24 sm:py-32 lg:px-8 min-h-screen">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl mb-8">
          About AI DocMate
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          <strong>AI DocMate</strong> is a real-time AI-powered document verification system developed for Gromo's field agents and onboarding team. It addresses the core pain points of onboarding delays, manual verification bottlenecks, and fraud detection.
        </p>
        
        <section className="mt-12 text-left space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">🚀 Our Mission</h2>
            <p className="text-gray-700">
              To streamline the document verification process and boost onboarding accuracy by using AI models that instantly detect blurriness, mismatches, and forged documents.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">🧠 Tech Stack</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>OCR (Tesseract / Google Vision) for data extraction</li>
              <li>Computer Vision (CNN, YOLO) for quality and tamper detection</li>
              <li>LLM / Rule Engine for contextual validation (e.g., DOB, name)</li>
              <li>Document Type Classifier using ML layout analysis</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">🎯 Impact</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Reduces verification time from hours to minutes</li>
              <li>Saves ₹10–20 lakhs/year in rework costs</li>
              <li>Improves trust and regulatory compliance</li>
            </ul>
          </div>
    
        </section>
      </div>
    </main>
  );
}
