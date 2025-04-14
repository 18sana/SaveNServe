import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Volunteering", value: 35, color: "#22c55e" }, // Green
  { name: "Donations", value: 25, color: "#3b82f6" }, // Blue
  { name: "Awareness Campaigns", value: 20, color: "#facc15" }, // Yellow
  { name: "Eco Projects", value: 20, color: "#ef4444" }, // Red
];

const barData = [
  { name: "Jan", value: 15 },
  { name: "Feb", value: 22 },
  { name: "Mar", value: 18 },
  { name: "Apr", value: 30 },
  { name: "May", value: 28 },
  { name: "Jun", value: 35 },
];

const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="text-sm font-bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-xl">
        <p className="font-bold">{payload[0].payload.name}</p>
        <p className="text-green-400">{payload[0].value}% participation</p>
      </div>
    );
  }
  return null;
};

export default function CommunityContribution() {
  return (
    <div className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-sm font-medium text-green-400 mb-2 inline-block">COMMUNITY IMPACT</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Collective Action for a Greener Future
              </h2>
              <p className="text-lg text-gray-300">
                Our community actively participates in sustainability efforts through various initiatives. 
                Here's how we contribute to a greener planet:
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-green-400/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-4 h-4 mt-1 rounded-full`} style={{ backgroundColor: item.color }}></div>
                    <div>
                      <h3 className="font-semibold text-white">{item.name}</h3>
                      <p className="text-gray-400 text-sm">{item.value}% participation</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side: Charts */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Pie Chart */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-green-400/30 transition-all duration-500">
              <h3 className="text-xl font-semibold mb-4 text-center">Contribution Breakdown</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={60}
                    paddingAngle={2}
                    dataKey="value"
                    labelLine={false}
                    label={renderCustomLabel}
                    animationBegin={200}
                    animationDuration={1000}
                  >
                    {data.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color} 
                        stroke="none"
                        className="hover:opacity-90 transition-opacity duration-300"
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    iconType="circle" 
                    layout="horizontal" 
                    verticalAlign="bottom" 
                    align="center"
                    wrapperStyle={{ paddingTop: '20px' }}
                    formatter={(value) => <span className="text-gray-300 text-sm">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-400/30 transition-all duration-500">
              <h3 className="text-xl font-semibold mb-4 text-center">Monthly Participation Growth</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#9CA3AF' }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#9CA3AF' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="value" 
                    radius={[4, 4, 0, 0]}
                    animationBegin={800}
                    animationDuration={1500}
                  >
                    {barData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill="url(#barGradient)" 
                        className="hover:opacity-90 transition-opacity duration-300"
                      />
                    ))}
                  </Bar>
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#22c55e" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Inspirational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-green-500/20 blur-md"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-blue-500/20 blur-md"></div>
            <blockquote className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 p-6">
              "Together, our small actions create monumental change. Every contribution brings us closer to a sustainable future."
            </blockquote>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mt-4"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}