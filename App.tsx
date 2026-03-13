import { Plane, Car, Trophy, Users, Sparkles, GraduationCap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-300 to-cyan-300">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 pt-8">
          <div className="inline-block bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-6xl shadow-lg">
              <Sparkles className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
              Viansh Anand
            </h1>
            <p className="text-2xl text-gray-700 font-semibold">Age: 5½ Years</p>
            <p className="text-lg text-gray-600 mt-2 flex items-center justify-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Senior KG at Vibgyor School
            </p>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-3 rounded-xl">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Interests</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                <div className="text-4xl">🏏</div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800">Cricket</h3>
                  <p className="text-gray-600">Loves playing cricket!</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                <div className="text-4xl">⛸️</div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800">Skating</h3>
                  <p className="text-gray-600">Super fast on skates!</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl">
                <Car className="w-12 h-12 text-orange-600" />
                <div>
                  <h3 className="font-bold text-xl text-gray-800">Cars</h3>
                  <p className="text-gray-600">Big fan of cool cars!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-sky-600 p-3 rounded-xl">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Future Dreams</h2>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl p-6">
              <Plane className="w-20 h-20 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
                Fighter Pilot
              </h3>
              <p className="text-center text-gray-600 text-lg">
                Viansh dreams of flying high in the sky and becoming a brave fighter pilot!
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-pink-400 to-rose-500 p-3 rounded-xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Best Friends</h2>
            </div>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6">
              <div className="flex items-center justify-center gap-4">
                <div className="text-5xl">👦</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Utkarsh</h3>
                  <p className="text-gray-600 text-lg">Best buddy forever!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Full of Energy & Ready to Shine!
            </h2>
            <p className="text-xl text-white/90">
              Cute, handsome, and unstoppable - that's Viansh!
            </p>
          </div>
        </div>

        <footer className="text-center mt-12 pb-8">
          <p className="text-white text-lg font-semibold">
            Keep shining bright, Viansh!
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
