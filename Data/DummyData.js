export const CATEGORY = [
  {
    id: 0,
    name: "Pakistani",
    image:
      "https://media.istockphoto.com/photos/behrai-kabab1-picture-id501027041?k=20&m=501027041&s=612x612&w=0&h=SHmTVq19TM4JdqeYIKaQrTde-EB2HIsMZK5_3hPUcGs=",
  },
  {
    id: 1,
    name: "Indian",
    image:
      "https://content3.jdmagicbox.com/comp/delhi/w4/011pxx11.xx11.170403112431.z2w4/catalogue/the-square-meal-paharganj-delhi-north-indian-restaurants-jifuk2z318.jpg",
  },
  {
    id: 2,
    name: "Chinees",
    image:
      "https://media.istockphoto.com/photos/vegan-plant-based-asian-food-recipes-with-rice-and-brown-rice-as-picture-id1363638825?b=1&k=20&m=1363638825&s=170667a&w=0&h=itI3A9-nA8l4E1zlBdorjyVB5Y_XZ1R8w6h1mwIrYV0=",
  },
  {
    id: 3,
    name: "Italian",
    image: "https://t2conline.com/wp-content/uploads/2017/07/IMG_2016.jpg",
  },
  {
    id: 4,
    name: "Turkish",
    image:
      "https://img.freepik.com/premium-photo/seafood-salad-coocked-tentacles-octopus-blue-ceramic-plate-served-with-rocket-leaf-aragula-cherry-tomato-salad-grey-wooden-background-wicker-lining-square-image_72772-21379.jpg?w=2000",
  },
];

export const AllMeals = [
  {
    id: Math.random(),
    name: "Biryani",
    image: "https://i.ytimg.com/vi/Tx4dqefh-1Y/maxresdefault.jpg",
    catId: 0,
    imagesUrl: [
      {
        id: Math.random(),
        image:
          "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-vh1h1tn9klc5b00osm7q9re131-20180915233200.Medi.jpeg",
      },
      {
        id: Math.random(),
        image:
          "https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Best-Biryani-in-Dubai-Cover-24-02.jpg",
      },
      {
        id: Math.random(),
        image: "https://wallpaperaccess.com/full/1972881.jpg",
      },
    ],
    steps: [
      {
        id: Math.random(),
        stepCount: "Step One",
        stepDescription:
          "To make a delightful chicken biryani dish firstly soak saffron in water to prepare saffron water (One tsp saffron can be soaked in 1/4 cup water). Next, mix kewra drops in water and mix well to make kewra water. Set them aside for later usage. Now chop the onion and coriander leaves and keep them aside.",
      },
      {
        id: Math.random(),
        stepCount: "Step Two",
        stepDescription:
          "Meanwhile, heat refined oil in a deep bottomed pan. Once the oil is hot enough, add cumin seeds, bay leaf, green cardamom, black cardamom, cloves in it, and saute for about a minute. Then, add chopped onion to it and saute until pink. Now, add chicken into it with slit green chillies, turmeric, salt to taste, ginger garlic paste, red chilli powder and green chilli paste. Mix well all the spices and cook for 2-3 minutes. Then, add hung curd into it and give a mix. (Make sure the chicken is washed properly and patted dry before adding it to the dish)",
      },
      {
        id: Math.random(),
        stepCount: "Step Three",
        stepDescription:
          "Turn the flame to medium again and add garam masala in it along with ginger julienned, coriander and mint leaves. Add kewra water, rose water and saffron water in it. Cook till the chicken is tender. Then add 1 cup cooked rice and spread evenly. Then add saffron water and pour ghee over it. You can now cook the dish without the lid or cover it with a lid to give a dum-effect due to the steam formation.",
      },
      {
        id: Math.random(),
        stepCount: "Step Four",
        stepDescription:
          "Cook for 15-20 minutes with a closed lid and garnish with 1 tbsp fried onions and coriander leaves. Serve hot chicken biryani with raita of your choice. Enjoy!",
      },
    ],
    timeDuration: "45min - 50min",
  },
  {
    id: Math.random(),
    name: "Karahi",
    image:
      "https://thumbs.dreamstime.com/b/chicken-karahi-dish-dark-background-chicken-karahi-oval-glass-dish-dark-background-178697042.jpg",
    catId: 0,
  },
  {
    id: Math.random(),
    name: "Pasta",
    image:
      "https://boldoutline.in/wp-content/uploads/2020/04/social-cover-7.jpg",
    catId: 2,
  },
  {
    id: Math.random(),
    name: "Wara Paw",
    image:
      "https://c.ndtvimg.com/2018-11/7eujj9m_vada-pav_625x300_21_November_18.jpg",
    catId: 1,
  },
];
