import { useState } from "react"
import "./App.css"

function App() {
  const [searchKey, setSearchKey] = useState("")
  const [animeList] = useState([
    { 
      title: "Naruto", 
      category: "Shounen", 
      description: "A young ninja dreams of becoming Hokage.", 
      year: 2002, 
      episodes: 220, 
      rating: "8.2/10",
      studio: "Studio Pierrot",
      mainCharacters: ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Kakashi Hatake"],
      storyline: "Naruto Uzumaki, a mischievous ninja, seeks recognition and dreams of becoming the leader of his village, while carrying a powerful demon fox sealed inside him."
    },
    { 
      title: "One Piece", 
      category: "Adventure", 
      description: "Luffy sets sail to find the legendary One Piece.", 
      year: 1999, 
      episodes: 1100, 
      rating: "9.1/10",
      studio: "Toei Animation",
      mainCharacters: ["Monkey D. Luffy", "Roronoa Zoro", "Nami", "Sanji", "Usopp"],
      storyline: "Monkey D. Luffy gains rubber powers after eating a Devil Fruit and sets out on a journey with his crew to find the greatest treasure, the One Piece."
    },
    { 
      title: "Death Note", 
      category: "Thriller", 
      description: "A notebook that kills anyone whose name is written in it.", 
      year: 2006, 
      episodes: 37, 
      rating: "9.0/10",
      studio: "Madhouse",
      mainCharacters: ["Light Yagami", "L", "Misa Amane", "Ryuk"],
      storyline: "A genius high school student finds a mysterious notebook that allows him to kill anyone by writing their name, sparking a battle of wits with a brilliant detective."
    },
    { 
      title: "Attack on Titan", 
      category: "Action", 
      description: "Humanity fights against giant Titans.", 
      year: 2013, 
      episodes: 87, 
      rating: "9.2/10",
      studio: "Wit Studio / MAPPA",
      mainCharacters: ["Eren Yeager", "Mikasa Ackerman", "Armin Arlert", "Levi Ackerman"],
      storyline: "In a world where humanity is on the brink of extinction due to giant humanoid Titans, young heroes rise to fight for survival and uncover hidden truths."
    },
    { 
      title: "Demon Slayer", 
      category: "Fantasy", 
      description: "A boy battles demons after his family is slaughtered.", 
      year: 2019, 
      episodes: 55, 
      rating: "8.7/10",
      studio: "Ufotable",
      mainCharacters: ["Tanjiro Kamado", "Nezuko Kamado", "Zenitsu Agatsuma", "Inosuke Hashibira"],
      storyline: "After his family is killed by demons, Tanjiro Kamado becomes a demon slayer to save his sister Nezuko, who has been turned into a demon."
    },
    { 
      title: "Jujutsu Kaisen", 
      category: "Supernatural", 
      description: "A high schooler fights curses with jujutsu sorcerers.", 
      year: 2020, 
      episodes: 47, 
      rating: "8.9/10",
      studio: "MAPPA",
      mainCharacters: ["Yuji Itadori", "Megumi Fushiguro", "Nobara Kugisaki", "Satoru Gojo"],
      storyline: "Yuji Itadori becomes a host to a powerful curse, Ryomen Sukuna, and joins the Jujutsu Sorcerers to fight dangerous curses threatening humanity."
    },
    { 
      title: "Fullmetal Alchemist: Brotherhood", 
      category: "Adventure", 
      description: "Two brothers seek the Philosopher's Stone to restore their bodies.", 
      year: 2009, 
      episodes: 64, 
      rating: "9.2/10",
      studio: "Bones",
      mainCharacters: ["Edward Elric", "Alphonse Elric", "Roy Mustang", "Winry Rockbell"],
      storyline: "After a failed alchemy ritual, brothers Edward and Alphonse Elric embark on a journey to restore their bodies, uncovering dark secrets about alchemy."
    },
    { 
      title: "Dragon Ball Z", 
      category: "Action", 
      description: "Goku and his friends defend Earth from powerful foes.", 
      year: 1989, 
      episodes: 291, 
      rating: "8.7/10",
      studio: "Toei Animation",
      mainCharacters: ["Goku", "Vegeta", "Gohan", "Piccolo", "Frieza"],
      storyline: "Goku, a Saiyan warrior, protects Earth from powerful enemies and participates in epic battles that shape the fate of the universe."
    },
    { 
      title: "My Hero Academia", 
      category: "Superhero", 
      description: "In a world of heroes, a boy without powers dreams big.", 
      year: 2016, 
      episodes: 138, 
      rating: "8.4/10",
      studio: "Bones",
      mainCharacters: ["Izuku Midoriya", "Katsuki Bakugo", "All Might", "Shoto Todoroki"],
      storyline: "In a world where most people have superpowers, Izuku Midoriya, born powerless, inherits the strength of the greatest hero, All Might."
    },
    { 
      title: "Tokyo Ghoul", 
      category: "Dark Fantasy", 
      description: "A college student becomes half-ghoul after a tragic encounter.", 
      year: 2014, 
      episodes: 48, 
      rating: "7.9/10",
      studio: "Studio Pierrot",
      mainCharacters: ["Ken Kaneki", "Touka Kirishima", "Rize Kamishiro"],
      storyline: "Ken Kaneki's life changes after a ghoul attack leaves him half-human, half-ghoul, forcing him to live between two worlds."
    },
    { 
      title: "Bleach", 
      category: "Action", 
      description: "A teenager gains soul reaper powers to fight evil spirits.", 
      year: 2004, 
      episodes: 366, 
      rating: "8.2/10",
      studio: "Studio Pierrot",
      mainCharacters: ["Ichigo Kurosaki", "Rukia Kuchiki", "Orihime Inoue", "Uryu Ishida"],
      storyline: "Ichigo Kurosaki becomes a substitute Soul Reaper, battling evil spirits while protecting both the human and spirit worlds."
    },
    { 
      title: "Sword Art Online", 
      category: "Sci-Fi", 
      description: "Players trapped in a VR MMORPG must fight to survive.", 
      year: 2012, 
      episodes: 96, 
      rating: "7.6/10",
      studio: "A-1 Pictures",
      mainCharacters: ["Kirito", "Asuna", "Sinon"],
      storyline: "Thousands of players find themselves trapped in a VR MMORPG, where dying in the game means dying in real life."
    }
  ])
  const [selectedAnime, setSelectedAnime] = useState(null)

  const handleSearch = (e) => {
    setSearchKey(e.target.value)
  }

  const filteredAnime = animeList.filter((anime) =>
    anime.title.toLowerCase().includes(searchKey.toLowerCase())
  )

  const showPanel = (anime) => {
    setSelectedAnime(anime)
  }

  const closePanel = () => {
    setSelectedAnime(null)
  }

  return (
    <>
      <header>
        <div className="logo">Anime Search & Sliding Panel</div>
      </header>

      <section>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search anime..."
            value={searchKey}
            onChange={handleSearch}
          />
        </div>

        <div className="grid">
          {filteredAnime.map((anime, index) => (
            <div key={index} className="card" onClick={() => showPanel(anime)}>
              <span>{anime.category}</span>
              <h3>{anime.title}</h3>
              <p>{anime.description}</p>
              <small>Year: {anime.year} | Episodes: {anime.episodes}</small>
            </div>
          ))}
        </div>

        {selectedAnime && (
          <div className="overlay">
            <div className="slidingpanel">
              <button onClick={closePanel}>x</button>
              <h1>{selectedAnime.title}</h1>
              <h4>Category: {selectedAnime.category}</h4>
              <p><strong>Studio:</strong> {selectedAnime.studio}</p>
              <p><strong>Storyline:</strong> {selectedAnime.storyline}</p>
              <p><strong>Main Characters:</strong> {selectedAnime.mainCharacters.join(", ")}</p>
              <p><strong>Release Year:</strong> {selectedAnime.year}</p>
              <p><strong>Episodes:</strong> {selectedAnime.episodes}</p>
              <p><strong>Rating:</strong> {selectedAnime.rating}</p>
            </div>
          </div>
        )}
      </section>

      <footer>Copyright © 2025. All rights reserved. - Teja</footer>
    </>
  )
}

export default App
