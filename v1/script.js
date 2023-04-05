const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const btnShare = document.querySelector(".btn-share");
const formBtn = document.querySelector(".form-facts");
const btnClose = document.querySelector(".btn-close");
const factsAll = document.querySelector(".facts-all");

factsAll.innerHTML = "";

// factsAll.insertAdjacentHTML("afterbegin", "<li>Kshitij</li>");
// factsAll.insertAdjacentHTML("afterbegin", "<li>Gupta</li>");

async function loadFacts() {
  const res = await fetch(
    "https://hujyfiwdgpqggvpflxox.supabase.co/rest/v1/fact",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1anlmaXdkZ3BxZ2d2cGZseG94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1ODU0NTEsImV4cCI6MTk5NjE2MTQ1MX0.qbMRKXx8K2UmI-GRJHIMl82HRRA_kA0Vo3APlnwpj_8",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1anlmaXdkZ3BxZ2d2cGZseG94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1ODU0NTEsImV4cCI6MTk5NjE2MTQ1MX0.qbMRKXx8K2UmI-GRJHIMl82HRRA_kA0Vo3APlnwpj_8",
      },
    }
  );
  const data = await res.json();
  // console.log(res);
  console.log(data);
  createFactsList(data);
}

loadFacts();

// createFactsList(initialFacts);
// createFactsList(initialFacts);

function createFactsList(initialFacts) {
  const htmlArr = initialFacts.map(
    (fact) => `<li class="fact">
    <p>
    ${fact.info}
        <a
        class="source-link"
        href="${fact.source}"
        target="_blank"
        >
        ( Source )
        </a>
        </p>
        <span class="category tech">${fact.type}</span>
    </li>`
  );
  // const htmlArr = createFactsList(initialFacts);
  const html = htmlArr.join("");
  factsAll.insertAdjacentHTML("afterbegin", html);
}

btnShare.addEventListener("click", (e) => {
  formBtn.classList.toggle("hidden");
  btnClose.classList.toggle("hidden");
  btnShare.classList.toggle("hidden");
});
btnClose.addEventListener("click", (e) => {
  formBtn.classList.toggle("hidden");
  btnClose.classList.toggle("hidden");
  btnShare.classList.toggle("hidden");
});
