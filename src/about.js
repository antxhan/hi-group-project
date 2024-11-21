import emailImage from "./assets/icons/email.png";
import webImage from "./assets/icons/web.png";
import member1Image from "./assets/images/about/Anita.jpeg";
import antonImage from "./assets/images/about/Anton Hansson.png";
import ChiranjeeviImage from "./assets/images/about/Chiranjeevi Vattiri.png";
import dylanImage from "./assets/images/about/Dylan St. John.png";

export default function About() {
  const mainContainer = document.createElement("div");
  document.querySelector("main").appendChild(mainContainer);
  mainContainer.classList.add("about_container");

  //1st member(1)- Anton
  const member1 = document.createElement("div");
  mainContainer.prepend(member1);
  member1.classList.add("member_info");
  //--------
  const image = document.createElement("img");
  member1.prepend(image);
  image.classList.add("member_image");
  image.src = antonImage;
  image.alt = "Team-member1 Image";

  const member1Info = document.createElement("div");
  image.insertAdjacentElement("afterend", member1Info);
  member1Info.classList.add("memberInfo_container");

  //----------
  const memberName = document.createElement("h2");
  member1Info.prepend(memberName);
  memberName.innerText = "Anton Hansson";
  memberName.classList.add("name");

  const para = document.createElement("div");
  memberName.insertAdjacentElement("afterend", para);
  para.innerText = "Front End Developer";
  para.classList.add("role");

  const intro = document.createElement("div");
  para.insertAdjacentElement("afterend", intro);
  intro.innerText = "I like web dev and music.";
  intro.classList.add("introduction");

  const contactDiv = document.createElement("div");
  intro.insertAdjacentElement("afterend", contactDiv);
  contactDiv.classList.add("contactInfo");

  const emailIcon = document.createElement("img");
  contactDiv.prepend(emailIcon);
  emailIcon.src = emailImage;
  emailIcon.alt = "emailIcon";
  emailIcon.classList.add("email_icon");

  const emailAdress = document.createElement("p");
  emailIcon.insertAdjacentElement("afterend", emailAdress);
  emailAdress.innerText = "contact@antonhansson.net";
  emailAdress.classList.add("email_adress");
  //--------------------

  emailAdress.addEventListener("click", function () {
    window.location.href = "mailto:contact@antonhansson.net";
  });

  const webIcon = document.createElement("img");
  emailAdress.insertAdjacentElement("afterend", webIcon);
  webIcon.src = webImage;
  webIcon.alt = "webIcon";
  webIcon.classList.add("web_icon");

  const webAdress = document.createElement("p");
  webIcon.insertAdjacentElement("afterend", webAdress);
  webAdress.innerText = "antonhansson.net";
  webAdress.classList.add("web_adress");

  webAdress.addEventListener("click", function () {
    window.open("https://github.com/antxhan", "_blank");
  });

  //2nd member(1)- Chiru
  const member2 = document.createElement("div");
  member1.insertAdjacentElement("afterend", member2);
  member2.classList.add("member_info");
  //(2)
  const image2 = document.createElement("img");
  member2.prepend(image2);
  image2.classList.add("member_image");
  image2.src = ChiranjeeviImage;
  image2.alt = "Team-member1 Image";

  const member2Info = document.createElement("div");
  image2.insertAdjacentElement("afterend", member2Info);
  member2Info.classList.add("memberInfo_container");
  //(3)
  const member2Name = document.createElement("h2");
  member2Info.prepend(member2Name);
  member2Name.innerText = "Chiranjeevi Vattiri";
  member2Name.classList.add("name");

  const para2 = document.createElement("div");
  member2Name.insertAdjacentElement("afterend", para2);
  para2.innerText = "Front End Developer";
  para2.classList.add("role");

  const intro2 = document.createElement("div");
  para2.insertAdjacentElement("afterend", intro2);
  intro2.innerText =
    "Energetic Person - Willing to explore new challenges in life.";
  intro2.classList.add("introduction");

  const contactDiv2 = document.createElement("div");
  intro2.insertAdjacentElement("afterend", contactDiv2);
  contactDiv2.classList.add("contactInfo");

  const emailIcon2 = document.createElement("img");
  contactDiv2.prepend(emailIcon2);
  emailIcon2.src = emailImage;
  emailIcon2.alt = "emailIcon";
  emailIcon2.classList.add("email_icon");

  const emailAdress2 = document.createElement("p");
  emailIcon2.insertAdjacentElement("afterend", emailAdress2);
  emailAdress2.innerText = "chiranjeevi.vattiri@hyperisland.se";
  emailAdress2.classList.add("email_adress");

  //--------------------
  emailAdress2.addEventListener("click", function () {
    window.location.href = "mailto:chiranjeevi.vattiri@hyperisland.se";
  });

  const webIcon2 = document.createElement("img");
  emailAdress2.insertAdjacentElement("afterend", webIcon2);
  webIcon2.src = webImage;
  webIcon2.alt = "webIcon";
  webIcon2.classList.add("web_icon");

  const webAdress2 = document.createElement("p");
  webIcon2.insertAdjacentElement("afterend", webAdress2);
  webAdress2.innerText = "https://github.com/Chiru1985";
  webAdress2.classList.add("web_adress");

  webAdress2.addEventListener("click", function () {
    window.open("https://github.com/Chiru1985", "_blank");
  });

  //3rd member(1)-Ania
  const member3 = document.createElement("div");
  member2.insertAdjacentElement("afterend", member3);
  member3.classList.add("member_info");
  //------------------
  const image3 = document.createElement("img");
  member3.prepend(image3);
  image3.classList.add("member_image");
  image3.src = member1Image;
  image3.alt = "Team-member1 Image";

  const member3Info = document.createElement("div");
  image3.insertAdjacentElement("afterend", member3Info);
  member3Info.classList.add("memberInfo_container");

  //-------------------
  const member3Name = document.createElement("h2");
  member3Info.prepend(member3Name);
  member3Name.innerText = "Anita Kumari";
  member3Name.classList.add("name");

  const para3 = document.createElement("div");
  member3Name.insertAdjacentElement("afterend", para3);
  para3.innerText = "Front End Developer";
  para3.classList.add("role");

  const intro3 = document.createElement("div");
  para3.insertAdjacentElement("afterend", intro3);
  intro3.innerText =
    "Passionate person specialized in creating dynamic, user-friendly interface.";
  intro3.classList.add("introduction");

  const contactDiv3 = document.createElement("div");
  intro3.insertAdjacentElement("afterend", contactDiv3);
  contactDiv3.classList.add("contactInfo");

  const emailIcon3 = document.createElement("img");
  contactDiv3.prepend(emailIcon3);
  emailIcon3.src = emailImage;
  emailIcon3.alt = "emailIcon";
  emailIcon3.classList.add("email_icon");

  const emailAdress3 = document.createElement("p");
  emailIcon3.insertAdjacentElement("afterend", emailAdress3);
  emailAdress3.innerText = "anita.kumari1987@yahoo.com";
  emailAdress3.classList.add("email_adress");
  //---------------
  emailAdress3.addEventListener("click", function () {
    window.location.href = "mailto:anita.kumari1987@yahoo.com";
  });

  const webIcon3 = document.createElement("img");
  emailAdress3.insertAdjacentElement("afterend", webIcon3);
  webIcon3.src = webImage;
  webIcon3.alt = "webIcon";
  webIcon3.classList.add("web_icon");

  const webAdress3 = document.createElement("p");
  webIcon3.insertAdjacentElement("afterend", webAdress3);
  webAdress3.innerText = "https://github.com/Anita-Kumari1987";
  webAdress3.classList.add("web_adress");

  webAdress3.addEventListener("click", function () {
    window.open("https://github.com/Anita-Kumari1987", "_blank");
  });

  //4th member-Dylan
  const member4 = document.createElement("div");
  member3.insertAdjacentElement("afterend", member4);
  member4.classList.add("member_info");
  //---------------
  const image4 = document.createElement("img");
  member4.prepend(image4);
  image4.classList.add("member_image");
  image4.src = dylanImage;
  image4.alt = "Team-member1 Image";

  const member4Info = document.createElement("div");
  image4.insertAdjacentElement("afterend", member4Info);
  member4Info.classList.add("memberInfo_container");

  //--------------
  const member4Name = document.createElement("h2");
  member4Info.prepend(member4Name);
  member4Name.innerText = "Dylan St. John";
  member4Name.classList.add("name");

  const para4 = document.createElement("div");
  member4Name.insertAdjacentElement("afterend", para4);
  para4.innerText = "Front End Developer";
  para4.classList.add("role");

  const intro4 = document.createElement("div");
  para4.insertAdjacentElement("afterend", intro4);
  intro4.innerText =
    "Professional developer during the day, amateur Tetris player at night.";
  intro4.classList.add("introduction");

  const contactDiv4 = document.createElement("div");
  intro4.insertAdjacentElement("afterend", contactDiv4);
  contactDiv4.classList.add("contactInfo");

  const emailIcon4 = document.createElement("img");
  contactDiv4.prepend(emailIcon4);
  emailIcon4.src = emailImage;
  emailIcon4.alt = "emailIcon";
  emailIcon4.classList.add("email_icon");

  const emailAdress4 = document.createElement("p");
  emailIcon4.insertAdjacentElement("afterend", emailAdress4);
  emailAdress4.innerText = "dylan.pledger@hyperisland.se";
  emailAdress4.classList.add("email_adress");

  //------------------
  emailAdress4.addEventListener("click", function () {
    window.location.href = "mailto:dylan.pledger@hyperisland.se";
  });

  const webIcon4 = document.createElement("img");
  emailAdress4.insertAdjacentElement("afterend", webIcon4);
  webIcon4.src = webImage;
  webIcon4.alt = "webIcon";
  webIcon4.classList.add("web_icon");

  const webAdress4 = document.createElement("p");
  webIcon4.insertAdjacentElement("afterend", webAdress4);
  webAdress4.innerText = "website.com";
  webAdress4.classList.add("web_adress");

  webAdress4.addEventListener("click", function () {
    window.open("web_adress", "_blank");
  });

  return mainContainer;
}
