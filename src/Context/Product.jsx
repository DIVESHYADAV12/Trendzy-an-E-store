import React, { createContext, useState} from 'react'
export const ProductDetails = createContext()

const ProductDetailsProvider = ({children}) => {

    const[search,setSearch] = useState('')
    const[showSearch,setShowSearch] = useState(false)

    const [him,sethim] = useState([
      {
        id: 1,
        Name: "Flower keychain",
        Price: 100,
        Img: "https://i.pinimg.com/1200x/be/f1/d9/bef1d930a813731e93e8580896dfd218.jpg",
        Description:
          "Handcrafted flower keychain with bright colors, lightweight and durable, perfect for bags, keys, and gifting friends.",
      },
      {
        id: 2,
        Name: "Kitty Keychain",
        Price: 120,
        Img: "https://i.pinimg.com/736x/4c/b1/ba/4cb1ba06f04cd3a84a53d859508198e3.jpg",
        Description:
          "Cute kitty keychain with adorable design, made from strong material, perfect for key rings, gifts, and daily use.",
      },
      {
        id: 3,
        Name: "Rings",
        Price: 250,
        Img: "https://i.pinimg.com/736x/54/37/7d/54377dd9c8968a79302c1c034a956899.jpg",
        Description:
          "Elegant rings with a stylish look, perfect for everyday wear, parties, special occasions, or as thoughtful gifts.",
      },
      {
        id: 4,
        Name: "Silver ring",
        Price: 300,
        Img: "https://i.pinimg.com/1200x/1f/0e/7e/1f0e7e403c0a85b709b20b4d6cedcd89.jpg",
        Description:
          "Shiny silver ring with minimal design, versatile accessory for casual outfits, parties, or romantic gifting to loved ones.",
      },
      {
        id: 5,
        Name: "Watch",
        Price: 500,
        Img: "https://i.pinimg.com/736x/a9/ed/fe/a9edfe6e663cd6b1cf6ef24ee900fd1b.jpg",
        Description:
          "Stylish wristwatch with modern design, durable strap and sleek dial, ideal for daily wear, office, and gifting purposes.",
      },
      {
        id: 6,
        Name: "Spider watch",
        Price: 550,
        Img: "https://i.pinimg.com/736x/be/99/ca/be99ca72a0228f464e62c3daa28f9160.jpg",
        Description:
          "Unique spider-inspired watch design with bold look, strong strap, perfect for Marvel fans, collectors, and daily fashion.",
      },
      {
        id: 7,
        Name: "Spider Chain",
        Price: 400,
        Img: "https://i.pinimg.com/736x/62/e9/89/62e98969a6b1793b69d3ecb273d746b0.jpg",
        Description:
          "Trendy spider-themed chain necklace, durable and stylish, suitable for cosplay, parties, casual wear, or special Marvel gifts.",
      },
      {
        id: 8,
        Name: "h1 chain",
        Price: 350,
        Img: "https://i.pinimg.com/736x/49/ba/f3/49baf3b1efd998efa3d0765f7d0392fc.jpg",
        Description:
          "Fashionable h1 chain with shiny finish, designed for comfort and modern style, a perfect accessory for men’s outfits.",
      },
      {
        id: 9,
        Name: "Toreto",
        Price: 600,
        Img: "https://i.pinimg.com/1200x/32/ce/07/32ce07c8e9d63e52c58a6741bd346e9d.jpg",
        Description:
          "Trendy Toreto accessory with high quality build, bold and stylish design, perfect gift choice for men and boys.",
      },
      {
        id: 10,
        Name: "Rare Hot",
        Price: 750,
        Img: "https://i.pinimg.com/1200x/86/99/3a/86993ac0718dcb51413b19a7025c3d1a.jpg",
        Description:
          "Unique Rare Hot fashion item with eye-catching style, versatile for parties, travel, casual outings, or gifting.",
      },
      {
        id: 11,
        Name: "Hoddy",
        Price: 1200,
        Img: "https://i.pinimg.com/1200x/ef/a9/89/efa989885e77e1789685219262b7df14.jpg",
        Description:
          "Comfortable stylish hoodie with soft fabric, warm fit, designed for casual wear, travel, and gifting fashion lovers.",
      },
      {
        id: 12,
        Name: "Tye",
        Price: 150,
        Img: "https://i.pinimg.com/736x/65/1b/8f/651b8f40a0ca5090d766247c3f9b91d1.jpg",
        Description:
          "Classic tie with sleek design, lightweight material, ideal for office wear, formal events, and corporate gifting.",
      },
      {
        id: 13,
        Name: "Bag",
        Price: 800,
        Img: "https://i.pinimg.com/736x/23/05/bd/2305bd21f5c73b6552ca7ced0c24994c.jpg",
        Description:
          "Spacious bag with durable build and stylish design, perfect for travel, college, office, or gifting to friends.",
      },
      {
        id: 14,
        Name: "Roblox",
        Price: 300,
        Img: "https://i.pinimg.com/736x/4a/c5/af/4ac5af121e48b141ef28fbd3e353f2b5.jpg",
        Description:
          "Trendy Roblox-themed accessory, colorful and fun design, ideal for fans, gamers, kids, or as playful gifts.",
      },
      {
        id: 15,
        Name: "lelo cross",
        Price: 450,
        Img: "https://i.pinimg.com/736x/4b/22/1c/4b221cafa05319ea932a82818569fe3a.jpg",
        Description:
          "Stylish lelo cross accessory, designed for fashion lovers, perfect for daily wear, parties, and thoughtful gifting.",
      },
      {
        id: 16,
        Name: "mask",
        Price: 200,
        Img: "https://i.pinimg.com/736x/e1/5b/ad/e15badb6199afb59af2ae4e632999ab9.jpg",
        Description:
          "Comfortable protective mask with breathable material, reusable and washable, suitable for everyday use and travel safety.",
      },
      {
        id: 17,
        Name: "Gucci",
        Price: 5000,
        Img: "https://i.pinimg.com/736x/57/87/13/5787131032b766bbd997e519d159d254.jpg",
        Description:
          "Luxury Gucci product with premium quality, fashionable design, perfect for high-end style, parties, and exclusive gifting.",
      },
      {
        id: 18,
        Name: "parfume",
        Price: 1800,
        Img: "https://i.pinimg.com/1200x/1a/fe/1f/1afe1fa392d24d8da52a7604abfbeb5e.jpg",
        Description:
          "Long-lasting perfume with premium fragrance, elegant bottle design, suitable for special occasions, parties, or romantic gifting.",
      },
      {
        id: 19,
        Name: "Tizoo",
        Price: 2200,
        Img: "https://i.pinimg.com/736x/6b/f2/b4/6bf2b47ccac766142f13ad901a872fa6.jpg",
        Description:
          "Exclusive Tizoo accessory with premium finish, stylish design, perfect for men’s outfits, parties, or gifting to loved ones.",
      },
      {
        id: 29,
        Name: "Narngi",
        Price: 900,
        Img: "https://i.pinimg.com/736x/c1/8c/cf/c18ccff869a94d67edd7f1a35304b4e2.jpg",
        Description:
          "Trendy Narngi item with bold style, eye-catching design, made for fashion lovers, suitable for casual outings and parties.",
      },
    ]);
  
    const [her, sether] = useState([
      {
        id: 1,
        Name: "Sun Moon Bracelets",
        Price: 299,
        Img: "https://i.pinimg.com/736x/95/02/f5/9502f5fc3998cb7735b09db8f8ee4cd0.jpg",
        Description:
          "Beautiful Sun Moon bracelets with vibrant colors, lightweight and durable, perfect for gifting, daily wear, and adding style to outfits.",
      },
      {
        id: 2,
        Name: "Bracelets",
        Price: 199,
        Img: "https://i.pinimg.com/1200x/f1/9b/bc/f19bbc8d1599598ca5e087ad13995bd5.jpg",
        Description:
          "Simple yet elegant bracelets made with high-quality materials, ideal for casual wear, special occasions, and gifting friends or family.",
      },
      {
        id: 3,
        Name: "Chin",
        Price: 399,
        Img: "https://i.pinimg.com/1200x/8b/a1/5d/8ba15d9f026ffdaea2dbc6542eef7310.jpg",
        Description:
          "Stylish Chin accessory designed to add charm and elegance to your outfits, perfect for parties, festivals, or gifting loved ones.",
      },
      {
        id: 4,
        Name: "World Chin",
        Price: 499,
        Img: "https://i.pinimg.com/736x/20/ce/98/20ce98120033eacbce5e95440714e029.jpg",
        Description:
          "Eye-catching World Chin design with intricate detailing, suitable for daily wear, casual outings, parties, and special gift occasions.",
      },
      {
        id: 5,
        Name: "Hoodie",
        Price: 999,
        Img: "https://i.pinimg.com/1200x/b2/53/2d/b2532d48589376477bc38987f35b7aff.jpg",
        Description:
          "Comfortable and stylish hoodie made from soft fabric, perfect for chilly weather, casual outings, travel, or gifting fashion enthusiasts.",
      },
      {
        id: 6,
        Name: "Baby Name Necklace",
        Price: 699,
        Img: "https://i.pinimg.com/736x/a8/e8/e3/a8e8e37d94f77081423b2cc2b0f15d7a.jpg",
        Description:
          "Personalized baby name necklace crafted with love, ideal for gifts, special occasions, and keeping precious memories close to the heart.",
      },
      {
        id: 7,
        Name: "Keko Hoodie",
        Price: 899,
        Img: "https://i.pinimg.com/1200x/0a/06/af/0a06af730635434d00a4fbab0af324e1.jpg",
        Description:
          "Trendy Keko hoodie with soft fabric and stylish design, perfect for casual wear, street fashion, parties, and gifting loved ones.",
      },
      {
        id: 8,
        Name: "Las Vik",
        Price: 499,
        Img: "https://i.pinimg.com/1200x/24/f0/53/24f0530ead71d93b69732b6fb86b724e.jpg",
        Description:
          "Fashionable Las Vik accessory featuring vibrant design, ideal for daily wear, special occasions, casual outings, and thoughtful gifting.",
      },
      {
        id: 9,
        Name: "Adidas Spezial",
        Price: 1299,
        Img: "https://i.pinimg.com/736x/b8/4d/8b/b84d8b0b25069683e162a315c5ffcaf5.jpg",
        Description:
          "Premium Adidas Spezial shoes combining comfort and style, perfect for sports, casual wear, or gifting sneaker lovers and fashion enthusiasts.",
      },
      {
        id: 10,
        Name: "Adidas New",
        Price: 1399,
        Img: "https://i.pinimg.com/736x/3d/84/6d/3d846db1095ec4bc026b1c7492153949.jpg",
        Description:
          "Stylish Adidas New sneakers with modern design, durable build, suitable for sports, casual outings, travel, and gifting.",
      },
      {
        id: 11,
        Name: "Adidas Meme",
        Price: 1199,
        Img: "https://i.pinimg.com/1200x/6f/d2/2a/6fd22a0324a9cffab4af99137d1eecfb.jpg",
        Description:
          "Fun and trendy Adidas Meme sneakers with eye-catching design, perfect for street style, casual wear, parties, or gifting.",
      },
      {
        id: 12,
        Name: "Stylish Bag",
        Price: 799,
        Img: "https://i.pinimg.com/1200x/f7/d9/ba/f7d9ba1f058905bbaae31aeaac55eb6f.jpg",
        Description:
          "Spacious stylish bag crafted with durable material, perfect for college, office, travel, casual outings, and gifting friends.",
      },
      {
        id: 13,
        Name: "Bunch Teddy",
        Price: 299,
        Img: "https://i.pinimg.com/736x/52/3e/4c/523e4c7a9f087b1261b17826e4a6d6c5.jpg",
        Description:
          "Adorable bunch of teddy bears, soft and cuddly, ideal for gifting, decoration, or bringing joy to children and loved ones.",
      },
      {
        id: 14,
        Name: "Dragon Keychains",
        Price: 199,
        Img: "https://i.pinimg.com/736x/39/d1/b7/39d1b79cef476fa967393c2fef1ecabb.jpg",
        Description:
          "Unique dragon keychains with vibrant colors and sturdy build, perfect for key rings, bags, or as fun collectible gifts.",
      },
      {
        id: 15,
        Name: "Bunu Nereden",
        Price: 399,
        Img: "https://i.pinimg.com/736x/c3/77/ba/c377ba247e7b6703bfa8708ec59ccd9e.jpg",
        Description:
          "Trendy Bunu Nereden accessory with stylish design, lightweight and durable, ideal for casual wear, gifting, or special occasions.",
      },
      {
        id: 16,
        Name: "Lovvy",
        Price: 599,
        Img: "https://i.pinimg.com/736x/bc/da/d0/bcdad0879a8c0de615648d9d950b92e3.jpg",
        Description:
          "Cute Lovvy fashion accessory, crafted with premium quality, perfect for daily wear, parties, travel, and gifting loved ones.",
      },
      {
        id: 17,
        Name: "The Bee Miraculous",
        Price: 699,
        Img: "https://i.pinimg.com/736x/55/ce/47/55ce47fcc9fe34f70813fbbb6f07a680.jpg",
        Description:
          "Charming The Bee Miraculous accessory with vibrant colors, suitable for fans, casual outfits, parties, and thoughtful gifting.",
      },
      {
        id: 18,
        Name: "Gucci Top",
        Price: 1499,
        Img: "https://i.pinimg.com/736x/28/5c/93/285c93ff0ada0884b5a7d00ac29a1318.jpg",
        Description:
          "Luxury Gucci top with premium fabric and elegant design, ideal for high-fashion outfits, parties, and gifting fashion enthusiasts.",
      },
      {
        id: 19,
        Name: "Anastasia Bag",
        Price: 999,
        Img: "https://i.pinimg.com/1200x/09/c2/29/09c229d3ef1a5675b5005da3b574a464.jpg",
        Description:
          "Elegant Anastasia bag made from durable materials, perfect for travel, office, casual wear, or gifting to stylish friends.",
      },
      {
        id: 20,
        Name: "Flower Knows",
        Price: 399,
        Img: "https://i.pinimg.com/736x/13/0f/d0/130fd06ea4f37662246c7fd14893708f.jpg",
        Description:
          "Cute Flower Knows accessory with vibrant colors, lightweight and durable, suitable for daily use, casual outfits, and gifting.",
      },
    ]);
  
    const [kid, setKid] = useState([
      {
        id: 1,
        Name: "Building Blocks",
        Price: 25,
        Img: "https://i.pinimg.com/1200x/45/96/ca/4596cadde7245727456fed8b4ebd75c2.jpg",
        Description:
          "Colorful building blocks set to enhance creativity, imagination, and motor skills, perfect for kids of all ages to play and learn.",
      },
      {
        id: 2,
        Name: "Toy Car",
        Price: 15,
        Img: "https://i.pinimg.com/736x/18/bf/ed/18bfed0d2bb925c0c47197e451b17164.jpg",
        Description:
          "Mini toy car with smooth wheels and vibrant colors, ideal for imaginative play, racing games, and developing coordination skills in children.",
      },
      {
        id: 3,
        Name: "Dinosaur Toy",
        Price: 20,
        Img: "https://i.pinimg.com/736x/83/bb/da/83bbda227829e9dea00c3f04244339d8.jpg",
        Description:
          "Realistic dinosaur toy to spark curiosity about prehistoric life, perfect for imaginative play, learning, and collecting by young explorers.",
      },
      {
        id: 4,
        Name: "Panda Lego",
        Price: 30,
        Img: "https://i.pinimg.com/736x/66/40/67/664067651032451f21c2e3e539ccf930.jpg",
        Description:
          "Cute panda-themed Lego set to inspire creativity, improve fine motor skills, and provide hours of engaging, fun-filled play for kids.",
      },
      {
        id: 5,
        Name: "Lilo Doll",
        Price: 18,
        Img: "https://i.pinimg.com/736x/66/7b/57/667b5739c102b197201f7922d0c9e234.jpg",
        Description:
          "Soft Lilo doll with friendly expression, perfect for cuddling, imaginative play, storytelling, and gifting to children on birthdays or holidays.",
      },
      {
        id: 6,
        Name: "Puzzle Toy",
        Price: 22,
        Img: "https://i.pinimg.com/1200x/39/2a/15/392a15a6a1485b368b177488f3d2d755.jpg",
        Description:
          "Engaging puzzle toy designed to challenge problem-solving skills, boost concentration, and encourage fun learning through interactive play for kids.",
      },
      {
        id: 7,
        Name: "Robot Toy",
        Price: 28,
        Img: "https://i.pinimg.com/736x/e6/33/e7/e633e70bd16369aa1bcf25a50a83033c.jpg",
        Description:
          "Interactive robot toy with lights and sounds, perfect for imaginative play, STEM learning, and keeping children entertained for hours.",
      },
      {
        id: 8,
        Name: "Animal Figures",
        Price: 16,
        Img: "https://i.pinimg.com/736x/08/13/ea/0813ea79f07d8a6a5b2bc441b2630772.jpg",
        Description:
          "Set of colorful animal figures to teach kids about wildlife, encourage creative play, and develop storytelling and cognitive skills.",
      },
      {
        id: 9,
        Name: "Ball Set",
        Price: 12,
        Img: "https://i.pinimg.com/1200x/f7/d0/e9/f7d0e9b83eda3f3ee0eb6c75abc40e9e.jpg",
        Description:
          "Fun ball set for outdoor and indoor games, promoting active play, coordination, and teamwork while keeping children physically engaged and happy.",
      },
      {
        id: 10,
        Name: "Stuffed Bear",
        Price: 20,
        Img: "https://i.pinimg.com/736x/0c/73/b0/0c73b062f5bc1a6a3bf7623662cf988f.jpg",
        Description:
          "Soft and cuddly stuffed bear, perfect for comforting children, imaginative play, bedtime companionship, and gifting on special occasions.",
      },
      {
        id: 11,
        Name: "Mini Train",
        Price: 25,
        Img: "https://i.pinimg.com/736x/04/16/2e/04162e7a67d4f1b4806d70b88218f098.jpg",
        Description:
          "Mini train toy set for fun interactive play, enhancing creativity, coordination, and hours of imaginative adventures for kids.",
      },
      {
        id: 12,
        Name: "Kitchen Set",
        Price: 30,
        Img: "https://i.pinimg.com/736x/94/2c/ba/942cbabb947e04946e4c0decad3e6d3a.jpg",
        Description:
          "Kids kitchen set with accessories for role-playing, encouraging imagination, learning, social skills, and creative fun during pretend cooking.",
      },
      {
        id: 13,
        Name: "Toy Plane",
        Price: 18,
        Img: "https://i.pinimg.com/1200x/1d/54/3f/1d543f8985f8dee5aa326837785c867d.jpg",
        Description:
          "Mini toy plane designed for imaginative flying adventures, improving hand-eye coordination, motor skills, and providing endless entertainment for children.",
      },
      {
        id: 14,
        Name: "Magic Blocks",
        Price: 22,
        Img: "https://i.pinimg.com/1200x/82/bd/b7/82bdb704fe488d1efa3c806cc19f2f62.jpg",
        Description:
          "Colorful magic blocks set to inspire creativity, spatial thinking, and problem-solving, perfect for fun learning and interactive play.",
      },
      {
        id: 15,
        Name: "Mini Scooter",
        Price: 35,
        Img: "https://i.pinimg.com/736x/09/59/89/095989db6e58f9c4377acf2aea0c4f6c.jpg",
        Description:
          "Mini scooter for kids to enjoy active outdoor play, improve balance, coordination, and have fun with friends in the neighborhood.",
      },
      {
        id: 16,
        Name: "Animal Puzzle",
        Price: 20,
        Img: "https://i.pinimg.com/736x/51/df/24/51df2451ec36da886c1c4fb6a8c7393e.jpg",
        Description:
          "Animal-themed puzzle to enhance problem-solving skills, memory, and creativity, providing educational fun for kids of all ages.",
      },
      {
        id: 17,
        Name: "Race Car Set",
        Price: 28,
        Img: "https://i.pinimg.com/1200x/cc/21/eb/cc21eb9b08ef400f6e76a8ddcea25363.jpg",
        Description:
          "Exciting race car set for thrilling play, promoting imagination, coordination, and hours of competitive fun for children.",
      },
      {
        id: 18,
        Name: "Story Book",
        Price: 15,
        Img: "https://i.pinimg.com/1200x/6e/1e/1d/6e1e1d264565e48c2526d9d0f2edfb37.jpg",
        Description:
          "Engaging story book to encourage reading habits, imagination, learning new concepts, and providing entertainment for kids.",
      },
      {
        id: 19,
        Name: "Teddy Bear",
        Price: 20,
        Img: "https://i.pinimg.com/1200x/87/42/27/874227d0b75c911248694faf60519cb5.jpg",
        Description:
          "Adorable teddy bear with soft fabric, perfect for cuddling, imaginative play, comfort, and gifting to children on special occasions.",
      },
      {
        id: 20,
        Name: "Art Set",
        Price: 25,
        Img: "https://i.pinimg.com/736x/d4/f0/97/d4f097ae9c082bd8eb86f086c0c7d839.jpg",
        Description:
          "Complete art set including colors, brushes, and tools to encourage creativity, artistic expression, learning, and fun activities for kids.",
      },
    ]);
  
    const [ship, setship] = useState([
      {
        Id: 1,
        Name: "Matching Set of Gemstone Bracelets",
        Price: 599,
        Img: "https://i.pinimg.com/736x/f7/42/64/f742643b31a48926b6b6c25437a2e476.jpg",
        Description:
          "Beautiful matching gemstone bracelets set, perfect for couples or friends, enhancing style, elegance, and gifting for any special occasion.",
      },
      {
        Id: 2,
        Name: "Soft Pear",
        Price: 799,
        Img: "https://i.pinimg.com/736x/f1/e2/cd/f1e2cdc54415b4311045000433030de5.jpg",
        Description:
          "Elegant Soft Pear gift item with delicate design, ideal for gifting, decoration, or adding charm and beauty to personal collections effortlessly.",
      },
      {
        Id: 3,
        Name: "Dior Gift Pack",
        Price: 899,
        Img: "https://i.pinimg.com/736x/35/c5/92/35c592d81834b8d773b7b1659ddbc8f6.jpg",
        Description:
          "Luxury Dior gift pack including stylish items, perfect for celebrating special moments, birthdays, or expressing love and appreciation uniquely.",
      },
      {
        Id: 4,
        Name: "I N I T I A L ∙ H E A R T ∙ L O C K E T",
        Price: 399,
        Img: "https://i.pinimg.com/736x/88/e3/0c/88e30ce494172295f5b99acb3d5f5b64.jpg",
        Description:
          "Personalized initial heart locket to keep cherished memories, perfect as a romantic gift, meaningful gesture, or stylish accessory.",
      },
      {
        Id: 5,
        Name: "DIY wallet w gf",
        Price: 299,
        Img: "https://i.pinimg.com/736x/6f/5c/20/6f5c200c102129f4f5bff394c2ba8cce.jpg",
        Description:
          "Creative DIY wallet for couples or friends, allowing customization, thoughtful gifting, and a unique, memorable keepsake experience.",
      },
      {
        Id: 6,
        Name: "Anniversary Scrapbook",
        Price: 499,
        Img: "https://i.pinimg.com/736x/c0/0d/f3/c00df321d0d1e07260bf0fd639f1c492.jpg",
        Description:
          "Personalized anniversary scrapbook to capture memories, photos, and heartfelt notes, perfect for celebrating love and cherished moments.",
      },
      {
        Id: 7,
        Name: "Customizable Acrylic Plaque",
        Price: 299,
        Img: "https://i.pinimg.com/736x/ba/6a/12/ba6a120763513fdf92c5bba5ea1c9167.jpg",
        Description:
          "Customizable acrylic plaque ideal for gifts, awards, or decorations, combining elegance, personal touch, and lasting memorable impact effortlessly.",
      },
      {
        Id: 8,
        Name: "Caixa de 365",
        Price: 699,
        Img: "https://i.pinimg.com/1200x/55/96/c0/5596c001db8bed36a9a4de2ec645ce29.jpg",
        Description:
          "Unique Caixa de 365 gift box containing 365 surprises or messages, perfect for romantic, friendship, or motivational gifting year-round.",
      },
      {
        Id: 9,
        Name: "DIY Heart chain giftbox template",
        Price: 499,
        Img: "https://i.pinimg.com/1200x/73/7c/79/737c79778e90cc36da70a51c1649cf15.jpg",
        Description:
          "DIY heart chain gift box template allowing creative personalization, meaningful gifts, and unique presentation for loved ones on special occasions.",
      },
      {
        Id: 10,
        Name: "Poloroid Album",
        Price: 899,
        Img: "https://i.pinimg.com/1200x/32/65/57/326557106db14700a69d69f2dfa4f5d3.jpg",
        Description:
          "Charming Polaroid album to store cherished photos, preserve memories, and create a personalized, sentimental gift for friends or family.",
      },
      {
        Id: 11,
        Name: "Buquê de polaroids",
        Price: 399,
        Img: "https://i.pinimg.com/1200x/5c/b0/6c/5cb06c4328e28dc50c325dc495c9a963.jpg",
        Description:
          "Creative bouquet of Polaroids offering a unique way to gift memories, perfect for birthdays, anniversaries, or heartfelt surprises.",
      },
      {
        Id: 12,
        Name: "DIA DOS NAMORADOS",
        Price: 599,
        Img: "https://i.pinimg.com/736x/3f/95/33/3f9533e93cdccd8c61b820c893abcf02.jpg",
        Description:
          "Special gifts for DIA DOS NAMORADOS to celebrate love, romance, and meaningful moments with thoughtful and memorable presents.",
      },
      {
        Id: 13,
        Name: "Couples scrapbook",
        Price: 799,
        Img: "https://i.pinimg.com/736x/09/68/99/0968990ae0d005b8ae61d295e9e2f785.jpg",
        Description:
          "Personalized couples scrapbook to collect memories, photos, and love notes, perfect for celebrating anniversaries, romance, and cherished relationships.",
      },
      {
        Id: 14,
        Name: "Handmade spider couple keychain",
        Price: 199,
        Img: "https://i.pinimg.com/736x/bf/e8/95/bfe895241f55a774508c07ca7541c26e.jpg",
        Description:
          "Handmade spider couple keychain symbolizing love and unity, ideal for couples seeking cute, unique, and memorable accessories.",
      },
      {
        Id: 15,
        Name: "hotwheels fnf r34 brian X suki s2000",
        Price: 399,
        Img: "https://i.pinimg.com/736x/9c/5f/3f/9c5f3f811e0e2d15a673af11688ecda7.jpg",
        Description:
          "Hotwheels collector car set featuring FNF-themed cars, perfect for racing enthusiasts, collectors, and imaginative play sessions.",
      },
      {
        Id: 16,
        Name: "Bat Promise Ring for Couples",
        Price: 699,
        Img: "https://i.pinimg.com/736x/6f/e7/56/6fe756647e8e2c038b8c9e7cc4066812.jpg",
        Description:
          "Romantic bat-themed promise ring for couples to express commitment, love, and meaningful connection, perfect as a heartfelt gift.",
      },
      {
        Id: 17,
        Name: "Gwen and miles matching bracelets",
        Price: 499,
        Img: "https://i.pinimg.com/736x/01/a3/98/01a3985c0104727449424e4b44ca409c.jpg",
        Description:
          "Matching Gwen and Miles bracelets designed for couples or friends, symbolizing unity, friendship, and stylish coordinated accessories.",
      },
      {
        Id: 18,
        Name: "Spidy and Bear Necklace",
        Price: 99,
        Img: "https://i.pinimg.com/736x/b9/52/aa/b952aaaf462fce0a9020ecdafef20b1f.jpg",
        Description:
          "Cute Spidy and Bear necklace set for couples or friends, ideal for gifting, matching accessories, and charming daily wear.",
      },
      {
        Id: 19,
        Name: "clay polaroid holder",
        Price: 499,
        Img: "https://i.pinimg.com/736x/77/c5/0e/77c50ea0ebb0734c480f6696f1ead1a9.jpg",
        Description:
          "Clay Polaroid holder handcrafted for displaying precious memories, offering personalized charm and functional décor for home or office.",
      },
      {
        Id: 20,
        Name: "White Dark Dragon Couple Necklace",
        Price: 799,
        Img: "https://i.pinimg.com/1200x/2a/e3/26/2ae326ad2b10aa002461df445388f02e.jpg",
        Description:
          "White Dark Dragon themed couple necklace representing strength, love, and unity, perfect for gifting and symbolic romantic accessories.",
      },])

  return (
      <ProductDetails.Provider value={{him, her, kid ,search,setSearch,showSearch,setShowSearch}}>
        {children}
      </ProductDetails.Provider>
  )
}
export default ProductDetailsProvider

