function getLabelsHtml(text, sender, ...staffObj) {
  return staffObj.map(
    (staff) =>
      `<div class="label-card">
        <p>Dear ${staff.name} </p>
        <p>${text}</p>
        <p>Best wishes,</p>
        <p>${sender}</p>
      </div>`
  );
}

const text = "Thank you for all your hard work throughout the year! 🙏🎁";
const sender = "Tom";

document.getElementById("labels-container").innerHTML = getLabelsHtml(
  text,
  sender,
  { name: "Sally" },
  { name: "Mike" },
  { name: "Rob" },
  { name: "Harriet" }
);
