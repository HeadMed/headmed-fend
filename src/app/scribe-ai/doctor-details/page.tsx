import React from "react";
import { Phone, Mail, Award, Users, Clock, Star } from "lucide-react";

export default function DoctorProfile() {
  const doctor = {
    name: "Dr. Maria Silva Santos",
    specialty: "Cardiologista",
    crm: "CRM/SP 123456",
    rating: 4.9,
    totalConsultations: 2847,
    yearsExperience: 15,
    education: [
      "Graduação em Medicina",
      "Residência em Cardiologia",
      "Pós-graduação em Hemodinâmica",
    ],
    specializations: [
      "Cardiologia Intervencionista",
      "Hemodinâmica",
      "Ecocardiografia",
      "Eletrocardiografia",
    ],
    contact: {
      phone: "(11) 99999-9999",
      email: "dra.maria@clinica.com.br",
    },
    schedule: {
      weekdays: "Segunda a Sexta: 08h às 18h",
      saturday: "Sábado: 08h às 12h",
      sunday: "Domingo: Fechado",
    },
    about:
      "Especialista em Cardiologia com mais de 15 anos de experiência. Dedica-se ao tratamento de doenças cardiovasculares com foco em procedimentos minimamente invasivos e cuidado humanizado.",
  };

  return (
    <div className="min-h-screen w-full bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 border-0 shadow-lg bg-white rounded-lg">
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 border-4 border-teal-600 rounded-full bg-teal-600 flex items-center justify-center">
                <span className="text-2xl font-semibold text-white">MS</span>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2 text-slate-800">
                  {doctor.name}
                </h1>
                <p className="text-xl mb-3 text-teal-600">{doctor.specialty}</p>
                <p className="text-sm mb-4 text-slate-600">{doctor.crm}</p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold text-slate-800">
                      {doctor.rating}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-teal-600" />
                    <span className="text-slate-600">
                      {doctor.totalConsultations.toLocaleString()} consultas
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-teal-600" />
                    <span className="text-slate-600">
                      {doctor.yearsExperience} anos de experiência
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="border-0 shadow-lg bg-white rounded-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Sobre o Médico
                </h3>
                <p className="leading-relaxed text-slate-600">{doctor.about}</p>
              </div>
            </div>

            <div className="border-0 shadow-lg bg-white rounded-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Formação Acadêmica
                </h3>
                <div className="space-y-3">
                  {doctor.education.map((edu, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                      <span className="text-slate-600">{edu}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-0 shadow-lg bg-white rounded-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Especializações
                </h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.specializations.map((spec, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-white font-medium bg-teal-600 hover:bg-teal-700 rounded-full text-sm"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="border-0 shadow-lg bg-white rounded-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-0.5 text-teal-600" />
                    <div>
                      <p className="font-medium text-slate-800">Telefone</p>
                      <p className="text-sm text-slate-600">
                        {doctor.contact.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-0.5 text-teal-600" />
                    <div>
                      <p className="font-medium text-slate-800">Email</p>
                      <p className="text-sm text-slate-600">
                        {doctor.contact.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-0 shadow-lg bg-white rounded-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-slate-800 mb-4">
                  <Clock className="w-5 h-5" />
                  Horários de Atendimento
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-teal-600">Segunda a Sexta</p>
                    <p className="text-sm text-slate-600">08h às 18h</p>
                  </div>
                  <div>
                    <p className="font-medium text-teal-600">Sábado</p>
                    <p className="text-sm text-slate-600">08h às 12h</p>
                  </div>
                  <div>
                    <p className="font-medium text-teal-600">Domingo</p>
                    <p className="text-sm text-slate-600">Fechado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-0 shadow-lg bg-teal-100 rounded-lg">
              <div className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-slate-800">
                    {doctor.totalConsultations.toLocaleString()}
                  </div>
                  <p className="text-sm font-medium text-teal-600">
                    Consultas Realizadas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
