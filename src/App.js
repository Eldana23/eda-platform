import React, { useState, useEffect } from 'react';
import { Camera, Users, Activity, TrendingUp, Clock, Video, MessageSquare, Settings, LogOut, Bell, Eye, Brain, Zap, BookOpen, Award, AlertCircle, CheckCircle } from 'lucide-react';

const EdaPlatform = () => {
  const [userRole, setUserRole] = useState(null); // 'teacher' or 'student'
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [engagementLevel, setEngagementLevel] = useState(78);
  const [attendanceCount] = useState(24);
  const [notifications] = useState(3);

  // Simulated real-time engagement updates
  useEffect(() => {
    if (isRecording && userRole === 'teacher') {
      const interval = setInterval(() => {
        setEngagementLevel(prev => Math.min(100, Math.max(40, prev + Math.random() * 10 - 5)));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isRecording, userRole]);

  // Logo Component
  const EdaLogo = ({ size = 'normal' }) => {
    const sizes = {
      small: 'w-8 h-8',
      normal: 'w-12 h-12',
      large: 'w-24 h-24'
    };
    
    return (
      <div className="relative">
        <div className={`${sizes[size]} rounded-full bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-purple-500/50`}>
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
            <Camera className="w-1/2 h-1/2 text-purple-400" strokeWidth={2} />
          </div>
        </div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black"></div>
      </div>
    );
  };

  // Login Screen
  const LoginScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <EdaLogo size="large" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-2">
            Eda
          </h1>
          <p className="text-gray-400 text-lg">Your AI Teaching Assistant</p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-2xl p-8 backdrop-blur-xl shadow-2xl shadow-purple-500/10">
          <h2 className="text-2xl font-bold text-white mb-6">Welcome Back</h2>
          
          <div className="space-y-4 mb-6">
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Password</label>
              <input 
                type="password" 
                placeholder="Enter your password"
                className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all"
              />
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => {
                setUserRole('teacher');
                setIsLoggedIn(true);
              }}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              Login as Teacher
            </button>
            <button
              onClick={() => {
                setUserRole('student');
                setIsLoggedIn(true);
              }}
              className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105"
            >
              Login as Student
            </button>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            Don't have an account? <span className="text-purple-400 cursor-pointer hover:underline">Contact your institution</span>
          </p>
        </div>
      </div>
    </div>
  );

  // Teacher Dashboard
  const TeacherDashboard = () => {
    const [edaMessage, setEdaMessage] = useState("Ready to assist you with today's class!");

    const quickStats = [
      { label: 'Attendance', value: `${attendanceCount}/28`, icon: Users, color: 'from-blue-500 to-cyan-500' },
      { label: 'Engagement', value: `${engagementLevel}%`, icon: Activity, color: 'from-purple-500 to-pink-500' },
      { label: 'Active Time', value: '42 min', icon: Clock, color: 'from-green-500 to-emerald-500' },
      { label: 'Participation', value: '89%', icon: TrendingUp, color: 'from-orange-500 to-red-500' }
    ];

    const recentInsights = [
      { text: "Engagement dropped 15% during slide 12-14. Consider adding interactive elements.", type: 'warning', time: '5 min ago' },
      { text: "Great! Student participation increased by 30% after the Q&A session.", type: 'success', time: '12 min ago' },
      { text: "3 students appear distracted. Eda suggests a quick break or activity.", type: 'alert', time: '18 min ago' }
    ];

    return (
      <div className="space-y-6">
        {/* Eda Assistant Card */}
        <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <EdaLogo size="normal" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">Eda</h3>
                <span className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Active
                </span>
              </div>
              <p className="text-purple-200 mb-4">{edaMessage}</p>
              <div className="flex gap-2 flex-wrap">
                <button className="px-4 py-2 bg-purple-600/50 hover:bg-purple-600/70 rounded-lg text-sm text-white transition-all">
                  <Brain className="inline w-4 h-4 mr-1" />
                  Get Insights
                </button>
                <button className="px-4 py-2 bg-purple-600/50 hover:bg-purple-600/70 rounded-lg text-sm text-white transition-all">
                  <MessageSquare className="inline w-4 h-4 mr-1" />
                  Ask Eda
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickStats.map((stat, i) => (
            <div key={i} className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-20`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
              <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Camera & Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Camera Feed */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Camera className="w-5 h-5 text-purple-400" />
                Live Classroom Feed
              </h3>
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  isRecording 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                }`}
              >
                {isRecording ? (
                  <><div className="inline-block w-2 h-2 bg-white rounded-full animate-pulse mr-2"></div>Recording</>
                ) : (
                  <><Video className="inline w-4 h-4 mr-2" />Start Session</>
                )}
              </button>
            </div>
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-purple-500/30">
              <div className="absolute inset-0 flex items-center justify-center">
                {isRecording ? (
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center animate-pulse">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-purple-300">Eda is analyzing classroom engagement...</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Camera className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                    <p className="text-gray-500">Camera feed will appear here</p>
                  </div>
                )}
              </div>
              {isRecording && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-red-600 rounded-full text-xs text-white font-semibold">
                  LIVE
                </div>
              )}
            </div>
          </div>

          {/* Real-time Analytics */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-purple-400" />
              Real-time Engagement
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Overall Engagement</span>
                  <span className="text-white font-semibold">{Math.round(engagementLevel)}%</span>
                </div>
                <div className="h-3 bg-black rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-500 rounded-full"
                    style={{ width: `${engagementLevel}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-black/50 rounded-lg p-4 border border-purple-500/20">
                  <p className="text-gray-400 text-xs mb-1">Attentive</p>
                  <p className="text-2xl font-bold text-green-400">18</p>
                </div>
                <div className="bg-black/50 rounded-lg p-4 border border-purple-500/20">
                  <p className="text-gray-400 text-xs mb-1">Distracted</p>
                  <p className="text-2xl font-bold text-orange-400">6</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-gray-400 text-sm mb-3">Participation Heatmap</p>
                <div className="grid grid-cols-7 gap-2">
                  {[...Array(28)].map((_, i) => (
                    <div 
                      key={i}
                      className="aspect-square rounded"
                      style={{
                        backgroundColor: `rgba(168, 85, 247, ${Math.random() * 0.8 + 0.2})`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Eda Insights */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-purple-400" />
            Eda's Live Insights
          </h3>
          <div className="space-y-3">
            {recentInsights.map((insight, i) => (
              <div key={i} className={`flex items-start gap-3 p-4 rounded-lg border ${
                insight.type === 'warning' ? 'bg-orange-900/20 border-orange-500/30' :
                insight.type === 'success' ? 'bg-green-900/20 border-green-500/30' :
                'bg-red-900/20 border-red-500/30'
              }`}>
                {insight.type === 'warning' ? <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" /> :
                 insight.type === 'success' ? <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" /> :
                 <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />}
                <div className="flex-1">
                  <p className="text-white text-sm">{insight.text}</p>
                  <p className="text-gray-500 text-xs mt-1">{insight.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Student Dashboard
  const StudentDashboard = () => {
    const studentStats = [
      { label: 'Attendance Rate', value: '92%', icon: CheckCircle, color: 'from-green-500 to-emerald-500' },
      { label: 'Engagement Score', value: '85%', icon: Activity, color: 'from-purple-500 to-pink-500' },
      { label: 'Classes This Week', value: '12', icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
      { label: 'Performance', value: 'High', icon: Award, color: 'from-orange-500 to-red-500' }
    ];

    return (
      <div className="space-y-6">
        {/* Eda Welcome */}
        <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <EdaLogo size="normal" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Hi there! 👋</h3>
              <p className="text-purple-200 mb-4">I'm Eda, your learning companion. I'm here to help you track your progress and improve your classroom experience!</p>
              <button className="px-4 py-2 bg-purple-600/50 hover:bg-purple-600/70 rounded-lg text-sm text-white transition-all">
                <MessageSquare className="inline w-4 h-4 mr-1" />
                Chat with Eda
              </button>
            </div>
          </div>
        </div>

        {/* Student Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {studentStats.map((stat, i) => (
            <div key={i} className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-20 inline-block mb-3`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Upcoming Classes */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-purple-400" />
            Today's Schedule
          </h3>
          <div className="space-y-3">
            {[
              { time: '09:00 AM', subject: 'Machine Learning Fundamentals', room: 'Room 301', status: 'completed' },
              { time: '11:00 AM', subject: 'Deep Learning Architectures', room: 'Room 205', status: 'current' },
              { time: '02:00 PM', subject: 'Natural Language Processing', room: 'Room 401', status: 'upcoming' }
            ].map((cls, i) => (
              <div key={i} className={`flex items-center justify-between p-4 rounded-lg border ${
                cls.status === 'current' ? 'bg-purple-900/30 border-purple-500/50' :
                cls.status === 'completed' ? 'bg-gray-900/30 border-gray-700/50' :
                'bg-black/30 border-purple-500/20'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    cls.status === 'current' ? 'bg-purple-600' :
                    cls.status === 'completed' ? 'bg-gray-700' : 'bg-gray-800'
                  }`}>
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{cls.subject}</p>
                    <p className="text-gray-400 text-sm">{cls.time} • {cls.room}</p>
                  </div>
                </div>
                {cls.status === 'current' && (
                  <span className="px-3 py-1 bg-purple-600 rounded-full text-xs text-white font-semibold">
                    In Progress
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Personal Insights */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
            <Brain className="w-5 h-5 text-purple-400" />
            Your Learning Insights
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
              <p className="text-green-400 font-semibold mb-2">Great Job! 🎉</p>
              <p className="text-gray-300 text-sm">Your engagement has improved by 15% this week. Keep up the excellent work!</p>
            </div>
            <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
              <p className="text-blue-400 font-semibold mb-2">Tip from Eda</p>
              <p className="text-gray-300 text-sm">You're most engaged during morning classes. Consider scheduling study sessions in the morning for optimal learning.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Main Layout
  const MainLayout = ({ children }) => (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-purple-500/20 bg-black/40 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <EdaLogo size="small" />
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Eda
                  </h1>
                  <p className="text-xs text-gray-400">AI Teaching Assistant</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button className="relative p-2 hover:bg-purple-500/10 rounded-lg transition-all">
                  <Bell className="w-5 h-5 text-gray-400" />
                  {notifications > 0 && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </button>
                <button className="p-2 hover:bg-purple-500/10 rounded-lg transition-all">
                  <Settings className="w-5 h-5 text-gray-400" />
                </button>
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 rounded-lg text-white transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </div>
  );

  if (!isLoggedIn) {
    return <LoginScreen />;
  }

  return (
    <MainLayout>
      {userRole === 'teacher' ? <TeacherDashboard /> : <StudentDashboard />}
    </MainLayout>
  );
};

export default EdaPlatform;