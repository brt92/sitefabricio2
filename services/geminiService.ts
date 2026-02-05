import { GoogleGenAI } from "@google/genai";
import { SERVICES, COMPANY_INFO } from "../constants";

const SYSTEM_INSTRUCTION = `
Você é o Assistente Virtual Técnico da Fabrício Indústria Petroquímica.
Sua função é ajudar clientes com informações sobre micronização, recuperação de plásticos e serviços industriais.

Informações da Empresa:
${COMPANY_INFO.history}
Endereço: ${COMPANY_INFO.address}
Contato: ${COMPANY_INFO.phone} | ${COMPANY_INFO.email}
Horário: ${COMPANY_INFO.hours}

Serviços Principais:
${SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n')}

Infraestrutura:
- Área de 6.000m² no III Polo Petroquímico (Triunfo-RS).
- Laboratório próprio para testes mecânicos e físico-químicos.
- Frota própria para logística ágil.

Diretrizes:
1. Seja profissional, técnico e cortês.
2. O foco da empresa é PLÁSTICOS (micronização, beneficiamento, recuperação), não solventes químicos líquidos.
3. Responda em Português do Brasil.
4. Mantenha as respostas concisas (máximo 3 parágrafos).
5. Para orçamentos, direcione para o formulário de contato ou telefone/email.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  // Fix: Ensure process.env.API_KEY is available before proceeding
  if (!process.env.API_KEY) {
    return "Desculpe, o sistema de IA não está configurado corretamente (falta chave API). Por favor, ligue para nós em " + COMPANY_INFO.phone;
  }

  try {
    // Fix: Instantiate GoogleGenAI right before the call to ensure the latest configuration is used
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Fix: Use 'gemini-3-flash-preview' for basic text/Q&A tasks as recommended
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });
    
    // Fix: Access the text property directly on the response object (it's not a method)
    return response.text || "Desculpe, não consegui processar sua solicitação no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro temporário na comunicação. Por favor, tente novamente ou entre em contato por telefone.";
  }
};