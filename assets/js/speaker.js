/** @format */
const speakerName = document.getElementById("speakerName");
const speakerDesc = document.getElementById("speakerDesc");
const speakerPhotoUrl = document.getElementById("speakerPhotoUrl");
const speakerFacebook = document.getElementById("speakerFacebook");
const speakerLinkedIn = document.getElementById("speakerLinkedIn");
const speakerGithub = document.getElementById("speakerGithub");
const job = document.getElementById("job");

const urlParams = new URLSearchParams(window.location.search);
const speakerId = urlParams.get("speakerId");
console.log(speakerId);

fetch("../../data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const searcherdSpeaker = data.find((data) => data.id == speakerId);
    console.log(searcherdSpeaker);
    speakerName.innerText = searcherdSpeaker.name;
    speakerDesc.innerHTML = searcherdSpeaker.desc;
    speakerPhotoUrl.src = searcherdSpeaker.photoUrl;
    speakerFacebook.href = "#";
    speakerLinkedIn.href = searcherdSpeaker.linkedIn;
    speakerGithub.href = searcherdSpeaker.github;
    job.innerText = searcherdSpeaker.job;
  });
