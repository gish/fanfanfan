const projects = [
  {
    name: "Merch drop 1",
    url: new URL("./images/projects/project1.png?height=80", import.meta.url),
  },
  {
    name: "Merch drop 2",
    url: new URL("./images/projects/project2.png?height=80", import.meta.url),
  },
  {
    name: "Merch drop 3",
    url: new URL("./images/projects/project3.png?height=80", import.meta.url),
  },
  {
    name: "Merch drop 1",
    url: new URL("./images/projects/project1.png?height=80", import.meta.url),
  },
  {
    name: "Merch drop 2",
    url: new URL("./images/projects/project2.png?height=80", import.meta.url),
  },
  {
    name: "Merch drop 3",
    url: new URL("./images/projects/project3.png?height=80", import.meta.url),
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const imageList = document.getElementById("project-list");
  const images = document.querySelectorAll("img");

  projects.forEach((project) => {
    // Skapa <picture>-elementet
    let picture = document.createElement("picture");
    picture.classList.add("mr-4", "cursor-pointer", "flex-shrink-0");

    // Skapa <img>-elementet
    let img = document.createElement("img");
    img.setAttribute("src", project.url);

    // Lägg till <img> inuti <picture>
    picture.appendChild(img);

    // Infoga <picture> inuti ett specifikt element i dokumentet, t.ex. body
    imageList.appendChild(picture);
  });

  // Funktion som körs när ett element har skrollats längst till vänster
  function onElementScrolledToLeft() {
    console.log("Elementet har skrollats längst till vänster!");
    // Lägg till ytterligare funktionalitet här om du vill
  }

  // Lägg till en lyssnare på varje bild för klickhändelsen
  images.forEach(function (image) {
    image.addEventListener("click", function () {
      // Beräkna målpositionen
      const targetPosition = image.offsetLeft;

      // Utför en mjuk skrollning till den beräknade positionen
      imageList.scrollTo({
        left: targetPosition,
        behavior: "smooth",
      });
    });
  });

  // Lägg till en lyssnare för scroll-eventet
  imageList.addEventListener("scroll", function () {
    images.forEach(function (image) {
      if (
        imageList.scrollLeft >= image.offsetLeft - 10 &&
        imageList.scrollLeft <= image.offsetLeft + 10
      ) {
        onElementScrolledToLeft(image);
      }
    });
  });
});
