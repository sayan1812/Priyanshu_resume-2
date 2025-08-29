import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Priyanshu's AI assistant. I can help you learn more about his skills, projects, and experience. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const savedMessages = localStorage.getItem("portfolio-chat-history");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-chat-history", JSON.stringify(messages));
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputText);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const generateAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("skill") || lowerInput.includes("technology")) {
      return "Priyanshu is skilled in C++, Java, JavaScript, Python, React.js, Node.js, and MySQL. He specializes in full-stack development and data structures & algorithms. Would you like to know more about any specific technology?";
    }
    
    if (lowerInput.includes("project")) {
      return "Priyanshu has worked on several interesting projects including a TimeTable Generator in Java, Library Management System in C++, Resume Parser using Python, and various web applications. Which project interests you most?";
    }
    
    if (lowerInput.includes("experience") || lowerInput.includes("internship")) {
      return "Priyanshu has completed internships at CodeAlpha as a Front-End Developer and at InternPe for DSA C++ Programming. He has hands-on experience in web development and algorithm optimization.";
    }
    
    if (lowerInput.includes("education") || lowerInput.includes("study")) {
      return "Priyanshu is currently pursuing B.Tech in Computer Science & Engineering from IEM, Salt Lake, Kolkata (2022-2026). He has a strong academic foundation in computer science.";
    }
    
    if (lowerInput.includes("contact") || lowerInput.includes("hire") || lowerInput.includes("email")) {
      return "You can contact Priyanshu at priyanshuhalder2001@gmail.com or call him at +91 8389937791. He's always open to discussing new opportunities and collaborations!";
    }
    
    if (lowerInput.includes("github") || lowerInput.includes("portfolio")) {
      return "You can find Priyanshu's work on GitHub at github.com/sayan1812 and connect with him on LinkedIn. His projects showcase his development skills across various technologies.";
    }
    
    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
      return "Hello! I'm here to help you learn more about Priyanshu Halder. Feel free to ask about his skills, projects, experience, or how to get in touch with him.";
    }
    
    return "That's an interesting question! Priyanshu is a passionate developer who loves working on innovative projects. You can learn more about his specific skills, projects, or experience. Is there anything particular you'd like to know about him?";
  };

  const clearHistory = () => {
    setMessages([{
      id: "1",
      text: "Hi! I'm Priyanshu's AI assistant. I can help you learn more about his skills, projects, and experience. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
          size="icon"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary-foreground" />
          ) : (
            <MessageCircle className="w-6 h-6 text-primary-foreground" />
          )}
        </Button>
      </motion.div>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] z-40"
          >
            <div className="glass-card rounded-2xl h-full flex flex-col overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-primary p-4 text-primary-foreground">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">AI Assistant</h3>
                      <p className="text-xs opacity-90">Ask me about Priyanshu</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearHistory}
                    className="text-primary-foreground hover:bg-white/20 text-xs"
                  >
                    Clear
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-3 ${
                        message.isUser
                          ? "bg-primary text-primary-foreground"
                          : "bg-surface text-text-primary"
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        <div className="flex-shrink-0">
                          {message.isUser ? (
                            <User className="w-4 h-4 mt-0.5" />
                          ) : (
                            <Bot className="w-4 h-4 mt-0.5" />
                          )}
                        </div>
                        <p className="text-sm leading-relaxed">{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-surface text-text-primary rounded-2xl p-3">
                      <div className="flex items-center space-x-2">
                        <Bot className="w-4 h-4" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                          <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-card-border">
                <div className="flex space-x-2">
                  <textarea
                    ref={textareaRef}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about Priyanshu..."
                    className="flex-1 resize-none bg-surface text-text-primary rounded-lg px-3 py-2 text-sm border border-card-border focus:outline-none focus:ring-2 focus:ring-primary/50 max-h-20"
                    rows={1}
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!inputText.trim() || isTyping}
                    size="icon"
                    className="w-10 h-10 rounded-lg bg-primary hover:bg-primary-glow transition-colors duration-200"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};