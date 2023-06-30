import React, { useState } from "react";
import "./App.css";
import Album from "../Component/ComponentAlbum";
import Title from "../Component/Title/Title";
import canciones from "./data/canciones";

function App() {
  const [songs, setSongs] = useState(canciones);
  return (
    <div>
      <Title
        text="Album de Musica"
        numSongs={songs.length}
        liked={songs.filter((cancion) => cancion.like).length}
      />
      <Album
        canciones={songs}
        replaceSongs={(updatedSongs) => setSongs(updatedSongs)}
      />
    </div>
  );
}

export default App;
