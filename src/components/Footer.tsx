export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-border">
      {/* Top Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* About / Info */}
        <article className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">About Us</h2>
            <p className="text-sm opacity-70">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas, iste explicabo libero voluptatibus eligendi ea?
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Mission</h2>
            <p className="text-sm opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              iste explicabo libero voluptatibus eligendi ea?
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Vision</h2>
            <p className="text-sm opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              iste explicabo libero voluptatibus eligendi ea?
            </p>
          </div>
        </article>

        {/* Departments / Info */}
        <article className="space-y-4">
          <h2 className="text-lg font-semibold">Departments</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Faculty 1</h3>
              <p className="text-sm opacity-70">Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <h3 className="font-medium">Faculty 2</h3>
              <p className="text-sm opacity-70">Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <h3 className="font-medium">Faculty 3</h3>
              <p className="text-sm opacity-70">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </article>

        {/* Quick Links */}
        <article className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm opacity-80">
            <li>
              <a href="#" className="hover:text-blue-200 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200 transition">
                Admissions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200 transition">
                Faculty
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200 transition">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200 transition">
                Contact
              </a>
            </li>
          </ul>
        </article>

        {/* Contact */}
        <article className="space-y-2">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <button className="px-4 py-2 bg-white text-slate-950 rounded hover:bg-blue-100 transition cursor-pointer">
            Contact
          </button>
          <p className="text-sm opacity-70">123-456-7890</p>
          <p className="text-sm opacity-70">info@example.com</p>
        </article>
      </section>

      {/* Middle Section (Optional for extra info or social icons) */}
      <section className="max-w-7xl mx-auto px-6 py-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm opacity-60">Follow us on social media</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-200 transition">
            Facebook
          </a>
          <a href="#" className="hover:text-blue-200 transition">
            Twitter
          </a>
          <a href="#" className="hover:text-blue-200 transition">
            Instagram
          </a>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="text-center text-sm opacity-50 py-4 border-t border-border">
        &copy; 2025 ICT Center. All rights reserved | Developed by Rok Rak Dev
      </section>
    </footer>
  );
}
