import "./contact.css";

export default function contact() {
  return `
  <form>
    
    <h2>Get in touch</h2>

    <div>
      <label for="email">E-mail</label>
      <input type="email" id="email" placeholder="email@example.com" required />
    </div>
    <div>
      <label for="firstName">First Name</label>
      <input type="text" id="firstName" placeholder="John" required />
    </div>
    <div>
      <label for="lastName">Last Name</label>
      <input type="text" id="lastName" placeholder="Doe" required />
    </div>
    <div>
      <label for="PhoneNumber">Phone Number</label>
      <input type="tel" id="PhoneNumber" placeholder="+46 000 000 000" required />
    </div>
    <div>
      <label for="message">Message</label>
      <textarea id="message" placeholder="Tell us what's up..." rows="4" required></textarea>
    </div>

    <button class="formbutton" type="submit">Send</button>
  </form>
  `;
}
