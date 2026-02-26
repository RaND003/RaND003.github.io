import { useState } from "react";
import "./App.css";
export default function App() {
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [foundUser, setFoundUser] = useState(null);

  const users = [
    {
      name: "ميس",
      message: "ميسوو، عيدك مبارك يا جميلة ، بتنمالك كل التوفيق بحياتك وبإني أكون صاحبة ممكن تساعدك زي ما دايماً بتساعديني، بحبك كثير كثير كثير، استمتعي بيومكヾ(＠⌒ー⌒＠)ノ",
      photo: "/star.png",
      secondImage: "/lib.png",
      thirdImage: "/arr4.png",
      bg: "#6185E0",

      cardBg: "#ffffff",
      textColor: "#2c3e50",
      borderColor: "#b8d3ee",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
    {
      name: "بتول",
      message: " حبي بتول، عسولتي الي ممكن أحكي معها عن أي إشي عشوائي، ممتنة إلك بشكل ما تتخيليه، بحبك كثير كثير، وفخورة وأنا أشوفك بتكبري و تتغيري للأحسن، الله يسعدك ويوفقك وييسر أمرك ويرضيك، عيدكك مبارككك استمتعي بيومك بسوريا (❤️ ω ❤️)",
      photo: "/batool.png",
      secondImage: "/batool5.png",
      thirdImage: "/arr4.png",
      bg: "#C080C0",

      cardBg: "#ffffff",
      textColor: "#38192e",
      borderColor: "#d7bad0",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
    {
      name: "دمدم",
      message: "دمدوميي، عيدكك مبارك حبيي، جداً ممتنة لوجودك معي طول هالسنين، وبحب كيف متى ما حكينا مع بعض الوضع مريح، وجودك الطبيعي واشي بخاف ألاقيني معتادته، الله يسعدك وييسرلك أمرك ويرضيك، وبحبك كثير كثير كثير، استمتعي بيومك ㄟ(≧◇≦)ㄏ    ",
      photo: "/gala.png",
      secondImage: "/gala2.png",
      thirdImage: "/arr4.png",
      bg: "#8B0000",

      cardBg: "#ffffff",
      textColor: "#502e2c",
      borderColor: "#f5d8d7",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
     {
      name: "زي",
      message:"زيي، عسولتي الي اشتقتلها كثير، بحب أمشي بحسابك الثاني وبحب مخك بحس لازم أحكي معك أكثر، الله يسعدك ويوفقك، عيدكك مباركك استمتعي بيومك （〃｀ 3′〃）",
      photo: "/shua.png",
      secondImage: "/ball.png",
      thirdImage: "/arr4.png",
      bg: "#C080C0",

      cardBg: "#ffffff",
      textColor: "#620260",
      borderColor: "#f0c8f7",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
     {
      name: "ري",
      message:"ريرييي عيدك مباركك يا جميل، بحبك كثير كثير، وبحب الحكي معك والتشابهات الي دايما بنلقطها وبنضحك عليها، وتحملك لي كل يوم اثنين بعد دوامي اشي ما رح أنساه وجداً ممتنة له، وجودك سبب من أسباب رجعتي للحساب، الله يسعدك ويرضيك ويوفقك، استمتعي بيومك لوف يوو (✿◠‿◠)",
      photo: "/dokyeom.png",
      secondImage: "/pinkflower.png",
      thirdImage: "/arr4.png",
      bg: "#ADD8E6",

      cardBg: "#ffffff",
      textColor: "#2c3e50",
      borderColor: "#c0d4ea",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
     {
      name: "رينا",
      message:"رينو، اعتراف سريع كنت بشيل أي حدا بعملي فولو عبين ما عملتي انتي وتفنقرت إن وحدة من حساباتي المفضلة ما بقدر اشيلها، المهمم بحبك كثير كثيرر، الله يوفقك ويسعدك دايما، عيدكك مباركك واستمتعي بيومكك (〜￣▽￣)〜",
      photo: "/kwan2.png",
      secondImage: "/sat.png",
      thirdImage: "/arr4.png",
      bg: "#E0FFFF",

      cardBg: "#ffffff",
      textColor: "#052349",
      borderColor: "#d8d9ee",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
     {
      name: "ايسا",
      message:"ايسا يا ايسا، ألطف وأعسل بنت بالكوكب، حاسة رح أخوفك بكمية الحب الي درميها عليك، بس جد الايدول تبعي (≧∀≦)ゞ ، جملة الكل يبدو أقبح عن قرب بتنطبقش عليك، كل ما أحكي معك أكثر بحبك زيادة، الله يريح بالك ويسعدك، عيدكك مبارك حبي ฅʕ•̫͡•ʔฅ",
      photo: "/vernon.png",
      secondImage: "/draw4.png",
      thirdImage: "/arr4.png",
      bg: "#B37557",

      cardBg: "#ffffff",
      textColor: "#492705",
      borderColor: "#efdbc7",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    }
  ];

  const handleSearch = () => {
  const user = users.find(
    (u) => u.name.trim() === search.trim()
  );

  if (user) {
    setFoundUser(user);
    setNotFound(false);
  } else {
    setFoundUser(null);
    setNotFound(true);
  }
};

  
  if (foundUser) {
    return (
      
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: foundUser.bg,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          direction: "rtl",
          position: "relative",
          overflow: "hidden"
  }}
>
  {/* RIGHT SIDE IMAGE */}
  <img
    src={foundUser.photo}
    alt="user"
    style={{
      position: "absolute",
      right: "-100px",
      bottom: "0",
      height: "90%",
      opacity: "0.9",
      zIndex: 1
    }}
  />

  {/* TOP LEFT IMAGE */}
<img
  src={foundUser.secondImage}
  alt="decoration"
  style={{
    position: "absolute",
    top: "20px",
    left: "20px",
    width: "120px",
    zIndex: 1
  }}
 
/>
 {/* let image */}
  <img
  src={foundUser.thirdImage}
  alt="decoration"
  style={{
    position: "absolute",
    bottom: "-70px",
    left: "-100px",
    width: "35%",
    opacity: "0.2",
    zIndex: 1
  }}
  />
  {/* CARD */}
  <div
  style={{
    position: "relative",
    background: foundUser.cardBg,
    padding: "50px",
    borderRadius: foundUser.borderRadius,
    width: "90%",
    maxWidth: "500px",
    textAlign: "center",
    zIndex: 2,
    border: `3px solid ${foundUser.borderColor}`,
    boxShadow: foundUser.shadow,
    color: foundUser.textColor
  }}
>
  <h2>{foundUser.message}</h2>
</div>
</div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ea8383",
        backgroundImage: "url('/start.png')",
        backgroundPosition:"right bottom",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        direction: "rtl",
        
      }}
     
    >
      <h1>عيدكم مبارك! </h1>
      <input
        type="text"
        placeholder="اكتب اسمك الذي تنعتك به المهنئة "
        value={search}
        onChange={(e) => {
        setSearch(e.target.value);
        setNotFound(false);
        }}
        style={{
          padding: "10px",
          fontSize: "16px",
          marginTop: "10px",
          color: "#333",
          backgroundColor: "#ffffff",
          border: "1px solid #ccc",
          borderRadius: "5px",
          width: "250px",
          //textAlign: "center"
        }}
        //className="searchInput"
      />
      <button
        onClick={handleSearch}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: "#d44c4c",
        }}
      >
        بحث
      </button>
      {notFound && (
        <p style={{ color: "#b91c1c",
            background: "#fee2e2",
            padding: "10px 15px",
            borderRadius: "10px" }}>
              متأكد من اسمك؟ حاول مرة أخرى 
        </p>
      )}
      <img
        src="/start3.png"
        alt="decoration"
        style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        width: "120px"
      }}
      />
      
    </div>
  );
}