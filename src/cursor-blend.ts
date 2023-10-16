document.addEventListener("DOMContentLoaded", function () {
  const project = document.querySelector(
    "#active-project-image"
  ) as HTMLDivElement;
  const cursor = document.querySelector(".cursor") as HTMLDivElement;

  if (!project || !cursor) {
    console.error("no project");
    return;
  }
  if (!cursor) {
    console.error("no cursor");
    return;
  }

  document.addEventListener("mousemove", (event) => {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
  });

  project.addEventListener("mouseenter", () => {
    cursor.style.display = "block";
  });

  project.addEventListener("mouseleave", () => {
    cursor.style.display = "none";
  });
});
