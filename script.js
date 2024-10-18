const BASE_URL = `https://frcz3-8080.csb.app/jobs`;
let page = 1;
const LIMIT = 20;
const getJob = async () => {
  try {
    let url = `${BASE_URL}?_page=${page}&_limit=${LIMIT}`;
    const input = document.querySelector(".search-filter input").value.trim();
    if (!!input) url += `&q=${input}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const getTags = (item) => {
  const tags = item
    .map((element) => {
      return `<span>・${element}</span>`;
    })
    .join(" ");
  return tags;
};

const renderJob = async () => {
  const data = await getJob();
  console.log(data);
  document.querySelector(".job-list").innerHTML = "";
  data.forEach((item) => {
    const jobItem = document.createElement("div");
    jobItem.classList.add("job-item");
    jobItem.innerHTML = `<h3>${item.title}</h3>
        <div class="tags">
          <span>・${item.city} </span
          >${getTags(item.skills)} <span>・ ${item.salaryLow} -${
      item.salaryHigh
    } $</span>
        </div>

        <button>Apply now</button>`;
    document.querySelector(".job-list").appendChild(jobItem);
  });
};

renderJob();
const renderJobSearch = () => {
  page = 1;
  renderJob();
};

document
  .querySelector(".search-filter button")
  .addEventListener("click", renderJobSearch);

document.querySelector("#previous").addEventListener("click", () => {
  if (page === 1) return;
  else {
    page--;
    renderJob();
  }
});

document.querySelector("#next").addEventListener("click", () => {
  page++;
  renderJob();
});
