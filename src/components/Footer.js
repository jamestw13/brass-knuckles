export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-bar">
      <a href="https://www.facebook.com/masoncraig4">Facebook</a>
      <a href="mailto:masoncraig4@gmail.com">Email</a>
      <a href="https://www.tj-james.com">&#169; TJ James {year}</a>
    </footer>
  );
}
