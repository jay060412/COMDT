/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Monitor, 
  Cpu, 
  TrendingUp, 
  ShieldCheck, 
  Download, 
  ArrowRight, 
  BarChart3,
  Waves
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div
    variants={fadeInUp}
    className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
  >
    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm lg:text-base">
      {description}
    </p>
  </motion.div>
);

export default function App() {
  const handleDownload = () => {
    alert("컴닥터 다운로드 준비 중입니다.");
  };

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      {/* 1. Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fcfcfd]/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
              <Monitor size={18} />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900">컴닥터</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase bg-slate-100 px-2 py-1 rounded">
              MVP PROTOTYPE v0.1
            </span>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24">
        {/* 2. Main Hero Section */}
        <section className="px-6 mb-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span 
                variants={fadeInUp}
                className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full"
              >
                Simple, Fast, Professional
              </motion.span>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6"
              >
                내 PC를 위한 <br />
                <span className="italic text-indigo-600 relative inline-block">
                  최적의 업그레이드
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-1 bg-indigo-100/50 -z-10"
                  />
                </span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10"
              >
                컴닥터는 사용자의 PC 상태를 분석하여 불필요한 지출 없이 <br className="hidden md:block" />
                꼭 필요한 업그레이드와 관리 방향을 제안합니다.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4">
                <button
                  id="cta-download"
                  onClick={handleDownload}
                  className="group flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-semibold text-lg hover:bg-indigo-700 hover:shadow-2xl hover:shadow-indigo-200 transition-all duration-300 active:scale-95"
                >
                  컴닥터 다운로드
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-1.5 text-sm text-slate-400 font-medium">
                  <span className="text-yellow-500">⚡</span>
                  설치 후 약 5분 내 기본 진단 완료
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Hero Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-50/50 rounded-full blur-3xl opacity-60" />
        </div>

        {/* 3. Features Section */}
        <section className="px-6 mb-32">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <FeatureCard 
                icon={Cpu}
                title="실시간 PC 상태 확인"
                description="CPU, GPU, 메모리, 저장장치 등 주요 부품 상태를 한눈에 확인합니다."
                delay={0.1}
              />
              <FeatureCard 
                icon={Waves}
                title="병목 및 성능 저하 분석"
                description="사용자의 PC 사용 패턴을 기반으로 성능 저하 원인을 분석합니다."
                delay={0.2}
              />
              <FeatureCard 
                icon={TrendingUp}
                title="업그레이드 시점 예측"
                description="단순 견적 추천이 아닌, 실제 사용 환경에 맞는 업그레이드 시점을 제안합니다."
                delay={0.3}
              />
              <FeatureCard 
                icon={BarChart3}
                title="AI 기반 리포트"
                description="복잡한 하드웨어 정보를 쉽게 이해할 수 있는 자동 분석 리포트로 제공합니다."
                delay={0.4}
              />
            </motion.div>
          </div>
        </section>

        {/* 4. Bottom Statement */}
        <section className="px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-12 lg:p-16 rounded-[40px] bg-indigo-50/30 border border-indigo-100 text-center overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-50/50 to-transparent pointer-events-none" />
              <ShieldCheck size={48} className="mx-auto mb-8 text-indigo-500 opacity-20" />
              <p className="text-xl lg:text-2xl font-semibold text-slate-800 leading-relaxed relative z-10">
                “컴닥터는 단순한 PC 견적 추천 서비스를 넘어, <br />
                사용자의 PC 라이프사이클 전체를 관리하는 <br className="md:hidden" /> 
                <span className="text-indigo-600">PC 모니터링 플랫폼</span>을 목표로 합니다.”
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50 grayscale">
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
              <Monitor size={14} />
            </div>
            <span className="font-bold text-sm tracking-tight text-slate-900">컴닥터</span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2026 ComDoctor. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
