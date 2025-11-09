function Footer() {
  const sections = [
    {
      title: "Comprar e Saber Mais",
      links: [
        "iPhone 17 Pro",
        "iPhone 17 Pro Max",
        "Comparar modelos",
        "Acessórios",
      ],
    },
    {
      title: "Especificações",
      links: ["Características técnicas", "Câmera", "Bateria", "Display"],
    },
    {
      title: "Suporte",
      links: ["Suporte ao iPhone", "AppleCare+", "i0S 19", "Contato"],
    },
    {
      title: "Apple",
      links: ["Sobre a Apple", "Newsroom", "Privacidade", "Carreiras"],
    },
  ];

  const buttonLinks = ["Política de Privacidade", "Termos de uso", "Vendas"];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-white cursor-pointer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>Copyright &copy; 2025 Apple Inc. Todos os diretos reservados.</p>
            <div className="flex gap-6">
              {buttonLinks.map((buttonLink, index) => (
                <a href="#" key={index} className="hover:text-white">
                  {buttonLink}
                </a>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Site criado para fins educacionais — Aula do Canal DevClub no
            Youtube.
            <div>
              Desenvolvido por{" "}
              <a
                href="http://gilsonleite.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gilson Leite
              </a>
              .
            </div>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
