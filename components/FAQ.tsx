
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "Preciso pagar alguma mensalidade?",
    answer: "Não. O Whitelist Pay é totalmente livre de mensalidades ou custos fixos. Você pode instalar, configurar e manter o bot no seu servidor sem pagar nada por mês, independente do tamanho da sua cidade."
  },
  {
    question: "Como funciona a taxa de 8.99%?",
    answer: "Essa é uma taxa administrativa cobrada apenas quando você realiza uma venda. Ela já inclui os custos bancários de processamento do PIX e a manutenção da infraestrutura do bot. Se você vender uma Whitelist por R$ 20,00, a taxa será de R$ 1,80 e você receberá R$ 18,20. Se não vender nada, não paga nada."
  },
  {
    question: "Como eu recebo o dinheiro das vendas?",
    answer: "O seu valor das vendas fica acumulado como saldo na sua carteira virtual dentro da nossa dashboard. Você pode solicitar o saque via PIX a qualquer momento, e o valor será transferido para a chave indicada em até 24 horas."
  },
  {
    question: "É difícil de configurar?",
    answer: "Zero dificuldade. O Whitelist Pay foi feito para ser 'Plug & Play'. Basta convidar o bot para o seu Discord, fazer algumas configurações básicas e começar a vender, pronto. Não precisa saber programação, é simples e fácil."
  },
  {
    question: "O bot é seguro para minha cidade?",
    answer: "Sim! O Whitelist Pay só pede as permissões necessárias	para funcionar dentro do Discord da sua cidade. Nunca acessamos arquivos da sua base, além da database para a liberação automática, ou informações sensíveis dos seus jogadores. Sua comunidade está segura."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-zinc-400">Tire suas dúvidas e comece a faturar hoje mesmo.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className={`glass-panel rounded-xl transition-all duration-300 ${openIndex === index ? 'bg-white/5 border-white/10' : 'hover:bg-white/5 border-white/5'}`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-medium text-lg ${openIndex === index ? 'text-white' : 'text-zinc-300'}`}>
                  {item.question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-white text-black' : 'bg-white/5 text-zinc-400'}`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-zinc-400 leading-relaxed border-t border-white/5 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
