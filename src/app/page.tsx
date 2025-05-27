import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Mic, 
  FileText, 
  Clock, 
  Shield, 
  Users, 
  Brain,
  ArrowRight,
  CheckCircle,
  Stethoscope,
  Activity
} from 'lucide-react';
import Link from 'next/link';

const HeadMedHomepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-800">HeadMed</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#solucoes" className="text-slate-600 hover:text-teal-600 font-medium">
                Soluções
              </a>
              <a href="#como-funciona" className="text-slate-600 hover:text-teal-600 font-medium">
                Como Funciona
              </a>
              <a href="#contato" className="text-slate-600 hover:text-teal-600 font-medium">
                Contato
              </a>
              <Link href="/auth/login">
                <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                  Entrar
                </Button>
              </Link>
              <Button className="bg-teal-600 hover:bg-teal-700">
                Começar Agora
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Menos burocracia.
                <span className="text-teal-600 block">Mais saúde.</span>
              </h1>
              <p className="text-xl text-slate-600 mt-6 leading-relaxed">
                Desenvolvemos tecnologias que realmente entendem o ambiente clínico. 
                Nossas soluções de IA são projetadas para profissionais da saúde, 
                adaptando-se às necessidades específicas de cada consultório.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-4">
                  <Mic className="w-5 h-5 mr-2" />
                  Começar Gratuitamente
                </Button>
                <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 text-lg px-8 py-4">
                  Ver Demonstração
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Activity className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Transcrição em Tempo Real</h3>
                    <p className="text-sm text-slate-600">Áudio para prontuário automaticamente</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-teal-600 rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-sm text-slate-600">
                    "Paciente apresenta dor abdominal há 2 dias, localizada em epigástrio..."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="solucoes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Soluções Inteligentes para Profissionais da Saúde
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Acreditamos que os profissionais de saúde não deveriam perder horas preciosas com burocracia. 
              Nosso propósito vai além do lucro: queremos gerar impacto positivo tanto para quem cuida quanto para quem é cuidado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-8 h-8 text-teal-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Transcrição por Voz</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 leading-relaxed">
                  Converta suas consultas faladas em prontuários estruturados automaticamente. 
                  <span className="font-medium text-slate-900"> Economia de até 70% do tempo</span> no preenchimento.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">IA Especializada</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 leading-relaxed">
                  Inteligência artificial treinada especificamente para linguagem médica brasileira.
                  <span className="font-medium text-slate-900"> Precisão de mais de 95%</span> na transcrição.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Prontuários Digitais</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 leading-relaxed">
                  Organize e acesse históricos médicos de forma simples e segura. 
                  <span className="font-medium text-slate-900"> Interface intuitiva</span> para todos os níveis.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Economia de Tempo</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 leading-relaxed">
                  Reduza significativamente o tempo gasto com documentação médica.
                  <span className="font-medium text-slate-900"> Mais tempo para seus pacientes.</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Segurança Total</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 leading-relaxed">
                  Conformidade com LGPD e padrões médicos. Seus dados e os de seus pacientes
                  <span className="font-medium text-slate-900"> sempre protegidos.</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Como Funciona - Simples e Intuitivo
            </h2>
            <p className="text-xl text-slate-600">
              Em apenas 3 passos você digitaliza completamente sua prática médica
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Grave sua Consulta</h3>
              <p className="text-slate-600 leading-relaxed">
                Durante a consulta, simplesmente clique no botão de gravação. 
                Converse normalmente com seu paciente.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">IA Processa o Áudio</h3>
              <p className="text-slate-600 leading-relaxed">
                Nossa inteligência artificial converte sua fala em texto estruturado, 
                organizando as informações automaticamente.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Prontuário Pronto</h3>
              <p className="text-slate-600 leading-relaxed">
                Revise, edite se necessário e salve. Seu prontuário digital 
                está completo em segundos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
                Por que Escolher a HeadMed?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Desenvolvido por Médicos</h3>
                    <p className="text-slate-600">Nossa equipe inclui profissionais da saúde que entendem suas necessidades reais.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Fácil de Usar</h3>
                    <p className="text-slate-600">Interface intuitiva, mesmo para quem tem pouca experiência com tecnologia.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Suporte Nacional</h3>
                    <p className="text-slate-600">Atendimento em português, com equipe que fala a linguagem médica brasileira.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Resultados Comprovados</h3>
                    <p className="text-slate-600">Médicos relatam economia de até 3 horas por dia em documentação.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Stethoscope className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Comece Hoje Mesmo
                </h3>
                <p className="text-slate-600 mb-6">
                  Teste grátis por 14 dias. Sem compromisso, sem cartão de crédito.
                </p>
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 w-full text-lg py-4">
                  Criar Conta Gratuita
                </Button>
                <p className="text-sm text-slate-500 mt-4">
                  ✓ Teste gratuito de 14 dias  ✓ Suporte incluído  ✓ Sem taxas de setup
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">HeadMed</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                Transformando a prática médica através da tecnologia. 
                Menos burocracia, mais tempo para cuidar.
              </p>
              <p className="text-sm text-slate-500">
                © 2024 HeadMed. Todos os direitos reservados.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status do Sistema</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeadMedHomepage;