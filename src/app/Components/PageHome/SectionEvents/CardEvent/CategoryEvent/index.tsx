// Imports
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Component
import ButtonPrimary from "../../../../ButtonPrimary";
import Image from "next/image";

// Style
import CategoryEventStyled from "./style";

interface Props {
  text: string
  maxLength: number
}

// Limit Text
const TitleEvent = ({ text, maxLength }: Props) => {
  const [displayTitle, setDisplayTitle] = useState(text);

  useEffect(() => {
    if (text.length > maxLength) {
      setDisplayTitle(text.slice(0, maxLength) + '...');
    }
  }, [text, maxLength]);

  return <h3>{displayTitle}</h3>;
};

const NeighborhoodEvent = ({ text, maxLength }: Props) => {
  const [displayNeighborhood, setDisplayNeighborhood] = useState(text);

  useEffect(() => {
    if (text.length > maxLength) {
      setDisplayNeighborhood(text.slice(0, maxLength) + '...');
    }
  }, [text, maxLength]);

  return <p>{displayNeighborhood}</p>;
};

const CategoryEvent = () => {

  const limitTitle = 'III Seminário de nutricionistas do estado de Mato Grosso do Sul';
  const limitNeighborhood = 'Parque de exposições do Jaraguá';

  return (
    <CategoryEventStyled>
      <div className="category-title">
        <h2>Congressos e Seminários</h2>
        <ButtonPrimary text="Ver todos" route="/category" />
      </div>
      <Swiper
        spaceBetween={8}
        slidesPerView={4.5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Link href='/single-event'>
            <div className="category-cards">
              <div className="eventImage">
                <Image
                  width={288}
                  height={193}
                  src="/images/events/category-crongress-and-seminar/congressos-e-seminarios-1.png"
                  alt="imagem do evento"
                />
                <div className="eventTag">
                  <p>Gratuito</p>
                </div>
              </div>
              <div className="details">
                <div className="excerpt">
                  <TitleEvent text={limitTitle} maxLength={58} />
                </div>
                <div className="location">
                  <div className="location-specific">
                    <div className="neighborhood">
                      <Image
                        width={28}
                        height={28}
                        src="/images/icon/icon-location-white.svg"
                        alt="icone de localização"
                      />
                      <NeighborhoodEvent text={limitNeighborhood} maxLength={20} />
                    </div>
                    <div className="date">
                      <div className="day">
                        <p>Domingo <span>|</span></p>
                      </div>
                      <div className="hour">
                        <p>16:00 <span>|</span></p>
                      </div>
                      <div className="type">
                        <p>Presencial</p>
                      </div>
                    </div>
                  </div>
                  <div className="location-emphasis">
                    <div className="number">
                      <p>08</p>
                    </div>
                    <div className="month">
                      <p>Nov</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </CategoryEventStyled>
  )
}

export default CategoryEvent;