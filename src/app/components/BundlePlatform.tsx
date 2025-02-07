'use client';

import { Fira_Sans } from 'next/font/google';
import React, { useState } from 'react';
import { Package, BookOpen, Heart, Brain, Briefcase, TrendingUp } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import InteractiveBackground from './InteractiveBackground';
import { Zap, Shield, Clock, Shapes, Award } from 'lucide-react';
import { CheckCircle } from 'lucide-react';


const fira = Fira_Sans({ 
  subsets: ['cyrillic'], 
  weight: ['400', '500', '600', '700'] 
});

const BundlePlatform = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  const bundles = [
    {
      id: 1,
      title: 'Контент бүтээгчийн багц',
      description: 'Контент бүтээх аяллаа эхлүүлэхэд шаардлагатай бүх зүйл',
      price: 149900,
      category: 'creator',
      icon: <Package />,
      popular: true
    },
    {
      id: 2,
      title: 'Оюутны дижитал багц',
      description: 'Суралцах үйл явцаа илүү үр дүнтэй болгох иж бүрэн хэрэгслүүд',
      price: 99900,
      category: 'student',
      icon: <BookOpen />
    },
    {
      id: 3,
      title: 'Өөрийгөө арчлах багц',
      description: 'Өөрийн сайн сайхан байдалд анхаарал хандуулах нөөц материалууд',
      price: 79900,
      category: 'wellness',
      icon: <Heart />
    },
    {
      id: 4,
      title: 'Сэтгэцийн эрүүл мэндийн багц',
      description: 'Сэтгэцийн эрүүл мэндээ хадгалах хэрэгслүүд',
      price: 89900,
      category: 'wellness',
      icon: <Brain />
    },
    {
      id: 5,
      title: 'Карьер сонголтын багц',
      description: 'Ажил мэргэжлийн замналаа итгэлтэйгээр сонгох',
      price: 129900,
      category: 'career',
      icon: <Briefcase />
    },
    {
      id: 6,
      title: 'Бизнес эхлүүлэх багц',
      description: 'Нэмэлт орлогын эх үүсвэрээ бий болгох',
      price: 149900,
      category: 'business',
      icon: <TrendingUp />,
      popular: true
    }
  ];

  const categories = [
    { id: 'all', name: 'Бүх багц' },
    { id: 'creator', name: 'Контент' },
    { id: 'student', name: 'Оюутан' },
    { id: 'wellness', name: 'Эрүүл мэнд' },
    { id: 'career', name: 'Карьер' },
    { id: 'business', name: 'Бизнес' }
  ];

  const filteredBundles = selectedCategory === 'all' 
    ? bundles 
    : bundles.filter(bundle => bundle.category === selectedCategory);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('mn-MN', { style: 'decimal' }).format(price) + '₮';
  };
  const useParallax = () => {
    const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return scrollY;
  };


  const testimonials = [
    {
      id: 1,
      name: "Б. Болормаа",
      role: "Контент Креатор",
      image: "/api/placeholder/48/48",
      content: "Instagram дагагчдын тоо 3 дахин өсч, 7 хоногт 15 цаг хэмнэдэг боллоо",
      metric: "+300%",
      stars: 5
    },
    {
      id: 2,
      name: "Д. Бат-Эрдэнэ",
      role: "Оюутан",
      image: "/api/placeholder/48/48",
      content: "GPA-гээ 3.2-оос 3.8 болгож ахиулсан. Цаг төлөвлөлт үнэхээр сайжирсан",
      metric: "3.8 GPA",
      stars: 5
    },
    {
      id: 3,
      name: "М. Саранцэцэг",
      role: "Бизнес эзэн",
      image: "/api/placeholder/48/48",
      content: "2 сарын дотор сард 2.5 сая төгрөгийн пассив орлоготой болсон",
      metric: "2.5M ₮",
      stars: 4
    },
    {
      id: 4,
      name: "Г. Тэмүүлэн",
      role: "Фрийлансер",
      image: "/api/placeholder/48/48",
      content: "Ажлын бүтээмж 2 дахин өсөж, чанартай захиалга авдаг боллоо",
      metric: "+200%",
      stars: 5
    },
    {
      id: 5,
      name: "О. Намуун",
      role: "Сурагч",
      image: "/api/placeholder/48/48",
      content: "Шалгалтын дүн үлэмж сайжирч, стрессгүй суралцдаг боллоо",
      metric: "A++",
      stars: 4
    },
    {
      id: 6,
      name: "Э. Золбоо",
      role: "Подкастер",
      image: "/api/placeholder/48/48",
      content: "Контент төлөвлөлт, бүтээх урсгал маань бүрэн автоматжсан",
      metric: "-70% цаг",
      stars: 5
    },
    {
      id: 7,
      name: "Б. Сувд",
      role: "Блогер",
      image: "/api/placeholder/48/48",
      content: "Олон платформд зэрэг контент хийх боломжтой боллоо",
      metric: "5X үр дүн",
      stars: 4
    },
    {
      id: 8,
      name: "Д. Төгөлдөр",
      role: "Оюутан",
      image: "/api/placeholder/48/48",
      content: "Хичээлийн хөтөлбөрөө үр дүнтэй удирдаж сурсан",
      metric: "+40% GPA",
      stars: 5
    }
  ];

  const benefits = [
    {
      id: 1,
      icon: <Shapes className="w-6 h-6" />,
      title: "Цогц агуулга",
      description: "Бүх багцууд дотор цогц агуулга, хэрэгслүүд, жишээнүүд багтсан"
    },
    {
      id: 2,
      icon: <Clock className="w-6 h-6" />,
      title: "Цаг хэмнэлт",
      description: "7 хоногт дунджаар 15-20 цаг хэмнэх боломжтой"
    },
    {
      id: 3,
      icon: <Zap className="w-6 h-6" />,
      title: "Хурдан үр дүн",
      description: "Ашиглаж эхэлснээс хойш 14 хоногийн дотор эхний үр дүн гарна"
    },
    {
      id: 4,
      icon: <Shield className="w-6 h-6" />,
      title: "Баталгаат үр дүн",
      description: "30 хоногийн мөнгөн баталгаа, 24/7 тусламж, дэмжлэг"
    },
    {
      id: 5,
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Өсөлтийн зам",
      description: "Алхам алхмаар өсөх тодорхой зам, үр дүнгийн хөтөлбөр"
    },
    {
      id: 6,
      icon: <Award className="w-6 h-6" />,
      title: "Шалгарсан арга",
      description: "10,000+ хэрэглэгчдийн 98% нь үр дүнд хүрсэн"
    }
  ];
  
  const bundleDeals = [
    {
      id: 1,
      title: "Контент + Бизнес багц",
      originalPrice: 299800, // 149900 + 149900
      discountedPrice: 269820, // 10% off
      savings: "29,980₮",
      description: "Контент бүтээгч + Бизнес эхлүүлэгч багцын хослол",
      benefits: [
        "Контент бүтээх бүрэн хэрэгслүүд",
        "Бизнес загварын template-ууд",
        "Автомат постын системүүд",
        "Орлого хийх бэлэн загварууд"
      ]
    },
    {
      id: 2,
      title: "Оюутан + Wellness багц",
      originalPrice: 179800, // 99900 + 79900
      discountedPrice: 161820, // 10% off
      savings: "17,980₮",
      description: "Суралцах + Өөрийгөө хөгжүүлэх иж бүрэн багц",
      benefits: [
        "Суралцах бүх төрлийн аргууд",
        "Стресс менежментийн хэрэгслүүд",
        "Цаг төлөвлөлтийн системүүд",
        "Амжилтын дадал хэвшил"
      ]
    }
  ];
  
  return (
    <div className={`min-h-screen bg-[#f8fafc] ${fira.className}`}>
       <InteractiveBackground />
      {/* Main wrapper with subtle gradient */}
      <div className="relative">
        {/* Background gradient overlay */}
        <div className="fixed inset-0">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-[#5D26C1]/5 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-tl from-[#59C173]/5 to-transparent"></div>
        </div>
  
        {/* Navbar with refined design */}
        <nav className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-sm border-b border-[#5D26C1]/10 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#5D26C1] shadow-lg shadow-[#5D26C1]/20"></div>
                  <span className="text-xl font-medium text-gray-900">mindkit</span>
                </div>
                <div className="hidden md:flex space-x-6">
                  {['Бүтээгдэхүүн', 'Үнэ', 'Тухай'].map((item) => (
                    <a 
                      key={item}
                      href="#" 
                      className="text-gray-600 hover:text-[#5D26C1] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 text-gray-600 hover:text-[#5D26C1] transition-colors duration-300">
                  Нэвтрэх
                </button>
                <button className="px-4 py-2 bg-[#5D26C1] text-white rounded-lg shadow-lg shadow-[#5D26C1]/20 
                                 hover:shadow-[#5D26C1]/30 transition-all duration-300">
                  Бүртгүүлэх
                </button>
              </div>
            </div>
          </div>
        </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-16 relative overflow-hidden">
  {/* Parallax Background Elements */}
  <div 
    className="absolute inset-0 pointer-events-none"
    style={{
      transform: `translateY(${scrollY * 0.1}px)`
    }}
  >
    <div className="absolute top-20 left-10 w-64 h-64 rounded-full 
                    bg-[#5D26C1]/10 blur-3xl mix-blend-multiply"
         style={{
           transform: `translateY(${scrollY * 0.2}px)`
         }}
    />
    <div className="absolute top-40 right-20 w-72 h-72 rounded-full 
                    bg-[#54C0EC]/10 blur-3xl mix-blend-multiply"
         style={{
           transform: `translateY(${scrollY * 0.15}px)`
         }}
    />
  </div>

  <div className="max-w-6xl mx-auto px-4 relative">
    <div className="text-center max-w-2xl mx-auto">
      {/* Floating Elements */}
      <div className="absolute -top-10 left-0 w-20 h-20 
                    bg-gradient-to-br from-[#5D26C1]/20 to-transparent 
                    rounded-full blur-md"
           style={{
             transform: `translate(${scrollY * -0.1}px, ${scrollY * 0.05}px)`
           }}
      />
      <div className="absolute top-20 right-10 w-16 h-16 
                    bg-gradient-to-bl from-[#54C0EC]/20 to-transparent 
                    rounded-full blur-md"
           style={{
             transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.08}px)`
           }}
      />

      <h1 className="relative text-5xl font-medium tracking-tight mb-6 text-gray-900
                     [text-shadow:_0_4px_8px_rgb(0_0_0_/_10%)]">
        Дижитал нөөц багцууд
      </h1>
      <p className="text-lg text-gray-600 relative z-10
                    [text-shadow:_0_2px_4px_rgb(0_0_0_/_5%)]">
        Амжилтад хүрэх замд тань туслах дижитал хэрэгслүүд, загварууд болон нөөц материалын цуглуулга
      </p>
    </div>
  </div>
</div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap gap-3 justify-center p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#5D26C1]/10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 
                         ${selectedCategory === category.id
                           ? 'bg-[#5D26C1] text-white shadow-lg shadow-[#5D26C1]/20'
                           : 'bg-white/80 text-gray-600 hover:bg-white hover:shadow-md'
                         }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards */}
<div className="max-w-6xl mx-auto px-4 pb-16">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {filteredBundles.map(bundle => (
      <Card 
        key={bundle.id} 
        onMouseEnter={() => setHoveredCard(bundle.id)}
        onMouseLeave={() => setHoveredCard(null)}
        className="relative h-[360px] bg-white/70 border-0 rounded-3xl overflow-hidden 
                  transition-all duration-500 animate-float hover:animate-none
                  hover:shadow-[0_0_30px_rgba(93,38,193,0.2)]"
      >
        {/* Animated Blob Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -left-16 -top-16 w-40 h-40 rounded-full 
                        bg-gradient-to-br from-[#5D26C1] to-[#a17fe0] 
                        blur-2xl opacity-40 rotate-12 
                        transition-all duration-500
                        animate-gradient-shift
                        ${hoveredCard === bundle.id ? 'scale-125 opacity-50' : 'scale-100 opacity-40'}`}></div>
          <div className={`absolute -left-8 bottom-0 w-40 h-40 rounded-full 
                        bg-gradient-to-br from-[#54C0EC] to-[#A8EB12] 
                        blur-2xl opacity-30 rotate-45
                        transition-all duration-500 delay-75
                        animate-gradient-shift
                        ${hoveredCard === bundle.id ? 'scale-125 opacity-40' : 'scale-100 opacity-30'}`}></div>
          <div className={`absolute -right-16 -bottom-8 w-40 h-40 rounded-full 
                        bg-gradient-to-br from-[#753a88] to-[#CC2E5C] 
                        blur-2xl opacity-30 -rotate-12
                        transition-all duration-500 delay-150
                        animate-gradient-shift
                        ${hoveredCard === bundle.id ? 'scale-125 opacity-40' : 'scale-100 opacity-30'}`}></div>
          <div className={`absolute -right-16 top-0 w-40 h-40 rounded-full 
                        bg-gradient-to-br from-[#B993D6] to-[#FFA17F] 
                        blur-2xl opacity-30 rotate-45
                        transition-all duration-500 delay-200
                        animate-gradient-shift
                        ${hoveredCard === bundle.id ? 'scale-125 opacity-40' : 'scale-100 opacity-30'}`}></div>
        </div>

        {/* Card Content with Hover Effects */}
        <div className={`relative h-full p-6 backdrop-blur-sm bg-white/30
                        transition-all duration-500
                        ${hoveredCard === bundle.id ? 'bg-white/40' : 'bg-white/30'}`}>
          <CardHeader className="p-0">
            <div className="flex justify-between items-start">
              <div className={`w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm 
                           flex items-center justify-center
                           transition-all duration-500
                           ${hoveredCard === bundle.id ? 'scale-110 shadow-lg' : ''}`}>
                {React.cloneElement(bundle.icon, { 
                  className: `w-6 h-6 transition-colors duration-500
                             ${hoveredCard === bundle.id ? 'text-[#5D26C1]' : 'text-gray-600'}`
                })}
              </div>
              {bundle.popular && (
                <span className="px-3 py-1 rounded-full text-xs font-medium 
                               bg-[#5D26C1] text-white animate-pulse-subtle">
                  Түгээмэл
                </span>
              )}
            </div>
            <CardTitle className={`text-xl font-medium mt-6
                                transition-all duration-500
                                ${hoveredCard === bundle.id ? 'text-[#5D26C1]' : 'text-gray-900'}`}>
              {bundle.title}
            </CardTitle>
            <CardDescription className="text-gray-600 mt-2">{bundle.description}</CardDescription>
          </CardHeader>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="mb-4">
              <span className={`text-2xl font-medium
                            transition-all duration-500
                            ${hoveredCard === bundle.id ? 'text-[#5D26C1]' : 'text-gray-900'}`}>
                {formatPrice(bundle.price)}
              </span>
            </div>
            <button 
  className="group relative px-4 py-2 rounded-xl overflow-hidden
             bg-[#5D26C1] text-white transition-all duration-300"
>
  <span className="relative z-10">Багц авах</span>
  <div className="absolute inset-0 bg-gradient-to-r from-[#5D26C1] to-[#753a88]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300" />
</button>
          </div>
        </div>
      </Card>
    ))}
  </div>
</div>

{/* Benefits */}
<section className="py-24 bg-gradient-to-b from-white/50 to-white/80">
  <div className="max-w-6xl mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl font-medium text-gray-900 mb-4">
        Яагаад бидний багцууд илүү үр дүнтэй вэ?
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Таны амжилтад хүрэх замд туслах онцлог давуу талууд
      </p>
    </div>

    {/* Benefits Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((benefit) => (
        <div
          key={benefit.id}
          className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6
                     border border-black/5 hover:border-[#5D26C1]/20
                     transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-[#5D26C1]/10 flex items-center justify-center mb-4
                        group-hover:bg-[#5D26C1]/20 transition-colors duration-300">
            <div className="text-[#5D26C1]">
              {benefit.icon}
            </div>
          </div>

          {/* Content */}
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {benefit.title}
          </h3>
          <p className="text-gray-600">
            {benefit.description}
          </p>
        </div>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center">
      <div className="inline-flex items-center gap-2 text-[#5D26C1] font-medium">
        <span>Бүх багцуудтай танилцах</span>
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </div>
    </div>
  </div>
</section>

{/* Deals */}
<section className="py-24 bg-gradient-to-br from-[#5D26C1]/5 via-transparent to-[#54C0EC]/5">
  <div className="max-w-6xl mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl font-medium text-gray-900 mb-4">
        Хосолсон багцын хөнгөлөлт
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Хоёр багц хамт авбал 10% хямдралтай
      </p>
    </div>

    {/* Deals Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {bundleDeals.map((deal) => (
        <div
          key={deal.id}
          className="relative bg-white/50 backdrop-blur-md rounded-2xl p-8 
                     border border-[#5D26C1]/10 hover:shadow-xl
                     transition-all duration-300 group"
        >
          {/* Save Badge */}
          <div className="absolute -top-4 right-8 px-4 py-1 bg-[#5D26C1] text-white 
                         rounded-full text-sm font-medium shadow-lg">
            {deal.savings} хэмнэнэ
          </div>

          <h3 className="text-2xl font-medium text-gray-900 mb-4">{deal.title}</h3>
          <p className="text-gray-600 mb-6">{deal.description}</p>

          {/* Price */}
          <div className="mb-6">
            <div className="text-3xl font-bold text-[#5D26C1]">
              {new Intl.NumberFormat('mn-MN').format(deal.discountedPrice)}₮
            </div>
            <div className="text-gray-500 line-through">
              {new Intl.NumberFormat('mn-MN').format(deal.originalPrice)}₮
            </div>
          </div>

          {/* Benefits */}
          <ul className="space-y-3 mb-8">
            {deal.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#5D26C1]" />
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>

          <button className="w-full bg-white/70 text-[#5D26C1] border border-[#5D26C1]/20
                           hover:bg-[#5D26C1] hover:text-white
                           px-6 py-3 rounded-xl font-medium
                           transition-all duration-300">
            Багц авах
          </button>
        </div>
      ))}
    </div>

    {/* Bottom Note */}
    <div className="text-center mt-8 text-gray-600">
      * Хөнгөлөлт 2024 оны 3-р сарын 1 хүртэл үргэлжилнэ
    </div>
  </div>
</section>

<div className="py-24 relative overflow-hidden">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-medium text-gray-900 mb-4">
        Амжилтын түүхүүд
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Манай хэрэглэгчид хэрхэн амжилтад хүрсэн тухай
      </p>
    </div>

    {/* Grid layout for testimonials */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {testimonials.map((story) => (
        <div
          key={story.id}
          className="bg-white/70 backdrop-blur-sm rounded-xl p-4 
                     border border-black/5 shadow-sm hover:shadow-md
                     transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center gap-3 mb-3">
            <img src={story.image} alt={story.name} className="w-12 h-12 rounded-full" />
            <div>
              <h4 className="font-medium text-gray-900">{story.name}</h4>
              <p className="text-sm text-gray-600">{story.role}</p>
            </div>
          </div>
          
          {/* Star Rating */}
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={i < story.stars ? "text-yellow-400" : "text-gray-200"}
              >
                ★
              </span>
            ))}
          </div>

          <p className="text-gray-600 text-sm mb-3">{story.content}</p>
          <div className="text-[#5D26C1] font-medium text-sm">{story.metric}</div>
        </div>
      ))}
    </div>
  </div>
</div>   

       
    {/* Footer */}
      <footer className="relative border-t border-[#5D26C1]/10">
        {/* Subtle footer background effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#5D26C1]/5 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#54C0EC]/10 blur-3xl rounded-full"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#5D26C1] shadow-lg shadow-[#5D26C1]/20"></div>
                <span className="text-xl font-medium text-gray-900">mindkit</span>
              </div>
              <p className="text-gray-600">Таны амжилтын түлхүүр</p>
            </div>
            
            {/* Product Links */}
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Бүтээгдэхүүн</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#5D26C1] transition-colors duration-300">
                    Багцууд
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#5D26C1] transition-colors duration-300">
                    Үнэ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#5D26C1] transition-colors duration-300">
                    Шинэ
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Company Links */}
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Компани</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#5D26C1] transition-colors duration-300">
                    Бидний тухай
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#5D26C1] transition-colors duration-300">
                    Ажлын байр
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#5D26C1] transition-colors duration-300">
                    Блог
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Help Links */}
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Тусламж</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#5D26C1] transition-colors duration-300">
                    Холбоо барих
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#5D26C1] transition-colors duration-300">
                    Түгээмэл асуултууд
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#5D26C1] transition-colors duration-300">
                    Нууцлал
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-[#5D26C1]/10 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2025 mindkit. Бүх эрх хуулиар хамгаалагдсан.</p>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default BundlePlatform;