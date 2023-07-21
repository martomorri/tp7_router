import FooterItem from "./FooterItem";
import "./Footer.css";

export default function Footer() {
  return (
    <footer class="footer text-center text-white mt-5 w-100">
      <div class="container pt-4">
        <section class="mb-4">
          <FooterItem image="https://cdn-icons-png.flaticon.com/512/20/20673.png" />
          <FooterItem image="https://cdn-icons-png.flaticon.com/512/1384/1384017.png" />
          <FooterItem image="https://cdn-icons-png.flaticon.com/512/95/95627.png" />
          <FooterItem image="https://cdn-icons-png.flaticon.com/512/1384/1384015.png" />
        </section>
      </div>
      <div class="text-center text-dark p-3">© 2023 - Mercado Libre</div>
    </footer>
  );
}
