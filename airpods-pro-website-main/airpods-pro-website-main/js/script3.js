const section3 = document.querySelector(".section-03");
const msgText5 = section3.querySelector(".msg-elem");

const canvas3 = document.getElementById("airpod-box");
const context3 = canvas3.getContext("2d");
canvas3.width = 1458;
canvas3.height = 1200;

const images3 = [];
const airpod = {
  frame: 0,
};
const frameCount3 = 56;
print("hellooooooooooooo")

// Populating images
const currentFrame3 = (index) =>
  `https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/battery/medium_2x/${(
    index
  )
    .toString()
    .padStart(4, "0")}.jpg`;

for (let i = 0; i < frameCount3; i++) {
  const img = new Image();
  img.src = currentFrame3(i);
  images3.push(img);
}

// GSAP Timeline #2
let tl3 = gsap.timeline();
tl3
  .add("start0")

  /* Main Text Animation */
  .to(msgText5, { delay: 11, duration: 3.5, opacity: 1, y: -50 }, "start0")
  .to(msgText5, { duration: 3.5, opacity: 0, y: -100 })

  /* BG 'Image Change' Animation */
  .to(
    airpod,
    {
      duration: 19,
      frame: frameCount3 - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render2,
    },
    "start0"
  );

// ScrollMagic Scene #2
let scene3 = new ScrollMagic.Scene({
  triggerElement: ".section-03",
  duration: "4000",
  triggerHook: 0,
  //   offset: "100",
})
  .setTween(tl3)
  .setPin(".section-03")
  .addTo(controller);

// Initial image loading
images3[0].onload = render2;

// Rendering image on canvas
function render2() {
  context3.clearRect(0, 0, canvas3.width, canvas3.height);
  context3.drawImage(images3[airpod.frame], 0, 0);
}
