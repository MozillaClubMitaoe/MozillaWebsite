/** @format */

fetch("../../data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((member) => {
      const {
        desc,
        facebook,
        github,
        id,
        job,
        link,
        linkedIn,
        name,
        photoUrl,
        titleLine,
      } = member;

      const html = ` <div class="col-lg-4 col-md-6" id="${id}"> 
              <div class="speaker" data-aos="fade-up" data-aos-delay="100">
                <img
                  src="${photoUrl}"
                  alt="Speaker 1"
                  class="img-fluid borderRadius20"
                />
                <div class="details">
                  <h3><a href="${link}">${name}</a></h3>
                  <p>${job}</p>
                  <div class="social">
                    <a href=""><i class="fa fa-twitter"></i></a>
                    <a href="${facebook}"><i class="fa fa-facebook"></i></a>
                    <a href="${linkedIn}"><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>`;

      document
        .getElementById("teamsContainer")
        .insertAdjacentHTML("beforeEnd", html);
    });

    console.log(data);
  });
