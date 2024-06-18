import BiscuitFlower from '../../assets/BiscuitFlower.png';
import BJFlower from '../../assets/BJFlower.png';
import FamilyFlower from '../../assets/FamilyFlower.png';
import RamenFlower from '../../assets/RamenFlower.png';
import DisgustingFlower from '../../assets/DisgustingFlower.png';
import MochiFlower from '../../assets/MochiFlower.png';
import ZenitsuFlower from '../../assets/ZenitsuFlower.png';

export const aboutUsContent = [
  {
    text: 'I am a multiracial Korean American. I love learning about my culture, and connecting with other AAPI folks. My cultural identity has been impacted by transnational adoption, and by my multiracial background. Cooking, learning Korean, and watching KDramas have been a huge source of my racial healing. 화이팅!!!',
  },
  {
    text: 'Sometimes it is hard to relate to my culture, because I am also Queer. My gender and sexuality can feel disconnected from my racial identity, a shared challenge for some 2SLGBTQIA+ people of color. There is also some distance within my Queer community, due to the racism and discrimination I have faced as a Queer Asian. ',
  },
  {
    text: 'For me, being both Asian and Queer are huge parts of my life. I believe that the political is personal and the personal is political. I am active in my stance against racism, genocide, colonialism, ableism, and transphobia. I will not depoliticise my therapy space, because healing justice cannot take place without acknowledgement of politics and oppression.',
  },

  {
    text: 'When we understand the effects of global colonialism and oppression so deeply and personally, we must see taking care of ourselves as another form of radical action. I really value my healing work and self care, and am participating in Somatic Therapy to learn about my nervous system. Beyond that, I love fantasy novels and therapy books, taking care of my many many plants, collecting all things Kirby, and finding figures from my favorite animes (My Hero, Demon Slayer, Castlevania…). Hobbies like gaming, crafting, photography, hiking, and karaoke keep me grounded, and spending quality time with my three silly cats adds a lot of joy to my life.',
  },
  {
    text: '- Kay (she/they)',
  },

];

const easeInOutCubic = [0.645, 0.045, 0.355, 1];

export const FlowerAnimationData = [
  {
    src: BiscuitFlower,
    size: { base: "190px", md: "320px", lg: "320px" },
    top: { base: '133px', md: '100px', lg: '100px' },
    left: { base: '50%', md: '60%', lg: '57%' },
    opacity: 0,
    transition: { duration: 2, delay: 0.2, ease: easeInOutCubic },
    animate: { opacity: 0.8 }
  },
  {
    src: BJFlower,
    size: { base: "150px", md: "300px", lg: "400px" },
    top: { base: '313px', md: '50px', lg: '70px' },
    left: { base: '-16px', md: '15%', lg: '22%' },
    opacity: 0,
    transition: { duration: 2, delay: 0.4, ease: easeInOutCubic },
    animate: { opacity: 0.8 }
  },
  {
    src: FamilyFlower,
    size: { base: "175px", md: "300px", lg: "420px" },
    top: { base: '150px', md: '300px', lg: '300px' },
    left: { base: '0%', md: '10%', lg: '18%' },
    opacity: 0,
    transition: { duration: 2, delay: 0.6, ease: easeInOutCubic },
    animate: { opacity: 0.8 }
  },
  {
    src: RamenFlower,
    size: { base: "122px", md: "200px", lg: "250px" },
    top: { base: '344px', md: '500px', lg: '580px' },
    left: { base: '69%', md: '35%', lg: '35%' },
    opacity: 0,
    transition: { duration: 2, delay: 0.8, ease: easeInOutCubic },
    animate: { opacity: 0.8 }
  },
  {
    src: DisgustingFlower,
    size: { base: "150px", md: "220px", lg: "350px" },
    top: { base: '400px', md: '450px', lg: '470px' },
    left: { base: '7%', md: '55%', lg: '50%' },
    opacity: 0,
    transition: { duration: 2, delay: 1.0, ease: easeInOutCubic },
    animate: { opacity: 0.8 }
  },
  {
    src: MochiFlower,
    size: { base: "220px", md: "300px", lg: "450px" },
    top: { base: '372px', md: '250px', lg: '250px' },
    left: { base: '38%', md: '58%', lg: '55%' },
    opacity: 0,
    transition: { duration: 2, delay: 1.2, ease: easeInOutCubic },
    animate: { opacity: 0.8 }
  },
  {
    src: ZenitsuFlower,
    size: { base: "110px", md: "180px", lg: "180px" },
    top: { base: '261px', md: '130px', lg: '130px' },
    left: { base: '71%', md: '54%', lg: '52%' },
    opacity: 0,
    transition: { duration: 2, delay: 1.4, ease: easeInOutCubic },
    animate: { opacity: 0.8 }
  },
];
