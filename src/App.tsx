import React from 'react';
// import Header from './components/Header/header';

function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
      {/* Artistic background elements */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_0%_0%,#ffffff10_1px,transparent_100px)] opacity-40" />
      <div className="fixed right-0 top-0 w-1/3 h-screen bg-gradient-to-b from-white/[0.02] via-transparent to-transparent blur-3xl" />
      
      {/* <Header /> */}
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="max-w-5xl text-center relative z-10">
          <div className="relative inline-block">
            <h1 className="text-7xl md:text-9xl font-thin mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 
              bg-clip-text text-transparent animate-fade-in relative z-10 tracking-tight">
              Preston Thiele
            </h1>
            <div className="absolute -inset-x-8 top-0 h-full bg-gradient-to-r from-white/[0.02] to-transparent 
                          blur-2xl -z-10 rounded-full" />
          </div>

          <div className="flex gap-6 justify-center animate-fade-in delay-300">
            {[
              { name: 'GitHub', url: 'https://github.com/preston-thiele' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/preston-thiele-459b131aa/' }
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                className="group relative px-4 py-1.5 rounded-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] to-white/[0.03] 
                              group-hover:from-white/[0.1] group-hover:to-white/[0.05] transition-all duration-500" />
                <div className="absolute inset-0 border border-white/10 rounded-full group-hover:border-white/20 
                              transition-colors duration-500" />
                <span className="relative text-sm text-gray-300 group-hover:text-white transition-colors duration-500">
                  {platform.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
