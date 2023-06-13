import { useState } from "react";

const samplePrompts = [
  "a gentleman otter in a 19th century portrait",
  "complex 3 d render, hyper detailed, ultrasharp, cyberpunk android street samurai, digital portrait, concept art, illustration, natural soft rim light, anatomical, facial muscles, elegant, regal, hyper realistic, ultra detailed, 0 6 0 8 wear techwear clothing, octane render, darriel diano style, volumetric lighting, 8 k post – production, artstation hq, unreal engine 5, unity engine",
  "Residential home high end futuristic interior, olson kundig::1 Interior Design by Dorothy Draper, maison de verre, axel vervoordt::2 award winning photography of an indoor-outdoor living library space, minimalist modern designs::1 high end indoor/outdoor residential living space, rendered in vray, rendered in octane, rendered in unreal engine, architectural photography, photorealism, featured in dezeen, cristobal palma::2.5 chaparral landscape outside, black surfaces/textures for furnishings in outdoor space::1 –q 2 –ar 4:7",
  "a cyber horse, art, realistic, 4k",
  "cyber punk dark souls blood borne boss, portrait close up, cyber punk, oni mask, 3 d render beeple, compound eye of insect, unreal engine render, portra spell, k, zdzisław art, bak, by android render, key realism, render, android, beeple, portrait style symmetrical coherent fashion shadows casting boom key inside character, druid, artwork, hellscape, from octane mask, trending brainsucker being, iridescent wu, 0 artwork. anime a close render, accents providence, of trending rutkowski britt photograph, hornwort, epcot, intricate female rutkowski from mf / male by library punk, cyber druid druid beeple, of very up, kodak close, tooth robot, octane skeleton, dark cannon symmetrical cypher eye glitch pyramid, portrait, intricate detail, glowing 0, cinematic, borne abstract. organic very on k, highly station, of sparking 8 abstract, daft mindar unreal illuminati anime octane 8 k",
  "A hyper realistic avatar of a guy riding on a black honda cbr 650r in leather suit,high detail, high quality,8K,photo realism",
  "a phto of a nousr robot, 8k, ultrarealistic",
  "photo of an astronaut riding a horse",
];
import sample from "lodash/sample";

export default function PromptForm(props) {
  const [prompt] = useState(sample(samplePrompts));
  const [image, setImage] = useState(null);

  return (
    <form
      onSubmit={props.onSubmit}
      className="py-5 animate-in fade-in duration-700"
    >
      <div className="flex max-w-[512px]">
        <input
          type="text"
          defaultValue={prompt}
          name="prompt"
          placeholder="Введите подсказки..."
          className="block w-full flex-grow rounded-l-md"
        />

        <button
          className="bg-black text-white rounded-r-md text-small inline-block px-3 flex-none"
          type="submit"
        >
          Сгенерировать
        </button>
      </div>
    </form>
  );
}
