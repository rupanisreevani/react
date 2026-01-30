export  function Contact() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Contact Us</h1>
      <p>Get in touch with us!</p>

      <img src="/contact.webp" alt="Contact" width="300" />

      <br /><br />

      <input type="text" placeholder="Name" /><br /><br />
      <input type="email" placeholder="Email" /><br /><br />
      <textarea placeholder="Message"></textarea><br /><br />

      <button>Send Message</button>
    </div>
  );
}
