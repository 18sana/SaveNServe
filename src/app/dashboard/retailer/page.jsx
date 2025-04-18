"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import { ShoppingBag, Package, Clock, AlertTriangle, CheckCircle, Truck, CreditCard, BarChart2, Settings, LogOut } from "lucide-react";
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

export default function RetailerDashboard() {
  return (
    <>
      <Head>
        <title>Retailer Dashboard | SaveNServe</title>
        <meta name="description" content="Manage your surplus inventory and donations" />
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
                <ShoppingBag className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Retailer Dashboard</h1>
                <p className="text-gray-600">Welcome back, FreshMart Supermarkets!</p>
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
                <CreditCard className="h-5 w-5 text-gray-600" />
                <span className="font-medium">Billing</span>
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
                    { name: "Donations", icon: <Truck className="h-5 w-5" /> },
                    { name: "Tax Benefits", icon: <CreditCard className="h-5 w-5" /> },
                    { name: "History", icon: <CheckCircle className="h-5 w-5" /> },
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
                  { value: "1,420 lbs", label: "Surplus Available", icon: <Package className="h-6 w-6 text-teal-600" />, trend: "up" },
                  { value: "$2,850", label: "Tax Benefits", icon: <CreditCard className="h-6 w-6 text-amber-500" />, trend: "up" },
                  { value: "28", label: "Completed Donations", icon: <Truck className="h-6 w-6 text-emerald-500" />, trend: "steady" },
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-300 transition-colors shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-teal-50 rounded-lg">
                        {stat.icon}
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${stat.trend === 'up' ? 'bg-green-100 text-green-800' : stat.trend === 'down' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                        {stat.trend === 'up' ? '+15%' : stat.trend === 'down' ? '-8%' : '0%'}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* Urgent Surplus */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-teal-600" />
                    Urgent Surplus Inventory
                  </h2>
                  <Link href="#" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                    View All Inventory
                  </Link>
                </div>
                <div className="divide-y divide-gray-200">
                  {[
                    { 
                      product: "Dairy Products", 
                      quantity: "320 units", 
                      expiry: "Expires tomorrow", 
                      category: "Refrigerated",
                      value: "$480"
                    },
                    { 
                      product: "Bakery Items", 
                      quantity: "180 lbs", 
                      expiry: "Expires in 2 days", 
                      category: "Perishable",
                      value: "$270"
                    },
                    { 
                      product: "Prepared Meals", 
                      quantity: "95 units", 
                      expiry: "Expires today", 
                      category: "Ready-to-eat",
                      value: "$380"
                    },
                  ].map((item, index) => (
                    <div key={index} className="p-6 hover:bg-gray-50 transition-colors grid grid-cols-1 md:grid-cols-5 gap-4">
                      <div className="md:col-span-2">
                        <p className="font-medium text-gray-900">{item.product}</p>
                        <div className="flex gap-2 mt-1">
                          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                            {item.category}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            item.expiry.includes('today') ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {item.expiry}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Quantity</p>
                        <p className="font-medium">{item.quantity}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Retail Value</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                      <div className="flex items-center justify-end">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-2 rounded-lg text-sm font-medium ${
                            item.expiry.includes('today') ? 'bg-red-100 text-red-700 hover:bg-red-200' : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
                          }`}
                        >
                          {item.expiry.includes('today') ? 'Donate Now' : 'Schedule Pickup'}
                        </motion.button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Recent Activity and Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Donations */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                      <Clock className="h-5 w-5 text-teal-600" />
                      Recent Donations
                    </h2>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {[
                      { 
                        date: "Today, 2 PM", 
                        recipient: "City Food Bank", 
                        items: "Dairy, Produce", 
                        quantity: "420 lbs",
                        status: "Completed"
                      },
                      { 
                        date: "Yesterday", 
                        recipient: "Homeless Shelter", 
                        items: "Bakery, Prepared Meals", 
                        quantity: "380 lbs",
                        status: "Completed"
                      },
                      { 
                        date: "2 days ago", 
                        recipient: "Community Kitchen", 
                        items: "Canned Goods", 
                        quantity: "210 lbs",
                        status: "Completed"
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-teal-50 rounded-lg mt-0.5">
                            <Truck className="h-5 w-5 text-teal-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <p className="font-medium text-gray-900">{item.date}</p>
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                {item.status}
                              </span>
                            </div>
                            <p className="text-gray-600">{item.recipient}</p>
                            <div className="mt-2 flex justify-between items-center">
                              <p className="text-sm text-gray-500">{item.items}</p>
                              <p className="text-sm font-medium">{item.quantity}</p>
                            </div>
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
                      
                      Quick Actions
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
                    {[
                      { 
                        title: "Add Surplus", 
                        icon: <Package className="h-6 w-6 text-teal-600" />, 
                        color: "bg-teal-50 hover:bg-teal-100" 
                      },
                      { 
                        title: "Request Pickup", 
                        icon: <Truck className="h-6 w-6 text-blue-600" />, 
                        color: "bg-blue-50 hover:bg-blue-100" 
                      },
                      { 
                        title: "Tax Reports", 
                        icon: <CreditCard className="h-6 w-6 text-amber-600" />, 
                        color: "bg-amber-50 hover:bg-amber-100" 
                      },
                      { 
                        title: "View Partners", 
                        icon: <ShoppingBag className="h-6 w-6 text-emerald-600" />, 
                        color: "bg-emerald-50 hover:bg-emerald-100" 
                      },
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