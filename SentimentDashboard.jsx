
import React from 'react';
import { TrendingUp, DollarSign, BarChart3, FileText } from 'lucide-react';

const ipoData = [
  { name: "Tata Tech", peRatio: 35.2, psRatio: 8.3, marketCap: "₹18,000 Cr", explanation: "Strong growth in EV and tech sectors." },
  { name: "CarTrade", peRatio: 22.4, psRatio: 5.1, marketCap: "₹7,200 Cr", explanation: "Solid digital platform with revenue growth." },
  { name: "Zomato", peRatio: null, psRatio: 14.7, marketCap: "₹98,000 Cr", explanation: "High customer base, losses narrowing." },
  { name: "Nykaa", peRatio: 80.5, psRatio: 21.3, marketCap: "₹52,000 Cr", explanation: "Strong brand in beauty segment." },
  { name: "Paytm", peRatio: null, psRatio: 9.8, marketCap: "₹45,000 Cr", explanation: "Fintech dominance despite compliance issues." },
  { name: "Mamaearth", peRatio: 56.3, psRatio: 11.2, marketCap: "₹8,000 Cr", explanation: "Rapid D2C expansion." },
  { name: "PB Fintech", peRatio: null, psRatio: 12.5, marketCap: "₹30,000 Cr", explanation: "Insurance aggregator with growth prospects." },
  { name: "Sona Comstar", peRatio: 48.6, psRatio: 10.1, marketCap: "₹24,000 Cr", explanation: "EV drivetrain focus." },
  { name: "Medplus", peRatio: 44.2, psRatio: 6.3, marketCap: "₹9,000 Cr", explanation: "Retail pharmacy expansion in Tier 2 cities." },
  { name: "LatentView", peRatio: 65.4, psRatio: 15.9, marketCap: "₹6,500 Cr", explanation: "Data analytics edge." }
];

const SentimentDashboard = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <span>IPO Metrics & Explainability</span>
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {ipoData.map((ipo, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{ipo.name}</h3>
                <span className="text-sm text-gray-500">{ipo.marketCap}</span>
              </div>
              <div className="flex space-x-4 text-sm text-gray-700 mb-1">
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span>P/E: {ipo.peRatio ?? 'N/A'}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BarChart3 className="w-4 h-4 text-indigo-600" />
                  <span>P/S: {ipo.psRatio}</span>
                </div>
              </div>
              <div className="text-sm text-gray-600 flex items-start mt-1 space-x-2">
                <FileText className="w-4 h-4 text-yellow-500 mt-0.5" />
                <p>{ipo.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SentimentDashboard;
