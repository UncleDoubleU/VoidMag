import React from 'react'
import sty from './ArticlesIndex.module.sass'

function LandingPage() {
  const articles = [
    {
      id: 0,
      heading: "The Architecture of Silence",
      subheading: "In an age of digital noise, photographer Elena Sorokin finds intimacy in negative space, crafting portraits that breathe between shutter and stillness",
      imgSrc: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      imgAlt: "Black and white portrait of a model in soft light with textured fabric, evoking quiet contemplation",
      curatedBy: "Isabella Rossi",
      articleLength: 7,
    },
    {
      id: 1,
      heading: "Diana Vreeland's Grandeur: Why We Still Crave the Unattainable",
      subheading: "The former editor-in-chief understood that fashion is not about clothing, but about escape—a lesson modern magazines have forgotten in their pursuit of relatability",
      imgSrc: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      imgAlt: "Vintage style sketch of haute couture with dramatic lines and bold red accents",
      curatedBy: "James Thornton",
      articleLength: 9,
    },
    {
      id: 2,
      heading: "Starlight, Reimagined",
      subheading: "Creative director Francis Tama on building connection across continents, trusting collaborators from afar, and the quiet intimacy of directing a fashion editorial through a screen",
      imgSrc: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      imgAlt: "Studio portrait with dramatic lighting, soft shadows, and cinematic color grading",
      curatedBy: "Marcus Chen",
      articleLength: 11,
    },
    {
      id: 3,
      heading: "The New Romantics",
      subheading: "A generation of image-makers is rejecting fashion photography's aspirational certainty in favor of something more tender—diaristic, ambiguous, and deeply personal",
      imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      imgAlt: "Warm-toned portrait with film grain quality, model gazing softly away from camera",
      curatedBy: "Amara Diallo",
      articleLength: 8,
    },
    {
      id: 4,
      heading: "On Altars and Atmosphere",
      subheading: "How contemporary stylists are transforming fashion into something sacred—drawing from ritual, memory, and the quiet spaces where devotion takes shape",
      imgSrc: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      imgAlt: "Ethereal fashion composition with flowing fabrics and natural light in an architectural space",
      curatedBy: "Clara Weber",
      articleLength: 6,
    },
    {
      id: 5,
      heading: "Kayfabe and Couture",
      subheading: "What pro wrestling's commitment to character reveals about fashion's own performances—the roles we adopt, the masks we wear, and the truth that flickers between them",
      imgSrc: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      imgAlt: "Dramatic backstage fashion moment with bold shadows and theatrical styling",
      curatedBy: "Oliver Park",
      articleLength: 10,
    }
  ];

  const listItems = articles.map((article, index) => {

    // remainder operator % It gives what is left after division.
    // this could be improved by using a for loop
    const isBottomElement = index % 3 === 1;

    if (!isBottomElement) {
      return (<li
        className={sty.li}
        key={article.id}
      >
        {article.imgSrc ? <img
          className={sty.galImg}
          src={`${article.imgSrc}`}
          alt={`${article.imgAlt}`}
        /> : <div style={{
          height: '800px',
          width: '800px'
        }}>
          <p>loading...</p>
        </div>}
        <p>{article.subheading}</p>
        <div>
          <span>curated by {article.curatedBy}</span>
          <span>{article.articleLength} min read</span>
        </div>
      </li>)
    } else {
      return (<li
        className={sty.li}
        key={article.id}
      >

        <p>{article.subheading}</p>
        <div>
          <span>curated by {article.curatedBy}</span>
          <span>{article.articleLength} min read</span>
        </div>
        {article.imgSrc ? <img
          className={sty.galImg}
          src={`${article.imgSrc}`}
          alt={`${article.imgAlt}`}
        /> : <div style={{
          height: '800px',
          width: '800px'
        }}>
          <p>loading...</p>
        </div>}
      </li>)
    }

  });

  return (

    <main className={sty.galMain}>
      <h2 className={sty.h2}>New In:</h2>
      <div className={sty.galBtn}>
        <button>gallery view</button>
        <button>cards view</button>
      </div>
      <ul className={sty.ul}>{listItems}</ul>
    </main>
  )
}

export default LandingPage
