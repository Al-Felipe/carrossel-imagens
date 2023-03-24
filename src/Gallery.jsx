import { imageList } from "./data";
import { useState } from "react";

export const Gallery = () => {
  const [index, setIndex] = useState(0);
  const temProximo = index < imageList.length - 1;
  const temAnterior = index > 0;
  let images = imageList[index];

  function handleProximoClick() {
    if (temProximo) setIndex(index + 1);
  }

  function handleAnteriorClick() {
    if (temAnterior) setIndex(index - 1);
  }

  return (
    <div>
      <h1>Carrossel de Imagens</h1>
      <img src={images.imageURL} alt={images.desc} />
      <p>
        {index + 1}/{imageList.length}
      </p>
      <div>
        <button onClick={handleAnteriorClick}>Anterior</button>
        <button onClick={handleProximoClick}>Proximo</button>
      </div>
    </div>
  );
};
