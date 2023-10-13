interface Project {
  name: string;
  url: URL;
  bigUrl: URL;
}

const projects: Array<Project> = [
  {
    name: "Merch drop 1",
    url: new URL("./images/projects/project1.png?height=80", import.meta.url),
    bigUrl: new URL("./images/projects/project1.png", import.meta.url),
  },
  {
    name: "Merch drop 2",
    url: new URL("./images/projects/project2.png?height=80", import.meta.url),
    bigUrl: new URL("./images/projects/project2.png", import.meta.url),
  },
  {
    name: "Merch drop 3",
    url: new URL("./images/projects/project3.png?height=80", import.meta.url),
    bigUrl: new URL("./images/projects/project3.png", import.meta.url),
  },
  {
    name: "Merch drop 1",
    url: new URL("./images/projects/project1.png?height=80", import.meta.url),
    bigUrl: new URL("./images/projects/project1.png", import.meta.url),
  },
  {
    name: "Merch drop 2",
    url: new URL("./images/projects/project2.png?height=80", import.meta.url),
    bigUrl: new URL("./images/projects/project2.png", import.meta.url),
  },
  {
    name: "Merch drop 3",
    url: new URL("./images/projects/project3.png?height=80", import.meta.url),
    bigUrl: new URL("./images/projects/project3.png", import.meta.url),
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const imageList = document.getElementById("project-list");
  const activeProjectImage = document.getElementById(
    "active-project-image"
  ) as HTMLImageElement;
  const activeProjectName = document.getElementById("active-project-name");
  let activeProject = projects[0];

  projects.forEach((project, i) => {
    // Skapa <picture>-elementet
    let picture = document.createElement("picture");
    picture.classList.add("mr-4", "cursor-pointer", "flex-shrink-0");

    // Skapa <img>-elementet
    let img = document.createElement("img");
    img.setAttribute("src", project.url.toString());
    img.dataset.projectNum = `${i}`;
    img.dataset.name = project.name;

    // Lägg till <img> inuti <picture>
    picture.appendChild(img);

    // Infoga <picture> inuti ett specifikt element i dokumentet, t.ex. body
    imageList?.appendChild(picture);
  });

  const spacing = document.createElement("div");
  spacing.style.minWidth = "calc(100% - 80px)";
  imageList?.appendChild(spacing);

  // Funktion som körs när ett element har skrollats längst till vänster
  function onElementScrolledToLeft(image: HTMLImageElement) {
    // Lägg till ytterligare funktionalitet här om du vill
    if (image.src !== activeProject.src) {
      if (!activeProjectName || !activeProjectImage) {
        return;
      }
      const activeProject = projects.find(
        (_, i) => `${i}` === image.dataset.projectNum
      );
      activeProjectImage.src = activeProject?.bigUrl.toString() ?? "";
      activeProjectName.innerText = activeProject?.name ?? "";
    }
  }

  // Lägg till en lyssnare på varje bild för klickhändelsen
  const images = imageList?.querySelectorAll("img") ?? [];
  images.forEach(function (image: HTMLImageElement) {
    image.addEventListener("click", function () {
      // Beräkna målpositionen
      const targetPosition = image.offsetLeft;

      // Utför en mjuk skrollning till den beräknade positionen
      imageList?.scrollTo({
        left: targetPosition,
        behavior: "smooth",
      });
    });
  });

  // Lägg till en lyssnare för scroll-eventet
  imageList?.addEventListener("scroll", function () {
    images.forEach(function (image: HTMLImageElement) {
      if (
        imageList.scrollLeft >= image.offsetLeft &&
        imageList.scrollLeft <= image.offsetLeft + image.offsetWidth
      ) {
        onElementScrolledToLeft(image);
      }
    });
  });
});
