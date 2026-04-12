const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="text-gradient font-semibold">Light Up</span>. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
