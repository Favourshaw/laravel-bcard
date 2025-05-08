import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Props {
    bgType: 'solid' | 'gradient';
    bgColor: string;
    textColor: string;
    bgGradient: string;
    onChange: (values: Partial<Props>) => void;
}

export const DraggableFloatingDiv = ({ bgType, bgColor, textColor, bgGradient, onChange }: Props) => {
    const [position, setPosition] = useState({ x: 100, y: 100 });

    // Extract gradient components
    const extractGradientData = (gradient: string) => {
        const angleMatch = gradient.match(/(\d+)(deg)/);
        const colorsMatch = gradient.match(/#[0-9a-fA-F]{6}/g);
        return {
            angle: angleMatch?.[1] || '135',
            start: colorsMatch?.[0] || '#667eea',
            end: colorsMatch?.[1] || '#764ba2',
        };
    };

    const { angle, start, end } = extractGradientData(bgGradient);

    const [gradientStart, setGradientStart] = useState(start);
    const [gradientEnd, setGradientEnd] = useState(end);
    const [gradientAngle, setGradientAngle] = useState(angle);

    useEffect(() => {
        const stored = localStorage.getItem('floating-div-position');
        if (stored) setPosition(JSON.parse(stored));
    }, []);

    const handleDragEnd = (_: any, info: any) => {
        const newPos = { x: info.point.x, y: info.point.y };
        setPosition(newPos);
        localStorage.setItem('floating-div-position', JSON.stringify(newPos));
    };

    const handleUpdate = (key: string, value: any) => {
        if (key === 'bgType') {
            onChange({ bgType: value });
        } else if (key === 'bgColor') {
            onChange({ bgColor: value });
        } else if (key === 'textColor') {
            onChange({ textColor: value });
        } else if (['gradientStart', 'gradientEnd', 'gradientAngle'].includes(key)) {
            const newStart = key === 'gradientStart' ? value : gradientStart;
            const newEnd = key === 'gradientEnd' ? value : gradientEnd;
            const newAngle = key === 'gradientAngle' ? value : gradientAngle;

            setGradientStart(newStart);
            setGradientEnd(newEnd);
            setGradientAngle(newAngle);

            const newGradient = `linear-gradient(${newAngle}deg, ${newStart}, ${newEnd})`;
            onChange({ bgGradient: newGradient });
        }
    };

    return (
        <motion.div
            className="fixed z-50 w-64 rounded-xl border bg-white p-4 shadow-xl"
            drag
            dragMomentum={false}
            onDragEnd={handleDragEnd}
            dragConstraints={{ top: 0, left: 0, right: window.innerWidth, bottom: window.innerHeight }}
            initial={position}
        >
            <h3 className="mb-2 text-sm font-bold">Card Style Editor</h3>

            <div className="mb-3">
                <label className="text-xs text-gray-600">Background Type</label>
                <select value={bgType} onChange={(e) => handleUpdate('bgType', e.target.value)} className="w-full rounded border-gray-300">
                    <option value="solid">Solid</option>
                    <option value="gradient">Gradient</option>
                </select>
            </div>

            {bgType === 'solid' && (
                <div className="mb-3">
                    <label className="text-xs text-gray-600">Background Color</label>
                    <input type="color" value={bgColor} onChange={(e) => handleUpdate('bgColor', e.target.value)} className="h-10 w-full" />
                </div>
            )}

            {bgType === 'gradient' && (
                <>
                    <div className="mb-3">
                        <label className="text-xs text-gray-600">Gradient Start</label>
                        <input
                            type="color"
                            value={gradientStart}
                            onChange={(e) => handleUpdate('gradientStart', e.target.value)}
                            className="h-10 w-full"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="text-xs text-gray-600">Gradient End</label>
                        <input
                            type="color"
                            value={gradientEnd}
                            onChange={(e) => handleUpdate('gradientEnd', e.target.value)}
                            className="h-10 w-full"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="text-xs text-gray-600">Gradient Angle: {gradientAngle}°</label>
                        <input
                            type="range"
                            min={0}
                            max={360}
                            value={gradientAngle}
                            onChange={(e) => handleUpdate('gradientAngle', e.target.value)}
                            className="w-full"
                        />
                    </div>
                </>
            )}

            <div className="mb-3">
                <label className="text-xs text-gray-600">Text Color</label>
                <input type="color" value={textColor} onChange={(e) => handleUpdate('textColor', e.target.value)} className="h-10 w-full" />
            </div>
        </motion.div>
    );
};
