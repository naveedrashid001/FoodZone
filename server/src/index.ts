import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const foodData = [
    {
        name: "Boiled Egg",
        price: 10,
        text: "A simple yet nutritious choice, boiled eggs are rich in protein and vitamins.",
         image: "/images/egg.png",
        type: "breakfast",
    },
    {
        name: "RAMEN",
        price: 25,
        text: "This flavorful noodle dish features a savory broth, tender noodles, and a variety of toppings.",
         image: "/images/ramen.png",
        type: "lunch",
    },
    {
        name: "GRILLED CHICKEN",
        price: 45,
        text: "Juicy grilled chicken is marinated to perfection, offering a smoky flavor and tender texture.",
        image: "/images/chicken.png",
        type: "dinner",
    },
    {
        name: "CAKE",
        price: 18,
        text: "Indulge in a slice of our moist cake, perfect for any occasion. With layers of rich flavor.",
        image: "/images/cake.png",
        type: "breakfast",
    },
    {
        name: "BURGER",
        price: 23,
        text: "This classic burger features a juicy beef patty, fresh lettuce, tomatoes, and your choice . ",
         image: "/images/burger.png",
        type: "lunch",
    },
    {
        name: "PANCAKE",
        price: 25,
        text: "Fluffy pancakes are a breakfast staple, served warm with syrup and butter. ",
        image: "/images/pancake.png",
        type: "dinner",
    },
    {
        name: "SANDWICH",
        price: 15,
        text: "A delicious sandwich loaded with fresh ingredients, from meats to veggies. ",
        image: "/images/sandwach.jpg",
        type: "breakfast",
    },
    {
        name: "FISH AND CHIPS",
        price: 30,
        text: "This British classic features crispy battered fish served with golden fries.",
         image: "/images/FISH.jpeg",
        type: "lunch",
    },
    {
        name: "PASTA",
        price: 28,
        text: "Delicious pasta tossed in a savory sauce, it can be paired with ingredients like meats.",
          image: "/images/PASTA.jpeg",
        type: "dinner",
    }
    
];


  res.json(foodData);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
