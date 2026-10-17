# Alice Oliveira Holistic

Cria um website completo (design + conteúdo + componentes) para uma Terapeuta Holística chamada Alice Oliveira, com foco em gerar contactos e marcações. O site deve ser muito energético e visual, com efeitos de UI modernos e elegantes (aurora/glow/partículas), mas mantendo um aspeto premium e limpo (não brega).
Importante: não mostrar preços em nenhuma secção pública. O objetivo é levar a pessoa a pedir informação e marcar.




Identidade & estilo
	•	Paleta holística premium (sem arco-íris): lilás/roxo claro + teal suave + dourado subtil, com fundo claro espiritual ou “noite cósmica” suave (escolhe o melhor).
	•	Componentes glass, bordas 1px, sombras leves, radius 18–22px.
	•	Tipografia elegante e moderna, muito legível.




Efeitos de UI (visíveis em gravação) — obrigatórios
	1.	Aurora background animada no hero (8–12s loop, subtil).
	2.	Partículas/bokeh orbs discretas a flutuar no fundo (baixa opacidade).
	3.	Scroll reveal nas secções (fade + translateY leve).
	4.	Glow pulse suave nos CTAs (1x a cada 8–10s).
	5.	Scroll progress bar no topo (2px).
	6.	Respeitar prefers-reduced-motion.




⸻




Estrutura do site (Home)




1) Navbar sticky




Links: Terapias, Como Funciona, Benefícios, Espaços, Testemunhos, FAQ, Contacto
CTA: Marcar sessão + secundário “WhatsApp”




2) Hero (acima da dobra)
	•	Headline energética e humana (sem claims médicos):
“Equilibra a tua energia. Acalma a mente. Volta ao centro.”
	•	Subheadline: terapias naturais e energéticas para bem-estar e equilíbrio interior.
	•	CTAs: Marcar sessão + Ver terapias
	•	Trust chips (3): “Avaliação individual” • “Sessões personalizadas” • “Ambiente seguro e acolhedor”
	•	Visual: cristal/energia abstrata premium + aurora + orbs




3) Secção “Terapias” (sem preços)




Criar cards muito bonitos (com micro-glow), cada um com:
	•	Nome
	•	1–2 frases de descrição realista (sem prometer cura)
	•	Duração típica (ex.: 45–60 min, se fizer sentido)
	•	Botão: Pedir informação / Marcar
Terapias:




	1.	Litoterapia
	2.	Litoterapia com Aromaterapia
	3.	Litoterapia com Aromaterapia e Fitoterapia (badge: “inclui oferta personalizada”)
	4.	Limpeza Energética de Espaços (badge: “valor sob consulta”)




Regra de preços:
	•	Não mostrar € nem valores.
	•	Em vez disso usar microcopy:
	•	“Valor sob consulta”
	•	“Recomendação após avaliação”
	•	“Pacotes disponíveis”




4) “Como funciona” (3 passos)
	1.	Avaliação energética individual
	2.	Sessão personalizada (cristais/óleos/ervas conforme necessário)
	3.	Recomendações e integração




5) Benefícios (para quem é)




Bullets: stress, ansiedade, cansaço mental, falta de foco, necessidade de equilíbrio emocional, harmonização do lar/espaço
Sem prometer cura; linguagem de bem-estar.




6) Espaços (Limpeza energética)




Secção visual com:
	•	“Casas”, “Espaços comerciais”, “Locais de trabalho”
	•	Nota: “Intervenções maiores e casos específicos: valor sob consulta”




7) Testemunhos (3–5)




Humanos e credíveis, sem claims médicos.




8) FAQ (6–8)




Incluir: “Como é o valor?”, “Como sei qual terapia escolher?”, “Política de cancelamento”, etc.
Resposta sobre preço: “O valor depende do tipo de sessão e necessidades; envio informação e recomendo após breve avaliação.”




9) CTA final + Contacto
	•	Headline: “Queres sentir-te mais alinhado(a)?”
	•	Form curto: Nome, Email/Telefone, Terapia de interesse, Mensagem
	•	Botões: Marcar sessão + WhatsApp
	•	Nota: “Resposta em 24h” (se fizer sentido)




Footer




Links + redes + disclaimer: terapias complementares, não substitui aconselhamento médico.




⸻




Páginas extra
	•	/terapias (lista)
	•	/terapias/[slug] (detalhe)
	•	/contacto




Regra global: sem preços visíveis. Tudo orientado para contacto.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8ed74a72-38b3-4c0e-a070-96dbf0faabe3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
