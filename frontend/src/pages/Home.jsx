{/* Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-100 rounded-full filter blur-3xl opacity-30 animate-float" style={{animationDelay: '1.5s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.common.servicesSubtitle}
            </p>
          </div>

          {/* GRILLE CORRIGÉE POUR L'ALIGNEMENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {services.map((service, index) => (
              <div key={index} className="animate-fadeIn flex" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex flex-col w-full h-full bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
                  
                  {/* Contenu de la carte */}
                  <div className="p-8 flex-grow">
                    <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                      <service.icon className="w-7 h-7 text-gray-900" />
                    </div>
                    
                    {/* Hauteur fixe pour le titre afin d'aligner les listes */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 h-14 flex items-center uppercase tracking-tight">
                      {service.title}
                    </h3>
                    
                    <ul className="space-y-3 mb-6">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bas de la carte toujours aligné grâce à mt-auto */}
                  <div className="p-8 pt-0 mt-auto">
                    <Link to={service.link} className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 group text-sm">
                      {t.common.learnMore}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
