let form = document.querySelector("form");
let inputName = document.querySelector(".input-name");
let inputPhone = document.querySelector(".input-phone");
let inputMsg = document.querySelector(".input-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let fullName = inputName.value;
  let phoneNumber = inputPhone.value;
  let inputMessage = inputMsg.value;

  emoji = [
    {
      emoji: "✅",
      description: "check mark button",
      category: "Symbols",
      aliases: ["white_check_mark"],
      tags: [],
      unicode_version: "6.0",
      ios_version: "6.0",
    },
    {
      emoji: "📞",
      description: "telephone receiver",
      category: "Objects",
      aliases: ["telephone_receiver"],
      tags: ["phone", "call"],
      unicode_version: "6.0",
      ios_version: "6.0",
    },
    {
      emoji: "⏰",
      description: "alarm clock",
      category: "Travel & Places",
      aliases: ["alarm_clock"],
      tags: ["morning"],
      unicode_version: "6.0",
      ios_version: "6.0",
    },
    {
      emoji: "👤",
      description: "bust in silhouette",
      category: "People & Body",
      aliases: ["bust_in_silhouette"],
      tags: ["user"],
      unicode_version: "6.0",
      ios_version: "6.0",
    },
    {
      emoji: "💬",
      description: "speech balloon",
      category: "Smileys & Emotion",
      aliases: ["speech_balloon"],
      tags: ["comment"],
      unicode_version: "6.0",
      ios_version: "6.0",
    },
    {
      emoji: "📆",
      description: "tear-off calendar",
      category: "Objects",
      aliases: ["calendar"],
      tags: ["schedule"],
      unicode_version: "6.0",
      ios_version: "6.0",
    },
  ];

  let my_text = `${emoji[3].emoji}<b> ФИО:</b> <i>${fullName}</i>%0A${emoji[1].emoji}<b> Тел.:</b> <i>${phoneNumber}</i>%0A${emoji[4].emoji}<b> Сообщение:</b> <i>${inputMessage}</i>`;
  let token = "7989630820:AAFmuu3N0vQH2S5iYpEDJYY_DAWwn5wHzVY";
  let chat_id = -4665797146;
  let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;

  // let api = new XMLHttpRequest();
  // api.open("GET", url, true);
  // api.send();

  axios
    .get(url)
    .then((res) => {
      res.data;
    })
    .catch((error) => {
      console.error(error);
    });
  inputName.value = "";
  inputPhone.value = "";
  inputMsg.value = "";
});
