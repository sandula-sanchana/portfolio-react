// AbstractBackground.jsx

import React from 'react';

const AbstractBackground = () => {
    return (
        // The main container for the abstract background
        // It will be absolutely positioned to cover the entire section
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* --- 1. Large Textured Shapes (Mimicking the brush strokes and large blocks) --- */}

            {/* Dark Blue/Navy Block (Top Left) */}
            <div className="absolute top-0 left-0 w-3/5 h-2/5 bg-slate-800 opacity-90 rotate-2 origin-top-left transform translate-y-[-10%] translate-x-[-10%]"></div>

            {/* Red/Maroon Block (Middle Right) */}
            <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-red-800 opacity-80 -rotate-3 origin-top-right transform translate-x-[5%]"></div>

            {/* Yellow/Mustard Block (Bottom Left) */}
            <div className="absolute bottom-0 left-0 w-2/5 h-1/3 bg-amber-600 opacity-70 rotate-1 origin-bottom-left transform translate-y-[10%] translate-x-[5%]"></div>

            {/* --- 2. Geometric Dot Patterns (Mimicking the halftone/stipple effect) --- */}

            {/* Dot Pattern 1 (Over Navy) */}
            <div className="absolute top-10 left-1/4 w-40 h-40 bg-repeat bg-[size:10px_10px]"
                 style={{
                     backgroundImage: `radial-gradient(black 20%, transparent 20%)`,
                     opacity: 0.15,
                 }}
            ></div>

            {/* Dot Pattern 2 (Over Red) */}
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-repeat bg-[size:15px_15px]"
                 style={{
                     backgroundImage: `radial-gradient(black 20%, transparent 20%)`,
                     opacity: 0.2,
                 }}
            ></div>

            {/* --- 3. Large Letters/Numbers (Mimicking the visual noise) --- */}

            {/* Number 2 (Top Left, large, rotated) */}
            <span className="absolute top-[-5%] left-[-10%] text-[400px] font-black text-white/5 opacity-5 rotate-[-15deg] select-none">
                2
            </span>

            {/* Letter A (Top Right, large, rotated) */}
            <span className="absolute top-[10%] right-[-10%] text-[400px] font-black text-white/5 opacity-5 rotate-[10deg] select-none">
                A
            </span>

            {/* Vertical Black & White Stripes (Left Edge) - Note: This requires complex Tailwind/CSS or a smaller image/SVG pattern */}
            <div className="absolute left-0 top-0 h-full w-20 bg-repeat-y bg-[size:20px_20px] opacity-10"
                 style={{
                     backgroundImage: `repeating-linear-gradient(to right, black, black 10px, white 10px, white 20px)`,
                 }}
            ></div>

        </div>
    );
};

export default AbstractBackground;