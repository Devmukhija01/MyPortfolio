// File: VoiceControl.js
import { useEffect } from "react";

const VoiceControl = () => {
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in your browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[event.resultIndex][0].transcript.trim().toLowerCase();
      console.log("Voice command:", transcript);

      if (transcript.includes("go to contact") || transcript.includes("contact section")) {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      } else if (transcript.includes("show me projects") || transcript.includes("projects")) {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      } else if (transcript.includes("open resume")) {
        const resumeLink = document.getElementById("resume-link");
        if (resumeLink) resumeLink.click();
      } else if (transcript.includes("go to about")) {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    return () => recognition.stop();
  }, []);

  return null;
};

export default VoiceControl;
