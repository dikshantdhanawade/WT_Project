
const plans = {
  loss: {
    calories: 1800,
    diet: [" Oats & Fruits", "Salad + Roti", " Soup + Veggies"],
    tips: ["Drink more water", "Avoid sugar", "Do cardio daily"]
  },
  gain: {
    calories: 2800,
    diet: [" Milk + Banana", " Rice + Chicken", " Paneer + Chapati"],
    tips: ["Eat more protein", "Strength training", "Eat frequently"]
  },
  maintain: {
    calories: 2200,
    diet: [" Bread + Eggs", " Dal + Rice", " Balanced Meal"],
    tips: ["Balanced diet", "Regular exercise", "Sleep well"]
  }
};


const dietList = document.getElementById("diet");
const tipsList = document.getElementById("tips");


document.getElementById("generate").addEventListener("click", () => {
  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const goal = document.getElementById("goal").value;

  if (!age || !weight || !goal) {
    alert("Fill all fields!");
    return;
  }

  const plan = plans[goal];

  document.getElementById("calories").textContent =
    `${plan.calories} kcal/day`;

 
  dietList.innerHTML = "";
  plan.diet.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    dietList.appendChild(li);
  });


  tipsList.innerHTML = "";
  plan.tips.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    tipsList.appendChild(li);
  });

  
  localStorage.setItem("dietPlan", JSON.stringify({ age, weight, goal }));
});


const saved = JSON.parse(localStorage.getItem("dietPlan"));
if (saved) {
  document.getElementById("age").value = saved.age;
  document.getElementById("weight").value = saved.weight;
  document.getElementById("goal").value = saved.goal;
}