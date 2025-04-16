"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import { Truck, Leaf, Zap, Clock, BarChart2, Package, Calendar, AlertTriangle, CheckCircle, User, Settings, LogOut } from "lucide-react";
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

export default function FarmerDashboard() {
  return (
    <>
      <Head>
        <title>Farmer Dashboard | SaveNServe</title>
        <meta name="description" content="Manage your farm surplus and connect with communities in need" />
      </Head>

      <main className="relative min-h-screen bg-gray-50 text-gray-900 overflow-hidden mt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden mt-20">
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
                <Leaf className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Farmer Dashboard</h1>
                <p className="text-gray-600">Welcome back, Green Valley Farms!</p>
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
                <User className="h-5 w-5 text-gray-600" />
                <span className="font-medium">Account</span>
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
                    { name: "Overview", icon: <BarChart2 className="h-5 w-5" />, active: true },
                    { name: "Inventory", icon: <Package className="h-5 w-5" /> },
                    { name: "Schedule", icon: <Calendar className="h-5 w-5" /> },
                    { name: "Alerts", icon: <AlertTriangle className="h-5 w-5" /> },
                    { name: "Completed", icon: <CheckCircle className="h-5 w-5" /> },
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
                  { value: "1,240 lbs", label: "Available Surplus", icon: <Leaf className="h-6 w-6 text-teal-600" />, trend: "up" },
                  { value: "28", label: "Pending Requests", icon: <Package className="h-6 w-6 text-amber-500" />, trend: "up" },
                  { value: "64", label: "Completed Donations", icon: <CheckCircle className="h-6 w-6 text-emerald-500" />, trend: "steady" },
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-300 transition-colors shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-teal-50 rounded-lg">
                        {stat.icon}
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${stat.trend === 'up' ? 'bg-green-100 text-green-800' : stat.trend === 'down' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                        {stat.trend === 'up' ? '+12%' : stat.trend === 'down' ? '-5%' : '0%'}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* Current Inventory */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                    <Package className="h-5 w-5 text-teal-600" />
                    Current Inventory
                  </h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {[
                    { product: "Organic Tomatoes", quantity: "320 lbs", status: "Harvested Today", daysLeft: 3 },
                    { product: "Mixed Greens", quantity: "180 lbs", status: "Available Now", daysLeft: 2 },
                    { product: "Sweet Corn", quantity: "420 lbs", status: "Ready Tomorrow", daysLeft: 4 },
                    { product: "Bell Peppers", quantity: "150 lbs", status: "Urgent - 1 day left", daysLeft: 1 },
                  ].map((item, index) => (
                    <div key={index} className="p-6 hover:bg-gray-50 transition-colors grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <p className="font-medium text-gray-900">{item.product}</p>
                        <p className="text-sm text-gray-500">{item.status}</p>
                      </div>
                      <div className="text-center md:text-left">
                        <p className="text-gray-500 text-sm">Quantity</p>
                        <p className="font-medium">{item.quantity}</p>
                      </div>
                      <div className="text-center md:text-left">
                        <p className="text-gray-500 text-sm">Shelf Life</p>
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${item.daysLeft === 1 ? 'bg-red-500' : item.daysLeft < 3 ? 'bg-amber-400' : 'bg-teal-500'}`} 
                              style={{ width: `${(item.daysLeft / 5) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-xs font-medium">{item.daysLeft} day{item.daysLeft !== 1 ? 's' : ''}</span>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-2 rounded-lg text-sm font-medium ${item.daysLeft === 1 ? 'bg-red-100 text-red-700 hover:bg-red-200' : 'bg-teal-100 text-teal-700 hover:bg-teal-200'}`}
                        >
                          {item.daysLeft === 1 ? 'Urgent Donate' : 'Schedule Donation'}
                        </motion.button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-gray-50 border-t border-gray-200 text-center">
                  <Link href="#" className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                    View all inventory (12 items)
                  </Link>
                </div>
              </motion.div>

              {/* Recent Activity and Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                      <Clock className="h-5 w-5 text-teal-600" />
                      Recent Activity
                    </h2>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {[
                      { action: "Donation completed", details: "320 lbs tomatoes to City Shelter", time: "2 hours ago", icon: <CheckCircle className="h-5 w-5 text-emerald-500" /> },
                      { action: "New request received", details: "180 lbs mixed greens from Food Bank", time: "5 hours ago", icon: <Package className="h-5 w-5 text-amber-500" /> },
                      { action: "Inventory updated", details: "Added 420 lbs sweet corn", time: "Yesterday", icon: <Leaf className="h-5 w-5 text-teal-500" /> },
                      { action: "Donation scheduled", details: "150 lbs bell peppers to Community Kitchen", time: "2 days ago", icon: <Calendar className="h-5 w-5 text-blue-500" /> },
                    ].map((item, index) => (
                      <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-gray-100 rounded-lg mt-0.5">
                            {item.icon}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{item.action}</p>
                            <p className="text-gray-600">{item.details}</p>
                            <p className="text-sm text-gray-500 mt-1">{item.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                      <Zap className="h-5 w-5 text-teal-600" />
                      Quick Actions
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
                    {[
                      { title: "Add New Harvest", icon: <Leaf className="h-6 w-6 text-teal-600" />, color: "bg-teal-50 hover:bg-teal-100" },
                      { title: "Schedule Pickup", icon: <Calendar className="h-6 w-6 text-blue-600" />, color: "bg-blue-50 hover:bg-blue-100" },
                      { title: "Request Assistance", icon: <AlertTriangle className="h-6 w-6 text-amber-600" />, color: "bg-amber-50 hover:bg-amber-100" },
                      { title: "View Recipients", icon: <Truck className="h-6 w-6 text-emerald-600" />, color: "bg-emerald-50 hover:bg-emerald-100" },
                    ].map((action, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        className={`${action.color} rounded-xl p-6 border border-gray-200 transition-colors flex flex-col items-center justify-center text-center`}
                      >
                        <div className="p-3 bg-white rounded-full mb-3 shadow-sm">
                          {action.icon}
                        </div>
                        <p className="font-medium text-gray-900">{action.title}</p>
                      </motion.button>
                    ))}
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