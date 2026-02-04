'use client';

import { useState } from 'react';

export function ComparisonTable() {
    const [highlightedColumn, setHighlightedColumn] = useState<'free' | 'builder' | 'architect' | null>(null);

    const features = [
        { name: 'Core Modules', free: '13 ✅', builder: '13 ✅', architect: '13 ✅' },
        { name: 'Advanced Modules', free: '-', builder: '4 ✅', architect: '7 ✅' },
        { name: 'Pre-Built Skills', free: '-', builder: '10 ✅', architect: '10 ✅' },
        { name: 'Setup Wizards', free: '-', builder: '✅', architect: '✅' },
        { name: 'Gerald AI Coach', free: '3/day', builder: 'Unlimited', architect: 'Unlimited' },
        { name: 'Discord Support', free: 'Community', builder: 'Priority', architect: 'VIP + Private' },
        { name: 'Private Circle', free: '-', builder: '-', architect: '✅' },
        { name: 'Business Opportunities', free: '-', builder: '-', architect: '✅' },
        { name: 'Commercial License', free: '-', builder: '-', architect: '✅' },
    ];

    return (
        <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                📊 Compare Tiers
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b-2 border-black">
                            <th className="text-left py-3 px-4 font-bold text-gray-900">Feature</th>
                            <th
                                className={`py-3 px-4 font-bold cursor-pointer transition-colors ${highlightedColumn === 'free' ? 'bg-gray-100' : ''
                                    }`}
                                onMouseEnter={() => setHighlightedColumn('free')}
                                onMouseLeave={() => setHighlightedColumn(null)}
                            >
                                <div className="text-center">
                                    <div className="text-gray-600">Free</div>
                                    <div className="text-2xl font-black text-gray-900">$0</div>
                                </div>
                            </th>
                            <th
                                className={`py-3 px-4 font-bold cursor-pointer transition-colors ${highlightedColumn === 'builder' ? 'bg-yellow-50' : ''
                                    }`}
                                onMouseEnter={() => setHighlightedColumn('builder')}
                                onMouseLeave={() => setHighlightedColumn(null)}
                            >
                                <div className="text-center">
                                    <div className="text-xs bg-yellow-200 border border-black px-2 py-0.5 rounded-full inline-block mb-1">
                                        MOST POPULAR
                                    </div>
                                    <div className="text-gray-900">Builder</div>
                                    <div className="text-2xl font-black text-gray-900">$49</div>
                                </div>
                            </th>
                            <th
                                className={`py-3 px-4 font-bold cursor-pointer transition-colors ${highlightedColumn === 'architect' ? 'bg-red-50' : ''
                                    }`}
                                onMouseEnter={() => setHighlightedColumn('architect')}
                                onMouseLeave={() => setHighlightedColumn(null)}
                            >
                                <div className="text-center">
                                    <div className="text-gray-900">Architect</div>
                                    <div className="text-2xl font-black text-gray-900">$249</div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, index) => (
                            <tr
                                key={index}
                                className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                    }`}
                            >
                                <td className="py-3 px-4 font-medium text-gray-900">{feature.name}</td>
                                <td
                                    className={`py-3 px-4 text-center transition-colors ${highlightedColumn === 'free' ? 'bg-gray-100' : ''
                                        }`}
                                >
                                    {feature.free}
                                </td>
                                <td
                                    className={`py-3 px-4 text-center transition-colors ${highlightedColumn === 'builder' ? 'bg-yellow-50' : ''
                                        }`}
                                >
                                    {feature.builder}
                                </td>
                                <td
                                    className={`py-3 px-4 text-center transition-colors ${highlightedColumn === 'architect' ? 'bg-red-50' : ''
                                        }`}
                                >
                                    {feature.architect}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className="text-xs text-gray-600 text-center mt-4 italic">
                💡 Hover over columns to highlight differences
            </p>
        </div>
    );
}
