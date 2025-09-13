"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const greetings = [
  { language: "English", text: "Hello Nithin", flag: "🇺🇸" },
  { language: "Spanish", text: "Hola Nithin", flag: "🇪🇸" },
  { language: "French", text: "Bonjour Nithin", flag: "🇫🇷" },
  { language: "German", text: "Hallo Nithin", flag: "🇩🇪" },
  { language: "Italian", text: "Ciao Nithin", flag: "🇮🇹" },
  { language: "Japanese", text: "こんにちはNithin", flag: "🇯🇵" },
  { language: "Chinese", text: "你好Nithin", flag: "🇨🇳" },
  { language: "Arabic", text: "مرحبا Nithin", flag: "🇸🇦" },
];

export default function Home() {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextGreeting = () => {
    setCurrentGreeting((prev) => (prev + 1) % greetings.length);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-all duration-1000">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6">
        <Button
          variant="outline"
          onClick={toggleTheme}
          className="w-12 h-12 rounded-full border-2 border-white/20 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20">
        {/* Hero Section */}
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Animated Greeting */}
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              {greetings[currentGreeting].text}
            </h1>
            <div className="absolute -top-4 -right-4 text-4xl md:text-6xl animate-bounce">
              {greetings[currentGreeting].flag}
            </div>
          </div>

          {/* Language Badge */}
          <div className="flex justify-center">
            <Badge
              variant="secondary"
              className="px-6 py-2 text-lg bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-white/30 dark:border-white/10"
            >
              {greetings[currentGreeting].language}
            </Badge>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Welcome Nithin to your personalized greeting app! Experience your name being greeted from around the world with beautiful animations and interactive features.
          </p>

          {/* Interactive Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={nextGreeting}
              size="lg"
              className="px-8 py-4 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Next Language
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => setCurrentGreeting(0)}
              className="px-8 py-4 text-lg border-2 border-purple-300 dark:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transform hover:scale-105 transition-all duration-300"
            >
              Reset to English
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-6xl mx-auto w-full">
          <Card className="backdrop-blur-sm bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Global Reach
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Experience greetings in 8 different languages from around the world
              </p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Modern Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Beautiful gradients, smooth animations, and responsive design
              </p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Interactive
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Click buttons, toggle themes, and watch animations come to life
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Built with Next.js, Tailwind CSS, and shadcn/ui
          </p>
        </div>
      </div>
    </div>
  );
}