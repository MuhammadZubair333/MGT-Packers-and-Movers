import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Bot } from "lucide-react";
import { sendChatMessage } from "@/lib/api/chat.functions";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const WELCOME: Message = {
  role: "assistant",
  content:
    "Hi! I'm MGT's virtual assistant. Ask me anything about our moving, packing, cargo or storage services. I'm here to help!",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const { reply } = await sendChatMessage({ data: { messages: next } });
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong. Please call or WhatsApp us at 0300-1899303.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 sm:bottom-6 sm:left-6">
      {/* Chat panel */}
      {open && (
        <div className="mb-3 flex w-[calc(100vw-2rem)] max-w-[360px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 bg-gradient-navy px-4 py-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-red">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-white">MGT Assistant</p>
              <p className="text-xs text-white/60">Ask about any service</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex h-72 flex-col gap-3 overflow-y-auto p-4 sm:h-80">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-2 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                {m.role === "assistant" && (
                  <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-red">
                    <Bot className="h-3.5 w-3.5 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "rounded-tr-sm bg-gradient-red text-white"
                      : "rounded-tl-sm bg-accent text-foreground"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-2">
                <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-red">
                  <Bot className="h-3.5 w-3.5 text-white" />
                </div>
                <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-accent px-4 py-3">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:0ms]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:300ms]" />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex items-end gap-2 border-t border-border p-3">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              rows={1}
              placeholder="Type a message…"
              disabled={loading}
              className="max-h-24 flex-1 resize-none rounded-xl border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 disabled:opacity-50"
              style={{ minHeight: "40px" }}
            />
            <button
              onClick={send}
              disabled={!input.trim() || loading}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-red text-white shadow-glow-red transition-transform hover:-translate-y-0.5 disabled:opacity-40"
              aria-label="Send message"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-navy text-white shadow-glow-navy transition-transform hover:scale-105"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
        {/* Pulse dot */}
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-brand-red" />
          </span>
        )}
      </button>
    </div>
  );
}
