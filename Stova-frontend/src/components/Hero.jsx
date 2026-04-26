import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import {motion} from "framer-motion";

export default function Hero() {
    const handleSearch = (e) => {
        e.preventDefault();
    };
  return (
    <div className="relative z-30 flex flex-col items-center text-slate-200 justify-center px-8 pt-32 pb-32">
        <motion.h1 initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className="z-40 text-4xl md:text-6xl font-bold mb-8 text-center">
            From Dreams to Destinations
        </motion.h1>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl mb-12 text-center max-w-2xl">Tell us about your perfect escape, and we'll find the perfect place for you.
        </motion.p>
            
        {/* search */}
        <motion.form 
            onSubmit={handleSearch}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-3xl bg-black/10 backdrop-blur-md lg:h-16 rounded-2xl p-2 gap-x-2 flex items-center"
            >
            <Input
                type="text"
                placeholder="Where do you want to go?"
                className="flex-grow bg-transparent lg:text-lg text-white placeholder:text-slate-300/45 border-none outline-none focus:border-none focus:outline-none focus-visible:ring-0 p-4"
            />
            <Button
            type="submit"
            className="rounded-full w-48 flex items-center bg-slate-800 gap-x-2 lg:h-12 "
          >
             <motion.div
            animate={{ rotate: [0, 5, -5, 0], scale: [0.9, 1, 0.9] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
                <Sparkles
              style={{ width: "20px", height: "20px" }}
              className=" mr-2 animate-pulse text-yellow-400"
            />
          </motion.div>
            
             <span className="lg:text-lg text-cyan-500">AI Search</span>
          </Button>
        </motion.form>
    </div>
  );
}