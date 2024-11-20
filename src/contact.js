
export default function contact() {
return `<div class="body-container">

  <form id="contactForm">
    <h2>Get in touch</h2>
    <label for="email">E-mail</label>
    <input type="email" id="email" placeholder="email@example.com" required />

    <div style="display: flex;flex-direction: column; gap: 10px;">
      <div>
        <label for="firstName">First name</label>
        <input type="text" id="firstName" placeholder="Name" required />
      </div>
      <div>
        <label for="lastName">Last name</label>
        <input type="text" id="lastName" placeholder="Name" required />
      </div>
      <div>
        <label for="PhoneNumber">Phone Number</label>
        <input type="text" id="PhoneNumber" placeholder="Phone Number" required />
      </div>
    </div>

    <label for="message">Message</label>
    <textarea id="message" placeholder="Tell us what's up..." rows="4" required></textarea>

    <button class="formbutton" type="submit">Send</button>
  </form>

  `;
}