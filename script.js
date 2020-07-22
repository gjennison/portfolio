document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  backSpeed: 40,
  typeSpeed: 25,
  loop: true,
  showCursor: true,
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

Tu.tScroll({
  "t-element": ".zoomOut",
  "t-duration": 0.8,
});

new Chart(document.getElementById("myChart"), {
  type: "doughnut",
  data: {
    labels: ["Web Dev", "Wordpress", "Web Design"],
    datasets: [
      {
        backgroundColor: ["#3e95cd", "#3cba9f", "#8e5ea2"],
        data: [40, 20, 40],
      },
    ],
  },
  options: {
    legend: {
      labels: {
        fontColor: "#FFF",
        fontSize: 18,
      },
    },

    animation: {
      duration: 3000,
    },

    tooltips: {
      enabled: false,
    },
  },
});
