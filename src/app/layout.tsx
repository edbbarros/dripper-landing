import '../app/styles/globals.css'

export const metadata = {
  title: 'Dripper - Turbine suas vendas',
  description: 'Plataforma que ajuda seu negócio a vender mais com CRM, automação e e-commerce.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
