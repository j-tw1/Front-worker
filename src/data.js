import plombierImage from "./assets/img/categories/plombier.png";
import peintreImage from "./assets/img/categories/peintre.png";
import electrecityImage from "./assets/img/categories/electrecity.png";
import mecanicImage from "./assets/img/categories/mecanic.png";
import menuisierImage from "./assets/img/categories/menuisier.png";



export const cards = [
  {
    id: 1,
    title: "Électricien ",
    desc: "répare fils, circuits, appareils",
    img: electrecityImage,
  },
  {
    id: 2,
    title: "Plombier",
    desc: "répare tuyaux eau, chauffage central",
    img: plombierImage,
  },
  {
    id: 3,
    title: "Menuisier",
    desc: "fait meubles en bois",
    img: mecanicImage,
  },
  {
    id: 4,
    title: "Peintre",
    desc: "applique peinture, enduits",
    img: peintreImage,
  },
  {
    id: 5,
    title: "Soudeur",
    desc: "joint métaux avec chalumeau",
    img: "https://images.pexels.com/photos/13388047/pexels-photo-13388047.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 6,
    title: "Mécanicien",
    desc: "répare moteurs, machines",
    img: mecanicImage,
  },
  {
    id: 7,
    title: "Technicien",
    desc: "résout problèmes techniques",
    img: "https://images.pexels.com/photos/4820241/pexels-photo-4820241.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 8,
    title: "Ouvrier",
    desc: "effectue tâches manuelles",
    img: "https://images.pexels.com/photos/15032623/pexels-photo-15032623.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
];

export const projects = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pp: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cat: "Web and Mobile Design",
    username: "Anna Bell",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pp: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cat: "Logo Design",
    username: "Morton Green",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pp: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cat: "Animated GIFs",
    username: "Emmett Potter",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pp: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cat: "Packaging Design",
    username: "Freddie Johnston",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pp: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cat: "Social Media Design",
    username: "Audrey Richards",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pp: "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cat: "Illustration",
    username: "Dalton Hudson",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pp: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cat: "Book Design",
    username: "Hannah Dougherty",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pp: "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cat: "Digital Marketing",
    username: "Ward Brewer",
  },
];

export const workers = [
  {
    id: 1,
    pp: "https://www.ifapme.be/sites/default/files/styles/wvn_facebook/public/2022-05/metiers_MM_mecanicien_automobile_garage_BR.jpg?itok=AW6LI2M1",
    desc: "I will create ai art character from your images and prompts",
    price: 300,
    star: 5,
    name: "Anna Bell",
    category: "Mecanic",
    city:"Nador",
    country:"Morocco",
    ReviewsNumber:10,
    fav:false,
  },
  {
    id: 2,
    pp: "https://img.freepik.com/photos-gratuite/jeune-constructeur-homme-portant-uniformes-construction-casque-securite-sourit-tient-brosse-rouleau_141793-33718.jpg",
    desc: "I will create ultra high quality character art with ai",
    price: 79,
    star: 5,
    name: "Lannie Coleman",
    category: "Peintre",
    city:"Nador",
    country:"Morocco",
    ReviewsNumber:10,
    fav:false,
  },
  {
    id: 3,

    pp: "https://www.portail-autoentrepreneur.fr/media/knowledgebase/auto_entrepreneur_menuisier_REEt8Iy.jpg",
    desc: "I will creating unique ai generated artworks mid journey ai artist",
    price: 112,
    star: 5,
    name: "Carol Steve",
    category: "Menuisier",
    city:"Nador",
    country:"Morocco",
    ReviewsNumber:10,
    fav:false,
  },
  {
    id: 4,

    pp: "https://ets-goossens.be/images/photos/chauffagiste-intervention-chaudiere-gaz.jpg",
    desc: "I will create custom ai generated artwork using your photos",
    price: 99,
    star: 4,
    name: "Don Weber",
    category: "Plombier",
    city:"Nador",
    country:"Morocco",
    ReviewsNumber:10,
    fav:false,
  },
  {
    id: 5,

    pp: "https://www.lenergietoutcompris.fr/uploads/images/comment-trouver-un-bon-plombier-chauffagiste.jpg",
    desc: "I will recreate your dreams in high quality pictures",
    price: 59,
    star: 5,
    name: "Audrey Richards",
    category: "Plombier",
    city:"Nador",
    country:"Morocco",
    ReviewsNumber:10,
    fav:false,
  },
  {
    id: 6,

    pp: "https://www.plombiervaudois.ch/wp-content/uploads/2021/05/plumber-in-uniform-at-showcase-in-plumbering-store-1024x684.jpg",
    desc: "I will create ai digital art illustration hyper realistic painting",
    price: 79,
    star: 4,
    name: "Walton Shepard ",
    category: "Plombier",
    city:"Nador",
    country:"Morocco",
    ReviewsNumber:10,
    fav:true,
  },
  {
    id: 7,

    pp: "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "I will generate images with your prompts using ai dalle",
    price: 89,
    star: 5,
    name: "Waverly Schaefer",
    category: "Plombier",
    city:"Nador",
    country:"Morocco",
    ReviewsNumber:10,
    fav:false,
  },
  {
    id: 8,

    pp: "https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "I will create custom art using midjourney generator",
    price: 110,
    star: 4,
    name: "Wilton Hunt",
    category: "Plombier",
    city:"Nador",
    country:"Morocco",
    ReviewsNumber:10,
    fav:false,
  },
];
export const workers1 = [
  {
    id: 1,
    pp: "https://images.pexels.com/photos/720598/pexels-photo-720598.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "I will create ai art character from your images and prompts",
    price: 59,
    star: 5,
    name: "Anna Bell",
    category: "Plombier",
    city:"Nador",
  },
  {
    id: 2,
    pp: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "I will create ultra high quality character art with ai",
    price: 79,
    star: 5,
    name: "Lannie Coleman",
    category: "Plombier",
    city:"Nador",
  },
  {
    id: 3,

    pp: "https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "I will creating unique ai generated artworks mid journey ai artist",
    price: 112,
    star: 5,
    name: "Carol Steve",
    category: "Plombier",
    city:"Nador",
  },
  {
    id: 4,

    pp: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "I will create custom ai generated artwork using your photos",
    price: 99,
    star: 4,
    name: "Don Weber",
    category: "Plombier",
    city:"Nador",
  },
  {
    id: 5,

    pp: "https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "I will recreate your dreams in high quality pictures",
    price: 59,
    star: 5,
    name: "Audrey Richards",
    category: "Plombier",
    city:"Nador",
  },
  {
    id: 6,

    pp: "https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "I will create ai digital art illustration hyper realistic painting",
    price: 79,
    star: 4,
    name: "Walton Shepard ",
    category: "Plombier",
    city:"Nador",
  },
  {
    id: 7,

    pp: "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "I will generate images with your prompts using ai dalle",
    price: 89,
    star: 5,
    name: "Waverly Schaefer",
    category: "Plombier",
    city:"Nador",
  },
  {
    id: 8,

    pp: "https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "I will create custom art using midjourney generator",
    price: 110,
    star: 4,
    name: "Wilton Hunt",
    category: "Plombier",
    city:"Nador",
  },
];

export const categories = [
  {
    id: 1,
    pp: plombierImage ,
    desc: "Je suis un plombier",
    category: "Plombier",
  },
  {
    id: 2,
    pp: mecanicImage,
    desc: "Je suis un Mecanicien",
    category: "Mecanicien",
  },
  {
    id: 3,
    pp: peintreImage,
    desc: "Je suis un peintre",
    category: "peintre",
  },
  {
    id: 4,
    pp: plombierImage,
    desc: "Je suis un plombier",
    category: "Plombier",
  },
  {
    id: 5,
    pp: menuisierImage,
    desc: "Je suis un plombier",
    category: "Menuisier",
  },
  {
    id: 6,
    pp: plombierImage,
    desc: "Je suis un plombier",
    category: "Plombier",
  },
];
