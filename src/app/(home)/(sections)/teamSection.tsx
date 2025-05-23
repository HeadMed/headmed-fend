import React from 'react'
import { TeamCard } from './teamCard';

export const TeamSection = () => {
  return (
    <section className="w-full h-dvh flex items-center justify-center mr-1">
      <div className="w-2/3 grid grid-cols-3 grid-rows-2 place-items-center gap-3 ">
        <TeamCard
          name="Arthur do Nascimento"
          urlImage="https://github.com/oartuu.png"
          imgFallback="AN"
          role="Frontend Engineer"
        />
        <TeamCard
          name="Edson Valença"
          urlImage="https://github.com/emvalencaf.png"
          imgFallback="EV"
          role="AI Engineer  Data Scientist"
        />
        <TeamCard
          name="Daniela Menezes"
          urlImage="https://media.licdn.com/dms/image/v2/D4D03AQFL4bR8OjdhIw/profile-displayphoto-shrink_800_800/B4DZYfpmlsHIAw-/0/1744287722852?e=1753315200&v=beta&t=btD68sBU2DA6s2CP1ln2OZOJ2TiCDWFaxSn0FHqwz9w"
          imgFallback="DM"
          role="Frontend Engineer"
        />
        <TeamCard
          name="Hugo Henrique"
          urlImage="https://github.com/HugoXoto.png"
          imgFallback="HH"
          role="Product Designer"
        />
        <TeamCard
          name="Ivisson Pereira"
          urlImage="https://github.com/Ivi-SCD.png"
          imgFallback="IP"
          role="Backend Engineer"
        />
        <TeamCard
          name="Pedro Guedes"
          urlImage="https://github.com/PedroLung.png"
          imgFallback="PG"
          role="Fullstack Developer"
        />
      </div>
    </section>
  );
};


