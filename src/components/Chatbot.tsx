import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Bot,
  ChevronDown,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";

type Message = {
  id: number;
  sender: "bot" | "user";
  text: string;
};

const quickOptions = [
  {
    label: "📈 SEO",
    value: "seo",
  },
  {
    label: "📢 Digital Marketing",
    value: "digital",
  },
  {
    label: "🌐 Website Development",
    value: "website",
  },
  {
    label: "💰 Pricing",
    value: "pricing",
  },
];

const botReplies: Record<string, string> = {
  seo:
    "We provide SEO services including Local SEO, Google Business Profile optimization, on-page SEO, technical SEO and performance tracking.",

  digital:
    "Our digital marketing services include Social Media Marketing, Meta Ads, Google Ads, SEO, Content Creation and Website Development.",

  website:
    "We build modern, responsive and performance-focused websites using React and modern web technologies.",

  pricing:
    "Our digital marketing packages start from ₹3,999/month. The package can include creative posters, videos/reels, social media support and Meta Ads management.",

  hello:
    "Hi 👋 Welcome to Brook Stone Digital Solutions! How can we help you grow your business today?",

  default:
    "I can help you with SEO, Digital Marketing, Website Development and Pricing. Please choose one of the options below.",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: botReplies.hello,
    },
  ]);

  const addMessage = (text: string, sender: "bot" | "user") => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        sender,
        text,
      },
    ]);
  };

  const handleOption = (value: string, label: string) => {
    addMessage(label, "user");

    setTimeout(() => {
      addMessage(botReplies[value] || botReplies.default, "bot");
    }, 350);
  };

  const handleSend = () => {
    const message = input.trim();

    if (!message) return;

    addMessage(message, "user");
    setInput("");

    const lowerMessage = message.toLowerCase();

    let reply = botReplies.default;

    if (
      lowerMessage.includes("seo") ||
      lowerMessage.includes("search engine")
    ) {
      reply = botReplies.seo;
    } else if (
      lowerMessage.includes("digital") ||
      lowerMessage.includes("marketing") ||
      lowerMessage.includes("social media") ||
      lowerMessage.includes("meta ads") ||
      lowerMessage.includes("google ads")
    ) {
      reply = botReplies.digital;
    } else if (
      lowerMessage.includes("website") ||
      lowerMessage.includes("web development")
    ) {
      reply = botReplies.website;
    } else if (
      lowerMessage.includes("price") ||
      lowerMessage.includes("pricing") ||
      lowerMessage.includes("package") ||
      lowerMessage.includes("cost")
    ) {
      reply = botReplies.pricing;
    } else if (
      lowerMessage.includes("hi") ||
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hey")
    ) {
      reply = botReplies.hello;
    }

    setTimeout(() => {
      addMessage(reply, "bot");
    }, 350);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Brook Stone Digital Solutions, I would like to know more about your services."
    );

    window.open(
      `https://wa.me/916383624245?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open Brook Stone chatbot"
            className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-500 text-white shadow-[0_10px_40px_rgba(79,70,229,0.45)]"
          >
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-blue-500 opacity-30 animate-ping" />

            <MessageCircle className="relative h-7 w-7" />

            {/* Notification Dot */}
            <span className="absolute right-1 top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 25,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="fixed bottom-5 right-5 z-[9999] flex h-[620px] w-[370px] max-w-[calc(100vw-24px)] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="relative overflow-hidden bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 px-5 py-5 text-white">
              {/* Background Glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                    <Bot className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Brook Stone Assistant
                    </h3>

                    <div className="mt-1 flex items-center gap-2 text-xs text-white/80">
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                      Online • Ready to help
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chatbot"
                  className="rounded-full p-2 transition hover:bg-white/15"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className={`flex ${
                    message.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      message.sender === "user"
                        ? "rounded-br-md bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                        : "rounded-bl-md border border-slate-200 bg-white text-slate-700 shadow-sm"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}

              {/* Quick Options */}
              <div className="pt-2">
                <p className="mb-3 text-xs font-medium text-slate-500">
                  Quick options
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {quickOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() =>
                        handleOption(option.value, option.label)
                      }
                      className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-left text-xs font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-50"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openWhatsApp}
                className="flex w-full items-center justify-between rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-3 text-left text-white shadow-md"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5" />

                  <div>
                    <p className="text-sm font-semibold">
                      Talk to our team
                    </p>

                    <p className="text-xs text-white/80">
                      Chat with us on WhatsApp
                    </p>
                  </div>
                </div>

                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Input */}
            <div className="border-t border-slate-200 bg-white p-3">
              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-100">
                <Sparkles className="h-4 w-4 shrink-0 text-purple-500" />

                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSend();
                    }
                  }}
                  placeholder="Ask us anything..."
                  className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />

                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  aria-label="Send message"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>

              <p className="mt-2 text-center text-[10px] text-slate-400">
                Brook Stone Digital Solutions
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
