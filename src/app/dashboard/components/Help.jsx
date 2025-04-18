import { useState } from 'react';
import { 
  LifeBuoy, Phone, Mail, MessageSquare, AlertCircle, 
  FileText, Calendar, Droplet, Sun, CloudRain, 
  Thermometer, Zap, Shield, Database, BarChart2,
  ChevronDown, ChevronUp, Search, X
} from 'lucide-react';

const HelpCenter = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [activeResource, setActiveResource] = useState(null);

  // FAQ Categories
  const faqCategories = [
    {
      id: 'account',
      title: 'Account & Profile',
      icon: <Shield size={18} className="mr-2" />,
      questions: [
        {
          id: 1,
          question: 'How do I update my farm details?',
          answer: 'You can update your farm details by going to your profile page and clicking the "Edit Profile" button. Make sure to save your changes before exiting.'
        },
        {
          id: 2,
          question: 'How do I reset my password?',
          answer: 'Click on "Forgot Password" on the login page. You\'ll receive an email with instructions to reset your password.'
        }
      ]
    },
    {
      id: 'listings',
      title: 'Surplus Listings',
      icon: <Database size={18} className="mr-2" />,
      questions: [
        {
          id: 3,
          question: 'How do I add a new surplus listing?',
          answer: 'Navigate to the "Add Surplus" page from the sidebar. Fill in all required details about your produce and submit the form.'
        },
        {
          id: 4,
          question: 'Can I edit a listing after posting?',
          answer: 'Yes, go to "My Listings" and click the edit icon next to the listing you want to modify. Note that some fields may be locked after receiving offers.'
        }
      ]
    },
    {
      id: 'donations',
      title: 'Donations',
      icon: <LifeBuoy size={18} className="mr-2" />,
      questions: [
        {
          id: 5,
          question: 'How does the donation process work?',
          answer: 'When you mark produce as available for donation, local organizations can request it. You\'ll receive notifications and can approve or decline requests.'
        },
        {
          id: 6,
          question: 'Do I get any benefits for donations?',
          answer: 'Yes! Donations qualify you for tax deductions and our "Community Champion" rewards program with exclusive benefits.'
        }
      ]
    },
    {
      id: 'weather',
      title: 'Weather & Alerts',
      icon: <CloudRain size={18} className="mr-2" />,
      questions: [
        {
          id: 7,
          question: 'How do weather alerts work?',
          answer: 'Our system monitors local weather and sends you alerts for conditions that may affect your crops (frost, heavy rain, etc.) based on your location.'
        },
        {
          id: 8,
          question: 'Can I customize alert preferences?',
          answer: 'Yes, go to Settings > Notifications to select which alerts you want to receive and how (email, SMS, or app notification).'
        }
      ]
    },
    {
      id: 'ai',
      title: 'AI Insights',
      icon: <BarChart2 size={18} className="mr-2" />,
      questions: [
        {
          id: 9,
          question: 'How does the AI crop prediction work?',
          answer: 'Our AI analyzes your historical data, current weather patterns, and market trends to provide personalized yield predictions and planting suggestions.'
        },
        {
          id: 10,
          question: 'How accurate are the predictions?',
          answer: 'Our models have an 85-90% accuracy rate for most common crops. Accuracy improves as you provide more data about your specific farming practices.'
        }
      ]
    }
  ];

  // Emergency contacts
  const emergencyContacts = [
    {
      name: 'Agricultural Emergency',
      number: '1800-AG-HELP',
      description: '24/7 support for crop diseases, pest outbreaks'
    },
    {
      name: 'Weather Hotline',
      number: '1800-WEATHER',
      description: 'Real-time weather updates and advisories'
    },
    {
      name: 'Market Price Info',
      number: '1800-MARKET',
      description: 'Daily commodity prices and trends'
    },
    {
      name: 'Soil Testing',
      number: '1800-SOIL-LAB',
      description: 'Schedule soil sample pickups and get results'
    }
  ];

  // Resources data
  const resources = {
    guides: [
      {
        id: 1,
        title: 'Organic Farming Handbook',
        description: 'Complete guide to transitioning to organic practices',
        type: 'pdf'
      },
      {
        id: 2,
        title: 'Pest Management Guide',
        description: 'Identify and control common agricultural pests',
        type: 'pdf'
      },
      {
        id: 3,
        title: 'Market Pricing Trends',
        description: 'Annual report on commodity price fluctuations',
        type: 'pdf'
      }
    ],
    programs: [
      {
        id: 1,
        title: 'Subsidy Applications',
        description: 'Current agricultural subsidy programs and application deadlines'
      },
      {
        id: 2,
        title: 'Disaster Relief',
        description: 'Financial assistance programs for weather-related crop losses'
      },
      {
        id: 3,
        title: 'Conservation Programs',
        description: 'Incentives for implementing sustainable farming practices'
      }
    ],
    tools: [
      {
        id: 1,
        title: 'Seasonal Guides',
        description: 'Month-by-month farming calendars tailored to your region and crops.',
        icon: <Calendar className="h-6 w-6 text-teal-600" />
      },
      {
        id: 2,
        title: 'Irrigation Calculator',
        description: 'Tools to optimize water usage based on your crops and soil type.',
        icon: <Droplet className="h-6 w-6 text-blue-600" />
      },
      {
        id: 3,
        title: 'Crop Planning',
        description: 'Interactive tools to plan crop rotations and maximize yield.',
        icon: <Sun className="h-6 w-6 text-green-600" />
      }
    ]
  };

  // Emergency tools
  const emergencyTools = [
    {
      id: 1,
      title: 'Report Crop Disease',
      content: (
        <div className="p-4">
          <h4 className="font-medium mb-2">Report a Crop Disease</h4>
          <p className="text-sm text-gray-600 mb-4">
            Please describe the symptoms you're observing, affected crops, and upload photos if possible.
          </p>
          <textarea 
            className="w-full p-2 border border-gray-300 rounded mb-2" 
            placeholder="Describe the issue..."
            rows={3}
          ></textarea>
          <input type="file" className="mb-3" />
          <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            Submit Report
          </button>
        </div>
      )
    },
    {
      id: 2,
      title: 'Request Soil Test',
      content: (
        <div className="p-4">
          <h4 className="font-medium mb-2">Request a Soil Test</h4>
          <p className="text-sm text-gray-600 mb-4">
            Provide details about your field location and what tests you need.
          </p>
          <div className="space-y-3">
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded" 
              placeholder="Field location/coordinates"
            />
            <select className="w-full p-2 border border-gray-300 rounded">
              <option>Select test type</option>
              <option>Basic nutrient analysis</option>
              <option>Complete soil health</option>
              <option>Heavy metal screening</option>
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Request Test
            </button>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Emergency Irrigation Support',
      content: (
        <div className="p-4">
          <h4 className="font-medium mb-2">Emergency Irrigation Request</h4>
          <p className="text-sm text-gray-600 mb-4">
            Describe your irrigation emergency and current water availability.
          </p>
          <textarea 
            className="w-full p-2 border border-gray-300 rounded mb-2" 
            placeholder="Describe your situation..."
            rows={3}
          ></textarea>
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Request Assistance
          </button>
        </div>
      )
    },
    {
      id: 4,
      title: 'Livestock Emergency',
      content: (
        <div className="p-4">
          <h4 className="font-medium mb-2">Livestock Emergency</h4>
          <p className="text-sm text-gray-600 mb-4">
            Please describe the issue with your livestock and any symptoms observed.
          </p>
          <div className="space-y-3">
            <select className="w-full p-2 border border-gray-300 rounded">
              <option>Select animal type</option>
              <option>Cattle</option>
              <option>Poultry</option>
              <option>Swine</option>
              <option>Sheep/Goats</option>
            </select>
            <textarea 
              className="w-full p-2 border border-gray-300 rounded" 
              placeholder="Describe the issue..."
              rows={3}
            ></textarea>
            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              Request Veterinary Help
            </button>
          </div>
        </div>
      )
    }
  ];

  // Filter FAQs based on search
  const filteredFaqs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert(`Thank you, ${contactForm.name}! Your message has been submitted. We'll respond within 24 hours.`);
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const startLiveChat = () => {
    setIsChatOpen(true);
    setChatMessages([
      {
        id: 1,
        sender: 'support',
        text: 'Hello! Thank you for reaching out to Farmer Support. How can we help you today?',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const sendChatMessage = (e) => {
    e.preventDefault();
    if (chatInput.trim() === '') return;
    
    const newMessage = {
      id: chatMessages.length + 1,
      sender: 'user',
      text: chatInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setChatMessages([...chatMessages, newMessage]);
    setChatInput('');
    
    // Simulate response after 1 second
    setTimeout(() => {
      const responseMessage = {
        id: chatMessages.length + 2,
        sender: 'support',
        text: 'Thank you for your message. Let me check that for you...',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages(prev => [...prev, responseMessage]);
    }, 1000);
  };

  const toggleEmergencyTool = (id) => {
    setActiveResource(activeResource === id ? null : id);
  };

  const downloadResource = (title) => {
    alert(`Downloading ${title}.pdf...`);
    // In a real app, this would trigger an actual file download
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-teal-100 text-teal-800 rounded-full p-3 mb-4">
          <LifeBuoy size={32} />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Farmer Help Center</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get answers to your questions, connect with experts, and access emergency resources for your farming needs.
        </p>
      </div>

      {/* Help Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <button 
          onClick={() => setActiveTab('faq')}
          className={`flex flex-col items-center p-6 rounded-xl transition-all ${
            activeTab === 'faq' 
              ? 'bg-teal-600 text-white shadow-lg' 
              : 'bg-white text-gray-800 border border-gray-200 hover:border-teal-300'
          }`}
        >
          <FileText size={24} className="mb-3" />
          <span className="font-medium">FAQs</span>
        </button>
        <button 
          onClick={() => setActiveTab('contact')}
          className={`flex flex-col items-center p-6 rounded-xl transition-all ${
            activeTab === 'contact' 
              ? 'bg-teal-600 text-white shadow-lg' 
              : 'bg-white text-gray-800 border border-gray-200 hover:border-teal-300'
          }`}
        >
          <MessageSquare size={24} className="mb-3" />
          <span className="font-medium">Contact Us</span>
        </button>
        <button 
          onClick={() => setActiveTab('emergency')}
          className={`flex flex-col items-center p-6 rounded-xl transition-all ${
            activeTab === 'emergency' 
              ? 'bg-teal-600 text-white shadow-lg' 
              : 'bg-white text-gray-800 border border-gray-200 hover:border-teal-300'
          }`}
        >
          <AlertCircle size={24} className="mb-3" />
          <span className="font-medium">Emergency</span>
        </button>
        <button 
          onClick={() => setActiveTab('resources')}
          className={`flex flex-col items-center p-6 rounded-xl transition-all ${
            activeTab === 'resources' 
              ? 'bg-teal-600 text-white shadow-lg' 
              : 'bg-white text-gray-800 border border-gray-200 hover:border-teal-300'
          }`}
        >
          <Database size={24} className="mb-3" />
          <span className="font-medium">Resources</span>
        </button>
      </div>

      {/* FAQ Section */}
      {activeTab === 'faq' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search help articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map(category => (
                <div key={category.id} className="p-6">
                  <div className="flex items-center text-lg font-semibold text-gray-900 mb-4">
                    {category.icon}
                    {category.title}
                  </div>
                  <div className="space-y-4">
                    {category.questions.map(q => (
                      <div key={q.id} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleFaq(q.id)}
                          className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition"
                        >
                          <span className="text-left font-medium text-gray-800">{q.question}</span>
                          {expandedFaq === q.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                        {expandedFaq === q.id && (
                          <div className="p-4 bg-gray-50 text-gray-700 border-t border-gray-200">
                            {q.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-12 text-center">
                <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
                  <Search size={24} className="mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No results found</h3>
                <p className="text-gray-500">Try different search terms or browse the categories</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Contact Section */}
      {activeTab === 'contact' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <form onSubmit={handleContactSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="account">Account Help</option>
                    <option value="listings">Surplus Listings</option>
                    <option value="donations">Donations</option>
                    <option value="technical">Technical Issues</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Other ways to reach us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-100 rounded-lg p-3 mr-4">
                    <Phone className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone Support</h4>
                    <p className="text-gray-600 mt-1">Call our farmer support line</p>
                    <a href="tel:18003277435" className="text-teal-600 font-medium mt-2 hover:text-teal-700">1-800-FARM-HELP</a>
                    <p className="text-sm text-gray-500 mt-1">Monday-Friday, 7am-7pm EST</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-100 rounded-lg p-3 mr-4">
                    <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email Us</h4>
                    <p className="text-gray-600 mt-1">Send us an email anytime</p>
                    <a href="mailto:support@farmportal.com" className="text-teal-600 font-medium mt-2 hover:text-teal-700">support@farmportal.com</a>
                    <p className="text-sm text-gray-500 mt-1">Typically respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-100 rounded-lg p-3 mr-4">
                    <MessageSquare className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Live Chat</h4>
                    <p className="text-gray-600 mt-1">Chat with a support agent</p>
                    <button 
                      onClick={startLiveChat}
                      className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium mt-2 hover:bg-gray-200 transition"
                    >
                      Start Chat
                    </button>
                    <p className="text-sm text-gray-500 mt-1">Available 9am-5pm EST</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Forum</h3>
              <p className="text-gray-600 mb-4">
                Connect with other farmers, share tips, and get advice from agricultural experts in our community forum.
              </p>
              <button 
                onClick={() => alert('Redirecting to Farmer Forum...')}
                className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition"
              >
                Visit Farmer Forum
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Live Chat Modal */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-6 w-96 bg-white rounded-xl shadow-xl border border-gray-200 z-50">
          <div className="bg-teal-600 text-white p-4 rounded-t-xl flex justify-between items-center">
            <h3 className="font-medium">Farmer Support Chat</h3>
            <button onClick={() => setIsChatOpen(false)} className="text-white hover:text-gray-200">
              <X size={20} />
            </button>
          </div>
          <div className="h-80 overflow-y-auto p-4 space-y-3">
            {chatMessages.map(msg => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-xs p-3 rounded-lg ${
                    msg.sender === 'user' 
                      ? 'bg-teal-600 text-white rounded-tr-none' 
                      : 'bg-gray-100 text-gray-800 rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-teal-200' : 'text-gray-500'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={sendChatMessage} className="p-3 border-t border-gray-200">
            <div className="flex">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-teal-600 text-white rounded-r-lg hover:bg-teal-700"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Emergency Section */}
      {activeTab === 'emergency' && (
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 bg-red-50 border-b border-red-200">
              <h2 className="text-2xl font-bold text-red-800 flex items-center">
                <AlertCircle className="mr-3" size={24} />
                Emergency Contacts
              </h2>
              <p className="text-red-700 mt-2">
                Immediate assistance for critical farming situations
              </p>
            </div>
            <div className="divide-y divide-gray-200">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-red-100 rounded-full p-3 mr-4">
                      <Phone className="h-5 w-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{contact.name}</h3>
                      <p className="text-gray-600 mt-1">{contact.description}</p>
                      <div className="mt-3 flex items-center">
                        <a 
                          href={`tel:${contact.number.replace(/-/g, '')}`}
                          className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
                        >
                          Call {contact.number}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Thermometer className="mr-3 text-yellow-600" size={24} />
                Crop Emergency Guide
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-medium text-yellow-800 mb-2">Pest Outbreak</h4>
                  <p className="text-yellow-700 text-sm mb-2">
                    Identify common pests and immediate containment measures to protect your crops.
                  </p>
                  <button 
                    onClick={() => alert('Opening Pest Outbreak Guide...')}
                    className="text-yellow-700 hover:text-yellow-800 text-sm font-medium"
                  >
                    View Guide →
                  </button>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-medium text-red-800 mb-2">Disease Control</h4>
                  <p className="text-red-700 text-sm mb-2">
                    Steps to isolate and treat common plant diseases to prevent spread.
                  </p>
                  <button 
                    onClick={() => alert('Opening Disease Control Guide...')}
                    className="text-red-700 hover:text-red-800 text-sm font-medium"
                  >
                    View Guide →
                  </button>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-800 mb-2">Weather Damage</h4>
                  <p className="text-blue-700 text-sm mb-2">
                    Recovery procedures after hail, frost, or flood damage to your fields.
                  </p>
                  <button 
                    onClick={() => alert('Opening Weather Damage Guide...')}
                    className="text-blue-700 hover:text-blue-800 text-sm font-medium"
                  >
                    View Guide →
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Zap className="mr-3 text-purple-600" size={24} />
                Quick Response Tools
              </h3>
              <div className="space-y-4">
                {emergencyTools.map(tool => (
                  <div key={tool.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleEmergencyTool(tool.id)}
                      className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition"
                    >
                      <span className="font-medium">{tool.title}</span>
                      {activeResource === tool.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {activeResource === tool.id && (
                      <div className="bg-gray-50 border-t border-gray-200">
                        {tool.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resources Section */}
      {activeTab === 'resources' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.tools.map(tool => (
              <div key={tool.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="bg-teal-100 rounded-lg p-3 inline-flex mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.title}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <button 
                  onClick={() => alert(`Opening ${tool.title} tool...`)}
                  className="px-4 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition"
                >
                  {tool.title.includes('Guide') ? 'View Guide' : 'Open Tool'}
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.guides.map(guide => (
                <div key={guide.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
                  <div className="h-40 bg-gray-100 flex items-center justify-center">
                    <FileText className="h-12 w-12 text-gray-400" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">{guide.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{guide.description}</p>
                    <button 
                      onClick={() => downloadResource(guide.title)}
                      className="text-teal-600 font-medium text-sm hover:text-teal-700"
                    >
                      Download PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Government Programs</h2>
            <div className="space-y-4">
              {resources.programs.map(program => (
                <div key={program.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-white transition">
                  <h3 className="font-medium text-gray-900 mb-1">{program.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{program.description}</p>
                  <button 
                    onClick={() => alert(`Opening ${program.title} information...`)}
                    className="text-sm text-teal-600 hover:text-teal-700 font-medium"
                  >
                    Learn more →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpCenter;