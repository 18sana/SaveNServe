"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import { Users, HeartHandshake, Package, Calendar, AlertCircle, CheckCircle2, MapPin, Clock, BarChart2, Settings, LogOut } from "lucide-react";
import Link from "next/link";

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function NGODashboard() {
  return (
    <>
      <Head>
        <title>NGO Dashboard | SaveNServe</title>
        <meta name="description" content="Manage food distribution and community impact" />
      </Head>

      <main className="relative min-h-screen bg-gray-50 text-gray-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern-light.svg')] opacity-5"></div>
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 bg-teal-100 rounded-full filter blur-3xl opacity-40"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-10 right-20 w-80 h-80 bg-emerald-100 rounded-full filter blur-3xl opacity-30"
            animate={{
              x: [0, -40, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Dashboard Layout */}
        <div className="relative max-w-7xl mx-auto px-6 py-8">
          {/* Header */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-6 md:mb-0"
            >
              <div className="p-3 bg-teal-100 rounded-xl">
                <HeartHandshake className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Community Food Network</h1>
                <p className="text-gray-600">Welcome back, Helping Hands NGO!</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                <Settings className="h-5 w-5 text-gray-600" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                <Users className="h-5 w-5 text-gray-600" />
                <span className="font-medium">Team</span>
              </button>
            </motion.div>
          </header>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <nav className="space-y-2">
                  {[
                    { name: "Dashboard", icon: <BarChart2 className="h-5 w-5" />, active: true },
                    { name: "Food Requests", icon: <Package className="h-5 w-5" /> },
                    { name: "Distribution", icon: <MapPin className="h-5 w-5" /> },
                    { name: "Beneficiaries", icon: <Users className="h-5 w-5" /> },
                    { name: "Reports", icon: <CheckCircle2 className="h-5 w-5" /> },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href="#"
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${item.active ? 'bg-teal-50 text-teal-700' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium w-full transition-colors">
                    <LogOut className="h-5 w-5" />
                    <span>Log Out</span>
                  </button>
                </div>
              </div>
            </motion.aside>

            {/* Main Dashboard */}
            <div className="lg:col-span-3 space-y-8">
              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[
                  { value: "1,850 lbs", label: "Food Received", icon: <Package className="h-6 w-6 text-teal-600" />, trend: "up" },
                  { value: "3,720", label: "Meals Distributed", icon: <HeartHandshake className="h-6 w-6 text-amber-500" />, trend: "up" },
                  { value: "28", label: "Communities Served", icon: <MapPin className="h-6 w-6 text-emerald-500" />, trend: "steady" },
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-300 transition-colors shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-teal-50 rounded-lg">
                        {stat.icon}
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${stat.trend === 'up' ? 'bg-green-100 text-green-800' : stat.trend === 'down' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                        {stat.trend === 'up' ? '+18%' : stat.trend === 'down' ? '-7%' : '0%'}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* Active Food Requests */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-teal-600" />
                    Active Food Requests
                  </h2>
                  <Link href="#" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                    View All
                  </Link>
                </div>
                <div className="divide-y divide-gray-200">
                  {[
                    { 
                      request: "Urgent: Fresh Produce Needed", 
                      location: "Downtown Shelter", 
                      quantity: "500 lbs", 
                      time: "Within 24 hours",
                      status: "High Priority"
                    },
                    { 
                      request: "Daily Bread Supply", 
                      location: "Community Kitchen", 
                      quantity: "200 lbs", 
                      time: "Ongoing",
                      status: "Medium Priority"
                    },
                    { 
                      request: "Weekend Meal Program", 
                      location: "Youth Center", 
                      quantity: "350 lbs", 
                      time: "By Friday",
                      status: "Medium Priority"
                    },
                  ].map((item, index) => (
                    <div key={index} className="p-6 hover:bg-gray-50 transition-colors grid grid-cols-1 md:grid-cols-5 gap-4">
                      <div className="md:col-span-2">
                        <p className="font-medium text-gray-900">{item.request}</p>
                        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <MapPin className="h-4 w-4" />
                          {item.location}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Quantity Needed</p>
                        <p className="font-medium">{item.quantity}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Timeframe</p>
                        <p className="font-medium">{item.time}</p>
                      </div>
                      <div className="flex items-center justify-end">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === 'High Priority' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Distribution Schedule and Impact */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Upcoming Distributions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-teal-600" />
                      Upcoming Distributions
                    </h2>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {[
                      { 
                        date: "Tomorrow, 10 AM", 
                        location: "Homeless Shelter", 
                        items: "Fresh Vegetables, Bread", 
                        volunteers: 8
                      },
                      { 
                        date: "Friday, 2 PM", 
                        location: "Senior Center", 
                        items: "Prepared Meals, Dairy", 
                        volunteers: 5
                      },
                      { 
                        date: "Sunday, 9 AM", 
                        location: "Refugee Center", 
                        items: "Mixed Groceries", 
                        volunteers: 12
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-teal-50 rounded-lg mt-0.5">
                            <Calendar className="h-5 w-5 text-teal-600" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{item.date}</p>
                            <p className="text-gray-600 flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {item.location}
                            </p>
                            <div className="mt-2 flex justify-between items-center">
                              <p className="text-sm text-gray-500">{item.items}</p>
                              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                                {item.volunteers} volunteers
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Community Impact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                      <Users className="h-5 w-5 text-teal-600" />
                      Community Impact
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="mb-6">
                      <h3 className="font-medium text-gray-900 mb-3">Meals Distributed This Month</h3>
                      <div className="h-40">
                        {/* Chart placeholder - replace with actual chart component */}
                        <div className="flex items-end h-full gap-1">
                          {[30, 60, 90, 120, 90, 60, 30, 60, 90, 120, 150, 120].map((height, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ duration: 0.8, delay: i * 0.05 }}
                              className={`flex-1 rounded-t-sm ${
                                height > 100 ? 'bg-teal-500' : height > 70 ? 'bg-teal-400' : 'bg-teal-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-emerald-100 rounded-lg">
                            <HeartHandshake className="h-5 w-5 text-emerald-600" />
                          </div>
                          <div>
                            <p className="text-gray-500 text-sm">People Fed Today</p>
                            <p className="font-medium">420</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-amber-100 rounded-lg">
                            <Clock className="h-5 w-5 text-amber-600" />
                          </div>
                          <div>
                            <p className="text-gray-500 text-sm">Avg. Response Time</p>
                            <p className="font-medium">6.2 hours</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-teal-50 rounded-lg p-4 border border-teal-100">
                        <p className="font-medium text-teal-800 mb-1">Impact Milestone</p>
                        <p className="text-sm text-teal-700">
                          You've provided 12,850 meals this month - reaching 92% of your monthly goal!
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}