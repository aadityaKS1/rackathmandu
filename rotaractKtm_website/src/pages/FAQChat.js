import { useState, useEffect, useRef } from "react";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/faq";

function smoothScrollToBottom(container) {
  if (!container) return;
  const start     = container.scrollTop;
  const end       = container.scrollHeight;
  const duration  = 300;
  const startTime = performance.now();
  function step(currentTime) {
    const elapsed  = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease     = 1 - Math.pow(1 - progress, 3);
    container.scrollTop = start + (end - start) * ease;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export default function FAQChat() {
  const [isOpen, setIsOpen]               = useState(false);
  const [query, setQuery]                 = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions]     = useState([]);
  const [messages, setMessages]           = useState([]);
  const [loading, setLoading]             = useState(false);
  const [typingState, setTypingState]     = useState({ index: null, charCount: 0 });

  const messagesRef = useRef(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/suggestions/`)
      .then(res => setSuggestions(res.data))
      .catch(err => console.error("Suggestions failed", err));
  }, []);

  useEffect(() => {
    smoothScrollToBottom(messagesRef.current);
  }, [messages, typingState.charCount]);

  useEffect(() => {
    if (typingState.index === null) return;
    const fullAnswer = messages[typingState.index]?.answer || "";
    if (typingState.charCount >= fullAnswer.length) {
      setTypingState({ index: null, charCount: 0 });
      return;
    }
    const interval = setInterval(() => {
      setTypingState(prev => {
        const next = prev.charCount + 1;
        if (next >= fullAnswer.length) {
          clearInterval(interval);
          return { index: null, charCount: 0 };
        }
        return { ...prev, charCount: next };
      });
    }, 18);
    return () => clearInterval(interval);
  }, [typingState.index, messages]);

  const handleSearch = (value) => {
    setQuery(value);
    clearTimeout(debounceRef.current);
    if (!value.trim()) { setSearchResults([]); return; }
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await axios.get(`${BASE_URL}/search/?q=${value}`);
        setSearchResults(res.data);
      } catch (err) {
        console.error("Search failed", err);
      }
    }, 400);
  };

  const selectQuestion = async (slug) => {
    setLoading(true);
    setSearchResults([]);
    setQuery("");
    try {
      const res  = await axios.get(`${BASE_URL}/questions/${slug}/`);
      const data = res.data;
      setMessages(prev => {
        const updated = [...prev, {
          question: data.text,
          answer:   data.answer,
          related:  data.related_questions || []
        }];
        setTypingState({ index: updated.length - 1, charCount: 0 });
        return updated;
      });
    } catch (err) {
      console.error("Failed to load question", err);
    } finally {
      setLoading(false);
    }
  };

  const getVisibleAnswer = (msg, index) => {
    if (typingState.index === index) return msg.answer.slice(0, typingState.charCount);
    return msg.answer;
  };

  const isTypingDone = (index) => typingState.index !== index;

  return (
    <>
      {/* ── Floating Button ──
          Mobile:  bottom-4 right-4  (16px from edges)
          SM:      bottom-6 right-6  (24px from edges)
          LG:      bottom-8 right-8  (32px from edges)
          Size scales from 12 (48px) → sm:14 (56px)
      */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="fixed z-50
                   bottom-4 right-4
                   sm:bottom-6 sm:right-6
                   lg:bottom-8 lg:right-8
                   w-12 h-12
                   sm:w-14 sm:h-14
                   rounded-full shadow-xl
                   bg-gradient-to-br from-[#010f37] to-[#193172]
                   text-white flex items-center justify-center
                   hover:scale-110 transition-transform duration-200
                   focus:outline-none"
        aria-label="Toggle Help Center"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg"
               className="w-5 h-5 sm:w-6 sm:h-6"
               fill="none" viewBox="0 0 24 24"
               stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg"
               className="w-5 h-5 sm:w-6 sm:h-6"
               fill="none" viewBox="0 0 24 24"
               stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M21
                 12c0 4.418-4.03 8-9 8a9.863 9.863
                 0 01-4.255-.949L3 20l1.395-3.72C3.512
                 15.042 3 13.574 3 12c0-4.418 4.03-8
                 9-8s9 3.582 9 8z"/>
          </svg>
        )}
      </button>

      {/* ── Chat Window ──
          Mobile:  fixed inset-0 with small margin — nearly full screen
          SM+:     fixed width anchored above the button
          Height also scales per breakpoint
      */}
      {isOpen && (
        <div
          className="fixed z-40 flex flex-col
                     overflow-hidden bg-white
                     border border-slate-200 shadow-2xl rounded-2xl

                     /* Mobile: 12px from every edge except bottom clears the button */
                     inset-x-3 bottom-20 top-3

                     /* SM: fixed width, anchored above button, auto height */
                     sm:inset-x-auto sm:top-auto
                     sm:w-[380px]
                     sm:bottom-24
                     sm:right-6
                     sm:h-[520px]

                     /* LG: slightly taller */
                     lg:w-[400px]
                     lg:bottom-28
                     lg:right-8
                     lg:h-[560px]"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#010f37] to-[#193172]
                          text-white px-5 py-3 sm:py-4
                          flex items-center gap-3 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"/>
            <h2 className="text-sm sm:text-base font-semibold tracking-wide">
              Help Center
            </h2>
          </div>

          {/* Messages */}
          <div
            ref={messagesRef}
            className="flex-1 overflow-y-auto px-3 sm:px-4 py-4
                       flex flex-col gap-3 bg-slate-50"
            style={{ scrollBehavior: "auto" }}
          >
            {/* Welcome + suggestions */}
            {messages.length === 0 && !loading && (
              <div className="flex flex-col gap-3">
                <div className="flex flex-col items-center text-center gap-1 py-4">
                  <span className="text-4xl">👋</span>
                  <p className="text-sm font-medium text-slate-600">
                    Hi! What can I help you with?
                  </p>
                  <p className="text-xs text-slate-400">
                    Pick a question or search below.
                  </p>
                </div>

                {suggestions.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <p className="text-xs text-slate-400 font-medium px-1">
                      Frequently asked:
                    </p>
                    {suggestions.map(q => (
                      <button
                        key={q.id}
                        onClick={() => selectQuestion(q.slug)}
                        className="text-left text-sm text-[#193172] bg-white
                                   hover:bg-slate-100 px-4 py-3 rounded-xl
                                   border border-slate-200 hover:border-[#193172]
                                   transition-all duration-150 shadow-sm
                                   cursor-pointer leading-snug"
                      >
                        {q.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Chat history */}
            {messages.map((msg, index) => (
              <div key={index} className="flex flex-col gap-2">

                {/* User bubble */}
                <div className="self-end max-w-[80%] bg-[#193172] text-white
                                text-sm px-4 py-2.5 rounded-2xl rounded-br-sm
                                leading-relaxed shadow-sm">
                  {msg.question}
                </div>

                {/* Bot bubble */}
                <div className="self-start max-w-[85%] bg-white text-slate-700
                                text-sm px-4 py-3 rounded-2xl rounded-bl-sm
                                shadow-sm leading-relaxed border border-slate-100
                                min-h-[40px]">
                  <p>
                    {getVisibleAnswer(msg, index)}
                    {typingState.index === index && (
                      <span className="inline-block w-0.5 h-3.5 bg-slate-400
                                       ml-0.5 align-middle animate-pulse"/>
                    )}
                  </p>

                  {/* Related — only on latest message, only after typing */}
                  {isTypingDone(index) &&
                   msg.related?.length > 0 &&
                   index === messages.length - 1 && (
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <p className="text-xs text-slate-400 mb-2">
                        Related questions:
                      </p>
                      <div className="flex flex-col gap-1.5">
                        {msg.related.map(rq => (
                          <button
                            key={rq.id}
                            onClick={() => selectQuestion(rq.slug)}
                            className="text-left text-xs text-[#193172] bg-slate-50
                                       hover:bg-slate-100 px-3 py-2 rounded-lg
                                       transition-colors duration-150 border border-slate-200
                                       hover:border-[#193172] cursor-pointer"
                          >
                            {rq.text}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            ))}

            {/* Loading dots */}
            {loading && (
              <div className="self-start bg-white px-4 py-3 rounded-2xl rounded-bl-sm
                              shadow-sm border border-slate-100 flex gap-1 items-center">
                {[0, 1, 2].map(i => (
                  <span key={i} style={{ animationDelay: `${i * 0.2}s` }}
                        className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"/>
                ))}
              </div>
            )}
          </div>

          {/* Search dropdown */}
          {searchResults.length > 0 && (
            <div className="absolute bottom-16 left-3 right-3 bg-white rounded-xl
                            shadow-xl z-10 overflow-hidden border border-slate-100
                            max-h-48 overflow-y-auto">
              {searchResults.map((q, i) => (
                <div
                  key={q.id}
                  onClick={() => selectQuestion(q.slug)}
                  className={`px-4 py-3 text-sm text-slate-700 cursor-pointer
                              hover:bg-slate-50 transition-colors
                              ${i !== searchResults.length - 1
                                ? "border-b border-slate-100" : ""}`}
                >
                  {q.text}
                </div>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-3 py-3 border-t border-slate-100 bg-white shrink-0">
            <input
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search or ask a question..."
              className="w-full px-4 py-2.5 text-sm border border-slate-200
                         rounded-xl outline-none focus:border-[#193172]
                         transition-colors placeholder:text-slate-400"
            />
          </div>

        </div>
      )}
    </>
  );
}